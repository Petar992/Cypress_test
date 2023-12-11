import Login from "../selectors/login_selectors.js";

describe('Comment And Delete Tests', () => {

    let userdata;
    before(()=>{
        cy.fixture('login_data').then((data)=>{
            userdata=data;
        })
    })

    beforeEach(()=>{
        cy.visit("https://constel-social-network.vercel.app");
    })

    it("Comment post", () => {

        const ln=new Login();
   
        ln.setUserName(userdata.correct_email);
        ln.setPassword(userdata.correct_password);
        ln.clickSubmit();
        
        cy.get('h1').should('have.text','Home');


        cy.get("button[class='btn btn-tertiary']").eq(1).click();

        cy.get('.mt-1 > .profile__input > .form-control').type('proba');

        cy.get('#createInputSubmitBtn').click();

        cy.get("button[class='btn-close']").click({ force: true });

        cy.get("button[class='btn btn-tertiary']").eq(1).should('contain', '1');

    })

    it("Delete Comment", () => {

        const ln=new Login();
   
        ln.setUserName(userdata.correct_email);
        ln.setPassword(userdata.correct_password);
        ln.clickSubmit();
        
        cy.get('h1').should('have.text','Home');

        cy.get("button[class='btn btn-tertiary']").eq(1).click();

        cy.get('.mt-1 > .profile__input > .form-control').type('proba');

        cy.get('#createInputSubmitBtn').click();

        cy.get('#postDeleteBtn').click();

        cy.get("button[class='btn-close']").click({ force: true });

        cy.get("button[class='btn btn-tertiary']").eq(1).should('contain', '1');

    })
})