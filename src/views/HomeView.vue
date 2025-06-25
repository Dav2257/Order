<script setup>
import { onMounted, ref } from 'vue'

const orders = ref([])

const fetchOrders = async () => {
  const response = await fetch('/api/orders')
  const data = await response.json()
  orders.value = data
}

onMounted(() => {
  fetchOrders()
})

const removeOrder = async (id) => {
  const response = await fetch(`/api/orders/${id}`, {
    method: 'DELETE',
  })
  if (response.ok) {
    fetchorders()
  }
}
</script>

<template>
  <main>
    <div>Order</div>
    <div>
      <RouterLink to="/orders">Buat Produk</RouterLink>
    </div>
    <div>
      <ul>
        <li v-for="order in orders" :key="order.id">
          <div>nama: {{ order.name }}</div>
          <div>harga: {{ order.price }}</div>
          <div>
            <RouterLink :to="`/orders/${order.id}`">Edit</RouterLink>
          </div>
          <div>
            <button @click="removeOrder(order.id)">Hapus Data</button>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>
