import React from "react";
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>NAME</th>
        <th>JOB</th>
        <th>REMOVE</th>
      </tr>
    </thead>
  );
};
const Tbody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td> {row.NAME}</td>
        <td> {row.JOB}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};
const Table =(props)=>{
  const { characterData, removeCharacter } = props;
  return (
    <table>
      <TableHeader />
      <Tbody
        characterData={characterData}
        removeCharacter={removeCharacter}
      />
    </table>
  );
}

export default Table;
