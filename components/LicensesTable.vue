<template>
    <v-simple-table
            light
            >
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center">

                    </th>
                    <th class="text-center">
                      Copyleft
                    </th>
                    <th class="text-center">
                      Permissive
                    </th>
                    <th class="text-center">
                      Creative Commons
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in questions"
                    :key="item.a"
                  >
                  <td>{{ item.a}}</td>
                  <td>{{ item.b}}</td>
                  <td>{{ item.c}}</td>
                  <td>{{ item.d}}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>

</template>

<script>
export default {
    data: () => ({
      questions: [
          {
            a: 'What is a user allowed to do with the code?',
            b:  'What user wants under certain rules',
            c:  'What user wants with a few restrictions',
            d: 'What user wants without restrictions'
          },
          {}
          ]
    }),
  }
</script>
<style scoped>

.v-data-table >>> table > tbody > tr > th{
  font-size: .7rem !important;
}

.v-data-table >>> table > tbody > tr > td{
  font-size: .7rem !important;
}
</style>