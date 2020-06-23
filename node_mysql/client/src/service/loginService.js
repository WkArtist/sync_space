import request from "./request"

export async function login (loginId, loginPwd) {
    await delay(1000);
    const resp = await request().post("/api/admin/login", {
        loginId,
        loginPwd
    });
    return resp.data
}

export function loginOut () {
    localStorage.removeItem("token")
}

export async function whoAmI() {
    await delay(1000);
    const resp = await request().get("api/admin/whoami");
    return resp.data;
}

function delay(duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, duration);
    });
}