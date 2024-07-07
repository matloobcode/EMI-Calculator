function AmountChange(){
    document.getElementById("txtAmount").value = 
    document.getElementById("rangeAmount").value;
   }

   function YearChange(){
    document.getElementById("txtYears").value =
    document.getElementById("rangeYear").value;
   }

   function RateChange(){
    document.getElementById("txtRate").value =
    document.getElementById("rangeRate").value;
   }

   function CalculateClick(){
    var p = parseInt(document.getElementById("txtAmount").value);
    var r = parseFloat(document.getElementById("txtRate").value)/100/12;
    var n = parseFloat(document.getElementById("txtYears").value)*12;
    var emi = p * r / (1- (Math.pow(1/(1 + r), n)));

    document.getElementById("result").innerHTML = `EMI Amount : &#8377; ${Math.round(emi)}`;
   }