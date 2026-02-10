<script setup lang="ts">
const { locale } = useI18n()

// Folosim `locale.value` pentru a construi calea dinamic
// Dacă locale e 'ro', calea devine '/ro/welcome'
const { data: home } = await useAsyncData(`home-${locale.value}`, () =>
    queryCollection('content').path(`/${locale.value}/welcome`).first()
)
</script>

<template>
  <v-container class="py-12">
    <v-row v-if="home" justify="center">
      <v-col cols="12" md="12">

        <h1 class="text-h3 font-weight-bold mb-6">
          {{ home.meta.welcome_title }}
          <span class="text-primary">{{ home.meta.association_name }}</span>
        </h1>

        <p class="text-h6 font-weight-regular mb-10 text-grey-darken-2">
          {{ home.meta.intro_p1 }}
        </p>

        <v-card
            variant="tonal"
            color="primary"
            class="pa-8 my-10 border-s-xl"
            rounded="lg"
        >
          <p class="text-h4 text-center font-italic font-weight-medium mb-4">
            „{{ home.meta.slogan }}”
          </p>
          <div class="text-center">
            <v-btn
                to="/donation"
                variant="text"
                color="primary"
                class="text-none font-weight-bold"
                prepend-icon="mdi-hand-heart-outline"
            >
              Află cum poți susține misiunea noastră
            </v-btn>
          </div>
        </v-card>

        <div class="text-body-1 mt-8">
          <ContentRenderer v-if="home" :value="home" />
        </div>

      </v-col>
    </v-row>

    <v-row v-else justify="center">
      <v-col cols="12" md="8" class="text-center">
        <v-alert
            type="warning"
            variant="outlined"
            title="Conținut negăsit"
            text="Asigură-te că fișierul welcome.md este în content/ro/ și că ai creat content.config.ts"
        ></v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
:deep(.text-body-1 p) {
  margin-bottom: 1.5rem;
  line-height: 1.8;
  text-align: justify;
}

/* Efect de hover discret pentru link-ul din card */
.v-btn:hover {
  background-color: rgba(var(--v-theme-primary), 0.05);
}
</style>