<template>
    <section class="concatPage">
       <headerBox></headerBox>
       <section class="banner">
          <span>{{bannerInfo.title}}</span>
          <p>{{bannerInfo.details}}</p>
       </section>
       <section class="contactUsBox">
            <section class="concatBox">
                <span>留下您的联系方式 更有效的为您服务</span>
                <div class="contactInputBox">
                      <div class="inputBox">
                            <input type="text" placeholder="您的姓名" v-model="userName" >
                            <input type="text" placeholder="您的电话" v-model="userPhone">
                            <input type="text" placeholder="您的微信/QQ(选填)" v-model="userInfo">
                        </div>
                        <textarea placeholder="请输入您的软件需求,一小时内获得项目报价" v-model="requirement"></textarea>
                </div>
                <div class="but">
                    <button>提交需求</button>
                </div>
            </section>
            <section class="concatAddress">
                  <div v-for="(item,index) in addressInfo" :key="index">
                      <span>{{item.title}}</span>
                      <p>{{item.details}}</p>
                  </div>
            </section>
       </section>
       <section class="concatMap">
          <img :src="mapSrc" alt="地图">
       </section>
       <footer-box></footer-box>
    </section>
</template>
<script>
import {addressInfo} from '@/assets/json/picktrue.js';
import footerBox from '@/components/common/footer';
import headerBox from "@/components/common/header";

export default {
  name:"concatUs",
  data(){
    return{
        mapSrc:"https://qn.kemean.cn/upload/201812/22/3711276aec7f48a4b649e58fa8dffc3d",
        bannerInfo:{title:"联系我们",details:"我们追求极致的用户体验,与合作伙伴共同成长"},
        addressInfo:addressInfo,
        userName:"",
        userPhone:"",
        userInfo:"",
        requirement:""
    }
  },
  methods:{
  },
  components:{
    footerBox,
    headerBox,
  }
}
</script>
<style lang="scss" scoped>
 .concatPage{
    background-color:#fff;
 }
 
.banner {
  background-image: url("https://qn.kemean.cn/upload/201809/06/54027b72d3674e23a6a5276cce4dc0cb");
}


.concatAddress {
   background-image: url("https://qn.kemean.cn/upload/201809/06/6b1761127ee3477786342506b62e6a9d");
}

@media screen and (min-width:750px){
    .concatPage{
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        .banner{
          width:100%;
          height:30vw;
          color:white;
          background-repeat:no-repeat;
          background-attachment: fixed;
          background-size: 100% auto;
          background-position:top;
          display:flex;
          flex-direction:column;
          justify-content: center;
          align-items:center;
          span{
             font-size: 4vw;
             margin-bottom:50px;
          }
          p{
             font-size:1.5vw;
          }
        }
    .contactUsBox{
              max-width: 1220px;
              width: 100%;
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              background: white;
              margin-top: -50px;
              .concatBox{
                  width:55%;
                  display:flex;
                  flex-direction:column;
                  align-items:center;
                  padding:30px 0;
                  span{
                    font-size:2vw;
                  }
                  .contactInputBox{
                        width:80%;
                        display: flex;
                        flex-direction: column;
                        align-items:center;
                        margin: 20px 0;
                        .inputBox{
                         width:100%;
                         display:flex;
                         flex-direction:column;
                         align-items:center;
                         input{
                           width:100%;
                            margin-bottom:20px;
                            height:3.5vw;
                            padding-left:10px;
                            background:#e9e9e9;
                            border:none;
                            outline:none;
                          }
                      }
                      textarea{
                          width:100%;
                          height:12vw;
                          background:#e9e9e9;
                          border:none;
                          outline:none;
                          padding-left:10px;
                      }
                  }
                  .but{
                     width:180px;
                     height:40px;
                     button{
                       width:100%;
                       height:100%;
                       font-size:18px;
                       color:white;
                       border:none;
                       outline:none;
                       background:#1B8FFC;
                       border-radius:20px;
                       cursor: pointer;
                     }
                  }
              }
              .concatAddress{ 
                 width:45%;
                 box-sizing:border-box;
                 padding: 0 40px;
                 overflow: hidden;
                 display: flex;
                 flex-direction:column;
                 align-items:flex-start;
                 justify-content:center;
                 div{
                   display:flex;
                   flex-direction:column;
                   align-items:flex-start;
                   text-align:left;
                   margin-bottom:30px;
                   span{
                     font-size:2.5vw;
                     color:#000;
                     margin-bottom:1vw;
                   }
                   p{
                     padding-left:2vw;
                   }
                }
            }
        }
        .concatMap{
            width:100%;
            margin-top:30px;
            overflow: hidden;
            img{
              width:100%;
            }
        }
    }
}

 @media screen and (max-width:750px) {
   .banner{
     width:100%;
     height:50vw;
     background-attachment: fixed;
     background-repeat:no-repeat;
     background-size:100% 50vw;
     color:white;
     display:flex;
     flex-direction:column;
     justify-content:center;
     align-items:center;
     span{
        font-size:7vw;
        
     }
     p{
       margin-top:10px;
     }
   }
   .concatBox{
     display:flex;
     flex-direction:column;
     text-align:left;
     padding: 5vw 5vw 3vw;
     span{
        font-size: 4vw;
        color: black;
     }
     .contactInputBox{
        display: flex;
        flex-direction: column;
        margin-bottom: 3vw ;
        .inputBox{
              display: flex;
              flex-direction: column;
              margin: 3vw 0;
              input{
                  height: 9vw;
                  background-color: #e9e9e9;
                  outline:none;
                  border:none;
                  padding-left:2vw;
                  &:nth-child(2){
                    margin:3vw 0;
                  }
              }
          }
        textarea{
          height:23vw;
          max-width:100%;
          background-color: #e9e9e9;
          padding-left:2vw;
          outline:none;
          border:none;
        }
     }
     .but{
       display:flex;
       justify-content: center;
       align-items:center;
       button{
            height: 10vw;
            width: 30vw;
            font-size: 3.6vw;
            text-align: center;
            border-radius: 2vw;
            border: none;
            outline: none;
            color: white;
            background-color: cornflowerblue;
       }
     }    
   }
   .concatAddress{
       background-image: url("https://qn.kemean.cn/upload/201809/06/6b1761127ee3477786342506b62e6a9d");
       background-repeat: no-repeat;
       background-position: 50%;
       background-size: 100% 100%;
       padding: 14vw 8vw;
       div{   
          text-align: left;
          margin-bottom: 4vw;
          display: flex;
          flex-direction: column;
          color: black;
         span{
           font-size:5vw;
           margin-bottom:2vw;
         }
         p{
           font-size:3vw;
         }
       }
     }
     .concatMap{
       width:100%;
       overflow: hidden;
       margin-top:3vw;
       img{
         width:100%;
       }
     }
 }
</style>
