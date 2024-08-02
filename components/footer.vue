<template>
    <footer class="bg-[#1e1e1e] text-white py-8">
        <div class="container mx-auto px-4">
            <div class="flex flex-wrap -mx-2">
                <div class="w-full px-2 md:w-2/6 mb-6 md:mb-0">
                    <nuxt-link to="#" class="flex items-center mb-4">
                        <img src="https://placehold.co/180x50.png" alt="Travel Logo" class="mr-2">
                        <!-- <span class="text-xl font-bold">Travel</span> -->
                    </nuxt-link>
                    <p class="text-sm lg:text-base">Don't just get there, get there in style.</p>
                    <div class="mt-4 text-sm lg:text-base">
                        <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                        <p>(308) 555-0121</p>
                        <p>hello@travelwp.com</p>
                    </div>
                </div>
                <div class="w-full px-2 md:w-1/6 mb-6 md:mb-0 flex flex-col md:items-end lg:items-center">
                    <h3 class="lg:text-xl font-semibold mb-2">Top Destination</h3>
                    <ul class="text-sm lg:text-base">
                        <li><nuxt-link to="#" class="text-slate-500 hover:text-blue-500">Tokyo</nuxt-link></li>
                        <li><nuxt-link to="#" class="text-slate-500 hover:text-blue-500">Los Angeles</nuxt-link></li>
                        <li><nuxt-link to="#" class="text-slate-500 hover:text-blue-500">Rome</nuxt-link></li>
                        <li><nuxt-link to="#" class="text-slate-500 hover:text-blue-500">Amsterdam</nuxt-link></li>
                        <li><nuxt-link to="#" class="text-slate-500 hover:text-blue-500">San Francisco</nuxt-link></li>
                        <li><nuxt-link to="#" class="text-slate-500 hover:text-blue-500">London</nuxt-link></li>
                        <li><nuxt-link to="#" class="text-slate-500 hover:text-blue-500">More Destinations</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="w-full px-2 md:w-1/6 mb-6 md:mb-0 flex flex-col md:items-end lg:items-center">
                    <h3 class="lg:text-xl font-semibold mb-2">Information</h3>
                    <ul class="text-sm lg:text-base">
                        <li><nuxt-link to="#" class="text-slate-500 hover:text-blue-500">Help & FAQs</nuxt-link></li>
                        <li><nuxt-link to="#" class="text-slate-500 hover:text-blue-500">Press centre</nuxt-link></li>
                        <li><nuxt-link to="#" class="text-slate-500 hover:text-blue-500">About us</nuxt-link></li>
                        <li><nuxt-link to="/contact" class="text-slate-500 hover:text-blue-500">Contact us</nuxt-link></li>
                        <li><nuxt-link to="#" class="text-slate-500 hover:text-blue-500">Privacy policy</nuxt-link></li>
                        <li><nuxt-link to="#" class="text-slate-500 hover:text-blue-500">Site map</nuxt-link></li>
                    </ul>
                </div>
                <div class="w-full px-2 md:w-2/6 flex flex-col md:items-end lg:items-center cursor-pointer">
                    <div class="">
                        <h3 class="lg:text-xl font-semibold mb-2">Follow Us</h3>
                        <div class="flex space-x-2">
                            <img src="https://placehold.co/50x50.png" alt="Facebook" class="w-10 h-10 rounded-full">
                            <img src="https://placehold.co/50x50.png" alt="Instagram" class="w-10 h-10 rounded-full">
                            <img src="https://placehold.co/50x50.png" alt="Twitter" class="w-10 h-10 rounded-full">
                            <img src="https://placehold.co/50x50.png" alt="LinkedIN" class="w-10 h-10 rounded-full">
                        </div>
                    </div>
                    <div class="mt-4">
                        <h3 class="lg:text-xl font-semibold mb-2">Payment channels</h3>
                        <div class="flex space-x-2">
                            <img src="https://placehold.co/50x50.png" alt="Visa" class="w-10 h-10 rounded-lg">
                            <img src="https://placehold.co/50x50.png" alt="Mastercard" class="w-10 h-10 rounded-lg">
                            <img src="https://placehold.co/50x50.png" alt="American Express"
                                class="w-10 h-10 rounded-lg">
                            <img src="https://placehold.co/50x50.png" alt="PayPal" class="w-10 h-10 rounded-lg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-gray-800 text-center py-4 mt-8">
            <p>&copy; 2024 Jaipur Darshan. All Rights Reserved.</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>
footer ul li {
    margin-bottom: 0.5rem;
}

footer a {
    display: inline-block;
    transition: transform 0.2s;
}

footer a:hover {
    transform: scale(1.1);
}
</style>