"use client";
import React, { ReactNode } from "react";
import chapterList from "../../ui/Uberedux/data/chapters.json"
import styles from "../../app/page.module.css";


export default function Chapters({ children }: { 
  children?: ReactNode | null,
}) {


  return (
    <div className={styles.features}>
      {chapterList.map((item, i) => {
        const {outline, title, subheader} = item;
        return <div 
                key={`item_${i}`} 
                className={styles.feature}
                >
                  <h3>⚡ {subheader}</h3>
                  <p>{outline}</p>
              </div>
      })}
      {children}
    </div>
  );
}


/*


          {features.map((item: any, i: number) => {
            
          <div className={styles.feature}>
            
            
          </div>
            
          return null;
        })}

      </div>

*/