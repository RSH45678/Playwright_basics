import { test,expect} from '@playwright/test'

 

test('Login Test for valid data', async({page})=>{

    // const browser = await chromium.launch()

    // const context = await browser.newContext()

    // const tab = await context.newPage()

 

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

 await page.locator("input[name='username']").fill("Admin")

 await page.locator("input[name='password']").fill("admin123")

 await page.locator('button[type="submit"]').click()
 await expect(page).toHaveURL(/dashboard/)
 //await expect(page.url()).toContain("dashboard")
 await page.locator('//span[text()="PIM"]').click()
})