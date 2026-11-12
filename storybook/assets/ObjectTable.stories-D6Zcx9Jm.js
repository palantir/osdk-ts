import{j as i}from"./iframe-qEFPpghE.js";import{O as p}from"./object-table-BHJ3czxR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B_1F0XKV.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C4yL4Qmh.js";import"./index-BH9ELRZv.js";import"./Dialog-dWZ9u7DQ.js";import"./cross-CrQI27cl.js";import"./svgIconContainer-CQknLjCX.js";import"./useBaseUiId-v_A1mAU8.js";import"./InternalBackdrop-D5rmKUjx.js";import"./composite-DEeYGE6i.js";import"./index-BYmDYJlP.js";import"./index-DW-XX4vU.js";import"./index-Dz-dXwVN.js";import"./useEventCallback-BYQDS9uj.js";import"./SkeletonBar-yJWTc5ft.js";import"./LoadingCell-B42bnXLv.js";import"./ColumnConfigDialog-CChypS3K.js";import"./DraggableList-CsnH7LBp.js";import"./search-D09RX6LY.js";import"./Input-BablyCOK.js";import"./useControlled-CzEkdiJb.js";import"./Button--WxUXUTJ.js";import"./small-cross-D0luzVMu.js";import"./ActionButton-Di4a-gre.js";import"./Checkbox-CawO4u45.js";import"./useValueChanged-hy1rwhTW.js";import"./CollapsiblePanel-D3XrjZdW.js";import"./MultiColumnSortDialog-Dj5WqPTW.js";import"./MenuTrigger-CSyK8zi4.js";import"./CompositeItem-HOTCeKr0.js";import"./ToolbarRootContext-mJyuSkMG.js";import"./getDisabledMountTransitionStyles-TORQ_bbl.js";import"./getPseudoElementBounds-D1gaCrRx.js";import"./chevron-down-BYYCeXTI.js";import"./index-BoodJoCF.js";import"./error-AR1tV96Q.js";import"./BaseCbacBanner-TLh3mHe1.js";import"./makeExternalStore-AlhYZ7re.js";import"./Tooltip-0QhHY8T6.js";import"./PopoverPopup-Cb7HfMf8.js";import"./Select-DLArSuaB.js";import"./useOsdkClient-Aa7m3fKW.js";import"./tick-DmViAXqM.js";import"./DropdownField-SZD2xT-o.js";import"./useDebouncedCallback-CLudjFmJ.js";import"./isEqual-hnu1wVCK.js";import"./_baseIsEqual-CsbRecuA.js";import"./stableSerialize-CmHN0ptm.js";import"./withOsdkMetrics-Ch_Qi-aF.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,Te={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
