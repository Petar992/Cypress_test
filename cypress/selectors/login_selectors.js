class Login
{
    txtUserName='#email';
    txtPassword='#password';
    btnSubmit='#loginSubmitBtn';


    setUserName(username)
    {
        cy.get(this.txtUserName).type(username);
    }

    setPassword(password)
    {
        cy.get(this.txtPassword).type(password);
    }

    clickSubmit()
    {
        cy.get(this.btnSubmit).click();
    }

}

export default Login;