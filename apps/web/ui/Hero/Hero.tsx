"use client";
import React, { ReactNode } from "react";


export default function Hero({ children }: { 
  children?: ReactNode | null,
}) {

  return (
    <>
    
      <h2>Hero</h2>
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