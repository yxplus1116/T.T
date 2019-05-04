<template>
  <div class="account-content">
    <div class="account-order">
      <div class="gray-box">
        <div class="title columns-title pre-title">
          <h2>我的订单</h2>
          <div class="gray-btn-menu sort-status-menu">
            <span class="label">
              <i class="arrow"></i> 全部状态
            </span>
            <ul class="menu-list">
              <li class="selected">
                <a href="javascript:;">全部状态</a>
              </li>
              <li class>
                <a href="javascript:;">未完成</a>
              </li>
              <li class>
                <a href="javascript:;">已完成</a>
              </li>
              <li class>
                <a href="javascript:;">已关闭</a>
              </li>
            </ul>
          </div>
          <div class="gray-btn-menu sort-time-menu -gray-btn-menu-on">
            <span class="label">
              <i class="arrow"></i> 最近三个月
            </span>
            <ul class="menu-list">
              <li class="selected">
                <a href="javascript:;">最近三个月</a>
              </li>
              <li class>
                <a href="javascript:;">今年内</a>
              </li>
              <li class>
                <a href="javascript:;">2016年</a>
              </li>
              <li class>
                <a href="javascript:;">2015年</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="js-list-inner">
          <div class="box-inner order-cart order-list-cart clear">
            <div class="gray-sub-title cart-title">
              <span class="date">2017-06-19</span>
              <span class="order-id">
                订单号：
                <a href="javascript:;">170619703723305</a>
              </span>
              <span class="order-detail">
                <a href="javascript:;">查看详情&gt;</a>
              </span>
              <span class="sub-total">应付总额</span>
              <span class="num">数量</span>
              <span class="price">单价</span>
            </div>
            <div class="cart">
              <div class="cart-items clear">
                <div class="prod-info clear">
                  <div class="items-thumb">
                    <a href="javascript:;" target="_blank">
                      <img
                        src="http://image.smartisanos.cn/resource/3802197aa7e78f9429eb5f6048a25047.jpg?x-oss-process=image/resize,w_80/quality,Q_100/format,webp"
                      >
                    </a>
                  </div>
                  <div class="items-params clear">
                    <div class="name vh-center">
                      <a
                        href="javascript:;"
                        target="_blank"
                        title="坚果 Pro 钢化玻璃手感膜 开孔 (后壳用)（黑色）"
                      >坚果 Pro 钢化玻璃手感膜 开孔 (后壳用)（黑色）</a>
                    </div>
                    <div class="detail"></div>
                  </div>
                  <div class="num">1</div>
                  <div class="price">¥ 49.00</div>
                </div>
              </div>
              <div class="cart-items clear">
                <div class="prod-info clear">
                  <div class="items-thumb">
                    <a href="javascript:;" target="_blank">
                      <img
                        src="http://image.smartisanos.cn/resource/3802197aa7e78f9429eb5f6048a25047.jpg?x-oss-process=image/resize,w_80/quality,Q_100/format,webp"
                      >
                    </a>
                  </div>
                  <div class="items-params clear">
                    <div class="name vh-center">
                      <a
                        href="javascript:;"
                        target="_blank"
                        title="坚果 Pro 钢化玻璃手感膜 开孔 (后壳用)（黑色）"
                      >坚果 Pro 钢化玻璃手感膜 开孔 (后壳用)（黑色）</a>
                    </div>
                    <div class="detail"></div>
                  </div>
                  <div class="num">1</div>
                  <div class="price">¥ 49.00</div>
                </div>
              </div>
            </div>
            <div class="prod-operation">
              <div class="total">¥ 297.00</div>
              <div class="status">
                <router-link :to="{name:'Cart'}" class="blue-small-btn js-payment-order">现在付款</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.account-order .gray-box {
  margin-bottom: 20px;
}
.gray-box .columns-title h2 {
  float: left;
}
.gray-btn-menu {
  display: inline-block;
  height: 36px;
  background: #f2f2f2;
  background: linear-gradient(#fff, #f5f5f5);
  border: 1px solid #dbdde2;
  border-radius: 4px;
  line-height: 36px;
  cursor: pointer;
  text-align: center;
  user-select: none;
}
.account-order .sort-status-menu {
  width: 112px;
}
.gray-box .title .gray-btn-menu,
.gray-box .title span.gray-normal-btn {
  margin: 10px 0 0 10px;
}
.gray-box .title .gray-btn-menu {
  overflow: visible;
  float: right;
}
.gray-btn-menu .label {
  position: relative;
  z-index: 1;
  display: block;
  padding: 0 13px 0 16px;
  text-align: left;
  color: #666;
}
.gray-box .title .gray-btn-menu .label {
  overflow: visible;
  float: none;
  margin-top: 0;
}
.gray-btn-menu .label .arrow {
  float: right;
  width: 10px;
  height: 7px;
  margin: 16px 0 0 6px;
  background: url(../../../assets/img/btn-icon-new.png) -15px -571px no-repeat;
}
.gray-btn-menu .menu-list {
  display: none;
  position: absolute;
  right: -1px;
  top: -1px;
  width: 100%;
  padding: 38px 0 6px;
  background: #fff;
  border: 1px solid #dbdde2;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 #eee;
}
.gray-btn-menu-on .menu-list,
.white-btn-menu-on .menu-list {
  display: block;
}
.gray-btn-menu .menu-list li {
  height: 24px;
  line-height: 24px;
  padding: 0 3px 3px;
  text-align: left;
  font-size: 12px;
}
.gray-btn-menu .menu-list li a {
  display: block;
  padding: 0 15px;
  border-radius: 3px;
  color: #999;
}
.gray-btn-menu .menu-list li a:hover {
  background: #c7c7ca;
  color: #fff;
}
.gray-btn-menu .menu-list li.selected a {
  background: #8f9096;
  color: #fff;
  cursor: default;
}
.account-order .sort-time-menu {
  width: 118px;
}
.gray-btn-menu-on .label .arrow,
.white-btn-menu-on .label .arrow {
  margin-top: 15px;
  background-position: -15px -521px;
}
.gray-btn-menu-on,
.white-btn-menu-on {
  position: relative;
  z-index: 10;
  height: auto;
  background: #fff;
}
.gray-btn-menu-on {
  border: 1px solid #dbdde2;
}
.gray-box,
.gray-btn-menu-on:hover {
  background: #fff;
}
.gray-box .gray-sub-title {
  height: 38px;
  padding: 0 24px;
  background: #eee;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
  line-height: 38px;
  font-size: 12px;
  color: #666;
}
.account-order .gray-box .box-inner:first-child .gray-sub-title {
  border-top: none;
}
.order-list-cart .cart-title span {
  float: right;
  text-align: center;
}
.order-list-cart .cart-title .operation,
.order-list-cart .cart-title .order-detail,
.order-list-cart .cart-title .sub-total {
  float: right;
}
.order-list-cart .cart-title .date,
.order-list-cart .cart-title .order-id {
  float: left;
  text-align: left;
}
.order-list-cart .cart-title .date {
  width: 108px;
  padding-left: 6px;
}
.order-list-cart .cart-title .order-detail {
  width: 82px;
  padding-left: 24px;
  text-align: center;
}
.order-list-cart .cart-title .sub-total {
  width: 102px;
  padding-right: 18px;
  border-left: 1px solid #dbdbdb;
  text-align: right;
}
.order-list-cart .cart-title .operation {
  width: 95px;
  height: 38px;
  padding-right: 23px;
}
.order-list-cart .cart-title .num {
  width: 70px;
}
.order-list-cart .cart-title .price {
  width: 85px;
  padding-right: 27px;
  text-align: right;
}
.gray-box .gray-sub-title a {
  color: #6989e0;
}
.order-list-cart .cart {
  float: left;
  width: 737px;
  padding: 0;
  border-right: 1px solid #ebebeb;
}
.order-cart .cart-items {
  position: relative;
  padding: 18px 0 28px;
  border-top: 1px solid #efefef;
}
.order-list-cart .cart-items {
  height: 110px;
  padding: 0;
}
.order-cart .cart-items:first-child {
  border-top: none;
}
.order-cart .prod-info {
  position: relative;
  margin-left: 138px;
}
.order-list-cart .prod-info {
  padding: 15px 0 15px 111px;
  margin-left: 0;
  position: relative;
}
.order-list-cart .items-thumb {
  position: absolute;
  left: 30px;
  top: 15px;
  width: 78px;
  height: 78px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
}
.order-list-cart .items-thumb img {
  width: 78px;
  height: 78px;
}
.order-list-cart .items-params {
  float: left;
  height: 50px;
  padding: 15px 0;
  margin-left: 29px;
  border-bottom: none;
  line-height: 25px;
}
.order-cart .items-params .name {
  overflow: hidden;
  float: left;
  color: #666;
  width: 435px;
  height: 44px;
  text-align: left;
}
.order-list-cart .prod-info .name {
  float: none;
  width: 220px;
  height: 25px;
  line-height: 25px;
}
.order-list-cart .prod-info .vh-center {
  height: auto;
  line-height: 50px;
}
.hide-row,
.order-cart .items-params .name,
.support-cart .items-detail .detail {
  text-overflow: ellipsis;
  white-space: nowrap;
}
.order-list-cart .prod-info .num,
.order-list-cart .prod-info .operation,
.order-list-cart .prod-info .price,
.order-list-cart .prod-info .subtotal {
  float: right;
  line-height: 80px;
  text-align: center;
}
.order-list-cart .prod-info .operation {
  display: table;
  width: 95px;
  height: 80px;
  padding-right: 23px;
  line-height: 25px;
}
.order-list-cart .prod-info .num {
  width: 70px;
}
.order-list-cart .prod-info .price {
  width: 85px;
  padding-right: 27px;
  text-align: right;
}
.order-list-cart .prod-operation {
  float: right;
  display: table;
  height: 110px;
}
.order-list-cart .prod-operation .total {
  display: table-cell;
  padding-right: 18px;
  line-height: 14px;
  text-align: right;
  vertical-align: middle;
}
.order-list-cart .prod-operation .status {
  display: table-cell;
  width: 80px;
  padding: 0 24px;
  text-align: center;
  vertical-align: middle;
}
.blue-small-btn,
.orange-small-btn,
.white-gray-small-btn {
  display: inline-block;
  height: 30px;
  padding: 0 13px;
  border-radius: 4px;
  line-height: 30px;
  font-size: 12px;
  cursor: pointer;
}
.blue-small-btn {
  background: #6383c6;
  background: linear-gradient(#7ea3f5, #5a82f0);
  box-shadow: 0 1px 2px rgba(255, 255, 255, 0.1) inset,
    0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.1);
  color: #fff;
}
.blue-small-btn:hover {
  box-shadow: 0 1px 1px #7696de inset, 0 0 2px #627dca inset,
    0 -2px 3px #5a77c7 inset, 0 0 100px rgba(48, 77, 147, 0.4) inset,
    0 0 0 1px rgba(0, 0, 0, 0.3) inset, 0 1px 3px rgba(0, 0, 0, 0.1);
  color: #fff;
}
</style>
