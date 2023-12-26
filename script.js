const loadingPercent = document.querySelector('.loading-percent');
const background = document.querySelector('.background');

let loaded = 0;

let interval = setInterval(blurBackground, 30);

function blurBackground() {
    loaded++;

    if (loaded > 99) {
        clearInterval(interval);
    }

    loadingPercent.innerText = `${loaded}%`;

    loadingPercent.style.opacity = scale(loaded, 0, 100, 1, 0);
    background.style.filter = `blur(${scale(loaded, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}