describe("API testinng",()=>{


    const queryParam={page:1};


    it("Passing Query parameters",()=>{

        cy.request({
                            method:'GET',
                            url:'https://reqres.in/api/users',
                            qs:queryParam
                 })
       .then(  (response) =>{
           expect(response.status).to.eq(200);
           expect(response.body.page).to.eq(1);
           expect(response.body.data).to.have.length(6);
           expect(response.body.data[0]).to.have.property('id',1);
           expect(response.body.data[0]).to.have.property('first_name','George');
       })
    })


})