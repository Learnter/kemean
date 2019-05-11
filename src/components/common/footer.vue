<template>
    <section class="buttomBox">
        <div class="logo"></div>   
        <div  class="companyInfo">
            <div  class="contact">
                <div>
                    <i  class="iconfont">&#xe641;</i> 807730307@qq.com</div>
                <div>
                    <i class="iconfont">&#xe686;</i> 广东省深圳市西乡街道宝安智谷科技园H栋406-408</div>
                <div>
                    <i class="iconfont">&#xe601;</i> 0755-23005282</div>
            </div>
            <div  class="QRCode">
                <img  src="https://qn.kemean.cn/home/case/0180905205118.jpg">
                <p >扫一扫联系我们</p>
            </div>
        </div>        
        <div  class="case">CopyRight © 2015 KeMing Corporation, All Rights Reserved
            <a href="http://www.miibeian.gov.cn" target="_blank">粤ICP备14010883号</a> 
            深圳科名网络有限公司
        </div>

    </section>
</template>
<script>
export default {
    name:"buttomBox"
}
</script>
<style lang="scss" scoped>


.buttomBox {
    background-image: url(https://qn.kemean.cn/upload/201809/06/531f9cffe5034b2aab7613b0be788aad);
}

.logo {
     background-image: url(https://qn.kemean.cn/upload/201809/06/logo.png);
}

@media screen and (min-width:750px) {
    .buttomBox{
        width:100%;
        background-repeat: no-repeat;
        background-position: 50%;
        background-size:cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 30px 0;
        .logo{
            width: 189px;
            height: 50px;
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: 100% auto;
        }
       .companyInfo{
            padding: 30px 0 20px;
            display: flex;
            .contact{
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                div{
                    display: flex;
                    align-items: center;
                    font-size: 16px;
                    color: #888;
                    i{
                        color: #345a9e;
                        font-size: 23px;
                        margin-right: 10px;
                    }
                }
            }
            .QRCode{
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                margin-left: 10px;
                img{
                    width: 80px;
                    height: 80px;
                }
                p{
                    font-size: 16px;
                    color: hsla(0,0%,100%,.5);
                    margin-top: 10px;
                }
            }
        }
        .case{
            margin-top: 33px;
            text-align: center;
            font-size: 14px;
            color: hsla(0,0%,100%,.5);
        }
    }
}

@media screen and (max-width:750px){

    .buttomBox{    
      
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: 100% auto;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        background-size: auto 100%;
        padding: 5vw 0;     
        .logo{
            display: none;
            width: 46vw;
            height: 13vw;          
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: 100% auto;
        }
        .companyInfo{
            padding: 5vw 3vw 0;
            display: -ms-flexbox;
            display: flex;
            .contact{
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-pack: distribute;
                    justify-content: space-around;
                    -ms-flex-direction: column;
                    flex-direction: column;
                    div{
                            display: -ms-flexbox;
                            display: flex;
                            -ms-flex-align: center;
                            align-items: center;
                            font-size: 3.6vw;
                            color: #888;
                            text-align:left;
                            i{
                                color: #345a9e;
                                font-size: 5vw;
                                margin-right: 2vw;
                                
                            }
                    }
            }
            .QRCode{
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-pack: center;
                    justify-content: center;
                    -ms-flex-direction: column;
                    flex-direction: column;
                    -ms-flex-align: center;
                    align-items: center;
                    margin-left: 4vw;
                    img{
                        width: 80px;
                        height: 80px;
                    }
                    p{
                        font-size: 3.4vw;
                        color: hsla(0,0%,100%,.5);
                        margin-top: 2vw;
                        white-space: nowrap;
                    }
            }
        }
        .case{
                padding: 0 2vw;
                margin-top: 4vw;
                text-align: center;
                font-size: 3.4vw;
                color: hsla(0,0%,100%,.5);
                text-align:left;
                a{
                    text-decoration: underline;
                    color: hsla(0,0%,100%,.5);
                }
        }
     }
  }  
</style>
