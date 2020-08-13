console.log("Hello");
var addbookname = document.getElementById('addbookname');
var addauthor = document.getElementById('addauthor');
var addBtn = document.getElementById('addBtn');
let note = document.getElementById('note');
let count=1;
showlibrary();
addBtn.addEventListener('click',addbook);
function addbook()
{
    let authorname=addauthor.value;
    let bookname=addbookname.value;
    let storageauthorname=localStorage.getItem('AuthorName');
    let storagebookname=localStorage.getItem('BookName');
    if(storageauthorname!=null)
    {
        booknames=JSON.parse(storagebookname);
        authornames=JSON.parse(storageauthorname);
    }
    else{
        booknames=[];
        authornames=[];
    }
    booknames.push(bookname);
    authornames.push(authorname);
    localStorage.setItem('AuthorName',JSON.stringify(authornames));
    localStorage.setItem('BookName',JSON.stringify(booknames));
    addauthor.value="";
    addbookname.value="";
    showlibrary();
}
function showlibrary()
{
    let textobj='';
    let storageauthorname=localStorage.getItem('AuthorName');
    let storagebookname=localStorage.getItem('BookName');
    if(storageauthorname!=null)
    {
        booknames=JSON.parse(storagebookname);
        authornames=JSON.parse(storageauthorname);
    }
    else{
        booknames=[];
        authornames=[];
    }
    booknames.forEach((element,index) => {
        textobj +=`<tr class="booknametr">
        <th scope="row">${index+1}</th>
        <td>${authornames[index]}</td>
        <td id="booknamevalue">${element}</td>
        <td><button type="button" class="btn btn-primary" id="${index}" onclick="deletebtn(this.id)">Delete</button></td>
        </tr>`;
    });
    console.log(booknames);
    
    if(booknames.length !=0)
    note.innerHTML=textobj;
    else
    note.innerHTML=`<tr>
    <th scope="row">No data Available</th>
    </tr>`;
}
function deletebtn(index)
{
    let storageauthorname=localStorage.getItem('AuthorName');
    let storagebookname=localStorage.getItem('BookName');
    if(storageauthorname!=null)
    {
        booknames=JSON.parse(storagebookname);
        authornames=JSON.parse(storageauthorname);
    }
    else{
        booknames=[];
        authornames=[];
    }
    booknames.splice(index,1);
    authornames.splice(index,1);
    localStorage.setItem('AuthorName',JSON.stringify(authornames));
    localStorage.setItem('BookName',JSON.stringify(booknames));
    showlibrary();
}
let search=document.getElementById('searchid')
search.addEventListener('input',()=>
{
    let searchvalue=search.value;
    let booknamelist=document.querySelectorAll('#booknamevalue');
    let booknametr=document.querySelectorAll('.booknametr');
    Array.from(booknamelist).forEach((element,index)=>
    { let x=booknamelist[index].innerHTML;
       if(x.includes(searchvalue))
       {
           booknametr[index].display="block";
           
        }
        else{
            booknametr[index].display="none";
       }
       
    })

});