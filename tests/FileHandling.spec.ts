import {test,expect} from '@playwright/test'
import * as fs from 'node:fs/promises';

// test('Standard File Inputs',async({page})=>{

//     await page.goto("https://www.playwrightautomation.com/practice.html#section-upload-standard")
//     await expect(page.locator("#upload-single-result")).toHaveText("—")
//     //uploading file present in testFiles folder
//     await page.locator("#upload-single").setInputFiles("tests/testFiles/text_automation_practice_file.txt")
//     await expect(page.locator("#upload-single-result")).toHaveText("text_automation_practice_file.txt")
//     await expect(page.locator("p#upload-single-status").filter({hasText:"File Uploaded Successfully"})).toBeVisible()
//     await page.locator("#btn-reset-single").click()
//     await expect(page.locator("#upload-single-result")).toHaveText("—")
//     //uploading file present in system
//     await page.locator("#upload-single").setInputFiles("C:/Users/rashm/Desktop/Stad Solutions/Playwright/FileUploadingTopic Files/FileUploadingPractice.docx")
//     await expect(page.locator("#upload-single-result")).toHaveText("FileUploadingPractice.docx")
//     await expect(page.locator("p#upload-single-status").filter({hasText:"File Uploaded Successfully"})).toBeVisible()
//     await page.locator("#btn-reset-single").click()
//     await expect(page.locator("#upload-single-result")).toHaveText("—")
// })

// test("Multiple File Upload",async({page})=>{

//     await page.goto("https://www.playwrightautomation.com/practice.html#section-upload-standard")
//     await page.locator("#upload-multiple").setInputFiles(["tests/testFiles/AutomationFileUploading.pdf","tests/testFiles/FileUploadingPractice.docx"])
//     await expect(page.locator("#upload-multiple-count")).toHaveText("2")
//     await expect(page.getByText("Selected Files: AutomationFileUploading.pdf, FileUploadingPractice.docx")).toBeVisible();
//     console.log(await (page.locator("#upload-multiple-status")).innerText())
//     await page.locator("#btn-reset-multiple").click()
// })

//handle the hidden file input upload challenge
// test('Hidden Inout Challenge',async({page})=>{
//     await page.goto("https://www.playwrightautomation.com/practice.html#section-upload-challenges")
//     //Locating the hidden file input and attach the file using setInputFiles()
//     await page.setInputFiles('input[type="file"]', "tests/testFiles/AutomationFileUploading.pdf")
//     // Verify the selected filename
//    //await expect(page.locator('text=Selected:')).toContainText('AutomationFileUploading.pdf')

//     // Verify successful upload
//     //await expect(page.getByText("✓ Resume Uploaded Successfully")).toBeVisible()
//     console.log(await page.locator('#upload-hidden-status').innerText())
// })


//FileChooser Event challenge
// test('FileChooser Event Challenge',async({page})=>{
//     await page.goto("https://www.playwrightautomation.com/practice.html#section-upload-challenges") 
//     //Waiting for the filechooser event and click the "Browse Files" button concurrently.
//   const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'),page.locator('#btn-browse-files').click()]);

//  /* Set the file(s) using setFiles() on the file chooser object. you cannot call await fileChooser.setFiles() multiple times
//   because the fileChooser object represents a single file selection interaction instance*/
//   await fileChooser.setFiles(['tests/testFiles/text_automation_practice_file.txt','tests/testFiles/AutomationFileUploading.pdf'])

//   //Verifying File Count
//   await expect(page.locator('text=File Count: 2')).toBeVisible();
// })

test('Download svg file', async ({ page }, testInfo) => {
  await page.goto('https://www.playwrightautomation.com/practice.html#section-upload-downloads');
  await page.locator('#btn-download-svg').click();
  const download = await page.waitForEvent('download');
  expect(download.suggestedFilename()).toBe('genxevo-logo.svg');

  /*testInfo.outputPath() creates a path inside the current test's 
  output directory. To choose your own folder, you can use path.join() with the folder name you want.*/
  // Create a path inside this test's output directory.
  const filePath = testInfo.outputPath(download.suggestedFilename());

  // Save the file, waiting for the download to complete.
  await download.saveAs(filePath);

  // Verify the saved file exists.
  await fs.access(filePath);
});

test('Download PDF file', async({page})=>{
  await page.goto('https://www.playwrightautomation.com/practice.html#section-upload-downloads');
  await page.locator('#btn-download-pdf').click()
  const download= await page.waitForEvent('download');
  expect(download.suggestedFilename()).toBe('genxevo-profile-course-guide.pdf');
  




})