// Bài 1
function bai1(){
    let chu = ["a", "b", "c"]; // Mảng chữ
let so = [1, 2, 3] // Mảng số
let gop = chu.concat(so) // Gộp 2 mảng bằng concat
// Phương concat()thức này được sử dụng để hợp nhất hai hoặc nhiều mảng. Phương thức này không thay đổi các mảng hiện có mà thay vào đó trả về một mảng mới.
console.log(gop); // in ra kết quả
}
bai1()

// Bài 2
function kiemtra(num){ //function đầu tiên dùng dể xử lí nộp cho nó lệnh num %2 sẽ bằng 0
    return (num%2==0);
}
function kq() { //function nộp dữ liệu chạy
    let so = [1, 2, 3, 4] // Tạo 1 mảng số bất kì
    let xuli = so.every(kiemtra); // Xử lí như sau dùng mảng 'so' đã tạo + lệnh every giúp kiểm tra các phần tử trong 'so' bằng điều kiện function 1 thỏa mảng là true và ngược lại
    if (xuli==true) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}
kq()

// Bài 3
function kiemtra1(num1){
    return (num1%2==0);
}
function kq1() {
    let so1 = [1, 2, 3]
    let xuli1 = so1.some(kiemtra1); // some thì kiểm tra trong mảng nếu có số chẵn sẽ ra yes
    if (xuli1) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}
kq1()

//Bài 4
function ktra4(b4){ //Điều kiện
    return b4 > 0
}
function bai4() { // Xử lí
    let so4 = [1, -2, -5, 3, 5, -9] // Mảng số
    var checkso4 = so4.filter(ktra4); // xử lí mảng đã cho + filter để lọc nếu thỏa mảng với điều kiện true thì mảng giữ nguyên còn fales thì sẽ bị loại.
    console.log(checkso4)
}
bai4()

//Bài 5
function ktra5(b5){ // Điều kiện
    return b5 >= 0;
}

function bai5() { // Xử lí
    let a = [-1, 2, 3, 4, -5] // Mảng số
    var b = a.find(ktra5); 
    var c =  a.findIndex(ktra5);
    if(c, b){
        console.log(c, b)
    }else{
        console.log("No result")
    }
}
bai5() // Bài này em không hiểu lắm nên anh giải thích giúp em ạ

//Bài 6
function bai6() {
    let so6 = [1, 5, 30, 40, 26,]
    so6.forEach(function(xuli6) { // Dùng forEach để xử lí nhanh gọn tạo function cho nó điều kiện if 
        if(xuli6 % 5 == 0){
            console.log(xuli6);
        }
    });
}
bai6()

//Bài 7
function bai7(){
    let so7 = [-1 , 2, 3, 4, 2, 5]
    var a =  so7.indexOf(2)
    var b =  so7.lastIndexOf(2)
    
    if(a === -1){
        console.log('No result')
    }
    else{
        console.log(a,b)
    }
}
bai7() 

//Bài 8
function bai8() {
    let so8 = [1, 2 ,3]
    console.log(so8.join(', ')) //Phương thức join() tạo và trả về một chuỗi mới bằng cách nối tất cả các phần tử trong một mảng 
}
bai8()

//Bài 9
function ktr9(xuli9){ // Xử lí
    return Math.abs(xuli9); // Math.abs trả về giá trị tuyệt đối
}
function bai9() {
    let so9 = [2, -1, 3, -5]
    let kq9 = so9.map(ktr9); //Phương thức map() tạo ra một mảng mới với kết quả gọi một hàm được cung cấp trên mọi phần tử trong mảng gọi.
    console.log(kq9);
}
bai9()