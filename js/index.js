const apiUrl = "https://reqres.in/api/users?page=1&&per_page=15";
const fetchPromise = fetch(apiUrl);
fetchPromise.then(response => {
    return response.json();
}).then(peopleContactInformation => {
    contacts(peopleContactInformation);
});

function contacts(peopleInformation) {
    let peopleContact = (peopleInformation.data);
    let peopleInformationTable = document.getElementById('contactInformation')
    for (let i = 0; i < peopleContact.length; i++) {
        let contactInformationRow = document.createElement("tr");

        let contactAvtar = document.createElement("td");
        let avtarImage = document.createElement("img");
        avtarImage.src = peopleContact[i].avatar;
        contactAvtar.classList.add("contactTable_body_image")

        let contactFirstname = document.createElement("td");
        let firstName = document.createTextNode(peopleContact[i].first_name);
        let contactLastName = document.createElement("td");
        let lastName = document.createTextNode(peopleContact[i].last_name);

        contactInformationRow.appendChild(contactAvtar);
        contactAvtar.appendChild(avtarImage);

        contactInformationRow.appendChild(contactFirstname);
        contactFirstname.appendChild(firstName);

        contactInformationRow.appendChild(contactLastName);
        contactLastName.appendChild(lastName);

        peopleInformationTable.appendChild(contactInformationRow);

    }
}