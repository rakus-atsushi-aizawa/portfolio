<template>
<div>
<h1 class="projects-title">My Projects</h1>

<div class="card-columns">
  <div class="card">
    <img class="card-img-top" src="../assets/pizza.png" alt="Card image cap">
    <div class="card-body"> ECサイト開発 </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="../assets/profile.png" alt="Card image cap">
    <div class="card-body"> Some more card content </div>
  </div>
  <a href="#/insert" class="btn btn-secondary bt-s" role="button" aria-pressed="true">
    <router-link class="insert" to="/insert">projects insert</router-link>
  </a>
</div>

<a class="btn btn-primary btn-lg" href="#/projects" role="button">
  <router-link class="me" to="/projects">projects</router-link>
</a>
</div>

</template>

<style>
.card-columns{
width: 80%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -40%);
}
.projects-title{
position: absolute;
left: 50%;
transform: translate(-50%, 150%);
font-size: 50px;
font-weight: bold;
}
.btn-lg{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 550%);
}
.me{
  color: #FFFFFF;
}
.card{
  border: 1px solid #ddd;
  margin: 0 auto;
  overflow: hidden;
  background: #000;
}
.card img{
width: 100%;
cursor: pointer;
transition-duration: 0.3s;
}
.card:hover img{
opacity: 0.6;
transition-duration: 0.3s;
}
.card-body{
background: #FFFFFF;
}
.bt-s{
  color: #FFFFFF;
}
.insert{
  color: #000000;
}

</style>
