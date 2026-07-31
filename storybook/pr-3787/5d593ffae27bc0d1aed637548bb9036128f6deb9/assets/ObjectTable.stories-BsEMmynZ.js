import{j as i}from"./iframe-CyZmVsjD.js";import{O as p}from"./object-table-jL-n7eeX.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Ctad-9dj.js";import"./preload-helper-HEYW5JNb.js";import"./Table-DfagIk6G.js";import"./index-BIsnimhh.js";import"./Dialog-HpVT0VIv.js";import"./cross-B2-IrGzR.js";import"./svgIconContainer-AUYrzoLK.js";import"./useBaseUiId-DxM_zxss.js";import"./InternalBackdrop-DhyG9QFu.js";import"./composite-XxoSgZbC.js";import"./index-HhNb9coI.js";import"./index-C7Hi_lc2.js";import"./index-Sw4bTcvu.js";import"./useEventCallback-b_6dFGXK.js";import"./SkeletonBar-DKpYK4KN.js";import"./LoadingCell-BtBEdwDY.js";import"./ColumnConfigDialog-CGU-JzLG.js";import"./DraggableList-WEERLRo1.js";import"./search-DjWlgkJN.js";import"./Input-Bl-GgjYI.js";import"./useControlled-xZiD0Urq.js";import"./isEqual-CcM99a7_.js";import"./isObject-N9CWWS8h.js";import"./Button-CSdeTDcp.js";import"./ActionButton-BWSG5Z25.js";import"./Checkbox-BA7muG6e.js";import"./useValueChanged-Dgwb1EH_.js";import"./CollapsiblePanel-CZznUpZ4.js";import"./MultiColumnSortDialog-BIGTB8I8.js";import"./MenuTrigger-AFm_kpRM.js";import"./CompositeItem-XqkpCBrT.js";import"./ToolbarRootContext-D0SMDc5d.js";import"./getDisabledMountTransitionStyles-BBpOe4Qf.js";import"./getPseudoElementBounds-CvJIFZOP.js";import"./chevron-down-P34Asnf7.js";import"./index-DCxG3zDk.js";import"./error-Dc4Tyqrk.js";import"./BaseCbacBanner-C5QoRx_z.js";import"./makeExternalStore-CDO6Oc7I.js";import"./Tooltip-LRCBEIFM.js";import"./PopoverPopup-JLBpa_xN.js";import"./toNumber-Ch2f3zT9.js";import"./useOsdkClient-FUHSAEzr.js";import"./tick-BAJcGr9t.js";import"./DropdownField-Pg9Ecdmk.js";import"./withOsdkMetrics-CKttVeW1.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
