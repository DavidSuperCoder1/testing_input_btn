
              function insert_Row(){
                let i= document.querySelector("#myTable").rows.length;
                i++;
            
                    let tr=document.createElement('tr');
                    let td=document.createElement('td');
                    let td1=document.createElement('td');
                      
                    let txt1=document.createTextNode(`Row${i} Cell${i} `);
                    let txt2=document.createTextNode(`Row${i} Cell${i} `);
                    
                    td.appendChild (txt1);
                    tr.appendChild (td);
                      
                    td1.appendChild (txt2);
                    tr.appendChild (td1);
                      
                    let newR=document.querySelector("#myTable");
                    newR.appendChild(tr);  
                    document.querySelector('#change_content').style.display ="inline-block";
                }

              function changeContent(){
                /* ဒီနှစ်ကြောင်းကို ဒီ function ထဲထည့်မှာသာ အသစ်ခေါ်တဲ့ row တွေကို changeContent() function
                ခေါ်တဲ့ခါ edit button ထည့်ပေးမှာဖြစ်တယ်*/
                let tble = document.querySelector("#myTable");
                let cells = tble.querySelectorAll('td');

                /*Adding  edit button for all cells*/
                    for(let i =0; i<cells.length; i++){  
                      if(!cells[i].querySelector("button")){
                          let bt = document.createElement('button');
                          bt.innerHTML ='edit';
                          bt.setAttribute("td_id", i);//ညီမျှခြင်းမပါမှ အလုပ်လုပ်မယ်။ 

                     /*Adding existing text to input and remove the text*/
                          bt.addEventListener('click', function() {
                            bt.innerHTML="";
                            if(!cells[i].querySelector("input")){
                              let input = document.createElement('input');
                              input.setAttribute('type', 'text');
                              let text =cells[i].textContent;
            
                              input.value= text;      //adding existing text to input as input value
                              cells[i].innerHTML="";  // removing the existing text
                              cells[i].appendChild(input);
                            }
                           
                          });
                        
                          cells[i].appendChild(bt);  // adding edit button to all cells
                    }
                    cells[i].querySelector('button').style.display="inline-block";
                } 
                document.querySelector('#save_me').style.display ="inline-block";
                document.querySelector('#change_content').style.display ="none";
                document.querySelector('#insert_now').style.display ="none";
              }


              /* အရင် ဖျောက်ထားခြင်း */ 
              document.querySelector('#save_me').style.display ="none";
              function save(){
                let tble = document.querySelector("#myTable");
                let cells = tble.querySelectorAll('td');
                
                /*changing new Input Value to new textContent after press save*/

                for(let i =0; i<cells.length; i++){
                  if(cells[i].querySelector("input")){
                    let val = document.querySelector("input");
                     cells[i].textContent = val.value+" ";  //for space

                  }
                }

                /*After press save, no display all edit buttons*/

                let btn_list = document.querySelectorAll('button');
                for (const i of btn_list) {
                   i.style.display = 'none';
                }

                document.querySelector('#save_me').style.display ="none";
                document.querySelector('#insert_now').style.display ="none";
                document.querySelector('#insert_now').style.display ="inline-block";
                document.querySelector('#change_content').style.display ="inline-block";
              }
         

       
              