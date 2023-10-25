"use client";
import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { Container } from "../container/Container";

interface TableItem {
  id: number;
  name: string;
  email: string;
  birthday_date: string;
  phone_number: string;
  address: string;
}

const dataTabelTypes = [
  "Name",
  "Email",
  "Birthday Date",
  "Phone Number",
  "Address",
];

export default function TestOne() {
  const [tableData, setTableData] = useState<TableItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTableData = async () => {
      try {
        const response = await fetch(
          "https://technical-task-api.icapgroupgmbh.com/api/table/"
        );
        const data = await response.json();
        setTableData(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchTableData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (tableData.length === 0) {
    return <div>No data available.</div>;
  }

  return (
    <section className={style.tabel__section}>
      <Container>
        <div>
          <table className={style.tabel}>
            <caption className={style.caprion}>TABLE PAGE</caption>
            <tbody>
              <tr className={style.tr}>
                {dataTabelTypes.map((item, index) => {
                  return (
                    <th key={index} className={style.types}>
                      {item}
                    </th>
                  );
                })}
              </tr>
            </tbody>
            {tableData.map(
              ({ name, email, birthday_date, phone_number, address, id }) => (
                <tbody key={id} className={style.tbody}>
                  <tr className={style.tr}>
                    <td className={style.answer} data-cell="Name">
                      {name}
                    </td>
                    <td className={style.answer} data-cell="Email">
                      {email}
                    </td>
                    <td className={style.answer} data-cell="Birthday Date">
                      {birthday_date}
                    </td>
                    <td className={style.answer} data-cell="Phone Number">
                      {phone_number}
                    </td>
                    <td className={style.answer} data-cell="Address">
                      {address}
                    </td>
                  </tr>
                </tbody>
              )
            )}
          </table>
        </div>
      </Container>
    </section>
  );
}
