document.getElementById("get-activity").addEventListener("click", event => {
    fetchRandomActivity(onFetchSuccess, onFetchError);
});

function fetchRandomActivity(onSuccess, onError) {
    fetch("http://localhost:8081/activities/random")
        .then(response => response.json())
        .then(activity => {
            onSuccess(activity);
        })
        .catch(error => {
            onError()
        });
}

function onFetchSuccess(activity) {
    const activityForTodayElement = document.getElementById("activity-header");
    activityForTodayElement.innerHTML = "Twoje dzisiejsze zadanie";

    const activityNameElement = document.getElementById("activity-name");
    activityNameElement.innerHTML = activity.name;
    
    const activityDescriptionElement = document.getElementById("activity-description");
    activityDescriptionElement.innerHTML = activity.description;
    
    const container = document.getElementById("activity-container");
    container.classList.remove("hidden");
}

function onFetchError() {
    const activityForTodayElement = document.getElementById("activity-header");
    activityForTodayElement.innerHTML = "Nastąpiła awaria 😵, dzisiaj masz wolne";

    const container = document.getElementById("activity-container");
    container.classList.add("hidden");

    Array.from(container.children).forEach(element => {
        element.innerHTML = "";
    });
}