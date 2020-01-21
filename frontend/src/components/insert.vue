<template>
<div>
<h1 class="projects-title">Project Insert</h1>

<form>
  <div class="form-group1">
    <label for="formGroupExampleInput" class="test">プロジェクト名</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="プロジェクト名">
  </div>
  <div class="form-group2">
    <label for="formGroupExampleInput2" class="test">説明</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="説明">
  </div>
  <div class="file">
    <input type="file" class="form-control-file" id="exampleFormControlFile1">
  </div>
</form>

<a class="btn btn-primary btn-lg" href="#/projects" role="button">
  <router-link class="me" to="/projects">projects</router-link>
</a>
</div>

</template>

<style>
.form-group1{
  width: 500px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 150%);
  font-size: 50px;
  font-weight: bold;
}
.form-group2{
  width: 500px;
  position: absolute;
  left: 50%;
  transform: translate(-50%,250%);
  font-size: 50px;
  font-weight: bold;
}
.file{
  position: absolute;
  left: 50%;
  transform: translate(-50%,1300%);
  font-size: 20px;
  font-weight: bold;
}
.test{
  font-size: 20px;
}
.projects-title{
  position: absolute;
  left: 50%;
  transform: translate(-50%, 150%);
  font-size: 50px;
  font-weight: bold;
}
.me{
  color: #FFFFFF;
}


</style>