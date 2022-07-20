import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.1/index.js'
import { UPDATE, UPDATE_START_DATE_IS_NULL, UPDATE_ELDPID_IS_NULL, ELDP_ID_NOT_FOUND, DATA_UPDATE_NAME_IS_NULL } from './ELDP-step-update.js'
import { DATA_UPDATE, INVALID_ID } from './ELDP-data-update.js'


export default function(){ {
    describe('1. Mimin - Valid UPDATE ELDP', () => {
        const response = UPDATE(DATA_UPDATE)
        //assertion
        expect(response).to.have.validJsonBody()
        expect(response.status, 'API status code').to.equal(200)
        expect(response.json()['message'], 'message').to.equal("success")
        expect(response.json()['data']['name'], 'name').to.equal(DATA_UPDATE.name)
        expect(response.json()['data']['id'], 'id').to.not.be.empty
        expect(response.json()['data']['id'], 'id').typeOf
    })
    describe('2. Mimin - InValid ELDP ID', () => {
        const response = ELDP_ID_NOT_FOUND(INVALID_ID)
        //assertion
        expect(response).to.have.validJsonBody()
        expect(response.status, 'API status code').to.equal(404)
        expect(response.json()['message'], 'Error Message').to.equal("{{%eldp}} id = 1000000024 - Not Found")
        expect(response.json()['name'], 'Error Message').to.equal("Not Found")
    })
    describe('3. Mimin - UPDATE ELDP NAME IS NULL', () => {
        const response = DATA_UPDATE_NAME_IS_NULL(DATA_UPDATE)
        //assertion
        expect(response).to.have.validJsonBody()
        expect(response.status, 'API status code').to.equal(400)
        expect(response.json()['name'], 'name').to.equal("Bad Request")
        expect(response.json()['message'], 'error message').to.equal("Name is required")
    })
    describe('4. Mimin - UPDATE ELDP START_DATE IS NULL', () => {
        const response = UPDATE_START_DATE_IS_NULL(DATA_UPDATE)
        //assertion
        expect(response).to.have.validJsonBody()
        expect(response.status, 'API status code').to.equal(400)
        expect(response.json()['name'], 'name').to.equal("Bad Request")
        expect(response.json()['message'], 'message').to.equal("issuedDate is required")
    })
    describe('5. Mimin - UPDATE ELDP_ID IS NULL', () => {
        const response = UPDATE_ELDPID_IS_NULL(DATA_UPDATE)
        //assertion
        expect(response).to.have.validJsonBody()
        expect(response.status, 'API status code').to.equal(400)
        expect(response.json()['name'], 'name').to.equal("Bad Request")
        expect(response.json()['message'], 'error message').to.equal("Eldp id is required")
    }) 
 }  
}
