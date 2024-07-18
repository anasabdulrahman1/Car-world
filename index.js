
function addcar(){
    vehicle ={
        cbrand:brand.value,
        cprice:price.value,
        ckey:keys.value,
    }

    if (vehicle.cbrand=="" || vehicle.cprice=="" || vehicle.ckey==""  ){
        alert("please fill missing fields")
    }
    else{
        if(vehicle.ckey in localStorage){
            alert("car already exist")
        }else{
            localStorage.setItem(vehicle.ckey,JSON.stringify(vehicle))
            alert("car added successfully")
        }
    }
}
function retrieve() {
    let key = document.getElementById('car').value;
    let vehicle = JSON.parse(localStorage.getItem(key));

    if (vehicle) {
        document.getElementById('results').innerHTML = `
        <div class="card" style="width: 100%;">
            <div class="card-header text-center">
                Details
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Brand: ${vehicle.cbrand}</li>
                <li class="list-group-item">Price: ${vehicle.cprice}</li>
            </ul>
        </div>`;
    } else {
        alert("Car not found");
    }
}
function remove(){
    let key = document.getElementById('keyremove').value
    localStorage.removeItem(key)
    alert("car removed successfully")
}
function clearStorage(){
localStorage.clear();
alert("All records are cleared")
}