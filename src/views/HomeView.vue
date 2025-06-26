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
    fetchOrders()
  }
}
const menuItems = ref([
  { id: 'm1', name: 'Nasi Goreng Spesial', description: 'Nasi goreng dengan telur, ayam, dan kerupuk.', price: 'Rp 25.000' },
  { id: 'm2', name: 'Es Teh Manis', description: 'Es teh segar dengan gula aren.', price: 'Rp 8.000' },
  { id: 'm3', name: 'Mie Ayam Bakso', description: 'Mie ayam dengan bakso sapi dan pangsit.', price: 'Rp 20.000' },
]);
</script>

<template>
  <main>
    <div>Order</div>
    <div>
      <RouterLink to="/orders">Buat Produk</RouterLink>
    </div>

    ---
    <h2>Menu Makanan/Minuman</h2>
    <div>
      <ul>
        <li v-for="item in menuItems" :key="item.id" style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px;">
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
          <p><strong>Harga: {{ item.price }}</strong></p>
        </li>
      </ul>
    </div>
    ---
    <div>
      <h2>Daftar Pesanan</h2>
      <ul>
        <li v-for="order in orders" :key="order.id">
          <div>nama: {{ order.name }}</div>
          <div>jumlah: {{ order.amount }}</div>
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

<style scoped>
/* Optional: Add some basic styling for the menu items */
h3 {
  margin-top: 0;
  color: #333;
}
p {
  margin-bottom: 5px;
  color: #555;
}
strong {
  color: #000;
}
</style>