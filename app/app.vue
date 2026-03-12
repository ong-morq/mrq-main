<template>
  <v-app theme="morquioTheme">
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list nav>
        <v-list-item to="/" title="Acasă" prepend-icon="mdi-home"></v-list-item>
        <v-list-item to="/about" title="Misiune" prepend-icon="mdi-bullseye-arrow"></v-list-item>
        <v-list-item to="/team" title="Despre Noi" prepend-icon="mdi-account-group"></v-list-item>
        <v-list-item to="/morquio" title="Sindromul Morquio" prepend-icon="mdi-medical-bag"></v-list-item>
        <v-list-item to="/rights" title="Ghid Drepturi" prepend-icon="mdi-gavel"></v-list-item>
        <v-divider class="my-2"></v-divider>
        <v-list-item to="/donation" title="Donează" prepend-icon="mdi-heart" color="secondary"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar flat color="primary">
      <v-container class="d-flex align-center" style="max-width: 1600px;">
        <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" color="white"></v-app-bar-nav-icon>

        <v-spacer class="d-md-none"></v-spacer>

        <div class="d-none d-md-flex align-center">
          <v-btn to="/" variant="text" color="white" class="text-none mx-1" prepend-icon="mdi-home">Acasă</v-btn>
          <v-btn to="/about" variant="text" color="white" class="text-none mx-1" prepend-icon="mdi-bullseye-arrow">Misiune</v-btn>
          <v-btn to="/team" variant="text" color="white" class="text-none mx-1" prepend-icon="mdi-account-group">Despre Noi</v-btn>
          <v-btn to="/morquio" variant="text" color="white" class="text-none mx-1" prepend-icon="mdi-medical-bag">Sindromul Morquio</v-btn>
          <v-btn to="/rights" variant="text" color="white" class="text-none mx-1" prepend-icon="mdi-gavel">Ghid Drepturi</v-btn>
        </div>

        <v-spacer></v-spacer>

        <v-btn
            href="https://www.facebook.com/profile.php?id=61583452536777"
            target="_blank"
            icon
            color="white"
            class="mx-2"
        >
          <v-icon>mdi-facebook</v-icon>
        </v-btn>

        <v-btn
            to="/donation"
            color="secondary"
            variant="flat"
            elevation="4"
            class="text-none px-6 rounded-pill font-weight-bold scale-button"
        >
          <v-icon start>mdi-heart</v-icon>
          Donează
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main class="bg-background">
      <NuxtPage />
    </v-main>

    <v-footer border-t class="py-8 bg-grey-lighten-4 text-grey-darken-1">
      <v-container>
        <v-row justify="center" align="center" class="text-center">
          <v-col cols="12">
            <div class="font-weight-bold mb-1 text-primary">Asociația Sindromul Morquio</div>
            <div class="text-caption mb-3">CIF 52310560 | Împreună și informați suntem mai puternici!</div>

            <div class="d-flex justify-center align-center">
              <v-btn
                  variant="text"
                  color="primary"
                  class="text-none font-weight-bold"
                  prepend-icon="mdi-email-outline"
                  @click="openSecureEmail"
              >
                Contact: salut [at] asociatiamorquio.ro
              </v-btn>
            </div>

            <div class="mt-4 text-caption">&copy; {{ new Date().getFullYear() }}</div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>

    <div v-if="showBanner" class="gdpr-banner">
      <v-container class="pa-0">
        <v-row no-gutters justify="center" align="center" class="pa-4">
          <v-col cols="12" md="9" class="text-body-2 pr-md-4 mb-3 mb-md-0">
            <strong>Informații:</strong> Site-ul nostru nu colectează date personale automat și nu utilizează cookie-uri de urmărire. Datele personale sunt prelucrate exclusiv în cazul în care alegeți să ne contactați direct prin e-mail.
          </v-col>
          <v-col cols="12" md="3" class="text-md-right text-center">
            <v-btn variant="outlined" color="white" size="small" @click="closeBanner">Am înțeles</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const drawer = ref(false)
const showBanner = ref(false)

onMounted(() => {
  if (!localStorage.getItem('gdprClosed')) {
    showBanner.value = true
  }
})

const closeBanner = () => {
  showBanner.value = false
  localStorage.setItem('gdprClosed', 'true')
}

// FUNCȚIA DE CONTACT PROTEJATĂ (Metoda 1)
const openSecureEmail = () => {
  const user = "salut";
  const domain = "asociatiamorquio.ro";
  // Adresa se asamblează doar la execuție, robotii nu o pot citi din codul sursă static
  window.location.href = `mailto:${user}@${domain}`;
};

useHead({
  title: 'Asociația Sindromul Morquio',
  meta: [
    { name: 'description', content: 'Împreună și informați suntem mai puternici!' }
  ]
})
</script>

<style scoped>
.scale-button:hover {
  transform: scale(1.05);
  transition: transform 0.2s ease;
}

/* GDPR Banner */
.gdpr-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #2c3e50; /* O culoare mai neutră pentru banner */
  color: white;
  z-index: 1000;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.2);
}

.v-btn {
  letter-spacing: 0.02em;
}
</style>