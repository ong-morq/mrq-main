<script setup lang="ts">
</script>
<template>
  <v-container class="py-16 px-6" style="max-width: 800px;">

    <!-- HEADER -->
    <div class="d-flex align-center justify-center mb-12">
      <v-icon color="primary" size="48" class="mr-3">mdi-heart-plus</v-icon>
      <h1 class="text-h3 font-weight-bold">
        Ne puteți susține prin:
      </h1>
    </div>

    <v-row justify="center">
      <v-col cols="12">
        <v-card variant="outlined" class="pa-6 rounded-xl border-primary">
          <v-card-title class="text-h5 font-weight-bold">
            Transfer bancar
          </v-card-title>

          <v-list class="bg-grey-lighten-4 rounded-lg pa-4 mt-4">
            <v-list-item>
              <v-list-item-title class="text-overline">Beneficiar</v-list-item-title>
              <v-list-item-subtitle class="text-h6 font-weight-bold text-black">
                ASOCIATIA SINDROMUL MORQUIO
              </v-list-item-subtitle>
            </v-list-item>

            <v-divider class="my-3"></v-divider>

            <v-list-item>
              <v-list-item-title class="text-overline">Cont IBAN (RON)</v-list-item-title>
              <v-list-item-subtitle class="text-h6 font-weight-bold text-primary selectable-iban">
                RO13 RNCB 0298 1842 0121 0001
              </v-list-item-subtitle>
              <template v-slot:append>
                <v-btn
                    icon="mdi-content-copy"
                    variant="text"
                    size="small"
                    @click="copyToClipboard('RO13 RNCB 0298 1842 0121 0001')"
                />
              </template>
            </v-list-item>

            <v-divider class="my-3"></v-divider>

            <v-row class="ma-0">
              <v-col cols="12" sm="6" class="pa-0">
                <v-list-item>
                  <v-list-item-title class="text-overline">Banca</v-list-item-title>
                  <v-list-item-subtitle class="font-weight-bold">
                    BCR (Banca Comercială Română)
                  </v-list-item-subtitle>
                </v-list-item>
              </v-col>
              <v-col cols="12" sm="6" class="pa-0">
                <v-list-item>
                  <v-list-item-title class="text-overline">Cod SWIFT / BIC</v-list-item-title>
                  <v-list-item-subtitle class="font-weight-bold">
                    RNCBROBU
                  </v-list-item-subtitle>
                </v-list-item>
              </v-col>
            </v-row>

            <v-divider class="my-3"></v-divider>

            <v-list-item>
              <v-list-item-title class="text-overline">
                Cod de Identificare Fiscală (CIF)
              </v-list-item-title>
              <v-list-item-subtitle class="font-weight-bold text-black">
                52310560
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <!-- ALERT – FORMULAR 230 (jos) -->
    <v-row justify="center" class="mt-6">
      <v-col cols="12">
        <v-alert
            color="info"
            variant="tonal"
            class="rounded-xl pa-6"
            icon="mdi-file-document-outline"
        >
          <template v-slot:title>
            Formularul 230 (3,5% din impozit)
          </template>
          Secțiunea este în curs de implementare și va deveni funcțională cât mai rapid posibil.
        </v-alert>
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup lang="ts">
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  // poți adăuga notificare tip toast dacă vrei
};
</script>

<style scoped>
.selectable-iban {
  letter-spacing: 1px;
}
.border-primary {
  border: 2px solid #1976D2 !important;
}
</style>

