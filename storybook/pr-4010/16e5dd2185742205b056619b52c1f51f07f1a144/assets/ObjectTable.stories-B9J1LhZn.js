import{j as i}from"./iframe-OLZMb4D5.js";import{O as p}from"./object-table-C0u5Nyay.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BC9k5ozS.js";import"./preload-helper-RKY21aDn.js";import"./Table-BV0KvpzI.js";import"./index-uqrBuBmm.js";import"./Dialog-FHcDtkV2.js";import"./cross-C6sWsdCt.js";import"./svgIconContainer-UQoXiqqi.js";import"./useBaseUiId-PcdFyC4z.js";import"./InternalBackdrop-DPnwzQoA.js";import"./composite-ccxieFdd.js";import"./index-9pMWT7G3.js";import"./index-DzOZG8PU.js";import"./index-D9aYyFSG.js";import"./useEventCallback-Clkkc761.js";import"./SkeletonBar-UJ2KeehE.js";import"./LoadingCell-Dno7fuWS.js";import"./ColumnConfigDialog-B_gwSPYs.js";import"./DraggableList-DY59ynwG.js";import"./search-DZcjiMHC.js";import"./Input-CNxC7OWq.js";import"./useControlled-D50eYvCK.js";import"./Button-CVZ672ZX.js";import"./small-cross-DlQAt_1X.js";import"./ActionButton-Dr-SMGaZ.js";import"./Checkbox-Cg9__Cns.js";import"./useValueChanged-DTUEgWiI.js";import"./CollapsiblePanel-CilVibKg.js";import"./MultiColumnSortDialog-BGs8lqlA.js";import"./MenuTrigger-BnrLP3Ax.js";import"./CompositeItem-DUyVPGMH.js";import"./ToolbarRootContext-DulRS7Xf.js";import"./getDisabledMountTransitionStyles-Dp3MlQN6.js";import"./getPseudoElementBounds-Dd9XPosA.js";import"./chevron-down-CIukKbVS.js";import"./index-3bphJVPw.js";import"./error-CeyqzC3E.js";import"./BaseCbacBanner-DQ04thLC.js";import"./makeExternalStore-BBNFskLs.js";import"./Tooltip-D_ARL5hn.js";import"./PopoverPopup-C66q4O0T.js";import"./debounce-CJrA9wux.js";import"./useOsdkClient-pPuF8Xca.js";import"./tick-Cof-csWx.js";import"./DropdownField-DsSXPUWR.js";import"./isEqual-RFLHgDQt.js";import"./withOsdkMetrics-B3WIkRHJ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
