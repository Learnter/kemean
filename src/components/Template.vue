<template>
   <section class="templatePage">
      <header-box></header-box>

       <section class="banner">
           <span>{{bannerInfo.title}}</span>
           <p>{{bannerInfo.details}}</p>
      </section>

      <section class="toggleBox">
            <ul>
                <li :class="toggleId == item.id ? 'current' : ''" v-for="(item,index) in toggleInfo" :key="index" @click="toggleId = item.id,activedTab(item)">
                    {{item.name}}
                </li>
            </ul>
      </section>

      <section class="caseList">
          <ul>
              <li v-for="(item,index) in templateData" :key="index">
                 <div class="listImg">
                     <img :src="item.coverImg"></img>
                 </div> 
                 <div class="content">   
                     <h3>{{item.title}}</h3>
                     <div class="seconedDIV">
                         <span>使用类型:</span>
                         <span v-if="item.type == 1101">APP</span>
                         <span v-if="item.type == 1201">公众号</span>
                         <span v-if="item.type == 1301">小程序</span>
                     </div>
                     <div class="lastDIV">
                         <p>￥{{item.price}}</p>
                         <span>{{item.buyNum}}人购买</span>
                     </div>
                 </div>
              </li>
          </ul>
      </section>

      <footer-box></footer-box>
   </section>
</template>
<script>
import headerBox from '@/components/common/header';
import footerBox from '@/components/common/footer';
import { templateData } from '@/assets/json/picktrue.js';
export default {
    name:"templatePage",
    data(){
        return{
              toggleId:0,
              bannerInfo: { title:"软件模板", details: "我们追求极致的用户体验,与合作伙伴共同成长" },
              toggleInfo:[{id:0,name:"全部",type:1001},{id:1,name:"公众号",type:1201},{id:2,name:"小程序",type:1301},{id:3,name:"APP",type:1101}],
              templateData: ""
        }
    },
    created() {
        this.templateData = templateData;
    },
    methods:{
        activedTab(tabV){
          switch (tabV.type) {
              case 1101:
               this.templateData = templateData.filter(item => {
                      return item.type == 1101
                  });
                  break;
              case 1201:
                this.templateData = templateData.filter(item => {
                      return item.type == 1201
                  });
                  break;
              case 1301:
                 this.templateData = templateData.filter(item => {
                      return item.type == 1301
                  });
                  break; 

              default:
                        this.templateData = templateData;
                  break;  
               } 
    
          }

    },
    components:{
        headerBox,
        footerBox
    }
}
</script>
<style lang="scss" scoped>
.banner{
    background-image: url("https://qn.kemean.cn/upload/201809/07/3d4059a57c2d4b26bcbb015e90e4686d");

}

@media screen and (min-width:750px) {
    .templatePage{
        width:100%;
        .banner{
            display: -ms-flexbox;
            display: flex;
            align-items: center;
            justify-content:center;
            flex-direction: column;
            width: 100%;
            overflow: hidden;
            height: 30vw;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-position: top;
            background-size: 100% auto;
            span{
                font-size: 3.6vw;
                color: #fff;
            }
            p{
                font-size: 1.4vw;
                color: #fff;
                margin-top: 60px;
            }
        }
        .toggleBox{
            width:100%;
            height:80px;
            display:flex;
            justify-content:center;
            align-items:center;
            ul{
                width:70%;
                height:100%;
                display:flex;
                justify-content:space-around;
                align-items:center;
                li{
                    margin-right:30px;
                    height:100%;
                    font-size:18px;
                    display:flex;
                    justify-content: center;
                    align-items:center;
                    cursor: pointer;
                    color:#7C7C7C;
                }
                .current{
                    border-bottom: 3px solid #345a9e;
                    color: #345a9e;
                    font-size: calc(1.2);
                }
            }
        }
        .caseList{
            background:#F5F5F5;
            padding: 3vw 2vw 0;
            ul{
                display:flex;
                flex-wrap:wrap;
                justify-content:space-around;
                li{
                    display:flex;
                    flex-direction:column;
                    justify-content: center;
                    align-items: center;
                    background:white;
                    margin-bottom:2vw;
                    border-radius:10px;
                    cursor: pointer;
                    box-shadow: 0 0 15px 0 #999999;
                    .listImg{
                        overflow:hidden;
                        border-radius:10px;
                        img{ 
                            transition:all .6s;
                            &:hover{
                                transform:scale(1.2);
                            }
                        }
                    }
                    .content{
                        width:100%;
                        display:flex;
                        flex-direction:column;
                        align-items:flex-start;
                        padding:10px;
                        box-sizing:border-box;
                        font-size:15px;
                        h3{
                            font-size:18px;
                            color:black;
                        }
                        .seconedDIV{
                             width:100%;
                             display:flex;
                             justify-content:space-between;
                             align-items:center;
                             padding:10px 0;
                             border-bottom:1px solid #F5F5F5;
                        }
                        .lastDIV{
                             width:100%;
                             display:flex;
                             justify-content:space-between;
                             align-items:center;
                             padding-top:10px;
                             p{
                                 color:red;
                             }
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width:750px) {
    .templatePage{
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
        }  
        .toggleBox{
            height:13vw;
            box-shadow: 0 0 1px #999999;
            ul{
                display:flex;
                justify-content: space-around;
                align-items:center;
                height:100%;
                background:#FFFFFF;
                color:#999999;
                margin:0;
                font-size:4vw;
                li{
                    height:100%;
                    display:flex;
                    justify-content: center;
                    align-items:center;
                    cursor: pointer;
                }
                .current{
                    border-bottom: 3px solid #345a9e;
                    color: #345a9e;
                    font-size: calc(110%);
                }
            }
        }  
        .caseList{
            width:100%;
            background:#F5F5F5;
            padding:6vw 0;
            ul{
                width:100%;
                display:flex;
                flex-wrap: wrap;
                justify-content:space-between;
                li{
                    width:49%;
                    margin-bottom:2%;
                    background-color: #fff;
                    color:#999999;
                    .listImg{
                        width:100%;
                        height:48vw;
                        img{
                            width:100%;
                            height:100%;
                        }
                    }
                    .content{
                        width:100%;
                        padding: 0 2vw;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        box-sizing:border-box;
                        font-size:3.8vw;
                        border-radius:0.6vw;
                        h3{
                            width:100%;
                            padding-top:2vw ;
                            font-size: 4.2vw;
                            color: #000;
                            font-weight: 700;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            text-align: left;
                        }
                        .seconedDIV{
                            width:100%;
                            padding:2vw 0;
                            display: flex;
                            justify-content: space-between;
                            border-bottom: 1px solid #eee;
                        }
                        .lastDIV{
                            width:100%;
                            padding:2vw 0;
                            display:flex;
                            justify-content: space-between;
                            p{
                                color:red;
                            }
                        }
                    }
                }
            }
        }
   }
</style>
