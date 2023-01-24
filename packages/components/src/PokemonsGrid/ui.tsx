import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { PAGINATION_LIMIT, Pokemon } from "utils";
import Image from "next/image";

export type PokemonsGridProps = {
  pokemons: Pokemon[];
  rowClassName: string;
  page: number;
  loading: boolean;
  totalCount: number;
  onClick?: (id: number) => void;
  onPageChange?: (page: number) => void;
};

const columns: GridColDef[] = [
  { field: "name", headerName: "Name" },
  {
    field: "imageUrl",
    headerName: "Image",
    renderCell: (cell) => <Image src={cell.value} alt="Pokemon image" height={100} width={100} />,
  },
];

export const PokemonsGrid = ({
  pokemons,
  rowClassName,
  totalCount,
  page,
  loading,
  onClick,
  onPageChange,
}: PokemonsGridProps) => {
  return (
    <DataGrid
      page={page}
      rows={pokemons}
      columns={columns}
      loading={loading}
      onRowClick={({ row }) => onClick?.(row.id)}
      getRowClassName={() => rowClassName}
      getRowHeight={() => "auto"}
      pageSize={PAGINATION_LIMIT}
      rowCount={totalCount}
      rowsPerPageOptions={[PAGINATION_LIMIT]}
      onPageChange={onPageChange}
      paginationMode="server"
      pagination
    />
  );
};
