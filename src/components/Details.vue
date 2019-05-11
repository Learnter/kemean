<template>
    <section class="detailsPage">

        <header-box></header-box>

        <section class="detailBox" :style="boxColor" >

            <div class="detailImg">
                <img :src="detailData.coverImg" alt="加载失败">
            </div>

            <div class="detailInfo">
                <div class="infoTips">
                    <div class="left">
                        <img :src="detailData.logo" alt="加载中">
                    </div>
                    <div class="right">
                        <p>{{detailData.name}}</p>
                        <span>{{detailData.industry}}</span>
                    </div>
                </div>
                
                <p>{{detailData.description}}</p>
                <div class="boxBottom" v-if="detailData.preview[0]">
                    <div>
                        <img :src="detailData.preview[0].img" alt="">
                    </div>
                    <p>{{detailData.preview[0].name}}</p>
                </div>
            </div>
            
        </section>

        <section class="imgsBox">
            <div class="titleShow" >
                <span :style="spanColor"></span>
                页面展示
            </div>
            <div class="imgList">
                <ul>
                    <li v-for="(item,index) in detailData.imgs" :key="index">
                        <img :src="item.url" alt="">
                    </li>
                </ul>
            </div>
        </section>

        <footer-box></footer-box>
    </section> 
</template>
<script>
import headerBox from '@/components/common/header';
import footerBox from '@/components/common/footer';
import { casesDtata } from '@/assets/json/cases.js';
export default {
    name:"detailsPage",
    data(){
        return {
            detailData:""
        }
    },
    created(){  
       this.propsData();
    },
    computed:{
         spanColor(){
            var color = this.detailData.deepColor;
             return "background-color:"+color;
         },
         boxColor(){
            var shallowColor = this.detailData.shallowColor; 
            var deepColor = this.detailData.deepColor;
            return "background:"+"linear-gradient(120deg ,"+ shallowColor+ ","+ deepColor+")";

         }
    },
    methods:{
        propsData(){
            var id = Number(this.$route.params.Id);
            this.detailData = casesDtata[id];
        }
    },
    components:{
        headerBox,
        footerBox
    }
}
</script>
<style lang="scss" scoped>

    @media screen and (min-width:750px) {
        .detailsPage{
            width:100%;
            background:#FFFFFF;
            .detailBox{
                width:100%;
                display:flex;
                height:50vw;
                justify-content:space-between;
                align-items:center;
                .detailImg{
                    width:50%;
                    height:100%;
                    box-sizing:border-box;
                    padding:8vw 3vw 0;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                .detailInfo{
                    width:50%;
                    height:100%;
                    display:flex;
                    flex-direction:column;
                    justify-content:space-between;
                    align-items:flex-start;
                    color:white;
                    padding:8vw 0 4vw;
                    box-sizing:border-box;
                    .infoTips{
                        width:100%;
                        height:80px;
                        display:flex;
                        .left{
                            height:100%;
                            margin-right:1vw;
                            img{
                                height:100%;
                            }
                        }
                        .right{
                            display:flex;
                            flex-direction:column;
                            justify-content:center;
                            align-items:flex-start;
                            p{
                                font-size:3.2vw;
                                margin-bottom:10px;
                            }
                            span{
                                font-size:1.8vw;
                            }
                        }
                    }
                    p{
                     font-size:2vw;
                     line-height:1.5;
                     text-align:left;
                    }
                    .boxBottom{
                        display:flex;
                        align-items:center;
                        position: relative;
                        &:hover{ 
                            div{
                                &::before{
                                    position: absolute;
                                    bottom:100%;
                                    left:50%;
                                    transform:translateX(-50%);
                                    content:"";
                                    display:inline-block;
                                    border-width: 0 10px 10px;
                                    border-style: solid;
                                    border-color: transparent transparent white;
                                }
                                width:100%;
                                display:block;
                                position:absolute;
                                top:140%;
                                background:white;
                                border-radius:8px;
                                img{
                                    width:100%;
                                    padding:0 5% 5%;
                                    box-sizing:border-box;
                                }
                            }
                        }
                        div{
                            display:none;
                        }
                        p{
                            font-size:20px;
                            width:150px;
                            display:flex;
                            justify-content:center;
                            align-items:center;
                            border:2px solid white;
                            border-radius:5px;
                            color:white;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
        .imgsBox{
            width:100%;
            box-sizing:border-box;
            padding:0 3vw 3vw;
            .titleShow{
                width:100%;
                height:100%;
                padding:2vw 0;
                display:flex;
                align-items:center;
                font-size: 30px;
                color: #333;
                span{
                    display: block;
                    width: 6px;
                    height: 30px;
                    border-radius: 3px;
                    margin-right: 20px;
                }
            }
            .imgList{
                ul{
                    display:flex;
                    justify-content:space-between;
                    flex-wrap:wrap;
                    li{
                        width:32%;
                        box-shadow: 0 0 15px 0 rgba(0,0,0,0.2);
                        img{
                            width:100%;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width:750px) {
        .detailsPage{
            background:#FFFFFF;
            .detailBox{
                width: 100%;
                padding: 10vw 5vw;
                box-sizing: border-box;
                overflow: hidden;
                color:white;
                .detailImg{
                    display:none;
                }
                .detailInfo{
                        display: flex;
                        flex-direction:column;
                        justify-content:space-between;
                        width: 100%;
                        .infoTips{
                            display:flex;
                            width:100%;
                            height:80px;
                            padding: 2vw 0;
                            box-sizing:border-box;
                            .left{
                                height: 100%;
                                box-sizing: border-box;
                                margin-right:2vw;
                                img{
                                    height:100%;
                                }
                            }
                            .right{
                                display:flex;
                                flex-direction:column;
                                justify-content:space-between;
                                text-align:left;
                                p{
                                    font-size: 5vw;
                                    margin-bottom:1vw;
                                }
                            }
                       }    
                p{
                     text-align: left;
                     line-height:180%;
                     font-size:4.5vw;
                 }  
                .boxBottom{
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                        margin-top: 2vw;
                        div{
                            width: 100%;
                            height: 30vw;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin-bottom: 2vw;
                            img{
                                height:100%;
                            }
                        }
                    }    
                }
             }
                 
            .imgsBox{
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    padding:5vw 2vw;
                    box-sizing:border-box;
                    .titleShow{
                            display: flex;
                            align-items: center;
                            font-size: 4vw;
                            color: #333;
                            span{
                                display: block;
                                width: 6px;
                                height: 30px;
                                border-radius: 3px;
                                margin-right: 20px;
                            }
                        
                    }
                    .imgList{
                        width: 100%;
                        box-sizing: border-box;
                        margin-top:3vw;
                        ul{
                            display: flex;
                            flex-direction: column;
                            li{
                                width:100%;
                                box-shadow: 0 0 15px 0 rgba(0,0,0,.2);
                                margin-bottom:5vw;
                                overflow: hidden;
                                img{
                                    width:100%;
                                }
                            }
                        }
                    }
               }
         }
    }

</style>
