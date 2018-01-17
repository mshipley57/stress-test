$(document).ready(function(){
  $("form#stressTest").submit(function(event){
    event.preventDefault()

    var resultArray = [];


    $("#stressTest").show();


    $("input:checkbox[name=warningSigns]:checked").each(function(){
        var warningResult = parseInt($(this).val());
        resultArray.push(warningResult);
    });

    $("input:checkbox[name=symptoms]:checked").each(function(){
     var symptomResult = parseInt($(this).val());
     resultArray.push(symptomResult);
   });

   $("input:checkbox[name=rec]:checked").each(function(){
    var responseResult = parseInt($(this).val());
    resultArray.push(responseResult);
    });

    console.log(resultArray);

    var result = resultArray.reduce(function(a, b){
      return a + b;
    });
    console.log(result);

    if (result < 4) {
      $("#mild").show();
    } else if (result == 5) {
     $("#moderate").show();
   } else if (result >= 6) {
     $("#extreme").show();
   }
  });




    // $('#stressTest').hide();
 });
//});
