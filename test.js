function validateCode(str){
    var TCode = str;
    if( /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/.test( TCode ) ) {
      
       return true;
    }
    return false;     
 };

 console.log(validateCode("abcd"));