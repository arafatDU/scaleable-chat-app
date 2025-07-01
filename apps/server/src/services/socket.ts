import { Server } from "socket.io";


class SocketService {
  private _io: Server;

  constructor() {
    console.log("Initializing Socket service...");
    this._io = new Server({
      cors: {
        origin: "*",
        allowedHeaders: ["*"],
      },
    });
  }

  public initListeners() {
    const io = this.io;
    console.log("Initializing Socket listeners...");

    io.on("connect", (socket) => {
      console.log("New socket connected:", socket.id);

      socket.on("event:message", async ({message}: {message: string}) => {
        console.log("Received message:", message);
      })
    })
  }

  get io() {
    return this._io;
  }
}


export default SocketService;