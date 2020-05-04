<template>
  <div class="plan-wrapper">
    <h1 class="header">Pricing</h1>
    <h4 class="sub-header">Signup today! Upgrade or cancel anytime, no questions asked</h4>
    <div class="pricing-container">
        <div class="pricing" @click="subscribe = 1" :class="{'active': subscribe == 1}">
            <div class="title">Bronze</div>
            <div class="cost">
              <span>$</span>
              <div class="fig">29</div>
              <span>/mo</span>
            </div>
            <div class="features">
              <ul>
                <li><span class="fas fa-check icon"></span>  Lorem ipsum dolor sit amet conse.</li>
                <li><span class="fas fa-check icon"></span> Lorem ipsum dolor sit amet.</li>
                <li><span class="fas fa-check icon"></span> Lorem ipsum amet sit conse.</li>
              </ul>
            </div>
            <div class="button" @click="send">Subscribe</div>
        </div>
        <div class="pricing" @click="subscribe = 2" :class="{'active': subscribe == 2}">
          <div class="banner">Most Popular</div>
            <div class="title">Silver</div>
            <div class="cost">
              <span>$</span>
              <div class="fig">49</div>
              <span>/mo</span>
            </div>
            <div class="features">
              <ul>
                <li><span class="fas fa-check icon"></span>  Lorem ipsum dolor sit amet conse.</li>
                <li><span class="fas fa-check icon"></span> Lorem ipsum dolor sit amet.</li>
                <li><span class="fas fa-check icon"></span> Lorem ipsum amet sit conse.</li>
              </ul>
            </div>
            <div class="button" @click="send">Subscribe</div>
        </div>
        <div class="pricing" @click="subscribe = 3" :class="{'active': subscribe == 3}">
            <div class="title">Gold</div>
            <div class="cost">
              <span>$</span>
              <div class="fig">99</div>
              <span>/mo</span>
            </div>
            <div class="features">
              <ul>
                <li><span class="fas fa-check icon"></span>  Lorem ipsum dolor sit amet conse.</li>
                <li><span class="fas fa-check icon"></span> Lorem ipsum dolor sit amet.</li>
                <li><span class="fas fa-check icon"></span> Lorem ipsum amet sit conse.</li>
              </ul>
            </div>
            <div class="button" @click="send">Subscribe</div>
        </div>
        <div></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data(){
      return {
        subscribe: 2
      }
    },
    methods: {
      send(){
        this.$router.push({name: 'success'})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .plan-wrapper{
    padding: 20px;
    box-sizing: border-box;
    background-color: rgb(248, 255, 255);
    // height: 100vh;
    width: 100vw;
  }
  .header{
    margin-top: 60px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .sub-header{
    margin-top: 0;
    color: rgb(148, 161, 173);
    font-weight: normal;
    font-size: 1em;
    margin-bottom: 50px;
  }
  .pricing-container{
    padding-bottom: 50px;
    width: 1200px;
    background-color: transparent;
    // height: 100px;
    margin: 0 auto;
    .pricing{
      background-color: white;
      display: inline-block;
      padding: 20px;
      margin-left: 10px;
      width: 300px;
      min-height: 200px;
      box-shadow:-2px -5px 11px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
      &.active{
        border: 2px solid #45a5f3;
        border-radius: 3px;
        .button{
          background-color: #2196f3;
          color: white;
        }
      }
      .title{
        font-weight: bold;
        color: rgb(34, 43, 82)
      }
      .cost{
        color: slategray;
        margin-top: 40px;
        .fig{
          font-size: 3em;
          display: inline-block;
          color: rgb(34, 43, 82);
          margin-left: 5px;
        }
      }
      .features{
        margin-top: 50px;
        margin-bottom: 50px;
        color: slategray;
        ul{
          padding: 0;
          li{
            font-size: .95em;
            list-style: none;
            padding: 0;
            text-align: left;
            margin-top: 15px;
          }
          .icon{
            color: #2196f3;
            margin-right: 10px;
          }
        }
      }
      .button{
        border: 2px solid #2196f3;
        width: 150px;
        color: #2196f3;
        text-transform: uppercase;
        font-size: .9em;
        margin:0 auto;
        padding: 10px 17px;
        border-radius: 3px;
        cursor: pointer;
      }
    }
    .banner{
      background-color: orangered;
      text-transform: uppercase;
      color: white;
      font-size: .8em;
      width: 120px;
      padding: 7px 10px;
      transform: rotateZ(-5deg);
      margin: 20px 0;
    }
  }
</style>
