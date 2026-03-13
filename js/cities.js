// 全球城市数据 - 优化版（修复语言代码和坐标精度）
const C = [
    // ========== 中国一线城市 ==========
    {n:"北京",ne:"Beijing",c:"CN",la:39.9042,lo:116.4074,lang:"zh-CN",greeting:"你好"},
    {n:"上海",ne:"Shanghai",c:"CN",la:31.2304,lo:121.4737,lang:"zh-CN",greeting:"你好"},
    {n:"广州",ne:"Guangzhou",c:"CN",la:23.1291,lo:113.2644,lang:"zh-CN",greeting:"你好"},
    {n:"深圳",ne:"Shenzhen",c:"CN",la:22.5431,lo:114.0579,lang:"zh-CN",greeting:"你好"},

    // ========== 中国新一线城市 ==========
    {n:"成都",ne:"Chengdu",c:"CN",la:30.5728,lo:104.0668,lang:"zh-CN",greeting:"你好"},
    {n:"杭州",ne:"Hangzhou",c:"CN",la:30.2741,lo:120.1551,lang:"zh-CN",greeting:"你好"},
    {n:"重庆",ne:"Chongqing",c:"CN",la:29.4316,lo:106.9123,lang:"zh-CN",greeting:"你好"},
    {n:"武汉",ne:"Wuhan",c:"CN",la:30.5928,lo:114.3055,lang:"zh-CN",greeting:"你好"},
    {n:"西安",ne:"Xi'an",c:"CN",la:34.3416,lo:108.9398,lang:"zh-CN",greeting:"你好"},
    {n:"南京",ne:"Nanjing",c:"CN",la:32.0603,lo:118.7969,lang:"zh-CN",greeting:"你好"},
    {n:"天津",ne:"Tianjin",c:"CN",la:39.0842,lo:117.2010,lang:"zh-CN",greeting:"你好"},
    {n:"苏州",ne:"Suzhou",c:"CN",la:31.2989,lo:120.5853,lang:"zh-CN",greeting:"你好"},
    {n:"郑州",ne:"Zhengzhou",c:"CN",la:34.7466,lo:113.6253,lang:"zh-CN",greeting:"你好"},
    {n:"长沙",ne:"Changsha",c:"CN",la:28.2282,lo:112.9388,lang:"zh-CN",greeting:"你好"},
    {n:"东莞",ne:"Dongguan",c:"CN",la:23.0430,lo:113.7633,lang:"zh-CN",greeting:"你好"},
    {n:"沈阳",ne:"Shenyang",c:"CN",la:41.8057,lo:123.4315,lang:"zh-CN",greeting:"你好"},
    {n:"青岛",ne:"Qingdao",c:"CN",la:36.0671,lo:120.3826,lang:"zh-CN",greeting:"你好"},
    {n:"合肥",ne:"Hefei",c:"CN",la:31.8206,lo:117.2272,lang:"zh-CN",greeting:"你好"},
    {n:"佛山",ne:"Foshan",c:"CN",la:23.0218,lo:113.1214,lang:"zh-CN",greeting:"你好"},

    // ========== 中国二线城市 ==========
    {n:"无锡",ne:"Wuxi",c:"CN",la:31.4912,lo:120.3119,lang:"zh-CN",greeting:"你好"},
    {n:"宁波",ne:"Ningbo",c:"CN",la:29.8683,lo:121.5440,lang:"zh-CN",greeting:"你好"},
    {n:"昆明",ne:"Kunming",c:"CN",la:25.0389,lo:102.7183,lang:"zh-CN",greeting:"你好"},
    {n:"大连",ne:"Dalian",c:"CN",la:38.9140,lo:121.6147,lang:"zh-CN",greeting:"你好"},
    {n:"福州",ne:"Fuzhou",c:"CN",la:26.0745,lo:119.2965,lang:"zh-CN",greeting:"你好"},
    {n:"厦门",ne:"Xiamen",c:"CN",la:24.4798,lo:118.0894,lang:"zh-CN",greeting:"你好"},
    {n:"哈尔滨",ne:"Harbin",c:"CN",la:45.8038,lo:126.5350,lang:"zh-CN",greeting:"你好"},
    {n:"长春",ne:"Changchun",c:"CN",la:43.8171,lo:125.3235,lang:"zh-CN",greeting:"你好"},
    {n:"济南",ne:"Jinan",c:"CN",la:36.6512,lo:117.1201,lang:"zh-CN",greeting:"你好"},
    {n:"石家庄",ne:"Shijiazhuang",c:"CN",la:38.0428,lo:114.5149,lang:"zh-CN",greeting:"你好"},
    {n:"南宁",ne:"Nanning",c:"CN",la:22.8170,lo:108.3665,lang:"zh-CN",greeting:"你好"},
    {n:"南昌",ne:"Nanchang",c:"CN",la:28.6829,lo:115.8579,lang:"zh-CN",greeting:"你好"},
    {n:"贵阳",ne:"Guiyang",c:"CN",la:26.6470,lo:106.6302,lang:"zh-CN",greeting:"你好"},
    {n:"太原",ne:"Taiyuan",c:"CN",la:37.8706,lo:112.5489,lang:"zh-CN",greeting:"你好"},
    {n:"烟台",ne:"Yantai",c:"CN",la:37.4638,lo:121.4479,lang:"zh-CN",greeting:"你好"},
    {n:"温州",ne:"Wenzhou",c:"CN",la:27.9943,lo:120.6994,lang:"zh-CN",greeting:"你好"},
    {n:"常州",ne:"Changzhou",c:"CN",la:31.8113,lo:119.9740,lang:"zh-CN",greeting:"你好"},
    {n:"南通",ne:"Nantong",c:"CN",la:31.9808,lo:120.8943,lang:"zh-CN",greeting:"你好"},
    {n:"徐州",ne:"Xuzhou",c:"CN",la:34.2044,lo:117.2842,lang:"zh-CN",greeting:"你好"},
    {n:"珠海",ne:"Zhuhai",c:"CN",la:22.2707,lo:113.5767,lang:"zh-CN",greeting:"你好"},
    {n:"惠州",ne:"Huizhou",c:"CN",la:23.1115,lo:114.4152,lang:"zh-CN",greeting:"你好"},
    {n:"中山",ne:"Zhongshan",c:"CN",la:22.5170,lo:113.3926,lang:"zh-CN",greeting:"你好"},
    {n:"兰州",ne:"Lanzhou",c:"CN",la:36.0611,lo:103.8343,lang:"zh-CN",greeting:"你好"},
    {n:"海口",ne:"Haikou",c:"CN",la:20.0458,lo:110.1983,lang:"zh-CN",greeting:"你好"},
    {n:"乌鲁木齐",ne:"Urumqi",c:"CN",la:43.8256,lo:87.6168,lang:"zh-CN",greeting:"你好"},
    {n:"呼和浩特",ne:"Hohhot",c:"CN",la:40.8414,lo:111.7519,lang:"zh-CN",greeting:"你好"},

    // ========== 中国三线城市 ==========
    {n:"潍坊",ne:"Weifang",c:"CN",la:36.7069,lo:119.1619,lang:"zh-CN",greeting:"你好"},
    {n:"保定",ne:"Baoding",c:"CN",la:38.8738,lo:115.4648,lang:"zh-CN",greeting:"你好"},
    {n:"镇江",ne:"Zhenjiang",c:"CN",la:32.1880,lo:119.4550,lang:"zh-CN",greeting:"你好"},
    {n:"扬州",ne:"Yangzhou",c:"CN",la:32.3949,lo:119.4128,lang:"zh-CN",greeting:"你好"},
    {n:"临沂",ne:"Linyi",c:"CN",la:35.1059,lo:118.3563,lang:"zh-CN",greeting:"你好"},
    {n:"唐山",ne:"Tangshan",c:"CN",la:39.6294,lo:118.1749,lang:"zh-CN",greeting:"你好"},
    {n:"盐城",ne:"Yancheng",c:"CN",la:33.3477,lo:120.1617,lang:"zh-CN",greeting:"你好"},
    {n:"台州",ne:"Taizhou",c:"CN",la:28.6563,lo:121.4208,lang:"zh-CN",greeting:"你好"},
    {n:"嘉兴",ne:"Jiaxing",c:"CN",la:30.7524,lo:120.7586,lang:"zh-CN",greeting:"你好"},
    {n:"金华",ne:"Jinhua",c:"CN",la:29.0837,lo:119.6494,lang:"zh-CN",greeting:"你好"},
    {n:"湖州",ne:"Huzhou",c:"CN",la:30.8944,lo:120.0874,lang:"zh-CN",greeting:"你好"},
    {n:"绍兴",ne:"Shaoxing",c:"CN",la:30.0301,lo:120.5798,lang:"zh-CN",greeting:"你好"},
    {n:"秦皇岛",ne:"Qinhuangdao",c:"CN",la:39.9354,lo:119.5999,lang:"zh-CN",greeting:"你好"},
    {n:"洛阳",ne:"Luoyang",c:"CN",la:34.6197,lo:112.4540,lang:"zh-CN",greeting:"你好"},
    {n:"大同",ne:"Datong",c:"CN",la:40.1136,lo:113.2995,lang:"zh-CN",greeting:"你好"},
    {n:"包头",ne:"Baotou",c:"CN",la:40.6574,lo:109.8403,lang:"zh-CN",greeting:"你好"},
    {n:"鞍山",ne:"Anshan",c:"CN",la:41.1087,lo:122.9949,lang:"zh-CN",greeting:"你好"},
    {n:"抚顺",ne:"Fushun",c:"CN",la:41.8753,lo:123.9570,lang:"zh-CN",greeting:"你好"},
    {n:"吉林",ne:"Jilin",c:"CN",la:43.8379,lo:126.5497,lang:"zh-CN",greeting:"你好"},
    {n:"齐齐哈尔",ne:"Qiqihar",c:"CN",la:47.3543,lo:123.9180,lang:"zh-CN",greeting:"你好"},
    {n:"西宁",ne:"Xining",c:"CN",la:36.6171,lo:101.7782,lang:"zh-CN",greeting:"你好"},
    {n:"银川",ne:"Yinchuan",c:"CN",la:38.4872,lo:106.2309,lang:"zh-CN",greeting:"你好"},

    // ========== 港澳台 ==========
    {n:"香港",ne:"Hong Kong",c:"HK",la:22.3193,lo:114.1694,lang:"zh-CN",greeting:"你好"},
    {n:"澳门",ne:"Macau",c:"MO",la:22.1987,lo:113.5439,lang:"zh-CN",greeting:"你好"},
    {n:"台北",ne:"Taipei",c:"TW",la:25.0330,lo:121.5654,lang:"zh-CN",greeting:"你好"},
    {n:"高雄",ne:"Kaohsiung",c:"TW",la:22.6273,lo:120.3014,lang:"zh-CN",greeting:"你好"},
    {n:"台中",ne:"Taichung",c:"TW",la:24.1477,lo:120.6736,lang:"zh-CN",greeting:"你好"},
    {n:"台南",ne:"Tainan",c:"TW",la:22.9999,lo:120.2269,lang:"zh-CN",greeting:"你好"},

    // 日本
    {n:"东京",ne:"Tokyo",c:"JP",la:35.6895,lo:139.6917,lang:"ja-JP",greeting:"こんにちは"},
    {n:"大阪",ne:"Osaka",c:"JP",la:34.6937,lo:135.5023,lang:"ja-JP",greeting:"こんにちは"},
    {n:"京都",ne:"Kyoto",c:"JP",la:35.0116,lo:135.7681,lang:"ja-JP",greeting:"こんにちは"},
    {n:"横滨",ne:"Yokohama",c:"JP",la:35.4437,lo:139.6380,lang:"ja-JP",greeting:"こんにちは"},
    {n:"名古屋",ne:"Nagoya",c:"JP",la:35.1815,lo:136.9066,lang:"ja-JP",greeting:"こんにちは"},
    {n:"札幌",ne:"Sapporo",c:"JP",la:43.0642,lo:141.3468,lang:"ja-JP",greeting:"こんにちは"},
    {n:"福冈",ne:"Fukuoka",c:"JP",la:33.5904,lo:130.4017,lang:"ja-JP",greeting:"こんにちは"},
    {n:"冲绳",ne:"Okinawa",c:"JP",la:26.2285,lo:127.6809,lang:"ja-JP",greeting:"こんにちは"},

    // 韩国
    {n:"首尔",ne:"Seoul",c:"KR",la:37.5665,lo:126.9780,lang:"ko-KR",greeting:"안녕하세요"},
    {n:"釜山",ne:"Busan",c:"KR",la:35.1796,lo:129.0756,lang:"ko-KR",greeting:"안녕하세요"},
    {n:"济州",ne:"Jeju",c:"KR",la:33.4996,lo:126.5312,lang:"ko-KR",greeting:"안녕하세요"},
    
    // 东南亚
    {n:"新加坡",ne:"Singapore",c:"SG",la:1.4,lo:103.8,lang:"en-SG",greeting:"Hello"},
    {n:"曼谷",ne:"Bangkok",c:"TH",la:13.8,lo:100.5,lang:"th-TH",greeting:"สวัสดี"},
    {n:"吉隆坡",ne:"Kuala Lumpur",c:"MY",la:3.1,lo:101.7,lang:"ms-MY",greeting:"Hello"},
    {n:"雅加达",ne:"Jakarta",c:"ID",la:-6.2,lo:106.8,lang:"id-ID",greeting:"Halo"},
    {n:"马尼拉",ne:"Manila",c:"PH",la:14.6,lo:121,lang:"tl-PH",greeting:"Hello"},
    {n:"河内",ne:"Hanoi",c:"VN",la:21,lo:105.8,lang:"vi-VN",greeting:"Xin chào"},
    {n:"胡志明",ne:"Ho Chi Minh",c:"VN",la:10.8,lo:106.6,lang:"vi-VN",greeting:"Xin chào"},
    {n:"仰光",ne:"Yangon",c:"MM",la:16.9,lo:96.2,lang:"my-MM",greeting:"မင်္ဂလာပါ"},
    
    // 美国
    {n:"纽约",ne:"New York",c:"US",la:40.7,lo:-74,lang:"en-US",greeting:"Hello"},
    {n:"洛杉矶",ne:"Los Angeles",c:"US",la:34.1,lo:-118.2,lang:"en-US",greeting:"Hello"},
    {n:"芝加哥",ne:"Chicago",c:"US",la:41.9,lo:-87.6,lang:"en-US",greeting:"Hello"},
    {n:"休斯顿",ne:"Houston",c:"US",la:29.8,lo:-95.4,lang:"en-US",greeting:"Hello"},
    {n:"旧金山",ne:"San Francisco",c:"US",la:37.8,lo:-122.4,lang:"en-US",greeting:"Hello"},
    {n:"西雅图",ne:"Seattle",c:"US",la:47.6,lo:-122.3,lang:"en-US",greeting:"Hello"},
    {n:"迈阿密",ne:"Miami",c:"US",la:25.8,lo:-80.2,lang:"en-US",greeting:"Hello"},
    {n:"波士顿",ne:"Boston",c:"US",la:42.4,lo:-71.1,lang:"en-US",greeting:"Hello"},
    {n:"拉斯维加斯",ne:"Las Vegas",c:"US",la:36.2,lo:-115.1,lang:"en-US",greeting:"Hello"},
    {n:"华盛顿",ne:"Washington DC",c:"US",la:38.9,lo:-77,lang:"en-US",greeting:"Hello"},
    
    // 欧洲
    {n:"伦敦",ne:"London",c:"GB",la:51.5,lo:-0.1,lang:"en-GB",greeting:"Hello"},
    {n:"巴黎",ne:"Paris",c:"FR",la:48.9,lo:2.4,lang:"fr-FR",greeting:"Bonjour"},
    {n:"柏林",ne:"Berlin",c:"DE",la:52.5,lo:13.4,lang:"de-DE",greeting:"Hallo"},
    {n:"罗马",ne:"Rome",c:"IT",la:41.9,lo:12.6,lang:"it-IT",greeting:"Ciao"},
    {n:"马德里",ne:"Madrid",c:"ES",la:40.4,lo:-3.7,lang:"es-ES",greeting:"Hola"},
    {n:"巴塞罗那",ne:"Barcelona",c:"ES",la:41.4,lo:2.2,lang:"es-ES",greeting:"Hola"},
    {n:"阿姆斯特丹",ne:"Amsterdam",c:"NL",la:52.4,lo:4.9,lang:"nl-NL",greeting:"Hallo"},
    {n:"维也纳",ne:"Vienna",c:"AT",la:48.2,lo:16.4,lang:"de-AT",greeting:"Grüß Gott"},
    {n:"莫斯科",ne:"Moscow",c:"RU",la:55.8,lo:37.6,lang:"ru-RU",greeting:"Привет"},
    {n:"圣彼得堡",ne:"St. Petersburg",c:"RU",la:60,lo:30.3,lang:"ru-RU",greeting:"Привет"},
    {n:"伊斯坦布尔",ne:"Istanbul",c:"TR",la:41,lo:29,lang:"tr-TR",greeting:"Merhaba"},
    {n:"雅典",ne:"Athens",c:"GR",la:38,lo:23.7,lang:"el-GR",greeting:"Γειά σου"},
    {n:"布拉格",ne:"Prague",c:"CZ",la:50.1,lo:14.4,lang:"cs-CZ",greeting:"Ahoj"},
    {n:"苏黎世",ne:"Zurich",c:"CH",la:47.4,lo:8.5,lang:"de-CH",greeting:"Grüezi"},
    {n:"斯德哥尔摩",ne:"Stockholm",c:"SE",la:59.3,lo:18.1,lang:"sv-SE",greeting:"Hej"},
    {n:"奥斯陆",ne:"Oslo",c:"NO",la:59.9,lo:10.8,lang:"no-NO",greeting:"Hei"},
    {n:"哥本哈根",ne:"Copenhagen",c:"DK",la:55.7,lo:12.6,lang:"da-DK",greeting:"Hej"},
    {n:"赫尔辛基",ne:"Helsinki",c:"FI",la:60.2,lo:25,lang:"fi-FI",greeting:"Hei"},
    {n:"布鲁塞尔",ne:"Brussels",c:"BE",la:50.9,lo:4.5,lang:"nl-BE",greeting:"Hallo"},
    
    // 中东
    {n:"迪拜",ne:"Dubai",c:"AE",la:25.2,lo:55.3,lang:"ar-AE",greeting:"مرحبا"},
    {n:"利雅得",ne:"Riyadh",c:"SA",la:24.7,lo:46.7,lang:"ar-SA",greeting:"مرحبا"},
    {n:"特拉维夫",ne:"Tel Aviv",c:"IL",la:32.1,lo:34.8,lang:"he-IL",greeting:"שלום"},
    {n:"多哈",ne:"Doha",c:"QA",la:25.3,lo:51.5,lang:"ar-QA",greeting:"مرحبا"},
    
    // 大洋洲
    {n:"悉尼",ne:"Sydney",c:"AU",la:-33.9,lo:151.2,lang:"en-AU",greeting:"Hello"},
    {n:"墨尔本",ne:"Melbourne",c:"AU",la:-37.8,lo:145,lang:"en-AU",greeting:"Hello"},
    {n:"布里斯班",ne:"Brisbane",c:"AU",la:-27.5,lo:153,lang:"en-AU",greeting:"Hello"},
    {n:"珀斯",ne:"Perth",c:"AU",la:-32,lo:115.9,lang:"en-AU",greeting:"Hello"},
    {n:"奥克兰",ne:"Auckland",c:"NZ",la:-36.9,lo:174.8,lang:"en-NZ",greeting:"Kia ora"},
    
    // 南亚
    {n:"孟买",ne:"Mumbai",c:"IN",la:19.1,lo:72.9,lang:"hi-IN",greeting:"नमस्ते"},
    {n:"新德里",ne:"New Delhi",c:"IN",la:28.6,lo:77.2,lang:"hi-IN",greeting:"नमस्ते"},
    {n:"班加罗尔",ne:"Bangalore",c:"IN",la:12.9,lo:77.6,lang:"hi-IN",greeting:"नमस्ते"},
    {n:"金奈",ne:"Chennai",c:"IN",la:13.1,lo:80.3,lang:"hi-IN",greeting:"नमस्ते"},
    {n:"卡拉奇",ne:"Karachi",c:"PK",la:24.9,lo:67.1,lang:"ur-PK",greeting:"سلام"},
    {n:"达卡",ne:"Dhaka",c:"BD",la:23.8,lo:90.4,lang:"bn-BD",greeting:"নমস্কার"},
    
    // 非洲
    {n:"开罗",ne:"Cairo",c:"EG",la:30,lo:31.2,lang:"ar-EG",greeting:"مرحبا"},
    {n:"约翰内斯堡",ne:"Johannesburg",c:"ZA",la:-26.2,lo:28,lang:"en-ZA",greeting:"Hello"},
    {n:"开普敦",ne:"Cape Town",c:"ZA",la:-34,lo:18.5,lang:"en-ZA",greeting:"Hello"},
    {n:"拉各斯",ne:"Lagos",c:"NG",la:6.5,lo:3.4,lang:"en-NG",greeting:"Hello"},
    {n:"内罗毕",ne:"Nairobi",c:"KE",la:-1.3,lo:36.8,lang:"sw-KE",greeting:"Habari"},
    
    // 南美
    {n:"圣保罗",ne:"São Paulo",c:"BR",la:-23.5,lo:-46.6,lang:"pt-BR",greeting:"Olá"},
    {n:"里约热内卢",ne:"Rio de Janeiro",c:"BR",la:-22.9,lo:-43.2,lang:"pt-BR",greeting:"Olá"},
    {n:"布宜诺斯艾利斯",ne:"Buenos Aires",c:"AR",la:-34.6,lo:-58.4,lang:"es-AR",greeting:"Hola"},
    {n:"利马",ne:"Lima",c:"PE",la:-12,lo:-77,lang:"es-PE",greeting:"Hola"},
    {n:"波哥大",ne:"Bogota",c:"CO",la:4.7,lo:-74,lang:"es-CO",greeting:"Hola"},
    {n:"圣地亚哥",ne:"Santiago",c:"CL",la:-33.4,lo:-70.7,lang:"es-CL",greeting:"Hola"},
    
    // 加拿大
    {n:"多伦多",ne:"Toronto",c:"CA",la:43.7,lo:-79.4,lang:"en-CA",greeting:"Hello"},
    {n:"温哥华",ne:"Vancouver",c:"CA",la:49.3,lo:-123.1,lang:"en-CA",greeting:"Hello"},
    {n:"蒙特利尔",ne:"Montreal",c:"CA",la:45.5,lo:-73.6,lang:"fr-CA",greeting:"Bonjour"},
    
    // 墨西哥
    {n:"墨西哥城",ne:"Mexico City",c:"MX",la:19.4,lo:-99.1,lang:"es-MX",greeting:"Hola"},
    {n:"坎昆",ne:"Cancun",c:"MX",la:21.2,lo:-86.9,lang:"es-MX",greeting:"Hola"}
];
