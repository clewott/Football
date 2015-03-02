
  $(".group").on("mouseover", function() {
    $(this).css("opacity", "0.5");
  });
  $(".group").on("mouseout", function() {
    $(this).css("opacity", "1");
  });

  $.ajax ('https://profootballapi.com/schedule',
    {
      type: 'POST',
      dataType: 'JSON',
      data: {'api_key': 'AoHkQtgGPMs51lLmR30ZTUOw6F2yNxai','season_type':'REG','year':'2014'},
      success: function(data, status) {
      }
    }
  )
    .done(function(data) {
         var info = data;
         var seattle = [];
         for(var i = 0; i < info.length; i++) {
             if(info[i].home == "SEA" || info[i].away == "SEA") {
                 seattle.push(info[i]);
             }
         };
         console.log(seattle);
      });