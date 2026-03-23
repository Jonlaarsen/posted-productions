
export const login = async (formData) => {
    'use server';
    console.log(formData)
    const abc = process.env.USERNAME
    console.log(abc)
    console.log("hello")


    const username = formData.get('username') ;
    const password = formData.get('password') ;
    if(username === process.env.USERNAME && password === process.env.PASSWORD){
        return console.log("succes")
        
    } else {
        return console.log("failed login")
    }
}