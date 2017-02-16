$(document).ready(function () {
  $("#button1").on('click', function(){
    $.ajax({
      url: ' http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'text'
    }).done(function(responseData){
      console.log(responseData);
    });
  });

  $('#button2').on('click', function(){
    $.ajax({
      url:' http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
      dataType: 'text'
    }).done(function(responseData){
      console.log(responseData);
      var msg = document.createElement('p');
      $(msg).text(responseData);
      $('#step3456').append(msg);
    }).fail(function(jqXHR, textStatus, errortThrown){
        $('#step3456').append(jqXHR.responseText);
        $('#step3456').append("Sorry, response failed!");
        console.log("Failed!");
        console.log(jqXHR);
    }).always(function(){
        console.log("Hey the request finished!");
        $('#step3456').append("Hey the request finished!");
    });
  });
  $('#button3').on('click',function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      data: {amount: 5},
      dataType: 'text',
    }).done(function(responseData){
      var message = document.createElement('p');
      $(message).text(responseData);
      $('#step7').append(message);
    });
  });
  $('.button4').on('click',function(){

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data:{timezone: 'UTC'},
      dataType:'text'
    }).done(function(responseData){
      var postmsg = document.createElement('p');
      $(postmsg).text(responseData + "\t Hello World!");
      $('#step8').append(postmsg);
      console.log(responseData);
    });
  });
  $('.button5').on('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method:'GET',
      dataType: 'html'
    }).done(function(responseData){
      var li = document.createElement('li');
      $(li).text(responseData);
      $('#list').append(responseData);
      console.log("Sending Datas across the worlddd");
    });
  });
});
