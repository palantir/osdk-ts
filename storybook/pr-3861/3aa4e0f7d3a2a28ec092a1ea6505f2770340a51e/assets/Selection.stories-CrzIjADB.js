import{r as u,j as s}from"./iframe-JhP61fmQ.js";import{O as y}from"./object-table-BJFagCC_.js";import{E as x}from"./Employee-BAk2o20h.js";import{d as C,o as $,T as w,r as p,i as S,k as K,j as k}from"./objectTableStoryHelpers-B4M_GO92.js";import"./preload-helper-Dv4AHPyi.js";import"./Table-B7LI-gFh.js";import"./index-BSmeSe50.js";import"./Dialog-Cg45JvOL.js";import"./cross-Dsbhsz94.js";import"./svgIconContainer-DKp8J6V9.js";import"./useBaseUiId-CA99nDKM.js";import"./InternalBackdrop-C5yqQ4th.js";import"./composite-BB4dZRYR.js";import"./index-D3ENcNCA.js";import"./index-hdo2lGgd.js";import"./index-D7wU48Sj.js";import"./useEventCallback-DZNv6pry.js";import"./SkeletonBar-Dhm6G2dC.js";import"./LoadingCell-BGp_Bbyh.js";import"./ColumnConfigDialog-W0KM4Iuw.js";import"./DraggableList-BHKYfhCE.js";import"./search-CT7W-ise.js";import"./Input-CRfOnocM.js";import"./useControlled-CmxJ51VA.js";import"./Button-CndCZNKo.js";import"./small-cross-oBgym-zX.js";import"./ActionButton-qgx9p82l.js";import"./Checkbox-DPg92fgI.js";import"./useValueChanged-CkObsYLU.js";import"./CollapsiblePanel-AJl5CmxO.js";import"./MultiColumnSortDialog-CKF6fxNt.js";import"./MenuTrigger-8q4vQbZo.js";import"./CompositeItem-9QryHf4D.js";import"./ToolbarRootContext-D0sVvk8L.js";import"./getDisabledMountTransitionStyles-Ckk4q5Pv.js";import"./getPseudoElementBounds-B6I1n0Dl.js";import"./chevron-down-B0H-_dR_.js";import"./index-DkeojneP.js";import"./error-Cz6c6olR.js";import"./BaseCbacBanner-PkI4v1kZ.js";import"./makeExternalStore-CSQl7Sbm.js";import"./Tooltip-CmSYJPe_.js";import"./PopoverPopup-CA9gw9sj.js";import"./debounce-Bze7pKAd.js";import"./useOsdkClient-DvwuNmgk.js";import"./tick-CP7Ao593.js";import"./DropdownField-DhCekDmi.js";import"./isEqual-BookI4Nh.js";import"./withOsdkMetrics-BFR4d_uj.js";const{expect:n,fn:f,userEvent:c,waitFor:l,within:R}=__STORYBOOK_MODULE_TEST__,He={...$,title:"Components/ObjectTable/Features/Selection & focus"},m={args:{objectType:x,columnDefinitions:C,selectionMode:"single",onRowSelectionChanged:f()},parameters:{docs:{source:{code:'<ObjectTable objectType={Employee} selectionMode="single" />'}}},render:t=>s.jsx("div",{className:"object-table-container",style:{height:"600px"},children:s.jsx(y,{...t})}),play:async({canvasElement:t,args:a})=>{const e=R(t),o=k(e);await o(),await n(e.queryByRole("checkbox",{name:/Select all rows/u})).not.toBeInTheDocument(),await c.click((await o())[0]),await l(()=>n(a.onRowSelectionChanged).toHaveBeenCalled()),await n((await o())[0]).toBeChecked(),await c.click((await o())[1]),await n((await o())[1]).toBeChecked(),await n((await o())[0]).not.toBeChecked(),await c.click((await o())[1]),await n((await o())[1]).not.toBeChecked()}},h={args:{objectType:x,columnDefinitions:C,selectionMode:"multiple",onRowSelectionChanged:f()},parameters:{docs:{source:{code:'<ObjectTable objectType={Employee} selectionMode="multiple" />'}}},render:t=>s.jsx("div",{className:"object-table-container",style:{height:"600px"},children:s.jsx(y,{...t})}),play:async({canvasElement:t,args:a})=>{const e=R(t),o=k(e),[i,d]=await o();await c.click(i),await n(i).toBeChecked(),await l(()=>n(a.onRowSelectionChanged).toHaveBeenCalled()),await c.click(d),await n(i).toBeChecked(),await n(d).toBeChecked(),await c.click(await S(e));for(const r of await o())await n(r).not.toBeChecked();await c.click(await K(e));for(const r of await o())await n(r).toBeChecked();await c.click(await S(e));for(const r of await o())await n(r).not.toBeChecked()}},b={args:{objectType:x,columnDefinitions:C,selectionMode:"multiple",selectedRows:[],onRowSelectionChanged:f()},parameters:{docs:{source:{code:`const [selectedRows, setSelectedRows] = useState<any[]>([]);
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
);`}}},render:t=>{const[a,e]=u.useState(t.selectedRows??[]),[o,i]=u.useState(!1),d=u.useCallback(r=>{var v;(v=t.onRowSelectionChanged)==null||v.call(t,r),e(r.selectedRows.map(_=>_.$primaryKey)),i(r.isSelectAll)},[t]);return s.jsxs("div",{children:[s.jsxs("div",{style:{marginBottom:"16px"},children:[s.jsx("strong",{children:"Selected:"})," ",o?"All Employees":`${a.length} employees`,a.length>0&&s.jsx("button",{style:{marginLeft:"16px",padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>{e([]),i(!1)},children:"Clear Selection"})]}),s.jsx("div",{className:"object-table-container",style:{height:"600px"},children:s.jsx(y,{...t,selectedRows:a,isAllSelected:o,onRowSelectionChanged:d})})]})},play:async({canvasElement:t,args:a})=>{const e=R(t),o=k(e);await o(),await c.click((await o())[0]),await l(()=>n(a.onRowSelectionChanged).toHaveBeenCalled()),await l(()=>n(e.getByText("1 employees")).toBeInTheDocument()),await c.click((await o())[1]),await l(()=>n(e.getByText("2 employees")).toBeInTheDocument()),await c.click(e.getByRole("button",{name:"Clear Selection"})),await l(()=>n(e.getByText("0 employees")).toBeInTheDocument()),await n(e.queryByRole("button",{name:"Clear Selection"})).not.toBeInTheDocument()}},g={args:{objectType:x,columnDefinitions:C,onFocusedRowChanged:f()},parameters:{docs:{description:{story:"Demonstrates the `focusedRow` / `onFocusedRowChanged` API. Click any row to focus it; the focused employee is shown in the banner above and persists until cleared by the caller. Because focus is controlled, outside clicks no longer auto-clear — the caller owns clearing."},source:{code:`const [focusedRow, setFocusedRow] = useState<Osdk.Instance<Employee> | null>(null);

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
);`}}},render:t=>{const[a,e]=u.useState(null),o=u.useCallback(i=>{var d;(d=t.onFocusedRowChanged)==null||d.call(t,i),e(i)},[t]);return s.jsxs("div",{children:[s.jsxs("div",{style:{marginBottom:"16px",padding:"12px",backgroundColor:"#f0f9ff",borderRadius:"4px",border:"1px solid #bfdbfe",display:"flex",alignItems:"center",gap:"12px"},children:[s.jsxs("span",{children:[s.jsx("strong",{children:"Focused employee:"})," ",a==null?"none":`${a.fullName} (#${a.employeeNumber})`]}),s.jsx("button",{type:"button",style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:a==null?"not-allowed":"pointer"},onClick:()=>e(null),disabled:a==null,children:"Clear focus"})]}),s.jsx("div",{className:"object-table-container",style:{height:"600px"},children:s.jsx(y,{...t,focusedRow:(a==null?void 0:a.$primaryKey)??null,onFocusedRowChanged:o})})]})},play:async({canvasElement:t,args:a})=>{const e=R(t);await e.findByText(w),await c.click(e.getByText(w)),await l(()=>n(a.onFocusedRowChanged).toHaveBeenCalled()),await l(()=>n(e.getByText(/Ahmed Williams \(#\d+\)/u)).toBeInTheDocument()),await l(()=>n(p(e.getByText(w))).toHaveAttribute("data-focused","true")),await c.click(e.getByText(/Focused employee:/u)),await l(()=>n(p(e.getByText(w))).toHaveAttribute("data-focused","false")),await c.click(e.getByText(w)),await l(()=>n(p(e.getByText(w))).toHaveAttribute("data-focused","true")),await c.click(e.getByRole("button",{name:"Clear focus"})),await l(()=>n(p(e.getByText(w))).toHaveAttribute("data-focused","false"))}};var T,B,A;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(A=(B=m.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var E,j,F;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(F=(j=h.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var D,I,O;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(M=(H=g.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};const Me=["SingleSelection","MultipleSelection","ControlledSelection","ControlledFocusedRow"];export{g as ControlledFocusedRow,b as ControlledSelection,h as MultipleSelection,m as SingleSelection,Me as __namedExportsOrder,He as default};
