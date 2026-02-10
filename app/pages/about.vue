<script setup lang="ts">
const { locale } = useI18n()

// Preluăm datele din about.md
const { data: page } = await useAsyncData(`content-about-${locale.value}`, () =>
    queryCollection('content').path(`/${locale.value}/about`).first()
)
</script>

<template>
  <v-container class="py-16 px-6" style="max-width: 1000px;">
    <div v-if="page">
      <div class="text-center mb-16">
        <h1 class="text-h3 font-weight-bold mb-4">{{ page.meta.welcome_title }}</h1>
        <p class="text-h6 text-grey-darken-1 mx-auto" style="max-width: 700px;">
          {{ page.meta.disclaimer }}
        </p>
      </div>

      <v-row class="mb-16">
        <v-col
            v-for="section in page.meta.sections"
            :key="section.id"
            cols="12"
            md="6"
        >
          <v-card variant="flat" class="pa-6 rounded-xl bg-grey-lighten-4 h-100">
            <v-icon color="primary" size="36" class="mb-4">{{ section.icon }}</v-icon>
            <h3 class="text-h5 font-weight-bold mb-3">{{ section.title }}</h3>
            <div class="text-body-1 text-grey-darken-2 line-height-md" v-html="section.content"></div>
          </v-card>
        </v-col>
      </v-row>

    </div>
  </v-container>
</template>

<style scoped>
.line-height-md {
  line-height: 1.6;
}
</style>