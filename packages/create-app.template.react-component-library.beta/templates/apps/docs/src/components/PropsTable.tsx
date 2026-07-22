import type { ReactNode } from "react";

export interface PropEntry {
  name: string;
  type: string;
  required?: boolean;
  description: ReactNode;
}

export function PropsTable({ rows }: { rows: PropEntry[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.name}>
            <td>
              <code>{row.name}</code>
              {row.required && (
                <span style={{ color: "#e03131", marginLeft: 4 }}>*</span>
              )}
            </td>
            <td>
              <code>{row.type}</code>
            </td>
            <td>{row.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
