<template>
    <router-link :to="`wizard/${wizard.name}`">
        <div class="wizard-card">
            <div class="wizard-card__content">
                <h3 class="wizard-card__title">{{ wizard.name }}</h3>
                <p class="wizard-card__subtitle">{{ wizard.actor }}</p>
                <p class="wizard-card__subtitle">{{ wizard.house }}</p>
                <p class="wizard-card__description">{{ wizard.dateOfBirth }}</p>
            </div>
            <div class="wizard-card__avatar">
                <img class="wizard-card__image" :src="wizard.image" :alt="wizard.name"/>
            </div>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: 'WizardCard',
        props: {
            wizard: {
                type: Object
            }
        },
    }
</script>

<style scoped>
.wizard-card {
    border-radius: 4px;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-content: space-between;
    margin-bottom: 8px;
    padding: 12px;
}
.wizard-card__content {
    padding-right: 10px;
    text-align: left;
}
.wizard-card__title {
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0 0 8px;
}
.wizard-card__subtitle {
    font-size: .875rem;
    margin: 0 0 8px;
}
.wizard-card__description {
    font-size: .875rem;
    margin: 0 0 8px;
}
.wizard-card__avatar {
    height: 125px;
    width: 125px;
}
.wizard-card__image {
    height: 125px;
    width: 125px;
    object-fit: cover;
}
</style>