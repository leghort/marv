import { emit, on } from "@/libs/socket.io";

export default {
  upload: (file) => emit("files.upload", file),
  remove: (file) => emit("files.remove", file),
  getFileList: () => emit("files.getFileList"),
  on: (eventName, callback) => on(`files.${eventName}`, callback),
};
