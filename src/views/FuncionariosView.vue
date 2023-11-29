<template>
  <div class="h-[calc(100vh-50px)] bg-indigo-500 px-4">
        <div class="rounded-md p-[20px] h-full">
          <div class="w-full flex justify-between py-5">
            <h3 class="text-5xl font-bold text-left text-white">Funcionarios</h3>
            <button @click="openModal" class="rounded-lg bg-white px-7 flex items-center gap-x-2 font-bold transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-105 hover:text-white hover:border hover:bg-indigo-900 duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-plus-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5z"/>
                </svg>
                Adicionar
            </button>

            <div v-if="modalOpen" class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 top-0">
                <div class="absolute top-5 right-16 left-96 bg-white p-8 rounded-lg shadow">
                  <div class="flex mb-2">
                    <p class="flex w-full font-bold text-2xl">Criar um novo Funcionario</p>
                    <button @click="closeModal" class="flex w-full justify-end text-red-500 font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-1 w-[25px] h-[25px] bi bi-x-lg" viewBox="0 0 16 16">
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                  </button>
                  </div>
                  <ul>
                    <li v-for="(erro, index) of errors" :key="index">
                      Campo <b>{{ erro.field }}</b> - {{ erro.defaultMenssage }}
                    </li>
                  </ul>

                  <form class="mb-6">
                    <label for="id" class="block text-sm font-medium text-gray-700">ID do Funcionario</label>
                    <input v-model="form.roupaId" type="number" class="mt-1 p-2 border border-gray-300 rounded-md w-full" required >

                    <label for="modelo" class="block mt-4 text-sm font-medium text-gray-700">Nome</label>
                    <input v-model="form.modelo" type="text" class="mt-1 p-2 border border-gray-300 rounded-md w-full" required>

                    <label for="tamanho" class="block mt-4 text-sm font-medium text-gray-700">Email</label>
                    <input v-model="form.tamanho" type="email" class="mt-1 p-2 border border-gray-300 rounded-md w-full" required>

                    <label for="cor" class="block mt-4 text-sm font-medium text-gray-700">Telefone</label>
                    <input v-model="form.cor" type="text" class="mt-1 p-2 border border-gray-300 rounded-md w-full" required>

                    <label for="valor" class="block mt-4 text-sm font-medium text-gray-700">N. Apólice</label>
                    <input  v-model="form.valor" type="text" class="mt-1 p-2 border border-gray-300 rounded-md w-full" required>

                    <div class="w-full flex justify-end mt-8">
                      <button class="rounded-lg bg-green-600 px-7 py-2 text-white flex items-center gap-x-2 font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:text-white hover:border hover:bg-indigo-900 duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-floppy-fill" viewBox="0 0 16 16">
                          <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0H3v5.5A1.5 1.5 0 0 0 4.5 7h7A1.5 1.5 0 0 0 13 5.5V0h.086a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5H14v-5.5A1.5 1.5 0 0 0 12.5 9h-9A1.5 1.5 0 0 0 2 10.5V16h-.5A1.5 1.5 0 0 1 0 14.5z"/>
                          <path d="M3 16h10v-5.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5zm9-16H4v5.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5zM9 1h2v4H9z"/>
                        </svg>
                          Salvar
                      </button>
                    </div>
                  </form>
                  
                  
                 
                </div>
              </div>

            
          </div>
          <div class="overflow-x-auto sm:rounded-lg mt-4">
            <table class="w-full text-sm text-left text-gray-500">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    ID
                  </th>
                  <th scope="col" class="py-3 px-6">
                    <div class="flex items-center">
                      Nome
                      <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
                          <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                        </svg></a>
                    </div>
                  </th>
                  <th scope="col" class="py-3 px-6">
                    <div class="flex items-center">
                      Email
                      <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
                          <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                        </svg></a>
                    </div>
                  </th>
                  <th scope="col" class="py-3 px-6">
                    <div class="flex items-center">
                      Telefone
                      <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
                          <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                        </svg></a>
                    </div>
                  </th>
                  <th scope="col" class="py-3 px-6">
                    <div class="flex items-center">
                      N. Apólice
                      <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
                          <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                        </svg></a>
                    </div>
                  </th>
                  <th scope="col" class="py-3 px-6">
                    <span class="sr-only">Edit</span>
                  </th>
                  <th scope="col" class="py-3 px-6">
                    <span class="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
</template>

<script lang="ts">

import Roupas from '../services/roupas'
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

