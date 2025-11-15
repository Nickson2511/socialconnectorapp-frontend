import { createSlice, } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface NotificationItem {
    id: string;
    type: "like" | "comment" | "follow" | "message" | "system";
    message: string;
    createdAt: string;
    read: boolean;
}

interface NotificationsState {
    list: NotificationItem[];
}

const initialState: NotificationsState = {
    list: [],
};

const notificationsSlice = createSlice({
    name: "notifications",
    initialState,
    reducers: {
        addNotification(state, action: PayloadAction<NotificationItem>) {
            state.list.unshift(action.payload);
        },
        markAsRead(state, action: PayloadAction<string>) {
            const notif = state.list.find((n) => n.id === action.payload);
            if (notif) notif.read = true;
        },
        clearNotifications(state) {
            state.list = [];
        },
    },
});

export const { addNotification, markAsRead, clearNotifications } =
    notificationsSlice.actions;

export default notificationsSlice.reducer;
