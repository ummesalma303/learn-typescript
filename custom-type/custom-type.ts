type requestType = "GET" | "POST"

let GetRequest: requestType;
GetRequest = "GET"

function requestFunc(request:requestType) {
    console.log(request)
}

requestFunc('GET')