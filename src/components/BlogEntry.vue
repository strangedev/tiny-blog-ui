<template>
    <div>
        <div>{{ blogEntry.content }}</div>
        <hr/>
        <p>Author: {{ blogEntry.author }}</p>
        <p>Author: {{ blogEntry.date }}</p>
        <div>
            <p v-for="tag in blogEntry.tags"
               :key="`${blogEntry.title}-${tag}`"
            >
                {{ tag }}
            </p>
        </div>
    </div>
</template>

<script>
    import {PublicV1alpha} from "tiny-blog-api"

    export default {
        name: "BlogEntry",
        props: {
            blogEntry: {
                type: PublicV1alpha.model.BlogEntry,
                default: () => ({})
            }
        }
    }
</script>

<style scoped>

</style>