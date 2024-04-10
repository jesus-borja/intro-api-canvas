function drawCuadrado() {
    const canvas = document.getElementById("cuadrado");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = "rgb(255, 50, 50)";
        // forma esencial de rectangulos
        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);
    }
}

function drawPath() {
    const canvas = document.getElementById("path");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        // forma esencial de paths o caminos
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(25, 75);
        ctx.lineTo(75, 75);
        ctx.fill();
    }
}

drawCuadrado();
drawPath();
