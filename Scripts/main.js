$(document).ready(function() {

  $(".group").on("mouseover", function() {
    $(this).css("opacity", "0.5");
  });
  $(".group").on("mouseout", function() {
    $(this).css("opacity", "1");
  });

  var schedule = [];

  $.ajax ('https://profootballapi.com/schedule',
    {
      type: 'POST',
      data: {'api_key': 'AoHkQtgGPMs51lLmR30ZTUOw6F2yNxai'},
      success: function(data, status) {
        console.log(status);
        schedule = data;
      }
    }
  )

});
