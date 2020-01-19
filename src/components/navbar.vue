<template>
  <div class="navbar">
    <span class="title">Afterlife Jazz</span>

    <router-link :to="{ name: 'musician-entry' }">Sign Up</router-link>
    <router-link :to="{ name: 'bookingTool' }">Book a Band</router-link>
    <router-link :to="{ name: 'gigsBooked' }">Gigs Booked</router-link>

  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      activeLink: 0
    };
  },
};
</script>

<style scoped lang="scss">
  .navbar {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    background: gray;
    opacity: .7;
    padding: 20px;
    color: white;
    text-shadow: 2px 2px 4px #000000;
  }
  .title {
    font-size: 30px;
    font-weight: 600;
  }
  a  {
    text-decoration: none;
    color: lightgreen;
  }

 .router-link-exact-active {
   color:white;
 }

</style>
