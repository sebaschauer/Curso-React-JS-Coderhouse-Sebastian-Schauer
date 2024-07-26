






const Promesas = () => {

    const miPromesa = new Promise((resolve, reject)=>{

        const ok = true;
            setTimeout(()=>{
                if(ok){
                    resolve('aca esta tu comida')
                    
                }else{
                    reject('tu comida todavia no esta lista')
                    
                }
            },3000)
    })
    
    miPromesa.then((res)=>{
            console.log(res)
    })
    miPromesa.catch((err)=>{
        console.log(err)
})


  return (
    <div>
        Promesas
        
    </div>
  )
}

export default Promesas