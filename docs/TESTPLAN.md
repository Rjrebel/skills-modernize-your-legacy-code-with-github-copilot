# Student Account System Test Plan

This test plan covers the business logic implemented in the COBOL application for student account management. Use this plan to validate requirements with business stakeholders and as a basis for future unit and integration tests in the Node.js transformation.

| Test Case ID | Test Case Description | Pre-conditions | Test Steps | Expected Result | Actual Result | Status (Pass/Fail) | Comments |
|--------------|----------------------|----------------|------------|-----------------|---------------|--------------------|----------|
| TC01 | Add new student account | Student ID is valid and not already in system | 1. Enter new student details<br>2. Submit add request | Account is created with correct details |  |  |  |
| TC02 | Update student account | Student account exists and is active | 1. Select student account<br>2. Modify details<br>3. Submit update | Account details are updated |  |  |  |
| TC03 | Delete student account | Student account exists and is active | 1. Select student account<br>2. Submit delete request | Account is removed from system |  |  |  |
| TC04 | Prevent modification of inactive accounts | Student account exists but is inactive | 1. Attempt to update or delete account | Operation is rejected with error |  |  |  |
| TC05 | Validate student ID on operations | Student ID is invalid | 1. Attempt any account operation with invalid ID | Operation is rejected with error |  |  |  |
| TC06 | Prevent negative balances | Student account exists and is active | 1. Attempt transaction that would result in negative balance | Transaction is rejected with error |  |  |  |
| TC07 | Authorization required for account updates | User is not authorized | 1. Attempt to update account | Operation is rejected with error |  |  |  |
| TC08 | Data integrity checks before updates | Student account exists | 1. Attempt to update account with invalid data (e.g., missing name) | Operation is rejected with error |  |  |  |
| TC09 | Retrieve student account data | Student account exists | 1. Request account details | Correct account data is returned |  |  |  |
| TC10 | Display outcome to user | Any operation performed | 1. Complete operation<br>2. View result | User sees clear success or error message |  |  |  |

> For each test, fill in the Actual Result, Status, and Comments after execution.
