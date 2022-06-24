<script setup>
import FooterVue from './components/footerComponent/footer.vue';
import HeaderVue from './components/headerComponent/header.vue';
import HeroVue from './components/heroComponent/hero.vue';
</script>

<template>
<notifications />
    <HeaderVue/>
    <router-view/>
    <FooterVue/>
</template>

<style>
@import './assets/base.css';
</style>
