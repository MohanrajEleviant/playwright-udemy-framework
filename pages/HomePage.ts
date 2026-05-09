import {Page, Locator} from "@playwright/test";

export class HomePage{
    // Defining variables
    private readonly page:Page;
    private readonly productList:Locator;
    // private readonly productListLocators:string;
    private readonly addToCartButton:Locator;
    private readonly cartLink:Locator;

    // Constructor - The method will be initializaed automatically, as soon as the object is created
    constructor(page: Page){
        this.page = page;

        // CSS locator targeting all product links under the product cards
        this.productList=this.page.locator('div#tbodyid div.card div h4.card-title a');
        // this.productListLocators='div#tbodyid div.card div h4.card-title a';
        
        this.addToCartButton=this.page.getByRole('link',{name:'Add to cart'});
        this.cartLink=this.page.locator('#cartur');
    }

    // Action methods

    /* Method to add the specific product to cart */
    async addProductToCart(productName:string): Promise<void>{
        // const productElements = await this.page.locator(this.productListLocators).all();
        await this.productList.first().waitFor();
        const productElements = await this.productList.count();
        console.log("Product: ", productElements)

        for (let i=0;i<=productElements;i++){
            const product = this.productList.nth(i);
            const name = await product.textContent();
            console.log("Product Name: ", name);

            if (name?.trim() === productName){
                await product.click();
                break;
            }
        }

        this.page.on('dialog', async(dialog)=>{
            if (dialog.message().includes('added')){
                await dialog.accept();
            }
        });

        await this.addToCartButton.click();
    }

    /* Method to navigate to the cart */
    async gotoCart(){
        await this.cartLink.click();
    }

}