let mena = 0;
let upgradeCost = 10;
let morePerClick = 1;
let autoclickCost = 100;
let autoclickStrength = 0;
let autoclickCPS = 0;

clickerButton.addEventListener("click", () => {
    mena += morePerClick;
    document.getElementById("clicks").textContent = mena;
});

upgradeButton.addEventListener("click", () => {
    if (mena >= upgradeCost) {
        mena -= upgradeCost;
        morePerClick += 1;
        upgradeCost *= 2;
        document.getElementById("clicks").textContent = mena;
        document.getElementById("upgradeButton").textContent = `+${morePerClick} měny/klik (cena: ${upgradeCost})`;
    }
});

autoclickButton.addEventListener("click", () => {
    if (mena >= autoClickCost) {
        mena -= autoClickCost;
        autoclickCost = Math.floor(autoClickCost * 2.5);
        autoclickStrength += 1;
        autoclickCPS += 1;
        document.getElementById("clicks").textContent = mena;
        document.getElementById("autoclickButton").textContent = `autoclicker (cena: ${autoclickCost}) (+${autoclickStrength} měny, +${autoclickCPS} cps)`;
    }
});

function autoClick() {
    if (autoclickCPS > 0) {
        mena += autoclickStrength;
        document.getElementById("clicks").textContent = mena;
    }

    setTimeout(autoClick, autoclickCPS > 0 ? 1000 / autoclickCPS : 100);
}

autoClick();