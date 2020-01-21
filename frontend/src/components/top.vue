<template>
  <div class="jumbotron">
    <h1 class="display-3">Portforio</h1>
    <p class="lead">Web Enginner/Atsushi Aizawa</p>
    <a class="btn btn-primary btn-lg" href="#profile" role="button">
      <router-link class="me" to="/profile">Who's Me?</router-link>
    </a>
  </div>
</template>
<style scoped>
.jumbotron {
  background-image: url("background5.jpg");
  background-size: cover;
  background-position: center 100%;
  position: relative;
  height: 100vh;
  min-height: 300px;
}
.display-3{
  position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -100%);
  color: #FFFFFF;
  font-size: 120px;
}
.lead{
  position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, 5%);
  color: #FFFFFF;
  font-size: 40px;
}
.btn-lg{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 150%);
}
.me{
  color: #FFFFFF;
}
</style>
