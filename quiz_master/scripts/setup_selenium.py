#!/usr/bin/env python3
"""
Setup script for Selenium WebDriver
Installs necessary dependencies for Quiz Application automation testing
"""

import subprocess
import sys

def install_packages():
    print("Installing Selenium WebDriver...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "selenium"])
    
    print("Installing WebDriver Manager...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "webdriver-manager"])
    
    print("All packages installed successfully!")

if __name__ == "__main__":
    install_packages()
