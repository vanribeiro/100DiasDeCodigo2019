function pieChart() {  
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    let days = 57;
    let axisX = canvas.width/2;
    let axisY = canvas.height/2;
    let radius = 100;
    
    context.beginPath();
    context.arc(axisX, axisY, radius, 0, 2 * Math.PI);
    context.lineWidth = 50;
    context.strokeStyle = '#cccccc';
    context.stroke();

    context.beginPath();
    context.arc(axisX, axisY, radius, Math.PI * (-days/100), days/100 * Math.PI);
    context.lineWidth = 50;
    context.strokeStyle = '#B56A7A';
    context.stroke();

    context.font = '20px Impact'
    context.fillStyle = '#ebebeb';
}

window.onload = pieChart();