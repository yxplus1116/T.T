<template>
  <header>
    <div id="header">
      <div class="nav-global">
        <div class="container">
          <h1 class="nav-logo">
            <a href="javascript:;"></a>
          </h1>
          <ul class="nav-aside">
            <li class="nav-user">
              <a href="javascript:;">个人中心</a>
              <!--active-->
              <div class="nav-user-wrapper">
                <div class="nav-user-list">
                  <dl class="nav-user-avatar">
                    <dd>
                      <span class="ng-scope"></span>
                    </dd>
                    <dt class="ng-binding">+86 138****9453</dt>
                  </dl>
                  <ul>
                    <router-link tag="li" :to="{name:'Order'}" class="order">
                      <a href="javascript:;">我的订单</a>
                    </router-link>
                    <li class="support">
                      <a href="javascript:;">售后服务</a>
                    </li>
                    <li class="coupon">
                      <a href="javascript:;">我的优惠</a>
                    </li>
                    <li class="information">
                      <a href="javascript:;">账户资料</a>
                    </li>
                    <router-link tag="li" :to="{name:'Adress'}" class="address">
                      <a href="javascript:;">收货地址</a>
                    </router-link>
                    <li class="logout">
                      <a href="javascript:;">退出</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <!--active-->
            <router-link tag="li" :to="{name:'Cart'}" class="nav-cart">
              <a href="javascript:;">购物车</a>
              <!--根据class改变颜色-->
              <span class="cart-empty-num cart-num">
                <i>0</i>
              </span>
              <div class="nav-cart-wrapper">
                <div class="nav-cart-list">
                  <div class="empty">
                    <h3>购物车为空</h3>
                    <p>您还没有选购任何商品，现在前往商城选购吧!</p>
                  </div>
                  <!-- <div class="full">
                    <div class="nav-cart-items">
                      <ul>
                        <li class="clear">
                          <div class="cart-item js-cart-item cart-item-sell">
                            <div class="cart-item-inner">
                              <div class="item-thumb">
                                <img src="../../assets/img/goods/1.png">
                              </div>
                              <div class="item-desc">
                                <div class="cart-cell">
                                  <h4>
                                    <a href="#/item/100027401">坚果 Pro 钢化玻璃保护膜（前屏用）</a>
                                  </h4>
                                  <p class="attrs">
                                    <span>透明</span>
                                  </p>
                                  <h6>
                                    <span class="price-icon">¥</span>
                                    <span class="price-num">49</span>
                                    <span class="item-num">x 1</span>
                                  </h6>
                                </div>
                              </div>
                              <div class="del-btn">删除</div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="nav-cart-total">
                      <p>
                        共
                        <strong class="ng-binding">1</strong> 件商品
                      </p>
                      <h5>
                        合计：
                        <span class="price-icon">¥</span>
                        <span class="price-num ng-binding" ng-bind="cartMenu.totalPrice">49</span>
                      </h5>
                      <h6>
                        <a
                          ng-href="http://www.smartisan.com/shop/#/cart"
                          class="nav-cart-btn"
                          href="http://www.smartisan.com/shop/#/cart"
                        >去购物车</a>
                      </h6>
                    </div>
                  </div> -->
                </div>
              </div>
            </router-link>
          </ul>
          <ul class="nav-list">
            <li>
              <a href="javascript:;">在线商城</a>
            </li>
            <li>
              <a href="javascript:;">坚果 Pro</a>
            </li>
            <li>
              <a href="javascript:;">Smartisan M1 / M1L</a>
            </li>
            <li>
              <a href="javascript:;">Smartisan OS</a>
            </li>
            <li>
              <a href="javascript:;">欢喜云</a>
            </li>
            <li>
              <a href="javascript:;">应用下载</a>
            </li>
            <li>
              <a href="javascript:;">官方论坛</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="nav-sub">
        <div class="nav-sub-wrapper">
          <div class="container">
            <ul class="nav-list">
              <router-link tag="li" :to="{name:'Index'}">
                <a href="javascript:;">首页</a>
              </router-link>
              <li>
                <a href="javascript:;">手机</a>
              </li>
              <li>
                <a href="javascript:;">“足迹系列”手感膜</a>
              </li>
              <li>
                <a href="javascript:;">官方配件</a>
              </li>
              <li>
                <a href="javascript:;">周边产品</a>
              </li>
              <li>
                <a href="javascript:;">第三方配件</a>
              </li>
              <li>
                <a href="javascript:;">全部商品</a>
              </li>
              <li>
                <a href="javascript:;">服务</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav-global {
  height: 100px;
  background-color: #000;
}

.container {
  height: 100%;
  width: 1220px;
  margin: 0 auto;
}

/*logo*/

.nav-logo {
  float: left;
  padding-top: 25px;
}

.nav-logo a {
  display: inline-block;
  width: 50px;
  height: 50px;
  background: url(../../assets/img/global-logo.png) no-repeat;
  background-size: cover;
}

/*导航*/

.nav-global .nav-list {
  float: left;
  line-height: 28px;
  margin: 36px 23px 0 0;
}

.nav-global .nav-list li {
  float: left;
}

.nav-global .nav-list a {
  color: #c8c8c8;
  display: inline-block;
  font-size: 14px;
  padding: 0 25px;
}

.nav-global .nav-list a:hover {
  color: #fff;
}

.nav-aside {
  box-sizing: border-box;
  float: right;
  margin-top: 38px;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
}

.nav-aside > li {
  position: relative;
  float: left;
}

.nav-aside > li > a {
  font-size: 0;
}

/*用户列表*/

.nav-user {
  margin-left: 40px;
  width: 36px;
}

.nav-user > a:before {
  content: " ";
  position: absolute;
  left: 8px;
  width: 20px;
  top: 0;
  height: 20px;
  background: url(../../assets/img/account-icon.png) -155px 0;
  background-size: 240px 107px;
  transition: none;
}

.nav-user:hover > a:before {
  background-position: -5px 0;
}

.nav-user-wrapper {
  position: absolute;
  z-index: 30;
  padding-top: 18px;
  opacity: 0;
  visibility: hidden;
  top: -3000px;
  width: 168px;
  left: 50%;
  margin-left: -70px;
}

.nav-user:hover .nav-user-wrapper {
  top: 18px;
  visibility: visible;
  opacity: 1;
  transition: opacity 0.15s ease-out;
}

.nav-user-list {
  position: relative;
  width: 168px;
  padding-top: 20px;
  background: #fff;
  border: 1px solid #d6d6d6;
  border-color: rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.nav-user-list:before {
  position: absolute;
  content: " ";
  background: url(../../assets/img/account-icon.png) no-repeat -49px -43px;
  background-size: 240px 107px;
  width: 20px;
  height: 8px;
  left: 50%;
  top: -8px;
  margin-left: -25px;
}

.nav-user-avatar > dd {
  display: block;
  position: relative;
  margin: 0 auto;
  width: 46px;
  height: 46px;
  margin-bottom: 8px;
}

.nav-user-avatar > dd:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06);
}

.nav-user-avatar span {
  border-radius: 50%;
  display: block;
  width: 100%;
  height: 100%;
  background: url(../../assets/img/user-avatar.png) no-repeat;
  background-size: contain;
}

.nav-user-avatar dt {
  margin-bottom: 16px;
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
  color: #757575;
}

.nav-user-list li a {
  position: relative;
  border-top: 1px solid #f5f5f5;
  display: block;
  padding-left: 54px;
  line-height: 44px;
  height: 44px;
  color: #616161;
  font-size: 12px;
}

.nav-user-list li a:hover {
  background-color: #fafafa;
}

.nav-user-list li a:before {
  background: url(../../assets/img/account-icon.png) no-repeat;
  background-size: 240px 107px;
  content: " ";
  display: block;
  position: absolute;
  left: 22px;
  top: 50%;
  width: 20px;
  height: 20px;
  margin-top: -8px;
}

.nav-user-list li.order a:before {
  background-position: 0 -44px;
}

.nav-user-list li.support a:before {
  background-position: -20px -44px;
}

.nav-user-list li.coupon a:before {
  background-position: -20px -84px;
}

.nav-user-list li.information a:before {
  background-position: 0 -64px;
}

.nav-user-list li.address a:before {
  background-position: -20px -64px;
}

.nav-user-list li.logout a:before {
  background-position: 0 -84px;
}

/*购物车*/

.nav-cart {
  margin-left: 21px;
  width: 61px;
}

.nav-cart > a {
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
}

.nav-cart > a:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 30px;
  height: 20px;
  background: url(../../assets/img/account-icon.png) -150px -22px;
  background-size: 240px 107px;
}

.nav-cart:hover > a:before {
  background-position: 0 -22px;
}

.cart-empty-num {
  position: relative;
  margin-left: 31px;
  margin-top: -1px;
  min-width: 30px;
  text-indent: 0;
  line-height: 20px;
}

.cart-empty-num i {
  font-style: normal;
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 10px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background: #969696;
  background-image: linear-gradient(#a4a4a4, #909090);
  box-shadow: inset 0 0 1px #838383, 0 1px 2px #838383;
}

.cart-num i {
  background: #eb746b;
  background-image: linear-gradient(#eb746b, #e25147);
  box-shadow: inset 0 0 1px rgba(255, 255, 255, 0.15),
    0 1px 2px rgba(255, 255, 255, 0.15);
}

.nav-cart-wrapper {
  display: none;
  position: absolute;
  right: 0;
  padding-top: 18px;
  z-index: 30;
  width: 360px;
}

.nav-cart-wrapper:before {
  position: absolute;
  content: " ";
  background: url(../../assets/img/account-icon.png) no-repeat -49px -43px;
  -webkit-background-size: 240px 107px;
  background-size: 240px 107px;
  width: 20px;
  height: 8px;
  right: 34px;
  top: 10px;
  z-index: 11;
}

.nav-cart.active .nav-cart-wrapper {
  display: block;
  top: 18px;
  opacity: 1;
  visibility: visible;
}

.nav-cart-list {
  position: relative;
  z-index: 10;
  background: #fff;
  border: 0 solid rgba(255, 255, 255, 0.01);
  border-radius: 8px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06), 0 20px 40px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

.nav-cart-list .empty {
  overflow: hidden;
  height: 134px;
  padding-top: 180px;
  background: url(../../assets/img/cart-empty.png) center 90px no-repeat;
  background-size: auto 62px;
  text-align: center;
}

.nav-cart-list .empty h3 {
  font-size: 18px;
  color: #333;
  margin-bottom: 7px;
}

.nav-cart-list .empty p {
  font-size: 12px;
  color: #bcbcbc;
}

.nav-cart-list .full {
  border-radius: 8px;
  overflow: hidden;
}

.nav-cart-list .nav-cart-items {
  max-height: 665px;
  overflow-x: hidden;
  overflow-y: auto;
}

.nav-cart-list .cart-item {
  height: 120px;
  width: 100%;
  overflow: hidden;
  border-top: 1px solid #f0f0f0;
}

.nav-cart-list .cart-item:first-child {
  border-top: none;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
}

.nav-cart-list .cart-item-inner {
  height: 80px;
  padding: 20px;
  position: relative;
}

.nav-cart-list .item-thumb {
  position: relative;
  float: left;
  width: 80px;
  height: 80px;
  border-radius: 3px;
}

.nav-cart-list .item-thumb:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
  border: 1px solid #f0f0f0;
  border: 0 solid transparent;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06);
  border-radius: 3px;
}

.nav-cart-list .item-thumb img {
  display: block;
  width: 80px;
  height: 80px;
  border-radius: 3px;
  overflow: hidden;
}

.nav-cart-list .item-desc {
  margin-left: 98px;
  display: table;
  width: 205px;
  height: 80px;
}

.nav-cart-list .cart-cell {
  display: table-cell;
  vertical-align: middle;
}

.nav-cart-list .item-desc h4,
.nav-cart-list .item-desc h4 a {
  color: #000;
}

.nav-cart-list .item-desc h4 {
  width: 185px;
  overflow: hidden;
  word-break: keep-all;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 10px;
}

.nav-cart-list .item-desc .attrs {
  font-size: 0;
}

.nav-cart-list .item-desc .attrs span {
  position: relative;
  */display: inline-block;
  margin-right: 20px;
  font-size: 14px;
  line-height: 14px;
  color: #999;
}

.nav-cart-list .item-desc .attrs span:last-child {
  margin-right: 0;
}

.nav-cart-list .item-desc h6 {
  color: #cacaca;
  font-size: 12px;
  line-height: 14px;
  margin-top: 20px;
}

.nav-cart-list .del-btn {
  cursor: pointer;
  display: none;
  overflow: hidden;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 20px;
  top: 50%;
  margin-top: -11px;
  background: url(../../assets/img/account-icon.png) -50px -60px no-repeat;
  background-size: 240px 107px;
  text-indent: -9999em;
}

.nav-cart-list .cart-item:hover .del-btn {
  display: block;
}

.nav-cart-list .del-btn:hover {
  background-position: -75px -60px;
}

.nav-cart-list .nav-cart-total {
  position: relative;
  padding: 20px;
  height: 40px;
  background: #fafafa;
  border-top: 1px solid #f0f0f0;
  border-radius: 0 0 8px 8px;
  box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.5),
    0 -3px 8px rgba(0, 0, 0, 0.04);
  background: linear-gradient(#fafafa, #f5f5f5);
}

.nav-cart-list .nav-cart-total p {
  margin-bottom: 4px;
  line-height: 16px;
  font-size: 12px;
  color: #c1c1c1;
}

.nav-cart-list .nav-cart-total h5 {
  line-height: 20px;
  font-size: 14px;
  color: #6f6f6f;
}

.nav-cart-list .nav-cart-total h5 span {
  font-size: 18px;
  color: #de4037;
  display: inline-block;
  font-weight: 700;
}

.nav-cart-list .nav-cart-total h5 span:first-child {
  font-size: 12px;
  margin-right: 5px;
}

.nav-cart-list .nav-cart-total h5 span {
  font-size: 18px;
  color: #de4037;
  display: inline-block;
  font-weight: 700;
}

.nav-cart-list .nav-cart-total h6 {
  position: absolute;
  right: 20px;
  top: 20px;
  width: 108px;
}

.nav-aside .nav-cart-btn {
  display: block;
  height: 38px;
  background: #688fe8;
  background: linear-gradient(#688fe8, #5079e1);
  border: 1px solid #5c81e3;
  border-radius: 6px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 3px rgba(0, 0, 0, 0.2);
  line-height: 38px;
  text-align: center;
  color: #fff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.15);
}

/*次导航*/

.nav-sub {
  position: relative;
  z-index: 20;
  height: 90px;
}

.nav-sub-wrapper {
  padding: 31px 0;
  height: 28px;
  position: relative;
}

.nav-sub .nav-list {
  float: left;
  height: 28px;
  line-height: 28px;
}

.nav-sub .nav-list li {
  position: relative;
  float: left;
  padding-left: 2px;
}

.nav-sub .nav-list li:first-child {
  padding-left: 0;
}

.nav-sub .nav-list li:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 13px;
  width: 2px;
  height: 2px;
  background: #bdbdbd;
}

.nav-sub .nav-list li:first-child:before {
  display: none;
}

.nav-sub .nav-list li a {
  display: block;
  padding: 0 20px;
  color: #666;
}

.nav-sub .nav-list li:first-child a {
  padding-left: 10px;
}

.nav-sub .nav-list li.active a {
  font-weight: 700;
}

.nav-sub .nav-list li a:hover {
  color: #6b95ea;
}
</style>
