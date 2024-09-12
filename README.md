# The WordPress SlotFill System

This repository contains working example of all of the existing SlotFills available in WordPress as of version 6.6.

## Common Slots Available in the Post Edit Site Edit Screens

-   [PluginPostStatusInfo](https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-post-status-info/)
-   [PluginPrePublishPanel](https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-pre-publish-panel/)
-   [PluginPostPublishPanel](https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-post-publish-panel/)
-   [PluginMoreMenuItem](https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-more-menu-item/)
-   [PluginBlockSettingsMenuItem](https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-block-settings-menu-item/)
-   [PluginSidebar](https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-sidebar/)
-   [PluginSidebarMoreMenuItem](https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-sidebar-more-menu-item/)
-   [PluginDocumentSettingPanel](https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-document-setting-panel/)

## Slots Available in the Site Edit Screen Only

-   [MainDashboardButton](https://developer.wordpress.org/block-editor/reference-guides/slotfills/main-dashboard-button/#post-editor-example) **Marked as experimental**

### Local Development

Run the setup command to install all dependencies and do an initial production build.

```js
npm run setup
```

Build Commands - compiles once.

```js
npm run build
```

Watch Commands - compiles when files are changed.

```js
npm run start
```

### Start the local development environment.

#### wp-now

```
npm run wp-now start --blueprint=./wp-now.json
```

#### wp-env

```
npm run env start
```
