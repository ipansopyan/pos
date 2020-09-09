<template>
  <div class="container body">
    <div class="main_container">
      <div class="col-md-3 left_col">
        <div class="left_col scroll-view">
          <div class="navbar nav_title" style="border: 0;">
            <a href="index.html" class="site_title">
              <i class="fa fa-paw"></i>
              <span>Gentelella Alela!</span>
            </a>
          </div>

          <div class="clearfix"></div>

          <!-- menu profile quick info -->
          <div class="profile clearfix">
            <div class="profile_pic">
              <img src="images/img.jpg" alt="..." class="img-circle profile_img" />
            </div>
            <div class="profile_info">
              <span>Welcome,</span>
              <h2>John Doe</h2>
            </div>
          </div>
          <!-- /menu profile quick info -->

          <br />

          <!-- sidebar menu -->
          <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
            <div class="menu_section">
              <h3>General</h3>
              <ul class="nav side-menu">
                <li>
                  <router-link :to="{name:'excel'}">
                    <i class="ti-dashboard"></i>
                    <span>Dashboard</span>
                  </router-link>
                  <a>
                    <i class="fa fa-home"></i> Home
                    <span class="fa fa-chevron-down"></span>
                  </a>
                </li>
                <li>
                  <a>
                    <i class="fa fa-home"></i> tabel
                    <span class="fa fa-chevron-down"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- /sidebar menu -->

          <!-- /menu footer buttons -->
          <div class="sidebar-footer hidden-small">
            <a data-toggle="tooltip" data-placement="top" title="Settings">
              <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="FullScreen">
              <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="Lock">
              <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
              <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
            </a>
          </div>
          <!-- /menu footer buttons -->
        </div>
      </div>

      <!-- top navigation -->
      <div class="top_nav">
        <div class="nav_menu">
          <div class="nav toggle">
            <a id="menu_toggle">
              <i class="fa fa-bars"></i>
            </a>
          </div>
          <nav class="nav navbar-nav">
            <ul class="navbar-right">
              <li class="nav-item dropdown open" style="padding-left: 15px;">
                <a
                  href="javascript:;"
                  class="user-profile dropdown-toggle"
                  aria-haspopup="true"
                  id="navbarDropdown"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="images/img.jpg" alt />John Doe
                </a>
                <div
                  class="dropdown-menu dropdown-usermenu pull-right"
                  aria-labelledby="navbarDropdown"
                >
                  <a class="dropdown-item" href="javascript:;">Profile</a>
                  <a class="dropdown-item" href="javascript:;">
                    <span class="badge bg-red pull-right">50%</span>
                    <span>Settings</span>
                  </a>
                  <a class="dropdown-item" href="javascript:;">Help</a>
                  <a class="dropdown-item" href="login.html">
                    <i class="fa fa-sign-out pull-right"></i> Log Out
                  </a>
                </div>
              </li>

              <li role="presentation" class="nav-item dropdown open">
                <a href="#" @click="scanon">on</a>
                <a href="#" @click="scanoff">off</a>
                <a href="http://127.0.0.1:8000/api/products/export">ex</a>
                <b-modal ref="scan" hide-footer title="tambah produknya di modal ini">
                  <qrcode-stream :camera="camera" @decode="onDecode" @init="onInit"></qrcode-stream>
                </b-modal>

                <ul
                  class="dropdown-menu list-unstyled msg_list"
                  role="menu"
                  aria-labelledby="navbarDropdown1"
                >
                  <li class="nav-item"></li>
                  <li class="nav-item">
                    <a class="dropdown-item">
                      <span class="image">
                        <img src="images/img.jpg" alt="Profile Image" />
                      </span>
                      <span>
                        <span>John Smith</span>
                        <span class="time">3 mins ago</span>
                      </span>
                      <span
                        class="message"
                      >Film festivals used to be do-or-die moments for movie makers. They were where...</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="dropdown-item">
                      <span class="image">
                        <img src="images/img.jpg" alt="Profile Image" />
                      </span>
                      <span>
                        <span>John Smith</span>
                        <span class="time">3 mins ago</span>
                      </span>
                      <span
                        class="message"
                      >Film festivals used to be do-or-die moments for movie makers. They were where...</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="dropdown-item">
                      <span class="image">
                        <img src="images/img.jpg" alt="Profile Image" />
                      </span>
                      <span>
                        <span>John Smith</span>
                        <span class="time">3 mins ago</span>
                      </span>
                      <span
                        class="message"
                      >Film festivals used to be do-or-die moments for movie makers. They were where...</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <div class="text-center">
                      <a class="dropdown-item">
                        <strong>See All Alerts</strong>
                        <i class="fa fa-angle-right"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <!-- /top navigation -->

      <!-- page content -->
      <div class="right_col" role="main">
        <div class>
          <div class="page-title">
            <div class="title_left">
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

            <div class="title_right">
              <div class="col-md-5 col-sm-5 form-group pull-right top_search">
                <div class="input-group">
                  <span class="input-group-btn">
                    <!-- <b-button id="show-btn" @click="toggleModal">Open Modal</b-button> -->
                    <b-modal ref="my-modal" hide-footer title="tambah produknya di modal ini">
                      <div class="d-block text-center">
                        <h3>modal dari keyboard event</h3>
                        <b-input-group class="mt-3">
                          <b-form-input autofocus v-model="newProduct.name" placeholder="name"></b-form-input>
                        </b-input-group>
                        <b-input-group class="mt-3">
                          <b-form-input v-model="newProduct.kode" placeholder="kode"></b-form-input>
                        </b-input-group>
                        <b-input-group class="mt-3">
                          <b-form-input v-model="newProduct.jml" placeholder="jml"></b-form-input>
                        </b-input-group>
                        <b-input-group class="mt-3">
                          <b-form-input
                            @keyup.enter="tambahP"
                            v-model="newProduct.count"
                            placeholder="harga"
                          ></b-form-input>
                        </b-input-group>
                        <b-input-group class="mt-3">
                          <button @click.prevent="tambahP">add procuk</button>
                        </b-input-group>
                      </div>
                    </b-modal>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="clearfix"></div>

          <div class="row">
            <div class="col-md-12">
              <div class="x_panel">
                <div class="x_content">
                  <section class="content invoice">
                    <!-- title row -->
                    <div class="row">
                      <div v-for="product in products" :key="product.id" class="col-md-55">
                        <div class="thumbnail">
                          <div class="image view view-first">
                            <img
                              style="width: 100%; display: block;"
                              src="https://asset-a.grid.id/crop/0x0:0x0/360x240/photo/2019/10/22/4219203409.jpg"
                              alt="image"
                            />
                            <div class="mask">
                              <p>{{product.count | currency }}</p>
                              <div class="tools tools-bottom">
                                <!-- <a href="#">
                                  <i class="fa fa-link"></i>
                                </a>-->
                                <button @click.prevent="addToCart(product)">add+</button>
                                <!-- <a href="#">
                                  <i class="fa fa-times"></i>
                                </a>-->
                              </div>
                            </div>
                          </div>
                          <div class="caption">
                            <p>
                              <strong>{{product.count | currency}}</strong>
                            </p>
                            <p>{{product.name}}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Table row -->
                    <div id="printMe">
                      <div class="container" v-show="myCart">
                        <div class="table">
                          <table class="table table-striped">
                            <thead>
                              <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>harga</th>
                                <th>qty</th>
                                <th>Subtotal</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(cartItem,index) in cartItems" :key="cartItem.length">
                                <td>{{index+1}}</td>
                                <td>{{cartItem.name}}</td>
                                <td>{{cartItem.count| currency }}</td>
                                <td>{{cartItem.qty}}</td>
                                <td>{{cartItem.count*cartItem.qty |currency }}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!-- /.col -->
                      </div>
                      <!-- /.row -->

                      <div class="container" v-show="myCart">
                        <div class="col-md-6">
                          <p class="lead">Total belanja</p>
                          <div class="table-responsive">
                            <table class="table">
                              <tbody>
                                <tr>
                                  <th style="width:50%">Subtotal:</th>
                                  <td>{{Total | currency }}</td>
                                </tr>
                                <tr>
                                  <th>Disc (10%)</th>
                                  <td>{{(10*Total)/100 | currency }}</td>
                                </tr>
                                <tr v-show="bunga">
                                  <th>bunga: 5%</th>
                                  <td>{{(rose*Total)/100}}</td>
                                </tr>
                                <tr>
                                  <th>Total:</th>
                                  <td>{{ (rose*Total)/100+Total-((10*Total)/100) | currency }}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <!-- /.col -->
                      </div>
                    </div>
                    <!-- /.row -->
                    <button v-show="myCart" class="btn btn-default" @click="cash">cash</button>
                    <button v-show="myCart" class="btn btn-default" @click="kredit">kredit</button>
                    <button v-show="myCart" class="btn btn-default" @click="print">
                      <i class="fa fa-print"></i> cetak
                    </button>
                    <!-- this row will not appear when printing -->
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /page content -->

      <!-- footer content -->
      <footer>
        <div class="pull-right">
          <!-- <qrcode-stream></qrcode-stream> -->
          <p>{{result}}</p>

          <a href="https://colorlib.com">Colorlib</a>
        </div>
        <div class="clearfix"></div>
      </footer>
      <!-- /footer content -->
    </div>
  </div>
</template>
<script>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from "vue-qrcode-reader";
export default {
  data() {
    return {
      carItem: {},
      cartCount: 0,
      myCart: false,
      newProduct: {},
      output: null,
      bunga: false,
      rose: 0,
      isValid: undefined,
      camera: "off",
      result: null,
      error: "",
      file: "",
      barangBaru: [
        {
          name: "gula",
          kode: "brg001",
          jml: 1,
          count: 1200,
          user_id: 1
        },
        {
          name: "uyah",
          kode: "brg002",
          jml: 1,
          count: 1000,
          user_id: 1
        }
      ]
    };
  },
  components: {
    QrcodeStream,
    QrcodeDropZone,
    QrcodeCapture
  },
  methods: {
    handleFileUpload(e) {
      this.file = this.$refs.file.files[0];
    },

    proceedAction() {
      let formData = new FormData();
      formData.append("file", this.file);
      this.$store.dispatch("productIm", formData);
      this.$refs.file.value = "";
      this.file = "";
    },
    productEx() {
      this.$store.dispatch("productEx");
    },
    onInit(promise) {
      promise.catch(console.error).then(this.resetValidationState);
    },
    async onDecode(content) {
      this.result = content;
      let b = this.barangBaru.filter(brg => brg.kode == this.result);

      if (b.length > 0) {
        console.log("ada");

        this.$store.dispatch("addProduct", {
          name: b[0].name,
          kode: b[0].kode,
          jml: b[0].jml,
          count: b[0].count
        });
      } else {
        console.log("brg dak ada");
      }

      this.scanoff();
    },
    turnCameraOn() {
      this.camera = "auto";
    },

    turnCameraOff() {
      this.camera = "off";
    },
    kredit() {
      this.bunga = true;
      this.rose = 5;
    },
    cash() {
      this.rose = 0;
      this.bunga = false;
      // console.log(this.Total);
      // this.$htmlToPaper("printMe");
    },
    print() {
      this.$htmlToPaper("printMe");
    },
    addToCart(item) {
      this.myCart = true;
      this.$store.commit("addToCart", item);
    },
    toggleModal() {
      this.$refs["my-modal"].show();
    },
    scanon() {
      this.$refs["scan"].show();
      this.turnCameraOn();
    },
    scanoff() {
      this.$refs["scan"].hide();
      this.turnCameraOff();
    },
    toggleModalh() {
      this.$refs["my-modal"].hide();
    },
    tambahP() {
      const productData = {
        name: this.newProduct.name,
        kode: this.newProduct.kode,
        jml: this.newProduct.jml,
        count: this.newProduct.count
      };
      this.$store.dispatch("addProduct", {
        name: productData.name,
        kode: productData.kode,
        jml: productData.jml,
        count: productData.count
      });
      this.toggleModalh();
    }
  },
  mounted() {
    this.$store.dispatch("allproduct");
    window.addEventListener("keypress", e => {
      if (e.key == "a") {
        this.toggleModal();
      } else if (e.key == "q") {
        this.scanon();
      }
    });
  },
  computed: {
    products() {
      return this.$store.getters.getProduct;
    },
    cartItems() {
      return this.$store.getters.getCartItem;
    },
    Total() {
      let total = 0;
      this.cartItems.forEach(item => {
        total += item.count * item.qty;
      });
      return total;
    }
  }
};
</script>
<style lang="stylus"></style>