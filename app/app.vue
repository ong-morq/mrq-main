<template>
  <v-app theme="morquioTheme">
    <!-- DRAWER -->
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

    <!-- APPBAR -->
    <v-app-bar flat color="primary">
      <v-container class="d-flex align-center" style="max-width: 1600px;">
        <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" color="white"></v-app-bar-nav-icon>

        <v-spacer class="d-md-none"></v-spacer>

        <!-- MENIU DESKTOP -->
        <div class="d-none d-md-flex align-center">
          <v-btn to="/" variant="text" color="white" class="text-none mx-1" prepend-icon="mdi-home">Acasă</v-btn>
          <v-btn to="/about" variant="text" color="white" class="text-none mx-1" prepend-icon="mdi-bullseye-arrow">Misiune</v-btn>
          <v-btn to="/team" variant="text" color="white" class="text-none mx-1" prepend-icon="mdi-account-group">Despre Noi</v-btn>
          <v-btn to="/morquio" variant="text" color="white" class="text-none mx-1" prepend-icon="mdi-medical-bag">Sindromul Morquio</v-btn>
          <v-btn to="/rights" variant="text" color="white" class="text-none mx-1" prepend-icon="mdi-gavel">Ghid Drepturi</v-btn>
        </div>

        <v-spacer></v-spacer>

        <!-- FACEBOOK ICON + DONEAZĂ -->
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

    <!-- MAIN -->
    <v-main class="bg-background">
      <NuxtPage />
    </v-main>

    <!-- FOOTER -->
    <v-footer border-t class="py-6 bg-grey-lighten-4 text-grey-darken-1">
      <v-container>
        <v-row justify="center" align="center" class="text-center text-caption">
          <v-col cols="12">
            <div class="font-weight-bold mb-1 text-primary">Asociația Sindromul Morquio</div>
            <div>CIF 52310560 | Împreună și informați suntem mai puternici!</div>
            <div class="mt-1">&copy; {{ new Date().getFullYear() }}</div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>

    <!-- GDPR BANNER -->
    <div v-if="showBanner" class="gdpr-banner">
      <v-row justify="center" align="center" class="pa-4">
        <v-col cols="12" md="10" class="d-flex justify-space-between align-center">
          <div>Site-ul nu colectează date personale și nu folosește cookie-uri de tracking.</div>
          <v-btn small text color="white" @click="closeBanner">Am înțeles</v-btn>
        </v-col>
      </v-row>
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

// Setăm titlul browserului global pentru asociație
useHead({
  title: 'Asociația Sindromul Morquio',
  meta: [
    { name: 'description', content: 'Împreună și informați suntem mai puternici!' }
  ]
})
</script>

<style scoped>
/* Efect de mărire la hover pentru butonul de donație */
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
  background-color: #1976D2;
  color: white;
  z-index: 1000;
  font-size: 0.9rem;
}

/* Opțional: ajustare font pentru butoanele din meniu */
.v-btn {
  letter-spacing: 0.02em;
}
</style>
