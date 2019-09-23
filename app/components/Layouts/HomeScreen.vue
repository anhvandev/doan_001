<template>
    <Page>
        <ActionBar title="anhvan">
            <FlexboxLayout width="100%" justifyContent="space-between" alignItems="center">
                <Label class="btn-menu fas" :text="'fa-align-left' | fonticon"
                       @tap="onMenuTap" col="0"/>
                <Image class="logo" src="~/assets/images/logo-brand.png" stretch="aspectFit"/>
                <Label class="btn-search fas" :text="'fa-search' | fonticon" col="2"/>
            </FlexboxLayout>
        </ActionBar>
        <RadSideDrawer ref="drawer">
            <StackLayout ~drawerContent backgroundColor="#ffffff">
                <Label class="drawer-header" text="Drawer"/>
                <Label class="drawer-item" text="Item 1"/>
                <Label class="drawer-item" text="Item 2"/>
                <Label class="drawer-item" text="Item 3"/>
            </StackLayout>
            <GridLayout class="page-body" rows="*, auto" ~mainContent orientation="vertical" backgroundColor="#3c495e">
                <!--<HomeList />-->
                <keep-alive>
                    <component :is="tabSelected"></component>
                </keep-alive>
                <Gradient row="1" direction="to bottom" colors="#6FCF97, #66D2EA">
                    <BubbleNavigation
                        width="100%"
                        @tabSelected="onBubbleNavigationTabSelected"
                        padding="5"
                        tabBackgroundColor="#ffffff"
                        :tabs="tabs"/>
                </Gradient>
            </GridLayout>
        </RadSideDrawer>


    </Page>
</template>

<script>
    import {OnTabSelectedEventData, BubbleNavigationItem} from 'nativescript-bubble-navigation';
    import HomeTab from "./HomeTab";
    import TableTab from "./TableTab";
    import UserTab from "./UserTab";

    export default {
        name: "Home",
        data() {
            return {
                tabs: [
                    new BubbleNavigationItem('Home', 'ic_home_line', '#f44336', '#e57373'),
                    new BubbleNavigationItem('Đặt bàn', 'ic_table', '#2c3e50', '#34495e'),
                    new BubbleNavigationItem('Tài khoản', 'ic_user_line', '#BC9CFF', '#8BA4F9')
                ],
                tabViews: [
                    HomeTab.name,
                    TableTab.name,
                    UserTab.name
                ],
                tabSelected: HomeTab.name
            }
        },
        computed: {
            changeMenu() {
                return this.$store.state.menuShow;
            }
        },
        components: {
            HomeTab: HomeTab,
            TableTab: TableTab,
            UserTab: UserTab
        },
        methods: {
            onMenuTap() {
                this.$refs.drawer.toggleDrawerState();
            },
            onBubbleNavigationTabSelected(args) {
                switch (args.position) {
                    case 0:
                        this.tabSelected = HomeTab.name;
                        break;
                    case 1:
                        this.tabSelected = TableTab.name;
                        break;
                    case 2:
                        this.tabSelected = UserTab.name;
                        break;
                }
            }
        }
    }
</script>

<style scoped>
    ActionBar {
        background-color: #1F2041;
        color: #ffffff;
        box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.75);
    }
    .page-body{
        background: #ffffff;
    }

    .btn-menu {
        width: 10%;
    }

    .logo {
        width: 80%;
        height: 50;
    }

    .btn-search {
        width: 10%;
    }

    TabViewItem {
        font-size: 5;
        font-family: "Font Awesome 5 Pro", "fa-regular-400";
    }
</style>