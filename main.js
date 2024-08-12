class ProductManager{
    
    constructor(){
        this.productsList = []

    }

    //metodos
    //agregar productos
    static productoId = 0
    getProducts(){
       return this.productsList
       
    }

    addPproducts(nombre, descripcion,precio, thumbnail, sku, stock){
        ProductManager.productoId++
        let producto={
            nombre,
            precio,
            descripcion,
            thumbnail,
            sku,
            stock,
            prodcutoId:ProductManager.productoId

        }
        this.productsList.push(producto)
    }
    
    getProductsById(id){
       for (let i =0; i<=this.productsList.length;i++){
            if (i == id){
                console.log(this.productsList[i-1])
            }
       }
    }
}

producto = new ProductManager()
producto.addPproducts("nombre", "des", 1000, "img.png", 10000156469, 58)
producto.addPproducts("nombre", "des", 1000, "img.png", 10000156469, 58)
producto.addPproducts("nombre", "des", 1000, "img.png", 10000156469, 58)
producto.addPproducts("nombre", "des", 1000, "img.png", 10000156469, 58)
producto.addPproducts("nombre", "des", 1000, "img.png", 10000156469, 58)
producto.addPproducts("nombre", "des", 1000, "img.png", 10000156469, 58)

//console.log(producto.getProducts())

console.log(producto.getProductsById(2))