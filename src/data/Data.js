const ProfileData = {
  CORE_SKILLS: [
    {
      id: "tech_1",
      icon: "android",
      iconStyle: "large material-icons  green-text",
      skillName: "Mobile Apps",
      skills: [
        "Android",
        "Retrofit",
        "RxJava",
        "MVP",
        "MVVM",
        "Java8",
        "Kotlin",
        "Junit",
        "JMock",

        {
          key: 0,
          label: "Angular",
          avatar:
            "https://images.pexels.com/photos/922511/pexels-photo-922511.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
        },
        {
          key: 1,
          label: "jQuery",
          avatar:
            "https://images.pexels.com/photos/325451/pexels-photo-325451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
        },
        {
          key: 2,
          label: "Polymer",
          avatar:
            "https://images.pexels.com/photos/922437/pexels-photo-922437.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
        },
        { key: 3, label: "React" },
        { key: 4, label: "Vue.js" }
      ]
    },
    {
      id: "tech_2",
      icon: "desktop_mac",
      iconStyle: "large material-icons  blue-text",
      skillName: "Web Apps",
      skills: [
        "AngularJS",
        "ReactJS",
        "NodeJS",
        "HTML5",
        "JavaScript",
        "CSS3",
        "JQuery",
        "Bootstrap",
        "WordPress",
        "KendoUI",
        "Data Visualization",
        "High Chart",
        "PlotlyJS"
      ]
    },
    {
      id: "tech_3",
      icon: "developer_mode",
      iconStyle: "large material-icons  orange-text",
      skillName: "Hybrid Apps",
      skills: ["React Native", " PhoneGap", " Apache Cordova", "Single Page Apps", "PWA"]
    }
  ],

  PROJECTS: [
    {
      id: "project_10",
      name: "MyFX App",
      client: "HSBX Bank",
      type: "Android Mobile App (Team Size 30)",
      duration: "20 Dec-2017- 14 Sept-2018",
      role: "Android Developer",
      responsibility:
        "AngularJS PhoneGap Mobile App which fetches and display data from Microcontroller in Single Page PhoneGap Mobile Application.",
      summary:
        " Real-time Android Forex(FX) application topurchase, sell, and transfer currency to and fromdifferent countries & regions. User can see live news and take informed decisions.",
      skills: [
        'kotlin',
        'Java-8',
        'MVP',
        'TDD',
        'JUnit',
        'Mockito',
        'Jenkins',
        'FastLane', 'Adobe Analytics', 'Tealium', 'Volley'
      ],
      bg_color: "#2979ff",
      domain: "Banking",
      year: "2018",
      title_bg_color: "Regular",
      image_url: "./assets/img/bank.jpeg",
      project_url: "#"
    },
    {

      id: "project_9",
      name: "NextGen Core Sense",
      client: "Emerson",
      type: "Hybrid Mobile App (Team Size 3)",
      duration: "April 2016-Curren",
      role: "Front End Web Developer",
      responsibility:
        "AngularJS PhoneGap Mobile App which fetches and display data from Microcontroller in Single Page PhoneGap Mobile Application.",
      summary:
        "This App can communicate with H/W via Bluetooth in mobile device and in windows with the help of Visual Basics it can communicate with USB Serial port.",
      skills: [
        "AngularJS",
        " MVC architecture",
        " Embedded software",
        " Visual Basics",
        "  MaterializeCSS."
      ],
      bg_color: "#00bfa5",
      domain: "Electronics",
      year: "2017",
      title_bg_color: "Regular",
      image_url:
        "./assets/img/coresense.jpeg",
      project_url: "#"
    },
    {
      id: "project_8",
      name: "Operating Envelop",
      client: "Emerson",
      type: "Hybrid Mobile App (Team Size 3)",
      duration: "March 2016-Oct 2017 (8 months)",
      role: "Front End Web Developer",
      responsibility:
        "Building Single Page AngularJS Web App for electrical engineers which act as a reference manual for optimal working speed of the compressor. This App uses Plotly.JS to draw operating envelop of the compressor.",
      summary:
        "This App draw operating envelope of the compressors using Plotly.jS and perform complex thermodynamic calculations in real time",
      skills: [
        "AngularJS",
        " MVC architecture",
        " Plotly.JS",
        " Data Visualization",
        "MaterializeCSS",
        " Single Page Responsive WebApp"
      ],
      bg_color: "#00bfa5",
      domain: "Electronics",
      year: "2017",
      title_bg_color: "Regular",
      image_url: "./assets/img/envelop.jpeg",
      project_url: "#"
    },
    {
      id: "project_7",
      name: "Technology Day 2016",
      client: "Emerson",
      type: "Event Management Application (Team Size: 2))",
      duration: "Oct 2016-Dec 2016 (1.5 months)",
      role: "Android App Developer",
      responsibility:
        "Responsibility Designing and developing Native Android App for EmersonScientific paper presentation event. This App was made for common audience and uses Google Firebase as Backend.",
      summary:
        "This app displays Live Agenda of the event and allow audience to submit their rating. The App also had embedded Quiz, Audienc Poll and ‘Do you Know’ feature for maximum engagement.",
      skills: [
        "Android",
        " Google Firebase",
        " Push Notification",
        " Google Maps"
      ],
      bg_color: "#c51162 ",
      domain: "Event Management",
      year: "2016",
      title_bg_color: "Regular",
      image_url: "./assets/img/event.jpg",
      project_url: "#"
    },
    //  {
    //   id: 'project_6',
    //   name : "Godham Mahatirth Pathmeda",
    //   type: ': Education Application (Self)',
    //   duration:'July 2016-August 2016 (1 months)',
    //   role: 'Android App Developer',
    //   responsibility: 'Designing, developing and deploying Android App for event held in Rajasthan. Adding PayUMoney Gateway to allow users to give donation',
    //   summary: 'Android App for largest Cow Rearing and Development center in India and across Globe. This App was intended to inform about purpose of the NGO and allow them to contribute via PayUMoney payment gateway',
    //   skills: ["Android Fragments", " Picasso", " YouTube", " PayUMoney", " Google Map "],
    //   bg_color: "Gardner",
    //   domain: 'NGO',
    //   year:'2016',
    //   title_bg_color :"Regular",
    //   image_url: './src/assets/img/portfolio/work/place_holder_ngo.jpg',
    //   project_url: "https://play.google.com/store/apps/details?id=com.serveroverload.pathmeda"
    // },

    {
      id: "project_5",
      name: "Mi Banco",
      client: "Deutsche Bank",
      type: "Hybrid Mobile Banking App (Team Size 5)",
      duration: "July 2015-Fab 2016 (7 months)",
      role: "Hybrid App Developer",
      responsibility:
        "Developing Cordova Plugins to add android wear support into existing App. Adding Vasco 2 factor authentication in app.",
      summary:
        "Mobile Banking App for Deutsche Bank Spain customers. With this app, you can check your account, investments, loans, and card details and do your day-to-day banking.",
      skills: [
        " Phone-Gap",
        "Apache Cordova Plugin",
        " Angular JS",
        " HTML5, JavaScript, JQuery",
        "Android Wear API"
      ],
      bg_color: "#2979ff",
      domain: "Banking",
      year: "2015",
      title_bg_color: "Regular",
      image_url: "./assets/img/bank.jpeg",
      project_url:
        "https://play.google.com/store/apps/details?id=com.db.pbc.mibanco&hl=en"
    },

    {
      id: "project_4",
      name: "La Mia Banca",
      client: "Deutsche Bank",
      type: "Hybrid Mobile Banking App (Team Size 5)",
      duration: "July 2015-Fab 2016 (7 months)",
      role: "Hybrid App Developer",
      responsibility:
        "Developing Cordova Plugins to facilitate various native security features   into existing Phone-Gap Banking application",
      summary:
        "La Mia Banca is the official Deutsche Bank Italy app, dedicated to account and db contocarta holders, to allow access and operations via smartphones and tablets.",
      skills: [
        "Phone-Gap",
        " Apache Cordova",
        " Angular JS",
        " Samsung sPass SDK",
        " Vasco 2 Factor Authentication",
        " Google Maps",
        " HTML5, JavaScript, JQuery"
      ],
      bg_color: "#2979ff",
      domain: "Banking",
      year: "2015",
      title_bg_color: "Regular",
      image_url: "./assets/img/bank2.jpeg",
      project_url:
        "https://play.google.com/store/apps/details?id=com.db.pbc.miabanca&amp;hl=en"
    },
    {
      id: "project_3",
      name: "Vipps Mobile Wallet",
      client: "Den Norske Bank- DNB",
      type: "Mobile Payment Application (Team Size 5))",
      duration: "January 2015-May 2015 (4 months)",
      role: "Android Front End Developer",
      responsibility:
        "Building and integrating UI with backend API for P2P Mobile wallet. This App allow user to pay Bills and transfer Money.  2.15 million individual users .",
      summary:
        "Vipps is a Norwegian mobile payment application designed for smartphones developed by DNB.",
      skills: [
        "Payment Gateways",
        "Retrofit",
        "Encryption",
        "Java Web Services",
        "Glide",
        "Material Design",
        "Google Cloud Messaging",
        "OKHttp"
      ],
      bg_color: "#2979ff",
      domain: "Banking",
      year: "2014",
      title_bg_color: "Regular",
      image_url: "./assets/img/bank4.jpeg",
      project_url: "https://play.google.com/store/apps/details?id=no.dnb.vipps"
    },
    {
      id: "project_2",
      name: "BeoMusic App ",
      client: "Bang & Olufsen",
      type: " Music Player App (Team Size 3)",
      duration: "July 2013-Oct 2013 (3 months)",
      role: "Back End Developer",
      responsibility:
        "Writing Web services for Log Reporting and Software update. Testing Web Services with TDD testing framework like Junit4, JMock, Mokito etc.",
      summary:
        "Control the music in all your rooms with a device! Gather everything on your mobile phone and get an overview of your various devices with the BeoMusic App.",
      skills: [
        "Java",
        "JSON",
        "REST-API",
        "Web Services",
        "Ksoap",
        "Junit",
        "JMock",
        "Mockito",
        "TDD",
        "Vera Code",
        "Code Quality"
      ],
      image_url: "./assets/img/music.jpg",
      bg_color: "#aa00ff",
      domain: "MultiMedia",
      year: "2013",
      title_bg_color: "Regular",
      project_url:
        "https://play.google.com/store/apps/details?id=com.bang_olufsen.BeoMusic"
    },

    {
      id: "project_1",
      name: "Beo Sound Moment",
      client: "Bang & Olufsen",
      type: " Multi Media Product (Team Size 15)",
      role: "Android App Developer .",
      duration: "March 2013-Dec 2014 (1 year, 9 months)",
      responsibility:
        "Building Android Music Player App which consumes 3rd Party Music Services, building custom UI components, writing Android Settings wrapper. Working with OS team for customizing Android OS.",
      summary:
        "BeoSound Moment is an intelligent, wireless music system that organises your digital music, radio stations and streaming services in a seamless music experience.",
      skills: [
        "Android",
        "Custom OS",
        "Deezer",
        "DLNA",
        "TuneIn",
        "GraceNotes",
        "Bluetooth",
        "socket",
        "Fragments",
        "Animations",
        "custom views",
        "Android Setting"
      ],
      image_url: "./assets/img/speaker.jpeg",
      bg_color: "#aa00ff",
      domain: "MultiMedia",
      year: "2013",
      title_bg_color: "Regular",
      project_url:
        "http://www.bang-olufsen.com/en/collection/sound-systems/beosound-moment"
    }
  ],

  OPEN_SOURCE: [
    {
      projectName: "FireCart (Android)",
      projectURl: "https://github.com/hiteshsahu/ECommerce-App-Android",
      projectImage: "./src/assets/img/portfolio/github/1.png",
      projectIcon: "./src/assets/img/portfolio/github/app_icons/1.png",
      stars: 130,
      fork: 123,
      projectInfo: "Open Source Ecopmmerce App"
    },
    {
      projectName: "Music-Player-Dashboard (Android)",
      projectURl:
        "https://github.com/hiteshsahu/Material-Music-Player-Dashboard",
      projectImage: "./src/assets/img/portfolio/github/2.jpg",
      projectIcon: "./src/assets/img/portfolio/github/app_icons/2.png",
      stars: 8,
      fork: 9,
      projectInfo: "Can you code this UI concept solution"
    },
    {
      projectName: "Music-Player (React-Native)",
      projectURl: "https://github.com/hiteshsahu/React-Native-Music-Player",
      projectImage: "./src/assets/img/portfolio/github/2.png",
      stars: 1,
      fork: 3,
      projectIcon: "./src/assets/img/portfolio/github/app_icons/2.1.png",
      projectInfo: "Beautiful Music Player built with React Native - Android"
    },
    {
      projectName: "Material Upvote (Android)",
      projectURl: "https://github.com/hiteshsahu/Material-UpVote",
      projectImage: "./src/assets/img/portfolio/github/5.gif",
      stars: 117,
      fork: 18,
      projectIcon: "./src/assets/img/portfolio/github/app_icons/5.png",
      projectInfo:
        "This was originaly a Dribbble post by Jan Kuijken. You can check out his Uplabs."
    },
    {
      projectName: "Audio-Recorder Visualizer (Android)",
      projectURl:
        "https://github.com/hiteshsahu/Android-Audio-Recorder-Visualization-Master",
      projectImage: "./src/assets/img/portfolio/github/6.png",
      stars: 20,
      fork: 5,
      projectIcon: "./src/assets/img/portfolio/github/app_icons/6.png",
      projectInfo:
        "Audio recorder with visualization for audio recorder & player."
    },
    {
      projectName: "Universal-Web-Content-Loader (Android)",
      projectURl:
        "https://github.com/hiteshsahu/Android-Universal-Web-Content-Loader",
      projectImage: "./src/assets/img/portfolio/github/7.png",
      stars: 10,
      fork: 5,
      projectIcon: "./src/assets/img/portfolio/github/app_icons/6.png",
      projectInfo:
        "Drop this fragment in your UI package and display web contents in your application in single line"
    },

    {
      projectName: "Not Hot Dog (Tensor Flow)",
      projectURl: "https://github.com/hiteshsahu/React-Native-Movies-Sample-",
      projectImage: "./src/assets/img/portfolio/github/4.png",
      projectIcon: "./src/assets/img/portfolio/github/app_icons/4.png",
      projectInfo:
        "Uses Tensor flow Classification models to tell if food item is a HotDog or Not"
    },
    {
      projectName: "Movies App(React Native)",
      projectURl: "https://github.com/hiteshsahu/React-Native-Movies-Sample-",
      projectImage: "./src/assets/img/portfolio/github/3.gif",
      stars: 1,
      fork: 1,
      projectIcon: "./src/assets/img/portfolio/github/app_icons/3.png",
      projectInfo:
        "An Movie App build with the help of React Native. This projects support a series of articles about how to setup an ReactJS environment to develop an scalable, maintainable and testable projects."
    }

    //    <a  target="_blank" class="carousel-item "
    //    href="https://github.com/hiteshsahu/Android-Radio">
    //    <img src="img/portfolio/github/3.png" alt="Device Content Image">
    //   </a>

    //    <a  target="_blank" class="carousel-item "
    //    href="https://github.com/hiteshsahu/Magic-Keyboard">
    //    <img src="img/portfolio/github/5.png" alt="Device Content Image">
    //  </a>
  ],

  PUBLICATION: [
    {
      title: "FireCart",
      playStore:
        "https://play.google.com/store/apps/details?id=com.hitesh_sahu.retailapp",
      shortIntro: "Cloud Based E-Commerece Application",
      thumb: "./src/assets/img/portfolio/Publication/1.png",
      icon: "./src/assets/img/portfolio/Publication/icon/1.png"
    },
    {
      title: "Strobe Light Pro",
      playStore:
        "https://play.google.com/store/apps/details?id=com.hiteshsahu.strobe_light_pro&hl=en",
      shortIntro: "Tool to Program the Photo Diode cells",
      thumb: "./src/assets/img/portfolio/Publication/2.png",
      icon: "./src/assets/img/portfolio/Publication/icon/2.png"
    }
  ],

  SOCIAL: [
    {
      socialLink: "https://github.com/hiteshsahu",
      socialSite: "GitHub",
      socialIcon: "./assets/svg/faceboo.svg"
    },
    {
      socialLink: "https://www.linkedin.com/in/hitesh-sahu-99639040",
      socialSite: "Linkedin",
      socialIcon: "fa fa-linkedin-square fa-3x  social-icon"
    },
    {
      socialLink: "http://stackoverflow.com/users/2252113/hitesh-sahu",
      socialSite: "StackOverflow",
      socialIcon: "fa fa-stack-overflow fa-3x  social-icon"
    },
    {
      socialLink: "https://codepen.io/hiteshsahu/",
      socialSite: "Codepen",
      socialIcon: "fa fa-codepen fa-3x  social-icon"
    },
    {
      socialLink: "https://soundcloud.com/hitesh-sahu",
      socialSite: "SoundCloud",
      socialIcon: "fa fa-soundcloud fa-3x  social-icon"
    },
    {
      socialLink: "http://steamcommunity.com/id/HiteshSahu/",
      socialSite: "Steam",
      socialIcon: "fa fa-steam fa-3x  social-icon"
    },
    {
      socialLink: "https://www.quora.com/profile/Hitesh-Sahu-3",
      socialSite: "Quora",
      socialIcon: "fa fa-quora fa-3x  social-icon"
    },
    {
      socialLink: "https://in.pinterest.com/hiteshsahu7",
      socialSite: "Pinterest",
      socialIcon: "fa fa-pinterest-p fa-3x  social-icon"
    },
    {
      socialLink: "https://plus.google.com/u/0/+HiteshSahu7",
      socialSite: "Google plus",
      socialIcon: "fa fa-google-plus fa-3x  social-icon"
    },
    {
      socialLink: "https://www.facebook.com/HitsDroid",
      socialSite: "Facebook",
      socialIcon: "fa fa-facebook fa-3x  social-icon"
    },
    {
      socialLink: "https://twitter.com/HiteshSahu_",
      socialSite: "Twitter",
      socialIcon: "fa fa-twitter fa-3x  social-icon"
    }
  ],

  GalleryData: [
    {
      img:
        "https://images.pexels.com/photos/1150618/pexels-photo-1150618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
      title: "Breakfast",
      author: "jill111",
      cols: 2,
      featured: true
    },
    {
      img:
        "https://images.pexels.com/photos/952057/pexels-photo-952057.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
      title: "Tasty burger",
      author: "director90"
    },
    {
      img:
        "https://images.pexels.com/photos/973506/pexels-photo-973506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
      title: "Camera",
      author: "Danson67"
    },
    {
      img:
        "https://images.pexels.com/photos/838696/pexels-photo-838696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
      title: "Morning",
      author: "fancycrave1",
      featured: true
    },
    {
      img:
        "https://images.pexels.com/photos/983297/pexels-photo-983297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
      title: "Hats",
      author: "Hans"
    },
    {
      img:
        "https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
      title: "Honey",
      author: "fancycravel"
    },
    {
      img:
        "https://images.pexels.com/photos/840326/pexels-photo-840326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
      title: "Vegetables",
      author: "jill111",
      cols: 2
    }
  ]
};

export default ProfileData;
