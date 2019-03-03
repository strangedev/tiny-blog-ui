<template>
    <div>
        <TagSelector :tags="displayedTags"
                     v-on:selection-changed="fetchEntries($event)"
        ></TagSelector>
        <div>
            <Collapsible v-for="entry in displayedBlogEntries"
                         :key="entry.title"
            >
                <BlogEntry v-slot:content
                           :entry="entry"
                ></BlogEntry>
            </Collapsible>
        </div>
    </div>
</template>

<script>
    import TagSelector from "./TagSelector";
    import Collapsible from "./Collapsible";
    import BlogEntry from "./BlogEntry";
    import { mapGetters } from 'vuex'

    export default {
        name: "Blog",
        components: {BlogEntry, Collapsible, TagSelector},
        computed: {
            ...mapGetters([
                'displayedBlogEntries',
                'displayedTags'
            ])
        },
        methods: {
            fetchEntries() {
               return [];  // TODO
            },
            fetchTags() {
                this.$store.dispatch("fetchTags").then();
            }
        },
        mounted: function () {
            this.fetchTags();
            this.fetchEntries([]);  // fetch all entries
        }
    }
</script>

<style scoped>

</style>