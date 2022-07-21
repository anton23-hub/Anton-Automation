import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.1/index.js'
import { CREATE, CREATE_WITHOUT_SELESAI_DATE, CREATE_WITH_EMPTY_TYPE, CREATE_WITH_EMPTY_IMAGEURL, EMPTY_TITLE_AND_ACTIONURL, CREATE_ELDP_WITHOUT_DESCRIPTION,
         CREATE_ELDP_WITHOUT_ORDER, CREATE_ELDP_TAG, CREATE_ELDP_TAG_EMPTY_TYPE, CREATE_ELDP_TAG_EMPTY_TAGID, CREATE_ELDP_TAG_EMPTY_TITLE, 
         CREATE_ELDP_TAG_EMPTY_TAGLABEL, DATA_UPDATE, INVALID_ID, NAME_ALREADY_EXIST, DELETE_ELDP_ID } from '../data/ELDP-data.js'
import { CreateELDP, Create_Same_ELDP, Create_Without_Name, Create_Without_Diterbitkan, Create_Without_Selesai, Create_With_Empty_Type, Create_With_Empty_ImageUrl,
         Create_Without_Title_And_actionUrl, Create_Without_Description, Create_With_Empty_Order, Create_ELDP_Type_Tag, Create_ELDP_Type_Tag_Empty, 
         Create_ELDP_Type_Tag_Empty_tagId, Create_ELDP_Type_Tag_Empty_title, Create_ELDP_Type_Tag_TagLabel_Is_Empty, 
         UPDATE, ELDP_ID_NOT_FOUND, DATA_UPDATE_NAME_IS_NULL, UPDATE_START_DATE_IS_NULL, UPDATE_ELDPID_IS_NULL, UPDATE_ELDPID_NAME_WAS_EXIST, Delete_ELDP } from '../step/ELDP-step.js'
//import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js'

export default function(){ 
    
    describe('1. Mimin - Valid Create ELDP', () => {
        const response = CreateELDP(CREATE)
        console.log(response.body)
        console.log(response.status)
        //assertion
        expect(response).to.have.validJsonBody()
        expect(response.status, 'API status code').to.equal(200)
        expect(response.json()['message'], 'Error message').to.equal("success")
        expect(response.json()['data']['name'], 'ELDP Name').to.equal(CREATE.name)

    })

    describe('2. Mimin - Create Same ELDP', () => {
        const response = Create_Same_ELDP(CREATE)
        console.log(response.body)
        console.log(response.status)
        //assertion
        expect(response).to.have.validJsonBody()
        expect(response.status, 'API status code').to.equal(400)
        expect(response.json()['name'], 'Status Name').to.equal("Bad Request")
        expect(response.json()['message'], 'message').to.equal("Nama ELDP sudah digunakan. Silakan ganti dengan nama yang baru.")
    })

    describe('3. Mimin - Create ELDP Without Name', () => {
        const response = Create_Without_Name(CREATE)
        console.log(response.body)
        console.log(response.status)
        //assertion
        expect(response).to.have.validJsonBody()
        expect(response.status, 'API status code').to.equal(400)
        expect(response.json()['name'], 'Status Name').to.equal("Bad Request")
        expect(response.json()['message'], 'message').to.equal("Name is required")
    })

    describe('4. Mimin - Create ELDP Without Diterbitkan Date', () => {
        const response = Create_Without_Diterbitkan(CREATE)
        console.log(response.body)
        console.log(response.status)
        //assertion
        expect(response).to.have.validJsonBody()
        expect(response.status, 'API status code').to.equal(400)
        expect(response.json()['name'], 'Status Name').to.equal("Bad Request")
        expect(response.json()['message'], 'message').to.equal("issuedDate is required")
    })

    describe('5. Mimin - Create ELDP Without Selesai Date', () => {
        const response = Create_Without_Selesai(CREATE_WITHOUT_SELESAI_DATE)
        console.log(response.body)
        console.log(response.status)
        //assertion
        expect(response).to.have.validJsonBody()
        expect(response.status, 'API status code').to.equal(200)
        expect(response.json()['data']['name'], 'ELDP Name').to.equal(CREATE_WITHOUT_SELESAI_DATE.name)
        expect(response.json()['message'], 'Status Name').to.equal("success")
        expect(response.json()['data']['finishedDate'], 'finishedDate').to.equal(null)
    })

    describe('6. Mimin - Create ELDP - ELDPItem Type = "image" - Type is Empty', () => {
        const response = Create_With_Empty_Type(CREATE_WITH_EMPTY_TYPE)
        console.log(response.body)
        console.log(response.status)
        //assertion
        expect(response).to.have.validJsonBody()
        expect(response.status, 'API status code').to.equal(400)
        expect(response.json()['name'], 'Status Name').to.equal("Bad Request")
        expect(response.json()['message'], 'message').to.equal("Type is required")
    })

    describe('7. Mimin - Create ELDP - ELDPItem Type = "image" - imageUrl is Empty', () => {
        const response = Create_With_Empty_ImageUrl(CREATE_WITH_EMPTY_IMAGEURL)
        console.log(response.body)
        console.log(response.status)
        //assertion
        expect(response).to.have.validJsonBody()
        expect(response.status, 'API status code').to.equal(400)
        expect(response.json()['name'], 'Status Name').to.equal("Bad Request")
        expect(response.json()['message'], 'message').to.equal("imageUrl is required")
    })

    describe('8. Mimin - Create ELDP - ELDPItem Type = "image" - Title & actionUrl is Empty', () => {
        const response = Create_Without_Title_And_actionUrl(EMPTY_TITLE_AND_ACTIONURL)
        console.log(response.body)
        console.log(response.status)
        //assertion
        expect(response).to.have.validJsonBody()
        expect(response.status, 'API status code').to.equal(200)
        expect(response.json()['message'], 'Status Name').to.equal("success")
        expect(response.json()['data']['name'], 'ELDP Name').to.equal(EMPTY_TITLE_AND_ACTIONURL.name)
        expect(response.json()['data']['eldpItems'][0]['title'], 'title').to.empty
        expect(response.json()['data']['eldpItems'][0]['actionUrl'], 'actionUrl').to.empty
    })

    describe('9. Mimin - Create ELDP Without Description', () => {
        const response = Create_Without_Description(CREATE_ELDP_WITHOUT_DESCRIPTION)
        console.log(response.body)
        console.log(response.status)
        //assertion
        expect(response).to.have.validJsonBody()
        expect(response.status, 'API status code').to.equal(200)
        expect(response.json()['message'], 'Status Name').to.equal("success")
        expect(response.json()['data']['description'], 'Description').to.empty
    })

    describe('10. Mimin - Create ELDP - ELDPItem Type = "image" - Order is Empty', () => {
        const response = Create_With_Empty_Order(CREATE_ELDP_WITHOUT_ORDER)
        console.log(response.body)
        console.log(response.status)
        //assertion
        expect(response).to.have.validJsonBody()
        expect(response.status, 'API status code').to.equal(400)
        expect(response.json()['name'], 'Status Name').to.equal("Bad Request")
        expect(response.json()['message'], 'message').to.equal("Order cannot be blank.")
    })

    describe('11. Mimin - Create ELDP - ELDPItem Type = "tag"', () => {
        const response = Create_ELDP_Type_Tag(CREATE_ELDP_TAG)
        console.log(response.body)
        console.log(response.status)
        //assertion
        expect(response).to.have.validJsonBody()
        expect(response.status, 'API status code').to.equal(200)
        expect(response.json()['message'], 'Status Name').to.equal("success")
        expect(response.json()['data']['name'], 'ELDP Name').to.equal(CREATE_ELDP_TAG.name)
        expect(response.json()['data']['eldpItems'][0]['type'], 'Tag Type').to.equal("tag")
        
    })

    describe('12. Mimin - Create ELDP - ELDPItem Type = "tag"- Type Is Empty', () => {
        const response = Create_ELDP_Type_Tag_Empty(CREATE_ELDP_TAG_EMPTY_TYPE)
        console.log(response.body)
        console.log(response.status)
        //assertion
        expect(response).to.have.validJsonBody()
        expect(response.status, 'API status code').to.equal(400)
        expect(response.json()['name'], 'Status Name').to.equal("Bad Request")
        expect(response.json()['message'], 'message').to.equal("Type is required")
    })

    describe('13. Mimin - Create ELDP - ELDPItem Type = "tag"- Tag Title Is Empty', () => {
        const response = Create_ELDP_Type_Tag_Empty_title(CREATE_ELDP_TAG_EMPTY_TITLE)
        console.log(response.body)
        console.log(response.status)
        //assertion
        expect(response).to.have.validJsonBody()
        expect(response.status, 'API status code').to.equal(400)
        expect(response.json()['name'], 'Status Name').to.equal("Bad Request")
        expect(response.json()['message'], 'message').to.equal("Title is required")
    })

    describe('14. Mimin - Create ELDP - ELDPItem Type = "tag"- TagId Is Empty', () => {
        const response = Create_ELDP_Type_Tag_Empty_tagId(CREATE_ELDP_TAG_EMPTY_TAGID)
        console.log(response.body)
        console.log(response.status)
        //assertion
        expect(response).to.have.validJsonBody()
        expect(response.status, 'API status code').to.equal(400)
        expect(response.json()['name'], 'Status Name').to.equal("Bad Request")
        expect(response.json()['message'], 'message').to.equal("Tag Id is required")
    })

    describe('15. Mimin - Create ELDP - ELDPItem Type = "tag"- Tag Label Is Empty', () => {
        const response = Create_ELDP_Type_Tag_TagLabel_Is_Empty(CREATE_ELDP_TAG_EMPTY_TAGLABEL)
        console.log(response.body)
        console.log(response.status)
        //assertion
        expect(response).to.have.validJsonBody()
        expect(response.status, 'API status code').to.equal(200)
        expect(response.json()['message'], 'Status Name').to.equal("success")
        expect(response.json()['data']['name'], 'ELDP Name').to.equal(CREATE_ELDP_TAG_EMPTY_TAGLABEL.name)
        expect(response.json()['data']['eldpItems'][0]['type'], 'Tag Type').to.equal("tag")
        expect(response.json()['data']['eldpItems'][0]['tagLabel'], 'TagLabel').not.empty
        
    })

    describe('16. Mimin - Valid UPDATE ELDP', () => {
        const response = UPDATE(DATA_UPDATE)
        //assertion
        expect(response).to.have.validJsonBody()
        expect(response.status, 'API status code').to.equal(200)
        expect(response.json()['message'], 'message').to.equal("success")
        expect(response.json()['data']['name'], 'name').to.equal(DATA_UPDATE.name)
        expect(response.json()['data']['id'], 'id').to.not.be.empty
    })
    
    describe('17. Mimin - InValid ELDP ID', () => {
        const response = ELDP_ID_NOT_FOUND(INVALID_ID)
        //assertion
        expect(response).to.have.validJsonBody()
        expect(response.status, 'API status code').to.equal(404)
        expect(response.json()['message'], 'Error Message').to.equal("{{%eldp}} id = 1000000024 - Not Found")
        expect(response.json()['name'], 'Error Message').to.equal("Not Found")
    })
    
    describe('18. Mimin - UPDATE ELDP NAME IS NULL', () => {
        const response = DATA_UPDATE_NAME_IS_NULL(DATA_UPDATE)
        //assertion
        expect(response).to.have.validJsonBody()
        expect(response.status, 'API status code').to.equal(400)
        expect(response.json()['name'], 'name').to.equal("Bad Request")
        expect(response.json()['message'], 'error message').to.equal("Name is required")
    })
    
    describe('19. Mimin - UPDATE ELDP START_DATE IS NULL', () => {
        const response = UPDATE_START_DATE_IS_NULL(DATA_UPDATE)
        //assertion
        expect(response).to.have.validJsonBody()
        expect(response.status, 'API status code').to.equal(400)
        expect(response.json()['name'], 'name').to.equal("Bad Request")
        expect(response.json()['message'], 'message').to.equal("issuedDate is required")
    })
    
    describe('20. Mimin - UPDATE ELDP_ID IS NULL', () => {
       const response = UPDATE_ELDPID_IS_NULL(DATA_UPDATE)
       //assertion
       expect(response).to.have.validJsonBody()
       expect(response.status, 'API status code').to.equal(400)
       expect(response.json()['name'], 'name').to.equal("Bad Request")
       expect(response.json()['message'], 'error message').to.equal("Eldp id is required")
    }) 

    describe('21. Mimin - Update same ELDP name', () => {
        const response = UPDATE_ELDPID_NAME_WAS_EXIST(NAME_ALREADY_EXIST)
        console.log(response.body)
        console.log(response.status)
        //assertion
        expect(response).to.have.validJsonBody()
        expect(response.status, 'API status code').to.equal(400)
        expect(response.json()['name'], 'Status Name').to.equal("Bad Request")
        expect(response.json()['message'], 'message').to.equal("Nama ELDP sudah digunakan. Silakan ganti dengan nama yang baru.")
    })

    describe('22. Mimin - Delete ELDP', () => {
        const response = Delete_ELDP(DELETE_ELDP_ID)
        console.log(response.body)
        console.log(response.status)
        //assertion
        expect(response).to.have.validJsonBody()
        expect(response.status, 'API status code').to.equal(200)
        expect(response.json()['message'], 'Error message').to.equal("success")
    })
}

//k6 reporting function
//export function handleSummary(data) {
//  console.log('Preparing the end-of-test summary...')
//    return {
        //rename .html file into appropriate one
        //also change {title} name into appropriate one
    //"ELDP.html": htmlReport(data, { title: "Mimin - Create ELDP" }),
   //};
//}