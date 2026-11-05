import{r as u,j as a}from"./iframe-22sgaWxv.js";import{O}from"./object-table-Drof33nU.js";import{E as b}from"./Employee-BAk2o20h.js";import{d as N,o as j,b as v,a as l,e as m,s as p}from"./objectTableStoryHelpers-7jIZje6N.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BCezGTuh.js";import"./index-BHBAGN-s.js";import"./Dialog-DLhbH3bQ.js";import"./cross-BCwFnrJl.js";import"./svgIconContainer-BsVzcm6E.js";import"./useBaseUiId-CUViOtvX.js";import"./InternalBackdrop-QEZTLwT8.js";import"./composite-BTcqQx01.js";import"./index-C-ayeZqv.js";import"./index-H6bUqLk6.js";import"./index-BCMcuhrC.js";import"./useEventCallback-C-98vcNs.js";import"./SkeletonBar-DOTAFrq-.js";import"./LoadingCell-DoU3qEW4.js";import"./ColumnConfigDialog-B3QGycQ2.js";import"./DraggableList-Vthwf9hx.js";import"./search-D5hLmpm3.js";import"./Input-kE2itjKl.js";import"./useControlled-9hZ525gD.js";import"./Button-Tlz3cekG.js";import"./small-cross-BwMnv4hk.js";import"./ActionButton-Boe4PNYh.js";import"./Checkbox-BEcD_rA7.js";import"./useValueChanged-Cvkbwiqt.js";import"./CollapsiblePanel-CUWh3so1.js";import"./MultiColumnSortDialog-D_SHrlea.js";import"./MenuTrigger-cTtpbi20.js";import"./CompositeItem-C3Np8qjM.js";import"./ToolbarRootContext-D1WVL4z4.js";import"./getDisabledMountTransitionStyles-p4mAODiY.js";import"./getPseudoElementBounds-BLk4lSoh.js";import"./chevron-down-BNxx7PXr.js";import"./index-DzYoB3O-.js";import"./error-DkFYgz--.js";import"./BaseCbacBanner-DPu0oi4D.js";import"./makeExternalStore-D5ROsNAp.js";import"./Tooltip-CX0Gi3dR.js";import"./isObject-DGvkKeJp.js";import"./debounce-ASo6GI3m.js";import"./useOsdkClient-B3I5yVwR.js";import"./tick-DS5XO6DI.js";import"./DropdownField-B0HjgQSf.js";import"./isEqual-0dAV4SyG.js";import"./_baseIsEqual-Da6PSZBn.js";import"./withOsdkMetrics-BykLiONE.js";const{expect:r,fn:C,waitFor:o,within:T}=__STORYBOOK_MODULE_TEST__,Te={...j,title:"Components/ObjectTable/Features/Sorting"},c={args:{objectType:b,columnDefinitions:N,defaultOrderBy:[{property:"fullName",direction:"desc"}]},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  defaultOrderBy={[{
    property: "fullName",
    direction: "desc",
  }]}
/>`}}},render:e=>a.jsx("div",{className:"object-table-container",style:{height:"600px"},children:a.jsx(O,{...e})}),play:async({canvasElement:e})=>{const n=T(e);await v(n,"fullName"),await o(()=>r(p(n,"fullName")).toBe("desc")),await l(n,"fullName"),await m("Sort ascending"),await o(()=>r(p(n,"fullName")).toBe("asc")),await l(n,"fullName"),await m("Sort descending"),await o(()=>r(p(n,"fullName")).toBe("desc"))}},d={args:{objectType:b,columnDefinitions:N,orderBy:[{property:"fullName",direction:"asc"}],onOrderByChanged:C()},parameters:{docs:{source:{code:`const [orderBy, setOrderBy] = useState<any>([
  { property: "fullName", direction: "asc" },
]);

return (
  <ObjectTable
    objectType={Employee}
    orderBy={orderBy}
    onOrderByChanged={setOrderBy}
  />
);`}}},render:e=>{const[n,t]=u.useState(e.orderBy??[{property:"fullName",direction:"asc"}]),x=u.useCallback(i=>{var s;(s=e.onOrderByChanged)==null||s.call(e,i),t(i)},[e]);return a.jsxs("div",{children:[a.jsxs("div",{style:{marginBottom:"16px"},children:[a.jsx("strong",{children:"Current Sort:"})," ",n.map((i,s)=>a.jsxs("span",{children:[i.property," (",i.direction,")",s<n.length-1&&", "]},s))]}),a.jsx("div",{className:"object-table-container",style:{height:"600px"},children:a.jsx(O,{...e,orderBy:n,onOrderByChanged:x})})]})},play:async({canvasElement:e,args:n})=>{const t=T(e);await v(t,"fullName"),await r(t.getByText("fullName (asc)")).toBeInTheDocument(),await l(t,"fullName"),await m("Sort descending"),await o(()=>r(n.onOrderByChanged).toHaveBeenCalled()),await o(()=>r(t.getByText("fullName (desc)")).toBeInTheDocument()),await l(t,"fullName"),await m("Sort ascending"),await o(()=>r(t.getByText("fullName (asc)")).toBeInTheDocument())}};var y,g,B;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    defaultOrderBy: [{
      property: "fullName",
      direction: "desc"
    }]
  },
  parameters: {
    docs: {
      source: {
        code: \`<ObjectTable
  objectType={Employee}
  defaultOrderBy={[{
    property: "fullName",
    direction: "desc",
  }]}
/>\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // \`defaultOrderBy\` seeds a descending sort on fullName. The header menu can
  // flip it to ascending and back to the default descending state.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await getColumnHeader(canvas, "fullName");
    await waitFor(() => expect(sortDirectionOf(canvas, "fullName")).toBe("desc"));

    // Switch to ascending.
    await openHeaderMenu(canvas, "fullName");
    await clickHeaderMenuItem("Sort ascending");
    await waitFor(() => expect(sortDirectionOf(canvas, "fullName")).toBe("asc"));

    // Sorting descending again returns to the default sort state.
    await openHeaderMenu(canvas, "fullName");
    await clickHeaderMenuItem("Sort descending");
    await waitFor(() => expect(sortDirectionOf(canvas, "fullName")).toBe("desc"));
  }
}`,...(B=(g=c.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};var f,h,w;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    orderBy: [{
      property: "fullName",
      direction: "asc"
    }] as any,
    onOrderByChanged: fn()
  } as EmployeeTableProps,
  parameters: {
    docs: {
      source: {
        code: \`const [orderBy, setOrderBy] = useState<any>([
  { property: "fullName", direction: "asc" },
]);

return (
  <ObjectTable
    objectType={Employee}
    orderBy={orderBy}
    onOrderByChanged={setOrderBy}
  />
);\`
      }
    }
  },
  render: args => {
    const [orderBy, setOrderBy] = useState<any>(args.orderBy ?? [{
      property: "fullName",
      direction: "asc"
    }]);
    const handleOrderByChanged = useCallback((newOrderBy: any) => {
      args.onOrderByChanged?.(newOrderBy);
      setOrderBy(newOrderBy);
    }, [args]);
    return <div>
        <div style={{
        marginBottom: "16px"
      }}>
          <strong>Current Sort:</strong>{" "}
          {orderBy.map((o: any, i: number) => <span key={i}>
              {o.property} ({o.direction}){i < orderBy.length - 1 && ", "}
            </span>)}
        </div>
        <div className="object-table-container" style={{
        height: "600px"
      }}>
          <ObjectTable {...args} orderBy={orderBy} onOrderByChanged={handleOrderByChanged} />
        </div>
      </div>;
  },
  // Sorting is controlled: the header menu drives \`onOrderByChanged\`, and the
  // caller's banner reflects the new order.
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // Seeded controlled state shows fullName ascending.
    await getColumnHeader(canvas, "fullName");
    await expect(canvas.getByText("fullName (asc)")).toBeInTheDocument();

    // Sort descending through the header menu.
    await openHeaderMenu(canvas, "fullName");
    await clickHeaderMenuItem("Sort descending");
    await waitFor(() => expect(args.onOrderByChanged).toHaveBeenCalled());
    await waitFor(() => expect(canvas.getByText("fullName (desc)")).toBeInTheDocument());

    // Restore the seeded ascending sort so the story ends as it started.
    await openHeaderMenu(canvas, "fullName");
    await clickHeaderMenuItem("Sort ascending");
    await waitFor(() => expect(canvas.getByText("fullName (asc)")).toBeInTheDocument());
  }
}`,...(w=(h=d.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const xe=["WithDefaultSorting","ControlledSorting"];export{d as ControlledSorting,c as WithDefaultSorting,xe as __namedExportsOrder,Te as default};
