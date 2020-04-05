<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="scss">
html,
body {
	padding: 0;
	margin: 0;

	font-size: 16pt;
}

* {
	box-sizing: border-box;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
}

#app {
	font-family: 'Roboto', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
