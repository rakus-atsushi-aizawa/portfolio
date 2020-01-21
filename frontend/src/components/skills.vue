<template>
<div>
<h1 class="skills-title">My Skills</h1>

<div class="card-columns">
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">Java</h4>
      <h6 class="card-subtitle mb-2 text-muted">SpringBoot Eclipse InteliJ</h6>
      <hr>
      <p class="card-text">
      ECサイトの開発、大規模データを扱う検索サイトの開発を行いました。
      </p>
    </div>
  </div>

  <div class="card">
    <div class="card-body">
      <h4 class="card-title">JavaScript</h4>
      <h6 class="card-subtitle mb-2 text-muted">Vue.js jQuery</h6>
      <hr>
      <p class="card-text">
      ECサイトでjQueryを使った非同期処理の実装、このPortfolio作成。
      </p>
    </div>
  </div>

  <div class="card">
    <div class="card-body">
      <h4 class="card-title">CSS</h4>
      <h6 class="card-subtitle mb-2 text-muted">Bootstrap4</h6>
      <hr>
      <p class="card-text">
      ECサイトのデザインを整える、このPortfolioでBootstrap4使用。
      </p>
    </div>
  </div>

  <div class="card">
    <div class="card-body">
      <h4 class="card-title">HTML</h4>
      <h6 class="card-subtitle mb-2 text-muted"></h6>
      <hr>
      <p class="card-text">
      ECサイトの開発、大規模データ開発でのコーディング経験有り。
      </p>
    </div>
  </div>

  <div class="card">
    <div class="card-body">
      <h4 class="card-title">postgrSQL</h4>
      <h6 class="card-subtitle mb-2 text-muted">ターミナル DBeaver</h6>
      <hr>
      <p class="card-text">
      selectやinsertから内、外部結合までECサイト開発、大規模データ開発で使用しました。
      </p>
    </div>
  </div>

  <div class="card">
    <div class="card-body">
      <h4 class="card-title">C#</h4>
      <h6 class="card-subtitle mb-2 text-muted">Unity</h6>
      <hr>
      <p class="card-text">
      2Dゲームプロジェクトの設計から開発まで行いました。
      </p>
    </div>
  </div>

</div>
<a class="btn btn-primary btn-lg" href="#/projects" role="button">
  <router-link class="me" to="/projects">projects</router-link>
</a>
</div>

</template>

<style>
.card-columns{
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -40%);
}
.skills-title{
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

</style>
