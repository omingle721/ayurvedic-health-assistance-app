// Ayurvedic Health Assistance App Prototype

function showRemedy() {

    const symptoms = {
        headache: "Drink ginger tea and apply sandalwood paste on the forehead.",
        cold: "Drink warm turmeric milk and inhale steam with eucalyptus oil.",
        stomach: "Consume cumin water and eat light food like khichdi.",
        stress: "Practice deep breathing, yoga, and drink tulsi tea."
    };

    const input = document.getElementById("symptomInput").value.toLowerCase();

    const result = document.getElementById("result");

    if (symptoms[input]) {
        result.innerText = "Suggested Ayurvedic Remedy: " + symptoms[input];
    } else {
        result.innerText = "Sorry, remedy not found. Please consult an Ayurvedic practitioner.";
    }
}
