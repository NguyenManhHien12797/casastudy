//b1: phan tich luu tru gio hang trong localStorages
// 1. sản phẩm là gì---> sử dụng ID của sp để lưu
// 2. số lượng sp
//b2: xây dựng hàm tạo nhanh đối tượng item giỏ hàng
//b3: lấy ds giỏ hàn trong localStorage
//b4: Nếu sp đã tồn tại trong giỏ hàng r thì tăng số lượng lên
//b5: Nếu sp chưa có trong giỏi thì thêm mới


//Yêu cầu: tạo ra đối tượng item giỏ hàng
// input: idProduct, amount
//output: Đối tượng item giỏ hàng
let keyLocalStorageShoppingCart='listShoppingCart';
function createShoppingCart(idProduct, amount){
    let shoppingCart=new Object();
    shoppingCart.idProduct= idProduct;
    shoppingCart.amount= amount;
    return shoppingCart;
}
// yêu cầu lấy ra toàn bộ các item được lưu trữ trong localStorages


function getListShoppingCart(){
    let listShoppingCart= new Array();
    // b1: lấy chuỗi json lưu trự trong local storage
    let jsonListShoppingCart= localStorage.getItem(keyLocalStorageShoppingCart);
    //b2: chuyển từ json qua ds item giỏ hàng
    if(jsonListShoppingCart!=null){
        listShoppingCart= JSON.parse(jsonListShoppingCart)
    }
    return listShoppingCart;
}
//lưu trữ danh sách item giỏ hàng
// input: danh sách item giỏ hàng
// output: không có
function saveListShoppingCartToLocalStorage(listShoppingCart){
    // b1: chuyển thành chuỗi json
    let jsonListShoppingCart= JSON.stringify(listShoppingCart);
    // b2: lưu vào localStorage
    localStorage.setItem(keyLocalStorageShoppingCart,jsonListShoppingCart);

}
function deleteProduct(){

}