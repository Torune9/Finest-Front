<template>
    <main class="w-full h-screen flex flex-col justify-center items-center font-inter">
        <div class="flex flex-row  justify-center items-center p-2 w-full">
            <div
                class="flex flex-col justify-center items-center text-cream  bg-gradient-to-r from-deepWtr to-pinkSky p-2 h-[400px] md:w-[350px] sm:w-[300px] max-sm:w-[60%] rounded-tl rounded-bl">
                <h1 class="text-2xl max-sm:text-xl font-bold">Welcome...</h1>
                <div class="text-center p-2 max-sm:text-sm font-light">
                    <p>Enjoy your day,
                    Be kind on every <span class=" text-orange-500">message</span> you send,May your day be filled with joy and positivity,Sending good vibes your way!🌟</p>
                </div>
                <router-link to="register"> 
                    <button class="border rounded p-1 w-32 bg-white/30 hover:bg-white/50 transition-all hover:text-white/50 max-sm:text-sm">Sign up</button>
                </router-link>
            </div>
            <div
                class="flex flex-col gap-y-2 sm:w-[300px] max-sm:w-1/2 md:w-[350px] max-sm:text-[10px] bg-white h-full justify-center items-center p-2 shadow-xl sm:p-10 rounded-br rounded-tr">
                <div class="w-full h-[20%] flex justify-center items-center">
                    <h1 class="font-bold text-2xl text-cyan-700 max-sm:text-xl">Login Account</h1>
                </div>
                <form @submit.prevent="login" class="flex flex-col gap-y-2 w-full">
                    <div class="flex flex-col gap-y-1">
                        <div class="relative group">
                            <label for="email" class="absolute top-2 left-2 max-sm:top-3 text-black/30 group-hover:text-black/50">
                                <font-awesome-icon icon="fa-solid fa-envelope" size="lg" />
                            </label>
                            <input v-model="data.email" type="email" id="email" placeholder="email" name="email"
                                class="border hover:border-deepWtr focus:border-green-600 rounded h-10 text-sm outline-none pl-8 w-full max-sm:placeholder:text-xs max-sm:text-xs">
                        </div>
                        <div class="h-5 w-fit text-[11px] text-red-600 max-sm:text-[10px]" v-for="error of v$.email.$errors"
                            :key="error.$uid">
                            <p>{{ error.$message }}</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-y-1">
                        <div class="relative group">
                            <label for="password" class="absolute top-2 left-2 max-sm:top-3 text-black/30 group-hover:text-black/50">
                                <font-awesome-icon icon="fa-solid fa-lock" size="lg" />
                            </label>
                            <input v-model="data.password" type="password" id="password" placeholder="password"
                                name="password"
                                class="border hover:border-deepWtr focus:border-green-600 rounded h-10 text-sm outline-none pl-8 w-full max-sm:placeholder:text-xs max-sm:text-xs">
                        </div>
                        <div class="h-5 w-fit text-[11px] text-red-600 max-sm:text-[10px]"
                            v-for="error of v$.password.$errors" :key="error.$uid">
                            <p>{{ error.$message }}</p>
                        </div>
                    </div>
                    <div class="w-full border">
                        <button
                            class="bg-cyan-700 p-2 text-sm w-full rounded text-cream max-sm:text-xs hover:bg-cyan-600 transition-all">
                            Login
                        </button>
                    </div>
                </form>
                <hr>
                <div class="w-full">
                    <button type="button"
                        class="border p-1 w-full text-black/50 flex items-center justify-evenly rounded hover:bg-slate-100 hover:border-none h-8">
                        <font-awesome-icon icon="fa-brands fa-google" class="text-green-600/50" />
                        <p>Sign in with google</p>
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { computed, reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
const data = reactive({
    email: '',
    password: ''
})
const rules = computed(() => {
    return {
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
