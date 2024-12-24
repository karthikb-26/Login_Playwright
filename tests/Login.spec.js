const { test, expect } = require('@playwright/test');
const credentials = require('../cred/creds.json');
const LoginPage = require('../pages/login');

test.describe('Login function test', () => {
    const { url } = credentials;

    test('Validate Login with Valid and Invalid Credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);

        // Test with valid credentials
        const { username: validUsername, password: validPassword } = credentials.valid;
        // Navigate to the login page
        await loginPage.navigateToLoginPage(url);
        // Perform login with valid credentials
        await loginPage.login(validUsername, validPassword);

        // Assert successful login
        expect(await loginPage.isLoginSuccessful()).toBe(true);
        console.log("Login is successfull");

        // Logout after successful login
        await loginPage.logout();

        // Test with invalid credentials
        const { username: invalidUsername, password: invalidPassword } = credentials.invalid;
        // Perform login with invalid credentials
        await loginPage.login(invalidUsername, invalidPassword);

        // Assert failed login
        try {
            const loginFailed = await loginPage.isLoginFailed();
            expect(loginFailed).toBe(true);
            console.log("Login failed as expected with the invalid credentials");
        }
        catch (error) {
            console.error("Handling the error ", error);
            throw new Error("Invalid credentials handling - Test failed");
        }
    });
});
