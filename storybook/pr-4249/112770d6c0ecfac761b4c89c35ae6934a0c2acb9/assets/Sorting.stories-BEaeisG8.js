import{r as u,j as a}from"./iframe-DIhyjTQM.js";import{O}from"./object-table-Do9vu6qj.js";import{E as b}from"./Employee-BAk2o20h.js";import{d as N,o as j,b as v,a as l,e as m,s as p}from"./objectTableStoryHelpers-BJal3r8f.js";import"./preload-helper-BITLElC1.js";import"./Table-aMp3ITaO.js";import"./index-C8ppAklG.js";import"./Dialog-x7P9gPjA.js";import"./cross-BVmbGj7v.js";import"./svgIconContainer-BVwGEvqe.js";import"./useBaseUiId-BRDIOgH7.js";import"./InternalBackdrop-BbR3bGoB.js";import"./composite-BkQZGQ9U.js";import"./index-kla4dWAe.js";import"./index-SCNohOo6.js";import"./useEventCallback-DgKocnhe.js";import"./SkeletonBar-C2TvSpMI.js";import"./LoadingCell-D7P3o9XJ.js";import"./ColumnConfigDialog-Q9snLBuv.js";import"./DraggableList-Dob7Rq-X.js";import"./search-D7TMRqS5.js";import"./Input-BCY1gssj.js";import"./useControlled-vI7L-1v7.js";import"./Button-BU0w-MK8.js";import"./small-cross-DVOzGHDB.js";import"./ActionButton-CSRmV5rV.js";import"./Checkbox-eblkHSax.js";import"./useValueChanged-1EPjCJhD.js";import"./CollapsiblePanel-B7QE2-21.js";import"./MultiColumnSortDialog-DTofYe8C.js";import"./MenuTrigger-CyZDawNi.js";import"./CompositeItem-D7Gjn2M2.js";import"./ToolbarRootContext-DDTggrNs.js";import"./getDisabledMountTransitionStyles-DDkkAoal.js";import"./getPseudoElementBounds-CQrPr7lO.js";import"./chevron-down-fg_D-X7z.js";import"./index-GGFmpVOs.js";import"./error-BcXd4Yso.js";import"./BaseCbacBanner-O8eKc9DG.js";import"./makeExternalStore-DUGVOR6Q.js";import"./Tooltip-Ce_ARAEV.js";import"./PopoverPopup-C4G8tLd2.js";import"./debounce-xNmml4RO.js";import"./useOsdkClient-ChFpCrqs.js";import"./tick-xU5_Eoim.js";import"./DropdownField-CNUfmwbR.js";import"./isEqual-BnA4SERm.js";import"./withOsdkMetrics-DKqvGaZy.js";const{expect:r,fn:C,waitFor:o,within:T}=__STORYBOOK_MODULE_TEST__,Ne={...j,title:"Components/ObjectTable/Features/Sorting"},c={args:{objectType:b,columnDefinitions:N,defaultOrderBy:[{property:"fullName",direction:"desc"}]},parameters:{docs:{source:{code:`<ObjectTable
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
}`,...(w=(h=d.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const ve=["WithDefaultSorting","ControlledSorting"];export{d as ControlledSorting,c as WithDefaultSorting,ve as __namedExportsOrder,Ne as default};
