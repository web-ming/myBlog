<template>
	<div class="app">
		<div class="app-head" :class='{open: mobileAsideShow}'>
			<mobilehead></mobilehead>
		</div>
		<mobile-aside></mobile-aside>
		<mobile-pull-refresh :next="refresh">
			<div slot="list">
				<div class="app-main" :class='{open: mobileAsideShow}'>
					<nuxt></nuxt>
					<div class="ui-mask" v-show='mobileAsideShow' @click='hideMobileAside'></div>
				</div>
			</div>
		</mobile-pull-refresh>
        <mobile-back-totop :defaultProps="200" :date="200" :color="'#FF7F50'"></mobile-back-totop>
	</div>
</template>

<script>
    import {mobilehead,mobileAside,mobilePullRefresh,mobileBackTotop} from '../components/mobile/index';
    export default {
        name: 'app',
        components: {
            mobilehead,
            mobileAside,
            mobilePullRefresh,
            mobileBackTotop
        },
        computed: {
            mobileAsideShow(){
                return this.$store.state.mobileAsideShow;

            } 
        },
        methods: {
            hideMobileAside(){
                this.$store.state.mobileAsideShow = false;
            },
            refresh() {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve()
                    }, 2000)
                })
            }
        }
    }
</script>

<style scoped>
	.app-main,
	.app-head {
		transform: translateX(0);
		transition: transform .5s linear;
	}
	
	.app-head {
		height: 45px;
	}
	
	.main-part {
		padding-top: 45px
	}
	
	.open {
		transform: translateX(72%);
		transition: transform .5s linear;
	}
	
	.ui-mask {
		position: fixed;
		left: 0px;
		top: 0px;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.1);
		z-index: 3;
		content: '';
	}
	
	.showlist-enter-active {
		transition: transform .5s;
		transform: translateX(0);
	}
	
	.showlist-enter {
		transform: translateX(100%);
	}
	
	.showlist-leave-active {
		transition: transform .5s;
		transform: translateX(-100%);
	}
</style>