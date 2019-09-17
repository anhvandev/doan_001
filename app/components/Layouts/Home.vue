<template>
    <Page>
        <ActionBar title="anhvan">
            <FlexboxLayout width="100%" justifyContent="space-between" alignItems="center">
                <Label class="btn-menu fas" :text="'fa-align-left' | fonticon"
                       @tap="onMenuTap" col="0"/>
                <Image class="logo" src="~/assets/images/logo-brand.png" stretch="aspectFit" />
                <Label class="btn-search fas" :text="'fa-search' | fonticon" col="2"/>
            </FlexboxLayout>
        </ActionBar>
        <RadSideDrawer ref="drawer">
            <StackLayout ~drawerContent backgroundColor="#ffffff">
                <Label class="drawer-header" text="Drawer" />
                <Label class="drawer-item" text="Item 1" />
                <Label class="drawer-item" text="Item 2" />
                <Label class="drawer-item" text="Item 3" />
            </StackLayout>
            <StackLayout ~mainContent orientation="horizontal" backgroundColor="#3c495e">
                <TabView :selectedIndex="selectedIndex" tabBackgroundColor="#ccc" tabTextColor="#000000" androidTabsPosition="bottom"  @selectedIndexChange="indexChange">
                    <TabViewItem text="&#xf036;">
                        <Label text="Content for Tab 1" />
                    </TabViewItem>
                    <TabViewItem title="Tab 2">
                        <Label text="Content for Tab 2" />
                    </TabViewItem>
                    <TabViewItem title="Tab 2">
                        <Label text="Content for Tab 2" />
                    </TabViewItem>
                </TabView>
            </StackLayout>
        </RadSideDrawer>


    </Page>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return {
                selectedIndex: 0
            }
        },
        computed: {
          changeMenu(){
              return this.$store.state.menuShow;
          }
        },
        methods: {
            onMenuTap() {
                this.$refs.drawer.toggleDrawerState();
            },
            indexChange(args){
                console.log();
            }
        }
    }
</script>

<style scoped>
    ActionBar {
        background-color: #1F2041;
        color: #ffffff;
        box-shadow: 0px 6px 5px 0px rgba(0,0,0,0.75);
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
    TabViewItem{
        font-size: 10;
        font-family: "Font Awesome 5 Pro", "fa-regular-400";
    }
</style>