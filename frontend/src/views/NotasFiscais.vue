<script setup>
import api from "@/services/api.js";
import statusBuyer from "../utils/status";
</script>

<template>
  <div class="page-default">
    <div id="menu" class="sider-financiador">
      <img src="../assets/Logo.svg" alt="logo cashforce" class="logo" />
      <div class="menu-item">
        <div class="border-menu"></div>
        <img src="../assets/Vector.svg" alt="" class="vector" />
        <p class="menu-text">Notas fiscais</p>
      </div>
    </div>
    <div id="page" class="conteudo">
      <div class="header-sistema"></div>
      <div class="pageContent">
        <p class="page-title">
          <img src="../assets/VectorBlue.svg" alt="" class="title-vector" />
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
                <td class="green">
                  {{
                    Number(nf.value).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })
                  }}
                </td>
                <td class="green">
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
