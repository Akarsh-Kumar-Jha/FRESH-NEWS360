function goweb(url) {
    window.location.href = url;
}
async function cateshow(cate){
    AddNews(cate);
}
var flag = 0;
var nav_popup = document.querySelector('.nav_popup');
var menuicn = document.querySelector('.menuicn');
menuicn.addEventListener("click",function(){
    console.log("menu")
    if(flag==0){
        nav_popup.style.opacity = '0.8';
        flag=1;
            }
            else{
                nav_popup.style.opacity = '0';
                flag=0;
            }
})




  async function AddNews(cate="India"){
    console.log(cate)
    var NewsShow = document.querySelector("#NewsShow");
    clutter = ""
    NewsShow.innerHTML = clutter;
    
  
const ApiUrl = await fetch(`https://newsapi.org/v2/everything?q=${cate}&from=2024-02-04&sortBy=publishedAt&apiKey=f4f8c24925224bce99d171ce04d2830c`)
const data = await ApiUrl.json();
console.log(data.articles.length);
if(!data.articles.length==0){
    
    var clutter = "";
    for(let i=0;i<100;i++){
    if(data.articles[i].title && data.articles[i].urlToImage){
        clutter += `<div class=" py-2 card flex-col justify-center items-center gap-6 h-auto w-[80%] md:w-[400px] md:h-[400px] bg-gradient-to-br from-blue-600 to-cyan-700 rounded-lg shadow-lg hover:translate-y-[-3px] duration-500 hover:shadow-xl cursor-pointer" onclick="goweb('${data.articles[i].url}')">
        <div class="card_img px-2 flex justify-center items-center">
            <img class=" rounded-lg h-[200px] w-[95%]" src="${data.articles[i].urlToImage}" alt="">
        </div>
        <div class="card_text text-wrap px-2 text-center font-sans font-semibold text-sm">
    <p>${data.articles[i].title}</p>
        </div>
    
        <div class="px-1 text-center mt-2" >
        <p class="text-[10px] text-gray-700" >${data.articles[i].description} </p>
        </div>
    </div>`
    }
    }
    NewsShow.innerHTML = clutter;
}
else{
    NewsShow.innerHTML = `<h1 class="text-red-800 text-center font-bold text-lg" >No Results Found!</h1>`;
}




  }
  AddNews();

//   var Card = document.querySelector(".card");
//   Card.addEventListener("click",function(){

//   })

var srch = document.querySelector('.srch');
var inpt = document.querySelector('.inpt');
var srchFlag=0;
srch.addEventListener("click",function(){
if(srchFlag==0){
    console.log("search");
    inpt.style.display = 'block';
    inpt.style.width = '100%';
    menuicn.style.display = 'none'
    srchFlag=1;
}
else{
    var val = inpt.value
    console.log(val)
   if(val){
    AddNews(val);
    menuicn.style.display = 'block'
    inpt.style.display = 'none';
    inpt.style.width = '0%';
    srchFlag=0;
   }
}
})