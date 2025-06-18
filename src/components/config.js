const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "2508", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Enter Passcode", // Title displayed on the passcode entry page
  successMessage: "Yayy!! :)", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Incorrect passcode, hint: our birthday date!", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "What magic is in her eyes and voice?", // Example trending search query
    "How to stay calm when she wears that kurthi 👀", // Another example query
    `Can someone be cute and dangerous? (asking for Ritu)`, // A personalized trending search
  ],
  proTip: 'Pro tip: try searching "How long have we been together?" ;)', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2025-01-18", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "We've been together for:", // Title displayed on the timer page
  timerMessage: "... and still counting <3", // Message shown alongside the timer
  timeUnits: {
    days: "Days", // Label for days in the timer
    hours: "Hours", // Label for hours in the timer
    minutes: "Minutes", // Label for minutes in the timer
    seconds: "Seconds", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Let's recap our time together", // Title for the recap page
  clickMeText: "Click me!", // Text prompting users to interact

  recapSections: [
    { label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Songs that remind me of you", // Title for the music page
  musicGallery: [
    {
      title: "Heavenly", // Title of the song
      artist: "Cigarettes After Sex", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
    },
    {
      title: "Ishq Hai",
      artist: "Anurag Saikia",
      left: "40%",
      top: "15%",
    },
    {
      title: "I Wanna Be Yours",
      artist: "Arctic Monkeys",
      left: "15%",
      top: "40%",
    },
    {
      title: "Tum Ho Toh",
      artist: "Iqlipse Nova",
      left: "30%",
      top: "75%",
    },
    {
      title: "Khwab",
      artist: "Iqlipse Nova",
      left: "5%",
      top: "65%",
    },
    {
      title: "Main tera",
      artist: "Arijit Singh, Pritam Chakraborty",
      left: "25%",
      top: "90%",
    },
    {
      title: "Teri Aankhon Mein",
      artist: " Darshan Raval, Manan Bhardwaj, Neha Kakkar",
      left: "35%",
      top: "50%",
    },
    {
      title: "Finding Her",
      artist: "Bharath, Kushagra,Saaheal",
      left: "10%",
      top: "25%",
    },
  ],

    // 📝 Message Recap Page
    messageTitle: "Best Pics!!", // Title for the messages recap page
    messageGallery: [
      { title: "march, 2025", description: "A beautiful day to remember." }, // Message entry
      { title: "may, 2025", description: " #moment😍🌻" },
      { title: "march, 2025", description: "#love ❤️" },
    ],
  
    // 📸 Picture Recap Page
    pictureTitle: "Our Pictures", // Title for the pictures recap page
    pictureGallery: [
      { title: "september, 2024", description: "teachers day Celebration 🎉" }, // Picture entry
      { title: "February , 2025", description: " 4th floor memories 💕" },
      { title: "january, 2025", description: "me and my world 🌍" },
         ],
  

  // 💌 Love Letter Page
  loveLetterMessage: " Mummy,you make me happpy in ways u can't even imagine,i am the luckiest person alive to have you as girlfriend,you have became my home,my everything ,you gave me the feeling that you are not a part of my soul but my soul itself,I love you so much💖", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "Thank you for everything, my love! 💖 Wishing us many more wonderful years together.", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "How long have we been together?", // Example of a correct search query
    "how long have we been together", // Another example of a correct search query
  ],
};

export default config;
