function createProduct(img, name, price,id) {
    let product = new Object();
    product.img = img;
    product.name = name;
    product.price = price;
    if(id!=null){
        product.id=id;
    }else {
        product.id=createId();
    }
    product.toJson = function () {
        let json = JSON.stringify(this);
        return json;
    }
    product.fromJSON = function (json) {
        let doiTuongDD = new Object();
        let doiTuong = JSON.parse(json);
        doiTuongDD = createProduct(doiTuong.img, doiTuong.name, doiTuong.price)
        return doiTuongDD;
    }
    return product;
}

// chuyển danh sách sản phẩm sang đoạn HTML để hiển thị được danh sách sản phẩm
// input: danh sách sản phẩm
// output: hiển thị ds sản phẩm
function convertListProductToHTML(listProduct) {
    let HTMLListProduct = '<div class="swiper-wrapper">';
    for (let i = 0; i < listProduct.length; i++) {
        let product = listProduct[i];
        let htmlProduct = convertProductToHTML(product);
        HTMLListProduct = HTMLListProduct + htmlProduct;
    }
    HTMLListProduct = HTMLListProduct + '</div>'
    return HTMLListProduct;
}

function convertProductToHTML(product) {
    product= createProduct(product.img, product.name, product.price, product.id)
    let html = '';
    html += '<div class ="swiper-slide slide">'
    html += ' <div class ="image">'
    html += '<img src="' + product.img + '" alt="">'
    html += ' <div class ="icons">'
    html += ' <a onclick="addToCart(\''+product.id+'\')" class ="fas fa-shopping-cart"></a>'
    html += ' <a href="#" class ="fas fa-eye"></a>'
    html += ' <a href="#" class ="fas fa-share"></a>'
    html += '</div>'
    html += '</div>'
    html += '<div class="content">'
    html += ' <h3>' + product.name + '</h3>'
    html += '<div class="price"> ' + product.price + '</div>'
    html += '<div class="stars">'
    html += ' <i class="fas fa-star"></i>'
    html += '<i class="fas fa-star"></i>'
    html += '<i class="fas fa-star"></i>'
    html += '<i class="fas fa-star"></i>'
    html += '<i class="fas fa-star-half-alt"></i>'
    html += '</div>'
    html += '</div>'
    html += '</div>'

    return html;
}
//Truy xuất đối tượng
//input:id
//output: đối tượng có Id=id
// function getProductToId(id){
//     //b1: lay len danh sach toan bo doi tuong
//     let jsonListProduct= localStorage.getItem("listProduct")
//     let listProduct=JSON.parse(jsonListProduct)
//     //b2: duyet toanf bo doi tuong, kiem tra xem id cua doi tuong co bang voi JD truyen vao k
//     for(let i=0; i<listProduct.length; i++){
//         let productPresent= listProduct[i];
//         if(productPresent.id==id){
//             return productPresent;
//         }
//     }
// }
// từ id sản phẩm lấy lên đối tượng sản phẩm với đầy đủ các hàm bên trong
//input: idProduct
// output: product
function  getProductfromId(idProduct){
    let product= new Object();
    let listProduct=getListProductFromLocalStorage();
    for(let i=0; i<listProduct.length;i++){
        let productPresent= listProduct[i];
        if(productPresent.id==idProduct){
            product= productPresent;
        }
    }
    product= createProduct(product.img, product.name, product.price, product.id)
    return product;
}
function getListProductFromLocalStorage(){
    let jsonListProduct= localStorage.getItem("listProduct");
    let listProduct= JSON.parse(jsonListProduct);
    return listProduct;
}

