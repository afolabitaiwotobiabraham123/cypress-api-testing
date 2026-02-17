//Install xml2js library
//npm install xml2js

const parseXml = (xmlString) => {
    const parser = new DOMParser();
    return parser.parseFromString(xmlString, "application/xml");
  };
  

describe("XML Parsing",()=>{

    const xmlPayload="<Pet>     <id>0</id>     <category>         <id>0</id>         <name>Dog</name>     </category>     <name>Jimmy</name>     <photoUrls> <photoUrl>string</photoUrl> </photoUrls> <tags>     <Tag>         <id>0</id>         <name>string</name>     </Tag> </tags> <status>available</status>     </Pet>"
let petid=null;
   
    it("creating new PET",()=>{
    cy.request({
            method:'POST',
            url:'https://petstore.swagger.io/v2/pet',
            body:xmlPayload,
            headers:{'Content-Type':'application/xml',
                    'accept':'application/xml'
                }
        }).then((response)=>{
            expect(response.status).to.eq(200);
            const xmlDoc = parseXml(response.body); 
            petid = xmlDoc.getElementsByTagName("id")[0].textContent; 
            expect(petid).to.exist; cy.log("Created Pet ID: " + petid);
            })
        })
})
