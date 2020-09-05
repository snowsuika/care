<template>
  <ul class="nav flex-md-column justify-content-between">
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
        ><i class="fas fa-user-cog"></i> 我的帳號</router-link
      >
    </li>
  </ul>
</template>
