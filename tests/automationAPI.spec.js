const { test, expect } = require('@playwright/test');
const fs = require('fs');


test.describe.serial("CRUD Operations", () => {

    let userId;
    let name = "Aravind";
    let updatedName = "Subash";
    let job = "QA Lead II"

    // Object to store all responses
    let results = {};

    // Utility to save results into one file
    function saveResults() {
        fs.writeFileSync('resultAPI.json', JSON.stringify(results, null, 2), 'utf-8');
    }

    test('Post user', async ({ request }) => {
    const response = await request.post('http://localhost:3000/users', {
      data: {
        "name": name,
        "job": job
      },
    });

    expect(response.status()).toBe(201);

    const body = await response.json();
    console.log('Create User Response:', body);

    userId = body.id;
    console.log(userId);

    results.postUser = body;
    saveResults(); 

  });



 test('Get Created User', async ({ request }) => {
    const response = await request.get(`http://localhost:3000/users/${userId}`);

    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log('Get User Response:', body);

    // expect(body.name).toBe(name);
    // expect(body.job).toBe(job);

    results.getUser = body;
    saveResults();
  });

  test('Update User', async ({ request }) => {
    const response = await request.put(`http://localhost:3000/users/${userId}`, {
      data: {
        "name": updatedName,
        "job": job
      }
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log('Update User Response:', body);

    // expect(body.name).toBe(updatedName);
    // expect(body.job).toBe(job);

    results.updateUser = body;
    saveResults(); 
  });

})

