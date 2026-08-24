import{j as i}from"./iframe-Cp-OZSnu.js";import{O as p}from"./object-table-CfyXoB90.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BZ8g0c2S.js";import"./preload-helper-D0TF71Jy.js";import"./Table-CiWJGaSH.js";import"./index-CkF9JaVm.js";import"./Dialog-B4l2mtAg.js";import"./cross-B5c-VWRK.js";import"./svgIconContainer-CxRnbkUR.js";import"./useBaseUiId-IikVfOCL.js";import"./InternalBackdrop-vW5OBAT0.js";import"./composite-D2o-jxlM.js";import"./index-JtC5fr_f.js";import"./index-XQPE0BXO.js";import"./index-DwAKCp0R.js";import"./useEventCallback-DfdH9uyV.js";import"./SkeletonBar-5PqapGnZ.js";import"./LoadingCell-BScpMvgF.js";import"./ColumnConfigDialog-B57JUt_x.js";import"./DraggableList-C5K3BPEc.js";import"./search-BXFPe1aS.js";import"./Input-BS6nNy2e.js";import"./useControlled-IGbL1OgU.js";import"./Button-10bMmHGl.js";import"./small-cross-Bs17Z7ts.js";import"./ActionButton-zOvyMBGx.js";import"./Checkbox-B8Husi45.js";import"./useValueChanged-BU4ePFF5.js";import"./CollapsiblePanel-CbpCiDEW.js";import"./MultiColumnSortDialog-By7JDjRb.js";import"./MenuTrigger-BVMeq6Rj.js";import"./CompositeItem-7Cd8Z46E.js";import"./ToolbarRootContext-DfeiVioE.js";import"./getDisabledMountTransitionStyles-D4MlkAs5.js";import"./getPseudoElementBounds-CUEq49CO.js";import"./chevron-down-CqsW6wc2.js";import"./index-C46CdtdM.js";import"./error-o2ED4R93.js";import"./BaseCbacBanner-DWZMW_NS.js";import"./makeExternalStore-D9rplt6T.js";import"./Tooltip-BG7Ajslr.js";import"./PopoverPopup-BOe11Gw9.js";import"./debounce-DdIQASxO.js";import"./useOsdkClient-BOP-wcoz.js";import"./tick-D0gf4TUf.js";import"./DropdownField-DvuC2_FB.js";import"./isEqual-pN97cfTT.js";import"./withOsdkMetrics-DSHyV5CB.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
