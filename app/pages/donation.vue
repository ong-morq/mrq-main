<script setup lang="ts">
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};

const openEmail = () => {
  window.location.href = "mailto:salut@asociatiamorquio.ro?subject=Redirectionare 20% impozit profit";
};
</script>

<template>
  <v-container class="py-16 px-6" style="max-width: 900px;">

    <div class="d-flex align-center justify-center mb-12">
      <v-icon color="primary" size="48" class="mr-3">mdi-heart-plus</v-icon>
      <h1 class="text-h3 font-weight-bold" style="color: #2c3e50;">
        Ne puteți susține prin:
      </h1>
    </div>

    <v-row justify="center">
      <v-col cols="12">
        <v-card variant="flat" elevation="2" class="pa-8 rounded-xl border-light">
          <v-card-title class="text-h5 font-weight-bold text-center" style="color: #2c3e50;">
            Transfer bancar direct
          </v-card-title>

          <v-list class="bg-grey-lighten-4 rounded-lg pa-6 mt-6">
            <v-list-item>
              <v-list-item-title class="text-overline text-grey-darken-1">Beneficiar</v-list-item-title>
              <v-list-item-subtitle class="text-h6 font-weight-bold text-black">
                ASOCIATIA SINDROMUL MORQUIO
              </v-list-item-subtitle>
            </v-list-item>

            <v-divider class="my-3"></v-divider>

            <v-list-item>
              <v-list-item-title class="text-overline text-grey-darken-1">Cont IBAN (RON)</v-list-item-title>
              <v-list-item-subtitle class="text-h6 font-weight-bold text-primary selectable-iban">
                RO13 RNCB 0298 1842 0121 0001
              </v-list-item-subtitle>
              <template v-slot:append>
                <v-btn
                    icon="mdi-content-copy"
                    variant="text"
                    size="small"
                    color="primary"
                    @click="copyToClipboard('RO13 RNCB 0298 1842 0121 0001')"
                />
              </template>
            </v-list-item>

            <v-divider class="my-3"></v-divider>

            <v-row class="ma-0">
              <v-col cols="12" sm="6" class="pa-0">
                <v-list-item>
                  <v-list-item-title class="text-overline text-grey-darken-1">Banca</v-list-item-title>
                  <v-list-item-subtitle class="font-weight-bold">
                    BCR (Banca Comercială Română)
                  </v-list-item-subtitle>
                </v-list-item>
              </v-col>
              <v-col cols="12" sm="6" class="pa-0">
                <v-list-item>
                  <v-list-item-title class="text-overline text-grey-darken-1">Cod SWIFT / BIC</v-list-item-title>
                  <v-list-item-subtitle class="font-weight-bold">
                    RNCBROBU
                  </v-list-item-subtitle>
                </v-list-item>
              </v-col>
            </v-row>

            <v-divider class="my-3"></v-divider>

            <v-list-item>
              <v-list-item-title class="text-overline text-grey-darken-1">
                Cod de Identificare Fiscală (CIF)
              </v-list-item-title>
              <v-list-item-subtitle class="font-weight-bold text-black">
                52310560
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" class="mt-8">
        <v-card variant="flat" elevation="4" class="pa-8 rounded-xl h-100 d-flex flex-column align-center text-center">
          <div class="procent-label">3,5%</div>
          <v-card-title class="card-title-serif px-0 pt-2 pb-0">Redirecționează<br/>impozitul pe venit</v-card-title>
          <v-card-text class="px-0 pt-6 pb-0 text-body-1 text-grey-darken-2">
            Tot ce trebuie să faci este să completezi formularul, să-l semnezi online, iar acesta ajunge în căsuța noastră de e-mail gata de depus la ANAF. Această donație nu presupune niciun cost pentru tine.
          </v-card-text>
          <v-spacer></v-spacer>
          <v-btn
              block
              color="primary"
              size="large"
              class="mt-10 font-weight-bold rounded-lg"
              href="https://redirectioneaza.ro/asociatia-sindromul-morquio/"
              target="_blank"
          >
            Completează formularul
          </v-btn>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" class="mt-8">
        <v-card variant="flat" elevation="4" class="pa-8 rounded-xl h-100 d-flex flex-column align-center text-center">
          <div class="procent-label">20%</div>
          <v-card-title class="card-title-serif px-0 pt-2 pb-0">Redirecționează<br/>impozitul pe profit</v-card-title>
          <v-card-text class="px-0 pt-6 pb-0 text-body-1 text-grey-darken-2">
            Poți redirecționa până la 20% din impozitul aferent anului fiscal anterior, prin intermediul Declarației 177, în cazul în care compania ta este plătitoare de TVA. Totul fără niciun cost suplimentar.
          </v-card-text>
          <v-spacer></v-spacer>
          <v-btn
              block
              color="primary"
              size="large"
              class="mt-10 font-weight-bold rounded-lg"
              @click="openEmail"
          >
            Contactează-ne
          </v-btn>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');

.selectable-iban {
  letter-spacing: 1px;
}

.border-light {
  border: 1px solid #e0e0e0 !important;
}

.procent-label {
  font-family: 'Playfair Display', serif;
  font-size: 72px;
  font-weight: 700;
  color: #556b3e; /* Verdele elegant pentru procente */
  line-height: 1;
}

.card-title-serif {
  font-family: 'Playfair Display', serif;
  font-size: 24px !important;
  font-weight: 700;
  color: #2c3e50;
  line-height: 1.2;
}

/* Forțăm butonul să respecte stilul site-ului tau */
.v-btn {
  text-transform: none !important;
  letter-spacing: 0;
}
</style>