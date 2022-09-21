<template>

  <div>Page1</div>
  <!--  <router-link to="/page1/children1">link1</router-link>-->
  <!--  <router-link to="/page1/children2">link2</router-link>-->
  <router-view></router-view>


</template>

<script>
export default {
  props: [ 'abc' ],

};

</script>
