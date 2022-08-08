var discord_id = "580681990240469013";
    
    function stats() {
    
        $.getJSON("https://api.lanyard.rest/v1/users/" + discord_id, (data) => {
            data = data.data;
            data2 = data.activities[0]; 
            data3 = data.activities; 
            wtive = data.discord_status;
            //new data since old is depriciated 
            gamedata = data.activities.name;
    
            if (data.listening_to_spotify) {
                $("#spotify").html(`<p class="nowplay"><span class="listening"> â— </span>Сейчас слушает: </p>
          <a class="data" target="_blank" href="https://open.spotify.com/track/${data.spotify.track_id}"<b>${data.spotify.song}</b> 
          <b>by <i>${data.spotify.artist}</i></b></a>`);
            } else {
              $("#spotify").html(`<p class="mainbox"><span class="offline"> â— </span> Сейчас Dark Soul ничего не слушает.</p>`)
            }
            if (data.discord_status) {
              $("#activen").html(`<h2> Сейчас я ${wtive}</h2>`);
            } else {
              $("#activen").html(`<h2> idfk </h2>`);
            }
            if (data3.length == 0) {
                $("#game").html(`<h1 class="nowplay2">Сейчас я не играю ни в одну игру.</h1>`);
            } else if (data3.length > 0) {
                if (data3[0].type == 4 || 2 && data3.length < 1) {
                    $("#game").html('<h1 class="nowplay2">Not playing any game</h1>');
                } else {
                    data2 = data3[0]
                    if (data2 === undefined) {
                        $("#game").html('<h1 class="nowplay2">Not playing any game</h1>');
                    } else {
                        if (data2.type == 0) {
    
                            var time = (data2.timestamps === undefined) ? "Unknown" : moment(data2.timestamps.start).format("HH:mm:ss");
    
    
                            $("#game").html(`<h1 class="nowplay2">Playing:</h1><p class="data"Играю в </h1><b>${data2.name}</b> 
          <b><i>${data2.details}</i>\n <i>${data2.state}</i>\n since <i>${time}</b>`);
                        } else if (data2.type == 4) {
                            data2 = data.activities[1];
                            $("#game").html(`<h1 class="nowplay2">Playing:</h1><p class="data"Играю в </h1><b>${data2.name}</b> 
          <b><i>${data2.details}</i>\n <i>${data2.state}</i>\n since <i>${time}</b>`);
                        } else {
                            $("#game").html('<h1 class="nowplay2">Сейчас я не играю ни в одну игру</h1>');
                        }
                    }
                }
            }
        })
    }
    stats();
    setInterval(stats, 1000);
    
