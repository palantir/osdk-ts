import{j as i}from"./iframe-BjF7QLhH.js";import{O as p}from"./object-table-CRKpg9i5.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BflEZs5A.js";import"./preload-helper-BjubRawJ.js";import"./Table-B85Q0ZFg.js";import"./index-DjhpcMou.js";import"./Dialog-ye1qQI2K.js";import"./cross-H3gYztYg.js";import"./svgIconContainer-BOlpbv4R.js";import"./useBaseUiId-DsiyrTc5.js";import"./InternalBackdrop-DjHac_o6.js";import"./composite-C3VIqVTD.js";import"./index-dd7HiSC0.js";import"./index-D9CUEICi.js";import"./index-_Dhu50HX.js";import"./useEventCallback-8NkDy3YU.js";import"./SkeletonBar-wv_LSLd9.js";import"./LoadingCell-BTF7OY9I.js";import"./ColumnConfigDialog-DEbqWsiT.js";import"./DraggableList-jq3VaT7b.js";import"./search-CfhozSoV.js";import"./Input-EpQSMSPb.js";import"./useControlled-k0Oisgsr.js";import"./Button-BaubE4M6.js";import"./small-cross-aBFUVmSW.js";import"./ActionButton-BYRhG-r1.js";import"./Checkbox-CeRhyG7S.js";import"./useValueChanged-WiC8WLMH.js";import"./CollapsiblePanel-CbQAA8YZ.js";import"./MultiColumnSortDialog-4IZ447J8.js";import"./MenuTrigger-C5-uAPsu.js";import"./CompositeItem-CJJAstdN.js";import"./ToolbarRootContext-160MLPLN.js";import"./getDisabledMountTransitionStyles-CvnFYTQC.js";import"./getPseudoElementBounds-I8RQbwIa.js";import"./chevron-down-qzCHSoFz.js";import"./index-Zf4kiRn8.js";import"./error-DEWhTW9J.js";import"./BaseCbacBanner-DxaUAtTm.js";import"./makeExternalStore--bKLbn6H.js";import"./Tooltip-EUOwem5v.js";import"./PopoverPopup-Pu1LSCLj.js";import"./debounce-ChQOuTiY.js";import"./useOsdkClient-Bbvx3WSo.js";import"./tick-CryAE_DJ.js";import"./DropdownField-BBcJxhdu.js";import"./isEqual-D8iy_ZUF.js";import"./withOsdkMetrics-BhtzFR1P.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
