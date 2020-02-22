<template>
    <main class="home">
        <h2 class="home__title">Favourite Wizards</h2>
        <ul class="home__list">
          <li v-for="(wizard, index) in favouriteWizards" :key="index">
            <wizard-card :wizard="wizard" />
          </li>
        </ul>
    </main>
</template>

<script>
import { mapState } from 'vuex'
import WizardCard from '@/components/WizardCard'
    export default {
        name: 'FavouriteWizards',
        components: {
          WizardCard
        },
        computed: {
            ...mapState(['favouriteWizards'])
        }
    }
</script>

<style scoped>
.home {
    padding: 20px;
}
.home__title {
    margin: 0 0 8px;
}
.home__list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>