<template>
    <GridLayout rows="30, auto">
        <Label ref="label" row="1" :text="placeholder" class="input" />
        <TextField ref="textField" :secure="password" row="1" @focus="onFocus" @blur="onBlur" />
    </GridLayout>
</template>

<script>
    export default {
        name: "TextDefault",
        props: {
            placeholder: {
                type: String
            },
            password: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            onFocus() {
                let label = this.$refs.label.nativeView;

                // animate the label sliding up and less transparent.
                label
                    .animate({
                        translate: { x: 0, y: -25 },
                        opacity: 1,
                        fontSize: 14
                    })
                    .then(() => {}, () => {});


            },
            onBlur() {
                const label = this.$refs.label.nativeView;
                const textField = this.$refs.textField.nativeView;

                // if there is text in our input then don't move the label back to it's initial position.
                if (textField.text === '') {
                    label
                        .animate({
                            translate: { x: 0, y: 0 },
                            opacity: 0.4
                        })
                        .then(() => {}, () => {});
                }
            }
        }
    }
</script>

<style scoped>
    GridLayout {
        margin-bottom: 5px;
    }
    .input {
        color: #ffffff;
        font-size: 14;
        opacity: 0.4;
        placeholder-color: #ffffff;
    }
    Label {
        animation-name: bounceIn;
        animation-duration: 1s;
        animation-fill-mode: both;
    }
    TextField {
        animation-name: bounceIn;
        animation-duration: 1s;
        animation-fill-mode: both;
        color: #ffffff;
        font-size: 14;
        border-bottom-width: 2;
        border-bottom-color: #BC9CFF;
        margin-bottom: 20;
    }
    TextField:focus {
        border-bottom-color: #8BA4F9;
    }
</style>