<template>
    <div class="search-input">
        <input 
            class="search-input__input"
            v-model="searchText"
            :placeholder="placeholder"
            @keyup.enter="handleKeyup" />
        <button 
            class="search-input__button"
            type="button"
            @click="handleClick">
            <slot>Buscar</slot>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'SearchInput',
        props: {
            placeholder: {
                type: String,
                default: 'Search'
            }
        },
        data() {
            return {
                searchText: ''
            }
        },
        methods: {
            handleKeyup() {
                this.$emit('search-keyup', this.searchText)
            },
            handleClick() {
                this.$emit('search-click', this.searchText)
            }
        }
    }
</script>

<style scoped>
.search-input {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    margin-bottom: 20px;
    width: 100%;
}
.search-input__input,
.search-input__button {
    appearance: none;
    box-sizing: border-box;
    font-size: 16px;
    height: 50px;
    margin: 0;
}
.search-input__input {
    border: 1px solid grey;
    flex-grow: 1;
    padding: 10px;
}
.search-input__button {
    background-color: #000000;
    border: 1px solid #000000;
    color: #ffffff;
    padding: 10px 20px;
}
</style>