import{r as a,j as n}from"./iframe-8W7VgjHd.js";import{O as z}from"./object-table-DdJ9zRzS.js";import{E as L}from"./Employee-BAk2o20h.js";import{d as N,o as Q,T as w,b as S,a as k,e as f,h as X,i as Z,j as ee}from"./objectTableStoryHelpers-D-g8AyTn.js";import"./preload-helper-DO6s7Vfv.js";import"./Table-C4qtfNE5.js";import"./index-BtBCXImO.js";import"./Dialog-Ch3t_b5I.js";import"./cross-6cERZ-YR.js";import"./svgIconContainer-BTT_9wFe.js";import"./useBaseUiId-CAeqz6cK.js";import"./InternalBackdrop-DfwF-S7u.js";import"./composite-C4cfnDPy.js";import"./index-BOk8n-3F.js";import"./index-DLLXsNTc.js";import"./index-BdDerrdJ.js";import"./useEventCallback-CcBUD0dP.js";import"./SkeletonBar-CNX-DDH1.js";import"./LoadingCell-Csb6dv_d.js";import"./ColumnConfigDialog-v2o9UO3m.js";import"./DraggableList-CM6_ZUT5.js";import"./search-Xd_WCU0c.js";import"./Input-C92p9Vvp.js";import"./useControlled-DJ7vg7ze.js";import"./Button-DqbeFPJh.js";import"./small-cross-SY3kxLTP.js";import"./ActionButton-cxV3QJBQ.js";import"./Checkbox-CnPS01sL.js";import"./useValueChanged-8dBDW2sE.js";import"./CollapsiblePanel-BAo3DGGi.js";import"./MultiColumnSortDialog-Cl_x44Fb.js";import"./MenuTrigger-DXvqC90a.js";import"./CompositeItem-DdqixRyh.js";import"./ToolbarRootContext-BF4G0Oc0.js";import"./getDisabledMountTransitionStyles-DVCYeryT.js";import"./getPseudoElementBounds-dA7mVN4o.js";import"./chevron-down-Bz7OwIBQ.js";import"./index-DmJmV5u2.js";import"./error-BHd5K9Qe.js";import"./BaseCbacBanner-CzNk8lN_.js";import"./makeExternalStore-DqBKfbO3.js";import"./Tooltip-Cg8D7mEU.js";import"./PopoverPopup-BFrPiLZn.js";import"./debounce-r4t9Jw_5.js";import"./useOsdkClient-BAJ4OvKx.js";import"./tick-CUYsCAuC.js";import"./DropdownField-DDsIis61.js";import"./useDebouncedCallback-BgfmWq5o.js";import"./withOsdkMetrics-pAxDRnd3.js";const{expect:i,fireEvent:ne,fn:s,screen:b,userEvent:m,waitFor:c,within:R}=__STORYBOOK_MODULE_TEST__,Qe={...Q,title:"Components/ObjectTable/Features/Interactions & events"},p={args:{objectType:L,columnDefinitions:N,renderCellContextMenu:(e,l)=>n.jsxs("div",{style:{background:"white",padding:8,border:"1px solid #d1d5db",boxShadow:"0 2px 8px 0 rgba(0, 0, 0, 0.1)",fontSize:13,borderRadius:4},children:[n.jsx("div",{style:{fontWeight:"bold",marginBottom:4},children:"Cell Value:"}),n.jsx("div",{children:l?String(l):"No Value"})]})},parameters:{docs:{source:{code:`<ObjectTable
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
/>`}}},render:e=>n.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[n.jsx("div",{style:{padding:"12px"},children:"Right click on any cell"}),n.jsx(z,{...e})]}),play:async({canvasElement:e})=>{const l=R(e);await l.findByText(w),ne.contextMenu(l.getByText(w)),await i(await b.findByText("Cell Value:")).toBeInTheDocument(),await m.click(l.getByText("Right click on any cell")),await c(()=>i(b.queryByText("Cell Value:")).not.toBeInTheDocument())}},y={args:{objectType:L,columnDefinitions:N,selectionMode:"multiple",selectedRows:[],orderBy:[{property:"fullName",direction:"asc"}],onRowClick:s(),onColumnHeaderClick:s(),onRowSelectionChanged:s(),onOrderByChanged:s(),onColumnVisibilityChanged:s(),onColumnsPinnedChanged:s(),onColumnResize:s(),onFocusedRowChanged:s(),onLoadedObjectsChanged:s()},parameters:{docs:{source:{code:`<ObjectTable
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
  onLoadedObjectsChanged={({ loadedObjects, totalCount }) => {
    console.log(\`Loaded \${loadedObjects.length} of \${totalCount} employees\`);
  }}
/>`}}},render:e=>{const[l,d]=a.useState(null),[C,v]=a.useState(null),[h,x]=a.useState([]),[V,A]=a.useState(!1),[u,M]=a.useState([{property:"fullName",direction:"asc"}]),[I,r]=a.useState(""),[P,D]=a.useState(0),[F,W]=a.useState(void 0),_=a.useCallback(o=>{var t;(t=e.onRowClick)==null||t.call(e,o),d(o),r("onRowClick")},[e]),$=a.useCallback(o=>{var t;(t=e.onColumnHeaderClick)==null||t.call(e,o),v(o),r("onColumnHeaderClick")},[e]),G=a.useCallback(o=>{var t;(t=e.onRowSelectionChanged)==null||t.call(e,o),x(o.selectedRows.map(g=>g.$primaryKey)),A(o.isSelectAll),r("onRowSelectionChanged")},[e]),K=a.useCallback(o=>{var t;(t=e.onOrderByChanged)==null||t.call(e,o),M(o),r("onOrderByChanged")},[e]),q=a.useCallback(o=>{var t;(t=e.onColumnVisibilityChanged)==null||t.call(e,o),r("onColumnVisibilityChanged")},[e]),U=a.useCallback(o=>{var t;(t=e.onColumnsPinnedChanged)==null||t.call(e,o),r("onColumnsPinnedChanged")},[e]),Y=a.useCallback((o,t)=>{var g;(g=e.onColumnResize)==null||g.call(e,o,t),r(`onColumnResize (${o})`)},[e]),J=a.useCallback(o=>{var t;(t=e.onLoadedObjectsChanged)==null||t.call(e,o),D(o.loadedObjects.length),W(o.totalCount),r("onLoadedObjectsChanged")},[e]);return n.jsxs("div",{children:[n.jsxs("div",{style:{marginBottom:"16px",padding:"12px",backgroundColor:"#f0f9ff",borderRadius:"4px",border:"1px solid #bfdbfe"},children:[n.jsx("div",{style:{marginBottom:"8px",fontWeight:"bold"},children:"Event Monitor:"}),n.jsxs("div",{style:{marginBottom:"8px",fontSize:"12px"},children:[n.jsx("strong",{children:"Last event:"})," ",I||"None"]}),n.jsxs("div",{style:{marginBottom:"8px",fontSize:"12px"},children:[n.jsx("strong",{children:"Row clicked:"})," ",l?n.jsx("code",{children:l.fullName}):"None"]}),n.jsxs("div",{style:{marginBottom:"8px",fontSize:"12px"},children:[n.jsx("strong",{children:"Column clicked:"})," ",C?n.jsx("code",{children:C}):"None"]}),n.jsxs("div",{style:{marginBottom:"8px",fontSize:"12px"},children:[n.jsx("strong",{children:"Selected rows:"})," ",V?"All employees":`${h.length} employees`]}),n.jsxs("div",{style:{marginBottom:"8px",fontSize:"12px"},children:[n.jsx("strong",{children:"Current sort:"})," ",u!=null&&u[0]?`${u[0].property} (${u[0].direction})`:"None"]}),n.jsxs("div",{style:{fontSize:"12px"},children:[n.jsx("strong",{children:"Loaded objects:"})," ",n.jsxs("code",{children:[P," of ",F??"unknown"]})]})]}),n.jsx("div",{className:"object-table-container",style:{height:"300px"},children:n.jsx(z,{...e,selectedRows:h,orderBy:u,pageSize:10,onRowClick:_,onColumnHeaderClick:$,onRowSelectionChanged:G,onOrderByChanged:K,onColumnVisibilityChanged:q,onColumnsPinnedChanged:U,onColumnResize:Y,onLoadedObjectsChanged:J})})]})},play:async({canvasElement:e,args:l})=>{const d=R(e),C=ee(d);await d.findByText(w),await c(()=>i(l.onLoadedObjectsChanged).toHaveBeenCalledWith(i.objectContaining({loadedObjects:i.arrayContaining([i.anything()])}))),await m.click(d.getByText(w)),await c(()=>i(l.onRowClick).toHaveBeenCalled()),await i(l.onFocusedRowChanged).toHaveBeenCalled();const v=await S(d,"fullName");await m.click(R(v).getByText("Name")),await c(()=>i(l.onColumnHeaderClick).toHaveBeenCalledWith("fullName")),await m.click((await C())[0]),await c(()=>i(l.onRowSelectionChanged).toHaveBeenCalled()),await k(d,"fullName"),await f("Sort descending"),await c(()=>i(l.onOrderByChanged).toHaveBeenCalled()),await k(d,"fullName"),await f("Pin column"),await c(()=>i(l.onColumnsPinnedChanged).toHaveBeenCalled()),await X(await S(d,"fullName"),100),await c(()=>i(l.onColumnResize).toHaveBeenCalled()),await k(d,"fullName"),await f("Configure Columns");const h=await b.findAllByRole("button",{name:/^Remove /u});await m.click(h[0]),await m.click(await b.findByRole("button",{name:"Apply"})),await c(()=>i(l.onColumnVisibilityChanged).toHaveBeenCalled()),await m.click(await Z(d)),await c(async()=>{for(const x of await C())i(x).not.toBeChecked()})}};var B,j,O;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(O=(j=p.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var T,E,H;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
    onFocusedRowChanged: fn(),
    onLoadedObjectsChanged: fn()
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
  onLoadedObjectsChanged={({ loadedObjects, totalCount }) => {
    console.log(\\\`Loaded \\\${loadedObjects.length} of \\\${totalCount} employees\\\`);
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
    const [loadedCount, setLoadedCount] = useState<number>(0);
    const [totalCount, setTotalCount] = useState<string | undefined>(undefined);
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
    const handleLoadedObjectsChanged = useCallback((change: LoadedObjectsChange<typeof Employee>) => {
      args.onLoadedObjectsChanged?.(change);
      setLoadedCount(change.loadedObjects.length);
      setTotalCount(change.totalCount);
      setLastEvent("onLoadedObjectsChanged");
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
          marginBottom: "8px",
          fontSize: "12px"
        }}>
            <strong>Current sort:</strong>{" "}
            {orderBy?.[0] ? \`\${orderBy[0].property} (\${orderBy[0].direction})\` : "None"}
          </div>
          <div style={{
          fontSize: "12px"
        }}>
            <strong>Loaded objects:</strong>{" "}
            <code>
              {loadedCount} of {totalCount ?? "unknown"}
            </code>
          </div>
        </div>
        <div className="object-table-container" style={{
        height: "300px"
      }}>
          <ObjectTable {...args} selectedRows={selectedRows} orderBy={orderBy} pageSize={10} onRowClick={handleRowClick} onColumnHeaderClick={handleColumnHeaderClick} onRowSelectionChanged={handleRowSelectionChanged} onOrderByChanged={handleOrderByChanged} onColumnVisibilityChanged={handleColumnVisibilityChanged} onColumnsPinnedChanged={handleColumnsPinnedChanged} onColumnResize={handleColumnResize} onLoadedObjectsChanged={handleLoadedObjectsChanged} />
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

    // onLoadedObjectsChanged: fires from the initial load, no interaction needed.
    await waitFor(() => expect(args.onLoadedObjectsChanged).toHaveBeenCalledWith(expect.objectContaining({
      loadedObjects: expect.arrayContaining([expect.anything()])
    })));

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
}`,...(H=(E=y.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const Xe=["WithContextMenu","EventListeners"];export{y as EventListeners,p as WithContextMenu,Xe as __namedExportsOrder,Qe as default};
