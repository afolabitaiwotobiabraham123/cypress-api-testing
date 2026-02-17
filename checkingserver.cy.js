describe("API testinng",()=>{

    it("GET call",()=>{

        cy.request('GET','https://reqres.in/api/users')
        .its('status')
        .should('equal', 200);                                  
                    
                 })
                })

    


           