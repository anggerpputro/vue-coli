<template>
    <form v-if="selectedData" class="form">
        <input type="text" v-model="selectedData.username" class="form-control" />
        <input type="text" v-model="selectedData.email" class="form-control" />
        <input type="text" v-model="selectedData.nama" class="form-control" />
        <input type="text" v-model="selectedData.nomorhp" class="form-control" />
    </form>
</template>

<script>
export default {
    props: {
        selectedData: {
            type: Object,
            required: true
        }
    }
}
</script>