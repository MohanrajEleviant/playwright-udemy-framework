import {Page, Locator} from "@playwright/test";

export class CartPage{

    // Define variables
    private readonly page:Page;
    private readonly productListFromCart:Locator;

    // Constructor - Constructor will be initialized automatically as soon as the object is created
    constructor(page:Page){
        this.page=page;
        this.productListFromCart=this.page.locator('tbody#tbodyid tr td:nth-child(2)');
    }

    // Action methods

    /* Method to check whether the specified product is present in the cart */
    async verifyProductFromCart(productName:string){
        await this.productListFromCart.first().waitFor();
        const productElements = await this.productListFromCart.count();

        for (let j=0;j<=productElements;j++){
            const product=this.productListFromCart.nth(j);
            const name:any = (await product.textContent())?.trim();
            console.log("Product Name: ", name);

            if (name === productName){
                return true;
            }
        }
        return false;
    }



}

