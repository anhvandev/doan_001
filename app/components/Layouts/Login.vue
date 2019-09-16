<template>
    <Page ref="LoginPage" :actionBarHidden="actBar">
        <FlexboxLayout class="wrapper" flexDirection="column">
            <Image src="~/assets/images/logo.png" class="logo" />
            <TextDefault password="false" v-model="username" placeholder="Tên đăng nhập" />
            <TextDefault password="true" v-model="password" placeholder="Mật khẩu" />
            <BtnDefault text="Đăng Nhập" @tap="login" />
            <BtnPrimaTran text="Đăng Ký" @tap="register" />
        </FlexboxLayout>
    </Page>
</template>

<script>
    import * as Toast from 'nativescript-toast';
    import BtnDefaultTran from '../Child/BtnDefaultTran';
    import BtnPrimaTran from '../Child/BtnPrimaTran';
    import BtnDefault from '../Child/BtnDefault';
    import Register from './Register';
    import TextDefault from '../Child/TextDefault';
    import route from "../../route";

    // import {AwesomeLoaders} from 'nativescript-awesome-loaders';

    export default {
        name: 'Login',
        data() {
            return {
                username: '',
                password: ''
            }
        },
        props: {
            actBar: {
                default: true
            }
        },
        components: {
            BtnDefaultTran,
            BtnPrimaTran,
            Register,
            BtnDefault,
            TextDefault
        },
        mounted(){
            // let li = new AwesomeLoaders();
            // console.log(li);
        },
        methods: {
            login() {
                /*var toast = Toast.makeText("Hello World");
                toast.show();*/
                /*if (this.username === '') {
                    alert('Bạn chưa nhập tên đăng nhập');
                }
                if (this.password === '') {
                    alert('Bạn chưa nhập mật khẩu');
                }*/
                this.$navigateTo(route.home);
            },
            register() {
                /*const login = this.$refs.LoginPage.nativeView;
                login.animate({
                    opacity: 0,
                    duration: 400
                }).then(() => {
                    this.$navigateTo(Register);
                }, () => {});*/
                this.$navigateTo(Register);

            }
        }
    }
</script>

<style scoped>
    .wrapper {
        padding: 50 20;
        background-image: url('~/assets/images/bg-login1-opa.png');
        background-repeat: no-repeat;
        background-size: cover;
    }

    .logo {
        width: 100%;
        height: 15%;
        display: block;
        margin-bottom: 30;
    }
</style>