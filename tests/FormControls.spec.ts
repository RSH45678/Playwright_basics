import {test, expect} from '@playwright/test'

// test('Text Area testing',async({page})=>{

//    await page.goto('https://www.playwrightautomation.com/practice.html')
//    await page.locator('//a[text()="Text Inputs"]').click()
//    await page.locator('input[placeholder="Enter your name"]').fill("Anvika")
//    await page.locator('input[data-testid="input-email"]').fill("abc@gmail.com")
//    await page.locator('textarea#address').fill("Mumbai")
//    await page.locator('#btn-submit-text-inputs').click();

//    await expect(page.getByText('submitted')).toBeVisible();
//      await page.locator('#btn-reset-text-inputs').click()
// })

// test('Radio button testing',async({page})=>{

//    await page.goto('https://www.playwrightautomation.com/practice.html')
//    await page.locator('a[href="#section-radios"]').click()
//    const radio_btn=page.locator('input[id="gender-female"]')
//    await radio_btn.check()
//    await expect(radio_btn).toBeChecked()
// })

// test('Checkbox testing',async({page})=>{

//    await page.goto('https://www.playwrightautomation.com/practice.html')
//    await page.locator('a[href="#section-checkboxes"]').click()
//    //await page.locator('input[name="days-select-all"]').click()
//    await page.locator('input[id="day-monday"]').click()
//    await page.locator('input[id="day-wednesday"]').click()
//    await page.locator('input[id="day-wednesday"]').check()
//    await page.locator('input[id="day-wednesday"]').uncheck()
// })

// test('Toggle switches',async({page})=>{

//    await page.goto('https://www.playwrightautomation.com/practice.html#section-toggles')
//    await page.locator('#toggle-email-alerts').uncheck()
//    await page.locator('//input[@name="toggle-autosave"]').click()
// })

// test('Multi options Select',async({page})=>
// {
//    await page.goto('https://www.playwrightautomation.com/practice.html#section-multiselects')
//    //Select by values
//    //await page.locator('//label[text()="Clothing brands"]').selectOption(['Nike','Adidas','Puma','H&M'])
//    //select by visible label
//    await page.locator('//label[text()="Clothing brands"]').selectOption([{ label: 'Nike' },{ label: 'Adidas' },{ label: 'Zara' }]);
//    await page.pause()
//    await expect(page.locator('//label[text()="Clothing brands"]')).toHaveValues(['nike','adidas','zara']);
// })

// test('tooltip',async({page})=>
// {
//    await page.goto('https://www.playwrightautomation.com/practice.html#section-tooltip')
//    const tooltipTrigger=page.locator('#tooltip-trigger')
//    await tooltipTrigger.hover()
//    //tooltip-trigger is usually the element you hover over, while the tooltip is a text appears separately.
//    const tooltip=page.locator('#tooltip-bubble')
//    const text=await tooltip.innerText()
//    console.log(text)
//    await expect(tooltip).toHaveText('Standard delivery takes 3–5 working days.')
//    await expect(page.locator('#tooltip-state')).toHaveText('visible')

// })

// test('Show Hide Elements',async({page})=>
// {
//    await page.goto('https://www.playwrightautomation.com/practice.html#section-showhide')
//    await expect(page.locator('input[name="showhide-textbox"]')).toBeVisible()
//    await expect(page.locator('#showhide-state')).toHaveText('visible')
//    await page.locator('#btn-hide-element').click()
//    await expect(page.locator('#showhide-state')).toHaveText('hidden')
//    await expect(page.locator('p[id=showhide-log]')).toHaveText('Hide Element clicked — the target is now hidden.')
//    await page.locator('#btn-show-element').click()
//    const target_field=page.locator('input#showhide-textbox')
//    await expect(target_field).toBeVisible()
//    await target_field.fill("Hello hidden box")
//    await expect(page.locator('#showhide-state')).toHaveText('visible')
//    await expect(page.locator('p[id=showhide-log]')).toHaveText('Show Element clicked — the target is now visible.')
// })

test('Hidden Elements and AJAX',async({page})=>
{
   await page.goto('https://www.playwrightautomation.com/practice.html#section-hidden-ajax')
   await page.locator('#ajax-input-1').fill("Hello I am Anuradha, learning playwright")
   await page.locator('#ajax-checkbox-1').check()
   await expect(page.locator('#ajax-status')).toHaveText('Ready')
   await page.locator('#btn-toggle-input-2').click()
   await expect(page.locator('#ajax-input-2')).toBeVisible()
   await page.locator('#ajax-input-2').fill("I am learning Automation")
   await expect(page.locator('#ajax-status')).toHaveText('Input Box 2 shown')
   await page.locator('#btn-toggle-checkbox-2').click()
   await expect(page.locator('#ajax-status')).toHaveText('Checkbox 2 shown')
   await page.locator('#ajax-checkbox-2-field').check()
   await page.locator('#btn-load-ajax').click()
   await expect(page.locator('#ajax-status')).toHaveText('AJAX content loaded')
   const ajax_content=page.locator('#ajax-loaded-heading')
   const ajax_text=await ajax_content.innerText()
   console.log(ajax_text)
   const ajaxBodyText=await page.locator('p[data-testid="ajax-loaded-body"]').innerText()
   console.log(ajaxBodyText)
})













