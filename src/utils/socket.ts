import { io } from "socket.io-client";

export const socket = io("http://localhost:8000/api/v1/", {
    autoConnect: false,
});
