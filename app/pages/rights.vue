<script setup lang="ts">
const { locale } = useI18n()

// Preluăm datele din fișierul rights.md
const { data: page } = await useAsyncData(`content-rights-${locale.value}`, () =>
    queryCollection('content').path(`/${locale.value}/rights`).first()
)
</script>

<template>
  <v-container class="py-16 px-6" style="max-width: 900px;">
    <div v-if="page">
      <div class="text-center mb-12">
        <v-chip color="primary" variant="tonal" class="mb-4 font-weight-bold">
          {{ page.meta.welcome_title }}
        </v-chip>
      </div>

      <v-expansion-panels variant="inset" class="my-10">
        <v-expansion-panel
            v-for="section in page.meta.sections"
            :key="section.id"
            elevation="2"
            class="mb-3 rounded-xl overflow-hidden"
        >
          <v-expansion-panel-title class="py-6">
            <template v-slot:default="{ expanded }">
              <v-row no-gutters align="center">
                <v-col cols="1" class="d-flex justify-start">
                  <v-icon :color="expanded ? 'primary' : 'grey'" size="28">
                    {{ section.icon }}
                  </v-icon>
                </v-col>
                <v-col cols="11">
                  <span class="text-h6 font-weight-bold" :class="expanded ? 'text-primary' : 'text-grey-darken-3'">
                    {{ section.title }}
                  </span>
                </v-col>
              </v-row>
            </template>
          </v-expansion-panel-title>

          <v-expansion-panel-text class="pa-4 text-body-1 text-grey-darken-2 line-height-lg">
            <div v-html="section.content"></div>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>

      <v-alert
          variant="flat"
          color="grey-lighten-4"
          rounded="xl"
          class="mt-10 pa-8 border-s-heavy"
      >
        <template v-slot:prepend>
          <v-icon color="grey-darken-3" size="36">mdi-shield-check-outline</v-icon>
        </template>

        <div class="text-overline mb-2 text-grey-darken-2" style="letter-spacing: 2px !important;">
          {{ page.meta.avertisment }}
        </div>

        <div class="text-body-1 text-grey-darken-4 font-weight-medium line-height-md">
          <div v-html="page.meta.disclaimer"></div>
        </div>
      </v-alert>
    </div>
  </v-container>
</template>

<style scoped>
.line-height-lg {
  line-height: 1.8;
}

.border-s-heavy {
  border-inline-start: 8px solid #424242 !important;
}

/* Efect vizual pentru panoul activ */
.v-expansion-panel--active {
  border: 1px solid rgb(var(--v-theme-primary)) !important;
}

/* Stil pentru link-urile din interiorul v-html (dacă vei adăuga) */
:deep(a) {
  color: #1976D2;
  font-weight: bold;
  text-decoration: none;
}
:deep(a:hover) {
  text-decoration: underline;
}
</style>