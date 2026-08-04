import{j as i}from"./iframe-BpwQaCWI.js";import{O as p}from"./object-table-CH05AIGR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CfFFEX-s.js";import"./preload-helper-Ce4Df6DJ.js";import"./Table-DGBWybdL.js";import"./index-NFv3j1Kg.js";import"./Dialog-BSaCnSag.js";import"./cross-rhRWeE7s.js";import"./svgIconContainer-CuioFaav.js";import"./useBaseUiId-C5AYGB4P.js";import"./InternalBackdrop-CeA1CBxo.js";import"./composite-CEBA9fRk.js";import"./index-DITs30Pt.js";import"./index-C7wtgwzA.js";import"./index-COz9BELM.js";import"./useEventCallback-IWP8tLQx.js";import"./SkeletonBar-BRdeXJTx.js";import"./LoadingCell-Dtbdc1RG.js";import"./ColumnConfigDialog-BIahiB4f.js";import"./DraggableList-CWV-fUSQ.js";import"./search-BFV-1IQp.js";import"./Input-cDQ-g7j4.js";import"./useControlled-B5EHNqku.js";import"./isEqual-DaDScgTk.js";import"./isObject-CRq5C3Ab.js";import"./Button-CF2CCiZI.js";import"./ActionButton-CzDRD5Y9.js";import"./Checkbox-D0yotXNX.js";import"./useValueChanged-CyvwbWm9.js";import"./CollapsiblePanel-CFUvSMen.js";import"./MultiColumnSortDialog-BWPCHdDX.js";import"./MenuTrigger-B4Jz4isr.js";import"./CompositeItem-DYXeZzjt.js";import"./ToolbarRootContext-3wDAKiuQ.js";import"./getDisabledMountTransitionStyles-CNXRSnjE.js";import"./getPseudoElementBounds-DStwRK1c.js";import"./chevron-down-Bq6hXrIQ.js";import"./index-DPdcJJ72.js";import"./error-DStggkKI.js";import"./BaseCbacBanner-eJjTQfwV.js";import"./makeExternalStore-BuiA034c.js";import"./Tooltip-DyA1KRF2.js";import"./PopoverPopup-B63ooC6C.js";import"./toNumber-1FjbIoRB.js";import"./useOsdkClient-DAenydGK.js";import"./tick-BNGdmLsY.js";import"./DropdownField-eOCoaJZL.js";import"./withOsdkMetrics-KUUyNHJj.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
