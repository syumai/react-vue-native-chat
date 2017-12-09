<template lang="pug">
  <view class="row">
    <view class="column">
      <text class="left">
        Hello, world!
      </text>
    </view>
    <view class="column">
      <text class="right">
        Hello, world!
      </text>
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style>
.row {
  flex: 1;
  flex-direction: row;
}

.column {
  flex: 1;
  justify-content: center;
  align-items: center;
}

.left {
  color: #ff0000;
  font-size: 12;
}

.right {
  color: #0000ff;
  font-size: 16;
}
</style>
