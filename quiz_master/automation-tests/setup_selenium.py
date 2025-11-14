#!/usr/bin/env python3
"""
Selenium WebDriver Setup and Configuration
Install required packages and configure ChromeDriver
"""

import subprocess
import sys
import os
from pathlib import Path

def install_dependencies():
    """Install required Python packages"""
    print("Installing Python dependencies...")
    packages = [
        'selenium>=4.0.0',
        'webdriver-manager'
    ]
    
    for package in packages:
        subprocess.check_call([sys.executable, '-m', 'pip', 'install', package])
    
    print("✓ Python dependencies installed")

def setup_chromedriver():
    """Download and setup ChromeDriver"""
    print("\nSetting up ChromeDriver...")
    try:
        from webdriver_manager.chrome import ChromeDriverManager
        from selenium import webdriver
        
        driver_path = ChromeDriverManager().install()
        print(f"✓ ChromeDriver downloaded to: {driver_path}")
        return driver_path
    except Exception as e:
        print(f"✗ Failed to setup ChromeDriver: {e}")
        return None

def verify_setup():
    """Verify Selenium setup"""
    print("\nVerifying Selenium setup...")
    try:
        from selenium import webdriver
        from webdriver_manager.chrome import ChromeDriverManager
        
        options = webdriver.ChromeOptions()
        options.add_argument('--headless')
        
        driver = webdriver.Chrome(
            service=webdriver.chrome.service.Service(ChromeDriverManager().install()),
            options=options
        )
        
        print("✓ ChromeDriver test successful")
        driver.quit()
        return True
    except Exception as e:
        print(f"✗ ChromeDriver test failed: {e}")
        return False

def create_directories():
    """Create necessary directories"""
    directories = [
        'screenshots',
        'logs',
        'reports'
    ]
    
    for directory in directories:
        Path(directory).mkdir(exist_ok=True)
        print(f"✓ Created directory: {directory}")

def main():
    print("=== Selenium Setup for Quiz Automation ===\n")
    
    install_dependencies()
    setup_chromedriver()
    create_directories()
    
    if verify_setup():
        print("\n✓ Selenium setup completed successfully!")
        print("You can now run the Java automation tests.")
    else:
        print("\n✗ Selenium setup verification failed.")

if __name__ == '__main__':
    main()
