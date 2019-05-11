<template>
    <section class="casesPage">
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

        <section class="casesList">
            <ul>
                <li v-for="(item,index) in casesData" :key="index">
                    <div class="listImage">
                        <img :src="item.coverImg"></img>
                    </div>
                    <div class="casesDetail">
                        <div class="buttonBox">
                            <button v-if="item.preview[0]">
                                扫码下载 
                                <div>
                                    <img :src="item.preview[0].img" alt="加载失败">
                                    <span>{{item.preview[0].name}}</span>
                                </div>
                                
                            </button>
                            <button @click.prevent = "toggleDetail(item,index)">查看详情</button>  
                        </div>
                        <p>{{item.description}}</p>
                        <div class="contentBox">
                            <div class="boxLeft">
                                <div class="logoImg" v-if="item.logo">
                                    <img :src="item.logo"></img>
                                </div>
                                <div>
                                    <h2>{{item.name}}</h2>
                                    <span>{{item.industry}}</span>
                                </div>
                            </div>
                            <button @click.prevent = "toggleDetail(item,index)">查看详情</button>
                        </div>
                    </div>
                </li>
            </ul>
        </section>

        <section class="parentBox">
            <ul>
                <li v-for="(item,index) in partnerList" :key="index">
                    <img :src="item.src" alt="合作伙伴">
                </li>
            </ul>
        </section>
    
        <section class="partentSaid">
             <swiper class="mod-banner-scroll" :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide>   
                    <div class="saidList">
                        <p>我决定把项目交付给科名，是因为在项目的需求整理和报价的过程中他们团队展示出的专业性，而且市场团队和技术团队非常有耐心的回答了我提出的各种问题。</p>
                        <span>合作伙伴如是说</span>
                    </div>
                </swiper-slide>
                <swiper-slide>   
                    <div class="saidList">
                        <p>我决定把项目交付给科名，是因为在项目的需求整理和报价的过程中他们团队展示出的专业性，而且市场团队和技术团队非常有耐心的回答了我提出的各种问题。</p>
                        <span>合作伙伴如是说</span>
                    </div>
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
            
        </section>

        <footer-box></footer-box>
    </section>
</template>
<script>
import headerBox from '@/components/common/header';
import footerBox from '@/components/common/footer';
import {casesDtata, parentnerBox} from '@/assets/json/cases.js';

export default {
    name: "casesPage",
    data() {
        return {
            toggleId: 0,
            bannerInfo: { title: "案例展示", details: "我们追求极致的用户体验,与合作伙伴共同成长" },
            toggleInfo: [{ id: 0, name: "全部", type: 1001 }, { id: 1, name: "公众号", type: 1401 }, { id: 2, name: "小程序", type: 1301 }, { id: 3, name: "APP", type: 1201 }],
            casesData:'',
            partnerList:parentnerBox,
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                },
                autoplay: {
                    delay: 3000
                },
                loop: true,
                lazy: {
                    loadPrevNext: true,
                }
            },
        }
    },
    created() {
        this.casesData = casesDtata;
    },
    methods: {
        activedTab(tabV) {
            switch (tabV.type) {
                case 1201:
                this.casesData = casesDtata.filter( item => {
                      return item.casesType == 1201;
                    }) 
                    break;
                case 1301:
                this.casesData = casesDtata.filter( item => {
                       return item.casesType == 1301;
                    })
                    break;
                case 1401:
                this.casesData = casesDtata.filter( item => {
                       return item.casesType == 1401;
                    })
                    break;
            
                default:
                this.casesData = casesDtata;
                    break;
            }
        },
        toggleDetail(item,index){
  
            if ( item && item.detailsUrl == 0) {
                //没外链的跳转到详情页面
                this.$router.push({ path: "/details/" + index });

            } else if ( item && item.detailsUrl !== 0) {

                //有外链的打开另外窗口进行跳转
                var href = item.detailsUrl;
                window.open(href, "_blank");
            } 
        }
    },
    components: {
        headerBox,
        footerBox
    }
}
</script>
<style lang="scss" scoped>
.banner {
    background-image: url("https://qn.kemean.cn/upload/201809/07/3d4059a57c2d4b26bcbb015e90e4686d");
}

@media screen and (min-width:750px) {
       .casesPage{
           background:#EEEEEE;
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
                background:white;
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
            .casesList{
                width:100%;
                ul{
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    li{
                        width:100%;
                        display:flex;
                        justify-content:space-between;
                        align-items:flex-end;
                        margin-top:50px;
                        &:nth-child(2n){
                            flex-direction:row-reverse;
                        }
                        .listImage{
                            width:50vw;
                            flex-shrink:0;
                            display:flex;
                            align-items:flex-end;
                            img{
                               max-width:100%;
                            }
                        }
                        .casesDetail{
                            display:flex;
                            flex-direction:column-reverse;
                            justify-content:space-between;
                            .buttonBox{
                                display:flex;
                                margin-top:2vw;
                                padding-bottom:2vw;
                                button{
                                    width: 15vw;
                                    height: 5vw;
                                    border-radius: .6vw;
                                    font-size: 2.2vw;
                                    color: #fff;
                                    outline:none;
                                    border:none;   
                                    cursor: pointer;
                                    &:nth-child(1){
                                        background:#529eff;
                                        position: relative;
                                        div{
                                            display:none;
                                            position: absolute;
                                            top:120%;
                                            box-sizing:border-box;
                                            padding:10px;
                                            background:white;
                                            border-radius:0.6vw;
                                            &::before{
                                                content:"";
                                                display:block;
                                                position:absolute;
                                                bottom:100%;
                                                left:50%;
                                                transform:translateX(-50%);
                                                border-width:10px;
                                                border-style:solid;
                                                border-color:transparent transparent #529eff;
                                            }
                                            img{ 
                                                width:100%;
                                                height:auto;
                                            }
                                            span{
                                                font-size:1vw;
                                                color:black;
                                            }
                                        }
                                        
                                        &:hover{
                                            div{
                                                display:block;
                                            }
                                        }
                                    }                               
                                    &:nth-child(2){
                                        background:#345a9e;
                                        margin-left:2vw;
                                    }                               
                                }
                            }
                            .contentBox{
                                display:flex;
                                justify-content:space-between;
                                align-items:center;
                                button{
                                    display:none;
                                }
                                .boxLeft{
                                    height:100%;
                                    display:flex;
                                    justify-content:flex-start;
                                    .logoImg{
                                        box-shadow: 0 10px 10px  rgba(0,0,0,0.1);
                                    }
                                    div{
                                        margin-right:2vw;
                                        display:flex;
                                        flex-direction:column;
                                        justify-content:center;
                                        overflow: hidden;
                                        text-align:left;
                                        img{
                                            width:8vw;
                                            height:8vw;
                                            display:block;
                                        }
                                        h2{
                                            font-size: 3.4vw;
                                            color: #333;
                                            margin-bottom:1vw;
                                        }
                                        span{
                                            font-size: 2.2vw;
                                            color: #333;
                                        }
                                    }
                                }
                                button{
                                    width:150px;
                                    font-size:20px;
                                    cursor: pointer;
                                    height:35px;
                                    border:none;
                                    outline:none;
                                    background:#345a9e;
                                    color:white;
                                    border-radius:10px;
                                }
                            }
                            p{
                                margin-top:2vw;
                                width: 40vw;
                                line-height: 170%;
                                font-size: 1.6vw;
                                color: #666;
                                text-align:left;
                            }
                        }
                    }
                }
            }
            .parentBox{
                box-sizing:border-box;
                padding:30px;
                background:white;
                ul{
                    display:flex;
                    justify-content:space-between;
                    flex-wrap:wrap;
                    li{
                        margin-right:30px;
                        img{
                            width:100%;
                            height:100%;
                        }
                    }
                }
            }
            .partentSaid{
                width:100%;
                height:20vw;
                display:flex;
                justify-content: center;
                align-items:center;
                .mod-banner-scroll{
                    .saidList{
                        display:flex;
                        flex-direction:column;
                        justify-content: center;
                        p{
                        margin-bottom:20px;
                        }
                        span{
                            font-size:20px;
                            color:black;
                            font-weight:700;
                        }
                    }
                   .swiper-pagination{
                       display:flex;
                       justify-content: center;
                       align-items:center;
                   } 
                }
            }
       }
 }

@media screen and (max-width:750px) {
    .casesPage {
        background:#EEEEEE;
        .banner {
            width: 100%;
            height: 50vw;
            background-attachment: fixed;
            background-repeat: no-repeat;
            background-size: 100% 50vw;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            span {
                font-size: 7vw;
            }
            p {
                margin-top: 10px;
            }
        }
    }
    .toggleBox {
        height: 13vw;
        box-shadow: 0 0 1px #999999;
        ul {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 100%;
            background: #FFFFFF;
            color: #999999;
            margin: 0;
            font-size: 4vw;
            li {
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }
            .current {
                border-bottom: 3px solid #345a9e;
                color: #345a9e;
                font-size: calc(110%);
            }
        }
    }
    .casesList{
        width:100%;
        ul{
            display:flex;
            flex-direction:column;
            li{
                display: flex;
                flex-direction:column;
                overflow: hidden;
                margin-top:10vw;
                .listImage{
                   width:100%;
                   img{
                       width:100%;
                   }
                }
                .casesDetail{
                    width:100%;
                    padding:2vw 2vw 4vw;
                    box-sizing:border-box;
                    background:white;
                    .buttonBox{
                        display:none;
                    }
                    p{
                        text-align:left;
                        line-height:180%;
                        margin-bottom:3vw;
                    }
                    .contentBox{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .boxLeft{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            .logoImg{
                                    width: 15vw;
                                    height: 15vw;
                                    box-shadow: 0 0 10px 0 rgba(0,0,0,.1);
                                    margin-right: 2vw;
                                    border-radius:1vw;
                                img{
                                    width:100%;
                                    height:100%;
                                }
                            }
                            div{
                                text-align: left;
                                h2{
                                        font-size: 5vw;
                                        font-weight: 700;
                                        color: black;
                                        margin-bottom: 2vw;
                                }
                                span{
                                    font-size:3.5vw;
                                }
                            }
                        }
                    } 
                    button{
                        width: 24vw;
                        height: 9vw;
                        border-radius: 1vw;
                        font-size: 4vw;
                        color: #fff;
                        background-color: #345a9e;
                        border:none;
                        outline: none;
                        cursor: pointer;
                    }       
                }
            }
        }
    }
    .parentBox{
        width:100%;
        background:#FFFFFF;
        margin-top:4vw;
        overflow: hidden;
        ul{
            display:flex;
            flex-wrap:wrap;
            justify-content:space-between;
            margin:0 2vw;
            li{
                width:49%;
                height:22vw;
                display:flex;
                justify-content:center;
                align-items:center;
                margin-bottom:5vw;
                img{
                    max-width:100%;
                    max-height:100%;
                }
            }
        }
    }
    .partentSaid{
        width:100%;
        background-color: #f4f4f4;
        padding: 8vw 0;
        .mod-banner-scroll{
            .swiper-slide{
                .saidList{
                    width:100%;
                    box-sizing:border-box;
                    padding:0 2vw;
                    p{
                            font-size: 3.6vw;
                            color: #333;
                            text-align: center;
                            padding: 0 2vw;
                            margin-bottom:2vw;
                    }
                    span{
                            font-size: 3.6vw;
                            color: #333;
                            font-weight: 700;
                    }
                }
            }
        }
    }
}
</style>