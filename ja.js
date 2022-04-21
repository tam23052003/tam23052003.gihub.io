function send(){
    var arr = document.getElementsByTagName('input');
    var hoten = arr[0].value;
    var mk = arr[1].value;
    if(hoten=="" || mk==""){
        alert("Vui lòng nhập đầy đủ thông tin");
        return false;
    }
else{
    alert("Tài khoản "+ hoten + " đã đăng nhập thành công");
}
    
}
