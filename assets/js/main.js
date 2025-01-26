console.log(
    `%c Author %c 常乐凯特 %c`,
    'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
    'background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
    'background:transparent'
)
console.log("常乐凯特的主页 https://changlecat.me/");

// 常量
const DEFAULT_HUE = 30;

// 主题切换
function switchTheme() {
    if (localStorage.theme === 'dark') {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }
}

// 按钮脚本
function loadButtonScript() {
    // let settingBtn = document.getElementById("display-settings-switch");
    // settingBtn.addEventListener("click", function () {
    //     let settingPanel = document.getElementById("display-setting");
    //     settingPanel.classList.toggle("closed");
    // });

    const menuBtn = document.getElementById("nav-menu-switch");
    menuBtn.addEventListener("click", function () {
        let menuPanel = document.getElementById("nav-menu-panel");
        menuPanel.classList.toggle("closed");
    });

    const paletteBtn = document.getElementById("hue-switch");
    paletteBtn.addEventListener("click", function () {
        let palettePanel = document.getElementById("hue-palette-panel");
        palettePanel.classList.toggle("closed");
    });
}

// 点击外部关闭
function setClickOutsideToClose(panel, ignores) {
    document.addEventListener("click", event => {
        let panelDom = document.getElementById(panel);
        let tDom = event.target;
        for (let ig of ignores) {
            let ie = document.getElementById(ig)
            if (ie == tDom || (ie?.contains(tDom))) {
                return;
            }
        }
        panelDom.classList.add("closed");
    });
}


// 主题颜色设置
function setHue(hue) {
    // localStorage.setItem('hue', String(hue))
    const r = document.querySelector(':root')
    if (!r) {
        return
    }
    r.style.setProperty('--hue', hue)
    localStorage.setItem('hue', hue);
    const huevle = document.getElementById("hue-value");
    huevle.innerText = hue;
}

// 重置主题颜色
function resetHue() {
    setHue(DEFAULT_HUE);

    const huePalette = document.getElementById("hue-palette");
    huePalette.value = DEFAULT_HUE;
}

// 检测浏览器是否支持 oklch 颜色空间
function supportsOklchColor() {
    var div = document.createElement('div');
    div.style.color = 'oklch(0 0 0)';
    document.body.appendChild(div);
    var isSupported = getComputedStyle(div).color === 'oklch(0 0 0)';
    document.body.removeChild(div);
    return isSupported;
}

// 初始化

// 颜色
if (!supportsOklchColor()) {
    console.log('Your browser does not support oklch color space.');
} else {
    console.log('Your browser supports oklch color space.');
    let hue = localStorage.getItem('hue') || DEFAULT_HUE;
    setHue(hue);
    // 设置颜色选择器的值
    const huePalette = document.getElementById("hue-palette");
    huePalette.value = hue;
}
// 主题
if (!localStorage.theme) {
    var isLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    if(isLight) {
        localStorage.theme = 'light';
    }
}
if(localStorage.theme == 'light') {
    document.documentElement.classList.remove('dark');
}
// 主题切换按钮
loadButtonScript();
// 点击外部关闭
setClickOutsideToClose("nav-menu-panel", ["nav-menu-panel", "nav-menu-switch"]);
setClickOutsideToClose("hue-palette-panel", ["hue-palette-panel", "hue-switch"]);
// 暴露函数
window.switchTheme = switchTheme;
window.setHue = setHue;
window.resetHue = resetHue;