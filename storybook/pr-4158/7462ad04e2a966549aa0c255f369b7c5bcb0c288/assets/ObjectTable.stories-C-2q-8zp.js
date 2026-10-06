import{j as i}from"./iframe-DWfCOAQu.js";import{O as p}from"./object-table-DGxdXP_y.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bo-eC8Xr.js";import"./preload-helper-AetNKwh5.js";import"./Table-Cl1-pmbH.js";import"./index-CqJhMuS2.js";import"./Dialog-CI2QPSy8.js";import"./cross-B_xAvT3d.js";import"./svgIconContainer-Q7lczhdT.js";import"./useBaseUiId-BKma_f4b.js";import"./InternalBackdrop-gdbKvKDa.js";import"./composite-DNxX4Nkb.js";import"./index-CrNU2B9N.js";import"./index-WpqqJaJk.js";import"./index-CpM3OnKB.js";import"./useEventCallback-C6ACKCKc.js";import"./SkeletonBar-EPFSLYlJ.js";import"./LoadingCell-DPL5De6J.js";import"./ColumnConfigDialog-TWURoNNE.js";import"./DraggableList-CSn5_Vvj.js";import"./search-BgPhvmky.js";import"./Input-B5DqZdR7.js";import"./useControlled-CnSP5Uy7.js";import"./Button-C6vZxzg6.js";import"./small-cross-BqKc-LeJ.js";import"./ActionButton-DAgVBgto.js";import"./Checkbox-BnDfvXBF.js";import"./useValueChanged-CLfvSLZ_.js";import"./CollapsiblePanel-BpxVECEg.js";import"./MultiColumnSortDialog-Ccvt5nJf.js";import"./MenuTrigger-D7NPcArM.js";import"./CompositeItem-CfFTNcKF.js";import"./ToolbarRootContext-BnN-yS54.js";import"./getDisabledMountTransitionStyles-BXtKCsRk.js";import"./getPseudoElementBounds-CK6ToQgj.js";import"./chevron-down-Dt5AdPlw.js";import"./index-Dcv9F_CZ.js";import"./error-D0MXudnr.js";import"./BaseCbacBanner-B9L4VrrW.js";import"./makeExternalStore-CS1-iCYk.js";import"./Tooltip-BDvqRvi5.js";import"./PopoverPopup-BN0RPWQk.js";import"./debounce-0ot9PSoS.js";import"./useOsdkClient-C6t9DPq1.js";import"./tick-DxeMA9RK.js";import"./DropdownField-B_3NuYm-.js";import"./isEqual-CkOQk0og.js";import"./withOsdkMetrics-Dn5f43wd.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
