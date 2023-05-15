class Task {
    constructor(desc, status){
        this.desc = desc
        this.status = status
    }

    html(pos){
        return `<div class="task">
        <button class="menos x" onclick="deleteTask(${pos})">X</button>
        <p>${this.desc}</p>
        <div>
        <button class="atras" onclick="stepBack(${pos})">-</button>
        <button class="adelante" onclick="updateTask(${pos})">+</button>
        </div>
    </div>`
    }
}