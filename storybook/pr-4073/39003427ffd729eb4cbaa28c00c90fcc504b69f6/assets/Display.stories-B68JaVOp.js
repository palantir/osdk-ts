import{j as n,N as G,I as U,o as $,p as N,r as q}from"./iframe-CNVlK6B5.js";import{O as l}from"./object-table-cMgtOXr7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as v,o as X,b as K,l as f,h as V,m as J,c as Q,T as s,r as w}from"./objectTableStoryHelpers-DMpUtWUU.js";import{u as Z}from"./useOsdkClient-DSUKa8VK.js";import{c as x}from"./index-BIcFjsCk.js";import{I as ee,H as te,e as ne,D as oe}from"./html-BBWVTnvS.js";import"./preload-helper-D6U9hvSn.js";import"./Table-BrEIPw8j.js";import"./Dialog-DQ8SwEYJ.js";import"./cross-Cd5yBkhc.js";import"./svgIconContainer-CkEgUKYH.js";import"./useBaseUiId-oIpQHClg.js";import"./InternalBackdrop-BLlX82gh.js";import"./composite-9AJkVSIl.js";import"./index-CRgut8Os.js";import"./index-CRWNiz7H.js";import"./index-bx27PV2G.js";import"./useEventCallback-BYr5JJCz.js";import"./SkeletonBar-C22W37Hx.js";import"./LoadingCell-BMwD9iUu.js";import"./ColumnConfigDialog-EM-7EP-h.js";import"./DraggableList-BlaJIbqd.js";import"./search-CqRM5I4x.js";import"./Input-BcMyy9hm.js";import"./useControlled-CIn-ajlC.js";import"./Button-BTD6ABzp.js";import"./small-cross-DbE0dAvf.js";import"./ActionButton-CeSKu1lp.js";import"./Checkbox-DfJtmB8Q.js";import"./useValueChanged-COVZ159z.js";import"./CollapsiblePanel-Di-Gvidl.js";import"./MultiColumnSortDialog-D5X3n1eV.js";import"./MenuTrigger-d-w37dUG.js";import"./CompositeItem-DhWvIZCc.js";import"./ToolbarRootContext-B65PxelA.js";import"./getDisabledMountTransitionStyles-BQG1c3sQ.js";import"./getPseudoElementBounds-DOWcaHQH.js";import"./chevron-down-D3H5NEc0.js";import"./index-_ZOs9p_u.js";import"./error-Cf_L3Bxv.js";import"./BaseCbacBanner-LGOURMWm.js";import"./makeExternalStore-AThIzlcn.js";import"./Tooltip-BydjewTb.js";import"./PopoverPopup-B9T3QljB.js";import"./debounce-LvB1QRts.js";import"./tick-hJyc2tqL.js";import"./DropdownField-JZsjxyDw.js";import"./isEqual-CT1fOhI5.js";import"./withOsdkMetrics-oHno8_nm.js";import"./iconLoader-BFGbkgQ_.js";var T;(function(e){e[e.STANDARD=48]="STANDARD",e[e.SMALL=32]="SMALL",e[e.EXTRA_SMALL=20]="EXTRA_SMALL"})(T||(T={}));const M=e=>{const{action:t,children:a,className:r,description:h,icon:j,iconMuted:P=!0,iconSize:g=T.STANDARD,layout:F="vertical",title:y}=e;return n.jsxs("div",{className:x(N,`${N}-${F}`,r),children:[j==null?void 0:n.jsx("div",{className:G,style:{fontSize:`${g}px`,lineHeight:`${g}px`},children:n.jsx(ee,{className:x({[U]:P}),icon:j,size:g,"aria-hidden":!0,tabIndex:-1})}),y==null&&h==null?void 0:n.jsxs("div",{className:$,children:[y&&n.jsx(te,{children:y}),h&&ne(h,"div")]}),t,a]})};M.displayName=`${oe}.NonIdealState`;const{expect:o,fn:ae,userEvent:re,waitFor:C,within:c}=__STORYBOOK_MODULE_TEST__,ot={...X,title:"Components/ObjectTable/Features/Display & states"},d={args:{objectType:i,columnDefinitions:Q.map((e,t)=>({...e,width:t===0?250:t===1?300:150})),onColumnResize:ae()},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" }, width: 250 },
  { locator: { type: "property", id: "department" }, width: 300 },
  { locator: { type: "property", id: "jobTitle" }, width: 150 },
];

<ObjectTable
  objectType={Employee}
  columnDefinitions={columnDefinitions}
/>`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(l,{...e})}),play:async({canvasElement:e,args:t})=>{const a=c(e),r=await K(a,"fullName");await o(f(r)).toBe(250),await V(r,120),await C(()=>o(f(r)).toBeGreaterThan(250)),await o(t.onColumnResize).toHaveBeenCalledWith("fullName",o.any(Number)),t.onColumnResize.mockClear(),await re.dblClick(J(r)),await C(()=>o(f(r)).toBe(250)),await o(t.onColumnResize).toHaveBeenCalledWith("fullName",null)}},m={args:{objectType:i,columnDefinitions:v,rowHeight:56},parameters:{docs:{source:{code:"<ObjectTable objectType={Employee} rowHeight={56} />"}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(l,{...e})}),play:async({canvasElement:e})=>{const t=c(e);await t.findByText(s),await o(w(t.getByText(s))).toHaveStyle({height:"56px"})}},p={args:{objectType:i,columnDefinitions:v,renderEmptyState:()=>n.jsx(M,{icon:"folder-close",title:"No saved views found."})},parameters:{docs:{description:{story:"Override the default empty state with a custom render function. Useful for matching product copy or visuals (here a Blueprint `NonIdealState`)."},source:{code:`
import { NonIdealState } from "@blueprintjs/core";

const emptyObjectSet = client(Employee).where({
  jobProfile: "Nonexistent Role",
});

return (
  <ObjectTable
    objectType={Employee}
    objectSet={emptyObjectSet}
    renderEmptyState={() => (
      <NonIdealState
        icon="folder-close"
        title="No saved views found."
      />
    )}
  />
);
`}}},render:e=>{const a=Z()(i).where({jobProfile:"Nonexistent Role"});return n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(l,{...e,objectSet:a})})},play:async({canvasElement:e})=>{const t=c(e);await o(await t.findByText("No saved views found.")).toBeInTheDocument(),await o(t.queryByText(s)).not.toBeInTheDocument()}},u={args:{objectType:i,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"jobTitle"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"locationCity"}}]},parameters:{docs:{description:{story:'Demonstrates using `getRowAttributes` to set data attributes on rows and a `className` on the table to scope CSS overrides via the data attribute selector. New York employees get a light blue background through the `[data-highlight-row="true"]` CSS selector scoped under the table\'s className.'},source:{code:`/* CSS (imported stylesheet):
.customTableStyling {
  tr[data-highlight-row="true"] {
    --osdk-table-row-bg-default: #f0f8ff;
    --osdk-table-row-bg-alternate: #e8f4ff;
    --osdk-table-row-bg-hover: #e0f0ff;
  }
}
*/

const getRowAttributes = useCallback((rowData) => ({
  "data-highlight-row": rowData.locationCity === "New York" ? "true" : undefined,
}), []);

return (
  <ObjectTable
    objectType={Employee}
    columnDefinitions={columnDefinitions}
    getRowAttributes={getRowAttributes}
    className="customTableStyling"
  />
);`}}},render:e=>{const t=q.useCallback(a=>({"data-highlight-row":a.locationCity==="New York"?"true":void 0}),[]);return n.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[n.jsxs("div",{style:{padding:"12px",backgroundColor:"#fff3cd",marginBottom:"8px",borderRadius:"4px"},children:[n.jsx("strong",{children:"Row attributes + className for CSS override:"})," New York employees have a light blue background via"," ",n.jsx("code",{children:'tr[data-highlight-row="true"]'})," scoped under"," ",n.jsx("code",{children:".customTableStyling"}),"."]}),n.jsx(l,{...e,getRowAttributes:t,className:"customTableStyling"})]})},play:async({canvasElement:e})=>{const t=c(e);await t.findByText(s),await o(w(t.getByText(s))).toHaveAttribute("data-highlight-row","true"),await o(w(t.getByText("Charlotte Weber"))).not.toHaveAttribute("data-highlight-row")}},b={args:{objectType:i,columnDefinitions:v,enableOrdering:!1,enableColumnPinning:!1,enableColumnResizing:!1,enableColumnConfig:!1},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  enableOrdering={false}
  enableColumnPinning={false}
  enableColumnResizing={false}
  enableColumnConfig={false}
/>`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(l,{...e})}),play:async({canvasElement:e})=>{const t=c(e);await t.findByText(s),await o(t.queryByRole("button",{name:/Open header menu/iu})).not.toBeInTheDocument()}};var E,S,A;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: columnDefinitions.map((col, index) => ({
      ...col,
      width: index === 0 ? 250 : index === 1 ? 300 : 150
    })) as any,
    onColumnResize: fn()
  },
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" }, width: 250 },
  { locator: { type: "property", id: "department" }, width: 300 },
  { locator: { type: "property", id: "jobTitle" }, width: 150 },
];

<ObjectTable
  objectType={Employee}
  columnDefinitions={columnDefinitions}
/>\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Columns render at their configured widths; dragging the resize handle
  // changes a column's width (firing onColumnResize), and a double-click on the
  // handle resets it back to the configured width (firing onColumnResize null).
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // \`getColumnHeader\` resolves once the real (non-loading) header renders.
    const fullNameHeader = await getColumnHeader(canvas, "fullName");
    await expect(getHeaderWidth(fullNameHeader)).toBe(250);

    // Drag the resize handle to widen the column.
    await dragResizeHandle(fullNameHeader, 120);
    await waitFor(() => expect(getHeaderWidth(fullNameHeader)).toBeGreaterThan(250));
    await expect(args.onColumnResize).toHaveBeenCalledWith("fullName", expect.any(Number));

    // Double-clicking the handle resets the column to its configured width.
    (args.onColumnResize as ReturnType<typeof fn>).mockClear();
    await userEvent.dblClick(getResizeHandle(fullNameHeader));
    await waitFor(() => expect(getHeaderWidth(fullNameHeader)).toBe(250));
    await expect(args.onColumnResize).toHaveBeenCalledWith("fullName", null);
  }
}`,...(A=(S=d.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var D,R,O;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    rowHeight: 56
  },
  parameters: {
    docs: {
      source: {
        code: \`<ObjectTable objectType={Employee} rowHeight={56} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // \`rowHeight\` is applied to each rendered row.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(TARGET_DATA);
    await expect(rowContaining(canvas.getByText(TARGET_DATA))).toHaveStyle({
      height: "56px"
    });
  }
}`,...(O=(R=m.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var H,B,k;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    renderEmptyState: () => <NonIdealState icon="folder-close" title="No saved views found." />
  },
  parameters: {
    docs: {
      description: {
        story: "Override the default empty state with a custom render function. Useful for matching product copy or visuals (here a Blueprint \`NonIdealState\`)."
      },
      source: {
        code: \`
import { NonIdealState } from "@blueprintjs/core";

const emptyObjectSet = client(Employee).where({
  jobProfile: "Nonexistent Role",
});

return (
  <ObjectTable
    objectType={Employee}
    objectSet={emptyObjectSet}
    renderEmptyState={() => (
      <NonIdealState
        icon="folder-close"
        title="No saved views found."
      />
    )}
  />
);
\`
      }
    }
  },
  render: args => {
    const client = useOsdkClient();
    const emptyObjectSet = client(Employee).where({
      jobProfile: "Nonexistent Role"
    });
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <ObjectTable {...args} objectSet={emptyObjectSet} />
      </div>;
  },
  // The object set matches no objects, so the custom empty state renders.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByText("No saved views found.")).toBeInTheDocument();
    await expect(canvas.queryByText(TARGET_DATA)).not.toBeInTheDocument();
  }
}`,...(k=(B=p.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var _,z,I;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      }
    }, {
      locator: {
        type: "property",
        id: "jobTitle"
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      }
    }, {
      locator: {
        type: "property",
        id: "locationCity"
      }
    }]
  } as EmployeeTableProps,
  parameters: {
    docs: {
      description: {
        story: "Demonstrates using \`getRowAttributes\` to set data attributes on rows and a \`className\` on the table to scope CSS overrides via the data attribute selector. " + 'New York employees get a light blue background through the \`[data-highlight-row="true"]\` CSS selector scoped under the table\\'s className.'
      },
      source: {
        code: \`/* CSS (imported stylesheet):
.customTableStyling {
  tr[data-highlight-row="true"] {
    --osdk-table-row-bg-default: #f0f8ff;
    --osdk-table-row-bg-alternate: #e8f4ff;
    --osdk-table-row-bg-hover: #e0f0ff;
  }
}
*/

const getRowAttributes = useCallback((rowData) => ({
  "data-highlight-row": rowData.locationCity === "New York" ? "true" : undefined,
}), []);

return (
  <ObjectTable
    objectType={Employee}
    columnDefinitions={columnDefinitions}
    getRowAttributes={getRowAttributes}
    className="customTableStyling"
  />
);\`
      }
    }
  },
  render: args => {
    const getRowAttributes = useCallback((rowData: Osdk.Instance<typeof Employee>) => ({
      "data-highlight-row": rowData.locationCity === "New York" ? "true" : undefined
    }), []);
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <div style={{
        padding: "12px",
        backgroundColor: "#fff3cd",
        marginBottom: "8px",
        borderRadius: "4px"
      }}>
          <strong>Row attributes + className for CSS override:</strong> New York
          employees have a light blue background via{" "}
          <code>tr[data-highlight-row="true"]</code> scoped under{" "}
          <code>.customTableStyling</code>.
        </div>
        <ObjectTable {...args} getRowAttributes={getRowAttributes} className="customTableStyling" />
      </div>;
  },
  // \`getRowAttributes\` sets data-highlight-row="true" only on New York rows.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(TARGET_DATA);

    // New York employees carry the highlight attribute...
    await expect(rowContaining(canvas.getByText(TARGET_DATA))).toHaveAttribute("data-highlight-row", "true");

    // ...while non–New York employees do not.
    await expect(rowContaining(canvas.getByText("Charlotte Weber"))).not.toHaveAttribute("data-highlight-row");
  }
}`,...(I=(z=u.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var L,W,Y;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    enableOrdering: false,
    enableColumnPinning: false,
    enableColumnResizing: false,
    enableColumnConfig: false
  },
  parameters: {
    docs: {
      source: {
        code: \`<ObjectTable
  objectType={Employee}
  enableOrdering={false}
  enableColumnPinning={false}
  enableColumnResizing={false}
  enableColumnConfig={false}
/>\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // With ordering, pinning, resizing and column config all disabled, the header
  // menu has no items, so its chevron trigger is never rendered.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(TARGET_DATA);
    await expect(canvas.queryByRole("button", {
      name: /Open header menu/iu
    })).not.toBeInTheDocument();
  }
}`,...(Y=(W=b.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};const at=["CustomColumnWidths","CustomRowHeight","CustomEmptyState","RowAttributesForStyling","DisableAllHeaderMenuFeatures"];export{d as CustomColumnWidths,p as CustomEmptyState,m as CustomRowHeight,b as DisableAllHeaderMenuFeatures,u as RowAttributesForStyling,at as __namedExportsOrder,ot as default};
