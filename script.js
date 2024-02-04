document.querySelector("#getInformation").addEventListener("click",loadInformation);

function loadInformation(){
    const xhr = new XMLHttpRequest();
    xhr.open('GEt','information.json',true);
    xhr.onload = function(){
        let info = JSON.parse(this.responseText);
        let html = 
        `<tr>
            <td>${info.firstName}</td>
            <td>${info.lastName}</td>
            <td>${info.age}</td>
        </tr>`;
        document.querySelector("#table").innerHTML = html;
    }
    xhr.send();
}

document.querySelector("#getInformations").addEventListener("click",loadInformations);

function loadInformations(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','information.json',true);
    xhr.onload = function(){
        let info = JSON.parse(this.responseText);
        let html = "";

        info.forEach(element => {
        html += `<tr>
            <td>${element.firstName}</td>
            <td>${element.lastName}</td>
            <td>${element.age}</td>
        </tr>`;
        });
        document.querySelector('#table').innerHTML = html;
    } 
    xhr.send();
}

