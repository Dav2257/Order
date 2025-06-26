<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter();
const route = useRoute()
const id = route.params.id

const name = ref('')
const amount = ref(0)

const saveData = async () => {
    const order = JSON.stringify({
        name: name.value,
        amount: amount.value,
    })

    const response = await fetch(`/api/orders/${id}`, {
        method:'PUT',
        body: order,
    })
    const data = await response.json()

    router.push('/')
}

onMounted(() => {
    fetch(`/api/orders/${id}`)
        .then(response => response.json())
        .then(data => {
            name.value = data.name
            amount.value = data.amount
        })
})
</script>


<template>
    <div class="container px-4 py-6 mx-auto w-lg">
        <h1 class="text-lg sm:text-2xl text-center">Buat Produk Baru</h1>
        <form @submit.prevent="saveData">
            <div class="w-full">
                <label>Nama</label>
                <input type="text" v-model="name" />
            </div>
            <div>
                <label>Jumlah</label>
                <input type="number" v-model="amount" />
            </div>
    
            <div class="mt-3">
                <button type="submit">Simpan</button>
            </div>
        </form>
    </div>
</template>