const body = document.body;
body.style.overflow = 'hidden';    

const createShapeElement = () => {
    const shapeElement = document.createElement('div');
    shapeElement.style.position = 'absolute';
    shapeElement.style.left = `${Math.random() * window.innerWidth}px`;
    shapeElement.style.top = `${Math.random() * window.innerHeight}px`;
    shapeElement.style.fontSize = `${Math.floor(Math.random() * 20) + 30}px`;
    shapeElement.style.color = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.5)`;
    shapeElement.style.pointerEvents = 'none'; 
    shapeElement.style.userSelect = 'none';  
    shapeElement.style.zIndex = '-1';   
    shapeElement.innerText = '●'; 
    body.appendChild(shapeElement);

    let direction = Math.random() > 0.5 ? 1 : -1;
    const speed = Math.random() * 2 + 1;

    const moveShape = () => {
        const rect = shapeElement.getBoundingClientRect();
        if (rect.top <= 0 || rect.bottom >= window.innerHeight) {
            direction *= -1;
        }
        shapeElement.style.transform = `translateY(${direction * speed}px)`;
        requestAnimationFrame(moveShape);
    };
    moveShape();

    setTimeout(() => {
        shapeElement.remove();
    }, 15000);
};

// setInterval(createShapeElement, 500);


let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById('result');

function calculateAge() {
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3 , y3;

    y3 = y2 - y1;

    if(m2 >= m1){
        m3 = m2 - m1;
    }else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1){
        d3 = d2 - d1;
    }else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if(m3 < 0){
        m3 = 11;
        y3--;
    }
    result.innerHTML = `You are ${y3} years, ${m3} months and ${d3} days old`;
}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}
