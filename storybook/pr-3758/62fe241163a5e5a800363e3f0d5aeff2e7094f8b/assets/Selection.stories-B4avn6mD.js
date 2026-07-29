import{r as p,j as c}from"./iframe-DSTev5eS.js";import{O as y}from"./object-table-BfGnW0RR.js";import{E as x}from"./Employee-BAk2o20h.js";import{d as C,o as $,T as w,r as u,i as S,k as K,j as k}from"./objectTableStoryHelpers-d2sfQdpo.js";import"./preload-helper-C0ahMEab.js";import"./Table-DZIaqkCI.js";import"./index-BtWbeQUf.js";import"./Dialog-VfaVCThH.js";import"./cross-C10Jdqp4.js";import"./svgIconContainer-Cai_TSPH.js";import"./useBaseUiId-B59XoFeA.js";import"./InternalBackdrop-CEvJom9I.js";import"./composite-BJhDqHa5.js";import"./index-BwPzfPTv.js";import"./index-S3ZDNn8V.js";import"./index-XegCYuh1.js";import"./useEventCallback-KvrwGKDq.js";import"./SkeletonBar-DImFuTjI.js";import"./LoadingCell-BumKG1aU.js";import"./ColumnConfigDialog-Y2zJST67.js";import"./DraggableList-CxQgflTL.js";import"./search-DMSt_gFn.js";import"./Input-CzYxINMZ.js";import"./useControlled-Da-Y32Lj.js";import"./isEqual-B2qfbV2W.js";import"./isObject-CNoyAvLK.js";import"./Button-CdwVU5le.js";import"./ActionButton-gapXhp9b.js";import"./Checkbox-C3ybVd8y.js";import"./useValueChanged-DPsQXvZl.js";import"./CollapsiblePanel-DGmMO_kp.js";import"./MultiColumnSortDialog-8bpT1T9L.js";import"./MenuTrigger-Cnleo6p4.js";import"./CompositeItem-CNtoihVd.js";import"./ToolbarRootContext-BBHEgGcZ.js";import"./getDisabledMountTransitionStyles-Bk8gM2Hm.js";import"./getPseudoElementBounds-CPd5ApbU.js";import"./chevron-down-BhNoewVe.js";import"./index-dImclggj.js";import"./error-Dov-wMuf.js";import"./BaseCbacBanner-B0qn_muO.js";import"./makeExternalStore-CuCFyRpr.js";import"./Tooltip-DTJ2zgDX.js";import"./PopoverPopup-ChZ9Vu8V.js";import"./toNumber-CTCdAXlD.js";import"./useOsdkClient-DRuEyjWM.js";import"./tick-BrokP2U5.js";import"./DropdownField-B-9m17pd.js";import"./withOsdkMetrics-DyUr7g82.js";const{expect:t,fn:f,userEvent:s,waitFor:i,within:R}=__STORYBOOK_MODULE_TEST__,He={...$,title:"Components/ObjectTable/Features/Selection & focus"},h={args:{objectType:x,columnDefinitions:C,selectionMode:"single",onRowSelectionChanged:f()},parameters:{docs:{source:{code:'<ObjectTable objectType={Employee} selectionMode="single" />'}}},render:o=>c.jsx("div",{className:"object-table-container",style:{height:"600px"},children:c.jsx(y,{...o})}),play:async({canvasElement:o,args:a})=>{const e=R(o),n=k(e);await n(),await t(e.queryByRole("checkbox",{name:/Select all rows/u})).not.toBeInTheDocument(),await s.click((await n())[0]),await i(()=>t(a.onRowSelectionChanged).toHaveBeenCalled()),await t((await n())[0]).toBeChecked(),await s.click((await n())[1]),await t((await n())[1]).toBeChecked(),await t((await n())[0]).not.toBeChecked(),await s.click((await n())[1]),await t((await n())[1]).not.toBeChecked()}},m={args:{objectType:x,columnDefinitions:C,selectionMode:"multiple",onRowSelectionChanged:f()},parameters:{docs:{source:{code:'<ObjectTable objectType={Employee} selectionMode="multiple" />'}}},render:o=>c.jsx("div",{className:"object-table-container",style:{height:"600px"},children:c.jsx(y,{...o})}),play:async({canvasElement:o,args:a})=>{const e=R(o),n=k(e),[l,d]=await n();await s.click(l),await t(l).toBeChecked(),await i(()=>t(a.onRowSelectionChanged).toHaveBeenCalled()),await s.click(d),await t(l).toBeChecked(),await t(d).toBeChecked(),await s.click(l),await t(l).not.toBeChecked(),await t(u(l)).toHaveAttribute("data-focused","false"),await s.click(await S(e));for(const r of await n())await t(r).not.toBeChecked();await s.click(await K(e));for(const r of await n())await t(r).toBeChecked();await s.click(await S(e));for(const r of await n())await t(r).not.toBeChecked()}},b={args:{objectType:x,columnDefinitions:C,selectionMode:"multiple",selectedRows:[],onRowSelectionChanged:f()},parameters:{docs:{source:{code:`const [selectedRows, setSelectedRows] = useState<any[]>([]);
const [isSelectAll, setIsSelectAll] = useState(false);

return (
  <ObjectTable
    objectType={Employee}
    selectionMode="multiple"
    selectedRows={selectedRows}
    isAllSelected={isSelectAll}
    onRowSelectionChanged={(change) => {
      setSelectedRows(change.selectedRows.map((r) => r.$primaryKey));
      setIsSelectAll(change.isSelectAll);
    }}
  />
);`}}},render:o=>{const[a,e]=p.useState(o.selectedRows??[]),[n,l]=p.useState(!1),d=p.useCallback(r=>{var v;(v=o.onRowSelectionChanged)==null||v.call(o,r),e(r.selectedRows.map(_=>_.$primaryKey)),l(r.isSelectAll)},[o]);return c.jsxs("div",{children:[c.jsxs("div",{style:{marginBottom:"16px"},children:[c.jsx("strong",{children:"Selected:"})," ",n?"All Employees":`${a.length} employees`,a.length>0&&c.jsx("button",{style:{marginLeft:"16px",padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>{e([]),l(!1)},children:"Clear Selection"})]}),c.jsx("div",{className:"object-table-container",style:{height:"600px"},children:c.jsx(y,{...o,selectedRows:a,isAllSelected:n,onRowSelectionChanged:d})})]})},play:async({canvasElement:o,args:a})=>{const e=R(o),n=k(e);await n(),await s.click((await n())[0]),await i(()=>t(a.onRowSelectionChanged).toHaveBeenCalled()),await i(()=>t(e.getByText("1 employees")).toBeInTheDocument()),await s.click((await n())[1]),await i(()=>t(e.getByText("2 employees")).toBeInTheDocument()),await s.click(e.getByRole("button",{name:"Clear Selection"})),await i(()=>t(e.getByText("0 employees")).toBeInTheDocument()),await t(e.queryByRole("button",{name:"Clear Selection"})).not.toBeInTheDocument()}},g={args:{objectType:x,columnDefinitions:C,onFocusedRowChanged:f()},parameters:{docs:{description:{story:"Demonstrates the `focusedRow` / `onFocusedRowChanged` API. Click any row to focus it; the focused employee is shown in the banner above and persists until cleared by the caller. Because focus is controlled, outside clicks no longer auto-clear — the caller owns clearing."},source:{code:`const [focusedRow, setFocusedRow] = useState<Osdk.Instance<Employee> | null>(null);

return (
  <>
    <div>
      Focused employee: {focusedRow?.fullName ?? "none"}
      <button
        onClick={() => setFocusedRow(null)}
        disabled={focusedRow == null}
      >
        Clear focus
      </button>
    </div>
    <ObjectTable
      objectType={Employee}
      focusedRow={focusedRow?.$primaryKey ?? null}
      onFocusedRowChanged={setFocusedRow}
    />
  </>
);`}}},render:o=>{const[a,e]=p.useState(null),n=p.useCallback(l=>{var d;(d=o.onFocusedRowChanged)==null||d.call(o,l),e(l)},[o]);return c.jsxs("div",{children:[c.jsxs("div",{style:{marginBottom:"16px",padding:"12px",backgroundColor:"#f0f9ff",borderRadius:"4px",border:"1px solid #bfdbfe",display:"flex",alignItems:"center",gap:"12px"},children:[c.jsxs("span",{children:[c.jsx("strong",{children:"Focused employee:"})," ",a==null?"none":`${a.fullName} (#${a.employeeNumber})`]}),c.jsx("button",{type:"button",style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:a==null?"not-allowed":"pointer"},onClick:()=>e(null),disabled:a==null,children:"Clear focus"})]}),c.jsx("div",{className:"object-table-container",style:{height:"600px"},children:c.jsx(y,{...o,focusedRow:(a==null?void 0:a.$primaryKey)??null,onFocusedRowChanged:n})})]})},play:async({canvasElement:o,args:a})=>{const e=R(o);await e.findByText(w),await s.click(e.getByText(w)),await i(()=>t(a.onFocusedRowChanged).toHaveBeenCalled()),await i(()=>t(e.getByText(/Ahmed Williams \(#\d+\)/u)).toBeInTheDocument()),await i(()=>t(u(e.getByText(w))).toHaveAttribute("data-focused","true")),await s.click(e.getByText(/Focused employee:/u)),await i(()=>t(u(e.getByText(w))).toHaveAttribute("data-focused","false")),await s.click(e.getByText(w)),await i(()=>t(u(e.getByText(w))).toHaveAttribute("data-focused","true")),await s.click(e.getByRole("button",{name:"Clear focus"})),await i(()=>t(u(e.getByText(w))).toHaveAttribute("data-focused","false"))}};var T,B,A;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    selectionMode: "single",
    onRowSelectionChanged: fn()
  },
  parameters: {
    docs: {
      source: {
        code: \`<ObjectTable objectType={Employee} selectionMode="single" />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // In "single" mode each row gets a checkbox but there is no header
  // "select all", and selecting a new row replaces the previous selection.
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // Re-query fresh each time: toggling selection re-renders the rows.
    const rowCheckboxes = findRowCheckboxes(canvas);
    await rowCheckboxes();

    // No top-level "Select all rows" checkbox in single-selection mode.
    await expect(canvas.queryByRole("checkbox", {
      name: /Select all rows/u
    })).not.toBeInTheDocument();

    // Selecting the first row checks it and notifies the consumer.
    await userEvent.click((await rowCheckboxes())[0]);
    await waitFor(() => expect(args.onRowSelectionChanged).toHaveBeenCalled());
    await expect((await rowCheckboxes())[0]).toBeChecked();

    // Selecting a second row moves the selection — the first row clears.
    await userEvent.click((await rowCheckboxes())[1]);
    await expect((await rowCheckboxes())[1]).toBeChecked();
    await expect((await rowCheckboxes())[0]).not.toBeChecked();

    // Clicking the selected row again clears it
    await userEvent.click((await rowCheckboxes())[1]);
    await expect((await rowCheckboxes())[1]).not.toBeChecked();
  }
}`,...(A=(B=h.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var E,j,F;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    selectionMode: "multiple",
    onRowSelectionChanged: fn()
  },
  parameters: {
    docs: {
      source: {
        code: \`<ObjectTable objectType={Employee} selectionMode="multiple" />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const rowCheckboxes = findRowCheckboxes(canvas);
    const [firstRow, secondRow] = await rowCheckboxes();

    // Selecting one row checks it and notifies the consumer.
    await userEvent.click(firstRow);
    await expect(firstRow).toBeChecked();
    await waitFor(() => expect(args.onRowSelectionChanged).toHaveBeenCalled());

    // In "multiple" mode a second row can be selected without clearing the
    // first — both stay checked.
    await userEvent.click(secondRow);
    await expect(firstRow).toBeChecked();
    await expect(secondRow).toBeChecked();

    // a checkbox click must not focus the row
    await userEvent.click(firstRow);
    await expect(firstRow).not.toBeChecked();
    await expect(rowContaining(firstRow)).toHaveAttribute("data-focused", "false");

    // The header checkbox toggles every row. Once rows are selected its label
    // flips to "Deselect all rows", so clicking it clears the selection.
    await userEvent.click(await findDeselectAllCheckbox(canvas));
    for (const rowCheckbox of await rowCheckboxes()) {
      await expect(rowCheckbox).not.toBeChecked();
    }

    // With nothing selected the header label flips back to "Select all rows".
    // Clicking it now selects every row.
    await userEvent.click(await findSelectAllCheckbox(canvas));
    for (const rowCheckbox of await rowCheckboxes()) {
      await expect(rowCheckbox).toBeChecked();
    }

    // Everything is selected, so the header label is "Deselect all rows" again.
    // Clicking it clears the entire selection.
    await userEvent.click(await findDeselectAllCheckbox(canvas));
    for (const rowCheckbox of await rowCheckboxes()) {
      await expect(rowCheckbox).not.toBeChecked();
    }
  }
}`,...(F=(j=m.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var D,I,O;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    selectionMode: "multiple" as const,
    selectedRows: [],
    onRowSelectionChanged: fn()
  } as EmployeeTableProps,
  parameters: {
    docs: {
      source: {
        code: \`const [selectedRows, setSelectedRows] = useState<any[]>([]);
const [isSelectAll, setIsSelectAll] = useState(false);

return (
  <ObjectTable
    objectType={Employee}
    selectionMode="multiple"
    selectedRows={selectedRows}
    isAllSelected={isSelectAll}
    onRowSelectionChanged={(change) => {
      setSelectedRows(change.selectedRows.map((r) => r.$primaryKey));
      setIsSelectAll(change.isSelectAll);
    }}
  />
);\`
      }
    }
  },
  render: args => {
    const [selectedRows, setSelectedRows] = useState<any[]>(args.selectedRows ?? []);
    const [isSelectAll, setIsSelectAll] = useState<boolean>(false);
    const handleRowSelectionChanged = useCallback((change: {
      selectedRows: Array<{
        $primaryKey: any;
      }>;
      isSelectAll: boolean;
    }) => {
      args.onRowSelectionChanged?.(change as any);
      setSelectedRows(change.selectedRows.map(r => r.$primaryKey));
      setIsSelectAll(change.isSelectAll);
    }, [args]);
    return <div>
        <div style={{
        marginBottom: "16px"
      }}>
          <strong>Selected:</strong>{" "}
          {isSelectAll ? "All Employees" : \`\${selectedRows.length} employees\`}
          {selectedRows.length > 0 && <button style={{
          marginLeft: "16px",
          padding: "4px 8px",
          fontSize: "12px",
          border: "1px solid #d1d5db",
          borderRadius: "4px",
          background: "white",
          cursor: "pointer"
        }} onClick={() => {
          setSelectedRows([]);
          setIsSelectAll(false);
        }}>
              Clear Selection
            </button>}
        </div>
        <div className="object-table-container" style={{
        height: "600px"
      }}>
          <ObjectTable {...args} selectedRows={selectedRows} isAllSelected={isSelectAll} onRowSelectionChanged={handleRowSelectionChanged} />
        </div>
      </div>;
  },
  // Selection is controlled: the caller's banner tracks the selected count and a
  // "Clear Selection" button resets it.
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const rowCheckboxes = findRowCheckboxes(canvas);
    await rowCheckboxes();

    // Select two rows; the controlled banner counts them.
    await userEvent.click((await rowCheckboxes())[0]);
    await waitFor(() => expect(args.onRowSelectionChanged).toHaveBeenCalled());
    await waitFor(() => expect(canvas.getByText("1 employees")).toBeInTheDocument());
    await userEvent.click((await rowCheckboxes())[1]);
    await waitFor(() => expect(canvas.getByText("2 employees")).toBeInTheDocument());

    // Clearing resets the controlled selection back to zero.
    await userEvent.click(canvas.getByRole("button", {
      name: "Clear Selection"
    }));
    await waitFor(() => expect(canvas.getByText("0 employees")).toBeInTheDocument());
    await expect(canvas.queryByRole("button", {
      name: "Clear Selection"
    })).not.toBeInTheDocument();
  }
}`,...(O=(I=b.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var N,H,M;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    onFocusedRowChanged: fn()
  } as EmployeeTableProps,
  parameters: {
    docs: {
      description: {
        story: "Demonstrates the \`focusedRow\` / \`onFocusedRowChanged\` API. Click any row to focus it; " + "the focused employee is shown in the banner above and persists until cleared by the caller. " + "Because focus is controlled, outside clicks no longer auto-clear — the caller owns clearing."
      },
      source: {
        code: \`const [focusedRow, setFocusedRow] = useState<Osdk.Instance<Employee> | null>(null);

return (
  <>
    <div>
      Focused employee: {focusedRow?.fullName ?? "none"}
      <button
        onClick={() => setFocusedRow(null)}
        disabled={focusedRow == null}
      >
        Clear focus
      </button>
    </div>
    <ObjectTable
      objectType={Employee}
      focusedRow={focusedRow?.$primaryKey ?? null}
      onFocusedRowChanged={setFocusedRow}
    />
  </>
);\`
      }
    }
  },
  render: args => {
    // \`focusedRow\` (the prop) is now a primary key, but the
    // \`onFocusedRowChanged\` callback still delivers the full row, so the
    // banner keeps a full object in state and passes its key back down.
    type FocusedEmployee = NonNullable<Parameters<NonNullable<EmployeeTableProps["onFocusedRowChanged"]>>[0]>;
    const [focusedRow, setFocusedRow] = useState<FocusedEmployee | null>(null);
    const handleFocusedRowChanged = useCallback((row: FocusedEmployee | null) => {
      args.onFocusedRowChanged?.(row);
      setFocusedRow(row);
    }, [args]);
    return <div>
        <div style={{
        marginBottom: "16px",
        padding: "12px",
        backgroundColor: "#f0f9ff",
        borderRadius: "4px",
        border: "1px solid #bfdbfe",
        display: "flex",
        alignItems: "center",
        gap: "12px"
      }}>
          <span>
            <strong>Focused employee:</strong>{" "}
            {focusedRow == null ? "none" : \`\${focusedRow.fullName} (#\${focusedRow.employeeNumber})\`}
          </span>
          <button type="button" style={{
          padding: "4px 8px",
          fontSize: "12px",
          border: "1px solid #d1d5db",
          borderRadius: "4px",
          background: "white",
          cursor: focusedRow == null ? "not-allowed" : "pointer"
        }} onClick={() => setFocusedRow(null)} disabled={focusedRow == null}>
            Clear focus
          </button>
        </div>
        <div className="object-table-container" style={{
        height: "600px"
      }}>
          <ObjectTable {...args} focusedRow={focusedRow?.$primaryKey ?? null} onFocusedRowChanged={handleFocusedRowChanged} />
        </div>
      </div>;
  },
  // Focus is controlled: clicking a row focuses it (data-focused + banner),
  // clicking outside fires onFocusedRowChanged(null) so the caller clears it,
  // and the explicit "Clear focus" button also resets it.
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(TARGET_DATA);

    // Clicking a row focuses it (state update + re-render is async).
    await userEvent.click(canvas.getByText(TARGET_DATA));
    await waitFor(() => expect(args.onFocusedRowChanged).toHaveBeenCalled());
    await waitFor(() => expect(canvas.getByText(/Ahmed Williams \\(#\\d+\\)/u)).toBeInTheDocument());
    await waitFor(() => expect(rowContaining(canvas.getByText(TARGET_DATA))).toHaveAttribute("data-focused", "true"));

    // Clicking outside the table clears focus via onFocusedRowChanged(null).
    await userEvent.click(canvas.getByText(/Focused employee:/u));
    await waitFor(() => expect(rowContaining(canvas.getByText(TARGET_DATA))).toHaveAttribute("data-focused", "false"));

    // Re-focus, then the explicit "Clear focus" button also resets it.
    await userEvent.click(canvas.getByText(TARGET_DATA));
    await waitFor(() => expect(rowContaining(canvas.getByText(TARGET_DATA))).toHaveAttribute("data-focused", "true"));
    await userEvent.click(canvas.getByRole("button", {
      name: "Clear focus"
    }));
    await waitFor(() => expect(rowContaining(canvas.getByText(TARGET_DATA))).toHaveAttribute("data-focused", "false"));
  }
}`,...(M=(H=g.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};const Me=["SingleSelection","MultipleSelection","ControlledSelection","ControlledFocusedRow"];export{g as ControlledFocusedRow,b as ControlledSelection,m as MultipleSelection,h as SingleSelection,Me as __namedExportsOrder,He as default};
