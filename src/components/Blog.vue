<template>
    <div>
        <TagSelector :tags="tags"
                     v-on:selection-changed="fetchEntries($event)"
        ></TagSelector>
        <div>
            <Collapsible v-for="entry in blogEntries"
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

    export default {
        name: "Blog",
        components: {BlogEntry, Collapsible, TagSelector},
        data: () => ({
            blogEntries: [],
            tags: []
        }),
        methods: {
            fetchEntries() {
               return [];  // TODO
            },
            fetchTags() {
                this.tags = [ // TODO
                    "Apfel", "Himbeere", "Gehirnpilz", "Giraffentorte", "Ein Schwein"
                ];
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