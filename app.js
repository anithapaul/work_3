const Express=require('express');
var app=new Express();
app.set('view engine','ejs');

author=
[
    {
    name:'Benyamin',
    im: '/image/a.jpg',
    DOB:'4-04-1988',
    place:'kerala'
},
{
    name:'O.V. Vijayan',
    im:"/image/b.jpg",
    DOB:'7-08-1978',
    place:'kerala'
},
{
    name:'Sara Joseph',
    im:"/image/c.jpg",
    DOB:'14-09-1965',
    place:'kerala'
},
{
    name:'Vaikom Muhammad Basheer',
    im:"/image/d.jpg",
    DOB:'11-09-1890',
    place:'europe'
},
{
    name:'Paulo Coelho',
    im:"/image/f.jpg",
    DOB:'15-03-1971',
    place:'england'
},

{
    name:'Robin Sharma',
    im:"/image/h.jpg",
    DOB:'30-09-1870',
    place:'america'
},
{
    name:"Joseph Murphy",
    im:"/image/i.jpg",
    DOB:'16-12-1981',
    place:'america'
  
    
   
}
]



nav=[
{
    
        link:"/author",
        title:"author"
}
];
app.use(Express.static(__dirname+"/public"));
app.get('/',(req,res)=>{
    res.render('b2');
});
app.get('/home',(req,res)=>{

    res.render('b2');
});
app.get('/home/login',(req,res)=>{
   
    res.render('b1');
});
app.get('/home/register',(req,res)=>{
    res.render('b3');
});
app.get('/home/add',(req,res)=>{
    
    res.render('add');
});

app.get('/author',(req,res)=>{
    res.render('author',{nav:nav,title:"Author",author:author});
});
app.get('/more/:id',(req,res)=>{

    const y=req.params.id;
    res.render('more',{nav:nav,title:"Author","author":author[y]});
});
app.listen(process.env.PORT || 3000,()=>{
    console.log("server is running ")
    });