import Login from "../selectors/login_selectors.js";

describe('Like And Unlike Tests', () => {

    let userdata;
    before(()=>{
        cy.fixture('login_data').then((data)=>{
            userdata=data;
        })
    })

    beforeEach(()=>{
        cy.visit("https://constel-social-network.vercel.app");
    })

    it("Liking Post", () => {

        const ln=new Login();
   
        ln.setUserName(userdata.correct_email);
        ln.setPassword(userdata.correct_password);
        ln.clickSubmit();
        
        cy.get('h1').should('have.text','Home');

        cy.get("button[class='btn btn-tertiary']").eq(0).click();

        cy.get("button[class='btn btn-primary']").eq(0).should('contain', '1');

    })

    it("Unliking Post", () => {

        const ln=new Login();
   
        ln.setUserName(userdata.correct_email);
        ln.setPassword(userdata.correct_password);
        ln.clickSubmit();
        
        cy.get('h1').should('have.text','Home');

        cy.get("button[class='btn btn-primary']").eq(0).click();
        cy.get("button[class='btn btn-tertiary']").eq(0).should('contain','0');

    })
})