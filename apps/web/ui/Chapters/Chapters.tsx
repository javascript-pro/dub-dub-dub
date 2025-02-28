"use client";
import React, { ReactNode } from "react";
import chapterList from "../../ui/Uberedux/data/chapters.json"

export default function Chapters({ children }: { 
  children?: ReactNode | null,
}) {


  return (
    <>
    
      <h2>Chapters</h2>
      <pre>
        {JSON.stringify(chapterList, null, 2)}
      </pre>
      {children}
    </>
  );
}


/*

<div className={styles.features}>
          {features.map((item: any, i: number) => {
            
          <div className={styles.feature}>
            <h3>⚡ Super Fast Dev</h3>
            <p>Leverage Turborepo for lightning-fast builds and efficient caching.</p>
          </div>
            
          return null;
        })}

      </div>

*/