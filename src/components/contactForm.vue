<template>
  <v-sheet border="md" color="primary" class="mx-16 my-6 rounded">
    <form class="bg-secondary-1 pa-4 rounded" @submit.prevent="submitForm">
      <v-text-field
        v-model="state.name"
        :counter="70"
        :error-messages="v$.name.$errors.map(e => e.$message)"
        label="Name"
        required
        @blur="v$.name.$touch"
        @input="v$.name.$touch"
      ></v-text-field>

      <v-text-field
        v-model="state.surname"
        :counter="70"
        :error-messages="v$.surname.$errors.map(e => e.$message)"
        label="Surname"
        required
        @blur="v$.surname.$touch"
        @input="v$.surname.$touch"
      ></v-text-field>

      <v-text-field
        v-model="state.email"
        :error-messages="v$.email.$errors.map(e => e.$message)"
        label="E-mail"
        required
        @blur="v$.email.$touch"
        @input="v$.email.$touch"
      ></v-text-field>

      <v-select
        v-model="state.select"
        :error-messages="v$.select.$errors.map(e => e.$message)"
        :items="subjects"
        label="Reason for contact"
        required
        @blur="v$.select.$touch"
        @change="v$.select.$touch"
      ></v-select>

      <v-textarea 
        v-model="state.message"
        :error-messages="v$.message.$errors.map(e => e.$message)"
        label="Message"
        required
        @blur="v$.message.$touch"
        @input="v$.message.$touch"
      ></v-textarea >

      <v-checkbox
        v-model="state.dataChoice"
        :error-messages="v$.dataChoice.$errors.map(e => e.$message)"
        label="By submitting this form, you agree to the collection and processing of your data for the purposes of this request."
        required
        @blur="v$.dataChoice.$touch"
        @change="v$.dataChoice.$touch"
      ></v-checkbox>

      <v-checkbox
        v-model="state.newsletter"
        label="I would like to receive newsletters and updates. You can unsubscribe at any time."
      ></v-checkbox>

      <!-- Loader -->
      <v-progress-circular
        v-if="loading"
        indeterminate
        color="primary"
        size="40"
        class="mx-auto my-4"
      ></v-progress-circular>

      <v-btn class="me-4" type="submit" :disabled="loading">Submit</v-btn>
      <v-btn @click="clear" :disabled="loading">Clear</v-btn>

      <p v-if="successMessage" class="text-success mt-4">{{ successMessage }}</p>
      <p v-if="errorMessage" class="text-error mt-4">{{ errorMessage }}</p>
    </form>
  </v-sheet>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'

const initialState = {
  name: '',
  surname: '',
  email: '',
  select: null,
  message: '',
  dataChoice: null,
  newsletter: false, // Default to false
}

const state = reactive({ ...initialState })

const subjects = [
  'Press Inquiry',
  'Product Inquiry',
  'Partnership Proposal',
  'Support Request',
  'Demo Request',
  'Customer Feedback',
  'General Inquiry',
  'Event Participation',
  'Job Vacancy Inquiry',
]

const rules = {
  name: { required },
  surname: { required },
  email: { required, email },
  select: { required },
  message: { required },
  dataChoice: { required },
}

const v$ = useVuelidate(rules, state)

const successMessage = ref("")
const errorMessage = ref("")
const loading = ref(false) // Loader state

async function submitForm() {
  const isFormCorrect = await v$.value.$validate()

  if (!isFormCorrect) {
    errorMessage.value = "Please correct the errors before submitting."
    successMessage.value = ""
    return
  }

  errorMessage.value = ""
  loading.value = true // Start loader

  // Creating FormData for Formspree
  const formData = new FormData()
  formData.append('name', state.name)
  formData.append('surname', state.surname)
  formData.append('email', state.email)
  formData.append('reason', state.select)
  formData.append('message', state.message)
  formData.append('dataConsent', state.dataChoice ? 'Yes' : 'No')
  formData.append('newsletter', state.newsletter ? 'Yes' : 'No')

  try {
    const response = await fetch('https://formspree.io/f/mpwqvyvj', {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    })

    if (!response.ok) throw new Error("Failed to submit form")

    successMessage.value = "Message submitted successfully!"
    setTimeout(() => {
      clear()
    }, 6000)
  } catch (error) {
    errorMessage.value = "An error occurred. Please try again."
  } finally {
    loading.value = false // Stop loader
  }
}

function clear() {
  v$.value.$reset()
  Object.assign(state, initialState)
  successMessage.value = ""
  errorMessage.value = ""
}
</script>

<style>
.text-success {
  color: green;
  font-weight: bold;
}

.text-error {
  color: red;
  font-weight: bold;
}
</style>
