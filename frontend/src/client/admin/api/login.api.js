const loginApi = async(data)=>{
    try{
        let res = await fetch("/admin/login",{
            method:"POST",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        });
        return res;
    }
    catch(err){
        console.log(err)
    }
}
export {loginApi};