<template>
    <section class="full-height">
        <div class="topbar fixed-header black">
            <div class="container ">
                <nav class="navbar navbar-expand-lg h6-nav-bar">
                    <!--
                    <a href="javascript:void(0)" :class="{'navbar-brand': true, 'text-white': (scroll < 500)}" v-scroll-to="'#home'">
                        PrepDecks
                    </a>
                -->
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
        <div>
            <aside class = "sidebar">
               
            </aside>
        </div>
    </section>
    
</template>

<style lang="css" scoped>

.black {
    background-color: #22313F !important;
}

.full-height {
    height: 100vh;
    background-color: #2c3e50;
}


.sidebar {
    background-color: #212121;
    height: 100vh;
    width: 33vh;
}

.menubar {
    background-color: #fafafa;
}

</style>
<script>
    export default {
        name: 'Dead',
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
    }
</script>
