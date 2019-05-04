<template> 
    <div class="content clear">
      <div class="account-wrapper">
        <div class="account-sidebar">
          <div class="avatar gray-box clear">
            <div class="js-account-sidebar-info">
              <img src="http://static.smartisanos.cn/account/asset/img/default-user-avatar.png">
            </div>
            <div class="box-inner">
              <ul class="account-nav">
                <li
                  tag="li"
                  :class="{current:currentPath == 'Order'}"
                  @click="getPath('Order')"
                >
                  <a href="javascript:;">我的订单</a>
                </li>
                <li
                  :class="{current:currentPath == 'Adress'}"
                  @click="getPath('Adress')"
                >
                  <a href="javascript:;">收货地址</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 订单管理和地址管理 -->
        <router-view/>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      currentPath: ""
    };
  },
  created() {
    this.getPath();
  },
  methods: {
    getPath(url) {
      if ( url ) {
        this.$router.push({name:url})
      }
      let path = this.$route.name;
      this.currentPath = path;
    }
  }
};
</script>

<style scope>
/* 左边用户头像 */
.content {
  clear: both;
  width: 1220px;
  min-height: 600px;
  padding: 0 0 25px;
  margin: 0 auto;
}
.account-wrapper {
  position: relative;
  min-height: 550px;
}
.account-sidebar {
  position: absolute;
  left: 0;
  top: 0;
  width: 210px;
}
.gray-box,
.gray-btn-menu-on:hover {
  background: #fff;
}
.gray-box {
  overflow: hidden;
  border: 1px solid #d1d1d1;
  border-color: rgba(0, 0, 0, 0.14);
  border-radius: 8px;
  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
}
.account-sidebar .avatar {
  padding-top: 20px;
  margin: 0 0 20px;
  border-radius: 10px;
  text-align: center;
}
.account-sidebar .avatar img {
  width: 168px;
  height: 168px;
  display: inline-block;
}
.account-sidebar .account-nav {
  padding-top: 15px;
}
.account-sidebar .account-nav li {
  position: relative;
  height: 48px;
  border-top: 1px solid #ebebeb;
  line-height: 48px;
}
.account-sidebar .account-nav .current {
  border: none;
}
.account-sidebar .account-nav a {
  display: block;
  height: 48px;
  padding: 0 30px;
  color: #666;
  -moz-transition: none;
  -webkit-transition: none;
  transition: none;
}
.account-sidebar .account-nav .current a,
.account-sidebar .account-nav a:hover {
  position: relative;
  top: -1px;
  z-index: 1;
  height: 50px;
  background-color: #98afee;
  line-height: 50px;
  color: #fff;
}
.account-content {
  margin-left: 230px;
}
.gray-box .title {
  height: 60px;
  padding: 0 10px 0 28px;
  background: #f5f5f5;
  background: linear-gradient(#fff, #f5f5f5);
  border-bottom: 1px solid #dcdcdc;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.06);
  line-height: 60px;
  color: #646464;
}
.gray-box .pre-title {
  position: relative;
  z-index: 2;
}
.gray-box .title h2 {
  font-size: 18px;
  font-weight: 400;
  color: #626262;
}
</style>
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
  background: url(../../assets/img/btn-icon-new.png) -15px -571px no-repeat;
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
