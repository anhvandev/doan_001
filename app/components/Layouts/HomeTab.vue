<template>
    <ScrollView orientation="vertical" row="0" class="page-body">
        <StackLayout orientation="vertical">
            <StackLayout orientation="vertical" class="section-slide">
                <stack-layout orientation="vertical" class="title">
                    <Label text="Có gì mới" class="text"/>
                    <Label text="" class="border" horizontalAlignment="left"/>
                </stack-layout>
                <ScrollView orientation="horizontal">
                    <FlexboxLayout>
                        <card-view v-for="item in dataTest" margin="10" :key="item.id" elevation="20" radius="10"
                                   class="item">
                            <stack-layout>
                                <Image :src="item.img" stretch="aspectFill"/>
                                <Label :text="item.title" @tap="linkData = item.link"/>
                            </stack-layout>
                        </card-view>
                    </FlexboxLayout>
                </ScrollView>
            </StackLayout>

        </StackLayout>
    </ScrollView>
</template>

<script>
    export default {
        name: "HomeTab",
        data() {
            return {
                img: [
                    "~/assets/images/demo/img-1.jpg",
                    "~/assets/images/demo/img-2.jpg",
                    "~/assets/images/demo/img-3.jpg"
                ],
                linkData: '',
                dataTest: [
                    {
                        id: 123,
                        title: "Văm",
                        img: "~/assets/images/demo/img-1.jpg",
                        link: "http://google.com.vn"
                    },
                    {
                        id: 333,
                        title: "Heloo",
                        img: "~/assets/images/demo/img-2.jpg",
                        link: "http://nopeblog.com"
                    },
                    {
                        id: 666,
                        title: "hjdhjs",
                        img: "~/assets/images/demo/img-3.jpg",
                        link: "http://codehay.me"
                    },
                ]
            }
        },
        watch: {
            linkData(newVar, oldVar) {
                console.log(newVar);
            }
        },
        methods: {
            onTapItem(event) {
                console.log(event);
            }
        }
    }
</script>

<style scoped>
    .page-body {
        background-color: #b9b9b9;
    }

    .section-slide {
        margin-top: 10;
    }

    .item {
    }

    .item image {
        height: 150;
        width: 200;
    }

    .item label {
        text-align: center;
        padding: 4 5;
        color: #1F2041;
    }

    .title {}
    .title .text{
        margin: 0 10;
        font-weight: 700;
        margin-bottom: 4;
        font-family: "Montserrat-Bold";
    }
    .title .border{
        height: 2;
        width: 50;
        background: red;
        margin: 0 10;
    }
</style>