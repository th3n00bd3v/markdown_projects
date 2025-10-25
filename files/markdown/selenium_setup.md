# Selenium Setup.md

To install and configure Selenium on Ubuntu, you need to:

1. **Install Python**
2. **Install Selenium**
3. **Install a WebDriver (e.g., ChromeDriver or GeckoDriver)**
4. **Write a simple test script**

---

## ✅ Step-by-Step Guide

### 1. **Install Python and pip (if not already installed)**

```bash
sudo apt update
sudo apt install python3 python3-pip -y
```

---

### 2. **Install Selenium**

```bash
pip3 install selenium
```

---

### 3. **Install Web Browser and WebDriver**

#### Option A: **Google Chrome + ChromeDriver**

1. **Install Google Chrome**

```bash
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt install ./google-chrome-stable_current_amd64.deb
```

2. **Install ChromeDriver**

Check your Chrome version:

```bash
google-chrome --version
```

Then install the matching ChromeDriver version:

```bash
# Replace 123 with your major Chrome version
CHROME_VERSION=$(google-chrome --version | grep -oP '\d+' | head -1)
wget https://chromedriver.storage.googleapis.com/$(curl -sS https://chromedriver.storage.googleapis.com/LATEST_RELEASE_$CHROME_VERSION)/chromedriver_linux64.zip
unzip chromedriver_linux64.zip
sudo mv chromedriver /usr/local/bin/
chmod +x /usr/local/bin/chromedriver
```

#### Option B: **Firefox + GeckoDriver**

```bash
sudo apt install firefox -y
sudo apt install wget tar -y
wget https://github.com/mozilla/geckodriver/releases/latest/download/geckodriver-linux64.tar.gz
tar -xvzf geckodriver-linux64.tar.gz
sudo mv geckodriver /usr/local/bin/
chmod +x /usr/local/bin/geckodriver
```

---

### 4. **Test Selenium Script**

#### Chrome Example:

```python
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("https://www.google.com")
print("Title:", driver.title)
driver.quit()
```

#### Firefox Example:

```python
from selenium import webdriver
from selenium.webdriver.firefox.service import Service
from selenium.webdriver.common.by import By

driver = webdriver.Firefox()
driver.get("https://www.google.com")
print("Title:", driver.title)
driver.quit()
```

---

### ✅ Troubleshooting Tips

* Make sure `chromedriver` or `geckodriver` is in your `PATH`.
* Use `webdriver-manager` for automatic driver updates:

```bash
pip install webdriver-manager
```

```python
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(ChromeDriverManager().install())
```

---

Let me know if you want to set it up in a virtual environment or use headless mode (no GUI).
