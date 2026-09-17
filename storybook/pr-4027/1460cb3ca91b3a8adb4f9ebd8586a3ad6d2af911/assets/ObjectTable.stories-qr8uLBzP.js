import{j as i}from"./iframe-CFQ9G3uO.js";import{O as p}from"./object-table-CAVdkrL4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CTOYn_2h.js";import"./preload-helper-B1ZvWZ1B.js";import"./Table-ByICRVtb.js";import"./index-BrTT1QYM.js";import"./Dialog-CMmdBSHE.js";import"./cross-Th924Xj2.js";import"./svgIconContainer-UNIpHB70.js";import"./useBaseUiId-DR9MpHDU.js";import"./InternalBackdrop-BYUzzxg5.js";import"./composite-CcP6OIrf.js";import"./index-ByJ4X6uH.js";import"./index-B2hmf6ar.js";import"./index-Dlk-dVgZ.js";import"./useEventCallback-D2dYS9c-.js";import"./SkeletonBar-BZja4E16.js";import"./LoadingCell-BjO_-sdZ.js";import"./ColumnConfigDialog-DcslyDjj.js";import"./DraggableList-Brn3iCp5.js";import"./search-2qv0O4T5.js";import"./Input-DXZODgk0.js";import"./useControlled-CZXT8yrt.js";import"./Button-CE7esyC3.js";import"./small-cross-BEf2AWPD.js";import"./ActionButton-DNlorvJl.js";import"./Checkbox-BPLCKRPV.js";import"./useValueChanged-BKOHDyr1.js";import"./CollapsiblePanel-C0s5Hv5w.js";import"./MultiColumnSortDialog-BcTOUSHc.js";import"./MenuTrigger-BqTI-aoy.js";import"./CompositeItem-Dm-ge3S4.js";import"./ToolbarRootContext-DzjMBLGA.js";import"./getDisabledMountTransitionStyles-VkjRSqjD.js";import"./getPseudoElementBounds-C-ZD0-Sf.js";import"./chevron-down-Cu6k6Z5N.js";import"./index-Clq14PWf.js";import"./error-CP69BMiN.js";import"./BaseCbacBanner-Dgyzb5Y3.js";import"./makeExternalStore-Dcan_kEv.js";import"./Tooltip-Chj9n8Fk.js";import"./PopoverPopup-D2AzS4JP.js";import"./debounce-CjSFYMGi.js";import"./useOsdkClient-B973Ur3i.js";import"./tick-C6f5jokZ.js";import"./DropdownField-DOW2Yrq8.js";import"./isEqual-NY24Vuy-.js";import"./withOsdkMetrics-BOULM9w0.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
