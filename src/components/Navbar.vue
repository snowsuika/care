<template>
  <nav class="navbar fixed-top navbar-light bg-white-opacity-7">
    <div class="container">
      <a class="navbar-brand" href="index.html">日日照你</a>
      <ul class="nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/findCare">尋找長照</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/chat">訊息</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#register" data-toggle="modal">註冊</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#login" data-toggle="modal">登入</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fa fa-user" aria-hidden="true"></i>
          </a>
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <a class="dropdown-item" href="family_admin_order.html">
              <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
              我的訂單
            </a>
            <a class="dropdown-item" href="family_admin_account.html">
              <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              帳號管理
            </a>
            <div class="dropdown-divider"></div>
            <a
              class="dropdown-item"
              href="#"
              data-toggle="modal"
              data-target="#logoutModal"
            >
              <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              登出
            </a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
