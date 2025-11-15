import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ChatMessage {
    id: string;
    senderId: string;
    receiverId: string;
    content: string;
    timestamp: string;
}

interface ChatState {
    messages: ChatMessage[];
    activeChatUserId: string | null;
}

const initialState: ChatState = {
    messages: [],
    activeChatUserId: null,
};

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setActiveChatUser(state, action: PayloadAction<string | null>) {
            state.activeChatUserId = action.payload;
        },
        addMessage(state, action: PayloadAction<ChatMessage>) {
            state.messages.push(action.payload);
        },
        clearChat(state) {
            state.messages = [];
        },
    },
});

export const { setActiveChatUser, addMessage, clearChat } =
    chatSlice.actions;

export default chatSlice.reducer;
