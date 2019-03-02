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
    import * as V1BlogEntry from "../tiny-blog-api/client/PublicV1alpha/BlogEntry"

    export default {
        name: "Blog",
        components: {BlogEntry, Collapsible, TagSelector},
        data: () => ({
            blogEntries: [],
            tags: []
        }),
        methods: {
            fetchEntries(selectedTags) {
                let future;
                if (selectedTags.length > 0) {
                    future = V1BlogEntry.getBlogEntriesByTag(selectedTags, 0, 50);
                } else {
                    future = V1BlogEntry.getBlogEntriesByNewest(0, 50);
                }
                future.fork(
                    error => this.$emit("fetchFailed", error),
                    entries => this.blogEntries = entries
                );
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