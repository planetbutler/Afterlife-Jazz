<template>
  <div class="navbar">
    <span class="title">Afterlife Jazz</span>
    <router-link :to="{ name: 'musician-entry' }">
      Sign Up
      </router-link>
    <router-link :to="{ name: 'bookingTool' }">
      Book a Band
    </router-link>
    
    <router-link :to="{ name: 'gigsBooked' }">
      Gigs Booked
    </router-link>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
  .navbar {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    background: gray;
    padding: 20px;
    color: #fff;
  }
  .title {
    font-size: 30px;
    font-weight: 600;
  }
  a  {
    text-decoration: none;
    color: #fff;
  }
  a:hover {
    color: #CCC;
  }
  a:active {
    color: blue;
  }
</style>
