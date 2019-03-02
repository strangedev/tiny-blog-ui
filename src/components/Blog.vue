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
    import * as BlogEntryModel from "../model/BlogEntry";

    export default {
        name: "Blog",
        components: {BlogEntry, Collapsible, TagSelector},
        data: () => ({
            blogEntries: [],
            tags: []
        }),
        methods: {
            fetchEntries(selectedTags) {
                this.blogEntries = [
                    new BlogEntryModel.default(`${selectedTags}`, "Content 1", "Firstname Lastname", Date(), ["Apfel", "Gehirnpilz"]),
                    new BlogEntryModel.default("Article 2", "Content 2", "Firstname Lastname", Date(), ["Apfel", "Himbeere"]),
                    new BlogEntryModel.default("Article 3", "Content 3", "Firstname Lastname", Date(), ["Ein Schwein"])
                ];
            },
            fetchTags() {
                this.tags = [
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