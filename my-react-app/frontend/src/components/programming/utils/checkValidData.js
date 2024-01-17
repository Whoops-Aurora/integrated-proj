export const checkValidData=(email,password)=>{
    const validate_email=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);//It returns true or false
    const validate_password=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!validate_email) return "Email is Incorrect"
    if(!validate_password) return "Password is incorrect"
    return null;
}