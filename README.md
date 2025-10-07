# QA-Automation-Assignment
 
This repository contains **UI and API automation tasks** completed as part of the internship assignment given by FinacPlus.

---

## 🔹 UI Automation - DemoQA Book Store

### Steps Automated:

1. Navigate to [DemoQA](https://demoqa.com/).  
2. **Manually create a new user** (user registration is not automated).  
3. Navigate to **Book Store Application**.  
4. Login using the newly created user.  
5. Validate that **username** and **logout button** appear.  
6. Click on **Book Store** button.  
7. Search for **"Learning JavaScript Design Patterns"**.  
8. Validate that the book exists in the search results.  
9. Extract and print **Title, Author, Publisher** into a file (`BookDetails.txt`).  
10. Logout successfully.

**Tech Used:** Playwright, JavaScript.  

**Output:** `BookDetails.txt` containing the required book details.

---

## 🔹 API Automation - Local JSON Server

### APIs Automated:

1. **Create User** → Validate response status code = `201`, fetch and store `userId`.  
2. **Get User Details** → Validate that the created user data is correct.  
3. **Update User Name** → Validate updated details in the response.

**Tech Used:** Node.js + JSON Server + Playwright API.

---

### Why Local JSON Server Instead of Reqres

- The assignment suggested using [Reqres.in](https://reqres.in/) for API testing.  
- **Limitation of Reqres:** It’s a mock API with predefined users, so **newly created users cannot be retrieved**, which makes full CRUD testing impossible.  
- **Solution:** I used a **local JSON server** (`json-server`) to simulate a real backend.  
  - Allows dynamic creation, retrieval, update, and deletion of users.  
  - Enables proper validation of `userId` and response data.  
  - Mimics a real-world API environment, demonstrating end-to-end API automation.

---


## 🔹 Installation & Setup

### 1. Clone the repository
```powershell
git clone https://github.com/agileshsiivakumar-oss/QA-Automation-Assignment.git
cd QA-Automation-Assignment

#Install dependencies
npm install

#Install Playwright browsers (if using Playwright)
npx playwright install

# Run UI tests (Playwright example)
npx playwright test automationUI.spec.js --project=chromium --headed

# Start JSON Server
npx json-server --watch db.json --port 3000

# Run API tests
npx playwright test automationAPI.spec.js --project=chromium --headed
(If it throws error check npx install playwright is correctly installed or not, to check browsers are installed)

