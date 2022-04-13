const fileSelector = document.getElementById('file-input');
const solution = document.getElementById('solution');

function calculateNameValues(namesArray) {
    let totalValue = 0;

    for (let i = 0; i < namesArray.length; i++) {
        let nameValue = 0;

        for (let j = 0; j < namesArray[i].length; j++) {
            nameValue += namesArray[i].charCodeAt(j) - 64;
        }

        totalValue += nameValue * (i + 1);
    }

   solution.innerHTML = "Solution: " + totalValue;
}

function cleanNames(namesArray) {
    let cleanNames = namesArray.map(name => {
        return name.replace('\"', '').replace('\"', '');
    })
    calculateNameValues(cleanNames.sort());
}

async function changeFileInputHandler(event) {
    let files = event.target.files;
    let text = await files[0].text();
    let namesArray = text.split(",");
    cleanNames(namesArray);
}

fileSelector.addEventListener('change', changeFileInputHandler);
