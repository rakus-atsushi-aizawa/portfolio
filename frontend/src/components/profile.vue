<template>
  <div>
    <h1 class="profile-title">自己紹介</h1>
    <div class="profile-image"></div>
    <img src="../assets/profile.png" class="img-profile" alt="Responsive image">
    <ul class="text-left">
      <li>名前：相澤 篤</li>
      <li>出身：群馬県（現在は東京在住）</li>
      <li>学歴：拓殖大学工学部</li>
      <li>活動：PC、携帯の販売ショップに営業として
        <span class="br">2年間働き、その後ラクスパートナーズで</span>
        <span class="br">webエンジニアとして入社。</span>
      </li>
      <li>その他：携帯やPCの相談にのるといまだに
        <span class="br">いつの間にか</span>
        <span class="br">店員になってしまいます。</span>
      </li>
    </ul>
    <a class="btn btn-primary btn-lg" href="#/skills" role="button">
      <router-link class="me" to="/skills">Skills</router-link>
    </a>
  </div>
</template>

<style scoped>
.profile-title{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -400%);
  font-size: 50px;
  font-weight: bold;
}
.img-profile{
  float: left;
  width: 300px;
  position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-120%, -40%);
}
.text-left{
  float: right;
  text-align: left!important;
  position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-5%, -40%);
  font-size: 23px;
}
.br::before {
	content: "\A" ;
	white-space: pre ;
}
.btn-lg{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 450%);
}
.me{
  color: #FFFFFF;
}
</style>
