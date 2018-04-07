<template>
    <div class="home">
        <div id="main-wrapper">
            <Menu />
            <div class="page-wrapper">
                <div class="container-fluid">
                    <Header />
                    <Sponsors />
                    <UserStories />
                    <Quote1 />
                    <HowItWorks />
                    <Quote2 />
                    <Team />
                    <Footer />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header/Header';
import Sponsors from './Sponsors/Sponsors';
import UserStories from './UserStories/Stories';
import Team from './Team/Team';
import Footer from './Footer/Footer';
import Menu from './Menu/Menu';
import Quote1 from './Quote1/Quote1';
import Quote2 from './Quote2/Quote2';
import HowItWorks from './HowItWorks/HowItWorks';

export default {
  name: "LandingPage",
  components: {
    Menu,
    Header,
    Sponsors,
    UserStories,
    Quote1,
    Quote2,
    Team,
    Footer,
    HowItWorks
  }
};
</script>