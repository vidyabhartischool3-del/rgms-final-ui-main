// Mock data for RGMS landing page clone. All data is mocked (frontend-only).
const A = '/assets';

export const announcement = {
  text: '\ud83c\udf89 New Year Sale is LIVE! Use code NEWYEAR25 for 25% OFF | Free Shipping on orders above \u20b9999',
};

export const heroBanners = [
  { id: 1, image: `${A}/rgms-banner-1.png`, alt: "India's lowest Smart Sim Plan - 6 Months DATA Free" },
  { id: 2, image: `${A}/rgms-banner-2.png`, alt: 'Color Night Vision up to 15m' },
  { id: 3, image: `${A}/asset-2.jpeg`, alt: 'Smart Security Safer Homes - Get 5% Off' },
  { id: 4, image: `${A}/rgms-banner-3.png`, alt: '#1 AI Security Camera in India' },
];

export const categories = [
  { id: 1, name: 'Wifi Cameras', image: `${A}/asset-5.jpeg` },
  { id: 2, name: '4G Cameras', image: `${A}/asset-6.jpeg` },
  { id: 3, name: 'Solar Cameras', image: `${A}/asset-7.jpeg` },
  { id: 4, name: 'Projectors', image: `${A}/asset-8.jpeg` },
  { id: 5, name: 'Dashcams', image: `${A}/asset-9.jpeg` },
  { id: 6, name: 'Supercams', image: `${A}/asset-10.jpeg` },
  { id: 7, name: 'Home Studio', image: `${A}/asset-11.jpeg` },
  { id: 8, name: 'Gaming', image: `${A}/asset-12.jpeg` },
];

export const heroSlides = [
  {
    id: 1,
    badge: "Expert's Choice",
    titleLine1: 'Complete Home Security',
    titleLine2: 'with AI motion detection',
    subtitle: 'Complete 360\u00b0 Security - Triple the Coverage, Triple the Peace of Mind.',
    image: `${A}/asset-19.png`,
    floatTopLeft: { icon: 'mic', title: '2 Way Talk' },
    floatRight: { icon: 'sd', title: 'SD Card + Cloud' },
    specs: [
      { value: '5MP + 5MP + 5MP', label: 'Full HD Lens' },
      { value: '30m IR', label: 'Color Night Vision' },
      { value: '360 degrees', label: 'Pan Tilt' },
    ],
  },
  {
    id: 2,
    badge: "Parent's Choice",
    titleLine1: 'Baby Cameras',
    titleLine2: 'with AI night colour vision',
    subtitle: 'Keep your little one safe with Cry Detection & 2 way audio',
    image: `${A}/asset-13.png`,
    floatTopLeft: { icon: 'mic', title: '2 Way Talk' },
    floatRight: { icon: 'sd', title: 'AI Motion Detection' },
    specs: [
      { value: '4MP + 4MP', label: 'Full HD Lens' },
      { value: '20m IR', label: 'Color Night Vision' },
      { value: 'SD Card + Cloud', label: 'Storage Support' },
    ],
  },
];

export const dealsProducts = [
  {
    id: 'deal-1',
    badge: '65% OFF',
    rating: 4.0,
    reviews: 2,
    name: 'RGMS Smarthome Batman Black 3-in-1 WiFi CCTV Camera | Triple Lens & 3 Screen View | 360\u00b0 PTZ + Dual 180\u00b0 Side Cameras | AI Human Detection | Color Night Vision | Two-Way Audio | Home Security Camera',
    oldPrice: 10000, price: 3499,
    image: `${A}/asset-14.png`,
  },
  {
    id: 'deal-2',
    name: 'RGMS Smarthome Trigenie 4G SIM Triple Lens CCTV Camera, 5MP\u00d73 Outdoor Security Camera with 360\u00b0 PTZ, Triple Screen View, Color Night Vision, AI Motion Detection, 2-Way Audio & App Remote Access (Black)',
    price: 4499,
    image: `${A}/asset-20.png`,
  },
  {
    id: 'deal-3',
    name: 'RGMS TRIGENIE 4G AI Triple Lens Outdoor Security Camera Full-Coverage Smart Surveillance | 4G SIM Support | 3MP\u00d73 FHD Clarity | AI Motion Detection',
    price: 4599,
    image: `${A}/asset-15.png`,
  },
  {
    id: 'deal-4',
    badge: '47% OFF',
    name: 'RGMS Smarthome TRIGENIE 4G Solar CCTV Camera with 1 Month Free Data | 18MP (6MP\u00d73) Triple Lens & Triple Screen Live View | AI Triple PTZ | 360\u00b0 Outdoor Security Camera | Full Color Night Vision | Human Detection | Two-Way Audio | IP66 Waterproof',
    oldPrice: 14999, price: 7899,
    image: `${A}/asset-16.png`,
  },
  {
    id: 'deal-5',
    badge: '65% OFF',
    name: 'Wifi Camera (3MP+3MP+3MP) HD Real Triple Lens/Triple Screen View CCTV Camera for home Outdoor',
    oldPrice: 8700, price: 2999,
    image: `${A}/asset-17.png`,
  },
  {
    id: 'deal-6',
    badge: '57% OFF',
    name: 'Astro WiFi CCTV Camera Dual Lens & Dual Screen View [4MP+4MP] Full HD & 360\u00b0 Home Security',
    oldPrice: 4000, price: 1699,
    image: `${A}/asset-5.jpeg`,
  },
];

export const trustItems = [
  { icon: 'truck', title: 'Shipping', subtitle: 'Across India' },
  { icon: 'shield', title: 'Secure', subtitle: 'Payments' },
  { icon: 'refresh', title: '7 day', subtitle: 'replacement' },
  { icon: 'badge', title: '6 Month', subtitle: 'Free Warranty' },
];

export const videoProducts = [
  {
    id: 'vid-1',
    name: 'Batman Black 3in1 4G Sim CCTV Camera ...',
    oldPrice: 10000, price: 3999,
    thumb: `${A}/asset-14.png`,
  },
  {
    id: 'vid-2',
    name: 'Tricam Shark Dual Lens/Triple Screen ...',
    oldPrice: 10000, price: 2999,
    thumb: `${A}/asset-17.png`,
  },
  {
    id: 'vid-3',
    name: 'Rose 2X Smart Projector \u2013 Android 13....',
    oldPrice: 8999, price: 4549,
    thumb: `${A}/asset-26.jpeg`,
  },
  {
    id: 'vid-4',
    name: 'Baby Robot WiFi CCTV Camera 3MP Full ...',
    oldPrice: 3000, price: 1199,
    outOfStock: true,
    thumb: `${A}/asset-18.jpeg`,
  },
  {
    id: 'vid-5',
    name: '5+5MP Full HD 10X Optical Zoom Smart ...',
    oldPrice: 8000, price: 4999,
    thumb: `${A}/asset-31.png`,
  },
  {
    id: 'vid-6',
    name: 'Square Android 11.0 Smart Projector, ...',
    oldPrice: 12000, price: 3999,
    thumb: `${A}/asset-21.jpeg`,
  },
];

export const protectingFeatures = [
  {
    icon: 'award', title: 'Legacy of Innovation',
    desc: 'Protecting Indian homes since 2017 with proven, reliable security solutions.',
    link: 'Learn more \u2192', side: 'left',
  },
  {
    icon: 'signal', title: "India's First 4G & Solar",
    desc: 'The first to revolutionize Indian security with 4G and Solar-powered camera technology.',
    link: 'Learn more \u2192', side: 'left',
  },
  {
    icon: 'wifi', title: 'Unbeatable Connectivity',
    desc: 'Stay online 24/7 with the most cost-effective and stable data plans in the market.',
    link: 'View plans \u2192', side: 'left',
  },
  {
    icon: 'wrench', title: 'Pioneers of DIY Security',
    desc: 'Zero wiring, zero hassle. No technician needed. Simple setup that anyone can install in minutes.',
    link: 'Learn more \u2192', side: 'right',
  },
  {
    icon: 'shieldcheck', title: 'Comprehensive Warranty',
    desc: 'Includes 6 months free coverage, easily extendable up to 2 years for total peace of mind.',
    link: 'Learn more \u2192', side: 'right',
  },
  {
    icon: 'headset', title: 'We Are Here to Help',
    desc: 'Industry-leading customer support to ensure your security system runs without interruption.',
    link: 'Contact us \u2192', side: 'right',
  },
];

export const futureFeatures = [
  {
    icon: 'user', title: 'AI Smart Human Detection',
    desc: 'Advanced AI filters false alarms (pets/cars), detecting only humans to send instant, accurate alerts to you.',
  },
  {
    icon: 'grid', title: 'Multi-Lens Split Screen',
    desc: 'View multiple angles at once. Multi-lens tech covers wider areas and eliminates blind spots on a single screen.',
  },
  {
    icon: 'video', title: 'Hybrid PTZ and Bullet Designs',
    desc: 'The stability of a fixed lens plus the tracking of a PTZ lens. Get wide coverage and zoom details in one unit.',
  },
  {
    icon: 'lock', title: 'End-to-End Encrypted Storage',
    desc: 'Your privacy matters. We use full encryption on both Cloud and SD Card storage to keep your footage secure.',
  },
];

export const newArrivals = [
  {
    id: 'new-1',
    badge: '47% OFF',
    name: 'RGMS Smarthome Lumora Ultra Smart Projector | Android 13, Auto Focus & Auto Keystone, WiFi BT, Built-in Speaker, 12000 Lumens, 150\u201d Home Theater Projector for Movies, Gaming',
    oldPrice: 14999, price: 7819,
    image: `${A}/asset-26.jpeg`,
  },
  {
    id: 'new-2',
    badge: '52% OFF',
    name: 'RGMS Smarthome Lumora Native 1080P FHD Smart AI Projector | Fully Automatic Auto Focus & Keystone | 15000 Lumens | Android Projector with HDMI ARC & BT Voice Remote | Portable Home Theater (Black)',
    oldPrice: 20999, price: 9999,
    image: `${A}/asset-21.jpeg`,
  },
  {
    id: 'new-3',
    badge: '70% OFF',
    name: 'RGMS Smarthome Lumora Native 1080P FHD Smart AI Projector | Fully Automatic Auto Focus & Keystone | 15000 Lumens | Android Projector with HDMI ARC & BT Voice Remote | Portable Home Theater (White)',
    oldPrice: 19999, price: 5999,
    image: `${A}/asset-22.jpeg`,
  },
  {
    id: 'new-4',
    badge: '50% OFF',
    name: 'RGMS Smarthome Lumora Ultra Pro Native 1080P FHD Smart Projector | 18000 Lumens Android 12 AI LCD Projector with Auto Focus & Auto Keystone | Miracast, Built-in Speakers & Home Theater Experience',
    oldPrice: 39999, price: 19999,
    image: `${A}/asset-23.jpeg`,
  },
  {
    id: 'new-5',
    badge: '47% OFF',
    name: 'RGMS Smarthome Lumora Pro Smart Projector | 4K Support, Android 13, Auto Focus & 4-Point Keystone | 16000 Lumens, 150\u201d Big Screen, Built-in Speaker for Home Theater, Movies & Gaming',
    oldPrice: 15000, price: 7819,
    image: `${A}/asset-27.png`,
  },
  {
    id: 'new-6',
    badge: '50% OFF',
    name: 'RGMS Smarthome Lumora Ultra Pro Max Native 1080P Full HD Smart Projector | 22000 Lumens Android 12 AI LCD Projector | Auto Focus & Auto Keystone | HDR10, Miracast, BT Speaker Mode, 15W Loud Speakers',
    oldPrice: 49999, price: 24999,
    image: `${A}/asset-24.jpeg`,
  },
];

export const brandCategories = [
  { icon: 'projector', title: 'Projectors', desc: 'Cinematic home theater feel' },
  { icon: 'car', title: 'Car Dashcams', desc: 'Evidence for every drive' },
  { icon: 'gamepad', title: 'Gaming', desc: 'Pro-level gaming performance' },
  { icon: 'mic', title: 'Smart Studio', desc: 'Professional audio & light' },
];

export const bestSellers = [
  {
    id: 'best-1',
    badge: '46% OFF',
    rating: 5.0,
    reviews: 1,
    name: 'RGMS Smarthome Supercam 10MP Wireless WiFi CCTV Camera | 360\u00b0 PTZ Home Surveillance | Smart Human Detection | Motion Tracking | Full Color Night Vision | Two-Way Audio | Remote Monitoring',
    oldPrice: 3000, price: 1599,
    image: `${A}/asset-30.jpeg`,
  },
  {
    id: 'best-2',
    badge: '50% OFF',
    name: 'Renewed RGMS Smarthome 4G SIM Dual Lens Indoor CCTV Camera | Dual Screen View, Color Night Vision, 2-Way Talk, AI Motion Detection, 128GB SD Support',
    oldPrice: 4000, price: 1999,
    image: `${A}/asset-28.jpeg`,
  },
  {
    id: 'best-3',
    badge: '48% OFF',
    name: 'RGMS Smarthome Black Smart Bulb CCTV Camera 3MP | 360\u00b0 Auto Rotation | WiFi Indoor Security Camera | AI Human Detection | Motion Detection | Color Night Vision | Two-Way Audio',
    oldPrice: 2499, price: 1299,
    image: `${A}/asset-29.png`,
  },
  {
    id: 'best-4',
    badge: '50% OFF',
    name: 'RGMS Smarthome SuperCam 4G Indoor Security Camera | 4+4MP Dual Lens Full HD CCTV Camera Without WiFi | Dual Screen Live View, AI Motion Detection, Color Night Vision, Two-Way Audio, Remote Mobile Access, Supports Up to 128GB microSD',
    oldPrice: 4000, price: 1999,
    image: `${A}/asset-18.jpeg`,
  },
  {
    id: 'best-5',
    badge: '52% OFF',
    name: 'RGMS Smarthome Mini Fox 360\u00b0 3MP Full HD Wireless WiFi CCTV Camera for Home Security | AI Person Detection | Motion Tracking | Color Night Vision | Two-Way Audio | Indoor Surveillance Camera',
    oldPrice: 2499, price: 1199,
    image: `${A}/asset-13.png`,
  },
  {
    id: 'best-6',
    name: 'RGMS Smarthome SuperCam 5+5MP Smart WiFi CCTV Camera | Dual Lens Dual Screen Monitoring | 360\u00b0 PTZ | Color Night Vision | Motion Detection | Two-Way Audio | Multi-User Viewing',
    price: 1781,
    image: `${A}/asset-5.jpeg`,
  },
];

export const usageTypes = [
  { icon: 'briefcase', color: '#2f6fed', title: 'Office Security', desc: 'Monitor staff & workspaces' },
  { icon: 'baby', color: '#22a94c', title: 'Baby Monitoring', desc: 'Real-time audio & video feed' },
  { icon: 'users', color: '#8b3ff0', title: 'Elderly Care', desc: 'Stay connected with parents' },
  { icon: 'sun', color: '#f2650c', title: 'Outdoor Security', desc: '24/7 weatherproof protection' },
  { icon: 'store', color: '#e63482', title: 'Business Solutions', desc: 'Manage multiple store sites' },
  { icon: 'paw', color: '#5b6472', title: 'Pet Monitoring', desc: 'Talk to your pets from afar' },
];

export const reviews = [
  {
    id: 1,
    initials: 'RM',
    name: 'Rajesh M.',
    verified: 'Verified Buyer',
    stars: 5,
    text: '"Excellent camera with crystal clear video quality. The AI detection is spot on and the app is very user-friendly."',
    product: 'BabyCam Smart',
  },
  {
    id: 2,
    initials: 'PR',
    name: 'Priya R.',
    verified: 'Verified Buyer',
    stars: 5,
    text: '"The 360-degree rotation is smooth and the tracking feature works perfectly. Best purchase this year!"',
    product: 'ProCam 360 AI',
  },
];

export const blogs = [
  {
    id: 1,
    title: 'RGMS R1 Selfie Stick Operations Instructions',
    excerpt: '',
    image: `${A}/rgms-blog-cover.png`,
  },
  {
    id: 2,
    title: 'RGMS 3in1 Dash Camera Installation',
    excerpt: 'Below are the steps for installing RGMS dash camera. Make sure that you have come to this page ...',
    image: `${A}/rgms-blog-cover.png`,
  },
  {
    id: 3,
    title: 'RGMS V360 App Camera Installation',
    excerpt: 'Below are the steps for installing RGMS camera. Make sure that you have come to this page by sc...',
    image: `${A}/rgms-blog-cover.png`,
  },
  {
    id: 4,
    title: 'RGMS HDWifiCam Pro App Camera Installation',
    excerpt: 'Below are the steps for installing RGMS camera. Make sure that you have come to this page by sc...',
    image: `${A}/rgms-blog-cover.png`,
  },
];

export const footerData = {
  about: "RGMS is more than just smart devices; we're crafting a smarter lifestyle. Making technology more convenient, safe, and enjoyable for everyone. Our products have best in class AI features and do not require physical installation assistance.",
  categories: ['Wifi Cameras', '4G Camera', 'Solar Cameras', 'Projectors', 'SuperCam', 'Dashcam', 'Buy From Grousale', 'RGMS Sim Plans'],
  information: ['About Us', 'Contact Us', 'Blogs', 'Delivery Information', 'Privacy Policy', 'Terms & Conditions', 'Return & Refunds Policy', '2 Min Installation Blog', '6 Months Warranty', 'Extended Warranty', 'YouTube Channel'],
  phone: '+91 7042870887',
  hours: 'HOURS: Mon to Saturday :from 11am to 7 pm',
  email: 'contact@rgms.com',
  address: '126, Ramachandra residency, sector 5 , Rajender Nagar, Ghaziabad 201005',
  copyright: '\u00a9 2025 rgms.com | All rights reserved.',
};

export const megaMenu = [
  {
    title: 'Smart Cameras',
    items: ['WIFI Cameras', '4G Cameras', 'Solar Cameras', 'SuperCams', 'TriCams'],
  },
  {
    title: 'Smart Homes',
    items: ['Car Dashcams', 'Projectors', 'Home Studio', 'Gaming Controls'],
  },
  {
    title: 'Shop by Usage',
    items: ['Baby Monitoring', 'Office Security', 'Farm Security', 'Elderly Care'],
  },
  {
    title: 'Shop by Location',
    items: ['Indoor', 'Outdoor'],
  },
  {
    title: 'Camera Types',
    items: ['Pan Tilt Zoom', 'Bullet Cameras', 'Dome Cameras'],
  },
  {
    title: 'Connect Plus',
    items: ['4G Sim Plans', 'SD Card'],
  },
];

export const formatPrice = (n) =>
  'Rs. ' + n.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
