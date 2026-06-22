import {Page,expect,Locator} from '@playwright/test';

export class HomePage{
    //locators
    private readonly page:Page;
    private readonly register:Locator;
    private readonly registerOption:Locator ; 


    //constructor
    constructor(page:Page){
        this.page=page;
        this.register=this.page.locator('.btn.btn-black.navbar-btn');
        this.registerOption=this.page.locator('.btn.btn-black.navbar-btn');
        
    }

   //Actions
   async homepageexists():Promise<boolean>{
    const title:string = await this.page.title();
    return !!title;
   }

}