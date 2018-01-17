$(document).ready(function(){
  $("form#stressTest").submit(function(event){
    event.preventDefault();
    $("#warning-responses").show();
    $("input:checkbox[name=warningSigns]:checked").each(function(){
      var warning = $(this).val();
      $('#warning-responses').append(warning + "<br>");
    });
    $("#symptom-responses").show();
    $("input:checkbox[name=symptoms]:checked").each(function(){
     var symptom = $(this).val();
     $('#symptom-responses').append(symptom + "<br>");
   });
    $('#transportation_survey').hide();
 });
});
