import{r as i,j as n}from"./iframe-B2WEvdAW.js";import{O}from"./object-table-D56pvC1L.js";import{E as V}from"./Employee-BAk2o20h.js";import{d as z,o as K,T as w,b as B,a as k,e as R,h as q,i as U,j as Y}from"./objectTableStoryHelpers-Dlb6lixX.js";import"./preload-helper-DhU0XYWM.js";import"./Table-EuDoghZt.js";import"./index-CPTV9ACa.js";import"./Dialog-Bs9shMGW.js";import"./cross-Dp_5_chm.js";import"./svgIconContainer-2zRkClSo.js";import"./useBaseUiId-DCdD9_76.js";import"./InternalBackdrop-CFws66aH.js";import"./composite-BREofBqz.js";import"./index-BdLXJsG_.js";import"./index-CbAjSkqf.js";import"./index-BLoo5gPv.js";import"./useEventCallback-C_gsVITF.js";import"./SkeletonBar-5dGv93nQ.js";import"./LoadingCell-ChbduxuV.js";import"./ColumnConfigDialog-Bj3PLmMs.js";import"./DraggableList-CfxOorci.js";import"./search--8DzG11U.js";import"./Input-Df2u9clw.js";import"./useControlled-C-Bb8qdR.js";import"./isEqual-D5fyckHN.js";import"./isObject-ScWPTohZ.js";import"./Button-CfOMVE39.js";import"./ActionButton-BNwYJDXK.js";import"./Checkbox-hQgO7BXg.js";import"./useValueChanged-DcSkF3ku.js";import"./CollapsiblePanel-DKsUEBPA.js";import"./MultiColumnSortDialog-CtzHHpxn.js";import"./MenuTrigger-CQi3yp30.js";import"./CompositeItem-DV2f_o_-.js";import"./ToolbarRootContext-Cl65jw6L.js";import"./getDisabledMountTransitionStyles-DVeUHiRy.js";import"./getPseudoElementBounds-_iSTNHhH.js";import"./chevron-down-CDva5__V.js";import"./index-Bt45A8jP.js";import"./error-DA0fUKLV.js";import"./BaseCbacBanner-CYNzCrjS.js";import"./makeExternalStore-PS0hgXnz.js";import"./Tooltip-C1X-0Hb3.js";import"./PopoverPopup-BjirBSSn.js";import"./toNumber-x-yUogQr.js";import"./useOsdkClient-DVo9clTL.js";import"./tick-CL3asYDB.js";import"./DropdownField-s2aUsSbs.js";import"./withOsdkMetrics-BQALV_bt.js";const{expect:d,fireEvent:J,fn:s,screen:b,userEvent:m,waitFor:c,within:f}=__STORYBOOK_MODULE_TEST__,Ke={...K,title:"Components/ObjectTable/Features/Interactions & events"},g={args:{objectType:V,columnDefinitions:z,renderCellContextMenu:(e,l)=>n.jsxs("div",{style:{background:"white",padding:8,border:"1px solid #d1d5db",boxShadow:"0 2px 8px 0 rgba(0, 0, 0, 0.1)",fontSize:13,borderRadius:4},children:[n.jsx("div",{style:{fontWeight:"bold",marginBottom:4},children:"Cell Value:"}),n.jsx("div",{children:l?String(l):"No Value"})]})},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  renderCellContextMenu={(_, cellValue) => (
    <div
      style={{
        background: "white",
        padding: 8,
        border: "1px solid #d1d5db",
        boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.1)",
        fontSize: 13,
        borderRadius: 4,
      }}
    >
      <div style={{ fontWeight: "bold", marginBottom: 4 }}>Cell Value:</div>
      <div>{cellValue ? String(cellValue) : "No Value"}</div>
    </div>
  )}
/>`}}},render:e=>n.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[n.jsx("div",{style:{padding:"12px"},children:"Right click on any cell"}),n.jsx(O,{...e})]}),play:async({canvasElement:e})=>{const l=f(e);await l.findByText(w),J.contextMenu(l.getByText(w)),await d(await b.findByText("Cell Value:")).toBeInTheDocument(),await m.click(l.getByText("Right click on any cell")),await c(()=>d(b.queryByText("Cell Value:")).not.toBeInTheDocument())}},y={args:{objectType:V,columnDefinitions:z,selectionMode:"multiple",selectedRows:[],orderBy:[{property:"fullName",direction:"asc"}],onRowClick:s(),onColumnHeaderClick:s(),onRowSelectionChanged:s(),onOrderByChanged:s(),onColumnVisibilityChanged:s(),onColumnsPinnedChanged:s(),onColumnResize:s(),onFocusedRowChanged:s()},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  columnDefinitions={defaultEmployeeColumns}
  selectionMode="multiple"
  onRowClick={(employee) => {
    console.log("Row clicked:", employee);
  }}
  onFocusedRowChanged={(employee) => {
    console.log("Row focused:", employee);
  }}
  onColumnHeaderClick={(columnId) => {
    console.log("Column header clicked:", columnId);
  }}
  onRowSelectionChanged={(change) => {
    console.log("Selection changed:", change.selectedRows, change.isSelectAll);
    console.log("Derived objectSet:", change.objectSet);
  }}
  onOrderByChanged={(orderBy) => {
    console.log("Sort changed:", orderBy);
  }}
  onColumnVisibilityChanged={(visibilityState) => {
    console.log("Column visibility changed:", visibilityState);
  }}
  onColumnsPinnedChanged={(pinnedState) => {
    console.log("Pinned columns changed:", pinnedState);
  }}
  onColumnResize={(columnId, newWidth) => {
    console.log("Column resized:", columnId, newWidth);
  }}
/>`}}},render:e=>{const[l,a]=i.useState(null),[C,v]=i.useState(null),[h,x]=i.useState([]),[A,M]=i.useState(!1),[u,I]=i.useState([{property:"fullName",direction:"asc"}]),[P,r]=i.useState(""),D=i.useCallback(o=>{var t;(t=e.onRowClick)==null||t.call(e,o),a(o),r("onRowClick")},[e]),F=i.useCallback(o=>{var t;(t=e.onColumnHeaderClick)==null||t.call(e,o),v(o),r("onColumnHeaderClick")},[e]),_=i.useCallback(o=>{var t;(t=e.onRowSelectionChanged)==null||t.call(e,o),x(o.selectedRows.map(p=>p.$primaryKey)),M(o.isSelectAll),r("onRowSelectionChanged")},[e]),W=i.useCallback(o=>{var t;(t=e.onOrderByChanged)==null||t.call(e,o),I(o),r("onOrderByChanged")},[e]),L=i.useCallback(o=>{var t;(t=e.onColumnVisibilityChanged)==null||t.call(e,o),r("onColumnVisibilityChanged")},[e]),$=i.useCallback(o=>{var t;(t=e.onColumnsPinnedChanged)==null||t.call(e,o),r("onColumnsPinnedChanged")},[e]),G=i.useCallback((o,t)=>{var p;(p=e.onColumnResize)==null||p.call(e,o,t),r(`onColumnResize (${o})`)},[e]);return n.jsxs("div",{children:[n.jsxs("div",{style:{marginBottom:"16px",padding:"12px",backgroundColor:"#f0f9ff",borderRadius:"4px",border:"1px solid #bfdbfe"},children:[n.jsx("div",{style:{marginBottom:"8px",fontWeight:"bold"},children:"Event Monitor:"}),n.jsxs("div",{style:{marginBottom:"8px",fontSize:"12px"},children:[n.jsx("strong",{children:"Last event:"})," ",P||"None"]}),n.jsxs("div",{style:{marginBottom:"8px",fontSize:"12px"},children:[n.jsx("strong",{children:"Row clicked:"})," ",l?n.jsx("code",{children:l.fullName}):"None"]}),n.jsxs("div",{style:{marginBottom:"8px",fontSize:"12px"},children:[n.jsx("strong",{children:"Column clicked:"})," ",C?n.jsx("code",{children:C}):"None"]}),n.jsxs("div",{style:{marginBottom:"8px",fontSize:"12px"},children:[n.jsx("strong",{children:"Selected rows:"})," ",A?"All employees":`${h.length} employees`]}),n.jsxs("div",{style:{fontSize:"12px"},children:[n.jsx("strong",{children:"Current sort:"})," ",u!=null&&u[0]?`${u[0].property} (${u[0].direction})`:"None"]})]}),n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(O,{...e,selectedRows:h,orderBy:u,onRowClick:D,onColumnHeaderClick:F,onRowSelectionChanged:_,onOrderByChanged:W,onColumnVisibilityChanged:L,onColumnsPinnedChanged:$,onColumnResize:G})})]})},play:async({canvasElement:e,args:l})=>{const a=f(e),C=Y(a);await a.findByText(w),await m.click(a.getByText(w)),await c(()=>d(l.onRowClick).toHaveBeenCalled()),await d(l.onFocusedRowChanged).toHaveBeenCalled();const v=await B(a,"fullName");await m.click(f(v).getByText("Name")),await c(()=>d(l.onColumnHeaderClick).toHaveBeenCalledWith("fullName")),await m.click((await C())[0]),await c(()=>d(l.onRowSelectionChanged).toHaveBeenCalled()),await k(a,"fullName"),await R("Sort descending"),await c(()=>d(l.onOrderByChanged).toHaveBeenCalled()),await k(a,"fullName"),await R("Pin column"),await c(()=>d(l.onColumnsPinnedChanged).toHaveBeenCalled()),await q(await B(a,"fullName"),100),await c(()=>d(l.onColumnResize).toHaveBeenCalled()),await k(a,"fullName"),await R("Configure Columns");const h=await b.findAllByRole("button",{name:/^Remove /u});await m.click(h[0]),await m.click(await b.findByRole("button",{name:"Apply"})),await c(()=>d(l.onColumnVisibilityChanged).toHaveBeenCalled()),await m.click(await U(a)),await c(async()=>{for(const x of await C())d(x).not.toBeChecked()})}};var S,T,E;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    renderCellContextMenu: (_: any, cellValue: unknown) => {
      return <div style={{
        background: "white",
        padding: 8,
        border: "1px solid #d1d5db",
        boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.1)",
        fontSize: 13,
        borderRadius: 4
      }}>
          <div style={{
          fontWeight: "bold",
          marginBottom: 4
        }}>Cell Value:</div>
          <div>{cellValue ? String(cellValue) : "No Value"}</div>
        </div>;
    }
  },
  parameters: {
    docs: {
      source: {
        code: \`<ObjectTable
  objectType={Employee}
  renderCellContextMenu={(_, cellValue) => (
    <div
      style={{
        background: "white",
        padding: 8,
        border: "1px solid #d1d5db",
        boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.1)",
        fontSize: 13,
        borderRadius: 4,
      }}
    >
      <div style={{ fontWeight: "bold", marginBottom: 4 }}>Cell Value:</div>
      <div>{cellValue ? String(cellValue) : "No Value"}</div>
    </div>
  )}
/>\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <div style={{
      padding: "12px"
    }}>Right click on any cell</div>
      <ObjectTable {...args} />
    </div>,
  // Right-clicking a cell opens the custom context menu (portalled to body),
  // and clicking elsewhere dismisses it.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(TARGET_DATA);

    // Right-click a cell to open the custom context menu.
    void fireEvent.contextMenu(canvas.getByText(TARGET_DATA));
    await expect(await screen.findByText("Cell Value:")).toBeInTheDocument();

    // Clicking outside the menu closes it.
    await userEvent.click(canvas.getByText("Right click on any cell"));
    await waitFor(() => expect(screen.queryByText("Cell Value:")).not.toBeInTheDocument());
  }
}`,...(E=(T=g.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var j,H,N;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    selectionMode: "multiple" as const,
    selectedRows: [],
    orderBy: [{
      property: "fullName",
      direction: "asc"
    }] as any,
    onRowClick: fn(),
    onColumnHeaderClick: fn(),
    onRowSelectionChanged: fn(),
    onOrderByChanged: fn(),
    onColumnVisibilityChanged: fn(),
    onColumnsPinnedChanged: fn(),
    onColumnResize: fn(),
    onFocusedRowChanged: fn()
  } as EmployeeTableProps,
  parameters: {
    docs: {
      source: {
        code: \`<ObjectTable
  objectType={Employee}
  columnDefinitions={defaultEmployeeColumns}
  selectionMode="multiple"
  onRowClick={(employee) => {
    console.log("Row clicked:", employee);
  }}
  onFocusedRowChanged={(employee) => {
    console.log("Row focused:", employee);
  }}
  onColumnHeaderClick={(columnId) => {
    console.log("Column header clicked:", columnId);
  }}
  onRowSelectionChanged={(change) => {
    console.log("Selection changed:", change.selectedRows, change.isSelectAll);
    console.log("Derived objectSet:", change.objectSet);
  }}
  onOrderByChanged={(orderBy) => {
    console.log("Sort changed:", orderBy);
  }}
  onColumnVisibilityChanged={(visibilityState) => {
    console.log("Column visibility changed:", visibilityState);
  }}
  onColumnsPinnedChanged={(pinnedState) => {
    console.log("Pinned columns changed:", pinnedState);
  }}
  onColumnResize={(columnId, newWidth) => {
    console.log("Column resized:", columnId, newWidth);
  }}
/>\`
      }
    }
  },
  render: args => {
    const [clickedRow, setClickedRow] = useState<any>(null);
    const [clickedColumn, setClickedColumn] = useState<string | null>(null);
    const [selectedRows, setSelectedRows] = useState<any[]>([]);
    const [isSelectAll, setIsSelectAll] = useState<boolean>(false);
    const [orderBy, setOrderBy] = useState<any>([{
      property: "fullName",
      direction: "asc"
    }]);
    const [lastEvent, setLastEvent] = useState<string>("");
    const handleRowClick = useCallback((employee: any) => {
      args.onRowClick?.(employee);
      setClickedRow(employee);
      setLastEvent("onRowClick");
    }, [args]);
    const handleColumnHeaderClick = useCallback((columnId: string) => {
      args.onColumnHeaderClick?.(columnId);
      setClickedColumn(columnId);
      setLastEvent("onColumnHeaderClick");
    }, [args]);
    const handleRowSelectionChanged = useCallback((change: any) => {
      args.onRowSelectionChanged?.(change);
      setSelectedRows(change.selectedRows.map((r: any) => r.$primaryKey));
      setIsSelectAll(change.isSelectAll);
      setLastEvent("onRowSelectionChanged");
    }, [args]);
    const handleOrderByChanged = useCallback((newOrderBy: any) => {
      args.onOrderByChanged?.(newOrderBy);
      setOrderBy(newOrderBy);
      setLastEvent("onOrderByChanged");
    }, [args]);
    const handleColumnVisibilityChanged = useCallback((visibilityState: any) => {
      args.onColumnVisibilityChanged?.(visibilityState);
      setLastEvent("onColumnVisibilityChanged");
    }, [args]);
    const handleColumnsPinnedChanged = useCallback((pinnedState: any) => {
      args.onColumnsPinnedChanged?.(pinnedState);
      setLastEvent("onColumnsPinnedChanged");
    }, [args]);
    const handleColumnResize = useCallback((columnId: string, newWidth: number | null) => {
      args.onColumnResize?.(columnId, newWidth);
      setLastEvent(\`onColumnResize (\${columnId})\`);
    }, [args]);
    return <div>
        <div style={{
        marginBottom: "16px",
        padding: "12px",
        backgroundColor: "#f0f9ff",
        borderRadius: "4px",
        border: "1px solid #bfdbfe"
      }}>
          <div style={{
          marginBottom: "8px",
          fontWeight: "bold"
        }}>
            Event Monitor:
          </div>
          <div style={{
          marginBottom: "8px",
          fontSize: "12px"
        }}>
            <strong>Last event:</strong> {lastEvent || "None"}
          </div>
          <div style={{
          marginBottom: "8px",
          fontSize: "12px"
        }}>
            <strong>Row clicked:</strong>{" "}
            {clickedRow ? <code>{clickedRow.fullName}</code> : "None"}
          </div>
          <div style={{
          marginBottom: "8px",
          fontSize: "12px"
        }}>
            <strong>Column clicked:</strong>{" "}
            {clickedColumn ? <code>{clickedColumn}</code> : "None"}
          </div>
          <div style={{
          marginBottom: "8px",
          fontSize: "12px"
        }}>
            <strong>Selected rows:</strong>{" "}
            {isSelectAll ? "All employees" : \`\${selectedRows.length} employees\`}
          </div>
          <div style={{
          fontSize: "12px"
        }}>
            <strong>Current sort:</strong>{" "}
            {orderBy?.[0] ? \`\${orderBy[0].property} (\${orderBy[0].direction})\` : "None"}
          </div>
        </div>
        <div className="object-table-container" style={{
        height: "600px"
      }}>
          <ObjectTable {...args} selectedRows={selectedRows} orderBy={orderBy} onRowClick={handleRowClick} onColumnHeaderClick={handleColumnHeaderClick} onRowSelectionChanged={handleRowSelectionChanged} onOrderByChanged={handleOrderByChanged} onColumnVisibilityChanged={handleColumnVisibilityChanged} onColumnsPinnedChanged={handleColumnsPinnedChanged} onColumnResize={handleColumnResize} />
        </div>
      </div>;
  },
  // Exercises every event listener exposed by ObjectTable and asserts each spy fires
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const rowCheckboxes = findRowCheckboxes(canvas);
    await canvas.findByText(TARGET_DATA);

    // onRowClick + onFocusedRowChanged: clicking a row body fires both.
    await userEvent.click(canvas.getByText(TARGET_DATA));
    await waitFor(() => expect(args.onRowClick).toHaveBeenCalled());
    await expect(args.onFocusedRowChanged).toHaveBeenCalled();

    // onColumnHeaderClick: clicking the header label (not the menu chevron).
    const fullNameHeader = await getColumnHeader(canvas, "fullName");
    await userEvent.click(within(fullNameHeader).getByText("Name"));
    await waitFor(() => expect(args.onColumnHeaderClick).toHaveBeenCalledWith("fullName"));

    // onRowSelectionChanged: toggling a row checkbox (selectionMode "multiple").
    await userEvent.click((await rowCheckboxes())[0]);
    await waitFor(() => expect(args.onRowSelectionChanged).toHaveBeenCalled());

    // onOrderByChanged: sorting through the header menu.
    await openHeaderMenu(canvas, "fullName");
    await clickHeaderMenuItem("Sort descending");
    await waitFor(() => expect(args.onOrderByChanged).toHaveBeenCalled());

    // onColumnsPinnedChanged: pinning through the header menu.
    await openHeaderMenu(canvas, "fullName");
    await clickHeaderMenuItem("Pin column");
    await waitFor(() => expect(args.onColumnsPinnedChanged).toHaveBeenCalled());

    // onColumnResize: dragging the resize handle (re-resolve the header, since
    // the earlier sort/pin re-renders may have replaced the node).
    await dragResizeHandle(await getColumnHeader(canvas, "fullName"), 100);
    await waitFor(() => expect(args.onColumnResize).toHaveBeenCalled());

    // onColumnVisibilityChanged: removing a column via the config dialog.
    await openHeaderMenu(canvas, "fullName");
    await clickHeaderMenuItem("Configure Columns");
    const removeButtons = await screen.findAllByRole("button", {
      name: /^Remove /u
    });
    await userEvent.click(removeButtons[0]);
    await userEvent.click(await screen.findByRole("button", {
      name: "Apply"
    }));
    await waitFor(() => expect(args.onColumnVisibilityChanged).toHaveBeenCalled());

    // Reset the row selection so the story does not end with a checked row.
    await userEvent.click(await findDeselectAllCheckbox(canvas));
    await waitFor(async () => {
      for (const checkbox of await rowCheckboxes()) {
        expect(checkbox).not.toBeChecked();
      }
    });
  }
}`,...(N=(H=y.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};const qe=["WithContextMenu","EventListeners"];export{y as EventListeners,g as WithContextMenu,qe as __namedExportsOrder,Ke as default};
