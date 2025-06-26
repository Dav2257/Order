<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();

const name = ref('')
const amount = ref(0)

const saveData = async () => {
    const newOrder = JSON.stringify({
        name: name.value,
        amount: amount.value,
    })

    const response = await fetch('/api/orders', {
        method:'POST',
        body: newOrder,
        headers: {
            'Content-Type': 'application/json' // Important: Add Content-Type header
        }
    })
    const data = await response.json()

    router.push('/')
}
</script>

<template>
    <div class="container px-4 py-6 mx-auto w-lg">
        <h1 class="text-lg sm:text-2xl text-center">Buat Produk Baru</h1>
        <form @submit.prevent="saveData">
            <div class="w-full">
                <label for="newNameInput">Nama</label>
                <input type="text" id="newNameInput" v-model="name" />
            </div>
            <div>
                <label for="newAmountInput">jumlah</label>
                <input type="number" id="newAmountInput" v-model="amount" />
            </div>
    
            <div class="mt-3">
                <button type="submit">Simpan</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
/* Main container styling */
.container {
  font-family: Arial, sans-serif;
  max-width: 500px;
  margin: 40px auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Heading styling */
h1 {
  color: #2c3e50;
  margin-bottom: 30px;
  font-size: 2em;
  text-align: center;
  border-bottom: 2px solid #42b983;
  padding-bottom: 10px;
}

/* Form section styling */
form > div {
  margin-bottom: 20px;
}

/* Label styling */
label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #34495e;
  font-size: 1.1em;
}

/* Input field styling */
input[type="text"],
input[type="number"] {
  width: calc(100% - 20px);
  padding: 12px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  color: #333;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input[type="text"]:focus,
input[type="number"]:focus {
  border-color: #42b983;
  box-shadow: 0 0 0 3px rgba(66, 185, 131, 0.2);
  outline: none;
}

/* Submit button styling */
button[type="submit"] {
  display: block;
  width: 100%;
  padding: 15px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1em;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button[type="submit"]:hover {
  background-color: #369b6f;
  transform: translateY(-2px);
}

button[type="submit"]:active {
  background-color: #2e8b57;
  transform: translateY(0);
}

/* Margin top for the button div */
.mt-3 {
  margin-top: 30px;
}
</style>