<script>
import { defineComponent } from "vue";
import HeaderArea from "../components/HeaderArea.vue";
import NewsletterPopup from "../components/NewsletterPopup.vue";
import VerticalMenu from "../components/VerticalMenu.vue";
import SliderArea from "../components/SliderArea.vue";
import BrandBanner from "../components/BrandBanner.vue";
import HotDeal from "../components/HotDeal.vue";
import BigBanner from "../components/BigBanner.vue";
import ArrivalsProduct from '../components/ArrivalsProduct.vue';
import SecondArrivalsProduct from "../components/SecondArrivalsProduct.vue"
import LikeProduct from '../components/LikeProduct.vue';
import MainBrandBanner from '../components/MainBrandBanner.vue'
import SupportArea from '../components/SupportArea.vue';
import FooterArea from '../components/FooterArea.vue';
import QuickView from '../components/QuickView.vue';
export default {
  components: {
    HeaderArea,
    NewsletterPopup,
    VerticalMenu,
    SliderArea,
    BrandBanner,
    HotDeal,
    BigBanner,
    ArrivalsProduct,
    SecondArrivalsProduct,
    LikeProduct,
    MainBrandBanner,
    SupportArea,
    FooterArea,
    QuickView,
  },
};
</script>
<template>
  <!-- Main Wrapper Start Here -->
  <div class="wrapper">
    <!-- Banner Popup Start -->
    <!-- <div class="popup_banner">
            <span class="popup_off_banner">×</span>
            <div class="banner_popup_area">
                    <img src="@/assets/img\banner\pop-banner.jpg" alt="">
            </div>
        </div> -->
    <!-- Banner Popup End -->
    <!-- Newsletter Popup Start -->
    <NewsletterPopup />
    <!-- Newsletter Popup End -->
    <!-- Main Header Area Start Here -->
    <HeaderArea></HeaderArea>
    <!-- Main Header Area End Here -->
    <!-- c & Slider Area Start Here -->
    <div class="main-page-banner pb-50 off-white-bg">
      <div class="container">
        <div class="row">
          <!-- Vertical Menu Start Here -->
          <VerticalMenu />
          <!-- Vertical Menu End Here -->
          <!-- Slider Area Start Here -->
          <SliderArea />
          <!-- Slider Area End Here -->
        </div>
        <!-- Row End -->
      </div>
      <!-- Container End -->
    </div>
    <!-- Categorie Menu & Slider Area End Here -->
    <!-- Brand Banner Area Start Here -->
    <BrandBanner></BrandBanner>
    <!-- Brand Banner Area End Here -->
    <!-- Hot Deal Products Start Here -->
    <hot-deal></hot-deal>
    <!-- Hot Deal Products End Here -->

    <!-- Big Banner Start Here -->
    <big-banner></big-banner>
    <!-- Big Banner End Here -->
    <!-- Arrivals Products Area Start Here -->
    <arrivals-product></arrivals-product>
    <!-- Arrivals Products Area End Here -->
    <!-- Arrivals Products Area Start Here -->
    <second-arrivals-product></second-arrivals-product>
    <!-- Arrivals Products Area End Here -->
    <!-- Like Products Area Start Here -->
    <like-product></like-product>
    <!-- Lile Products Area End Here -->
    <!-- Brand Banner Area Start Here -->
    <main-brand-banner></main-brand-banner>
    <!-- Brand Banner Area End Here -->
    <div class="big-banner pb-100 pb-sm-60">
      <div class="container big-banner-box">
        <div class="col-img">
          <a href="#">
            <img src="@/assets/img\banner\5.jpg" alt="" />
          </a>
        </div>
        <div class="col-img">
          <a href="#">
            <img src="@/assets/img\banner\h1-banner3.jpg" alt="" />
          </a>
        </div>
      </div>
      <!-- Container End -->
    </div>
    <!-- Support Area Start Here -->
    <support-area></support-area>
    <!-- Support Area End Here -->
    <!-- Footer Area Start Here -->
    <footer-area></footer-area>
    <!-- Footer Area End Here -->
    <!-- Quick View Content Start -->
    <quick-view></quick-view>
    <!-- Quick View Content End -->
  </div>
  <!-- Main Wrapper End Here -->
</template>


<style>
</style>