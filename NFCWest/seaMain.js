$.ajax ('https://profootballapi.com/schedule',
    {
        type: 'POST',
        dataType: 'JSON',
        data: {'api_key': 'AoHkQtgGPMs51lLmR30ZTUOw6F2yNxai','season_type':'REG','year':'2014'}
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

        var tr;

        for (var j = 0; j < seattle.length; j++) {
            tr = $('<tr/>');
            tr.append("<td>" + seattle[j].week + "</td>");
            tr.append("<td>" + seattle[j].home + "</td>");
            tr.append("<td>" + seattle[j].away + "</td>");

            $('.scheduleTable').append(tr);
        }
    });

$.ajax ('https://profootballapi.com/teams',
    {
        type: 'POST',
        dataType: 'JSON',
        data: {'api_key': 'AoHkQtgGPMs51lLmR30ZTUOw6F2yNxai','team':'SEA','season_type':'REG','year':'2014'}
    }
)
    .done(function(data) {
        var info = data;
        var lastGameStats = [];
        for(var i = 0; i < info.length; i++) {
            lastGameStats.push(info[i]);
        }

        var tr;

        for(var j = 0; j < lastGameStats.length; j++) {
            tr = $('<tr/>');
            tr.append("<td>" + lastGameStats[j].opponent + "</td>");
            tr.append("<td>" + lastGameStats[j].pen + "</td>");
            tr.append("<td>" + lastGameStats[j].penyds + "</td>");
            tr.append("<td>" + lastGameStats[j].pyds + "</td>");
            tr.append("<td>" + lastGameStats[j].ryds + "</td>");
            tr.append("<td>" + lastGameStats[j].totfd + "</td>");
            tr.append("<td>" + lastGameStats[j].totyds + "</td>");
            tr.append("<td>" + lastGameStats[j].trnovr + "</td>");

            $('.statsTable').append(tr);
        }
    });