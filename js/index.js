
let tbody = document.querySelector("tbody");

let url = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees";


let employee = []

async function getdata(url){
    let res = await fetch(url);
    let data = await res.json();

    console.log(data);
    employee.push(data)

    displayData(data.data);
}

console.log(employee)
getdata(url);

function displayData(arr){
    tbody.innerHTML = "";
    arr.forEach((ele,i) => {
     let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = ele.id;

    let td2 = document.createElement("td");
    td2.innerText = ele.name;

    let td3 = document.createElement("td");
    td3.innerText = ele.gender;

    let td4 = document.createElement("td");
    td4.innerText =ele.department;

    let td5 = document.createElement("td");
    td5.innerText = ele.salary;

    tr.append(td1,td2,td3,td4,td5);

    tbody.append(tr);
    });
}

let filter = document.getElementById("filter");

filter.addEventListener("change",(event)=>{
    let selectedoption = event.target.value;
    console.log(selectedoption);
    let data1 = []
    employee.forEach((ele)=>{
        let data = ele.data;
         data.filter((ele,i)=>{
            if(ele.department===selectedoption){
                data1.push(ele);
            }
        })
        console.log(data1)
    displayData(data1);
    })
    
})

let filtergender = document.getElementById("filtergender");

filtergender.addEventListener("change",(event)=>{
    let selectedoption = event.target.value;
    console.log(selectedoption);
    let data1 = []
    employee.forEach((ele)=>{
        let data = ele.data;
         data.filter((ele,i)=>{
            if(ele.gender===selectedoption){
                data1.push(ele);
            }
        })
        console.log(data1)
    displayData(data1);
    })
    
})





