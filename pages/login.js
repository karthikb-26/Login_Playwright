class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = 'input[name="username"]'; 
        this.passwordInput = 'input[name="password"]'; 
        this.loginButton = 'button[type="submit"]'; 
        this.logoutButton = "//i[contains(text(),' Logout')]";
        this.successMessage = '.flash.success'; 
        this.errorMessage = '.flash.error'; 
    }

    async navigateToLoginPage(url) {
        await this.page.goto(url);
    }

    async login(username, password) {
        await this.page.fill(this.usernameInput, username); 
        await this.page.fill(this.passwordInput, password); 
        await this.page.click(this.loginButton); 
    }

    async isUsernameFieldVisible() {
        return await this.page.isVisible(this.usernameInput); 
    }

    async isLoginSuccessful() {
        return await this.page.isVisible(this.successMessage); 
    }

    async isLoginFailed() {
        return await this.page.isVisible(this.errorMessage); 
    }

    async logout() {
        await this.page.click(this.logoutButton);
    }
}

module.exports = LoginPage;