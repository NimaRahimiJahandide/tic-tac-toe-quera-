let field = document.querySelector('table')
let winner = document.querySelector('.winner');
let winText = document.querySelector('.winner p')
let btn = document.querySelector('.winner button')

start(field)

function start(table) {
    createBoard(table);
    winner.classList.remove('active')

    let cells = document.querySelectorAll('td')

    let i = 0;

    for(let cell of cells) {
        cell.addEventListener('click', function func() {
            this.textContent = (['X', 'O'][i % 2])

            i++;

            this.removeEventListener('click', func)

            if(isVictory(cells)){
                winText.textContent = `Congrats ${this.textContent} Winner`;
                winner.classList.add('active');
                table.innerHTML = '';
            }else if (i === 9){
                winText.textContent = 'No Winner';
                winner.classList.add('active');
                i = 0;
                table.innerHTML = '';
            }
        })
    }
}

function createBoard(table) {
    for (let i = 0; i < 3; i++) {
        let tr = document.createElement('tr')
        for (let j = 0; j < 3; j++) {
            let td = document.createElement('td')
            tr.append(td)
        }

        table.append(tr);
    }
}

function isVictory(cells){
    let combs =[[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]];
    for (const comb of combs) {
        if(cells[comb[0]].textContent === cells[comb[1]].textContent && cells[comb[1]].textContent === cells[comb[2]].textContent && cells[comb[0]].textContent != ''){
            return true;
        }
    }
    return false;
}

btn.addEventListener('click', () =>{
    start(field)
})