import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { PokemonDetails } from "utils";
import Image from "next/image";

export type PokemonDetailsGridProps = {
  pokemonsDetails: PokemonDetails;
  loading: boolean;
};

const columns: GridColDef[] = [
  { field: "name", headerName: "Name" },
  {
    field: "imageUrl",
    headerName: "Image",
    renderCell: (cell) => (
      <Image src={cell.value} alt="Pokemon image" height={100} width={100} />
    ),
  },
  { field: "hp", headerName: "HP" },
  { field: "attack", headerName: "Attack" },
  { field: "defense", headerName: "Defense" },
  { field: "speed", headerName: "Speed" },
];

export const PokemonDetailsGrid = ({
  pokemonsDetails,
  loading,
}: PokemonDetailsGridProps) => {
  const { stats } = pokemonsDetails;
  const rows: GridRowsProp = [
    {
      id: pokemonsDetails.id,
      name: pokemonsDetails.name,
      imageUrl: pokemonsDetails.imageUrl,
      attack: stats.attack,
      defense: stats.defense,
      speed: stats.speed,
      hp: stats.hp,
    },
  ];

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      getRowHeight={() => "auto"}
      loading={loading}
      hideFooterPagination
    />
  );
};
