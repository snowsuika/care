<template>
  <ul class="l-adminSidebar nav flex-md-column justify-content-between">
    <!-- 家屬端 -->
    <template v-if="this.identity == 'member'">
      <li class="nav-item">
        <router-link
          class="nav-link"
          active-class="active"
          to="/memberAdmin/order"
          ><i class="fas fa-file-alt"></i> 我的訂單</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          active-class="active"
          to="/memberAdmin/familyManage"
          ><i class="fas fa-user-plus"></i> 家屬管理</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          active-class="active"
          to="/memberAdmin/accountManage"
          ><i class="fas fa-key"></i> 修改密碼</router-link
        >
      </li>
    </template>
    <template v-else>
      <li class="nav-item">
        <router-link
          class="nav-link"
          active-class="active"
          to="/attendantAdmin/order"
          ><i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
          我的訂單</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          active-class="active"
          to="/attendantAdmin/profire"
          ><i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
          個人資料</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          active-class="active"
          to="/attendantAdmin/accountManage"
          ><i class="fas fa-key fa-sm fa-fw mr-2 text-gray-400"></i>
          修改密碼</router-link
        >
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      identity: ''
    };
  },
  created() {
    this.identity = this.$parent.identity;
  }
};
</script>

<style lang="scss"></style>
