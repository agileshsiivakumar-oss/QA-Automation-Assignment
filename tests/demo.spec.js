// const { test, expect } = require('@playwright/test');
// const fs = require('fs');


// test.describe.serial("CRUD Operations", () => {

//     let userId;
//     let name = "Rajan";
//     let updatedName = "Ravi";
//     let job = "QA Lead 1"

//     // Object to store all responses
//     let results = {};

//     // Utility to save results into one file
//     function saveResults() {
//         fs.writeFileSync('resultAPI.json', JSON.stringify(results, null, 2), 'utf-8');
//     }

//     test('Post user', async ({ request }) => {
//     const response = await request.post('http://localhost:3000/users', {
//       data: {
//         "name": name,
//         "job": job
//       },
//     });

//     expect(response.status()).toBe(201);

//     const body = await response.json();
//     console.log('Create User Response:', body);

//     userId = body.id;
//     console.log(userId);

//     results.postUser = body;
//     saveResults(); 

//   });



//  test('Get Created User', async ({ request }) => {
//     const response = await request.get(`http://localhost:3000/users/${userId}`);

//     expect(response.status()).toBe(200);

//     const body = await response.json();
//     console.log('Get User Response:', body);

//     expect(body.name).toBe(name);
//     expect(body.job).toBe(job);

//     results.getUser = body;
//     saveResults();
//   });

//   test('Update User', async ({ request }) => {
//     const response = await request.put(`http://localhost:3000/users/${userId}`, {
//       data: {
//         "name": updatedName,
//         "job": job
//       }
//     });

//     expect(response.status()).toBe(200);

//     const body = await response.json();
//     console.log('Update User Response:', body);

//     expect(body.name).toBe(updatedName);
//     expect(body.job).toBe(job);

//     results.updateUser = body;
//     saveResults(); 
//   });

//   })










// const { test, expect } = require('@playwright/test');

// test.describe.serial('Reqres API Automation', () => {
//   let userId;
//   const apiKey = 'reqres-free-v1'; // your free API key

//   test("Mock API", async({page}) => {

//       await page.route('https://reqres.in/api/users', route => {
//       // Mock response
//       route.fulfill({
//         status: 201,
//         contentType: 'application/json',
//         body: JSON.stringify({ id: 123, name: 'Test User', job: 'QA' }),
//       });
//   })
// })

//   test('Create User', async ({ request }) => {
//     const response = await request.post('https://reqres.in/api/users', {
//       headers: {
//         'x-api-key': apiKey,
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       data: {
//         name: 'Agilesh',
//         job: 'QA Engineer'
//       }
//     });

//     expect(response.status()).toBe(201);

//     const body = await response.json();
//     console.log('Create User Response:', body);

//     userId = body.id;
//     // expect(userId).toBeTruthy();
//     console.log(userId)
//   });

//   test('Get Created User', async ({ request }) => {
//     const response = await request.get(`https://reqres.in/api/users/${userId}`, {
//       headers: { 'x-api-key': apiKey }
//     });

//     // console.log(response)
//     expect(response.status()).toBe(200);

//     const body = await response.json();
//     console.log('Get User Response:', body);

//     // expect(body.data).toHaveProperty('id');
//     // expect(body.data).toHaveProperty('email');
//   });

//   test('Update User', async ({ request }) => {
//     const response = await request.put(`https://reqres.in/api/users/${userId}`, {
//       headers: {
//         'x-api-key': apiKey,
//         'Content-Type': 'application/json'
//       },
//       data: {
//         name: 'Agilesh Updated',
//         job: 'Senior QA Engineer'
//       }
//     });

//     expect(response.status()).toBe(200);

//     const body = await response.json();
//     console.log('Update User Response:', body);

//     expect(body.name).toBe('Agilesh Updated');
//     expect(body.job).toBe('Senior QA Engineer');
//   });
// });

