import{j as i}from"./iframe-CwHoXHUu.js";import{O as p}from"./object-table-Cag_aHEb.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D_ly6aN2.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-B8BrjogO.js";import"./index-CZaeEK6I.js";import"./Dialog-De2OFsHH.js";import"./cross-CbSe3IA2.js";import"./svgIconContainer-CCqCSEPy.js";import"./useBaseUiId-BPVfLfjX.js";import"./InternalBackdrop-Dp6bA82H.js";import"./composite-DnjWTUQ2.js";import"./index-Cd6vbhvO.js";import"./index-CfA2Hd3H.js";import"./index-UD_bptXF.js";import"./useEventCallback-ANOYlLcV.js";import"./SkeletonBar-BPg1Fkjv.js";import"./LoadingCell-7w5ijp3b.js";import"./ColumnConfigDialog-BLb0xQT4.js";import"./DraggableList-B9JF565r.js";import"./search-DFG6yLeC.js";import"./Input-D4zseZIs.js";import"./useControlled-Hry_0x1f.js";import"./Button-h45Z6oL5.js";import"./small-cross-hTe5W9lf.js";import"./ActionButton-o9bSj-37.js";import"./Checkbox-DCQ1bTrr.js";import"./useValueChanged-Bts0Uq_N.js";import"./CollapsiblePanel-BF_hIS1Q.js";import"./MultiColumnSortDialog-DUaw27L5.js";import"./MenuTrigger-D9Ll9dQr.js";import"./CompositeItem-D5ZABXe5.js";import"./ToolbarRootContext-Dnc8VcDU.js";import"./getDisabledMountTransitionStyles-zi3Kz6H3.js";import"./getPseudoElementBounds-BZ16Xjo9.js";import"./chevron-down-CJ7ExT0D.js";import"./index-CI3G919h.js";import"./error-fdiT2-40.js";import"./BaseCbacBanner-syPdUMGq.js";import"./makeExternalStore-BVBAkPec.js";import"./Tooltip-CbRVkG8d.js";import"./isObject-7iDi-x5O.js";import"./debounce-BaLd07FW.js";import"./useOsdkClient-Cq22Qxjo.js";import"./tick-_yHnD8nP.js";import"./DropdownField-D6wICRIR.js";import"./isEqual-DPe1pfPj.js";import"./_baseIsEqual-5-KFDSiY.js";import"./withOsdkMetrics-D3UK9v4M.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
