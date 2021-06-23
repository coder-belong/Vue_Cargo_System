<template>
    <div class="login_container" :class="{ login_mlmlh: mlmlh }">
        <v-img
            src="../../assets/img/sidebar-4.jpg"
            gradient="rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)"
        />
        <v-toolbar absolute flat dark color="transparent" min-width="100%">
            <v-btn text disabled>登录</v-btn>
            <v-spacer></v-spacer>
            <v-btn text>
                <v-icon style="margin-right: 10px">mdi-chart-areaspline</v-icon
                >图表
            </v-btn>
            <v-btn text style="margin: 0 20px">
                <v-icon style="margin-right: 10px">mdi-fingerprint</v-icon>登录
            </v-btn>
            <v-btn text target="_blank" href="https://github.com/grayson-coder">
                <v-icon style="margin-right: 10px">mdi-github-circle</v-icon
                >github
            </v-btn>
        </v-toolbar>
        <div class="wrap">
            <v-card class="inner_card">
                <v-card
                    class="right"
                    color="red"
                    href="https://vuetifyjs.com"
                    target="_blank"
                >
                    <v-icon large color="white">管理系统</v-icon>
                    <div class="title" color="white">货物仓储</div>
                </v-card>
                <div class="left">
                    <!-- <div class="row">
                        <v-text-field
                            label="Gorup"
                            min-width="100%"
                            dense
                            hint="Niubility Gorup"
                            persistent-hint
                            value="Javascript Flutter"
                            prepend-icon="mdi-incognito"
                        ></v-text-field>
                    </div> -->

                    <div class="row">
                        <v-text-field
                            label="用户名"
                            min-width="100%"
                            dense
                            persistent-hint
                            v-model="form.username"
                            prepend-icon="mdi-account-outline"
                        ></v-text-field>
                    </div>
                    <div class="row">
                        <v-text-field
                            persistent-hint
                            label="密码"
                            min-width="100%"
                            v-model="form.password"
                            type="password"
                            prepend-icon="mdi-lock-outline"
                        ></v-text-field>
                    </div>

                    <div class="title"><el-link type="primary" @click="toRegister"
                        >测试账户：admin  <br> 测试密码：123456</el-link
                    ></div>
                    <div class="row row_f">
                        <v-btn
                            x-large
                            rounded
                            color="primary"
                            style="margin-left: 30px"
                            @click="handleSignBtn"
                            >登录</v-btn
                        >
                    </div>
                </div>


                <div style="text-align: center; margin-top: 25px">
                    <el-link type="primary" @click="toRegister"
                        >还没有账号？ 去注册</el-link
                    >
                </div>
            </v-card>
        </div>
    </div>
</template>
<script>
import { login } from '../../api/login/login'

export default {
    data() {
        return {
            mlmlh: false,
            form: {
                username: 'admin',
                password: '123456',
            },

        };
    },
    methods: {
        // 登录按钮的点击
        async handleSignBtn() {
            let { username, password } = this.form
            // 1. 前台校验表单数据
            if (username == '' || password == '') {
                return this.$message({
                    showClose: true,
                    message: '用户名和密码不能为空，请重新输入',
                    type: 'error',
                    center: true
                });
            }

            // 2. 发送网络请求登录
            let { meta, token } = await login(username, password)
            if (meta.status !== 200) {
                return this.$message({
                    showClose: true,
                    message: '用户名或账号密码错误, 请重新输入',
                    type: 'error',
                    center: true
                });
            }

            this.$message({
                showClose: true,
                message: '登录成功，即将跳转到后台管理页面',
                type: 'success',
                center: true
            });

            // 3. 登录成功后保存token
            localStorage.setItem('token', token)

            setTimeout(() => {
                this.mlmlh = true;
                // 更改Vuex状态
                this.$store.commit('handleSignIn');
            }, 2000);


            setTimeout(() => {
                this.$router.push('/dashboard');
            }, 2500);
        },


        // 跳转到注册页面
        toRegister() {
            this.$router.push('/register')
        }
    }
};
</script>
<style lang="scss" scoped>
.login_container {
    height: 100vh;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;
    position: relative;

    .v-image {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 0;
        .v-image__image {
            background-position: center center;
            background-size: 100vh auto;
        }
    }
    .login_footer {
        position: absolute;
        left: 0;
        bottom: 0;
        line-height: 50px;
        width: 100%;
    }
    .wrap {
        position: relative;
        z-index: 1;
        .inner_card {
            box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
            animation: fadeInUp 0.3s linear;
            padding-top: 100px;
            padding-bottom: 30px;
            .left {
                width: 400px;
                padding: 0 40px;
                margin: 0 10px;
                .row {
                    margin-top: 30px;
                }
                .row_f {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
            .right {
                position: absolute;
                width: 86%;
                padding: 20px 0;
                left: 7%;
                top: -30px;
                text-align: center;
                .icon {
                    margin: 0 auto;
                }
                .title {
                    margin-top: 10px;
                    color: #fff;
                }
            }
        }
    }
}
.login_mlmlh {
    transform: scale(5);
    opacity: 0;
}

@media screen and (max-width: 960px) and (min-width: 320px) {
    .login_container {
        .wrap {
            .wrap_title {
                font-size: 36px;
                margin-bottom: 30px;
            }
            .inner_card {
                width: auto;
                margin: 30px;
                .left {
                    width: auto;
                    padding: 30px;
                }
                .right {
                    // display: none;
                }
            }
        }
    }
}
</style>
