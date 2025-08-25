// анимация вращения

const coin = document.getElementById("coinAnimation");

// ease-out функция
function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

// асинхронная анимация
function spinTo(targetAngle,targetZAngle, duration = 2000) {
    return new Promise((resolve) => {
        const startAngle = 0;
        const startTime = performance.now();

        function animate(time) {
            const elapsed = time - startTime;
            const t = Math.min(elapsed / duration, 1);
            const eased = easeOutCubic(t);

            const currentAngle = startAngle + (targetAngle - startAngle) * eased;
            const currentZAngle = startAngle + (targetZAngle - startAngle) * eased;
            coin.orientation = `deg ${currentAngle}deg ${currentZAngle}deg`;


            if (t < 1) {
                requestAnimationFrame(animate);
                requestAnimationFrame(GradientAnimator);
            } else {
                resolve(); // ✅ завершаем промис
            }
        }

        requestAnimationFrame(animate);
    });
}