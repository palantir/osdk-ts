import{j as i}from"./iframe-DqApX63y.js";import{O as p}from"./object-table-k6yie7EH.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-X8PV0ycm.js";import"./preload-helper-Bec-Ia2T.js";import"./Table-mx-XmHdE.js";import"./index-CyvkUScE.js";import"./Dialog-tPn2JCm2.js";import"./cross-C5bmvSOT.js";import"./svgIconContainer-6cRzMh8j.js";import"./useBaseUiId-BKFVtTe-.js";import"./InternalBackdrop-Cd1LmBcA.js";import"./composite-CRmy7_bC.js";import"./index-BOcOla9y.js";import"./index-DRbiLs21.js";import"./index-BGUtfM2L.js";import"./useEventCallback-C_EHeE0y.js";import"./SkeletonBar-2kheKNw1.js";import"./LoadingCell-ZDlToWio.js";import"./ColumnConfigDialog-CbxnvofP.js";import"./DraggableList-Bs6SyKf_.js";import"./search-DWIX6Qtd.js";import"./Input-DEWSCfWZ.js";import"./useControlled-dziTOMb-.js";import"./Button-ChF1ZUI_.js";import"./small-cross-BEgcJVSc.js";import"./ActionButton-BzlJmtNl.js";import"./Checkbox-NWXpl7_I.js";import"./useValueChanged-wUg0BzA8.js";import"./CollapsiblePanel-C9_n_dCM.js";import"./MultiColumnSortDialog-CVqVBYa3.js";import"./MenuTrigger-BK05k8J1.js";import"./CompositeItem-D1qVgSi4.js";import"./ToolbarRootContext-Dv213T19.js";import"./getDisabledMountTransitionStyles-CD9PvG5g.js";import"./getPseudoElementBounds-DusJxNbj.js";import"./chevron-down-DvNVUZis.js";import"./index-Drho1d5n.js";import"./error-D4Jl5yqC.js";import"./BaseCbacBanner-DPtOi32v.js";import"./makeExternalStore-71T0xGUT.js";import"./Tooltip-DQ7QRGY9.js";import"./isObject-nTfM7xAK.js";import"./debounce-B7mULt91.js";import"./useOsdkClient-C4IDXCsH.js";import"./tick-cBZZmDLW.js";import"./DropdownField-lulEEiGG.js";import"./isEqual-_JgNSLLj.js";import"./_baseIsEqual-CIcCZrpL.js";import"./withOsdkMetrics-K4E-rs8a.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
