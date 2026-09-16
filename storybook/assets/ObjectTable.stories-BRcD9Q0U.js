import{j as i}from"./iframe-CPLN-ZbK.js";import{O as p}from"./object-table-DKcSgb8t.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BLoZFbSm.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Cut80g1D.js";import"./index-Cjge5u51.js";import"./Dialog-hcu_H2b0.js";import"./cross-DkzWzcR0.js";import"./svgIconContainer-DJorehzp.js";import"./useBaseUiId-BCid-a8z.js";import"./InternalBackdrop-H5MHz81r.js";import"./composite-DajkLm6o.js";import"./index-CcftVgrB.js";import"./index-CTI5qcoR.js";import"./index-8miuT5ZT.js";import"./useEventCallback-CwloqOs8.js";import"./SkeletonBar-BsNNEfxd.js";import"./LoadingCell-CUCPZmF_.js";import"./ColumnConfigDialog-CQjmuqWg.js";import"./DraggableList-DXMqTDes.js";import"./search-vlNNCCei.js";import"./Input-DTYOcpRg.js";import"./useControlled-CjsGTJEt.js";import"./Button-CwRu4Y7L.js";import"./small-cross-vfsVsU9u.js";import"./ActionButton-DQdOoyph.js";import"./Checkbox-C_skPkNa.js";import"./useValueChanged-D-cfwHFM.js";import"./CollapsiblePanel-D7FGbcZd.js";import"./MultiColumnSortDialog-6_vgxtTp.js";import"./MenuTrigger-DJI3OVra.js";import"./CompositeItem-2xQpagLs.js";import"./ToolbarRootContext-Bf2tT3Hj.js";import"./getDisabledMountTransitionStyles-BAd08XlN.js";import"./getPseudoElementBounds-CVyFvNKv.js";import"./chevron-down-jQvrZLIb.js";import"./index-C_Kl0KC7.js";import"./error-CfVtgGYX.js";import"./BaseCbacBanner-C0Cuvy9a.js";import"./makeExternalStore-GKMGQTfP.js";import"./Tooltip-D82cN-2b.js";import"./PopoverPopup-B1UMbbjh.js";import"./debounce-BHYl5DP-.js";import"./useOsdkClient-DQiZ2tYF.js";import"./tick-COEqwA56.js";import"./DropdownField-BZy0Vjfn.js";import"./isEqual-Jd-qeLdg.js";import"./withOsdkMetrics-DxyXNPGX.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
