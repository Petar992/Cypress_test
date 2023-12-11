import Login from "../selectors/login_selectors.js";

describe('Creating Post Tests', () => {

    let userdata;
    before(()=>{
        cy.fixture('login_data').then((data)=>{
            userdata=data;
        })
    })

    beforeEach(()=>{
        cy.visit("https://constel-social-network.vercel.app");
    })

    it("Creating Post Using Text", () => {

        const ln=new Login();
   
        ln.setUserName(userdata.correct_email);
        ln.setPassword(userdata.correct_password);
        ln.clickSubmit();
        
        cy.get('h1').should('have.text','Home');

        cy.get('.form-control').type('New post');
        cy.wait(1000);
        cy.get('#submitPostBtn').click();

        cy.get(':nth-child(2) > .home__main__feed__post__body > .post__description').should('have.text','New post');
    })

    it("Creating Post Using Text And Voice Recorder", () => {

        const ln=new Login();
   
        ln.setUserName(userdata.correct_email);
        ln.setPassword(userdata.correct_password);
        ln.clickSubmit();
        
        cy.get('h1').should('have.text','Home');

        cy.get('.form-control').type('New post');
        cy.wait(1000);

        cy.get('#startRecordingButton').click();
        cy.wait(10000);
        cy.get('#stopRecordingButton').click();

        cy.get('#submitPostBtn').click();

        cy.get(':nth-child(2) > .home__main__feed__post__body > .post__description').should('have.text','New post');
    })
})