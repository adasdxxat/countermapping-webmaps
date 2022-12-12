// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 3;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 200;

// Value used to drive
var driveTime = driveSlides*driveSmoothness;

// Do you want to follow the point? True = follow
var followPoint = false;

// ...If so, what zoom, pitch, and bearing
// should be used to follow?
var followZoomLevel = 14;
var followBearing = 29;
var followPitch = 0;


var config = {
    style: 'mapbox://styles/mapbox/light-v10',
    accessToken: 'pk.eyJ1IjoieWs1MzkiLCJhIjoiY2w5MDdyZ2ppMHdmYTQwazR0NzV6YW9uYiJ9.nWSA2XNz2ZjtZusursxXcA',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: "JAEWOO's Paratransit taxi",
    // para1: " ",
    subtitle: 'On A Trip of People with Disability',
    byline: 'By Yeon Joo Kang and Duxixi(Ada) Shen',
    footer: 'Full Report: See <a href = "https://yk539.github.io/countermapping-webmaps/Project/index.html">Revealing the invisible challenges of pedestrians with disability</a> <p> Image Sources: <a href = "http://www.newstomato.com/ReadNewspaper.aspx?no=871884">NewsTomato</a> | The Author',
     chapters:[
        {
            id: 'drive-slide-0',
            alignment: 'center',
            hidden: false,
            title: 'Paratransit taxi',
            description: ' Currently we have three different types of paratransit taxis. One for wheelchair users and two for other types but mostly for riders with visually impairment. Eventhough they would like to take usual taxis sometimes, some drivers refused to take them. Also, the Reason why they choose this paratransit taxi or cab system is safety. Not only on the car but also before and after, driver tends to guide them to the entrance and exit of the location on foot. But, there are some incidents of overcharging according to few participants. Consequently, they must pay attention to the real-time location data from apps when using earphones.',
            image: "https://github.com/yk539/countermapping-webmaps/blob/main/Project/images/Picture1.png?raw=true",
            location: {
               center: [126.96331, 37.57973],
                zoom: 14.29,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            { layer: 'mapbox-satellite-copy', opacity: 0 }
             ],
            onChapterExit: [
            { layer: 'mapbox-satellite-copy', opacity: 0 }
            ]
        },
        {
            id: 'drive-slide-1',
            alignment: 'left',
            hidden: false,
            title: 'Jae-Woo, 24',
            image: 'https://github.com/yk539/countermapping-webmaps/blob/main/Project/images/paratransit.jpg?raw=true',
            description: 'Jaewoo has visual impairments but he was accompanied by his guide dog. He was on his way to work using paratransit taxi.',
            location: {
                center: [126.973, 37.578],
                zoom: 16.44,
                pitch: 55.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'drive-slide-2',
            alignment: 'left',
            hidden: false,
            title: 'Jae-Woo, 24',
            video: 'https://github.com/yk539/countermapping-webmaps/blob/main/Project/images/video-jw1.mp4?raw=true',
            description: "We call this 'Welfare call taxi for the disabled'. It is quite smaller but enough room for two people and a guide dog.He frequently goes at work very early. Because there is a scarcity of quantity, people must wait till uncertain times. This time, we spent around 40 mins from his house to his workplace.",
            location: {
                center: [126.973, 37.578],
                zoom: 16.44,
                pitch: 55.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        }
    ]
};