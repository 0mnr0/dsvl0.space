// await spinTo(900, 720/2,3000);
const coinSpinAnimationLength = 3000;
random = (min, max) => {
    min = Math.ceil(min);
    return Math.floor(Math.random() * (Math.floor(max) - min + 1)) + min;
}


async function onLoad() {
    const dsvl0 = find('div.monetText span#authorText');
    dsvl0.phantom = true;
    symbols = dsvl0.splitBySymbols();

    async function dsvl0_text_show() {
        dsvl0.phantom = false;
        const textWidth = dsvl0.realWidth;
        dsvl0.maxWidth = '0px';
        await sleep(100);
        dsvl0.opacity = 1;
        dsvl0.maxWidth = textWidth+'px';
        // Invert list
        symbols = symbols.reverse();
        await sleep(300);
        for (const symbol of symbols) {
            symbol.scale = 0.88;
            await sleep(20)
            runLater(() => {
                symbol.scale = 1;
            }, 100);
            await sleep(30);
        }
    }

    spaceCoin = find('#coinAnimation')
    spaceCoin.makeZeroAnimation(() => { spaceCoin.transform = ' scale(0)' }, 'transform', 10)
    spaceCoin.opacity = 1;
    runLater(async() => {spaceCoin.transform = ' scale(0.33)'}, 950)
    runLater(dsvl0_text_show, (coinSpinAnimationLength/2)-450)
    await runLater(async () => {
        spaceCoin.transform = ' scale(1)'
        await spinTo(1080, 532, coinSpinAnimationLength)
    }, 100)
}


let angle = random(-70,70);
function GradientAnimator(){
    // radial-gradient(circle at 100% -20%, #f8ac19 -60%, #111 100%)
    angle += 0.15; // скорость вращения
    body.style.background = `radial-gradient(circle at 100% ${angle}%, #f8ac19 -60%, #111 100%)`;
}



window.addEventListener('load', onLoad)