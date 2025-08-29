// await spinTo(900, 720/2,3000);
const coinSpinAnimationLength = 3000;
random = (min, max) => {
    min = Math.ceil(min);
    return Math.floor(Math.random() * (Math.floor(max) - min + 1)) + min;
}

function SetCoinProviderSize(size){
    RemoveStyle("fontCoinProvider");
    CreateStyle("fontCoinProvider", `div.monetText span#authorText, div.monetText span#authorText span { font-size: ${size}px; }`);
}

function ScrollCodeFeatures(event) {
    log(event)
}

async function onLoad() {
    document.addEventListener('scroll', ScrollCodeFeatures)
    SetCoinProviderSize(96);
    const dsvl0 = find('div.monetText span#authorText');
    dsvl0.phantom = true;
    symbols = dsvl0.splitBySymbols();

    async function dsvl0_text_show(){
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
        await sleep(1000);
        SetCoinProviderSize(64);
        dsvl0.parentElement.classList.add("minified");
        const PinnedContacts = find('div.PinnedContacts'); PinnedContacts.classList.add("visible");
        LocalStorage.save("introExecuted", true);
        for (const img of PinnedContacts.findAll('img')) {
            img.classList.add("show");
            await sleep(100);
        }
    }

    spaceCoin = find('#coinAnimation')
    spaceCoin.makeZeroAnimation(() => { spaceCoin.transform = 'translate(0px, 200%) scale(0.5)' }, 'transform', 10)
    spaceCoin.opacity = 1;
    runLater(async() => {spaceCoin.transform = 'translate(0px, 0px) scale(0.33)'}, 950)
    runLater(dsvl0_text_show, (coinSpinAnimationLength/2)-450)
    await runLater(async () => {
        spaceCoin.transform = 'translate(0px, 0px) scale(1)'
        await spinTo(1080, 532, coinSpinAnimationLength);
    }, 100)
}


let angle = random(-70,70);
function GradientAnimator(){
    // radial-gradient(circle at 100% -20%, #f8ac19 -60%, #111 100%)
    angle += 0.15; // скорость вращения
    body.style.background = `radial-gradient(circle at 100% ${angle}%, #f8ac19 -60%, #111 100%)`;
}



window.addEventListener('load', async () => {
    for (let i = 0; i < 25*150; i++) {
        if (document.coinLoaded) {continue}
        await sleep(25)
    }
    onLoad();
})