import{r as u,j as a}from"./iframe-Chm34oVN.js";import{O}from"./object-table-DLH-IlCC.js";import{E as b}from"./Employee-BAk2o20h.js";import{d as N,o as j,b as v,a as l,e as m,s as p}from"./objectTableStoryHelpers-CTaTgjp6.js";import"./preload-helper-BOK6Dzo-.js";import"./Table-Z_YlzvhM.js";import"./index-CypedJkd.js";import"./Dialog-B2wjSRNU.js";import"./cross-DoHdapX8.js";import"./svgIconContainer-DC37vkSl.js";import"./useBaseUiId-BfNds6QM.js";import"./InternalBackdrop-Cm6PR78x.js";import"./composite-7460sgXR.js";import"./index-COQyuwtf.js";import"./index-CUU4KiqC.js";import"./index-B57JJe68.js";import"./useEventCallback-CMTqZ7U-.js";import"./SkeletonBar-CU8fYuS7.js";import"./LoadingCell-BO3KKJp9.js";import"./ColumnConfigDialog-dEtYIgcd.js";import"./DraggableList-CzcIVFL1.js";import"./search-BHYw-t4y.js";import"./Input-DZjL7Pin.js";import"./useControlled-ZXPTCd_T.js";import"./Button-CtcVqQNq.js";import"./small-cross-ByxAk5Ey.js";import"./ActionButton-BnvQSX1L.js";import"./Checkbox-CwbP-fJg.js";import"./useValueChanged-UjzGqVwC.js";import"./CollapsiblePanel-DQDBFvxE.js";import"./MultiColumnSortDialog-DOycdkre.js";import"./MenuTrigger-CoVY6-8A.js";import"./CompositeItem-DnyMtLMv.js";import"./ToolbarRootContext-OjMSVEL3.js";import"./getDisabledMountTransitionStyles-CIU0Hz6V.js";import"./getPseudoElementBounds-CiNXNTFC.js";import"./chevron-down-zW3En9pY.js";import"./index-DxO1uITv.js";import"./error-B18D31eI.js";import"./BaseCbacBanner-CLHS5zkZ.js";import"./makeExternalStore-B83DbUt5.js";import"./Tooltip-DDNENBtX.js";import"./PopoverPopup-CItQzQdy.js";import"./debounce-CFIeXkJ1.js";import"./useOsdkClient-W7CUWIOG.js";import"./tick-Cfjw9luN.js";import"./DropdownField-DB-krMlw.js";import"./isEqual-hrbqThCV.js";import"./withOsdkMetrics-866m-zhW.js";const{expect:r,fn:C,waitFor:o,within:T}=__STORYBOOK_MODULE_TEST__,ve={...j,title:"Components/ObjectTable/Features/Sorting"},c={args:{objectType:b,columnDefinitions:N,defaultOrderBy:[{property:"fullName",direction:"desc"}]},parameters:{docs:{source:{code:`<ObjectTable
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
}`,...(w=(h=d.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const Te=["WithDefaultSorting","ControlledSorting"];export{d as ControlledSorting,c as WithDefaultSorting,Te as __namedExportsOrder,ve as default};
