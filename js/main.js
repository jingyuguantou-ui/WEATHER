// 根据使用者当地时间获取问候语
function getTimeBasedGreeting() {
    const hour = new Date().getHours();
    
    if (hour >= 5 && hour < 9) {
        return "早上好";
    } else if (hour >= 9 && hour < 11) {
        return "上午好";
    } else if (hour >= 11 && hour < 13) {
        return "中午好";
    } else if (hour >= 13 && hour < 18) {
        return "下午好";
    } else if (hour >= 18 && hour < 21) {
        return "晚上好";
    } else if (hour >= 21 && hour < 24) {
        return "晚安";
    } else {
        return "晚安";
    }
}

// Main Entry Point - 增强版（带欢迎界面）
document.addEventListener('DOMContentLoaded', async function() {
    // 初始化欢迎界面
    initWelcomeScreen();
    
    // Initialize UI
    UI.init();
    
    // Initialize Cyberpunk Map Background
    initCyberMapBackground();
    
    // 初始化欢迎界面的ASCII地图
    initWelcomeMap();
});

// 初始化欢迎界面的ASCII地图
function initWelcomeMap() {
    const welcomeAsciiMap = document.getElementById('welcome-ascii-map');
    if (!welcomeAsciiMap) return;
    
    welcomeAsciiMap.textContent = getASCIIWorldMap();
}

// 获取ASCII世界地图
function getASCIIWorldMap() {
    return `
        ╔════════════════════════════════════════════════════════════════════════════════╗
        ║  ╭────────────────────────── CYBER WEATHER 2077 ──────────────────────────╮  ║
        ║  │                           GLOBAL WEATHER GRID                          │  ║
        ║  ╰─────────────────────────────────────────────────────────────────────────╯  ║
        ╠════════════════════════════════════════════════════════════════════════════════╣
        ║                                                                                 ║
        ║        ▓▓▓▓▓▓▓      ▓▓▓▓▓▓▓▓▓      ▓▓▓▓▓▓▓▓▓▓▓      ▓▓▓▓▓▓▓                 ║
        ║       ▓░░░░░░░▓   ▓░░░░░░░░░▓   ▓░░░░░░░░░░░░▓   ▓░░░░░░░░▓                ║
        ║      ▓░░░░░░░░░▓ ▓░░░░░░░░░░░▓ ▓░░░░░░░░░░░░░░▓ ▓░░░░░░░░░░▓               ║
        ║     ▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓              ║
        ║      ▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓              ║
        ║       ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                 ║
        ║                                                                                 ║
        ║  ═══════════════════════════════════════════════════════════════════════════  ║
        ║                                                                                 ║
        ║     ┌─────────┐        ┌─────────┐        ┌─────────┐        ┌─────────┐     ║
        ║     │ ★ BEIJING│        │ ★ TOKYO │        │ ★ SYDNEY│        │ ★ DUBAI │     ║
        ║     │  39.9°N  │        │  35.7°N │        │  33.9°S │        │  25.2°N │     ║
        ║     │ 116.4°E  │        │ 139.7°E │        │ 151.2°E │        │  55.3°E │     ║
        ║     └─────────┘        └─────────┘        └─────────┘        └─────────┘     ║
        ║                                                                                 ║
        ║     ┌─────────┐        ┌─────────┐        ┌─────────┐        ┌─────────┐     ║
        ║     │ ★NEW YORK│        │ ★ LONDON│        │ ★ PARIS │        │ ★ MOSCOW│     ║
        ║     │  40.7°N  │        │  51.5°N │        │  48.9°N │        │  55.8°N │     ║
        ║     │  74.0°W  │        │   0.1°W │        │   2.4°E │        │  37.6°E │     ║
        ║     └─────────┘        └─────────┘        └─────────┘        └─────────┘     ║
        ║                                                                                 ║
        ║  ═══════════════════════════════════════════════════════════════════════════  ║
        ║                                                                                 ║
        ║     ┌─── GLOBAL DATA STREAM ───┐    ┌─── WEATHER MATRIX ───┐              ║
        ║     │ ▓▓▓░░░▓▓▓░░░▓▓▓░░░▓▓▓░░░ │    │ 01001110 01000101    │              ║
        ║     │ ▓░░░▓▓░░░▓▓░░░▓▓░░░▓▓░░░ │    │ 01010111 00100000    │              ║
        ║     │ ▓▓▓░░░▓▓▓░░░▓▓▓░░░▓▓▓░░░ │    │ 01010111 01000101    │              ║
        ║     └───────────────────────────┘    └──────────────────────┘              ║
        ║                                                                                 ║
        ╚════════════════════════════════════════════════════════════════════════════════╝
    `;
}

// 欢迎界面初始化
function initWelcomeScreen() {
    console.log('initWelcomeScreen called');
    
    // 键盘Enter键也可以开始
    document.addEventListener('keydown', (e) => {
        const welcomeScreen = document.getElementById('welcome-screen');
        if (e.key === 'Enter' && welcomeScreen && !welcomeScreen.classList.contains('hidden')) {
            window.handleStartClick();
        }
    });
}

// 全局函数：开始按钮点击
window.handleStartClick = async function() {
    console.log('handleStartClick called!');
    
    const welcomeScreen = document.getElementById('welcome-screen');
    const startBtn = document.getElementById('start-btn');
    const loadingOverlay = document.getElementById('loading');
    
    // 按钮动画
    if (startBtn) {
        startBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            startBtn.style.transform = 'scale(1)';
        }, 100);
    }
    
    // 隐藏欢迎界面
    if (welcomeScreen) {
        welcomeScreen.classList.add('hidden');
    }
    
    // 显示加载界面
    if (loadingOverlay) {
        loadingOverlay.classList.remove('hidden');
    }
    
    // 延迟初始化3D地球
    setTimeout(async () => {
        await initMainApp();
    }, 300);
};

// 根据经纬度获取城市信息
async function getCityByLocation(lat, lon) {
    try {
        // 使用OpenWeatherMap的Geocoding API获取城市信息
        const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${CONFIG.weather.apiKey}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('Geocoding failed');
        const data = await res.json();
        
        if (data && data.length > 0) {
            const cityData = data[0];
            // 检测国家代码并设置语言
            let lang = 'zh-CN';
            let countryCode = cityData.country || 'CN';
            
            if (countryCode === 'CN' || countryCode === 'TW' || countryCode === 'HK' || countryCode === 'MO') {
                lang = countryCode === 'TW' ? 'zh-TW' : (countryCode === 'HK' || countryCode === 'MO' ? 'zh-YUE' : 'zh-CN');
            } else if (countryCode === 'JP') {
                lang = 'ja-JP';
            } else if (countryCode === 'KR') {
                lang = 'ko-KR';
            } else if (countryCode === 'US' || countryCode === 'GB' || countryCode === 'AU' || countryCode === 'CA') {
                lang = 'en-US';
            } else if (countryCode === 'FR') {
                lang = 'fr-FR';
            } else if (countryCode === 'DE') {
                lang = 'de-DE';
            } else if (countryCode === 'RU') {
                lang = 'ru-RU';
            } else if (countryCode === 'TH') {
                lang = 'th-TH';
            }
            
            return {
                n: cityData.local_names?.zh || cityData.local_names?.zh_cn || cityData.name,
                ne: cityData.name,
                c: countryCode,
                la: lat,
                lo: lon,
                lang: lang,
                greeting: getTimeBasedGreeting()
            };
        }
    } catch (e) {
        console.error('Geocoding error:', e);
    }
    return null;
}

// 获取用户位置并加载天气
async function loadUserLocationWeather() {
    return new Promise((resolve) => {
        if (!navigator.geolocation) {
            console.log('Geolocation not supported, using default city');
            resolve(null);
            return;
        }
        
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                console.log(`User location: ${latitude}, ${longitude}`);
                
                // 根据经纬度获取城市信息
                const city = await getCityByLocation(latitude, longitude);
                if (city) {
                    resolve(city);
                } else {
                    resolve(null);
                }
            },
            (error) => {
                console.log('Geolocation error:', error.message);
                resolve(null);
            },
            { timeout: 5000, maximumAge: 300000 } // 5秒超时，缓存5分钟
        );
    });
}

// 主应用初始化
async function initMainApp() {
    console.log('initMainApp called');
    
    // Initialize 3D Earth
    Earth3D.init();
    
    // Set up city click handler - 直接加载天气，不弹窗确认
    Earth3D.onCityClick = async function(city) {
        // 直接聚焦并加载天气
        Earth3D.focusOnCity(city);
        await loadCityWeather(city);
    };
    
    // 自动加载用户当地天气（优先使用浏览器定位）
    let defaultCity = await loadUserLocationWeather();
    
    // 如果定位失败，使用默认城市
    if (!defaultCity) {
        defaultCity = {n:"北京",ne:"Beijing",c:"CN",la:39.9,lo:116.4,lang:"zh-CN",greeting:getTimeBasedGreeting()};
    }
    
    // 延迟0.6秒后加载默认城市天气并问好（让地球先完全渲染）
    setTimeout(async () => {
        await loadCityWeather(defaultCity);
    }, 600);
    
    // Set up city hover handler (显示全息卡片)
    Earth3D.onCityHover = function(city, mouseX, mouseY) {
        if (city) {
            UI.showHoloCard(city, mouseX, mouseY);
        } else {
            UI.closeHoloCard();
        }
    };
    
    // Global functions for UI
    window.selectCity = async function(city) {
        console.log('selectCity:', city);
        if (Earth3D) Earth3D.focusOnCity(city);
        await loadCityWeather(city);
    };
    
    window.setVolume = function(v) {
        AudioCtrl.setVolume(v);
    };
    
    window.toggleMute = function() {
        return AudioCtrl.toggleMute();
    };
    
    window.setDayNight = function(isDay) {
        Earth3D.setTheme(isDay);
    };
    
    // 带超时的weather获取
    async function fetchWithTimeout(promise, timeout = 5000) {
        return Promise.race([
            promise,
            new Promise((_, reject) => 
                setTimeout(() => reject(new Error('Timeout')), timeout)
            )
        ]);
    }
    
    // Load weather for a city (forceRefresh: 强制获取最新数据)
    async function loadCityWeather(city, forceRefresh = true) {
        try {
            // Show panel
            UI.elements.weatherPanel.classList.add('active');
            
            // Play greeting (使用时间问候语) - 等待播报完成
            await playCityGreeting(city);
            
            // Get weather data with timeout (强制刷新获取最新数据)
            let weatherData = null;
            try {
                console.log('正在获取天气数据...', city.n);
                weatherData = await fetchWithTimeout(WeatherAPI.getWeather(city, forceRefresh), 8000);
                console.log('天气数据获取结果:', weatherData);
            } catch (e) {
                console.log('Weather API timeout or error:', e);
            }
            
            let weather = null;
            let aqi = null;
            
            // 检查API是否返回有效数据
            const isValidData = weatherData && (weatherData.cod === 200 || weatherData.cod === '200');
            
            if (isValidData) {
                weather = WeatherAPI.formatWeather(weatherData);
                console.log('格式化后的天气数据:', weather);
                
                try {
                    const aqiData = await fetchWithTimeout(WeatherAPI.getAirQuality(city, forceRefresh), 3000);
                    aqi = WeatherAPI.formatAQI(aqiData);
                } catch (e) {
                    console.log('AQI获取失败:', e);
                }
                
                // 语音播报天气
                speakWeather(city, weather);
                
                // Update audio
                AudioCtrl.updateForWeather(weather.main, city.c);
            } else {
                // API失败时使用模拟数据（仅用于测试显示）
                console.log('API返回无效数据，使用模拟数据');
                weather = {
                    temp: Math.round(15 + Math.random() * 15),
                    humidity: Math.round(40 + Math.random() * 40),
                    wind_speed: Math.round(1 + Math.random() * 5),
                    description: '数据获取中',
                    icon: '01d',
                    main: 'clear',
                    city: city.n,
                    country: city.ne
                };
                // 显示错误提示
                UI.showError('天气数据获取失败，请检查网络连接');
            }
            
            // 更新UI后再隐藏loading
            UI.updateWeather(weather, aqi);
            UI.hideLoading();
            
        } catch (e) {
            console.error('Error loading weather:', e);
            UI.hideLoading();
        }
    }
    
    // Play city greeting (仅语音播报，不弹窗显示) - 返回Promise等待播报完成
    function playCityGreeting(city) {
        return new Promise((resolve) => {
            // 获取基于时间的问候语
            const timeGreeting = getTimeBasedGreeting();
            
            // 仅语音播报时间问候语（不弹窗显示）
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                
                const utterance = new SpeechSynthesisUtterance(timeGreeting);
                
                const langMap = {
                    'zh-CN': 'zh-CN',
                    'zh-TW': 'zh-CN',
                    'ja-JP': 'ja-JP',
                    'ko-KR': 'ko-KR',
                    'en-US': 'en-US',
                    'en-GB': 'en-GB'
                };
                
                utterance.lang = langMap[city.lang] || 'zh-CN';
                utterance.rate = 0.9;
                
                utterance.onend = () => resolve();
                utterance.onerror = () => resolve();
                
                window.speechSynthesis.speak(utterance);
            } else {
                resolve();
            }
        });
    }
    
    // 语音播报天气（新增功能）
    function speakWeather(city, weather) {
        if (!('speechSynthesis' in window)) return;
        
        // 构建播报内容
        let weatherText = '';
        
        // 根据城市语言生成播报内容
        const lang = city.lang || 'zh-CN';
        
        if (lang.startsWith('zh-')) {
            // 中文播报
            weatherText = `${city.n}现在${weather.description}，气温${weather.temp}度，湿度${weather.humidity}%，风速${weather.wind_speed}米每秒`;
        } else if (lang === 'ja-JP') {
            // 日语播报
            weatherText = `${city.n}は現在${weather.description}です。気温は${weather.temp}度、湿度は${weather.humidity}%、風速は${weather.wind_speed}メートルです`;
        } else if (lang === 'ko-KR') {
            // 韩语播报
            weatherText = `${city.n}는 현재 ${weather.description}입니다. 기온은 ${weather.temp}도, 습도는 ${weather.humidity}%, 풍속은 ${weather.wind_speed}m/s입니다`;
        } else if (lang.startsWith('en-')) {
            // 英语播报
            weatherText = `${city.n} is now ${weather.description}. Temperature ${weather.temp} degrees, humidity ${weather.humidity}%, wind speed ${weather.wind_speed} meters per second`;
        } else {
            // 其他语言 - 使用英语
            weatherText = `${city.n} is now ${weather.description}. Temperature ${weather.temp} degrees, humidity ${weather.humidity} percent, wind speed ${weather.wind_speed} meters per second`;
        }
        
        // 不再取消语音，让问候语播报完成后再播报天气
        // window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(weatherText);
        
        // 语音开始时降低环境音
        utterance.onstart = function() {
            console.log('天气语音播报开始');
            AudioCtrl.startSpeechDucking();
        };
        
        // 语音结束时恢复环境音并隐藏天气面板
        utterance.onend = function() {
            console.log('天气语音播报结束，准备隐藏面板');
            AudioCtrl.endSpeechDucking();
            // 天气播报结束后延迟1秒隐藏面板（2077风格撤走效果）
            setTimeout(() => {
                const panel = UI.elements.weatherPanel;
                if (panel && panel.classList.contains('active')) {
                    panel.classList.remove('active');
                    console.log('天气面板已隐藏');
                }
            }, 1000);
        };
        
        // 语音错误时也恢复环境音
        utterance.onerror = function(e) {
            console.log('语音播报错误:', e);
            AudioCtrl.endSpeechDucking();
        };
        
        // 设置语言
        const langMap = {
            'zh-CN': 'zh-CN',
            'zh-TW': 'zh-CN',
            'ja-JP': 'ja-JP',
            'ko-KR': 'ko-KR',
            'en-US': 'en-US',
            'en-GB': 'en-GB'
        };
        
        utterance.lang = langMap[lang] || 'zh-CN';
        utterance.rate = 0.85;
        utterance.pitch = 1;
        
        window.speechSynthesis.speak(utterance);
    }
    
    // Check time and set initial day/night
    function initDayNight() {
        const hour = new Date().getHours();
        const isDay = hour >= 6 && hour < 18;
        
        // Default night theme
        document.body.classList.add('night-theme');
        
        if (isDay) {
            document.body.classList.remove('night-theme');
            document.body.classList.add('day-theme');
            UI.elements.daynightToggle.querySelector('.icon-sun').classList.remove('hidden');
            UI.elements.daynightToggle.querySelector('.icon-moon').classList.add('hidden');
        }
        
        Earth3D.setTheme(isDay);
    }
    
    // Auto-update time
    setInterval(() => UI.updateTime(), 1000);
    
    // Initialize audio on first click
    document.addEventListener('click', () => {
        AudioCtrl.init();
    }, { once: true });
    
    // Initial setup
    initDayNight();
    
    // Hide loading screen after initialization
    setTimeout(() => {
        UI.hideLoading();
    }, 1000);
}

// 初始化赛博朋克地图背景
function initCyberMapBackground() {
    const asciiMap = document.getElementById('ascii-world-map');
    const mapMarkers = document.getElementById('map-markers');
    const dataStreams = document.getElementById('data-streams');
    
    if (!asciiMap) return;

    // 使用统一的ASCII地图
    asciiMap.textContent = getASCIIWorldMap();

    // 添加城市标记点
    if (mapMarkers && typeof C !== 'undefined') {
        // 主要城市位置（近似坐标）
        const mainCities = [
            { name: 'BEIJING', x: 75, y: 35 },
            { name: 'TOKYO', x: 82, y: 37 },
            { name: 'NEW YORK', x: 25, y: 38 },
            { name: 'LONDON', x: 48, y: 30 },
            { name: 'PARIS', x: 50, y: 32 },
            { name: 'SYDNEY', x: 88, y: 72 },
            { name: 'DUBAI', x: 60, y: 45 },
            { name: 'SINGAPORE', x: 78, y: 58 },
            { name: 'MOSCOW', x: 58, y: 28 },
            { name: 'SEOUL', x: 80, y: 38 }
        ];

        mainCities.forEach((city, i) => {
            const marker = document.createElement('div');
            marker.className = 'map-marker';
            marker.style.left = `${city.x}%`;
            marker.style.top = `${city.y}%`;
            marker.style.animationDelay = `${i * 0.3}s`;
            mapMarkers.appendChild(marker);
        });

        // 添加连接线
        const connections = [
            { from: { x: 75, y: 35 }, to: { x: 82, y: 37 } }, // Beijing - Tokyo
            { from: { x: 48, y: 30 }, to: { x: 50, y: 32 } }, // London - Paris
            { from: { x: 25, y: 38 }, to: { x: 48, y: 30 } }, // NY - London
            { from: { x: 75, y: 35 }, to: { x: 60, y: 45 } }, // Beijing - Dubai
        ];

        connections.forEach((conn, i) => {
            const line = document.createElement('div');
            line.className = 'connection-line';
            
            const dx = conn.to.x - conn.from.x;
            const dy = conn.to.y - conn.from.y;
            const length = Math.sqrt(dx * dx + dy * dy);
            const angle = Math.atan2(dy, dx) * 180 / Math.PI;
            
            line.style.left = `${conn.from.x}%`;
            line.style.top = `${conn.from.y}%`;
            line.style.width = `${length}%`;
            line.style.transform = `rotate(${angle}deg)`;
            line.style.transformOrigin = '0 0';
            line.style.animationDelay = `${i * 0.5}s`;
            
            mapMarkers.appendChild(line);
        });
    }

    // 添加数据流效果
    if (dataStreams) {
        for (let i = 0; i < 5; i++) {
            const stream = document.createElement('div');
            stream.className = 'data-stream';
            stream.style.top = `${20 + i * 15}%`;
            stream.style.animationDelay = `${i * 2}s`;
            
            // 生成随机数据流
            let dataText = '';
            for (let j = 0; j < 30; j++) {
                dataText += Math.random() > 0.5 ? '1' : '0';
                if (j % 8 === 7) dataText += ' ';
            }
            stream.textContent = dataText;
            
            dataStreams.appendChild(stream);
        }
    }
}
