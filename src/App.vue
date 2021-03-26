<template>
  <div :class="bodyClass" style="height: auto;">
    <div class="wrapper">

      <!-- Navbar -->
      <Navbar @toggleSidebar="onToggleSidebar" />
      <!-- /.navbar -->

      <!-- Main Sidebar Container -->
      <Sidebar />

      <!-- Content Wrapper. Contains page content -->
      <Content />
      <!-- /.content-wrapper -->

      <!-- Control Sidebar -->
      <ControlSidebar />
      <!-- /.control-sidebar -->

      <!-- Main Footer -->
      <Footer />

      <div id="sidebar-overlay"></div>
    
    </div>
    <!-- ./wrapper -->
  </div>
</template>

<script>
import Navbar from "./components/adminlte/Navbar";
import Sidebar from "./components/adminlte/Sidebar";
import Content from "./components/adminlte/Content";
import ControlSidebar from "./components/adminlte/ControlSidebar";
import Footer from "./components/adminlte/Footer";

export default {
  components: {
    Navbar,
    Sidebar,
    Content,
    ControlSidebar,
    Footer
  },
  data() {
    return {
      bodyClass: "sidebar-mini sidebar-closed sidebar-collapse",
      sidebarOpened: false,
    }
  },
  methods: {
    onToggleSidebar() {
      if(this.sidebarOpened) {
        this.bodyClass = "sidebar-mini sidebar-closed sidebar-collapse";
      } else {
        this.bodyClass = "sidebar-mini";
      }
      // alert("iki ning App.vue");
    }
  }
}
</script>

<style>
</style>
