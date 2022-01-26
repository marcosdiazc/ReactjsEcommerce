const data = [

    {
        id: 1,
        Image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        title: "Ryzen 5 3600",
        descripcion : "Procesador de alto rendimiento",
        categoria: "Procesadores",
        price: "1.000.000",
        stock: "10"
    },
    {
        id: 2,
        Image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        title: "Ryzen 5 3900",
        descripcion : "Procesador de alto rendimiento secundario",
        categoria: "Procesadores",
        price: "500.000",
        stock: "8"


    },


    {
        id: 3,
        Image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        title: "Ryzen 5 2900",
        descripcion : "Procesador de gama media",
        categoria: "Procesadores",
        price: "300.000",
        stock: "5"


    }
]



const getProducts = new Promise((resolve) => {
    setTimeout(() => {
        resolve(data);
        }, 2000)
});

export default getProducts;
