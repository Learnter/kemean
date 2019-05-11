<template>
  <section class="aboutPage">

      <headerBox></headerBox>  

      <section class="banner">
           <span>{{bannerInfo.title}}</span>
           <p>{{bannerInfo.details}}</p>
      </section>

      <section class="aboutUsTitle">
            <span>公司简介</span>
            <p>Company Introduction</p>
      </section>

      <section class="introductionBox">            
            深圳科名网络有限公司正式成立于2015，是一家以提供专业的移动应用开发为主的专业公司。公司有着互联网及移动互联网10多年的从业经验，凭着在这个领域丰富的行业经验和强大的研发团队，为我们的客户提供有价值的产品和服务。
      </section>

      <section class="introductionTypeBox">
          <div>
              <i class="iconfont">&#xe67b;</i>
              <p>我们沉浸于用户体验帮您挖掘和创新更大商机的可能</p>
          </div>
          <div>
              <i class="iconfont">&#xe61d;</i>
              <p>服务思维下的商业设计撇弃浮夸去直达共同的目标</p>
          </div>
          <div>
              <i class="iconfont">&#xe6c4;</i>
              <p>精益合作和分享的态度让我们鼎力相助你的梦想</p>
          </div>
      </section>

      <section class="courseBox">
          <div class="aboutUsTitle">
              <span>发展历程</span>
              <p>DEVELOPMENT PATH</p>
          </div>
          <div class="courseInfoBox">
              <div>
                  <div>
                      <span>2015.05</span>
                      <p>KARLE IT 技术网V1.0基于WEB发布</p>
                  </div>
                  <div>
                      <span>2015.10</span>
                      <p>KARLE IT 技术网V2.0基于WEB发布</p>
                  </div>
                  <div>
                      <span>2016.03</span>
                      <p>KARLE IT 使用免费用户达到30000人，收费问答社区突破5000人次</p>
                  </div>
                  <div>
                      <span>2016.11</span>
                      <p>SDCC 2016中国软件开发者大会KARLE IT 技术团队应邀参加并做技术分享</p>
                  </div>
                  <div>
                      <span>2017.10</span>
                      <p>与猪八戒、一品威客达成战略合作</p>
                  </div>
                  <div>
                      <span>2018.8</span>
                      <p>中国区块链技术应用大会，获得区块链技术应用奖</p>
                  </div>                
              </div>
          </div>
      </section>

      <section class="teamBox">
            <div class="homeTitle" >
                <span style="color:#333">我们的团队</span>
                <p>OUR TEAM</p>
            </div>
            <div class="teamPeople">
                <div class="teamPeopleList" v-for="(item,index) in teamInfo" :key="index">
                    <img :src="item.src"> 
                    <span>{{item.position}}</span>
                </div>             
            </div> 
            <p>
                我们是一群热爱创意与技术的人，我们的成员由市场营销、交互设计、视觉设计、前端开发、后端开发、技术架构的专家组成。 信任，积极，责任，对细节的尊重是我们的关键词。
            </p>         
      </section>
      <footer-box></footer-box>
  </section>
</template>
<script>
import headerBox from '@/components/common/header';
import footerBox from '@/components/common/footer';
import { teamBox } from "@/assets/json/picktrue.js";
export default {
    name:"aboutUs",
    data(){
        return{
            bannerInfo: { title: "关于科名", details: "我们追求极致的用户体验,与合作伙伴共同成长" },
            teamInfo: teamBox
        }
    },
    methods:{

    },
    components:{
        headerBox,
        footerBox
    }
  
}

</script>
<style lang="scss" scoped>

.banner {
    background-image: url("https://qn.kemean.cn/upload/201809/06/4a533e40b153420087eb0ab3fd2cc4f2");
}

.courseBox{ 
     background-image:url("https://qn.kemean.cn/upload/201809/06/54027b72d3674e23a6a5276cce4dc0cb");
}

@media screen and (min-width:750px){
    .aboutPage{
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
        .aboutUsTitle{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 4vw 0;
            span{
                font-size: 4.5vw;
                color: #333;
                margin-bottom:1vw;
            }
            p{
                font-size: 1.6vw;
                color: rgba(51,51,51,.5);
            }
        }
        .introductionBox{
            box-sizing:border-box;
            width: 100%;
            margin: 0 auto;
            text-align: center;
            line-height: 180%;
            color: #999;
            font-size: 1.6vw;
            padding: 0 2.5vw;
        }
        .introductionTypeBox{
            width: 100%;
            margin: 5.9vw auto 0;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-pack: distribute;
            justify-content: space-around;
            padding-bottom: 10vw;
            div{
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                width: 33.333%;
                padding: 0 1.5vw;
                i{
                    width: 18vw;
                    height: 18vw;
                    background-color: #f0f0f0;
                    border-radius: 50%;
                    text-align: center;
                    line-height: 18vw;
                    font-size: 6vw;
                    color: #666;
                }
                p{
                    margin-top: 3vw;
                    text-align: center;
                    font-size: 1.8vw;
                    line-height:150%;
                    color: #666;
                }
            }
        }
        .courseBox{
            width: 100%;
            margin: 0 auto;
            background-repeat: no-repeat;
            background-size: auto 100%;
            padding-top: 5vw;
            padding-bottom: 11vw;
            .aboutUsTitle{
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                padding: 4vw 0;
                span{
                    color: #fff;
                }
                p{
                    
                    color: #fff;
                    opacity: .5;

                }
            }
        }  
        .teamBox{
            padding: 0 0 6vw;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            background-color: #fff;
            .homeTitle{
                display: flex;
                -ms-flex-direction: column;
                flex-direction: column;
                align-items: center;
                padding: 4vw 0;
                span{
                    font-size: 4.5vw;
                    color: #333;
                }
                p{
                    font-size: 1.6vw;
                    color: rgba(51,51,51,.5);
                }
            }
            .teamPeople{
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                margin-bottom: 40px;
                -ms-flex-wrap: wrap;
                flex-wrap: wrap;
                border-bottom: 1px solid #ddd;
                padding-bottom: 10px;
                .teamPeopleList{
                    width: 180px;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-orient: vertical;
                    -webkit-box-direction: normal;
                    -ms-flex-direction: column;
                    flex-direction: column;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    margin-bottom: 40px;
                    img{
                        width: 100px;
                        height: 100px;
                        border-radius: 50%;
                    }
                    span{
                        display: block;
                        margin-top: 15px;
                        font-size: 16px;
                        color: #666;
                    }
                }
            }
            p{
                max-width: 1100px;
                width: 80%;
                text-align: center;
                font-size: 18px;
                line-height: 2;
            }
        }
    }
}

 @media screen and (max-width:750px){
    .aboutPage{
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
            .aboutUsTitle{
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center;
                padding:4vw 0;
                span{
                    font-size:4.5vw;
                    color:#333;
                }
                p{
                    font-size:1vw;
                    color: rgba(51,51,51,.5);
                    margin:0;
                }
            }
            .introductionBox{
                    width: 100%;
                    margin: 0 auto;
                    text-align: center;
                    line-height: 180%;
                    color: #999;
                    font-size: 3.6vw;
                    padding: 0 3vw;
                    box-sizing:border-box;
                }
            
            .introductionTypeBox{                
                    width: 100%;
                    margin: 8vw auto;
                    div{
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-box-align: center;
                        -ms-flex-align: center;
                        align-items: center;
                        padding: 0 3vw;
                        margin-bottom: 5vw;
                        i{
                            width: 18vw;
                            height: 18vw;
                            background-color: #f0f0f0;
                            border-radius: 50%;
                            text-align: center;
                            line-height: 18vw;
                            font-size: 6vw;
                            color: blueviolet;
                            -ms-flex-negative: 0;
                            flex-shrink: 0;
                        }
                        p{
                            font-size: 3.6vw;
                            color: #666;
                            margin-left: 5vw;
                            text-align:left;
                        }
                    }
            }

            .courseBox{              
                    width: 100%;
                    margin: 0 auto;
                    padding-top: 5vw;
                    padding-bottom: 11vw;         
                    background-repeat: no-repeat;
                    background-position: 50%;
                    background-size: auto 100%;
                    .aboutUsTitle{
                        span{
                            color:white;
                        }
                        p{
                            color: #fff;
                            opacity: .5;
                        }
                    }
                    .courseInfoBox{
                        color:white;
                        padding:0 4vw;
                        div{
                            position: relative;
                            height:154vw;
                            div{
                                position: absolute;
                                width: 50%;
                                max-width: 350px;
                                height: 50vw;
                                padding: 0 4.5vw;
                                box-sizing:border-box;
                                &:before{
                                    content:"\e61d";
                                    font-family:"iconfont";
                                    position: absolute;
                                    top:4vw;
                                }
                                &:after{
                                    content: "";
                                    position: absolute;
                                    width: 2px;
                                    height: calc(50% - 1vw);
                                    top: 5vw;
                                }
                                &:nth-of-type(odd){
                                    left: calc(50% - 1px);
                                    &:before{
                                        left: -1.8vw;
                                    }
                                    &:after{
                                        left: 0;
                                    }
                                }
                                &:nth-of-type(2n){
                                    right: calc(50% - 1px);
                                    text-align: right;
                                    &:before{
                                        right: -1.8vw;
                                    }
                                    &:after{
                                        right: 0;
                                    }
                                }
                                &:nth-child(1){
                                    top:0vw;
                                }
                                &:nth-child(2){
                                    top:25vw;
                                }
                                &:nth-child(3){
                                    top:50vw;
                                }
                                &:nth-child(4){
                                    top:75vw;
                                }
                                &:nth-child(5){
                                    top:100vw;
                                }
                                &:nth-child(6){
                                    top:125vw;
                                }

                                span{
                                    font-size: 4.5vw;
                                    color: #fff;
                                    opacity: .4;
                                    line-height: 180%;
                                }
                                p{
                                    font-size: 4.5vw;
                                    color: #fff;
                                    line-height: 180%;
                                    text-align:left;
                                }
                            }
                             &:after{
                                content: "";
                                position: absolute;
                                bottom: 0;
                                // left: calc(50% - .7vw);
                                width: 1.5vw;
                                height: 1.5vw;
                                border-radius: 50%;
                                background-color: #fff;
                            }
                        }
                    }
               }



            .teamBox{
                padding: 6vw 0;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                .homeTitle{
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    justify-content:center;
                    span{
                        font-size:6vw;
                        color:black;
                    }
                    p{
                        font-size:1.6vw;
                        margin-top:0;
                        color: rgba(51,51,51,.5);
                    }
                }
                .teamPeople{
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-pack: center;
                    -ms-flex-pack: center;
                    justify-content: center;
                    -ms-flex-wrap: wrap;
                    flex-wrap: wrap;
                    border-bottom: 1px solid #ddd;
                    .teamPeopleList{
                        width: 25vw;
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-box-orient: vertical;
                        -webkit-box-direction: normal;
                        -ms-flex-direction: column;
                        flex-direction: column;
                        -webkit-box-align: center;
                        -ms-flex-align: center;
                        align-items: center;
                        margin-bottom: 4vw;
                        img{
                            width: 20vw;
                            height: 20vw;
                            border-radius: 50%;
                        }
                        span{
                            display: block;
                            margin-top: 1.5vw;
                            font-size: 3.8vw;
                        }
                    }

                }
                p{
                    width: 90%;
                    text-align: center;
                    font-size: 3vw;
                    line-height: 2;
                    margin-top: 4vw;
                }
            }
        }
     }
</style>
