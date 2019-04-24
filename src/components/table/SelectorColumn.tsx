import React, { FC } from "react";
import { TableSelection as TableSelectionBase } from "@devexpress/dx-react-grid";
import { BaseCheckbox } from "../checkbox/BaseCheckbox";

export const SelectorColumn: FC<TableSelectionBase.CellProps> = ({
  tableColumn,
  tableRow,
  ...p
}) => (
  <td {...p}>
    <BaseCheckbox checked={p.selected} onChange={p.onToggle} className="p-0" />
  </td>
);

export const SelectorColumnHeader: FC<TableSelectionBase.HeaderCellProps> = ({
  tableColumn,
  tableRow,
  allSelected,
  someSelected,
  ...p
}) => (
  <th {...p}>
    <BaseCheckbox
      checked={someSelected || allSelected}
      indeterminate={someSelected && !allSelected}
      onChange={() => p.onToggle()}
      className="p-0"
    />
  </th>
);
