"use client";
// components/SearchBar.js
export default function SearchBar({ placeholder }) {
    return (
      <input type="text" placeholder={placeholder} className="search-bar" />
    );
  }