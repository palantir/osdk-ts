import{j as i}from"./iframe-D3lsV3bM.js";import{O as p}from"./object-table-BOmVYPfn.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DAtY_euk.js";import"./preload-helper-B0DSvxC2.js";import"./Table-DFux7SeR.js";import"./index-D11sJHPZ.js";import"./Dialog-D7B0p3tF.js";import"./cross-_tMTONVW.js";import"./svgIconContainer-DfM6sw_L.js";import"./useBaseUiId-6o6e03Dj.js";import"./InternalBackdrop-DWpv92EC.js";import"./composite-9R0QeF6F.js";import"./index-BLDv51Tl.js";import"./index-Dxb68UZ2.js";import"./index-DB3xED8F.js";import"./useEventCallback-DosG7uBT.js";import"./SkeletonBar-DfbOeTxN.js";import"./LoadingCell-BVrMoXeR.js";import"./ColumnConfigDialog-B5QpH_8k.js";import"./DraggableList-MiRMJAiS.js";import"./search-O4ijEoIs.js";import"./Input-CiqPSABQ.js";import"./useControlled-bq-ZFaDd.js";import"./Button-DakXe1NE.js";import"./small-cross-DsJLV_gX.js";import"./ActionButton-B7Qk2YJZ.js";import"./Checkbox-DjcmhqAX.js";import"./useValueChanged-DQOtE3bQ.js";import"./CollapsiblePanel-D933QPH8.js";import"./MultiColumnSortDialog-B3y84jTf.js";import"./MenuTrigger-C46HpHgT.js";import"./CompositeItem-DJyMopxi.js";import"./ToolbarRootContext-Bgqyz9vO.js";import"./getDisabledMountTransitionStyles-dC28mhVQ.js";import"./getPseudoElementBounds-B7WJxdIq.js";import"./chevron-down-1CFj8X53.js";import"./index-Cr0VJDXn.js";import"./error-XRO96CTm.js";import"./BaseCbacBanner-BMmEX_7W.js";import"./makeExternalStore-l2x05IWc.js";import"./Tooltip-CdBxAJkp.js";import"./PopoverPopup-HW4fQdCB.js";import"./debounce-DKdoEzLY.js";import"./useOsdkClient-CjCuVbH9.js";import"./tick-DjGBapZW.js";import"./DropdownField-BKtsIZHj.js";import"./isEqual-CRfm0_Mh.js";import"./withOsdkMetrics-CyI1jVrw.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
