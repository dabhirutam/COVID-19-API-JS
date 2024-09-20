let viewState = document.getElementById('viewState');
let viewRecord = document.getElementById('viewRecord');

states();
async function states() {
    let respone = await fetch('https://api.rootnet.in/covid19-in/stats/latest');
    let rec = await respone.json();

    rec.data.regional.forEach(data => {
        viewState.innerHTML += `<div class="col-xl-4 col-lg-6 mt-3">
                                    <div onclick="return viewRec('${data.loc}')" data-bs-toggle="modal" data-bs-target="#stateDtl" class="locBtn p-2 border-start border-end border-3 rounded-3 shadow bg-danger text-warning">
                                        <span>${data.loc}</span>
                                    </div>
                                </div>`;
    });
}
async function viewRec (name) {
    let respone = await fetch('https://api.rootnet.in/covid19-in/stats/latest');
    let rec = await respone.json();

    rec.data.regional.forEach(data => {
        if(name === data.loc){
            viewRecord.innerHTML = `<tr>
                                        <td>${data.loc}</td>
                                        <td>${data.confirmedCasesIndian}</td>
                                        <td>${data.discharged}</td>
                                        <td>${data.deaths}</td>
                                        <td>${data.totalConfirmed}</td>
                                     </tr>`;
        }
    });
    
};