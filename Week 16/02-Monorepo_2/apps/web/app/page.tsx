import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button appName="Web app">
        Hii There
      </Button>
    </div>
  );
}
