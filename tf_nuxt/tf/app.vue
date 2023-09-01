<template>
  <div>
    <Top></Top>
     <Nuxt-Page></Nuxt-Page>
  </div>
</template>
<script setup>

import { list, list1 } from "./axios";

let data = list();
// console.log(data);

let listA = list1(1);
// console.log(listA);
</script>
