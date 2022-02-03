const signup = async(data)=>{
    try{
       let res = await fetch("/admin/signup", {
           method:"POST",
           headers:{
               Accept:"application/json",
               "Content-Type":"application/json"
           },
           body: JSON.stringify(data)
       })
       console.log(res.body);
       return await res.json();
    }
    catch(err){
        console.log(err);
    }
}

export {signup};