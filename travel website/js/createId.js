function createId(){
    let id="";
    // lấy milisecond ở thời điểm hiện tại
    id= Math.random().toString().substr(2,10)+"_"+String(new Date().getTime());
    return id
}