import Login from "../selectors/login_selectors.js";

describe('Log In Tests', () => {

    let userdata;
    before(()=>{
        cy.fixture('login_data').then((data)=>{
            userdata=data;
        })
    })
    
    beforeEach(()=>{
        cy.visit("https://constel-social-network.vercel.app");
    })

    it("Unsucesfully Login - All Fields Empty", () => {

        const ln=new Login();
   
        ln.setUserName.clear;
        ln.setPassword.clear;
        ln.clickSubmit();

        cy.get(':nth-child(1) > .invalid-feedback').should('have.text','Email field is required.');
        cy.get(':nth-child(2) > .invalid-feedback').should('have.text','Password field is required.');
        
    })

    it("Unsucesfully Login - Correct Username And Uncorrect Password", () => {

        const ln=new Login();

        ln.setUserName(userdata.correct_email);
        ln.setPassword(userdata.wrong_password);
        ln.clickSubmit();
        
        cy.get('.fade').should('have.text','An error occurred during login.');
        
    })

    it("Unsucesfully Login - Uncorrect Username And Correct Password", () => {

        const ln=new Login();
   
        ln.setUserName(userdata.wrong_email);
        ln.setPassword(userdata.correct_password);
        ln.clickSubmit();
        
        cy.get(':nth-child(1) > .invalid-feedback').should('have.text','Email format is not valid.');
        
    })

    it("Unsucesfully Login - Correct Username And Password with 5 characters", () => {

        const ln=new Login();
   
        ln.setUserName(userdata.correct_email);
        ln.setPassword(userdata.wrong_password_5_characters);
        ln.clickSubmit();
        
        cy.get(':nth-child(2) > .invalid-feedback').should('have.text','Please provide a minimum of 6 characters');
        
    })

    it("Succesfuly Login - Correct Username And Correct Password", () => {

        const ln=new Login();
   
        ln.setUserName(userdata.correct_email);
        ln.setPassword(userdata.correct_password);
        ln.clickSubmit();
        
        cy.get('h1').should('have.text','Home');
        
    })
})