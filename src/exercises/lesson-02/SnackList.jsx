export default function SnackList() {
  const snacks = [
    { name: 'Honey Bunches Of Oats Cereal', rank: 6 },
    { name: 'Cocoa Krispies Cereal', rank: 5 },
    { name: 'Brown Butter Cookies', rank: 4 },
    { name: 'Donuts', rank: 3 },
    { name: 'Kettle Salt & Vinegar Chips', rank: 2 },
    { name: 'Honey Greek Yogurt', rank: 1 },
  ];

  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <ol>
      {sortedSnacks.map((snack) => (
        <li key={snack.rank}>{snack.name}</li>
      ))}
    </ol>
  );
}
