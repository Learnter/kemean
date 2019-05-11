<template>
    <header id="headBox" class="HeadMobileMode " >
            <div class="suspension" @click="tabNav" >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div  class="pageCenter">
                <a  href="#/" class="logo"></a>
                <ul >
                    <li :class= "activated == item.name ? 'active': ''" v-for="(item,index) in navInfo" :key="index"  @click = "toggleNav(item),$router.push({path:item.path})" >
                        {{item.name}}
                    </li>
                </ul>
            </div>
        </header>
</template>
<script>
import {navInfo} from "@/assets/json/picktrue.js";
export default {
   name:"headerBox",
   data(){
       return{
           activated:'首页',
           toggle: false,
           navInfo:navInfo
       }
   },
   mounted() {
     this.refreshStorage();
     this.$nextTick(() => {
         window.onscroll = function() {
             var headerMain = document.getElementById("headBox");
             if (window.pageYOffset >= 70) {
                 headerMain.classList.add('headerMain-bg');;
             } else {
                 headerMain.classList.remove('headerMain-bg');
             }
         }
     })
   },
   methods:{
       tabNav() {
           if (!this.toggle) {
               $("#headBox").addClass("current");
           } else {
               $("#headBox").removeClass("current");
           }
           this.toggle = !this.toggle
       },
       toggleNav(item){
           if(item && item != "" && item.length != 0){
              //将导航切换状态值存储在sessionStorage中
              sessionStorage.setItem("tabName", item.name);

              this.selected = item.name;             
              this.tabNav();
           }           
       },
       refreshStorage(){
        //F5后刷新记住切换的导航状态
        var tabName = sessionStorage.getItem("tabName");
           if (tabName && tabName != "" && tabName.length != 0) {
               this.activated = tabName;
           }
       }
   }
}
</script>
<style lang="scss" scoped>

.logo{
    &::before{
        background-image: url("../../assets/img/logok.png");
    }
    &::after{
        background-image: url("../../assets/img/logoName.png");
    }
}

@media screen and (min-width:750px) {
      #headBox.headerMain-bg{
        background:black;
        opacity:0.8;
        color:white;
      }
      #headBox{
          position:fixed;
          left:0;
          top:0;
          right:0;
          z-index:11;
          color:white;
          .suspension{
            display: none;
          }
          .pageCenter{
                display: flex;
                align-items: center;
                justify-content:space-between;
                height: 4.75rem;
            .logo{
                    margin-left: 3vw;
                    width: 160px!important;
                    height: 44px!important;
                    background-image: url(https://qn.kemean.cn/upload/201809/06/logo_a.png);
                    background-repeat: no-repeat;
                    background-position: 50%;
                    background-size: 100% auto;
                    transition: all .6s;
                    -ms-flex-negative: 0;
                    flex-shrink: 0;

             }
             ul{
                 display:flex;
                 justify-content:space-between;
                 align-items:center;
                 margin-right:3vw;
                 li{
                        margin-left: 40px;
                        padding: 0 5px;
                        text-shadow: 0.5px 0.5px 0.5px #000;
                        font-size: 16px;
                        height: 4.75rem;
                        line-height: 4.75rem;
                        transition: all .6s;
                        cursor: pointer;
                        white-space: nowrap;
                 }
                 .active{
                        color:#5FC6FF;
                        border-bottom: 2px solid #5FC6FF;
                  }
              }
          }
     }
}

@media screen and (max-width:750px) {

    #headBox {
        position: fixed;
        left: 2.3vw;
        top: 2.3vw;
        z-index: 10;
        width: 40px;
        height: 40px;
        overflow: hidden;
        -webkit-transition: all 0.4s;
        transition: all 0.4s;

        .suspension {
            cursor: pointer;
            padding: 3px 5px;
            background-color: rgba(0, 0, 0, .1);
            border-radius: 3px;
            span {
                display: block;
                width: 28px;
                height: 3px;
                border-radius: 6px;
                background: #fff;
                transition: all .5s;
                margin: 5px 0;
            }
        }
        .pageCenter {
            /*opacity:0;*/
            opacity: 0;
            .logo {
                display: -ms-flexbox;
                display: flex;
                width: 160px;
                height: 40px;
                -ms-flex-negative: 0;
                flex-shrink: 0;
            }
        }
    }

    #headBox.current {
        top: 0;
        left: 0;
        z-index: 11;
        width: 80vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .9);
        .suspension {
            position: absolute;
            right: 5vw;
            top: 5vw;
            background-color: transparent;
            span {
                display: block;
                width: 28px;
                height: 3px;
                border-radius: 6px;
                background: #fff;
                transition: all .5s;
                margin: 5px 0;
                &:first-child {
                    transform: rotate(45deg) translateX(5px);
                }
                &:nth-child(2) {
                    display: none;
                }
                &:last-child {
                    transform: rotate(-45deg) translateX(5px);
                }
            }
        }
        .pageCenter {
            padding: 4vw 0;
            opacity: 1;
            .logo {
                display: -ms-flexbox;
                display: flex;
                width: 160px;
                height: 40px;
                -ms-flex-negative: 0;
                flex-shrink: 0;
                &::before {
                    content: "";
                    background-repeat: no-repeat;
                    background-size: auto 100%;
                    display: block;
                    height: 40px;
                    width: 40px;                   
                    transform: translateX(6vw);
                    animation: logokAnimation 1s linear;
                }
                &::after {
                    content: "";
                    background-repeat: no-repeat;
                    display: block;
                    height: 40px;
                    background-size: auto 100%;
                    background-position: 50%;
                    width: 108px;
                    background-position: 100%;
                    transform: translateX(6vw);                  
                    animation: logoNameAnimation 1.5s linear;
                }
            }

            ul {
                margin-top: 30px;
                font-size: 5vw;
                li {
                    font-weight: 400;
                    text-align: left;
                    line-height: 50px;
                    height: 50px;
                    padding-left: 6vw;
                    color: #ccc;
                    cursor: pointer;
                }
                .active {
                    width: 100%;
                    background: gray;
                    opacity: 0.5;
                }
            }
        }
    }
    @keyframes logokAnimation {
        0% {
            transform: translateX(0vw) rotate(0deg);
            transform-origin: center;
        }

        25% {
            transform: translateX(1.5vw) rotate(90deg);
            transform-origin: center;
        }

        50% {
            transform: translateX(3vw) rotate(180deg);
            transform-origin: center;
        }
        75% {
            transform: translateX(4.5vw) rotate(270deg);
            transform-origin: center;
        }
        100% {
            transform: translateX(6vw) rotate(360deg);
            transform-origin: center;
        }
    }

    @keyframes logoNameAnimation {
        0% {
            transform: translateX(10vw) translateY(-4vw);
        }
        25% {
            transform: translateX(9vw) translateY(-3vw);
        }
        50% {
            transform: translateX(8vw) translateY(-2vw);
        }
        75% {
            transform: translateX(7vw) translateY(-1vw);
        }
        100% {
            transform: translateX(6vw) translateY(0vw);
        }
    }
}
    
 

</style>
