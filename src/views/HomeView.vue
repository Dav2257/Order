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
      <RouterLink to="/orders" class="router-link">Buat Produk</RouterLink>
    </div>

    ---
    <h2>Menu Makanan/Minuman</h2>
    <div>
      <ul>
        <li v-for="item in menuItems" :key="item.id">
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

/* --- KODE CSS BARU DIMULAI DARI SINI --- */

/* General layout and spacing */
main {
  font-family: Arial, sans-serif;
  max-width: 900px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #2c3e50;
  border-bottom: 2px solid #42b983;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

/* RouterLink styling */
/* CATATAN: Saya tambahkan class="router-link" di <RouterLink to="/orders"> */
.router-link {
  display: inline-block;
  background-color: #42b983;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin-bottom: 20px;
}

.router-link:hover {
  background-color: #369b6f;
}

/* Menu Items Styling */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* CATATAN: Saya hapus inline style di <li> menuItems */
li {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;
}

li:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* CATATAN: Ini adalah style bawaan Anda, pastikan ini ada di atas */
/*
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
*/

/* Order List Specific Styling */
div > ul > li { /* Target specific list items for orders */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  background-color: #e8f5e9; /* Light green background for orders */
  border-color: #c8e6c9;
  padding: 12px 15px;
}

div > ul > li > div {
  flex-grow: 1; /* Allow content to grow */
  color: #388e3c;
}

div > ul > li > div:first-child {
  font-weight: bold;
  min-width: 120px; /* Ensure name has enough space */
}

div > ul > li > div:nth-child(2) {
  color: #555;
  min-width: 80px; /* Ensure amount has enough space */
}

/* Buttons and Links within Order List */
div > ul > li .router-link,
div > ul > li button {
  padding: 8px 12px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: normal;
  font-size: 0.9em;
  cursor: pointer;
  white-space: nowrap; /* Prevent text wrapping */
}

div > ul > li .router-link {
  background-color: #3498db; /* Blue for Edit */
  color: white;
  margin-right: 5px;
}

div > ul > li .router-link:hover {
  background-color: #2980b9;
}

div > ul > li button {
  background-color: #e74c3c; /* Red for Hapus Data */
  color: white;
  border: none;
}

div > ul > li button:hover {
  background-color: #c0392b;
}

/* --- KODE CSS BARU BERAKHIR DI SINI --- */
</style>