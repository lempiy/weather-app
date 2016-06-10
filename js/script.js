if (navigator.geolocation) {
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=d5b0ae0537ab1ecc654ed2ca12eff48c', function(json) {
      var sky = json.weather[0].main;
      $('h4').html(sky)
      var cityName = json.name;

      $('h3').text(cityName)
      $('.wthr-container').prepend("<img src='http://www.geognos.com/api/en/countries/flag/" + json.sys.country + ".png' width='50' height='30' class='flag' alt='cloudone' />");
      var temperatCels = Math.round(json.main.temp - 273.15);
      var temperatFaran = Math.round(1.8 * json.main.temp - 459.67);
      $('h2').text(temperatCels + '℃');
      console.log(json);
      if (sky === 'Clear') {
        $('.img-container').append("<img src='http://publicdomainvectors.org/photos/sun-abstract-design.png' class='back-img img-responsive' alt='sun' />");
      }
      if (sky === 'Clouds') {
        $('.img-container').append("<img src='http://www.clker.com/cliparts/N/8/w/H/a/t/cloud-blue-hi.png' class='cloudone-img img-responsive' alt='cloudone' /><img src='http://www.clker.com/cliparts/a/G/t/e/m/W/solid-white-cloud-th.png' class='cloudtwo-img img-responsive' alt='cloutwo' />");
      }
      if (sky === 'Rain' || sky === 'Drizzle') {
        $('.img-container').append(" <img src='http://www.clker.com/cliparts/N/8/w/H/a/t/cloud-blue-hi.png' class='cloudone-img img-responsive' alt='cloudone' /><img src='http://www.clker.com/cliparts/Z/W/z/U/P/N/raindrop-th.png' class='rain-drops' id='rain-drop-one'width='80' height=''/ ><img src='http://www.clker.com/cliparts/Z/W/z/U/P/N/raindrop-th.png' class='rain-drops' id='rain-drop-two' width='80' height=''/><img src='http://www.clker.com/cliparts/Z/W/z/U/P/N/raindrop-th.png' class='rain-drops' id='rain-drop-three' width='80' height=''/><img src='http://www.clker.com/cliparts/Z/W/z/U/P/N/raindrop-th.png' class='rain-drops' id='rain-drop-four' width='80' height=''/>");
      }
      if (sky === 'Thunderstorm') {
        $('.img-container').append(" <img src='http://www.clker.com/cliparts/N/8/w/H/a/t/cloud-blue-hi.png' class='cloudone-img img-responsive' alt='cloudone' /><img src='http://www.clker.com/cliparts/Z/W/z/U/P/N/raindrop-th.png' class='rain-drops' id='rain-drop-one'width='80' height=''/ ><img src='http://www.clker.com/cliparts/Z/W/z/U/P/N/raindrop-th.png' class='rain-drops' id='rain-drop-two' width='80' height=''/><img src='http://www.clker.com/cliparts/Z/W/z/U/P/N/raindrop-th.png' class='rain-drops' id='rain-drop-three' width='80' height=''/><img src='http://www.clker.com/cliparts/Z/W/z/U/P/N/raindrop-th.png' class='rain-drops' id='rain-drop-four' width='80' height=''/><img src='http://www.clker.com/cliparts/h/S/9/O/y/r/lightning-bolt-th.png' class='lightning-img img-responsive' alt='lightning'  />");
      }
      if (sky === 'Mist') {
        $('.img-container').append("<img src='http://nxcache.nexon.net/dn/microsite/level70/img/bg/bg_fog1.png' class='cloudone-img img-responsive' alt='cloudone' /><img src='http://icongal.com/gallery/image/43079/cloud_weather_mist_fog.png' class='cloudtwo-img img-responsive' alt='cloutwo' />");
      }
      if (sky === 'Snow') {
        $('.img-container').append("<img src='http://www.clker.com/cliparts/a/4/8/6/1216139826649869464rgtaylor_csc_net_wan_cloud.svg.hi.png' class='cloudone-img img-responsive' alt='cloudone' /><img src='http://www.clker.com/cliparts/r/V/t/S/R/I/snowflake-blue-radiant-no-trim-th.png' class='snowflake' width='50' height='50' id='snowflake-one' alt='snowflake' /><img src='http://www.clker.com/cliparts/r/V/t/S/R/I/snowflake-blue-radiant-no-trim-th.png'  class='snowflake' id='snowflake-two' alt='snowflake' width='75' height='75' /><img src='http://www.clker.com/cliparts/r/V/t/S/R/I/snowflake-blue-radiant-no-trim-th.png'  class='snowflake' id='snowflake-three' alt='snowflake' width='50' height='50'/>");
      }
      $('.temperature').click(function() {
        if ($('.temperature').text() === temperatCels + '℃') {
          $('.temperature').text(temperatFaran + '℉')
        } else {
          $('.temperature').text(temperatCels + '℃');
        }
        console.log(tempDegrees);
      });
    });
}
