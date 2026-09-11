import{j as i}from"./iframe-BFm_OPcJ.js";import{O as p}from"./object-table-7RsImB24.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B-8u1b05.js";import"./preload-helper-D-hWMdww.js";import"./Table-BOaymXKV.js";import"./index-D6OldzKg.js";import"./Dialog-RmDlKm5l.js";import"./cross-DAfVMEHB.js";import"./svgIconContainer-DFBJL56Q.js";import"./useBaseUiId-Bdo2oKJK.js";import"./InternalBackdrop-BDKMpH4Z.js";import"./composite-ClIBPGgl.js";import"./index-D0NN2v4g.js";import"./index-D_unebpF.js";import"./index-CGbcIBw9.js";import"./useEventCallback-Don2-mEM.js";import"./SkeletonBar-CLIzo5Xt.js";import"./LoadingCell-BzlltzKN.js";import"./ColumnConfigDialog-DHiaXc2L.js";import"./DraggableList-ItVAzQSp.js";import"./search-JGyx4lc7.js";import"./Input-EUSvaA_S.js";import"./useControlled-DARaGIjq.js";import"./Button-C_avm1ie.js";import"./small-cross-DHkBCmiu.js";import"./ActionButton-ylSGNg3V.js";import"./Checkbox-LGdzzza0.js";import"./useValueChanged-C7A3m1Bn.js";import"./CollapsiblePanel-kwBiLUkd.js";import"./MultiColumnSortDialog-CGrTzc_p.js";import"./MenuTrigger-e9BU4Lb3.js";import"./CompositeItem-Dv9cYPny.js";import"./ToolbarRootContext-B9b_DGi_.js";import"./getDisabledMountTransitionStyles-BgUKa7Jc.js";import"./getPseudoElementBounds-CneiYeVp.js";import"./chevron-down-DYcOsbsP.js";import"./index-DlKJFgce.js";import"./error-BSGKVmqD.js";import"./BaseCbacBanner-D7_4jx09.js";import"./makeExternalStore-C1VxggOZ.js";import"./Tooltip-BKDnPOlI.js";import"./PopoverPopup-BEMdzx0_.js";import"./debounce-D8DxzbxV.js";import"./useOsdkClient-mRsBldvP.js";import"./tick-zhT1lai6.js";import"./DropdownField-CN6SZeut.js";import"./isEqual-BTYeq4px.js";import"./withOsdkMetrics-1bFznkGS.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
