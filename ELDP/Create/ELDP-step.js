import http from 'k6/http'
import { BASEURL_ADMIN, TOKEN } from './ELDP-env.js'

export function CreateELDP(requestData) {
    const url = `${BASEURL_ADMIN}/admin/eldp/create`
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
    const response = http.post(url, payload, params)
    return response
}

export function Create_Same_ELDP(CREATE_SAME_ELDP) {
    const url = `${BASEURL_ADMIN}/admin/eldp/create`
    const payload = JSON.stringify(CREATE_SAME_ELDP)
    const params = {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${TOKEN}`
        }
    }
    const response = http.post(url, payload, params)
    return response
}

export function Create_Without_Name(requestData) {
    const url = `${BASEURL_ADMIN}/admin/eldp/create`
    const payload = JSON.stringify({
        
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
    const response = http.post(url, payload, params)
    return response
}

export function Create_Without_Diterbitkan(requestData) {
    const url = `${BASEURL_ADMIN}/admin/eldp/create`
    const payload = JSON.stringify({
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
    const response = http.post(url, payload, params)
    return response
}

export function Create_Without_Selesai(CREATE_WITHOUT_SELESAI) {
    const url = `${BASEURL_ADMIN}/admin/eldp/create`
    const payload = JSON.stringify(CREATE_WITHOUT_SELESAI)
    const params = {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${TOKEN}`
        }
    }
    const response = http.post(url, payload, params)
    return response
}

export function Create_With_Empty_Type(CREATE_WITH_EMPTY_TYPE) {
    const url = `${BASEURL_ADMIN}/admin/eldp/create`
    const payload = JSON.stringify(CREATE_WITH_EMPTY_TYPE)
    const params = {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${TOKEN}`
        }
    }
    const response = http.post(url, payload, params)
    return response
}

export function Create_With_Empty_ImageUrl(CREATE_WITH_EMPTY_IMAGEURL) {
    const url = `${BASEURL_ADMIN}/admin/eldp/create`
    const payload = JSON.stringify(CREATE_WITH_EMPTY_IMAGEURL)
    const params = {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${TOKEN}`
        }
    }
    const response = http.post(url, payload, params)
    return response
}

export function Create_Without_Title_And_actionUrl(EMPTY_TITLE_AND_ACTIONURL) {
    const url = `${BASEURL_ADMIN}/admin/eldp/create`
    const payload = JSON.stringify(EMPTY_TITLE_AND_ACTIONURL)
    const params = {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${TOKEN}`
        }
    }
    const response = http.post(url, payload, params)
    return response
}

export function Create_Without_Description(CREATE_ELDP_WITHOUT_DESCRIPTION) {
    const url = `${BASEURL_ADMIN}/admin/eldp/create`
    const payload = JSON.stringify(CREATE_ELDP_WITHOUT_DESCRIPTION)
    const params = {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${TOKEN}`
        }
    }
    const response = http.post(url, payload, params)
    return response
}

export function Create_With_Empty_Order(CREATE_ELDP_WITHOUT_ORDER) {
    const url = `${BASEURL_ADMIN}/admin/eldp/create`
    const payload = JSON.stringify(CREATE_ELDP_WITHOUT_ORDER)
    const params = {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${TOKEN}`
        }
    }
    const response = http.post(url, payload, params)
    return response
}

export function Create_ELDP_Type_Tag(requestData) {
    const url = `${BASEURL_ADMIN}/admin/eldp/create`
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
    const response = http.post(url, payload, params)
    return response
}

export function Create_ELDP_Type_Tag_Empty(CREATE_ELDP_TAG_EMPTY_TYPE) {
    const url = `${BASEURL_ADMIN}/admin/eldp/create`
    const payload = JSON.stringify(CREATE_ELDP_TAG_EMPTY_TYPE)
    const params = {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${TOKEN}`
        }
    }
    const response = http.post(url, payload, params)
    return response
}

export function Create_ELDP_Type_Tag_Empty_title(CREATE_ELDP_TAG_EMPTY_TITLE) {
    const url = `${BASEURL_ADMIN}/admin/eldp/create`
    const payload = JSON.stringify(CREATE_ELDP_TAG_EMPTY_TITLE)
    const params = {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${TOKEN}`
        }
    }
    const response = http.post(url, payload, params)
    return response
}

export function Create_ELDP_Type_Tag_Empty_tagId(CREATE_ELDP_TAG_EMPTY_TAGID) {
    const url = `${BASEURL_ADMIN}/admin/eldp/create`
    const payload = JSON.stringify(CREATE_ELDP_TAG_EMPTY_TAGID)
    const params = {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${TOKEN}`
        }
    }
    const response = http.post(url, payload, params)
    return response
}

export function Create_ELDP_Type_Tag_TagLabel_Is_Empty(CREATE_ELDP_TAG_EMPTY_TAGLABEL) {
    const url = `${BASEURL_ADMIN}/admin/eldp/create`
    const payload = JSON.stringify(CREATE_ELDP_TAG_EMPTY_TAGLABEL)
    const params = {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${TOKEN}`
        }
    }
    const response = http.post(url, payload, params)
    return response
}