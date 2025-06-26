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
        headers: {
            'Content-Type': 'application/json' // Important: Add Content-Type header
        }
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
        <h1 class="text-lg sm:text-2xl text-center">Edit Produk</h1> <form @submit.prevent="saveData">
            <div class="w-full">
                <label for="nameInput">Nama</label> <input type="text" id="nameInput" v-model="name" />
            </div>
            <div>
                <label for="amountInput">Jumlah</label> <input type="number" id="amountInput" v-model="amount" />
            </div>
    
            <div class="mt-3">
                <button type="submit">Simpan</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
/* Add the new CSS code here */
/* Main container styling */
.container {
  font-family: Arial, sans-serif;
  max-width: 500px; /* Adjust max-width as needed */
  margin: 40px auto; /* Center the container */
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Heading styling */
h1 {
  color: #2c3e50;
  margin-bottom: 30px;
  font-size: 2em; /* Larger font for heading */
  text-align: center;
  border-bottom: 2px solid #42b983; /* Green underline */
  padding-bottom: 10px;
}

/* Form section styling */
form > div {
  margin-bottom: 20px; /* Space between form groups */
}

/* Label styling */
label {
  display: block; /* Make labels take their own line */
  margin-bottom: 8px;
  font-weight: bold;
  color: #34495e;
  font-size: 1.1em;
}

/* Input field styling */
input[type="text"],
input[type="number"] {
  width: calc(100% - 20px); /* Account for padding */
  padding: 12px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  color: #333;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input[type="text"]:focus,
input[type="number"]:focus {
  border-color: #42b983; /* Green border on focus */
  box-shadow: 0 0 0 3px rgba(66, 185, 131, 0.2); /* Light green glow on focus */
  outline: none; /* Remove default outline */
}

/* Submit button styling */
button[type="submit"] {
  display: block; /* Make button take full width */
  width: 100%;
  padding: 15px 20px;
  background-color: #42b983; /* Green button */
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1em;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button[type="submit"]:hover {
  background-color: #369b6f; /* Darker green on hover */
  transform: translateY(-2px); /* Slight lift on hover */
}

button[type="submit"]:active {
  background-color: #2e8b57; /* Even darker green on click */
  transform: translateY(0); /* Return to original position */
}

/* Margin top for the button div */
.mt-3 {
  margin-top: 30px; /* More space above the button */
}
</style>