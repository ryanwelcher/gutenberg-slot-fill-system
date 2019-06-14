const { registerPlugin } = wp.plugins;
const { PluginPostStatusInfo } = wp.editPost;


const PluginPostStatusInfoTest = () => {
	return(
		<PluginPostStatusInfo>
			<p>Post Status Info SlotFill</p>
		</PluginPostStatusInfo>
	)
};

registerPlugin( 'post-status-info-test', { render: PluginPostStatusInfoTest } );
