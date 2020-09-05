<template>
  <form class action method="post" novalidate>
    <div class="field item form-group">
      <label class="col-form-label col-md-3 col-sm-3 label-align">
        email
        <span class="required">*</span>
      </label>
      <div class="col-md-6 col-sm-6">
        <input v-model="email" class="email" name="email" required="required" type="email" />
      </div>
    </div>
    <div class="field item form-group">
      <label class="col-form-label col-md-3 col-sm-3 label-align">
        Password
        <span class="required">*</span>
      </label>
      <div class="col-md-6 col-sm-6">
        <input
        v-model="password"
          class="form-control"
          type="password"
          id="password1"
          name="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}"
          title="Minimum 8 Characters Including An Upper And Lower Case Letter, A Number And A Unique Character"
          required
        />

        <span style="position: absolute;right:15px;top:7px;" onclick="hideshow()">
          <i id="slash" class="fa fa-eye-slash"></i>
          <i id="eye" class="fa fa-eye"></i>
        </span>
      </div>
    </div>

    <div class="ln_solid">
      <div class="form-group">
        <div class="col-md-6 offset-md-3">
          <button @click.prevent="onSubmit" type="submit" class="btn btn-primary">Submit</button>
          <button type="reset" class="btn btn-success">Reset</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
    data() {
        return {
            email: null,
            password: null,
        }
    },
    methods: {
        onSubmit() {
            const formdata = {
                email : this.email,
                password: this.password
            };
            this.$store.dispatch('signin', {
                email: formdata.email,
                password: formdata.password
            })
        }
    }
}
</script>