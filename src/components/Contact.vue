<template>
  <section
    id="contact"
    class="py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 relative overflow-hidden"
  >
    <!-- Background visual graphics -->
    <div class="absolute top-1/2 left-0 w-80 h-80 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
    <div class="absolute top-1/4 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-20">
        <h2
          class="text-base font-mono text-teal-500 dark:text-teal-400 uppercase tracking-widest font-semibold"
        >
          {{ t.navContact }}
        </h2>
        <h3
          class="text-3xl md:text-5xl font-sans font-extrabold tracking-tight mt-3"
        >
          {{ t.contactSubtitle }}
        </h3>
        <div class="w-16 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mt-6 rounded-full" />
      </div>

      <!-- Contact Dual Column layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        <!-- Left Column: Direct coords -->
        <div class="lg:col-span-5 text-left rtl:text-right flex flex-col gap-8">
          <div>
            <h4 class="text-2xl font-sans font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
              {{ t.contactInfoTitle }}
            </h4>
            <p class="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
              {{ t.contactInfoDesc }}
            </p>
          </div>

          <div class="flex flex-col gap-6">
            <div
              v-for="(cd, index) in coordItems"
              :key="index"
              class="flex gap-4 items-center bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl shadow-sm transition-transform duration-300 hover:translate-x-1"
            >
              <div class="w-12 h-12 rounded-xl bg-white dark:bg-slate-950 flex items-center justify-center shrink-0 shadow-inner">
                <component :is="cd.icon" class="w-5 h-5" />
              </div>
              <div>
                <span class="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-0.5">
                  {{ cd.label }}
                </span>
                <a
                  v-if="cd.link"
                  :href="cd.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm sm:text-base font-sans font-bold text-slate-900 dark:text-white hover:text-teal-500 transition-colors"
                >
                  {{ cd.value }}
                </a>
                <span v-else class="text-sm sm:text-base font-sans font-bold text-slate-900 dark:text-white">
                  {{ cd.value }}
                </span>
              </div>
            </div>
          </div>

          <!-- Direct Work pitch card -->
          <div class="bg-gradient-to-tr from-teal-500/10 to-indigo-500/10 border border-teal-500/15 p-6 rounded-2xl flex gap-4 items-start max-w-md">
            <MessageSquare class="w-6 h-6 text-teal-500 shrink-0 mt-0.5" />
            <div>
              <span class="block text-sm font-sans font-bold text-slate-900 dark:text-white mb-1">
                {{ store.lang === 'en' ? "Full NDA Protection" : "حماية كاملة للملكية وسرية البيانات" }}
              </span>
              <span class="text-xs text-slate-500 dark:text-slate-400 leading-normal block">
                {{ store.lang === 'en'
                  ? "Your digital assets, source codes, files, and project parameters are 100% protected under standard legal terms."
                  : "جميع ملفاتك، برمجياتك، كود المصدر، ومواصفات المشروع محمية وسرية بالكامل طبقاً لأعلى الشروط القانونية لحفظ الحقوق." }}
              </span>
            </div>
          </div>
        </div>

        <!-- Right Column: Contact form with error bounds and delivery modes -->
        <div class="lg:col-span-7">
          <div
            class="bg-slate-50 dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden"
          >
            
            <!-- Form trigger block -->
            <form @submit.prevent="handleSubmit" class="space-y-6 text-left rtl:text-right">
              
              <!-- Row: Name and Email -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label class="block text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    {{ t.contactFormName }} <span class="text-teal-500">*</span>
                  </label>
                  <input
                    type="text"
                    v-model="formData.name"
                    class="w-full py-3.5 px-4 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-left"
                    :class="errors.name ? 'border-rose-500 bg-rose-500/5 text-rose-950 dark:text-rose-100' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white'"
                  />
                  <span v-if="errors.name" class="text-xs text-rose-500 font-medium flex items-center gap-1 mt-1.5">
                    <AlertCircle class="w-3.5 h-3.5" />
                    <span>{{ errors.name }}</span>
                  </span>
                </div>

                <div>
                  <label class="block text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    {{ t.contactFormEmail }} <span class="text-teal-500">*</span>
                  </label>
                  <input
                    type="email"
                    v-model="formData.email"
                    class="w-full py-3.5 px-4 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-left"
                    :class="errors.email ? 'border-rose-500 bg-rose-500/5 text-rose-950 dark:text-rose-100' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white'"
                  />
                  <span v-if="errors.email" class="text-xs text-rose-500 font-medium flex items-center gap-1 mt-1.5">
                    <AlertCircle class="w-3.5 h-3.5" />
                    <span>{{ errors.email }}</span>
                  </span>
                </div>
              </div>

              <!-- Subject -->
              <div>
                <label class="block text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  {{ t.contactFormSubject }} <span class="text-teal-500">*</span>
                </label>
                <input
                  type="text"
                  v-model="formData.subject"
                  class="w-full py-3.5 px-4 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-left"
                  :class="errors.subject ? 'border-rose-500 bg-rose-500/5 text-rose-950 dark:text-rose-100' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white'"
                />
                <span v-if="errors.subject" class="text-xs text-rose-500 font-medium flex items-center gap-1 mt-1.5">
                  <AlertCircle class="w-3.5 h-3.5" />
                  <span>{{ errors.subject }}</span>
                </span>
              </div>

              <!-- Message -->
              <div>
                <label class="block text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  {{ store.lang === 'en' ? 'Message content' : 'محتوى ومواصفات رسالتك' }} <span class="text-teal-500">*</span>
                </label>
                <textarea
                  rows="5"
                  v-model="formData.message"
                  :placeholder="t.contactFormMessage"
                  class="w-full py-3.5 px-4 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-left resize-none"
                  :class="errors.message ? 'border-rose-500 bg-rose-500/5 text-rose-950 dark:text-rose-100' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white'"
                />
                <span v-if="errors.message" class="text-xs text-rose-500 font-medium flex items-center gap-1 mt-1.5">
                  <AlertCircle class="w-3.5 h-3.5" />
                  <span>{{ errors.message }}</span>
                </span>
              </div>

              <!-- Submit button with loading spinner state -->
              <div class="pt-2">
                <button
                  :disabled="loading"
                  type="submit"
                  class="w-full py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 disabled:from-teal-400 disabled:to-emerald-400 text-white font-sans text-sm font-bold tracking-wide shadow-lg shadow-teal-500/25 flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.01] active:scale-[0.99]"
                >
                  <template v-if="loading">
                    <div class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>{{ t.contactBtnSending }}</span>
                  </template>
                  <template v-else>
                    <Send class="w-4 h-4" />
                    <span>{{ t.contactBtnSend }}</span>
                  </template>
                </button>
              </div>

            </form>

            <!-- Dynamic Success Modal Alert -->
            <transition name="fade">
              <div
                v-if="success"
                class="absolute inset-0 bg-white dark:bg-slate-900 z-30 flex flex-col items-center justify-center p-8 text-center"
              >
                <!-- Glowing success seal -->
                <div class="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6">
                  <CheckCircle2 class="w-10 h-10" />
                </div>

                <h4 class="text-2xl font-sans font-extrabold text-slate-950 dark:text-white mb-3">
                  {{ t.contactSuccessTitle }}
                </h4>
                <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-md mb-8">
                  {{ t.contactSuccessMsg }}
                </p>

                <button
                  @click="success = false"
                  class="px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-sans text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-950 cursor-pointer transition-colors"
                >
                  {{ store.lang === 'en' ? "Close Alert" : "إغلاق التنبيه" }}
                </button>
              </div>
            </transition>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue';
import { usePortfolioStore } from '../store';
import { TRANSLATIONS } from '../translations';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-vue-next';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const store = usePortfolioStore();
const t = computed(() => (TRANSLATIONS as any)[store.lang]);

const formData = reactive<FormState>({ name: '', email: '', subject: '', message: '' });
const errors = reactive<FormErrors>({});
const loading = ref(false);
const success = ref(false);

const validate = (): boolean => {
  // Clear keys
  errors.name = undefined;
  errors.email = undefined;
  errors.subject = undefined;
  errors.message = undefined;

  let isValid = true;
  if (!formData.name.trim()) {
    errors.name = store.lang === 'en' ? 'Name is required' : 'الاسم مطلوب';
    isValid = false;
  }
  if (!formData.email.trim()) {
    errors.email = store.lang === 'en' ? 'Email is required' : 'البريد الإلكتروني مطلوب';
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = store.lang === 'en' ? 'Invalid email address' : 'البريد الإلكتروني غير صحيح';
    isValid = false;
  }
  if (!formData.subject.trim()) {
    errors.subject = store.lang === 'en' ? 'Subject is required' : 'موضوع الرسالة مطلوب';
    isValid = false;
  }
  if (!formData.message.trim()) {
    errors.message = store.lang === 'en' ? 'Message is required' : 'محتوى الرسالة مطلوب';
    isValid = false;
  } else if (formData.message.trim().length < 10) {
    errors.message = store.lang === 'en' ? 'Message must be at least 10 characters' : 'يجب أن لا تقل الرسالة عن ١٠ أحرف';
    isValid = false;
  }

  return isValid;
};

const handleSubmit = () => {
  if (!validate()) return;

  loading.value = true;
  // Simulate API delivery delay
  setTimeout(() => {
    loading.value = false;
    success.value = true;
    formData.name = '';
    formData.email = '';
    formData.subject = '';
    formData.message = '';
  }, 1500);
};

const coordItems = computed(() => [
  {
    label: store.lang === 'en' ? 'Direct Email' : 'البريد المباشر',
    value: "anas.akram8143863@gmail.com",
    link: "mailto:anas.akram8143863@gmail.com",
    icon: Mail
  },
  {
    label: store.lang === 'en' ? 'WhatsApp Coordinates' : 'رقم الواتساب المباشر',
    value: "+970 598 143 863",
    link: "https://wa.me/970598143863",
    icon: Phone
  },
  {
    label: store.lang === 'en' ? 'Office Location' : 'المقر الجغرافي للعمل',
    value: store.lang === 'en' ? "Palestine, Gaza Strip" : "فلسطين، قطاع غزة",
    link: null,
    icon: MapPin
  }
]);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
