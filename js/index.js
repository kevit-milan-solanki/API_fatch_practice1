const   API_url ="https://reqres.in/api/users?page=1&&per_page=15";
const fetchPromise = fetch(API_url);
fetchPromise.then(response => {
    return response.json();
}).then(people => {
    let contect = (people.data);
    let table = document.getElementById('myTable')
    for (let i = 0; i < contect.length; i++) {
        let row = `<tr style="">
                            <td ><img src=${contect[i].avatar} height=50 width=50 ></img></td>
							<td>${contect[i].first_name}</td>
							<td>${contect[i].last_name}</td>
							<td>${contect[i].email}</td>
							
					  </tr>`
        table.innerHTML += row
    }
});









