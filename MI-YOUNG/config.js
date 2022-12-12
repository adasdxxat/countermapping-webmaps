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
    title: "MIYOUNG's Subway Trip",
    // para1: " ",
    subtitle: 'On A Trip of People with Disability',
    byline: 'By Yeon Joo Kang and Duxixi(Ada) Shen',
    footer: 'Full Report: See <a href = "https://yk539.github.io/countermapping-webmaps/Project/index.html">Revealing the invisible challenges of pedestrians with disability</a> <p> Image Sources: <a href = "https://www.seoul.co.kr/news/newsView.php?id=20220407500177">Seoul News</a> | The Author',
     chapters:[
        {
            id: 'drive-slide-0',
            alignment: 'right',
            hidden: false,
             title: 'Mi-Young, 53',
            video: 'https://github.com/yk539/countermapping-webmaps/blob/main/Project/images/video-my3.mp4?raw=true',
            description: 'Mi-young rides the subway in an electric wheelchair. Her commute is usually consisted of <b> Rolling, Taking Elevator, and Taking Subway</b> She says even the vollard in the sidewalk is sometimes annyoing to avoid. The electric wheelchair may be seen being rocked by urban structures such as braille blocks.',
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
            title: 'Mi-Young, 53',
            video: 'https://github.com/yk539/countermapping-webmaps/blob/main/Project/images/video-my1.mp4?raw=true',
            description: ' She says she almost usually follows her assistant service person. It shows how she tagged the card. From kakaomap, the route is only take 30 mins but we took 45mins.',
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
            //title: 'Mi-Young, 53',
            video: 'https://github.com/yk539/countermapping-webmaps/blob/main/Project/images/video-my2.mp4?raw=true',
            description: 'She mentioned that the subway elevators were always full with people without disability and lift was not functioning very well in the subway station. Even she points out using the lift in subway is uncomfortable because it makes very loud sound or extremally dangerous. There are <a href="https://youtu.be/3QhlZcUmNQs"> several cases</a> about the accidents .',
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