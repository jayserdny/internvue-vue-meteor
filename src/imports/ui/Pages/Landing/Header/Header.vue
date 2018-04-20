<template>
    <!-- HERO HEADER -->
    <div id="home" class="static-slider10 home-bg parallax">
        <div class="container">
            <!-- Row  -->
            <div class="row justify-content-center ">
                <!-- Column -->
                <div class="col-md-12 align-self-center text-center" data-aos="fade-down" data-aos-duration="1200">
                    <h2 class="title text-white">Land your Dream Internship – Start Today!</h2>
                    <h6 class="subtitle op-8 text-white">Feel confident and prepared to ace your next interview!</h6>
                    <router-link class="btn btn-success-gradiant btn-md btn-arrow m-t-20" :to="{ name: 'example'}">
                            <span>Get Started Today!
                                    <i class="ti-arrow-right"></i>
                                </span>
                    </router-link>
                    
                </div>
                <!-- Column -->
            </div>
        </div>
    </div>

    <!-- HERO HEADER END -->
</template>

<style lang="css" scoped>
    .home-bg {
        background: linear-gradient(0deg, #2196f3d9, #2196f3d9),
        url(/images/covers/hero.jpg);
    }
</style>


<script>
    export default {
        name: "LandingHeader",
        methods: {
            openPage(page) {
                this.$router.push({ name: page });
            }
        }
    };
</script>