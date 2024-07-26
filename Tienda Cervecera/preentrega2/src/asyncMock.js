

const products = [
    {   id:"1",
        name:"Pale Ale",
        price:3800,
        category:"cervezas",
        subcategory:"Rubias",
        description:"Cerveza balanceada, de lupulos americanos. Facil de tomar y super refrescante",
        img:"/img/Pale_Ale_Californian_Brewdog.png",
        stock:24
    },
    {   id:"2",
        name:"Stout",
        price:3800,
        category:"cervezas",
        subcategory:"Negras",
        description:"Cerveza balanceada, de lupulos americanos. Facil de tomar y super refrescante",
        img:"/img/Porter_Bells.png",
        stock:12
    },
    {   id:"3",
        name:"IPA",
        price:4800,
        category:"cervezas",
        subcategory:"Especiales",
        description:"Cerveza balanceada, de lupulos americanos. Facil de tomar y super refrescante",
        img:"/img/IPA_Lagunitas.png",
        stock:24
    },
    {   id:"4",
        name:"Red Ale",
        price:3800,
        category:"cervezas",
        subcategory:"Rojas",
        description:"Cerveza balanceada, de lupulos americanos. Facil de tomar y super refrescante",
        img:"/img/Amber_Ale_Fat_Tire.png",
        stock:12
    },
    {   id:"5",
        name:"Gorra",
        price:8800,
        category:"merchandising",
        subcategory:"Indumentaria",
        description:"Cerveza balanceada, de lupulos americanos. Facil de tomar y super refrescante",
        img:"/img/Gorra_Coors.png",
        stock:10
    },
    {   id:"6",
        name:"Buzo",
        price:20000,
        category:"merchandising",
        subcategory:"Indumentaria",
        description:"Cerveza balanceada, de lupulos americanos. Facil de tomar y super refrescante",
        img:"/img/Hoodie_Gris_Cerveza.png",
        stock:8
    },
    {   id:"7",
        name:"Vaso",
        price:7800,
        category:"merchandising",
        subcategory:"Otros",
        description:"Cerveza balanceada, de lupulos americanos. Facil de tomar y super refrescante",
        img:"/img/Chop_Logo.png",
        stock:10
    },
    {   id:"8",
        name:"Destapador",
        price:"3800",
        category:"merchandising",
        subcategory:"Otros",
        description:"Cerveza balanceada, de lupulos americanos. Facil de tomar y super refrescante",
        img:"/img/Abridor_Paulaner.png",
        stock:"10"
    }

];




export const getProducts = ()=>{ 
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products);
        },1000);
    });
};



export const getProductById = (productId) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find((prod) => prod.id === productId));
        },1000);
    });
};


export const getProductByCategory = (categoryId) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.filter((prod) => prod.category === categoryId));
        },1000);
    });
};


