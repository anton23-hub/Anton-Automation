import http from 'k6/http'
import { BASEURL_ADMIN, TOKEN } from './ELDP-env.js'

export function UPDATE(requestData) {
    const url = `${BASEURL_ADMIN}/admin/eldp/update`
    const payload = JSON.stringify({
        id:             requestData.id,
        name:           requestData.name,
        description:    requestData.description,
        issuedDate:     requestData.issuedDate,
        finishedDate:   requestData.finishedDate,
        eldpItems:      requestData.eldpItems,
    })
    const params = {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${TOKEN}`
        }
    }
    const response = http.put(url, payload, params)
    return response
}
export function ELDP_ID_NOT_FOUND(requestData) {
    const url = `${BASEURL_ADMIN}/admin/eldp/update`
    const payload = JSON.stringify({
        id:             requestData.id,
        name:           requestData.name,
        description:    requestData.description,
        issuedDate:     requestData.issuedDate,
        finishedDate:   requestData.finishedDate,
        eldpItems:      requestData.eldpItems,
    })
    const params = {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${TOKEN}`
        }
    }
    const response = http.put(url, payload, params)
    return response
}
export function DATA_UPDATE_NAME_IS_NULL(requestData) {
    const url = `${BASEURL_ADMIN}/admin/eldp/update`
    const payload = JSON.stringify({
        id:             requestData.id,
        description:    requestData.description,
        issuedDate:     requestData.issuedDate,
        finishedDate:   requestData.finishedDate,
        eldpItems:      requestData.eldpItems,
    })
    const params = {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${TOKEN}`
        }
    }
    const response = http.put(url, payload, params)
    return response
}
export function UPDATE_START_DATE_IS_NULL(requestData) {
    const url = `${BASEURL_ADMIN}/admin/eldp/update`
    const payload = JSON.stringify({
        id:             requestData.id,
        name:           requestData.name,
        description:    requestData.description,
        finishedDate:   requestData.finishedDate,
        eldpItems:      requestData.eldpItems,
    })
    const params = {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${TOKEN}`
        }
    }
    const response = http.put(url, payload, params)
    return response
}
export function UPDATE_ELDPID_IS_NULL(requestData) {
    const url = `${BASEURL_ADMIN}/admin/eldp/update`
    const payload = JSON.stringify({
        name:           requestData.name,
        description:    requestData.description,
        issuedDate:     requestData.issuedDate,
        finishedDate:   requestData.finishedDate,
        eldpItems:      requestData.eldpItems,
    })
    const params = {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${TOKEN}`
        }
    }
    const response = http.put(url, payload, params)
    return response
}