// let displayName = [{ name: Samrah, votes: 0 },
//     { name: Talha, votes: 0 },{ name: Areeba, votes: 0 }];
// for (let i = 0; i < displayName.length; i++) {
//     let but = document.getElementsByTagName('button')[i];
//     but.textContent = `${names[i].name} (${names[i].votes} votes)`;
// }
let names = [];
function addInArray() {
    let friendName = document.getElementById("friend").value;
    names.push({ name: friendName, votes: 0 });
    let newButton = document.createElement('button');
    // newButton.textContent = names[names.length - 1];
    newButton.textContent = `${friendName} (0 votes)`;
    newButton.setAttribute('data-votes', 0);
    newButton.addEventListener('click', function () {
        vote(this);
    });
    document.getElementById("allButtons").appendChild(newButton);
    
}

function vote(button) {
    let currentVotes = parseInt(button.getAttribute('data-votes'));
    button.setAttribute('data-votes', currentVotes + 1);
    button.textContent = `${names.find(item => item.name === button.textContent.split(' ')[0]).name} (${currentVotes + 1} votes)`;
}
function voteButton(button) {
    let currentVotes = parseInt(button.getAttribute('data-votes'));
    button.setAttribute('data-votes', currentVotes + 1);
    button.textContent = `${button.textContent.split(' ')[0]} (votes ${currentVotes + 1})`;
}