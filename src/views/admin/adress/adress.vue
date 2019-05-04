<template>
  <div class="account-content">
    <div class="account-address">
      <div class="gray-box clear">
        <div class="title pre-title">
          <h2 class="fn-left">收货信息</h2>
          <span class="gray-blue-btn js-add-address">
            <a class="add">添加新地址</a>
          </span>
        </div>
        <div class="box-inner clear">
          <div class="address-list-item default-item" data-id="765532">
            <div class="name fn-left">
              <div class="name-cell">王海龙</div>
            </div>
            <div class="detail fn-left">
              <div class="detail-cell">北京市 市辖区 海淀区 上地十街辉煌国际大厦西6号楼319室</div>
            </div>
            <div class="operation fn-right">
              <div class="operation-cell">
                <a class="gray-edit-btn js-edit-address">修改</a>
                <span class="red-del-btn js-del-address">
                  <a>删除</a>
                  <em>删除</em>
                </span>
              </div>
            </div>
            <div class="default fn-right">（默认地址）</div>
            <div class="telephone fn-right">13810719453</div>
          </div>
          <div class="address-form clear" style="display: none;">
            <div class="module-form-row">
              <div class="form-item-v3">
                <i>收货人姓名</i>
                <input type="text" class="js-verify">
                <div class="verify-error"></div>
              </div>
            </div>
            <div class="module-form-row">
              <div class="form-item-v3">
                <i>手机号</i>
                <input type="text" class="js-verify">
                <div class="verify-error"></div>
              </div>
            </div>
            <div class="module-form-row clear">
              <div class="form-item-v3 area-code-w fn-left form-valid-item">
                <i>区号（可选）</i>
                <input type="text" class="js-verify js-address-area-code">
                <div class="verify-error"></div>
              </div>
              <div class="form-item-v3 telephone-w fn-right form-valid-item">
                <i>固定电话（可选）</i>
                <input type="text" class="js-verify js-address-telephone">
                <div class="verify-error"></div>
              </div>
            </div>
            <div class="module-form-row clear">
              <div class="form-item-v3 select-item province-wrapper">
                <select
                  name="province_code"
                  class="province select-province js-form-province js-verify"
                >
                  <option value="0">请选择省份</option>
                  <option value="110000">北京市</option>
                  <option value="440000">广东省</option>
                  <option value="310000">上海市</option>
                  <option value="320000">江苏省</option>
                  <option value="330000">浙江省</option>
                  <option value="370000">山东省</option>
                  <option value="410000">河南省</option>
                  <option value="510000">四川省</option>
                  <option value="130000">河北省</option>
                  <option value="420000">湖北省</option>
                  <option value="340000">安徽省</option>
                  <option value="350000">福建省</option>
                </select>
              </div>
            </div>
            <div class="module-form-row clear">
              <div class="form-item-v3 select-item city-wrapper fn-left form-focus-item">
                <select class="city select-city js-form-city js-verify">
                  <option value="0">请选择城市</option>
                </select>
              </div>
              <div class="form-item-v3 select-item district-wrapper fn-right form-focus-item">
                <select class="city select-city js-form-city js-verify">
                  <option value="0">请选择区县</option>
                  <option value="0">请选择区县</option>
                </select>
              </div>
            </div>
            <div class="module-form-row">
              <div class="form-item-v3">
                <i>详细地址，如街道名称，楼层，门牌号码等</i>
                <input type="text" class="js-verify">
                <div class="verify-error"></div>
              </div>
            </div>
            <div class="module-form-row clear">
              <input type="checkbox" name="default" class="hide" value="1" data-id="1">
              <span class="blue-checkbox" data-checkbox-name="default"></span>设为默认
            </div>
            <div class="dialog-blue-btn big-main-btn disabled-btn js-verify-address">
              <a>保存</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <t-adress :show="addAdress" @LOSE_ADRESS_POP="closeAdressPop" />
  </div>
</template>

<script>
import { TAdressPop } from 'components/index'
export default {
    components: {
        't-adress': TAdressPop
    },
    data() {
        return {
            addAdress: false
        }
    },
    methods: {
        closeAdressPop() {
            this.addAdress = false
        }
    },
}
</script>

<style scoped>
.blue-btn,
.gray-blue-btn,
.gray-btn,
.gray-icon-btn,
.light-blue-btn,
.light-gray-btn {
  display: inline-block;
  height: 38px;
  padding: 0 20px;
  border-radius: 8px;
  line-height: 38px;
  font-size: 14px;
  cursor: pointer;
}
.gray-blue-btn {
  padding: 0;
  background: #a2a2a2;
}
.gray-box .title span {
  overflow: hidden;
  float: right;
  margin-top: 11px;
}
.blue-btn a,
.gray-blue-btn a,
.gray-btn a,
.gray-icon-btn a,
.light-blue-btn a,
.light-gray-btn a {
  display: block;
}
.gray-blue-btn a {
  height: 38px;
  line-height: 38px;
  color: #fff;
}
.gray-blue-btn a.add {
  padding: 0 13px 0 38px;
  background: url(../../../assets/img/btn-icon-new.png) 0 -6px no-repeat;
  transition: none;
}
.gray-blue-btn:hover {
  background: #7595e4;
  box-shadow: none;
}
.address-form {
  width: 370px;
  margin: 0 auto;
}
.account-address .address-form {
  padding: 30px;
  margin: 0;
}
.module-form-row {
  position: relative;
  padding-bottom: 10px;
  margin: 0 auto;
}
.address-form .module-form-row {
  padding-bottom: 15px;
}
.module-form-row .form-item-v3 {
  position: relative;
  height: 46px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: 0 3px 5px -4px rgba(0, 0, 0, 0.4) inset,
    -1px 0 3px -2px rgba(0, 0, 0, 0.1) inset;
  line-height: 46px;
  font-size: 18px;
  opacity: 0.618;
  transition: opacity 0.3s ease;
}
.module-form-row .form-item-v3 i {
  position: absolute;
  left: 15px;
  top: 0;
  font-size: 16px;
  color: #bebebe;
}
.module-form-row .form-item-v3 input {
  padding: 0 15px;
  background-color: transparent;
  border: none;
  font-size: 16px;
}
.address-form .form-item-v3 input {
  width: 330px;
}
.address-form .area-code-w {
  width: 118px;
}
.address-form .telephone-w {
  width: 238px;
}
.module-form-row div.select-item {
  width: auto;
  height: auto;
  margin: 0;
  background: 0 0;
  border: none;
  box-shadow: none;
  opacity: 1;
}
.module-form-row .form-item-v3 select {
  margin: 0 0 0 15px;
  background-color: transparent;
  border: none;
  font-size: 16px;
  color: #333;
}
.address-form .select-province {
  width: 370px;
}
.form-focus-item {
  z-index: 1;
  opacity: 1;
  border: 1px solid #6b93f2;
}
.module-form-row div.select-item {
  width: auto;
  height: auto;
  margin: 0;
  background: 0 0;
  border: none;
  box-shadow: none;
  opacity: 1;
}
.module-form-row .form-item-v3 select {
  height: 48px;
  padding: 0 15px;
  margin: 0;
  background: -webkit-linear-gradient(top, #fafafa, #f5f5f5);
  background: linear-gradient(#fafafa, #f5f5f5);
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: 2px 0 0 rgba(255, 255, 255, 0.4) inset,
    1px 0 0 rgba(255, 255, 255, 0.3);
  line-height: 48px;
  text-indent: 0;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
}
.address-form .select-city,
.address-form .select-district {
  width: 180px;
}
.blue-checkbox,
.blue-checkbox-disable,
.blue-checkbox-on {
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  background: url(../../../assets/img/checkbox-bg.png) no-repeat;
  cursor: pointer;
}
.address-form .blue-checkbox {
  top: 0;
  float: left;
  margin-right: 5px;
}
.dialog-blue-btn {
  padding: 1px;
  background: #6383c6;
  background: linear-gradient(#6383c6, #4262af);
  border-radius: 6px;
  text-align: center;
  color: #fff;
}
.disabled-btn {
  opacity: 0.4;
}
.disabled-btn,
.disabled-btn a {
  cursor: not-allowed;
  -webkit-transition: none;
  transition: none;
  pointer-events: none;
}
.dialog-blue-btn a {
  display: block;
  padding: 2px 0;
  background: #5f7ed7;
  background: linear-gradient(#6f97e5, #527ed9);
  border-radius: 5px;
  box-shadow: inset 0 1px 2px #7ea1e8;
  text-shadow: 0 -1px 0 #4f70b3;
  color: #fff;
}
.big-main-btn a {
  height: 42px;
  line-height: 42px;
  font-size: 18px;
}
.account-address .address-list-item {
  height: 75px;
  padding: 20px 0;
  border-bottom: 1px solid #cfcfcf;
  line-height: 24px;
}
.account-address .address-list-item:last-child {
  border-bottom: none;
  border-radius: 0 0 7px 7px;
}
.account-address .address-list-item .name {
  display: table;
  width: 106px;
  height: 100%;
  padding: 0 20px 0 24px;
}
.account-address .address-list-item .name-cell {
  display: table-cell;
  vertical-align: middle;
}
.account-address .address-list-item .detail {
  display: table;
  width: 440px;
  height: 100%;
  text-align: left;
}
.account-address .address-list-item .detail-cell {
  display: table-cell;
  vertical-align: middle;
}
.account-address .address-list-item .operation {
  display: -webkit-box;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  width: 135px;
  padding: 24px 0;
}
.account-address .address-list-item .operation-cell {
  display: flex;
  text-align: center;
}
.gray-edit-btn,
.red-del-btn {
  width: 26px;
  height: 26px;
  border-radius: 5px;
  overflow: hidden;
}
.gray-edit-btn {
  display: inline-block;
  background: url(../../../assets/img/btn-icon-new.png) -9px -112px no-repeat #a2a2a2;
  text-indent: -9999em;
}
.account-address .address-list-item .operation .gray-edit-btn {
  margin-right: 6px;
}
.gray-edit-btn,
.red-del-btn {
  width: 26px;
  height: 26px;
  border-radius: 5px;
  overflow: hidden;
}
.red-del-btn {
  position: relative;
  display: inline-block;
  background: #d84747;
  background: linear-gradient(#f97474, #e05b5b);
  line-height: 26px;
  opacity: 0.62;
  cursor: pointer;
  transition: none;
}
.red-del-btn a {
  display: block;
  width: 26px;
  height: 26px;
  background: url(../../../assets/img/btn-icon-new.png) -9px -262px no-repeat;
  text-indent: -9999em;
  color: #fff;
  transition: none;
}
.red-del-btn em {
  position: absolute;
  left: 0;
  top: 0;
  display: none;
  height: 26px;
  text-indent: 0;
  font-size: 12px;
  color: #fff;
}
.account-address .address-list-item .default {
  width: 80px;
  line-height: 75px;
  text-align: center;
  font-size: 12px;
}
.account-address .address-list-item .telephone {
  width: 160px;
  height: 100%;
  line-height: 75px;
  text-align: center;
}
</style>
