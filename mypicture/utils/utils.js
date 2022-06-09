function request(url, method, data, success, fail) {
    tt.request({
        url: url,
        method: method,
        data: data || {},
        header: { "content-type": "application/json" },
        dataType: "json",
        responseType: "text",
        success(res) {
            if (typeof success === 'function') {
                success(res)
            }
        },
        fail(err) {
            if (typeof fail === 'function') {
                fail(err)
            }
        }
    })
}

export {
    request
} 