import{r as i,j as n}from"./iframe-9L4vMhG3.js";import{O}from"./object-table-DlLw0Dw8.js";import{E as V}from"./Employee-BAk2o20h.js";import{d as z,o as K,T as w,b as B,a as k,e as R,h as q,i as U,j as Y}from"./objectTableStoryHelpers-Dz0UI9rV.js";import"./preload-helper-BmqcIEn7.js";import"./Table-CiEgzwih.js";import"./index-_pdaMpiB.js";import"./Dialog-CEYM9xS_.js";import"./cross-BpNWdRWr.js";import"./svgIconContainer-D9lmXivJ.js";import"./useBaseUiId-D-sjda76.js";import"./InternalBackdrop-Cen5tzmJ.js";import"./composite-Bx4vMELY.js";import"./index-Dxea6VRI.js";import"./index-B9Ie_NWS.js";import"./index-DPjA9htS.js";import"./useEventCallback-CQVpKJiq.js";import"./SkeletonBar-DG_ilxDz.js";import"./LoadingCell-CTXKMQu7.js";import"./ColumnConfigDialog-EKNQe5rB.js";import"./DraggableList-DjUTDOw-.js";import"./search-Xcg7LzRX.js";import"./Input-Bux853dQ.js";import"./useControlled-CD9rYDgT.js";import"./isEqual-Dd0SMg4R.js";import"./isObject-bWt81XNR.js";import"./Button-drHfdObt.js";import"./ActionButton-UywGJSCF.js";import"./Checkbox-D94n2NGO.js";import"./useValueChanged-C7jgUmnL.js";import"./CollapsiblePanel-DYm1U3zT.js";import"./MultiColumnSortDialog-Tl8jPhNb.js";import"./MenuTrigger-CXgtBZpD.js";import"./CompositeItem-BfdUBqPa.js";import"./ToolbarRootContext-DnGH9Ipt.js";import"./getDisabledMountTransitionStyles-CPYcuQBc.js";import"./getPseudoElementBounds-cc7gm7GG.js";import"./chevron-down-B91fbDl5.js";import"./index-DAKTJ6F7.js";import"./error-XbW8w7e0.js";import"./BaseCbacBanner-DI9IEL2s.js";import"./makeExternalStore-DlzWWYhg.js";import"./Tooltip-CX_775Pp.js";import"./PopoverPopup-D4s4p01u.js";import"./toNumber-C7Jq7yzN.js";import"./useOsdkClient-B0jbpyHy.js";import"./tick-jg97K6ah.js";import"./DropdownField-3bMQt7y0.js";import"./withOsdkMetrics-CRdZIZCN.js";const{expect:d,fireEvent:J,fn:s,screen:b,userEvent:m,waitFor:c,within:f}=__STORYBOOK_MODULE_TEST__,Ke={...K,title:"Components/ObjectTable/Features/Interactions & events"},g={args:{objectType:V,columnDefinitions:z,renderCellContextMenu:(e,l)=>n.jsxs("div",{style:{background:"white",padding:8,border:"1px solid #d1d5db",boxShadow:"0 2px 8px 0 rgba(0, 0, 0, 0.1)",fontSize:13,borderRadius:4},children:[n.jsx("div",{style:{fontWeight:"bold",marginBottom:4},children:"Cell Value:"}),n.jsx("div",{children:l?String(l):"No Value"})]})},parameters:{docs:{source:{code:`<ObjectTable
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
