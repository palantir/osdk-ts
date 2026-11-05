import{r as u,j as a}from"./iframe-CAg-JriM.js";import{O}from"./object-table-C-ApABTH.js";import{E as b}from"./Employee-BAk2o20h.js";import{d as N,o as j,b as v,a as l,e as m,s as p}from"./objectTableStoryHelpers-BM9SRYSz.js";import"./preload-helper-BUvKDxEU.js";import"./Table-i_e6H7xl.js";import"./index-c30BwpEp.js";import"./Dialog-BdVph2yq.js";import"./cross-f26_pld4.js";import"./svgIconContainer-DADUTguq.js";import"./useBaseUiId-BRS8U626.js";import"./InternalBackdrop-dVZjC2Aj.js";import"./composite-CQrdmEmC.js";import"./index-ZJoCPfq8.js";import"./index-BKL1ls47.js";import"./index-oQ8-uGIT.js";import"./useEventCallback-BWy4tScF.js";import"./SkeletonBar-BxCdHceQ.js";import"./LoadingCell-C-LbupCq.js";import"./ColumnConfigDialog-BkpF_5fM.js";import"./DraggableList-DPp-whoe.js";import"./search-iyFeBtu2.js";import"./Input-DRHJ-rvA.js";import"./useControlled-Ceb76xwT.js";import"./Button-Cl3foSbn.js";import"./small-cross-BOoOGXKD.js";import"./ActionButton-Bzha9uO_.js";import"./Checkbox-V5AP2cHu.js";import"./useValueChanged-3kHQoBsE.js";import"./CollapsiblePanel-COo9-GCD.js";import"./MultiColumnSortDialog-CHNEVY8-.js";import"./MenuTrigger-Bu5HVYuz.js";import"./CompositeItem-D7GSS8Td.js";import"./ToolbarRootContext-CdDSSu6d.js";import"./getDisabledMountTransitionStyles-CZGWVUEY.js";import"./getPseudoElementBounds-D5B51_gi.js";import"./chevron-down-CsfLCkc3.js";import"./index-B-69obD4.js";import"./error-1JJ1PBi7.js";import"./BaseCbacBanner-MWnGpk0a.js";import"./makeExternalStore-sIngp_if.js";import"./Tooltip-BaUV5B5y.js";import"./isObject-Cga3o-qK.js";import"./debounce-8AUJtK1E.js";import"./useOsdkClient-DA4RLwcd.js";import"./tick-BF0KiDZu.js";import"./DropdownField-azDKl2Hy.js";import"./isEqual-DEFCBL8A.js";import"./_baseIsEqual-vKOwFDyn.js";import"./withOsdkMetrics-CHGqLnXT.js";const{expect:r,fn:C,waitFor:o,within:T}=__STORYBOOK_MODULE_TEST__,Te={...j,title:"Components/ObjectTable/Features/Sorting"},c={args:{objectType:b,columnDefinitions:N,defaultOrderBy:[{property:"fullName",direction:"desc"}]},parameters:{docs:{source:{code:`<ObjectTable
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
