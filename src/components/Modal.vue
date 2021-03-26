<template>
	<div
		class="modal fade"
		:class="show ? 'show' : ''"
		:style="show ? 'display:block;' : 'display:none;'"
		:aria-hidden="show ? false : true"
		:aria-modal="show ? true : false"
		role="dialog"
	>
		<div class="modal-dialog modal-lg" style="overflow-y: initial">
			<div class="modal-content">
				<div class="modal-header">
					<h6 class="modal-title">{{ title }}</h6>
					<button
						type="button"
						class="close"
						data-dismiss="modal"
						aria-label="Close"
						@click.prevent="modalCloseClicked"
					>
						<span aria-hidden="true">×</span>
					</button>
				</div>

				<div
					class="modal-body"
					:class="modalBodyClass"
					:style="
						'height: ' +
						(window.height - 175) +
						'px; overflow-y: auto;'
					"
				>
					<slot></slot>
				</div>

				<div class="modal-footer justify-content-between">
					<slot name="footer"></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "Data",
		},
		modalBodyClass: {
			type: String,
			default: "",
		},
		show: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			window: {
				width: 0,
				height: 0,
			},
		};
	},
	watch: {
		show(show) {
			if (show) {
				this.emitOpened();
			} else {
				this.emitClosed();
			}
		},
	},
	created() {
		window.addEventListener("resize", this.handleResize);
		this.handleResize();
	},
	methods: {
		modalCloseClicked() {
			this.emitClosed();
		},

		emitOpened() {
			this.$emit("opened", true);
		},
		emitClosed() {
			this.$emit("closed", true);
		},

		handleResize() {
			this.window.width = window.innerWidth;
			this.window.height = window.innerHeight;
		},
	},
};
</script>
