<template>
    <main class="w-full h-screen flex flex-col justify-center items-center font-inter">
        <div class="flex flex-row  justify-center items-center p-2 w-full">
            <div
                class="flex flex-col gap-y-2 sm:w-[350px] max-sm:w-[300px] max-sm:text-[10px] bg-white h-full justify-center items-center shadow-xl p-10 rounded">
                <div class="w-full flex justify-center items-center">
                    <h1 class="font-bold text-2xl text-cyan-700 max-sm:text-lg">Register Account</h1>
                </div>
                <form @submit.prevent="login" class="flex flex-col gap-y-4 w-full">
                    <div class="flex flex-col gap-y-1">
                        <div class="relative group">
                            <label for="username" class="absolute top-2 group-hover:text-black/50 left-2 max-sm:top-3 text-black/30">
                                <font-awesome-icon icon="fa-solid fa-user" size="lg" />
                            </label>
                            <input v-model="data.username" type="text" id="username" placeholder="username" name="username"
                                class="border group-hover:border-deepWtr focus:border-green-600 rounded h-10 text-sm outline-none pl-8 w-full max-sm:placeholder:text-xs max-sm:text-xs">
                        </div>
                        <div class=" max-h-7 w-fit text-[11px] text-red-600 max-sm:text-[10px]" v-for="error of v$.username.$errors"
                            :key="error.$uid">
                            <p>{{ error.$message }}</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-y-1">
                        <div class="relative group">
                            <label for="email" class="absolute top-2 group-hover:text-black/50 left-2 max-sm:top-3 text-black/30">
                                <font-awesome-icon icon="fa-solid fa-envelope" size="lg" />
                            </label>
                            <input v-model="data.email" type="email" id="email" placeholder="email" name="email"
                                class="border group-hover:border-deepWtr focus:border-green-600 rounded h-10 text-sm outline-none pl-8 w-full max-sm:placeholder:text-xs max-sm:text-xs">
                        </div>
                        <div class="h-5 w-fit text-[11px] text-red-600 max-sm:text-[10px]" v-for="error of v$.email.$errors"
                            :key="error.$uid">
                            <p>{{ error.$message }}</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-y-1">
                        <div class="relative group">
                            <label for="password" class="absolute top-2 group-hover:text-black/50 left-2 max-sm:top-3 text-black/30">
                                <font-awesome-icon icon="fa-solid fa-lock" size="lg" />
                            </label>
                            <input v-model="data.password" type="password" id="password" placeholder="password"
                                name="password"
                                class="border group-hover:border-deepWtr focus:border-green-600 rounded h-10 text-sm outline-none pl-8 w-full max-sm:placeholder:text-xs max-sm:text-xs">
                        </div>
                        <div class="h-5 w-fit text-[11px] text-red-600 max-sm:text-[10px]"
                            v-for="error of v$.password.$errors" :key="error.$uid">
                            <p>{{ error.$message }}</p>
                        </div>
                    </div>
                    <div class="w-full border">
                        <button
                            class="bg-cyan-700 p-2 text-sm w-full rounded text-cream max-sm:text-xs hover:bg-cyan-600 transition-all">
                            Register
                        </button>
                    </div>
                </form>
                <hr>
                <div class="w-full">
                    <button type="button"
                        class="border p-1 w-full text-black/50 flex items-center justify-evenly rounded hover:bg-slate-100 hover:border-none h-8">
                        <font-awesome-icon icon="fa-brands fa-google" class="text-green-600/50" />
                        <p>Sign up with google</p>
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { computed, reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, email,minLength } from '@vuelidate/validators'
const data = reactive({
    username : '',
    email: '',
    password: ''
})
const rules = computed(() => {
    return {
        username : {
            required,
            minLength : minLength(5)
        },
        email: { required, email },
        password: { required }
    }
})
const v$ = useVuelidate(rules, data)
const login = () => {
    v$.value.$touch()
    if (v$.value.$invalid()) return
}

</script>
