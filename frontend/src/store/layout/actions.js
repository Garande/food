import { OPEN_SETTINGS_DRAWER, CLOSE_SETTINGS_DRAWER, TOGGLE_SETTINGS_DRAWER } from "./constants";

export const openSettingsDrawer = () => ({
    type: OPEN_SETTINGS_DRAWER,
})

export const closeSettingsDrawer = () => ({
    type: CLOSE_SETTINGS_DRAWER,
});

export const toggleSettingsDrawer = () => ({
    type: TOGGLE_SETTINGS_DRAWER,
})