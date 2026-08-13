import{j as i}from"./iframe-BmFJOqc6.js";import{O as p}from"./object-table-H-W8mI66.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D7brIH8-.js";import"./preload-helper-C_jr2zBl.js";import"./Table-BpHj1i1T.js";import"./index-3j69-5Ym.js";import"./Dialog-BHl_uah2.js";import"./cross-CKVqWa-w.js";import"./svgIconContainer-CMQoxDUu.js";import"./useBaseUiId-C5SRli-B.js";import"./InternalBackdrop-LfW5Mcwa.js";import"./composite-BoouiZdh.js";import"./index-DWnSWhJ9.js";import"./index-Cfv6AZs9.js";import"./index-DXpgb3R7.js";import"./useEventCallback-DxoETJUl.js";import"./SkeletonBar-BYmaDYvY.js";import"./LoadingCell-DDCR-xi8.js";import"./ColumnConfigDialog-B_xkXJJp.js";import"./DraggableList-BTBrHQlG.js";import"./search-CioqFqwa.js";import"./Input-BT2Zyp5m.js";import"./useControlled-L8rvP9al.js";import"./isEqual-Bzt_ultW.js";import"./isObject-wZOe6YRR.js";import"./Button-BBPh3cP6.js";import"./ActionButton-DQEgHTbw.js";import"./Checkbox-9fy7D2y_.js";import"./useValueChanged-CxlDIVDs.js";import"./CollapsiblePanel-C30yTyzX.js";import"./MultiColumnSortDialog-UzWZkrUO.js";import"./MenuTrigger-bCnbUhqU.js";import"./CompositeItem-CPVzsbMv.js";import"./ToolbarRootContext-Dryg-_tS.js";import"./getDisabledMountTransitionStyles-CCs1LxYN.js";import"./getPseudoElementBounds-CY2Q6OxG.js";import"./chevron-down-DWMFwiT1.js";import"./index-C3KliuNA.js";import"./error-l2yMMQM_.js";import"./BaseCbacBanner-Ho2FH0qL.js";import"./makeExternalStore-iaafROBl.js";import"./Tooltip-f0K72knV.js";import"./PopoverPopup-DZe7T4hw.js";import"./toNumber-D5o0NDBW.js";import"./useOsdkClient-CmamzJMC.js";import"./tick-BPttWX0Q.js";import"./DropdownField-CzWm6Bt6.js";import"./withOsdkMetrics-BzcGzmjv.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
