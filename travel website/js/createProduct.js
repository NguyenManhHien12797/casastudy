
function createProduct(img,name,price){
let product= new Object();
product.img=img;
product.name= name;
product.price= price;
    product.toJson=function (){
        let json= JSON.stringify(this);
        return json;
    }
    product.fromJSON=function (json){
        let doiTuongDD= new Object();
        let doiTuong=JSON.parse(json);
         doiTuongDD=createProduct(doiTuong.img,doiTuong.name,doiTuong.price)
        return doiTuongDD;
    }
return product;
}

// chuyển danh sách sản phẩm sang đoạn HTML để hiển thị được danh sách sản phẩm
// input: danh sách sản phẩm
// output: hiển thị ds sản phẩm
function convertListProductToHTML(listProduct){
let HTMLListProduct= '<div class="items">';
for(let i=0; i<listProduct.length; i++) {
    let product= listProduct[i];
    let htmlProduct= convertProductToHTML(product);
    HTMLListProduct= HTMLListProduct+ htmlProduct;
}
HTMLListProduct= HTMLListProduct+ '</div>'
    return HTMLListProduct;
}
function convertProductToHTML(product){
    let html='';
    html+='<div class="item">'
    html+= '<div class="item-thumb">'
    html+='<img src="'+product.img+'" alt="">'
    html+='<h2 class="item-title">'+product.name+'</h2>'
    html+='<div class="item-price"></div>'
    html+='<span class="item-price-origin">'+product.price+'</span>'
    html+='</div>'
    html+='<button class="btn btn-primary">Đưa vào giỏ hàng</button>'
    html+='</div>'

    return html;
}
function createId(){
    let id="";
    // lấy milisecond ở thời điểm hiện tại
    id= Math.random().toString().substr(2,10)+"_"+String(new Date().getTime());
    return id
}

console.log(createId())