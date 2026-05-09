import { Page, Locator } from "@playwright/test";

export class LoginPage {
  // Defining variables
  private readonly page: Page;
  private readonly loginLink: Locator;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  // Constructor - The method will be initializaed automatically, as soon as the object is created
  constructor(page: Page) {
    this.page = page;
    this.loginLink = this.page.getByRole("link", { name: "Log in" });
    this.usernameInput = this.page.locator("#loginusername");
    this.passwordInput = this.page.locator("#loginpassword");
    this.loginButton = this.page.getByRole("button", { name: "Log in" });
  }

  // Action methods
  async clickLoginLink(): Promise<void> {
    this.loginLink.click();
  }

  async enterUserName(username: string): Promise<void> {
    await this.usernameInput.clear();
    await this.usernameInput.fill(username);
  }

  async enterPassword(password: string): Promise<void> {
    await this.passwordInput.clear();
    await this.passwordInput.fill(password);
  }

  async clickLoginButton(): Promise<void> {
    await this.loginButton.click();
  }

  async performLogin(username: string, password: string): Promise<void> {
    await this.clickLoginLink();
    await this.enterUserName(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }
}
