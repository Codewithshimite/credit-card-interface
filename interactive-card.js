
const btn = document.querySelector('.confirm-button')
const errorMessage = "Please Enter name"
const errorMessage2 ="Please enter  Number"






function displayMessage(){
    const inputElement = document.querySelector('.name-input');     /**Here,is where the input forms are bieng created with dispplay inputs on the card.  */
   document.querySelector('.name').innerHTML = inputElement.value;

   const inputCardNumber = document.querySelector('.num-input');
   document.querySelector('.card').innerHTML = inputCardNumber.value;

   const inputExpirymonth = document.querySelector('.exp-month');
   document.querySelector('.exp').innerHTML = inputExpirymonth.value

   const inputExpiryyear = document.querySelector('.exp-year');
   document.querySelector('.exp-Y').innerHTML = inputExpiryyear.value

   const inputcvv = document.querySelector('.exp-cvv');
   document.querySelector('.cvv').innerHTML = inputcvv.value

   const removeSlash = document.querySelector('.slash');
    document.querySelector('.slash').innerHTML = "/"

   
// validations

   if( inputElement.value ===  "" &&  inputCardNumber.value === "" && inputExpirymonth.value === "" && inputExpiryyear.value === "" && inputcvv.value === "") {
    
/**Here, if the inputs are left blank   */

 document.querySelector('.name').innerHTML = errorMessage;
 document.querySelector('.card').innerHTML = errorMessage2;
 document.querySelector('.exp').innerHTML = "invalid";
 document.querySelector('.exp-Y').innerHTML = "";
 document.querySelector('.cvv').innerHTML = "invalid";
 document.querySelector('.slash').innerHTML = ""

   
/**Here, if only  the inputs are left blank   */
   }

   if (inputElement.value ===  ""  ){
        document.querySelector('.name').innerHTML = errorMessage;


   }

   if ( inputCardNumber.value === "" ){
         document.querySelector('.card').innerHTML = errorMessage2;


   }

   if (inputExpirymonth.value === ""){
    document.querySelector('.exp').innerHTML = "invalid";
    document.querySelector('.exp-Y').innerHTML = "";
    document.querySelector('.slash').innerHTML = ""
    document.querySelector('.cvv').innerHTML = "Invalid";
   

   }

   if (inputExpiryyear.value === "" ){
    document.querySelector('.exp-Y').innerHTML = "invalid";
    document.querySelector('.exp').innerHTML = "";
    document.querySelector('.slash').innerHTML = "";
    document.querySelector('.cvv').innerHTML = "Invalid";
   }

    /**Here, if the month is above 12 months*/
   if (inputExpirymonth.value > 12 ){
    document.querySelector('.exp').innerHTML = "Invalid";
    document.querySelector('.exp-Y').innerHTML = "";
    document.querySelector('.slash').innerHTML = "";
    document.querySelector('.cvv').innerHTML = "Invalid";

   
   } /**Here, if the month is expired or the year is above 4 years  */
   if (inputExpiryyear.value < 23 ){
    document.querySelector('.exp-Y').innerHTML = "Expired";
    document.querySelector('.exp').innerHTML = "";
    document.querySelector('.slash').innerHTML = "";
    document.querySelector('.cvv').innerHTML = "Expired";
    alert("CARD EXPIRED");
   

   }

    /**Here, if the month is correct and year is invalid   */
   if (inputExpirymonth.value >= 0 && inputExpiryyear.value > 27){
    document.querySelector('.exp-Y').innerHTML = "Invalid";
    document.querySelector('.exp').innerHTML = " ";
    document.querySelector('.slash').innerHTML = "";
    document.querySelector('.cvv').innerHTML = "Invalid";
   

   }

  
  //  I was expected to make the error messages shown under the i put forms nut i decided to put it on the card, this is because i want the user to know where<br>
  //  The error message came from 


}


   



