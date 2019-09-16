<template>
    <Page :actionBarHidden="actBar">
        <FlexboxLayout class="wrapper" flexDirection="column">
            <Image src="~/assets/images/logo.png" class="logo"/>
            <TextDefault password="false" v-model="username" placeholder="Tên đăng nhập" />
            <TextDefault password="true" v-model="password" placeholder="Nhập mật khẩu" />
            <TextDefault password="true" v-model="repassword" placeholder="Nhập lại mật khẩu" />
            <BtnDefault text="Đăng Ký" @tap="register"/>
            <BtnPrimaTran text="Đăng Nhập" @tap="$navigateBack"/>
        </FlexboxLayout>
    </Page>
</template>

<script>
    import * as Toast from 'nativescript-toast';
    import BtnDefaultTran from '../Child/BtnDefaultTran';
    import BtnPrimaTran from '../Child/BtnPrimaTran';
    import BtnDefault from '../Child/BtnDefault';
    import Login from './Login';
    import TextDefault from '../Child/TextDefault';

    export default {
        name: "Register",
        data() {
            return {
                username: '',
                password: '',
                repassword: ''
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
            BtnDefault,
            Login,
            TextDefault
        },
        methods: {
            register() {
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