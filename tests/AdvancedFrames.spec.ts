import {test} from '@playwright/test' 

 

test('Frames',async({page})=>{ 

await page.goto("https://www.playwrightautomation.com/practice.html#section-frame-advanced") 

const outerFrame = page.frame({name:'feedback-portal'}) 

const innerFrame = outerFrame?.childFrames()[0] 

//parentframe 

// const innerFrame = page.frame({name:'travel-prefs'}) 

await outerFrame.locator("#feedback-name").fill("Padmini") 

await outerFrame.locator("#feedback-email").fill("pbulnda@gmail.com") 

await innerFrame.locator("#travel-business").check() 

 

//find all the frames 

const frames = page.frames() 

//total frames 

console.log("Total frames:",frames.length) 

 

for(const frame of frames){ 

console.log("Frame name:",frame.name()) 

console.log("Frame url:",frame.url())  

 

} 

}) 