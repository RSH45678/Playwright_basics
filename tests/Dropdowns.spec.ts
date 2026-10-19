import {test,expect} from '@playwright/test'

// test('Static Dropdowns',async({page})=>{

//     //select country
//     await page.goto("https://www.playwrightautomation.com/practice.html#section-dropdowns")
//     // const countryDropdown = page.locator('#country');

//     // await expect(countryDropdown).toBeVisible();

//     // await countryDropdown.selectOption({ label: 'Germany' });
//     // await expect(countryDropdown).toHaveValue('germany');

//     //Sorted Animals
//     const animals_list= await page.locator("#sorted-list").allTextContents()

//     console.log(animals_list)
// })

// test('Bootstrap dropdown', async({page})=>{
//     page.goto("https://www.playwrightautomation.com/practice.html#section-bootstrap-dropdown")
//     // Verify the selected value is initially empty
//     await expect(page.locator('#bd-selected-value')).toHaveText('—')
//     await page.locator('div.bd-select-trigger').click()
//     const jobList=page.locator("//div[@class='bd-select-trigger']/following-sibling::ul")
//     await expect(jobList).toBeVisible()
//     const jobListNames=await jobList.allTextContents()
//     //This will remove any whitespace and print all job names on a single line
//    // console.log(jobListNames.map(name => name.trim()).join(', '));
//     //This will print job names on a separate line without the array formatting
//     console.log(jobListNames.join('\n'))
//     await page.locator("//div[@class='bd-select-trigger']/following-sibling::ul//li[3]").click()
//    // await page.waitForTimeout(3000);
//    await expect(page.locator('#bd-selected-value')).toHaveText('QA Lead')
// })

// test('Auto Suggestive Dropdown',async({page})=>{
//     await page.goto("https://www.playwrightautomation.com/practice.html#section-dropdowns")
//     await page.getByPlaceholder("Search for Products").fill("sm")
//     await expect(page.locator("#as-results")).toBeVisible()
//     await expect(page.locator("#as-results li",{hasText: "Smart TV"})).toBeVisible()
    
//     await page.getByPlaceholder("Search for Products").fill("lap")
//     await expect(page.locator("#as-results")).toBeVisible()
//     await expect(page.locator("#as-results li",{hasText: "Laptop Cooling Pad"})).toBeVisible()
// })

// test('Searchable Custom Dropdown',async({page})=>{
//     await page.goto("https://www.playwrightautomation.com/practice.html#section-dropdowns")
//     await expect(page.locator("#sd-selected-display")).toHaveText("None")
//     await page.locator("#sd-display").click()
//     await page.keyboard.press("Escape") //here "Esc" will not work you have to type "Escape"
//     await page.locator("#sd-display").click()
//     await expect(page.locator("#sd-menu")).toBeVisible()
//     //await expect(page.getByRole("option", { name: "Playwright Java" })).toBeVisible();
//     await expect(page.locator(".sd-option").filter({ hasText: "Playwright Java" })).toBeVisible();
//     await page.keyboard.press("ArrowDown");
//     await page.keyboard.press("ArrowDown");
//     await page.keyboard.press("ArrowDown");
//     await page.keyboard.press("ArrowDown");
//     await page.keyboard.press("Enter");
//     await expect(page.locator("#sd-selected-display")).toHaveText("Playwright Python")    
//     await page.keyboard.press("Backspace")
//     await expect(page.locator("#sd-selected-display")).toHaveText("None")
// })

test('Dynamic Dependent Dropdown',async({page})=>{
    await page.goto("https://www.playwrightautomation.com/practice.html#section-dependent-dropdown")
    const country=page.locator('//select[@id="dep-country"]')
    const state=page.getByLabel("State")
    const city=page.getByLabel("City")
    //verifying initial state like enabled/disabled
    await expect(country).toBeEnabled()
    await expect(state).toBeDisabled()
    await expect(city).toBeDisabled()
    // Select Country and verify State
    await country.selectOption({label:"USA"})
    await expect(state).toBeEnabled()
    //After selecting USA, this assertion checks that New York option, is not empty.
    await expect(state.locator('option').nth(1)).not.toHaveText('');
    await expect(page.locator("#dep-selected-display")).toHaveText("USA")

    // Select State and verify City
    await state.selectOption({ label: 'New York' });
    await expect(city).toBeEnabled();
    await expect(city.locator('option').nth(1)).not.toHaveText('');
    await expect(page.locator("#dep-selected-display")).toHaveText("USA → New York")

      // Select City
    await city.selectOption({ label: 'Albany' });
    await expect(page.locator("#dep-selected-display")).toHaveText("USA → New York → Albany")

    // Verify selected values
    await expect(country).toHaveValue('usa');
    await expect(state).toHaveValue('new-york');
    await expect(city).toHaveValue('albany');
})
