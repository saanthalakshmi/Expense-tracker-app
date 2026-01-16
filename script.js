let expenses=[]
document.getElementById("exp").addEventListener("submit", function(e){ 
    e.preventDefault()
    console.log("js is working");
    const name=document.getElementById("expensename").value;
    const amount=parseInt(document.getElementById("amount").value);
    const expen={name,amount};
    expenses.push(expen);
    updatelist();
    updatetotal();
    this.reset();
})
    function updatelist(){
        const list=document.getElementById("expenselist");
        list.innerHTML="";
        for(let i=0;i<expenses.length;i++){
            const li=document.createElement("li");
            li.textContent=expenses[i].name +":₹"+ expenses[i].amount;
        
        const del=document.createElement("button");
        del.textContent="delete";
        del.onclick=function(){
            expenses.splice(i,1);
            updatelist();
            updatetotal();
        }
            li.appendChild(del);
            list.appendChild(li);
    }
    }
    function updatetotal(){
        let total=0;
        for( let i=0;i<expenses.length;i++){
            total+=expenses[i].amount;
        }
        document.getElementById("Total").textContent="total:₹"+total;
    }


