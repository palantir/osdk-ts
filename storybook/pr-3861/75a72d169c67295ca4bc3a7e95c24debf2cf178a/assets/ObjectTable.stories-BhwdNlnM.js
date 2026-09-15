import{j as i}from"./iframe-DX9GTmTS.js";import{O as p}from"./object-table-BwtPBHMG.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Ci8dEjXI.js";import"./preload-helper-BJHRWIj0.js";import"./Table-B0RyClyk.js";import"./index-qD7KPbHv.js";import"./Dialog-CBJ6xqNI.js";import"./cross-CnnW3pn0.js";import"./svgIconContainer-DiXmcE79.js";import"./useBaseUiId-LIEARN9F.js";import"./InternalBackdrop-DXzjiCbf.js";import"./composite-YtQb8O1c.js";import"./index-D6AHn8lU.js";import"./index-BFmznvox.js";import"./index-BI0-O9XB.js";import"./useEventCallback-Dz7-lFnn.js";import"./SkeletonBar-zzijKBDR.js";import"./LoadingCell-V3lORDX6.js";import"./ColumnConfigDialog-BJzQGuAy.js";import"./DraggableList-Dn15y9zJ.js";import"./search-CpS_oLmz.js";import"./Input-D3jwcYVb.js";import"./useControlled-Bbq2I_dd.js";import"./Button-B-xJiokr.js";import"./small-cross-99puV05O.js";import"./ActionButton-CUYGPjpl.js";import"./Checkbox-kStpg7os.js";import"./useValueChanged-xT7sW3-e.js";import"./CollapsiblePanel-BILO_2dF.js";import"./MultiColumnSortDialog-BxprvtcX.js";import"./MenuTrigger-B_Z_Pbg2.js";import"./CompositeItem-CDg-ghY6.js";import"./ToolbarRootContext-HucsP966.js";import"./getDisabledMountTransitionStyles-aiGqPhBD.js";import"./getPseudoElementBounds-fJ1HXQTt.js";import"./chevron-down-DasCvZc6.js";import"./index-B6DX-C20.js";import"./error-BLx5cAN8.js";import"./BaseCbacBanner-CoL5y8lQ.js";import"./makeExternalStore-ChFrK0L7.js";import"./Tooltip-Ba8TKTH9.js";import"./PopoverPopup-DtfiGPFv.js";import"./debounce-BubrlkRY.js";import"./useOsdkClient-C1e-iWGi.js";import"./tick-BfAQ_n_q.js";import"./DropdownField-DaWEyCui.js";import"./isEqual-4EDI4GuI.js";import"./withOsdkMetrics-CVU4RfbR.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
