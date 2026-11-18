import{j as i}from"./iframe-C55ekymu.js";import{O as p}from"./object-table-8z9WGtp_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C9T5YsGY.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Csz_i8aJ.js";import"./index-CFbWm03i.js";import"./Dialog-BAwbXm28.js";import"./cross-DQROmGzH.js";import"./svgIconContainer-ChZ06sjp.js";import"./useBaseUiId-CJcpNbe-.js";import"./InternalBackdrop-CvYabiN9.js";import"./composite-DjC5qkIo.js";import"./index-BjL1lDKB.js";import"./index-Ssbdtt4R.js";import"./index-BitSGxZh.js";import"./useEventCallback-BdHTuoti.js";import"./SkeletonBar-DuohuUr1.js";import"./LoadingCell-nuZT7jJJ.js";import"./ColumnConfigDialog-Yl8zzCb6.js";import"./DraggableList-D0sjc9QB.js";import"./search-BNvEUbcp.js";import"./Input-BKj5HQxK.js";import"./useControlled-JP2tPCzU.js";import"./Button-BAZDZzeS.js";import"./small-cross-DWLcJPqC.js";import"./ActionButton-QrsuQ0Bk.js";import"./Checkbox-YfrV0shm.js";import"./useValueChanged-0_kAOcmx.js";import"./CollapsiblePanel-DNdVrnTZ.js";import"./MultiColumnSortDialog-DBLvpumO.js";import"./MenuTrigger-EdCmMVpT.js";import"./CompositeItem-BaLE10Vy.js";import"./ToolbarRootContext-CxArS7CZ.js";import"./getDisabledMountTransitionStyles-C68-Nvha.js";import"./getPseudoElementBounds-AyWvnJuI.js";import"./chevron-down-BZm8imPT.js";import"./index-Bk4PBoT1.js";import"./error-BZW5WceS.js";import"./BaseCbacBanner-B9NSFQxY.js";import"./makeExternalStore-DAmiU-nQ.js";import"./Tooltip-Pfbyi0H-.js";import"./PopoverPopup-gzdhXoIP.js";import"./Select-CLPFfhpu.js";import"./useOsdkClient-DEp8Hr9R.js";import"./tick-C5xW6PnQ.js";import"./DropdownField-Awb0oUum.js";import"./useDebouncedCallback-CJiCXQHj.js";import"./isEqual-D4BqxSVn.js";import"./_baseIsEqual-CaMr3HsT.js";import"./stableSerialize-D80f1Skw.js";import"./withOsdkMetrics-CaT2GfU0.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,Te={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const fe=["Default"];export{n as Default,fe as __namedExportsOrder,Te as default};
