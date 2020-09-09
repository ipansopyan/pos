<template>
  <div class="row">
    <div class="form-row">
      <div class="col-md-12">
        <label class="form-control-label" for="input-file-import">Upload Excel File</label>
        <input
          type="file"
          class="form-control"
          :class="{ ' is-invalid' : error.message }"
          id="file"
          name="file_import"
          ref="file"
          v-on:change="handleFileUpload()"
        />
        <div v-if="error.message" class="invalid-feedback"></div>
        <button @click.prevent="proceedAction()">add procuk</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      error: "",
      file: ""
    };
  },
  methods: {
    handleFileUpload(e) {
      this.file = this.$refs.file.files[0];
    },

    proceedAction() {
      let formData = new FormData();
      formData.append("file", this.file);
      this.$store.dispatch('productIm', formData)
      
      // this.$store.dispatch("productIm", {
      //   file: this.file
      // });
    }
  }
};
</script>