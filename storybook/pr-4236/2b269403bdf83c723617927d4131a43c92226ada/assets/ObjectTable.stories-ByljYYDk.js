import{j as i}from"./iframe-htyY8WGh.js";import{O as p}from"./object-table-CxeVRikb.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BOSKPRqf.js";import"./preload-helper-BZEQ7CCm.js";import"./Table-CBPb2Ax7.js";import"./index-9XAE-P5N.js";import"./Dialog-FXtxmKtu.js";import"./cross-zUtY8fYt.js";import"./svgIconContainer-DDCQ6k8x.js";import"./useBaseUiId-B5naUVoF.js";import"./InternalBackdrop-sMqyjWxo.js";import"./composite-DLA5e3bM.js";import"./index-BRbgX3T0.js";import"./index-BmvQUuUh.js";import"./index-DMt3BqCf.js";import"./useEventCallback-BPbziyI1.js";import"./SkeletonBar-Dr30uUnV.js";import"./LoadingCell-BZHL109m.js";import"./ColumnConfigDialog-BAxrkWGM.js";import"./DraggableList-Dw72zyKo.js";import"./search-BARUS6xQ.js";import"./Input-B_148gGT.js";import"./useControlled-jlfCPDon.js";import"./Button-CugfLHha.js";import"./small-cross-BG5UjiFv.js";import"./ActionButton-BGplWwX2.js";import"./Checkbox-CxNTxawd.js";import"./useValueChanged-BuXRFnHI.js";import"./CollapsiblePanel-D5f1Ks-a.js";import"./MultiColumnSortDialog-9e9gOjI_.js";import"./MenuTrigger-CM187Vaj.js";import"./CompositeItem-CuUp7unb.js";import"./ToolbarRootContext-CvT5UyxT.js";import"./getDisabledMountTransitionStyles-DNIZXeN8.js";import"./getPseudoElementBounds-ehODIuKj.js";import"./chevron-down-CPTHUdZ2.js";import"./index-DWZoNjEc.js";import"./error-B5cHozqr.js";import"./BaseCbacBanner-BVUw-7jj.js";import"./makeExternalStore-CvyNaZuu.js";import"./Tooltip-wud2Jc0O.js";import"./PopoverPopup-VfPjnT9d.js";import"./debounce-BFJO43v6.js";import"./useOsdkClient-bA8p7394.js";import"./tick-Oy4Dyy5w.js";import"./DropdownField-BgjFXt3p.js";import"./isEqual-CwYdE02M.js";import"./withOsdkMetrics-B5xof_Ab.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
