<template>
    <section>
        <div :class="{'topbar': true, 'fixed-header': (scroll > 500)}">
            <div class="container ">
                <nav class="navbar navbar-expand-lg h6-nav-bar">
                    <a href="javascript:void(0)" :class="{'navbar-brand': true, 'text-white': (scroll < 500)}" v-scroll-to="'#home'">
                        PrepDecks
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#h6-info1" aria-controls="h6-info" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="ti-menu"></span>
                    </button>
                    <div class="collapse navbar-collapse font-14 ml-auto" id="h6-info1">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">

                                <a href="javascript:void(0)" :class="{'nav-link': true, 'text-black': (scroll > 500)}" v-scroll-to="'#home'">Home</a>
                            </li>
                            <li class="nav-item active">
                                <a :class="{'nav-link': true, 'text-black': (scroll > 500)}" href="javascript:void(0)" v-scroll-to="'#intern-stories'">
                                    Intern Stories
                                </a>
                            </li>
                            <li class="nav-item active">
                                <a href="javascript:void(0)" :class="{'nav-link': true, 'text-black': (scroll > 500)}" v-scroll-to="'#how-it-works'">
                                    How It Works
                                </a>
                            </li>
                            <li class="nav-item active">
                                <a href="javascript:void(0)" :class="{'nav-link': true, 'text-black': (scroll > 500)}" v-scroll-to="'#team'">
                                    Team
                                </a>
                            </li>
                        </ul>
                        <div class="act-buttons">
                            <button class="btn btn-secondary waves-effect waves-light font-13" data-toggle="modal" data-target="#loginModal">Sign In</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

        <!-- login modal content -->
        <div id="loginModal" class="modal fade custom-modal modal2" tabindex="-1" role="dialog" aria-hidden="true" style="display: none;">
            <div class="modal-dialog modal-lg">
                <div class="modal-content po-relative">
                    <div class="modal-body p-0 text-center">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 modal-bg-img" style="background-image: url('/images/modals/5.jpg');">
                            </div>
                            <div class="col-lg-6 col-md-7">
                                <div class="modal-bg">
                                    <h2 class="font-light text-muted m-t-20 text-center">Welcome Back!</h2>
                                    <form class="m-t-30">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <input class="form-control" type="email" placeholder="email address" autocomplete="email">
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <input class="form-control" type="password" placeholder="password" autocomplete="password">
                                                </div>
                                            </div>
                                            <div class="col-lg-12 text-center">
                                                <button type="submit" class="btn btn-rounded btn-success-gradiant btn-arrow">
                                                    <span>Sign In
                                                        <i class="ti-arrow-right"></i>
                                                    </span>
                                                </button>
                                            </div>
                                            <div class="col-lg-12 text-center m-t-40">
                                                Does not have an account?
                                                <a href="#" class="text-danger">Sign Up</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="close-btn" data-dismiss="modal" aria-hidden="true">×</a>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->
        
        
    </section>
</template>

<style lang="css" scoped>
    .text-black {
        color: black !important;
    }
</style>

<script>
    export default {
        name: "LandingMenu",
        data: () => ({
            scroll: 0
        }),
        methods: {
            /**
             * @method handleScroll
             * Method to watch scroll of the view
             */
            handleScroll() {
                this.scroll = window.scrollY;
                if (this.scroll > 500) {
                    this.shadow = 2;
                } else if (this.scroll < 500) {
                    this.shadow = 0;
                }
            }
        },

        /**
         * Method that runs before the component is mount.
         * This should be done since window scope is not available at server,
         * so, it needs to wait before mounting it. This method will add the event
         * listener for the scroll.
         */
        beforeMount() {
            window.addEventListener("scroll", this.handleScroll, {passive: true});
        },

        /**
         * Method to remove scroll listener before the component is destroyed.
         */
        beforeDestroy() {
            window.removeEventListener("scroll", this.handleScroll, {passive: true});
        }
    };
</script>