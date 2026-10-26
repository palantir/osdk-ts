import{j as i}from"./iframe-1hfaDqWf.js";import{O as p}from"./object-table-BVsmr5UF.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B5HGg2Y3.js";import"./preload-helper-De53aV0r.js";import"./Table-BOdn1qRs.js";import"./index-BhraWcfW.js";import"./Dialog-DF70jFlI.js";import"./cross-BxuxKn8r.js";import"./svgIconContainer-CfNLFLUV.js";import"./useBaseUiId-Deq2cxJf.js";import"./InternalBackdrop-Bwl2SQmc.js";import"./composite-DJvOABdy.js";import"./index-CltX__3l.js";import"./index-CNJ7D8B4.js";import"./index-DUbuCag1.js";import"./useEventCallback-aip0Q_23.js";import"./SkeletonBar-9TZgIuFD.js";import"./LoadingCell-B01RldSR.js";import"./ColumnConfigDialog-DSrNDSyO.js";import"./DraggableList-DVDPuNDG.js";import"./search-ChOCRi6Z.js";import"./Input-D17xgaxz.js";import"./useControlled-D0I97nL6.js";import"./Button-CnBcagCx.js";import"./small-cross-C628jtsy.js";import"./ActionButton-DAT1D4My.js";import"./Checkbox-5hahDlkG.js";import"./useValueChanged-CdYXSfOs.js";import"./CollapsiblePanel-BZNELsDM.js";import"./MultiColumnSortDialog-DTOCkBGF.js";import"./MenuTrigger-QDFe4v67.js";import"./CompositeItem-CmCZmC8c.js";import"./ToolbarRootContext-BuC21FlU.js";import"./getDisabledMountTransitionStyles-Dk0hinap.js";import"./getPseudoElementBounds-DLRZ8Oik.js";import"./chevron-down-oC6N0Ou5.js";import"./index-B722iX7j.js";import"./error-BGVtNtZh.js";import"./BaseCbacBanner-C8GCPmG0.js";import"./makeExternalStore-CiOsLXpf.js";import"./Tooltip-CP0SUwq-.js";import"./PopoverPopup-CFLZ0LEF.js";import"./debounce-Bqvjn-gC.js";import"./useOsdkClient-D6tvv9UM.js";import"./tick-aJFXUkvZ.js";import"./DropdownField-K3jo3x1W.js";import"./isEqual-DbAISukP.js";import"./withOsdkMetrics-pFp3tsBC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
