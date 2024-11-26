const count_elm = document.getElementById('count-el');
const add_btn = document.getElementById('add-bt');
const save_btn = document.getElementById('save-bt');
const textCol = document.getElementById('data-col');
const noData = document.getElementById('no-data');

let count = 0;
add_btn.addEventListener('click',function()
{
    count++;
    count_elm.textContent = count;
})

let stationCount = 0;
save_btn.addEventListener('click',function()
{
    if(count !== 0){
        if (noData) {
            noData.remove();
        }
        let dispText = `<p>Passengers Entered in Station_${++stationCount} is ${count}<p>`;
        textCol.innerHTML+=dispText;
        count = 0;
        count_elm.textContent = count;
    }
})