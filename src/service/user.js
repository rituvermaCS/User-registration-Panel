const END_POINT = "http://13.235.55.43/test/api/create_user";

export const createUser = (createUser) => {
    return new Promise((resolve, reject) => {
        if (!createUser) {
            return reject({});
        }
        const xhr = new XMLHttpRequest();
        xhr.open('POST', END_POINT, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(createUser));
        xhr.onload = function () {
            return resolve(JSON.parse(xhr.response));
        };
        xhr.onerror = function () {
            return reject({});
        };
    });
}