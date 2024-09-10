import React, { useEffect, useState } from "react";

const FilterPeople = () => {
  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=5");
        const json = await response.json();
        setData(json.results);
        setFilteredUsers(json.results); //Początkowo, po pobraniu danych, ustawiamy filteredUsers na pełną listę, aby użytkownicy byli wyświetlani, zanim cokolwiek zostanie wpisane w polu wyszukiwania.
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    setFilteredUsers(
      data.filter(
        (filterPerson) =>
          filterPerson.name.first.toLowerCase().includes(text.toLowerCase()) ||
          filterPerson.name.last.toLowerCase().includes(text.toLowerCase()) //odwolujesz sie do text a nie do wartości inputText, która jeszcze nie została zaktualizowana podczas filtrowania
      )
    );
  };

  return (
    <div>
      <div>
        <label htmlFor="search">Find a person</label>
        <input
          type="text"
          value={inputText}
          id="search"
          onChange={handleInputChange}
          placeholder="Type to search"
        />
      </div>
      <ul>
        {filteredUsers.map((person, index) => (
          <li key={index}>
            {person.name.first} {person.name.last}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterPeople;
