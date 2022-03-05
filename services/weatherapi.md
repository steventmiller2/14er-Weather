API key: key=50d8e4c02ac1470d95a181710220403
weatherapi.com
https://www.weatherapi.com/docs/#intro-request

TODO: 
- start with weather at Peaks, add weather at trailhead later
- lat/longs of 14ers can be saved in a json now and DB later
- use a 'get weather' button to control calls
- console.log API calls first to see what is being posted
- start with a table. use Rsuite? or equivalent?, then add a favorite/'watch' button that pins to top or pins to 'MY Dashboard'
- use font-awesome to replace 'sunny' with a Sun Icon

curl -X GET -d "key=50d8e4c02ac1470d95a181710220403&q=80918" http://api.weatherapi.com/v1/current.json

http://api.weatherapi.com/v1/current.json?key=50d8e4c02ac1470d95a181710220403&q=80918


Pikes Peak Lat Long = 38.8406/-105.0441