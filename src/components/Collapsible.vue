<template>
    <div>
        <p v-on:click="toggle()">
            {{ preview }}
        </p>
        <div v-if="expanded">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Collapsible",
        props: {
            preview: {
                type: String,
                default: "Lorem ipsum sit dolor amet"
            },
            startExpanded: {
                type: Boolean,
                default: false
            }
        },
        data: () => ({
            expanded: false
        }),
        methods: {
            toggle: function () {
                this.expanded = !this.expanded;
            }
        },
        mounted: function () {
            this.expanded = this.startExpanded;
        }
    }
</script>

<style scoped>

</style>