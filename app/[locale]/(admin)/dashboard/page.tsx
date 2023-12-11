"use client";
import React, { useLayoutEffect } from "react";
import Card from "@/app/ui/dashboard/card/card";
import Chart from "@/app/ui/dashboard/chart/chart";
import styles from "@/app/ui/dashboard/dashboard.module.css";
import Transactions from "@/app/ui/dashboard/transactions/transactions";
import Rightbar from "@/app/ui/dashboard/rightbar/rightbar";

const cards = [
  {
    id: 1,
    title: "Total Users",
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: "Stock",
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: "Revenue",
    number: 6.642,
    change: 18,
  },
];
const Dashboard = () => {
 
  return (
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.cards}>
            {cards.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
          <Transactions />
          <Chart />
        </div>
        <div className={styles.side}>
          <Rightbar />
        </div>
      </div>
  );
};

export default Dashboard;
