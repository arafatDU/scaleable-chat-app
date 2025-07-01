"use client"

import { useState } from "react";
import { useSocket } from "../context/SocketProvider";
import styles from "./page.module.css";


export default function Home() {
  const { sendMessage } = useSocket();
  const [message, setMessage] = useState("");


  return (
    <div className={styles.page}>
      <main>
        
        <h1 className={styles.title}>Welcome to the Scalable Chat App</h1>
        <p className={styles.description}>
          This is a scalable chat application built with Next.js and Socket.IO.
        </p>


        <hr className={styles.separator} />

        <br />
        <br />
        <br />

        <div className={styles.chatContainer}>
          <div className={styles.chatHeader}>
            <h1 className={styles.title}>All Messages will appear here.</h1>
          </div>

          <br />

          <div className={styles.chatBox}>
            <input onChange={(e) => setMessage(e.target.value)} type="text" />
            <button onClick={(e) => sendMessage(message)} className={styles.sendButton}>Send</button>
          </div>
        </div>
        

      </main>
      <footer className={styles.footer}>
        <span>
          Made with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by the{" "}
          <a
            href="https://github.com/arafatDU"
            target="_blank"
            rel="noopener noreferrer"
          >
            arafathussain
          </a>
        </span>
      </footer>
    </div>
  );
}
