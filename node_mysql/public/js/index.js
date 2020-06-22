//简单请求
// fetch("http://127.0.0.1:9529/api/student/655")
// .then((resp) => resp.json())
// .then((resp) => {
//     console.log(resp)
// })

//预检请求
// fetch("http://127.0.0.1:9529/api/student", {
//     method: "POST",
//     headers: {
//         "content-type": "application/json",
//         a: 1,
//     },
//     credentials: 'include'
// }).then(resp => resp.json()).then((resp) => {
//     console.log(resp)
// })



// document.getElementById('login').onclick = () => {
//     fetch("http://127.0.0.1:9529/api/admin/login",{
//         method: "post",
//         headers: {
//             "content-type": "application/json"
//         },
//         body: JSON.stringify({
//             loginId: "wk",
//             loginPwd: "123456"
//         })
//     }).then((resp) => resp.json())
//     .then((resp) => {
//         console.log(resp)
//     })
// }
// document.getElementById('put_student').onclick = () => {
//     fetch("http://127.0.0.1:9529/api/student/655",{
//         method: "put",
//         headers: {
//             "content-type": "application/json"
//         },
//         body: JSON.stringify({
//             name: "wangka"
//         })
//     }).then((resp) => resp.json())
//     .then((resp) => {
//         console.log(resp)
//     })
// }

