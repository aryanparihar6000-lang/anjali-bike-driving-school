*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{

background:#f5f5f5;

}

header{

background:#111;

color:white;

display:flex;

justify-content:space-between;

align-items:center;

padding:20px 10%;

}

nav a{

color:white;

text-decoration:none;

margin-left:20px;

font-weight:bold;

}

.hero{

height:90vh;

display:flex;

justify-content:center;

align-items:center;

text-align:center;

background:linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url("https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1600&q=80");

background-size:cover;

background-position:center;

color:white;

}

.hero h1{

font-size:55px;

margin-bottom:20px;

}

.hero p{

font-size:22px;

margin-bottom:30px;

}

.btn{

display:inline-block;

background:red;

padding:15px 35px;

margin:10px;

color:white;

text-decoration:none;

border-radius:50px;

font-weight:bold;

}

.whatsapp{

background:#25D366;

}

.btn:hover{

opacity:.9;

}
.about{

padding:80px 10%;

text-align:center;

background:white;

}

.about h2{

font-size:40px;

margin-bottom:20px;

color:#d60000;

}

.about p{

font-size:18px;

line-height:1.8;

max-width:900px;

margin:auto;

}

.courses{

padding:80px 10%;

background:#f8f8f8;

text-align:center;

}

.course-box{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(250px,1fr));

gap:25px;

margin-top:40px;

}

.card{

background:white;

padding:30px;

border-radius:15px;

box-shadow:0 5px 15px rgba(0,0,0,.15);

transition:.3s;

}

.card:hover{

transform:translateY(-10px);

}

.card h3{

margin-bottom:15px;

color:#d60000;

}

.why{

padding:80px 10%;

text-align:center;

background:#111;

color:white;

}

.features{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(250px,1fr));

gap:20px;

margin-top:40px;

font-size:20px;

}
.stats{
padding:80px 10%;
text-align:center;
background:#ffffff;
}

.stats h2{
color:#d60000;
margin-bottom:40px;
font-size:40px;
}

.stats-box{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:25px;
}

.stat-card{
background:#111;
color:#fff;
padding:30px;
border-radius:15px;
}

.stat-card h3{
font-size:45px;
color:#ff3b3b;
}

.gallery{
padding:80px 10%;
background:#f7f7f7;
text-align:center;
}

.gallery h2{
font-size:40px;
margin-bottom:40px;
color:#d60000;
}

.gallery-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:20px;
}

.gallery-grid img{
width:100%;
height:250px;
object-fit:cover;
border-radius:15px;
transition:.3s;
}

.gallery-grid img:hover{
transform:scale(1.05);
}

.reviews{
padding:80px 10%;
text-align:center;
background:#111;
color:#fff;
}

.review-box{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:25px;
margin-top:40px;
}

.review-card{
background:#222;
padding:30px;
border-radius:15px;
}

.review-card h4{
margin-top:20px;
color:#ff4d4d;
}
.contact{
padding:80px 10%;
background:#fff;
}

.contact h2{
text-align:center;
font-size:40px;
color:#d60000;
margin-bottom:40px;
}

.contact-container{
display:grid;
grid-template-columns:1fr 1fr;
gap:40px;
}

.contact-info p{
margin:15px 0;
font-size:18px;
}

.contact-form input,
.contact-form textarea{
width:100%;
padding:15px;
margin-bottom:15px;
border:1px solid #ccc;
border-radius:8px;
}

.contact-form textarea{
height:120px;
resize:none;
}

.contact-form button{
border:none;
cursor:pointer;
}

footer{
background:#111;
color:#fff;
text-align:center;
padding:30px;
}

@media(max-width:768px){

.contact-container{
grid-template-columns:1fr;
}

.hero h1{
font-size:36px;
}

.hero p{
font-size:18px;
}

header{
flex-direction:column;
}

nav{
margin-top:15px;
}

nav a{
display:inline-block;
margin:10px;
}

}
