<template>
  <div class="wizard">
    <img :src="wizard.image" />
    <h2 class="wizard__title">{{ wizard.name }}</h2>
    <h3 class="wizard__subtitle">Actor: {{ wizard.actor }}</h3>
    <p class="wizard__description">Species: {{ wizard.species }}</p>
    <p class="wizard__description">Gender: {{ wizard.gender }}</p>
    <p class="wizard__description">House: {{ wizard.house }}</p>
    <p class="wizard__description">Date of birth: {{ wizard.dateOfBirth }}</p>
    <p class="wizard__description">Ancestry: {{ wizard.ancestry }}</p>
    <p class="wizard__description">Wand: {{ wizard.wand.core }}</p>
    <p class="wizard__description">Patronus: {{ wizard.patronus }}</p>
  </div>
</template>

<script>
export default {
  name: "Wizard",
  data() {
      return {
          wizard: {}
      }
  },
  created() {
    this.getWizard()
  },
  methods: {
    getWizard() {
      const wizards = JSON.parse(localStorage.getItem('wizards')) || []
      this.wizard = wizards.find(wizard => wizard.name === this.$route.params.id)
    }
  }
};
</script>

<style scoped>
.wizard {
  border-radius: 5px;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
  box-sizing: border-box;
  display: block;
  margin: 20px auto;
  padding: 20px;
  width: 90%;
}
</style>
