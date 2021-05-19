function InvalidMsg(textbox) {
    if (textbox.value === '') {
        if(textbox.name == 'name'){
            textbox.setCustomValidity
              ('Vui lòng nhập tên !');
        } else if (textbox.name == 'age'){
            textbox.setCustomValidity
              ('Vui lòng nhập tuổi !');
        } else if (textbox.name == 'phone'){
            textbox.setCustomValidity
            ('Vui lòng nhập số điện thoại !')
        } else if (textbox.name == 'email'){
            textbox.setCustomValidity
            ('Vui lòng nhập Email !')
        } else if (textbox.name == 'diachi'){
            textbox.setCustomValidity
            ('Vui lòng nhập địa chỉ !')
        } else if (textbox.name == 'id'){
            textbox.setCustomValidity
            ('Vui lòng nhập mã sinh viên !')
        } else if (textbox.name == 'class'){
            textbox.setCustomValidity
            ('Vui lòng nhập lớp !')
        } else if (textbox.name == 'khoa'){
            textbox.setCustomValidity
            ('Vui lòng nhập chuyên ngành !')
        } else if (textbox.name == 'gender') {
            textbox.setCustomValidity
            ('Vui lòng chọn giới tính !')
        }        
    } else {
        textbox.setCustomValidity('');
    }
    return true;
  }
  
//   function validate () {
//     var name = document.getElementById("name").value;
//     var age = document.getElementById("age").value;
//     var phone = document.getElementById("phone").value;
//     var email = document.getElementById("email").value;
//     var diachi = document.getElementById("diachi").value;
//     var number = document.getElementById("number").value;
//     var lop = document.getElementById("class").value;
//     var khoa = document.getElementById("khoa").value;
  


//     function required (name) {
//         if (value == ""){
//             document.getElementById("username_error").innerHTML = 
//             " vui long nhap day du ho ten";
//         } else {
//             document.getElementById("username_error").innerHTML =
//             "";
//         }
//     }

//     let arrvalue = [];
//     function lenght (arrvalue){
//         for (i=0; i< arrvalue.lenght ; i++){
//             if ( arrvalue < 5 ) {
//                 document.getElementsByClassName().innerHTML= "" ;
//             } else {
//                 document.getElementsByClassName().innerHTML = "";
//             }
        
//     }
//     }


//   }

  


 
  