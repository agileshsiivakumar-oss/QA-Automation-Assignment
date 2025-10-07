const {test, expect} = require('@playwright/test');
const fs = require('fs');


test("UI Automation", async({page}) => {

    // Navigating to the DemoQA 
    await page.goto("https://demoqa.com/");
    await expect(page).toHaveURL("https://demoqa.com/");
    await page.waitForTimeout(2000);

    // Locating and Navigating to Book Store Page 
    const bookStorePage = await page.locator('//div[@class="category-cards"]/div/div/div[@class="card-body"]/h5[text() = "Book Store Application"]');
    await bookStorePage.scrollIntoViewIfNeeded()
    await bookStorePage.hover();
    await page.waitForTimeout(1000);
    await bookStorePage.click();
    await page.waitForTimeout(2000);

    // Login using Username and Passsword
    const loginBtn = page.locator("//button[text() = 'Login']");
    const userName = page.locator("//input[@placeholder='UserName']");
    const password = page.locator("//input[@placeholder='Password']");
    const logoutBtn = page.locator('//button[@id="submit"]');
    const usernameValue = page.locator('//label[@id="userName-value"]');

    // Click Login Button to Enter Login Page 
    await loginBtn.hover();
    await page.waitForTimeout(1000);
    await loginBtn.click();
    await page.waitForTimeout(2000);

    await loginBtn.scrollIntoViewIfNeeded();

    // Enter UserName and Password and click Login Button 
    await userName.fill("agilesh");
    await page.waitForTimeout(1000);

    await password.fill("A@gilesh07");
    await page.waitForTimeout(1000);

    await loginBtn.hover();
    await page.waitForTimeout(1000);
    await loginBtn.click();
    await page.waitForTimeout(2000);

    // Validate username
    await expect(usernameValue).toHaveText('agilesh'); 

    // Validate logout button
    await expect(logoutBtn).toBeVisible();
    await page.waitForTimeout(2000);


    // Click BookStore Button and Search the Value in SearchBox 
    const bookStoreBtn = page.locator('//span[text() = "Book Store"]');
    const searchBox = page.locator('//input[@placeholder="Type to search"]');

    await bookStoreBtn.click();
    await page.waitForTimeout(2000);

    await searchBox.fill("Learning JavaScript Design Patterns");
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);


    // Validate Whether the Book contains in the table 
    const bookRow = page.locator('//div[@class="rt-tbody"]/div/div/div/div/span/a');

    // Validate that the book row contains the title
    await expect(bookRow).toContainText('Learning JavaScript Design Patterns');
    await page.waitForTimeout(2000);


    // Printing and Storing Title, Author and Publisher into a file.
    const title = await page.locator('//div[@class="rt-tbody"]/div/div/div/div/span/a').innerText();
    const author = await page.locator('//div[@class="rt-tbody"]/div/div/div').nth(2).innerText();
    const publisher = await page.locator('//div[@class="rt-tbody"]/div/div/div').nth(3).innerText();

    // Create content
    const content = `Title: ${title}\nAuthor: ${author}\nPublisher: ${publisher}\n`;

    // Write into a text file
    fs.writeFileSync('bookDetails.txt', content);

    console.log(content);
    console.log('Book details saved to bookDetails.txt');
    await page.waitForTimeout(2000);

    // Click Logout Button
    await logoutBtn.hover();
    await page.waitForTimeout(1000);
    await logoutBtn.click();

    await page.waitForTimeout(2000);


})