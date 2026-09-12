
<template>
  <div class="login">
    <van-nav-bar title="账户登录" left-arrow @click-left="$router.go(-1)" />
    <div class="container">
      <div class="title">
        <h3>手机号登录</h3>
        <p>未注册的手机号登录后将自动注册</p>
      </div>

      <div class="form">
        <div class="form-item">
          <input v-model="mobile" class="inp" maxlength="11" placeholder="请输入手机号码" type="text">
        </div>
        <div class="form-item">
          <input v-model="PicCode" class="inp" maxlength="5" placeholder="请输入图形验证码" type="text">
          <img v-if="PicUrl" :src="PicUrl" @click="getPicCode" alt="">
        </div>
        <div class="form-item">
          <input class="inp" v-model="msgCode" placeholder="请输入短信验证码" type="text">
          <button @click="timeSub">{{ TimeNow === TotalTime ? '获取验证码' : TimeNow + '秒后重新发送' }}</button>
        </div>
      </div>

      <div class="login-btn" @click="login">登录</div>
    </div>
  </div>
</template>

<script>
import { getPicCode, getSmsCode, codeLogin } from '@/api/login'
export default {
  name: 'LoginPage',
  data () {
    return {
      PicCode: '',
      PicKey: '',
      PicUrl: '',
      TotalTime: '60',
      TimeNow: '60',
      Timer: null,
      mobile: '',
      msgCode: ''
    }
  },
  async created () {
    this.getPicCode()
  },
  destroyed () {
    clearInterval(this.Timer)
  },
  methods: {
    async getPicCode () {
      const { data: { base64, key } } = await getPicCode()
      this.PicKey = key
      this.PicUrl = base64
      // Toast('获取验证码成功')
      this.$toast('获取验证码成功')
    },
    async timeSub () {
      if (!this.validFn()) {
        return
      }
      if (!this.Timer && this.TimeNow === this.TotalTime) {
        await getSmsCode(this.PicCode, this.PicKey, this.mobile)
        this.$toast('验证码发送成功，请注意查收')
        this.Timer = setInterval(() => {
          this.TimeNow--
          if (this.TimeNow <= 0) {
            clearInterval(this.Timer)
            this.Timer = null
            this.TimeNow = this.TotalTime
          }
        }, 1000)
      }
    },
    validFn () {
      if (!this.mobile) {
        this.$toast('请输入手机号')
        return false
      }
      if (!/^1[3-9]\d{9}$/.test(this.mobile)) {
        this.$toast('请输入正确的手机号')
        return false
      }
      if (!this.PicCode) {
        this.$toast('请输入图形验证码')
        return false
      }
      return true
    },
    async login () {
      if (!this.validFn()) {
        return
      }
      if (!/^\d{6}$/.test(this.msgCode)) {
        this.$toast('请输入正确的短信验证码')
        return
      }
      const res = await codeLogin(this.mobile, this.msgCode)
      this.$store.commit('user/setUserInfo', res.data)
      // 判断有无回跳地址
      const url = this.$route.query.backUrl || '/'
      this.$router.replace(url)
      this.$toast('登录成功')
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 49px 29px;

  .title {
    margin-bottom: 20px;
    h3 {
      font-size: 26px;
      font-weight: normal;
    }
    p {
      line-height: 40px;
      font-size: 14px;
      color: #b8b8b8;
    }
  }

  .form-item {
    border-bottom: 1px solid #f3f1f2;
    padding: 8px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    .inp {
      display: block;
      border: none;
      outline: none;
      height: 32px;
      font-size: 14px;
      flex: 1;
    }
    img {
      width: 94px;
      height: 31px;
    }
    button {
      height: 31px;
      border: none;
      font-size: 13px;
      color: #cea26a;
      background-color: transparent;
      padding-right: 9px;
    }
  }

  .login-btn {
    width: 100%;
    height: 42px;
    margin-top: 39px;
    background: linear-gradient(90deg,#ecb53c,#ff9211);
    color: #fff;
    border-radius: 39px;
    box-shadow: 0 10px 20px 0 rgba(0,0,0,.1);
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
