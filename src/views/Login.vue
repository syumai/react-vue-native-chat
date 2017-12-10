<template>
  <view class="container">
    <text class="logo">
      MeChat
    </text>
    <view class="login-form">
      <view class="input-container email">
        <text-input class="input" auto-capitalize="none" placeholder="メールアドレス" />
      </view>
      <view class="input-container password">
        <text-input class="input" secure-text-entry placeholder="パスワード" />
      </view>
      <view class="login-button-container">
        <button class="login-button" title="ログイン" color="#f60" :on-press="login" />
      </view>
    </view>
  </view>
</template>

<script>
import { NavigationActions } from 'react-navigation';
export default {
  props: ['navigation'],
  methods: {
    login() {
      const resetMainAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Main' }),
        ],
      });
      this.navigation.dispatch(resetMainAction);
    }
  }
}
</script>

<style>
.container {
  flex: 1;
  justify-content: center;
  align-items: center;
}

.logo {
  color: #fa3;
  font-size: 42;
  font-weight: bold;
  margin-bottom: 18;
}

.input-container {
  width: 300;
  height: 40;
  justify-content: center;
  align-items: center;
  border-width: 1;
  border-color: #aaa;
  background-color: #fff;
}

.email {
  border-bottom-color: #ccc;
}

.password {
  border-top-width: 0;
}

.input {
  width: 300;
  padding: 8;
}

.login-button-container {
  margin-top: 18;
}
</style>
