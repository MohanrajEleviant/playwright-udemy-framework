# 🎭 Playwright Test Automation Framework

This project is a **Playwright-based end-to-end test automation framework** built using **TypeScript**, supporting **data-driven testing**, **Allure reporting**, and scalable test design.

---

## 🚀 Features

* ✅ Cross-browser testing (Chromium, Firefox, WebKit)
* ✅ TypeScript support with strong typing
* ✅ Data-driven testing using CSV
* ✅ Built-in Playwright locators (`getByRole`, `getByLabel`, etc.)
* ✅ Allure reporting integration
* ✅ Parallel execution support
* ✅ Screenshot & video capture on failure
* ✅ Clean and scalable project structure

---

## 📁 Project Structure

```
.
├── tests/                 # All test files
├── pages/                 # Page Object Model classes
├── utils/                 # Utility functions
├── data/                  # Test data files (CSV, JSON)
├── reports/               # Generate Test reports
├── test.config.ts/        # Test configuration values
├── playwright.config.ts   # Playwright main configuration
├── tsconfig.json          # TypeScript configuration
├── package.json
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <project-folder>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

---

## ▶️ Running Tests

### Run all tests

```bash
npx playwright test
```

### Run in headed mode

```bash
npx playwright test --headed
```

### Run specific test file

```bash
npx playwright test tests/login.spec.ts
```

### Run tests with tag

```bash
npx playwright test --grep @sanity
```

---

## 📊 Allure Report Setup

### Install dependencies

```bash
npm install -D allure-playwright
npm install -g allure-commandline
```

### Configure reporter (playwright.config.ts)

```ts
reporter: [
  ['list'],
  ['allure-playwright']
]
```

### Run tests

```bash
npx playwright test
```

### Generate and view report

```bash
allure serve ./allure-results
```

---

## 📄 Data-Driven Testing (CSV)

Test data is stored in CSV format inside the `testData/` folder.

Example:

```csv
email,password,validity
user1@test.com,pass123,valid
user2@test.com,wrongpass,invalid
```

Usage in test:

```ts
type LoginData = {
  email: string;
  password: string;
  validity: 'valid' | 'invalid';
};
```

---

## 🧪 Example Test

```ts
test('Login Test', async ({ page }) => {
  await page.goto('https://example.com');

  await page.getByLabel('Email').fill('user@test.com');
  await page.getByLabel('Password').fill('password');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL('/dashboard');
});
```

---

## 📸 Debugging

### Run with UI mode

```bash
npx playwright test --ui
```

### Pause execution

```ts
await page.pause();
```

---

## ⚡ Best Practices Followed

* Prefer `getByRole` over CSS/XPath
* Avoid hard waits (`waitForTimeout`)
* Use assertions with auto-wait (`toHaveCount`, `toBeVisible`)
* Maintain reusable utilities
* Strong typing using TypeScript

---

## 🛠️ Tech Stack

* Playwright
* TypeScript
* Node.js
* Allure Reports
* CSV Parser

---

## 🤝 Contribution

Feel free to fork and enhance this framework.

---

## 📌 Author

Automation Engineer | Playwright | Selenium | API Testing

---