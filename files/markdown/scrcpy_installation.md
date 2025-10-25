# scrcpy - Installation steps

Follow these steps to connect your device over TCP/IP and use **scrcpy** for wireless screen mirroring and control.

***

## 📱 Common Steps (All Platforms)

1. **Connect device via USB.**
2. **Enable USB debugging on your device:**
    - Go to **Settings > Developer options > USB debugging** and enable it.
3. **Find device IP address:**
    - Go to **Settings > About phone > Status > IP address**.

***

## 🐧 Linux / Ubuntu

**Prerequisites**

Install ADB and scrcpy:

```bash
sudo apt update
sudo apt install adb scrcpy -y
```

**Steps**

4. **Enable TCP/IP debugging:**

```bash
adb tcpip 5555
```

5. **Connect to the device via Wi-Fi:**

```bash
adb connect <device_ip>:5555
```

Replace `<device_ip>` with your device's actual IP address (e.g., `192.168.1.100`).
6. **Disconnect USB cable from your device.**
7. **Run scrcpy to start screen mirroring:**

```bash
scrcpy
```


***

## 🪟 Windows

**Prerequisites**

- **ADB (Android SDK Platform Tools):** [Download here](https://developer.android.com/tools/releases/platform-tools)
- **scrcpy:** [Download the Windows zip](https://github.com/Genymobile/scrcpy/releases) or install via:

```powershell
winget install Genymobile.scrcpy
```

or

```powershell
choco install scrcpy
```


Make sure `adb.exe` and `scrcpy.exe` are added to your system PATH, or navigate to their installation directories in Command Prompt/PowerShell.

**Steps**

4. **Enable TCP/IP debugging:**

Open **Command Prompt** or **PowerShell** and run:

```powershell
adb tcpip 5555
```

5. **Connect to the device via Wi-Fi:**

```powershell
adb connect <device_ip>:5555
```

Replace `<device_ip>` with your device's actual IP address (e.g., `192.168.1.100`).
6. **Disconnect USB cable from your device.**
7. **Run scrcpy to start screen mirroring:**

```powershell
scrcpy
```


***

## ✅ Verification

Your device should now be connected via Wi-Fi, and you can control it wirelessly with **scrcpy**.
To verify the connection, run:

```bash
adb devices
```

You should see your device's IP address listed with `device` status.

***

## 🔧 Troubleshooting

- Ensure both your PC and Android device are on the **same Wi-Fi network**.
- If connection fails, restart ADB:

```bash
adb kill-server
adb start-server
```

- Check firewall settings—port `5555` should be open.
- If scrcpy doesn't start, verify installation and PATH configuration.

---
