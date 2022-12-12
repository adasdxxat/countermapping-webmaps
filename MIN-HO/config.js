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
    title: "MINHO's Walk/Roll",
    // para1: " ",
    subtitle: 'On A Trip of People with Disability',
    byline: 'By Yeon Joo Kang and Duxixi(Ada) Shen',
    footer: 'Full Report: See <a href = "https://yk539.github.io/countermapping-webmaps/Project/index.html">Revealing the invisible challenges of pedestrians with disability</a>. <p> Image Source: <a href = "https://blog.google/products/maps/better-maps-for-people-with-vision-impairments">The Keyword | Google</a>',
     chapters:[
        {
            id: 'drive-slide-0',
            alignment: 'left',
            hidden: false,
            title: 'Minho, 30 ',
            image: 'https://github.com/yk539/countermapping-webmaps/blob/main/Project/images/IMG_1917.JPG?raw=true',
            description: 'Minho, is visually impaired and this route was his way home from work. He is using the cane but needs accompany who can guide him for the right direction. I walked from the subway station to the house. The same route, map says takes 9 mins but we spent our time walking 15mins',
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
            title: 'Minho, 30 ',
            video: 'https://github.com/yk539/countermapping-webmaps/blob/main/Project/images/video-mh1.mp4?raw=true',
            description: 'This time, he was with his father but usually with the personal assist service person.During the interview, he mentioned the tactile blaocks problems of not being able to locate effectively, as well as the concerns with shared bicycles being dumped on the sidewalks',
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
            //title: 'Minho, 30 ',
            image: 'https://github.com/yk539/countermapping-webmaps/blob/main/Project/images/cycle.png?raw=true',
            description: "<b>Electric scooters and shared bicycles are routinely on the sidewalk</b><p>This is a recent issue that has been discussed the most during the interview. With the advancement of technology, it has become simpler for people without disabilities to travel, but for those with disabilities, it is a source of concern and anxiety.It's not just a problem while driving, it's dumped on the road after driving on the sidewalk, causing damage to both the visually and the physically impaired. Not only in physical danger but also emotionally exhausted.",
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