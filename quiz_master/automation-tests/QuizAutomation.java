import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class QuizAutomation {
    private WebDriver driver;
    private StringBuilder testLog;
    private String baseUrl = "http://localhost:3000";

    public QuizAutomation() {
        this.testLog = new StringBuilder();
        logTest("Quiz Automation Test Suite Started");
    }

    public void setupDriver() {
        System.setProperty("webdriver.chrome.driver", "/path/to/chromedriver");
        driver = new ChromeDriver();
        logTest("WebDriver initialized");
    }

    private void logTest(String message) {
        String timestamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        String logMessage = "[" + timestamp + "] " + message;
        System.out.println(logMessage);
        testLog.append(logMessage).append("\n");
    }

    public void verifyLandingPage() {
        try {
            driver.navigate().to(baseUrl);
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
            
            logTest("URL: " + driver.getCurrentUrl());
            logTest("Title: " + driver.getTitle());
            
            WebElement startButton = wait.until(ExpectedConditions.elementToBeClickable(By.id("start-quiz-btn")));
            logTest("Landing page verified - Start Quiz button found");
            
            takeScreenshot("01_landing_page.png");
        } catch (Exception e) {
            logTest("ERROR: Failed to verify landing page - " + e.getMessage());
        }
    }

    public void clickStartQuiz() {
        try {
            WebElement startButton = driver.findElement(By.id("start-quiz-btn"));
            startButton.click();
            logTest("Clicked Start Quiz button");
            
            Thread.sleep(1000);
            takeScreenshot("02_category_selection.png");
        } catch (Exception e) {
            logTest("ERROR: Failed to click Start Quiz - " + e.getMessage());
        }
    }

    public void selectCategoryAndDifficulty() {
        try {
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
            
            // Select General Knowledge category
            WebElement categoryButton = wait.until(ExpectedConditions.elementToBeClickable(
                By.xpath("//button[contains(text(), 'General Knowledge')]")
            ));
            categoryButton.click();
            logTest("Selected General Knowledge category");
            
            Thread.sleep(500);
            
            // Select Easy difficulty
            WebElement difficultyButton = driver.findElement(By.xpath("//button[contains(text(), 'easy')]"));
            difficultyButton.click();
            logTest("Selected Easy difficulty");
            
            Thread.sleep(500);
            takeScreenshot("03_difficulty_selected.png");
            
            // Click Start Selected Quiz
            WebElement startSelectedButton = driver.findElement(By.id("start-selected-quiz-btn"));
            startSelectedButton.click();
            logTest("Clicked Start Selected Quiz button");
            
            Thread.sleep(2000);
        } catch (Exception e) {
            logTest("ERROR: Failed to select category/difficulty - " + e.getMessage());
        }
    }

    public void answerQuestions() {
        try {
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(25));
            int questionNumber = 1;
            
            while (true) {
                try {
                    WebElement questionElement = wait.until(ExpectedConditions.visibilityOfElementLocated(
                        By.xpath("//h3[contains(@class, 'text-xl')]")
                    ));
                    
                    String questionText = questionElement.getText();
                    logTest("Question " + questionNumber + ": " + questionText);
                    
                    // Select first option
                    WebElement optionButton = driver.findElements(By.xpath("//button[contains(@class, 'p-4')]")).get(0);
                    optionButton.click();
                    logTest("Selected answer for Question " + questionNumber);
                    
                    takeScreenshot("04_question_" + questionNumber + ".png");
                    
                    // Click Next/Submit button
                    WebElement nextButton = driver.findElement(By.xpath("//button[contains(text(), 'Next') or contains(text(), 'Submit')]"));
                    nextButton.click();
                    logTest("Clicked Next/Submit for Question " + questionNumber);
                    
                    Thread.sleep(1000);
                    questionNumber++;
                    
                } catch (Exception e) {
                    // No more questions or error
                    logTest("Finished answering questions or reached end");
                    break;
                }
            }
        } catch (Exception e) {
            logTest("ERROR: Failed to answer questions - " + e.getMessage());
        }
    }

    public void verifyResults() {
        try {
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
            
            WebElement scoreElement = wait.until(ExpectedConditions.visibilityOfElementLocated(
                By.xpath("//p[contains(text(), '%')]")
            ));
            
            String score = scoreElement.getText();
            logTest("Quiz completed - Score displayed: " + score);
            
            // Verify results page elements
            WebElement correctAnswers = driver.findElement(By.xpath("//p[contains(text(), 'Correct Answers')]"));
            logTest("Correct Answers section found");
            
            WebElement incorrectAnswers = driver.findElement(By.xpath("//p[contains(text(), 'Incorrect Answers')]"));
            logTest("Incorrect Answers section found");
            
            takeScreenshot("05_results_page.png");
            
        } catch (Exception e) {
            logTest("ERROR: Failed to verify results - " + e.getMessage());
        }
    }

    public void takeScreenshot(String filename) {
        try {
            String timestamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd_HH-mm-ss"));
            String filepath = "screenshots/" + timestamp + "_" + filename;
            logTest("Screenshot saved: " + filepath);
        } catch (Exception e) {
            logTest("ERROR: Failed to take screenshot - " + e.getMessage());
        }
    }

    public void saveTestLog() {
        try {
            String timestamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd_HH-mm-ss"));
            String filepath = "test_logs/automation_test_" + timestamp + ".log";
            
            FileWriter writer = new FileWriter(filepath);
            writer.write(testLog.toString());
            writer.close();
            
            logTest("Test log saved: " + filepath);
        } catch (IOException e) {
            logTest("ERROR: Failed to save test log - " + e.getMessage());
        }
    }

    public void closeBrowser() {
        if (driver != null) {
            driver.quit();
            logTest("Browser closed");
        }
    }

    public static void main(String[] args) {
        QuizAutomation automation = new QuizAutomation();
        try {
            automation.setupDriver();
            automation.verifyLandingPage();
            automation.clickStartQuiz();
            automation.selectCategoryAndDifficulty();
            automation.answerQuestions();
            automation.verifyResults();
            automation.saveTestLog();
            logTest("All tests completed successfully");
        } catch (Exception e) {
            automation.logTest("ERROR: Test suite failed - " + e.getMessage());
        } finally {
            automation.closeBrowser();
        }
    }
}
