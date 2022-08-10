<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header"> default header </slot>
        </div>

        <div class="modal-body">
          <slot name="body">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Tên đăng nhập</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  v-model="this.resuft.userName"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Mật khẩu</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  v-model="this.resuft.passWord"
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1"
                  >Check me out</label
                >
              </div>
              <!-- <button type="submit" class="btn btn-primary">Submit</button> -->
            </form>
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button
              class="modal-default-button btn btn-danger"
              @click="$emit('close')"
            >
              Hủy
            </button>
            <button
              class="modal-default-button btn btn-primary"
              @click="this.handleLogin(this.resuft)"
            >
              Xác nhận
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { notify } from "@kyvg/vue3-notification";
import axios from "axios";
import { mapActions } from "vuex";
// import jwt_decode from "jwt-decode";
export default {
  data() {
    // nơi chứa giống state bên reactJS
    return {
      resuft: {
        userName: "",
        passWord: "",
      },
    };
  },
  methods: {
        
    
           ...mapActions(['addUser']),
           

    handleLogin(data) {
      this.resuft.userName = data.userName;
      this.resuft.passWord = data.passWord;
      try {
        axios
          .post("http://localhost:5000/api/auth/login", this.resuft)
          .then((response) => {
            // if (response?.data == 200) {
            //   
            //  
            //   
            if (response?.data?.success) {
       this.addUser(response?.data?.accessToken)
  //  let xxx =  response?.data
  //  console.log(xxx);
              notify({
                type: "success",

                // (optional, override)
                // Time (in ms) to keep the notification on screen
                duration: 1000,
                animation: "velocity",

                // (optional, override)
                // Time (in ms) to show / hide notifications
                speed: 1000,
                title: "Successfully",
                text: "Đăng nhập thành công",
              });
          
          
                  // this.$emit("close");
            } else {
              notify({
                type: "error",

                // (optional, override)
                // Time (in ms) to keep the notification on screen
                duration: 1000,
                animation: "velocity",

                // (optional, override)
                // Time (in ms) to show / hide notifications
                speed: 1000,
                title: "Error",
                text: "Kiểm tra tài khoản hoặc mật khẩu",
              });
            }
          });
      } catch (error) {
        // console.log(error,'fff');
        let errors = Object.values(error?.response?.data?.errors);
        for (let index = 0; index < errors.length; index++) {
          const element = errors[index];
          notify({
            type: "error",

            // (optional, override)
            // Time (in ms) to keep the notification on screen
            duration: 1000,
            animation: "velocity",

            // (optional, override)
            // Time (in ms) to show / hide notifications
            speed: 1000,
            title: "lỗi",
            text: element[0],
          });
          // Notification_Reuse.error(element[0]);
        }
      }

      // console.log('vào đây k',  this.resuft);
      // passWord = this.this.resuft.passWord;
    },
    mounted() {
      // axios
      //   .post("http://localhost:8000/api/auth/login", this.resuft)
      //   .then((response) => console.log(response, 665));
    },
  },
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 20px 0px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
