//facebook
const gotoubunnohanayome = document.getElementById("contact-info");
let fbcount = Math.floor(Math.random()*150);

for(let i = 0; i < fbcount; i++){
    let f = document.createElement("img");
    f.src = "../images/facebook.png";
    f.alt = "facebook" + (i+1);
    f.width = 30;

    let s = document.createElement("strong");
    s.textContent = " Facebook oddělení " + (i+1) + ": ";

    let a = document.createElement("a");
    a.textContent = "rksnecek" + (i+1);

    let e = document.createElement("p");
    e.appendChild(f);
    e.appendChild(s);
    e.appendChild(a);
    gotoubunnohanayome.insertBefore(e, document.getElementById("insta"));
}

//export (od chati-chan aka chat g p t aka IAčko)
document.getElementById("export-contacts").addEventListener("click", () => {
    const contacts = [...document.querySelectorAll("#contact-info p:not(#self-contact)")]
        .map(p => {
            const clone = p.cloneNode(true);
            clone.querySelectorAll("img").forEach(img => img.remove());
            return clone.innerText.trim().replace(/\s+/g, " ");
        })
        .filter(Boolean);

    const text = contacts.join("\r\n");

    const link = document.createElement("a");
    link.href = "data:text/plain;charset=utf-8," + encodeURIComponent(text);
    link.download = "kontakty.snek";
    link.click();
});

//ip
function getIP(json) {document.getElementById("ip").textContent = json.ip;}

//kamera (taky od chati-chan)
document.addEventListener("DOMContentLoaded", async () => {
    const contact = document.getElementById("self-contact");
    const video = document.getElementById("self-camera");

    if (!contact || !video) return;
    if (!navigator.mediaDevices?.getUserMedia) return;

    let stream;
    try {
        stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        });

        video.srcObject = stream;
        await video.play();

        contact.style.display = "";
    } catch (error) {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
        }

        video.srcObject = null;
        contact.style.display = "none";
    }
});

//prompt na polohu jen tak pro prdel
document.addEventListener("DOMContentLoaded", () => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
        () => {},
        () => {},
    );
});