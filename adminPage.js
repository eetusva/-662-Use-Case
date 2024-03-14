
document.getElementById("showVotesBtn").addEventListener("click", showVotes);
document.getElementById("addVoteButton").addEventListener("click", showForm);
document.getElementById("addVoteForm").addEventListener("submit", addVote);
document.getElementById("deleteVote").addEventListener("click", deleteVote);
document.getElementById("adminLogoutBtn").addEventListener("click", adminLogout);
document.getElementById("addVote").addEventListener("click", addVote);

const voteData = [
    {
        id: 1,
        title: "Äänestys 1",
        question: "Mikä on suosikkiruokasi esedulla?",
        options: ["Paistetut muikut", "Pinaattikeitto", "Nugetit"],
    },
    {
        id: 2,
        title: "Äänestys 2",
        question: "Mikä Esedulla on parasta?",
        options: ["Kaverit", "Opiskelu", "En tiedä"],
    },
    {
        id: 3,
        title: "Äänestys 3",
        question: "Monta tuntia päivässä opiskelet",
        options: ["8 tuntia", "7 tuntia", "6 tuntia"],
    }
];

localStorage.setItem("votes", JSON.stringify(voteData));

function getVotes() {
    const storedVotes = localStorage.getItem("votes");

    if (storedVotes) {
        return JSON.parse(storedVotes);
    } else {
        return [];
    }
}

function showVotes() {
    document.getElementById("addVote").style.display = "none";
    const votesContainer = document.getElementById("votes");
    const voteList = document.getElementById("voteList");
    const storedVotes = getVotes();

    if (storedVotes.length > 0) {
        voteList.innerHTML = "";

        storedVotes.forEach(vote => {
            const voteLink = document.createElement("a");
            voteLink.textContent = vote.title;
            voteLink.href = "#";
            voteLink.addEventListener("click", () => {
                viewVoteDetails(vote);
            });
            voteList.appendChild(voteLink);
            voteList.appendChild(document.createElement("br"));
        });
        votesContainer.style.display = "block";
    } else {
        console.log("Ei äänestyksiä!");
    }
}   

function viewVoteDetails(vote) {
    const voteView = document.getElementById("voteView");
    voteView.innerHTML = "";
    const voteTitle = document.createElement("h3");
    voteTitle.textContent = vote.title;
    voteView.appendChild(voteTitle);

    const question = document.createElement("p");
    question.textContent = vote.question;
    voteView.appendChild(question);

    for (let i = 0; i < vote.options.length; i++) {
        const option = vote.options[i];

        const input = document.createElement("input");
        input.type = "radio";
        input.name = "voteOption";
        input.value = i;

        const label = document.createElement("label");
        label.htmlFor = `option${i}`;
        label.textContent = option;

        voteView.appendChild(input);
        voteView.appendChild(label);
        voteView.appendChild(document.createElement("br"));
    }

    const resultsButton = document.createElement("button");
    resultsButton.textContent = "Katso äänestystilanne";
    resultsButton.addEventListener("click", () => {
        const voteCount = calculateVotes(vote);
        updateResults(vote, voteCount);
    });
    voteView.appendChild(resultsButton);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Poista äänestys";
    deleteBtn.addEventListener("click", () => {
        deleteVote(vote);
    });
    voteView.appendChild(deleteBtn);

    voteView.style.display = "block";
}

function castVote(vote) {
    const selectedVoteOption = document.querySelector('input[name="voteOption"]:checked');

    if (selectedVoteOption) {
        const selectedIndex = selectedVoteOption.value;
        const storedVotes = getVotes();

        const voteId = vote.id;
        const newVote = {voteId, optionIndex: selectedIndex};
        storedVotes.push(newVote);

        localStorage.setItem("votes", JSON.stringify(storedVotes));

        const voteView = document.getElementById("voteView");
        let msg = "Kiitos äänestämisestä!"
        voteView.innerHTML = msg;
        document.getElementById("displayResults").style.display = "none";
    } else {
        alert("Valitse vaihtoehto!")
    }
}

function calculateVotes(vote) {
    const storedVotes = getVotes();
    const voteId = vote.id;
    const voteCount = new Array(vote.options.length).fill(0);

    for (let i = 0; i < storedVotes.length; i++) {
        const votedOption = storedVotes[i];

        if (votedOption.voteId === voteId) {
            const optionIndex = votedOption.optionIndex;
            voteCount[optionIndex]++;
        }
    }
    return voteCount;
}

function updateResults(vote, voteCount) {
    const resultDiv = document.getElementById("displayResults");
    resultDiv.innerHTML = "";

    const resultsTitle = document.createElement("h3");
    resultsTitle.textContent = "Äänestystilanne";
    resultDiv.appendChild(resultsTitle);
    
    for (let i = 0; i < vote.options.length; i++) {
        const option = vote.options[i];
        const votes = voteCount[i]
        const resultLine = document.createElement("p");
        resultLine.textContent = `${option}: ${votes} ääntä`;
        resultDiv.appendChild(resultLine);
    }
    resultDiv.style.display = "block";
}

function displayResults(vote, voteCount) {
    const results = document.getElementById("displayResults");
    results.innerHTML = "";

    const title = document.createElement("h3");
    title.textContent = "Tulokset";
    results.appendChild(title);

    for (let i = 0; i < vote.options.length; i++) {
        const option = vote.options[i];
        const votes = voteCount[i];
        const resultLine = document.createElement("p");
        resultLine.textContent = `${option}: ${votes} ääntä`;
        results.appendChild(resultLine);
    }
    results.style.display = "block";
}

function showForm() {
    document.getElementById("votes").style.display = "none";
    document.getElementById("voteView").style.display = "none";
    document.getElementById("displayResults").style.display = "none";
    document.getElementById("addVote").style.display = "block";
}

function addVote(event) {
    event.preventDefault();

    const voteTitle = document.getElementById("voteTitle").value;
    const voteQuestion = document.getElementById("voteQuestion").value;
    const voteOptions = document.getElementById("voteOptions").value.split(",");

    if (voteTitle && voteQuestion && voteOptions.length > 1) {
        const newVote = {
            id: Date.now(),
            title: voteTitle,
            question: voteQuestion,
            options: voteOptions
        };
        const storedVotes = getVotes();

        storedVotes.push(newVote);
        localStorage.setItem("votes", JSON.stringify(storedVotes));

        document.getElementById("voteTitle").value = "";
        document.getElementById("voteQuestion").value = "";
        document.getElementById("voteOptions").value = "";

        showVotes();
    }
}

function deleteVote(vote) {
    const storedVotes = getVotes();
    const voteId = vote.id;

    for (let i = 0; i < storedVotes.length; i++) {
        if (storedVotes[i].id === voteId) {
            storedVotes.splice(i, 1);
            break;
        }
    }
    localStorage.setItem("votes", JSON.stringify(storedVotes));
    document.getElementById("voteView").style.display = "none";
    document.getElementById("displayResults").style.display ="none";

    showVotes();
}

function adminLogout() {
    window.location.href = "index.html";
}
