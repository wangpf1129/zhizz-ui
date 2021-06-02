<template>
  <div class="home">
    <TopNav/>
    <div class="login-wrapper">
      <div class="login-box">
        <img src="../assets/img.png" class="nice-logo" alt=""/>
        <p>清栀UI 官网</p>
        <div class="login-form">
          <div class="login-input">
            <label class="login-label">
              <Input
                class="login-text"
                placeholder="请输入用户名"
                v-model:value="username"
              />
            </label>
            <span class="login-symbol">
                <svg class="icon" aria-hidden="true">
                   <use xlink:href="#icon-user"></use>
                </svg>
              </span>
          </div>
          <div class="login-input">
            <label class="login-label">
              <Input class="login-text"
                     type="password"
                     placeholder="请输入密码"
                     v-model:value="password"
              />
            </label>
            <span class="login-symbol">
                <svg class="icon" aria-hidden="true">
                   <use xlink:href="#icon-mima"></use>
                </svg>
              </span>
          </div>
          <div class="login-footer">
            <div class="login-btn-wrap">
              <Button theme="primary" size="normal" class="login-btn"
                      @click="login">登录
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';
import Input from '../lib/Input.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';
import {router} from '../router';

export default {
  name: 'Home',
  components: {Button, Input, TopNav},
  setup() {
    const username = ref('Wangpf');
    const password = ref('123456');
    const loading = ref(false);
    const login = () => {
      if (username && password) {
        setTimeout(() => {
          router.push({path: '/doc'});
        }, 500);
      }
    };
    return {username, password, loading, login};
  }
  
};
</script>

<style lang="scss" scoped>
$buttonColor: #0864a9;
$textColor: #05538c;

.home {
  ::v-deep(.top_nav) {
    background: transparent;
  }
  
  @media (max-width: 500px) {
    ::v-deep(.top_nav) {
      background: #fff;
    }
  }
}


.login-wrapper {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #5dd5c8 url(../assets/newbg1.png) center bottom no-repeat;
  
  .login-box {
    overflow: hidden;
    height: 486px;
    position: relative;
    width: 350px;
    max-width: 350px;
    margin: 4em auto;
    border-radius: 8px;
    box-shadow: 1px 2px 15px rgba(0, 0, 0, .3);
    background: #fff url(../assets/logbg.jpg) no-repeat bottom;
    text-align: center;
    z-index: 80;
    
    .nice-logo {
      width: 55px;
      margin: 40px 0 0;
    }
    
    p {
      font-size: 26px;
      color: #8742d1;
      margin-bottom: 35px;
    }
    
    .login-form {
      width: 296px;
      margin: 0 auto;
      
      .login-input {
        position: relative;
        width: 100%;
        z-index: 1;
        margin-bottom: 20px;
        
        .login-label {
          .login-text {
            padding: 0 30px 0 45px;
            outline: none;
          }
        }
        
        .login-symbol {
          display: flex;
          align-items: center;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding-left: 15px;
          pointer-events: none;
          
          svg {
            width: 22px;
            height: 22px;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;
          }
        }
        
        
      }
      
      .login-footer {
        width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 10px;
        
        .login-btn-wrap {
          width: 100%;
          
          .login-btn {
            width: 90%;
            outline: none;
          }
        }
      }
    }
  }
}
</style>
　　　
