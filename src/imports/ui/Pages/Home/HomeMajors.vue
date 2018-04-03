<template>
  <div>
    <div class="container justify-content-center align-content-center text-center text-blue">
    <div class="row offset-top">
      <div class="col-12">
         <div> <img src="graduation.png" width="96px" height="96px"/> </div>
        <p><strong>InternClue Majors </strong></p>
      </div>
    </div>
    </div>


<div class="container container-fluid justify-content-center align-content-center text-center margin-bottom:15px">
    <div class="row offset-top">
        <div class="column">   
        <div><img src="accounting.png" width="96px" height="100px"/></div>
        <div><img src="architect.png" width="96px" height="100px"/></div>
        <div><img src="art.png" width="96px" height="96px" /></div>
        <div><img src="Biomedical-Engineering.png" width="96px" height="100px" /></div>
        </div>
    
    <div class="column">    
        <div><img src="comsci.png" width="96px" height="100px"/></div>
        <div><img src="economics.png" width="96px" height="100px"/></div>
        <div><img src="electronic_brain.png" width="96px" height="100px" /></div>
        <div><img src="environmental-icon.png" width="96px" height="100px"/></div>
        </div>

  <div class="column">   
        <div><img src="finance.png" width="96px" height="100px"/></div>
        <div><img src="law.png" width="96px" height="100px"/></div>
        <div><img src="math.png" width="96px" height="100px"/></div>
        <div><img src="music.png" width="96px" height="100px"/></div>
       </div>

     <div class="column">      
        <div><img src="non-profit.png" width="96px" height="100px" /></div>
        <div><img src="political science.png" width="96px" height="100px"/></div>
        <div><img src="Psychology.png" width="96px" height="100px" /></div>
        <div><img src="public affairs.png" width="96px" height="100px"/></div>
        </div>
      </div>  
    </div>
  </div>
</template>

<style lang="scss" scoped>

.offset-top {
  display: flex;
  flex-wrap: wrap;
  padding: 0 3px;
  margin-bottom: 60px;
}
.column{
flex: 25%;
padding: 0 3px;
 
  }
.column img {
  margin-top: 12px;
  vertical-align: middle;
  
}

.jumbotron {
  background-color: #4daaf6;
  font-size: 12px;
  text-align: left;
  height: 200px;
  padding: 30px;
  font-family: 'Times New Roman', Times, serif;
  align-content: right;
  margin-bottom: 30px;
}

</style>

<script>
export default {
  name: "HomeMajors"
};
</script>