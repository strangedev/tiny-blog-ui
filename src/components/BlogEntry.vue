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
    import BlogEntry from '../tiny-blog-api/tiny-blog-model/v1alpha/BlogEntry'

    export default {
        name: "BlogEntry",
        props: {
            blogEntry: {
                type: BlogEntry,
                default: () => ({})
            }
        }
    }
</script>

<style scoped>

</style>