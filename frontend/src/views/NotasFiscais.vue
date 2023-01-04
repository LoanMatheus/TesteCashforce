<script setup>
import api from "@/services/api.js";
import statusBuyer from "../utils/status";
</script>

<template>
  <div class="sider-financiador">
    <div id="menu" class="menu">
      <img
        src="../assets/Logo.svg"
        alt="logo cashforce"
        class="logoCashForce"
      />
      <div class="sideMenuNf">
        <img src="../assets/Vector.svg" alt="" />
        Notas fiscais
      </div>
    </div>
    <div id="page" class="page">
      <hr />
      <div class="pageContent">
        <p class="title">
          <img src="../assets/Vector.svg" alt="" />
          Notas fiscais
        </p>
        <p class="subtitle">Visualize as notas fiscais que você tem.</p>

        <div id="table">
          <table class="col-12">
            <thead>
              <tr>
                <th>NOTA FISCAL</th>
                <th>SACADO</th>
                <th>CEDENTE</th>
                <th>EMISSÃO</th>
                <th>VALOR</th>
                <th>STATUS</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(nf, index) in nfs" :key="index" class="item">
                <td>{{ nf.orderNfId }}</td>
                <td>{{ nf.buyer.name }}</td>
                <td>{{ nf.provider.name }}</td>
                <td>{{ nf.emissionDate.split("T")[0] }}</td>
                <td>
                  {{
                    Number(nf.value).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })
                  }}
                </td>
                <td>
                  {{
                    status[
                      nf.orderStatusBuyer === null ? 0 : nf.orderStatusBuyer
                    ]
                  }}
                </td>
                <td class="right">
                  <button class="status">Dados do cedente</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotasFiscais",
  data() {
    return {
      nfs: [],
      status: statusBuyer,
    };
  },
  mounted() {
    api.get("/orders").then((response) => {
      this.nfs = response.data;
    });
  },
};
</script>

<style>
.sider-financiador {
  display: flex;
  height: 900px;
  width: 288px;
}
.logoCashForce {
  max-width: 100%;
}
.menu {
  display: flex;
  flex-direction: column;
}
</style>
