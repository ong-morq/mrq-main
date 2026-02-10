<template>
  <v-container class="py-16 px-6" style="max-width: 800px;">
    <div class="text-center mb-12">
      <v-icon color="primary" size="64" class="mb-4">mdi-message-text-outline</v-icon>
      <h1 class="text-h3 font-weight-bold mb-4">Contact</h1>
      <p class="text-h6 text-grey-darken-1">
        Suntem aici să ascultăm și să oferim informații. Ne puteți găsi prin oricare dintre modalitățile de mai jos.
      </p>
    </div>

    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card variant="flat" class="pa-8 rounded-xl bg-grey-lighten-4">
          <v-list bg-color="transparent" class="pa-0">

            <v-list-item class="mb-6 px-0">
              <template v-slot:prepend>
                <v-avatar color="primary" variant="tonal" class="mr-4">
                  <v-icon color="primary">mdi-email-outline</v-icon>
                </v-avatar>
              </template>
              <v-list-item-title class="text-h6 font-weight-bold">Email Oficial</v-list-item-title>
              <v-list-item-subtitle class="text-body-1 mt-1">
                <a
                    @click.prevent="openMail"
                    href="#"
                    class="text-decoration-none text-primary font-weight-bold email-link"
                >
                  {{ obfuscatedEmail }}
                </a>
                <div class="text-caption text-grey">Apasă pentru a trimite mesajul</div>
              </v-list-item-subtitle>
            </v-list-item>

            <v-divider class="mb-6"></v-divider>

            <v-list-item class="mb-6 px-0">
              <template v-slot:prepend>
                <v-avatar color="blue-darken-2" variant="tonal" class="mr-4">
                  <v-icon color="blue-darken-2">mdi-facebook</v-icon>
                </v-avatar>
              </template>
              <v-list-item-title class="text-h6 font-weight-bold">Social Media</v-list-item-title>
              <v-list-item-subtitle class="text-body-1 mt-1">
                Urmărește noutățile pe
                <a
                    href="https://www.facebook.com/profile.php?id=61583452536777"
                    target="_blank"
                    class="text-decoration-none text-blue-darken-2 font-weight-bold"
                >
                  Facebook
                </a>
              </v-list-item-subtitle>
            </v-list-item>

            <v-divider class="mb-6"></v-divider>


          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <div class="text-center mt-12">
      <p class="text-body-2 text-grey-darken-1 italic">
        "Împreună și informați suntem mai puternici!"
      </p>
    </div>
  </v-container>
</template>

<script setup>
import { computed } from 'vue'

/**
 * Logică pentru protecția email-ului împotriva boților de tip scraper.
 * Adresa este asamblată doar la nivel de client.
 */
const user = 'contact'
const domain = 'asociatiamorquio.ro'

const obfuscatedEmail = computed(() => `${user}@${domain}`)

const openMail = () => {
  window.location.href = `mailto:${user}@${domain}`
}

// Titlul paginii pentru Browser
useHead({
  title: 'Contact - Asociația Sindromul Morquio'
})
</script>

<style scoped>
.email-link:hover {
  text-decoration: underline !important;
}

/* Efect discret la trecerea peste card */
.v-card {
  transition: transform 0.3s ease;
}

@media (max-width: 600px) {
  .text-h3 {
    font-size: 2rem !important;
  }
}
</style>