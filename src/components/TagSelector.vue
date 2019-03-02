<template>
    <div>
        <label>
            Search:
            <input v-model="filter"/>
        </label>
        <p v-for="tag in selectedTags"
           :key="`deSelect-${tag}`"
           v-on:click="deSelect(tag)"
        >
            {{ tag }}
        </p>
        <hr/>
        <p v-for="tag in filteredTagsWithoutSelected"
           :key="`select-${tag}`"
           v-on:click="select(tag)"
        >
            {{ tag }}
        </p>
    </div>
</template>

<script>
    import * as R from "ramda";

    export default {
        props: {
            tags: {
                type: Array,
                default: () => []
            }
        },
        computed: {
            filteredTags() {
                if (this.filter.length === 0) {
                    return this.tags;
                }
                return R.filter(
                    iTag => {
                        let match = this.searchRegExp(this.filter).exec(iTag);
                        return !R.isNil(match)
                    },
                    this.tags
                );
            },
            filteredTagsWithoutSelected() {
                return R.difference(
                    this.filteredTags,
                    this.selectedTags
                )
            }
        },
        data: () => ({
            selectedTags: [],
            filter: ""
        }),
        methods: {
            searchRegExp(filter) {
                return RegExp(
                    R.pipe(
                        R.split(" "),
                        R.intersperse(".*"),
                        R.join("")
                    )(filter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
                    "i"
                );
            },
            select(tag) {
                this.selectedTags = [...this.selectedTags, tag];
            },
            deSelect(tag) {
                this.selectedTags = R.filter(iTag => iTag !== tag, this.selectedTags);
            }

        },
        watch: {
            selectedTags(newValue) {
                this.$emit("selectionChanged", newValue);
            }
        }
    }
</script>

<style scoped>

</style>