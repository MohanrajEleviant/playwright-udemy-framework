import {test,expect,Page} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";
import { log } from "node:console";

test("Add the product to cart",async({page})=>{
    await page.goto("https://demoblaze.com/");

    // LoginPage
    const loginPage=new LoginPage(page);
    await loginPage.clickLoginLink();
    await loginPage.enterUserName("pavanol");
    await loginPage.enterPassword("test@123");
    await loginPage.clickLoginButton();

    // HomePage
    const homePage=new HomePage(page);
    await page.waitForTimeout(5000);
    await homePage.addProductToCart("Nokia lumia 1520");
    await page.waitForTimeout(2000);
    await homePage.gotoCart();
    await page.waitForTimeout(2000);

    // CartPage
    const cartPage=new CartPage(page);
    const isProductInCart=await cartPage.verifyProductFromCart("Nokia lumia 1520");
    expect(isProductInCart).toBe(true);

})