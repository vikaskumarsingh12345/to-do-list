let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  event.preventDefault();
  let text = document.getElementById("input").value;
  if(text.trim()!=""){
    db.collection("todo-items").add({
      Text:text
    })
  }
});
let inpf = document.getElementById("input")
inpf.addEventListener("keypress", (event) => {
  if(event.key=="Enter"){
    btn.click();
}
});
  
function getItems(){
  db.collection("todo-items").onSnapshot((snapshot) => {
    let items = [];
    snapshot.docs.forEach((doc) => {
      if(doc.data().Text!="")
        items.push(doc.data())  
    })
    generateItem(items);
  })
}
function generateItem(items){
  let output = document.getElementById("output");
  output.innerHTML="";
  items.forEach((text)=> {
    let h4 = document.createElement("h4");
    let btn = document.createElement("button");
    let childp = document.createElement("p");
    childp.setAttribute("class", "p");
    childp.innerHTML = text.Text;
    btn.innerHTML = "remove";
    h4.setAttribute("class", "h4");
    h4.append(childp);
    h4.append(btn);
    btn.setAttribute("class", "btn1");
    output.append(h4);
            btn.addEventListener("click", () => {
              a(text.Text).then((dc)=>{
                db.collection("todo-items").doc(dc.docs[0].id).delete().then(()=>{
                  console.log();
                });
              });
              });
    })
}
async function a(text){
  let a=await db.collection("todo-items").where('Text',"==",text).get()
  return a
}
getItems();























// let btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//     event.preventDefault();
//     let text = document.getElementById("input").value;
    
//     db.collection("todo-items").add({
//         Text:text
//     })
//     btn.addEventListener("click", () => {
//         h4.outerHTML = "";
//         event.preventDefault();
//     });
//     event.preventDefault();
//     getItems();
//       });
      
//       function getItems(){
//         db.collection("todo-items").onSnapshot((snapshot) => {
//             let items = [];
//             snapshot.docs.forEach((doc) => {
//                 items.push(doc.data())  
//             })
//             console.log(items);
//             generateItem(items);
//         })
//       }
//       function generateItem(items){
//         items.forEach((text)=> {
//         let output = document.getElementById("output");
//         let h4 = document.createElement("h4");
//         let btn = document.createElement("button");
//         let childp = document.createElement("p");
//         childp.setAttribute("class", "p");
//         childp.innerHTML = text.Text;
//         btn.innerHTML = "remove";
//         h4.setAttribute("class", "h4");
//         h4.append(childp);
//         h4.append(btn);
//         btn.setAttribute("class", "btn1");
//         output.append(h4);
//         console.log(text)
//         // btn.addEventListener("click", () => {
//         //   h4.outerHTML = "";
//         //   event.preventDefault();
//         // });
//         // event.preventDefault();
//     })
//       }