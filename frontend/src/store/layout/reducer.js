import { OPEN_SETTINGS_DRAWER, CLOSE_SETTINGS_DRAWER, TOGGLE_SETTINGS_DRAWER } from "./constants";

const INIT_STATE = {
    settingsDrawerOpen: false,
}


const Layout = (state = INIT_STATE, action) => {
    switch (action.type) {
        case OPEN_SETTINGS_DRAWER:
            return {
                ...state,
                settingsDrawerOpen: true,
            }
        case CLOSE_SETTINGS_DRAWER:
            return {
                ...state,
                settingsDrawerOpen: false,
            }
        case TOGGLE_SETTINGS_DRAWER:
            return {
                ...state,
                settingsDrawerOpen: !state.settingsDrawerOpen,
            }
        default:
            return state;
    }
}


export default Layout;