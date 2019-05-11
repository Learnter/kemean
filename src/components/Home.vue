<template>
    <section class="homePage router-view">     
        <headerBox></headerBox>
        <swiper class="mod-banner-scroll" :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="(item,index) in swiperList" :key="index">
                <img :src="item"></img>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev swiper-button" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button" slot="button-next"></div>
        </swiper>
        <section class="selectKemean">
            <div class="pageCenter">
                <h1>
                    为什么
                    <span>选择科名</span>
                </h1> 
                <p class="introduction">科名网络是以APP、网站、小程序、企业系统等产品开发为核心的业务咨询及技术解决方案公司。</p>
                <div class="program">
                    <ul>
                        <li>
                            <div>
                                <i class="iconfont">&#xe61c;</i>
                                <span>小程序开发</span>
                                <p>超文本标记语言开发，适应性极强，可在PC、手机端兼容</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <i class="iconfont">&#xe61b;</i>
                                <span>APP开发定制</span>
                               <p>基于 iOS / Android 应用开发
                                    <br>掌控智能终端时代
                               </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <i class="iconfont">&#xe638;</i>
                                <span>网站建设</span>
                                <p>超文本标记语言开发，适应性极强，可在PC、手机端兼容</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <i class="iconfont">&#xe600;</i>
                                <span>公众号开发</span>
                                <p>适应性极强，可在PC、手机端兼容</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <i class="iconfont">&#xe6c6;</i>
                                <span>区块链开发</span>
                                <p>去中心化、分布式账本技术，未来技术趋势</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <i class="iconfont">&#xe61e;</i>
                                <span>UE/UI设计</span>
                                <p>超文本标记语言开发，适应性极强，可在PC、手机端兼容</p>
                            </div>
                        </li>                       
                    </ul>
                </div>
                <div class="kemeanBut">
                    <button @click.prevent ="toggleUs">
                        <span>关于科名</span>
                    </button>
                </div>
            </div>
        </section>
        <section class="projectCaseBox">
          <div class="homeTitle">
              <span>案例展示</span>
              <p>EXCELLENT CtASE SHOW</p>
          </div>  
          <div class="caseBox">
              <ul>
                  <li v-for="(item,index) in casesDtata" :key="index">
                      <div class="caseTop" :style="listColor(item)">
                         <img :src="item.coverImg" alt="加载失败">
                      </div>
                      <div class="caseInfo">
                        <h3>{{item.name}}</h3>
                        <p>{{item.industry}}</p>
                      </div>
                  </li>
              </ul>
          </div>  
          <div class="kemeanBut">
            <button @click="toggleCases">
                <span>查看全部</span>    
            </button>    
          </div>  
        </section>
        <section class="statisticsBox">
            <ul>
                <li v-for="(item,index) in casesCount" :key="index">
                    <span>
                        <span class="numberAnimation">{{item.number}}</span>
                        <em>+</em>
                    </span>
                    <p>{{item.info}}</p>
                </li>
            </ul>
        </section>
        <section class="serviceProcessBox"> 
            <div class="homeTitle">
                <span>服务流程</span>
                <p>SERVICE PROCESS</p>
            </div>
            
            <div class="serviceProcess">
                <div class="processList">
                    <div class="processIcon process1"></div>
                    <div class="processInfo">
                        <span>需求沟通</span>
                        <p>倾听客户需求，了解用户使用环境和操作流程</p>
                    </div>
                </div>
                <div class="processList">
                    <div class="processIcon process2"></div>
                    <div class="processInfo">
                        <span>交互设计</span>
                        <p>头脑风暴交互情景模拟，原型设计</p>
                    </div>
                </div>
                <div class="processList">
                    <div class="processIcon process3"></div>
                    <div class="processInfo">
                        <span>视觉创意</span>
                        <p>色彩及平面元素设定， 结构和布局规范确认</p>
                    </div>
                </div>
                <div class="processList">
                    <div class="processIcon process4"></div>
                    <div class="processInfo">
                        <span>技术开发</span>
                        <p>程序实现页面移动应用数据对接</p>
                    </div>
                </div>
                <div class="processList">
                    <div class="processIcon process5"></div>
                    <div class="processInfo">
                        <span>测试反馈</span>
                        <p>修改调整，规范完善</p>
                    </div>
                </div>
                <div class="processList">
                    <div class="processIcon process6"></div>
                    <div class="processInfo">
                        <span>发布上线</span>
                        <p>验收合格，运营上线</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="teamBox">
            <div class="homeTitle" >
                <span style="color:#333">服务团队</span>
                <p>OUR TEAM</p>
            </div>
            <div class="teamPeople">
                <div class="teamPeopleList" v-for="(item,index) in teamInfo" :key="index">
                    <img :src="item.src"> 
                    <span>{{item.position}}</span>
                </div>             
            </div> 
            <p>
                我们是一群热爱创意与技术的人，我们的成员由市场营销、交互设计、视觉设计、前端开发、后端开发、技术架构的专家组成。
                信任，积极，责任，对细节的尊重是我们的关键词。
            </p>          
        </section>
        <section class="partnerBox">    
            <div class="homeTitle">
                <span>合作伙伴</span>
                <p>OUR PARTNER</p>
            </div>
            <div class="partnerListBox">
                <div v-for="(item,index) in partnerBox" :key="index">
                    <img :src="item.src" alt="加载失败">
                </div>
            </div>
        </section>
        <section class="contactUsBox">
            <div class="homeTitle">
                <span style="color:#333">联系我们</span>
                <p>CONTACT US</p>
            </div>
            <div class="demandText">
                <span>把您的需求告诉我们，3分钟获得报价</span>
                <p>您的信任是我们最大的动力，科名网络将竭诚为您服务！</p>
            </div>
            <div class="contactInputBox">
                <div class="inputBox">
                    <input type="text" placeholder="您的姓名">
                    <input type="text" placeholder="您的电话">
                    <input type="text" placeholder="您的微信/QQ(选填)">
                </div>
                <textarea placeholder="请输入您的软件需求,一小时内获得项目报价"></textarea>
            </div>
            <div class="but">
                <button>提交需求</button>
            </div>
        </section>
        <footerBox></footerBox>
    </section>
</template>
<script>
import {casesDtata, casesCount, teamBox, partnerBox} from "../assets/json/picktrue.js";
import footerBox from '@/components/common/footer';
import headerBox from "@/components/common/header";
export default {
    name:"HomePage",
    data(){
        return{   
            swiperOption:{
                pagination: {
                    el: '.swiper-pagination'
                },
                autoplay: {
                    delay: 3000
                },
                navigation: {
                    nextEl:'.swiper-button-next',
                    prevEl:'.swiper-button-prev',
                },
                loop:true,
                lazy:{
                    loadPrevNext: true,
                }
            },
             swiperList:["https://qn.kemean.cn/upload/201812/30/9def8f65f53c4a96b28232b3b5d5cf68", "https://qn.kemean.cn/upload/201812/30/4b6f813967de4d8d954ba4b096e4a858", "https://qn.kemean.cn/upload/201812/30/82f4c4a05be44e9fa607ff066903cb59"],
             casesDtata:casesDtata,
             casesCount:casesCount,
             teamInfo: teamBox,
             partnerBox: partnerBox
        }
    },
    mounted() {
        this.figureCount();
        this.listColor();
    },
    methods:{       
        figureCount() {
            //页面数字累加动画效果
            $.fn.countTo = function(a) {
                a = a || {};
                return $(this).each(function() {
                    var c = $.extend({},
                        $.fn.countTo.defaults, {
                            from: $(this).data("from"),
                            to: $(this).text(),
                            speed: 1000,
                            refreshInterval: $(this).data("refresh-interval"),
                            decimals: $(this).data("decimals")
                        },
                        a);
                    var h = Math.ceil(c.speed / c.refreshInterval),
                        i = (c.to - c.from) / h;
                    var j = this,
                        f = $(this),
                        e = 0,
                        g = c.from,
                        d = f.data("countTo") || {};
                    f.data("countTo", d);
                    if (d.interval) {
                        clearInterval(d.interval)
                    }
                    d.interval = setInterval(k, c.refreshInterval);
                    b(g);
                    function k() {
                        g += i;
                        e++;
                        b(g);
                        if (typeof (c.onUpdate) == "function") {
                            c.onUpdate.call(j, g)
                        }
                        if (e >= h) {
                            f.removeData("countTo");
                            clearInterval(d.interval);
                            g = c.to;
                            if (typeof (c.onComplete) == "function") {
                                c.onComplete.call(j, g)
                            }
                        }
                    }
                    function b(m) {
                        var l = c.formatter.call(j, m, c);
                        f.html(l)
                    }
                })
            };
            $.fn.countTo.defaults = {
                from: 0,
                to: 0,
                speed: 1000,
                refreshInterval: 100,
                decimals: 0,
                formatter: formatter,
                onUpdate: null,
                onComplete: null
            };
            function formatter(b, a) {
                return b.toFixed();
            }
            $(".numberAnimation").data("countToOptions", {
                formatter: function(b, a) {
                    return b.toFixed().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
                }
            });
            $(".numberAnimation").each(count);
            function count(a) {
                var b = $(this);
                a = $.extend({},
                    a || {},
                    b.data("countToOptions") || {});
                b.countTo(a)
            };             
       },
       toggleUs(){
           this.$router.push({path:"/aboutUs"})
           sessionStorage.setItem("tabName",'关于科名');
       },
       toggleCases(){
           this.$router.push({path:"/cases"});
           sessionStorage.setItem("tabName",'项目案例');
       },
       listColor(item){
        if(item && item.shallowColor && item.deepColor){
            var shallowColor = item.shallowColor;
            var deepColor = item.deepColor;
            return "background:linear-gradient(120deg," + shallowColor + "," + deepColor + ")";
        }else{
            return false;
         }
       }
    },
    components:{
        footerBox,
        headerBox
    }

}
</script>
<style lang="scss" scoped>


.homeTitle {
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
    span {
        font-size: 6vw;
        color: white;
        margin-bottom: 1vw;
    }
    p {
        font-size: 2.6vw;
        color: #89898B;
    }
}

.router-view {
    height: 60vh;
}

.swiper-button {
    width: 30px;
    height: 30px;
}


.process1::after {
    background-image: url("https://qn.kemean.cn/upload/201809/06/cdd2918dbf58446f94b09255a0c82dad");
}

.process2::after {
    background-image: url("https://qn.kemean.cn/upload/201809/06/327943d0d94a4977ae85617e3972c50d");
}

.process3::after {
    background-image: url("https://qn.kemean.cn/upload/201809/06/bbbd83a9f29c4998948dc33cf1daa749");
}

.process4::after {
    background-image: url("https://qn.kemean.cn/upload/201809/06/f72994b1a4ff4b12a72a538b42ad77d4");
}

.process5::after {
    background-image: url("https://qn.kemean.cn/upload/201809/06/5860b432f28d4e988a582a35fde8842a");
}

.process6::after {
    background-image: url("https://qn.kemean.cn/upload/201809/06/3c7129d004bb4202b123f15e59f52398");
}

        
@media screen and (min-width:750px) {

    .kemeanBut{
                display: flex;
                justify-content: center;
                margin-top: 60px;
                button{
                    &::after{
                        position: absolute;
                        content: "";
                        top: 0;
                        left: 0;
                        height: 100%;
                        width: 0;
                        background: linear-gradient(left,#79c9fc,#345a9e);
                        transition: width .6s;
                    }
                    &:hover{
                        &::after{
                            width:100%;
                        }
                        span{
                            z-index:2;
                        }
                    }
                    width: 200px;
                    height: 50px;
                    background-color: #fff;
                    box-shadow: 4px 6px 8px 0 rgba(0,0,0,.05);
                    border-radius: 8px;
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                    border:none;
                    outline:none;
                    span{
                        font-size: 18px;
                        color: #345a9e;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translateX(-50%) translateY(-50%);
                    }
                }
            }

        .homeTitle{
                display:flex;
                flex-direction:column;
                span{
                    font-size:48px;
                    color:white;
                }
                p{
                    font-size:18px;
                    color: hsla(0,0%,100%,.5);
                }
            }

    .homePage{
        width:100%;
        .mod-banner-scroll{
            width:100%;
            overflow:hidden;
            img{
                width:100%;
                height:100%;
            }
        }
        
        .selectKemean {
            padding: 9vw 0;
            background: #f6f6f6;
            h1 {
                text-align: center;
                font-size: 3.5vw;
                color: #444;
                padding: 0 3vw;
                span {
                    font-weight: 700;
                    color:black;
                }
            }
            .introduction {
                text-align: center;
                font-size: 1.5vw;
                color: #444;
                margin-top: 3vw;
                padding: 0 3vw;
            }
            .program {
                display:flex;
                -ms-flex-pack: center;
                justify-content: center;
                ul {
                    width: 100%;
                    margin-top: 12vw;
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    li {
                        width: 200px;
                        height: 220px;
                        position: relative;
                        overflow: hidden;
                        cursor: pointer;
                        margin-bottom: 30px;
                        &:hover{
                            overflow: hidden;
                            transform:scale(1.1);
                            &::after{
                                height:100%;
                            }
                            div{
                                i{
                                    color:white;
                                    border:none;
                                }
                                span{
                                    color:white;
                                    margin-top:0;
                                }
                                p{
                                    opacity:1;
                                }
                            }
                        }
                        &::after{
                            content: "";
                            position: absolute;
                            top: 0;
                            left: 50%;
                            -webkit-transform: translateX(-50%);
                            transform: translateX(-50%);
                            display: block;
                            width: 177px;
                            background-color: #345a9e;
                            border-radius: 10px;
                            -webkit-transition: all .3s;
                            transition: all .3s;
                            height: 0;
                        }
                        div {
                            position: absolute;
                            top: 0;
                            left: 50%;
                            transform: translateX(-50%);
                            z-index: 2;
                            width: 177px;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            i {
                                width: 142px;
                                height: 142px;
                                border-radius: 50%;
                                border: 4px solid #345a9e;
                                text-align: center;
                                line-height: 142px;
                                font-size: 70px;
                                color: #345a9e;
                                -ms-flex-negative: 0;
                                flex-shrink: 0;
                                -webkit-transition: all .3s;
                                transition: all .3s;
                            }
                            span {
                                    display: block;
                                    margin-top: 25px;
                                    font-size: 16px;
                                    color: #333;
                            }
                            p {
                                color: #fff;
                                font-size: 12px;
                                opacity: 0;
                                -webkit-transition: all .3s;
                                transition: all .3s;
                                margin-top: 10px;
                                padding: 0 9px;
                                line-height:150%;
                            }
                        }
                    }
                }
            }
        }
        .projectCaseBox{
            padding:6vw 0;
            background-image:url("https://qn.kemean.cn/upload/201809/06/dde8f4f8950f4f6b9f49d88077a439ac");
            background-attachment: fixed;
            background-repeat:no-repeat;
            background-size:cover;
            background-position:bottom;
            
            .caseBox{
                width:100%;
                ul{
                    display: flex;
                    justify-content:center;
                    flex-wrap: wrap;
                    max-width: 1200px;
                    margin: 50px auto 0;
                    li{
                        width: 380px;
                        height: 310px;
                        background-color: #fff;
                        border-radius: 10px;
                        cursor: pointer;
                        margin: 0 10px 30px;
                        .caseTop{
                            box-sizing:border-box;
                            width: 100%;
                            height: 230px;
                            background-color: #d7e9f7;
                            border-radius: 10px 10px 0 0;
                            padding: 40px 20px 0;
                            display: flex;
                            justify-content: center;
                            align-items: flex-start;
                            overflow: hidden;
                            img{
                                width:100%;
                                display:block;
                            }
                        }
                        .caseInfo{
                            padding:14px;
                            text-align:left;
                            h3{
                                font-size: 18px;
                                color: #333;
                            }
                            p{
                                margin-top: 5px;
                                font-size: 14px;
                                color: #333;
                            }
                        }
                    }
                }
            }
        }
        .statisticsBox{
            background:url("https://qn.kemean.cn/upload/201809/06/9a746abb2bfe4f66aa21c7692038d3a9");
            background-repeat: no-repeat;
            background-position: bottom;
            background-size: 100% auto;
            height: 453px;
            display:flex;
            justify-content:center;
            align-items:center;
            ul{
                display:flex;
                flex-wrap: wrap;
                justify-content:center;
                align-items:center;
                li{
                    width: 300px;
                    text-align: center;
                    margin-bottom: 50px;
                    span{
                        color: #345a9e;
                        font-size: 72px;
                        line-height: 70px;
                        position: relative;
                        em{
                            position: absolute;
                            font-size: 20px;
                            top: -10px;
                            right: -15px;
                            font-weight: 700;
                            font-style: normal;
                        }
                    }
                    p{
                        font-size: 18px;
                        color: #333;
                        font-weight: 700;
                        margin-top: 5px;
                    }
                }
            }
        }
        .serviceProcessBox{
                padding: 6vw 0 2vw;
                background-image: url("https://qn.kemean.cn/upload/201809/06/b42cd46c01b948e89df59959599f5699");
                background-position: bottom;
                background-repeat: no-repeat;
                background-attachment: fixed;
                background-size: cover;
                display: flex;
                align-items: center;
                flex-direction: column;
                .serviceProcess{
                    display: flex;
                    margin-top: 80px;
                    flex-wrap: wrap;
                    justify-content: center;
                    .processList{
                        width: 220px;
                        display: flex;
                        flex-direction: column;
                        align-items:center;
                        margin-bottom: 4vw;
                        .processIcon{
                            width: 150px;
                            height: 150px;
                            position: relative;
                            &::after{
                                content: "";
                                width:100%;
                                height:100%;
                                left:0;
                                top:0;
                                position: absolute;
                                background-color: rgba(0,0,0,.7);
                                border-radius: 50%;
                                background-position: 50%;
                                background-repeat: no-repeat;
                                cursor: pointer;
                                transition: all .6s;
                                
                            }
                            &:hover{
                                    &::after{
                                    content: "";
                                    width:100%;
                                    height:100%;
                                    left:0;
                                    top:0;
                                    position: absolute;
                                    background-color: rgba(0,0,0,.7);
                                    border-radius: 50%;
                                    background-position: 50%;
                                    background-repeat: no-repeat;
                                    cursor: pointer;
                                    transition: all .6s;
                                    transform:rotate(360deg);
                                    
                                }     
                            }
                        }
                        .processInfo{
                            margin-top: 30px;
                            text-align: center;
                            span{
                                font-size: 24px;
                                color: #fff;
                            }
                            p{
                                font-size: 16px;
                                color: #fff;
                                padding: 0 10px;
                                text-align: center;
                                margin-top: 40px;
                            }
                        }
                   }
              }
          }
          .teamBox{
                padding: 6vw 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: #fff;
                .homeTitle{
                    p{
                      color: rgba(51,51,51,.5);
                      margin:0;
                    }
                }
                .teamPeople{
                    display: flex;
                    justify-content: center;
                    margin-top: 40px;
                    flex-wrap: wrap;
                    border-bottom: 1px solid #ddd;
                    padding-bottom: 10px;
                    .teamPeopleList{
                        width: 180px;
                        display: flex;
                        flex-direction: column;
                        align-items:center;
                        margin-bottom: 40px;
                        img{
                            width: 100px;
                            height: 100px;
                            border-radius: 50%;
                            cursor:pointer;
                            transition:all 0.5s;
                            &:hover{
                                transform:rotate(-45deg) scale(1.2);
                            }
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
                    font-size: 16px;
                    line-height: 2;
                    margin-top: 40px;
               }
          }
          .partnerBox{
                background-image:url("https://qn.kemean.cn/upload/201809/06/88b718e45e9543cda6601a79b6d64024");
                padding: 6vw 0;
                background-position: bottom;
                background-repeat: no-repeat;
                background-attachment: fixed;
                background-size: cover;
                display: flex;
                flex-direction: column;
                align-items: center;
                .partnerListBox{
                    max-width: 1200px;
                    margin-top: 60px;
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    div{
                        height: 70px;
                        padding: 0 30px;
                        margin-bottom: 20px;
                        img{
                            height:100%;
                        }
                    }
                }
          }
          .contactUsBox{
                padding: 6vw 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: #fff;
                .homeTitle{
                    p{
                      color: rgba(51,51,51,.5);
                    }
                }
                .demandText{
                    margin-top: 3vw;
                    text-align: center;
                    span{
                        font-size: 30px;
                        color: #345a9e;
                        font-weight: 700;
                    }
                    p{
                        font-size: 18px;
                        color: #888;
                        margin-top: 10px;
                    }
                }
                .contactInputBox{
                    display: flex;
                    justify-content:space-between;
                    margin-top: 2vw;
                    max-width: 1100px;
                    width: 80%;
                    .inputBox{    
                        display: flex;
                        justify-content: space-between;
                        flex-direction: column;
                        width: 48%;
                        input{
                            width: 100%;
                            height: 50px;
                            border: 2px solid gray;
                            padding: 0 20px;
                            box-sizing:border-box;
                            outline:none;
                        }
                    }
                    textarea{
                        box-sizing:border-box;
                        width: 48%;
                        height: 213px;
                        border: 2px solid gray;
                        padding: 20px;
                        outline:none;
                    }
                }
                .but{
                    max-width: 1100px;
                    width: 80%;
                    display: flex;
                    justify-content: center;
                    margin-top: 30px;
                    button{
                        width: 200px;
                        height: 50px;
                        background-color: #345a9e;
                        border-radius: 8px;
                        font-size: 18px;
                        color: #fff;
                        border:none;
                        outline:none;
                        cursor: pointer;
                    }
                }
          }
     }
 }


@media screen and (max-width: 750px) {

       .kemeanBut {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            margin-top: 7vw;
            button {
                width: 36vw;
                height: 9vw;
                background-color: #fff;
                -webkit-box-shadow: 4px 6px 8px 0 rgba(0, 0, 0, .05);
                box-shadow: 4px 6px 8px 0 rgba(0, 0, 0, .05);
                border-radius: 1vw;
                font-size: 3.8vw;
                color: #333;
                cursor: pointer;
                outline: none; // outline:0;
                border: none;
                span {
                    outline: none;
                    border: none;
                }
            }
        }

    .swiper-button-next,
    .swiper-button-prev {
        display: none;
    }   
        
    .mod-banner-scroll{
        width:100%;
        height:70vw;
        
        img{
            width:100%;
            height:100%;
        }
    }
    .selectKemean {
        padding: 9vw 0;
        background: #f6f6f6;     
        h1 {
        text-align: center;
        font-size: 5vw;
        color: #444;
        padding: 0 3vw;
        span {
                font-weight: 700;
            }
        }    
        .introduction {
            text-align: center;
            font-size: 3.6vw;
            color: #444;
            margin-top: 3vw;
            padding: 0 3vw;
        }
        .program{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            ul{
                width: 100%;
                margin-top: 12vw;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                justify-content: space-between;
                -ms-flex-wrap: wrap;
                flex-wrap: wrap;
                li{
                    width: 32vw;
                    height: 30vw;
                    position: relative;
                    overflow: hidden;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-pack: center;
                    -ms-flex-pack: center;
                    justify-content: center;
                    cursor: pointer;
                    margin-right: 0;
                    div{
                        z-index: 2;
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
                        i{
                            width: 18vw;
                            height: 18vw;
                            border-radius: 50%;
                            border: 4px solid #345a9e;
                            text-align: center;
                            line-height: 18vw;
                            font-size: 12vw;
                            color: #345a9e;
                            -ms-flex-negative: 0;
                            flex-shrink: 0;
                            -webkit-transition: all .3s;
                            transition: all .3s;
                        }
                        span{
                            display: block;
                            margin-top: 2.5vw;
                            font-size: 3.6vw;
                            color: #333;
                        }
                        p{
                            color: #fff;
                            font-size: 1.6vw;
                            opacity: 0;
                            -webkit-transition: all .3s;
                            transition: all .3s;
                            margin-top: 1vw;
                            padding: 0 9px;
                        }
                    }
                }
            }
        }
        
        }  
        .projectCaseBox{
            padding: 6vw 3vw;
            background-image:url("https://qn.kemean.cn/upload/201809/06/dde8f4f8950f4f6b9f49d88077a439ac");
            background-position: bottom;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: auto 100%;    
            .caseBox{
                overflow:hidden;
               
                li{
                    width:100%;
                    display:flex;
                    flex-direction:column;
                    justify-content: flex-start;
                    align-items:flex-start;
                    border-radius:10px;
                    background:white;
                    margin:5vw 0;
                    overflow:hidden;
                    cursor: pointer;
                    .caseTop{
                        width:100%;
                        background-color: #d7e9f7;
                        box-sizing:border-box;
                        img{
                            width:100%;
                        }

                    }
                    .caseInfo{
                        padding:3vw; 
                        text-align:left;
                        h3{
                            font-size:5vw;
                            color:#333;
                        }
                        p{
                            margin-top:5px;
                            font-size:3.6vw;
                            color:#333;
                        }
                    }
                }
            }
        }
        .statisticsBox{
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                height: 70vw;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
             ul{
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                flex-wrap: wrap;
                li{
                    width: 50%;
                    text-align: center;
                    margin-bottom: 10vw;
                    span{
                        color: #345a9e;
                        font-size: 12vw;
                        line-height: 12vw;
                        position: relative;
                        em{
                            position: absolute;
                            font-size: 4vw;
                            top: -1.5vw;
                            right: -3vw;
                            font-weight: 700;
                            font-style: normal;
                        }
                    }
                    p{
                        font-size: 3.6vw;
                        color: #333;
                        font-weight: 700;
                        margin-top: 1vw;
                    }
                }
             }
        }
        .serviceProcessBox{
            padding: 6vw 0 2vw;
            background-image: url("https://qn.kemean.cn/upload/201809/06/b42cd46c01b948e89df59959599f5699");
            background-position: bottom;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: auto 100%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            .homeTitle{
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
            }
            .serviceProcess{
                margin-top: 8vw;
                .processList{
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    margin-bottom: 4vw;
                    padding: 0 7vw;
                    text-align:left;
                    .processIcon{
                        width: 26vw;
                        height: 26vw;
                        position: relative;
                        -ms-flex-negative: 0;
                        flex-shrink: 0;
                        margin-right: 4vw;
                        &::after{
                            content: "";
                            width: 100%;
                            height: 100%;
                            position: absolute;
                            background-color: rgba(0,0,0,.7);
                            border-radius: 50%;
                            background-position: 50%;
                            background-repeat: no-repeat;
                            background-size: 50% auto;
                            cursor: pointer;
                            -webkit-transition: all .6s;
                            transition: all .6s;
                        }
                        
                    }
                    .processInfo{
                            
                            span{
                                font-size: 5vw;
                                color: #fff;
                            }
                            p{
                                font-size: 3.6vw;
                                color: #fff;
                                margin-top: 3vw; 
                            }
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
        .teamPeople{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            margin-top: 8vw;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            border-bottom: 1px solid #ddd;
            padding-bottom: 1vw;
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
     .partnerBox{
        padding: 6vw 0;
        background-image:url("https://qn.kemean.cn/upload/201809/06/88b718e45e9543cda6601a79b6d64024");
        background-position: bottom;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: auto 100%;
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
        .partnerListBox{
            margin-top: 6vw;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            padding: 0 1vw;
            div{
                padding: 0 1.5vw;
                margin-bottom: 2vw;
                height: 15vw;
                img{
                        height: 100%;
                }
            }
        }
     }
     .contactUsBox{
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
            background-color: #fff;
            .demandText{
                margin-top: 3vw;
                text-align: center;
                padding: 0 2vw;
                span{
                    font-size: 4.2vw;
                    color: #345a9e;
                    font-weight: 700;
                }
                p{
                    font-size: 3.4vw;
                    color: #888;
                    margin-top: 2vw;
                }
            }
            .contactInputBox{
                margin-top: 6vw;
                width: 100%;
                padding: 0 3vw;
                box-sizing:border-box;
                .inputBox{
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-orient: vertical;
                    -webkit-box-direction: normal;
                    -ms-flex-direction: column;
                    flex-direction: column;
                    -webkit-box-pack: justify;
                    -ms-flex-pack: justify;
                    justify-content: space-between;
                    
                    input{
                        width: 100%;
                        height: 12vw;
                        border: 2px solid gray;
                        padding: 0 2vw;
                        margin-bottom: 3vw;
                        outline:none;
                        box-sizing:border-box;
                    }
                    
                }
                textarea{
                    width: 100%;
                    height: 40vw;
                    border: 2px solid gray;
                    padding: 2vw;
                    -ms-flex-negative: 0;
                    flex-shrink: 0;
                    outline:none;
                    box-sizing:border-box;
                }
            }
            .but{
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-pack: center;
                    -ms-flex-pack: center;
                    justify-content: center;
                    margin-top: 4vw;
                    button{
                        width: 34vw;
                        height: 10vw;
                        background-color: #345a9e;
                        border-radius: 1vw;
                        font-size: 3.8vw;
                        color: #fff;
                        outline:none;
                    }
            }
     }
}

</style>
