<template>
    <main class="home">
        <h2 class="home__title">HOME</h2>
        <search-input
          @search-keyup="handleSearch"
          @search-click="handleSearch" />
        <ul class="home__list">
          <li v-for="(wizard, index) in wizards" :key="index">
            <wizard-card :wizard="wizard" />
          </li>
        </ul>
    </main>
</template>

<script>
import wizards from '@/data/wizards'
import SearchInput from '@/components/SearchInput'
import WizardCard from '@/components/WizardCard'
    export default {
        name: 'Home',
        data() {
          return {
            search: '',
            wizards
          }
        },
        components: {
          SearchInput,
          WizardCard
        },
        created() {
          this.setWizards()
        },
        mounted() {
          if (this.$route.query?.search) {
            this.search = this.$route.query?.search;
            this.wizards = this.filterWizards(this.$route.query?.search)
          }
        },
        methods: {
          setWizards() {
            localStorage.setItem('wizards', JSON.stringify(this.wizards))
          },
          filterWizards (search) {
            const wizards = JSON.parse(localStorage.getItem('wizards')) || []
            return wizards.filter(wizard => {
              return wizard?.name?.toLowerCase().includes(search.toLowerCase())
            })
          },
          handleSearch (search) {
            this.$router.push({ path: '/', query: { search }})
            this.wizards = this.filterWizards(search)
          }
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