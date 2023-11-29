<template>
  <div class="w-screen h-screen flex">
    <!-- Side bar -->
    <div class="w-[400px] h-full bg-indigo-950 text-white" v-show="showSide">
      <div class="h-[50px] flex justify-start  items-center border-b ">
        <div class="px-[20px]">
          <h3 class="font-bold text-xl">API TypeScript/Vue</h3>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] py-[20px]">
        <div class="flex flex-col justify-between h-full px-[20px] space-y-[10px]">
          <div class=" flex flex-col justify-between space-y-[10px] font-bold">
            <router-link to="/" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="mr-2 w-[25px] h-[25px] bi bi-basket-fill" viewBox="0 0 16 16">
                <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"/>
              </svg>
              <p class="font-bold">Roupas</p>
            </router-link>
            <router-link to="/clientes" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="mr-2 w-[25px] h-[25px] bi bi-people-fill" viewBox="0 0 16 16">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
              </svg>
              <p class="font-bold">Clientes</p>
            </router-link>
            <router-link to="/funcionarios" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="mr-2 w-[25px] h-[25px] bi bi-person-fill-gear" viewBox="0 0 16 16">
                <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4m9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
              </svg>
              <p class="font-bold">Funcionarios</p>
            </router-link>

          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-full bg-gray-400">
      <div class="h-[50px] bg-indigo-500 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10">
        <!-- Hambuger menu -->
        <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-[25px] h-[25px]" style="fill: white;">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
      </div>
      <!-- acaba aqui -->
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts">

import Roupas from './services/roupas'
import Vue from 'vue'


export default {
  data() {
    return {
      showDropDown: false,
      showSide: true,
      modalOpen: false,
      edit: false,
      roupas: [],
      errors: [],
      form: {
        roupaId: null,
        modelo: '',
        tamanho: '',
        cor: '',
        valor: ''
      }
    }
  },

  mounted() {
    this.listar()
  },

  methods: {
    openModal() {
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
    },
    // hide show side bar
    toggleSideBar() {
      this.showSide = !this.showSide
    },
    // toggle user 
    toggleDrop() {
      this.showDropDown = !this.showDropDown
    },

    salvar() {
     
      if(!this.edit){
        Roupas.salvar(this.form).then(resposta => {
          this.form = {};
          this.$swal("Sucesso", "Roupa Cadastrada com sucesso!", "success");
          this.modalOpen = false;
          this.listar();
          this.errors = [];
        }).catch(e => {
          this.errors = e.response.data.errors
        })
      }
      else {
        Roupas.atualizar(this.form).then(resposta => {
          this.form = {};
          this.$swal("Sucesso", "Roupa Atualizada com sucesso!", "success");
          this.modalOpen = false;
          this.listar();
          this.errors = [];
        }).catch(e => {
          this.errors = e.response.data.errors
        })
      }
      
    },

    listar() {
      Roupas.listar().then(resposta => {
        this.roupas = resposta.data
      })
    },

    editar(roupa) {
      this.modalOpen = true;
      this.form = roupa;
      this.edit = true;
    },

    remover(roupa) {
      Roupas.apagar(roupa).then(resposta => {
        this.$swal("Sucesso", "Roupa Deletada com sucesso!", "success");
        this.errors = [];
        this.listar()
      }).catch(e => {
        this.errors = e.response.data.errors
      })
    }
  }

}
</script>
