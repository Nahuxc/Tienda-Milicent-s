const dataBase = [
    {
        id: 1,
        marca: "Milicent´s Century",
        nombre: "Buzo Milicent´s",
        img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/214/214/products/saddie-quemado1-8117ee915dcabafb6816642902310713-640-0.webp",
        precio: 10250,
        descripcion : "descripcion del buzo",
        stock: 0,
        categoria: "Urbano",
        tipo: "Buzo",
        descuento: 9225,
        talle: "M",
        color: "Blanco/Negro"
    },
    {
        id: 2,
        marca: "Milicent´s Century",
        nombre: "Buzo Milicent´s",
        img: "https://i0.wp.com/cervezaminga.com/wp-content/uploads/2013/06/BuzoMujer-copia.png?fit=844%2C1024&ssl=1",
        precio: 8400,
        descripcion : "descripcion del buzo",
        stock: 15,
        categoria: "Urbano",
        tipo: "Buzo",
        descuento: 6300,
        talle: "S",
        color: "Negro"
    },
    {
        id: 3,
        marca: "Milicent´s Century",
        nombre: "Bulls NBA Milicent´s",
        img: "https://www.pimps.cl/wp-content/uploads/2022/05/NBAHD62201-BLK-2.png",
        precio: 14000,
        descripcion : "descripcion del buzo",
        stock: 26,
        categoria: "Sport",
        tipo: "Buzo",
        descuento: 11900,
        talle: "M",
        color: "Negro/unico"
    },
    {
        id: 4,
        marca: "Milicent´s Century",
        nombre: "Buzo Milicent´s",
        img: "https://www.walon.com.pe/web/image/product.image/15540/image_1024/BUZO%20DEPORTIVO%20BLENS%2022B%20DAMA?unique=63b0fcc",
        precio: 5500,
        descripcion : "descripcion del buzo",
        stock: 21,
        categoria: "Sport",
        tipo: "Buzo",
        descuento: 4950,
        talle: "S",
        color: "Rosa/azul"
    },
    {
        id: 5,
        marca: "Milicent´s Century",
        nombre: "Buzo Overzise Milicent´s",
        img: "https://i.pinimg.com/originals/e0/98/dc/e098dcc832acc9289c6414fefcd82ee4.png",
        precio: 9300,
        descripcion : "descripcion del buzo",
        stock: 12,
        categoria: "Invierno",
        tipo: "Buzo"
    },
    {
        id: 6,
        marca: "Milicent´s Century",
        nombre: "Vestido Juvenil Milicent´s",
        img: "https://i.pinimg.com/originals/6c/53/b0/6c53b04159f12cf3a0436dfeb2fbd5d8.png",
        precio: 12200,
        descripcion : "descripcion del vestido",
        stock: 15,
        categoria: "Formal",
        tipo: "Vestido"
    },
    {
        id: 7,
        marca: "Milicent´s Century",
        nombre: "Vestido Formal Cian Milicent´s",
        img: "https://i.pinimg.com/originals/b5/e7/37/b5e7373db162b37e61af54e02a89b175.png",
        precio: 12500,
        descripcion : "descripcion del vestido",
        stock: 10,
        categoria: "Formal",
        tipo: "Vestido"
    },
    {
        id: 8,
        marca: "Milicent´s Century",
        nombre: "Vestido Formal Juvenil Milicent´s",
        img: "https://cdnx.jumpseller.com/kadrihel1/image/22839873/resize/635/635?1648210914",
        precio: 18000,
        descripcion : "descripcion del buzo",
        stock: 7,
        categoria: "Formal",
        tipo: "Vestido"
    },
    {
        id: 9,
        marca: "Milicent´s Century",
        nombre: "Vestido De Noche Milicent´s",
        img: "https://media.vogue.mx/photos/638a3315b60c401631905ae7/master/w_1600%2Cc_limit/MANGO.png",
        precio: 9500,
        descripcion : "descripcion del buzo",
        stock: 14,
        categoria: "Formal",
        tipo: "Vestido"
    },
    {
        id: 11,
        marca: "Milicent´s Century",
        nombre: "Pantalon Milicent´s",
        img: "https://ae03.alicdn.com/kf/H78814a2fdcd248389327908bb315b0d8T.jpg",
        precio: 7400,
        descripcion : "descripcion del buzo",
        stock: 34,
        categoria: "Urbano",
        tipo: "Pantalon",
        descuento: 6600,
        talle: "38",
        color: "blanco"
    },
    {
        id: 12,
        marca: "Milicent´s Century",
        nombre: "Pantalon Urbano Cargo Milicent´s",
        img: "https://ae01.alicdn.com/kf/HTB1itN2U3HqK1RjSZFkq6x.WFXaq.jpg",
        precio: 12600,
        descripcion : "descripcion del buzo",
        stock: 27,
        categoria: "Urbano",
        tipo: "Pantalon",
        descuento: 11340,
        talle: "38",
        color: "Negro"
    },
    {
        id: 13,
        marca: "Milicent´s Century",
        nombre: "Short Urban Milicent´s",
        img: "https://sc01.alicdn.com/kf/H40b49574db7145f880884a94bc2b20024/201634594/H40b49574db7145f880884a94bc2b20024.png_.webp",
        precio: 7800,
        descripcion : "descripcion del buzo",
        stock: 17,
        categoria: "Urbano",
        tipo: "Short",
        descuento: 7020,
        talle: "37",
        color: "Reflex/blanco"
    }
  ]


export const getProducts = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(dataBase)
        }, 500)
    })
}

export const getProductsId = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(dataBase.find(data => data.id === id))
        }, 500)
    })
}

