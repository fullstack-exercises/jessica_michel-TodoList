import { getData } from './api-client.js';

const container = document.querySelector('.container');
const toDoList = document.querySelector('.todo-list');

// Get data from another file
const loadData = async() => {
    let data = await getData();
    const getTodo = data.map(item => {
        const todo = item.description;
        console.log(todo);
    });
}
loadData();
// const getTodos = async() => {

// }
// getTodos();


// Requirements:
// Als gebruiker wil ik een inputveld zien waarin ik mijn taak in kan vullen.
// Als gebruiker kan ik op een button drukken met de tekst "Add Task" waardoor je ingevulde taak toegevoegd wordt aan de lijst.
// Als gebruiker zie ik wanneer ik op de add button knop heb geklikt, de taak verschijnen in mijn takenlijst.
// Taak verwijderen: Als gebruiker kan ik in de takenlijst op een icoontje klikken van een prullenbak, rechts naast de taak, waardoor de taak uit mijn takenlijst wordt verwijderd.

// API requirements:
// GET: Verkrijg de (initiële) lijst met taken van de database.
// POST: Update de takenlijst met 1 nieuwe taak. Stuur alleen {description: "blah", done: false} 
// DELETE: Verwijder een taak uit de database. Gebruik de id die je terugkrijgt als identifier.
// Maak een file genaamd api-client.js zoals je hebt geleerd in de afgelopen tijd voor al je requests.

// Extra requirements:
// Taak doorstrepen: Als gebruiker kan ik in de takenlijst op een checkbox klikken, links naast de taak, waardoor de tekst van de taak doorgestreept wordt en ik mijn taak kan afstrepen.
// Als gebruiker wil ik op mijn taak kunnen klikken en de tekst kunnen aanpassen.
// Extra API requirements (die samenhangt met het bovenstaande):
// PUT: update een bestaande taak de property done of niet done.
// PUT: update en bestaande taak met de PUT method.

// Tips
// In dit project ga je event listeners toevoegen aan HTML-elementen die door Javascript worden toegevoegd. Als je de event listener wilt koppelen vóórdat het element is toegevoegd gaat dit mis. Hiervoor is een andere aanpak vereist! Zorg dat je je event listeners pas op het laatst toekent, óf doe dit: https://stackoverflow.com/questions/34896106/attach-event-to-dynamic-elements-in-javascript
// Voor het aanroepen van de API van JSONBox heb je geen scripts, geen authenticatie en niets extra's nodig. fetch is your friend!
// fetch kan meer dingen dan alleen data ophalen; het kan ook data versturen en updaten. Check deze documentatie hoe dat moet: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// Een methode als getElementsByClassName geeft een HtmlCollection terug. Dit lijkt in je console op een array, maar dat is het niet! Je kan dit omzetten naar een array om daar vervolgens overheen te loopen.