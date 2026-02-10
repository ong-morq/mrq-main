<script setup lang="ts">
/**
 * Composition API setup for the Team page.
 * Left side loads dynamic body text from MD file.
 * Right side displays executive member cards.
 */
const { locale } = useI18n()

// Fetch content based on current locale
const { data: teamPage } = await useAsyncData(`team-content-${locale.value}`, () =>
    queryCollection('content').path(`/${locale.value}/team`).first()
)
</script>

<template>
  <v-container class="py-16 px-6" style="max-width: 1440px;">

    <v-row v-if="teamPage" align="start" class="mt-10">

      <v-col cols="12" md="4" class="pr-md-10">
        <h2 class="text-h3 font-weight-bold mb-6 text-grey-darken-4">
          {{ teamPage.meta.welcome_title }}
        </h2>

        <div class="intro-text text-grey-darken-1">
          <ContentRenderer :value="teamPage" />
        </div>
      </v-col>

      <v-col cols="12" md="8">
        <v-row>
          <v-col v-for="member in teamPage.meta.members" :key="member.name" cols="12">
            <v-card variant="outlined" class="rounded-xl pa-8 mb-6 border-light custom-shadow">
              <v-row align="center">

                <v-col cols="12" sm="4" class="text-center">
                  <v-avatar size="160" color="grey-lighten-4" class="border-avatar">
                    <v-img v-if="member.image" :src="member.image" cover></v-img>
                    <v-icon v-else size="80" color="grey-lighten-2">mdi-account</v-icon>
                  </v-avatar>
                </v-col>

                <v-col cols="12" sm="8">
                  <div class="d-flex align-center flex-wrap mb-2">
                    <h3 class="text-h4 font-weight-bold text-grey-darken-4 mr-3">
                      {{ member.name }}
                    </h3>
                    <v-chip size="small" color="primary" variant="flat" class="font-weight-black">
                      {{ member.role }}
                    </v-chip>
                  </div>

                  <p class="text-body-1 text-grey-darken-2 font-italic mt-4 line-height-md">
                    "{{ member.description }}"
                  </p>


                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

  </v-container>
</template>

<style scoped>
/* Left side text styling */
.intro-text :deep(p) {
  font-size: 1.15rem;
  line-height: 1.7;
  color: #616161;
}

/* Card and Avatar styling to match the image */
.border-light {
  border: 1px solid #eceff1 !important;
}

.custom-shadow {
  box-shadow: 0 10px 30px rgba(0,0,0,0.03) !important;
}

.border-avatar {
  border: 1px solid #eee !important;
}

.line-height-md {
  line-height: 1.6;
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .text-h3 {
    font-size: 2.5rem !important;
  }
}
</style>