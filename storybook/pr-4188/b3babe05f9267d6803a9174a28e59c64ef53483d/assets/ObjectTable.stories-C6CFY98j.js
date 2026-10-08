import{j as i}from"./iframe-Ds_0fUNG.js";import{O as p}from"./object-table-CDMrvtYv.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bw1iKuA9.js";import"./preload-helper-rl_3IysT.js";import"./Table-NV-Z6jrK.js";import"./index-CfHbFnsm.js";import"./Dialog-QtB8jaP-.js";import"./cross-CPIn0YCt.js";import"./svgIconContainer-Bnjtz_zA.js";import"./useBaseUiId-BTcKJi-m.js";import"./InternalBackdrop-DglM94TH.js";import"./composite-BQp92XLf.js";import"./index-B3M6RB_Y.js";import"./index-BcshOSPh.js";import"./index--pKFQ4Lz.js";import"./useEventCallback-Bj0Lmw5H.js";import"./SkeletonBar-L7SILJmc.js";import"./LoadingCell-CHvHj1gL.js";import"./ColumnConfigDialog-0chAKSCD.js";import"./DraggableList-C23oUVV2.js";import"./search-D8R0XkDu.js";import"./Input-DML-f9Nt.js";import"./useControlled-BJ5XCIhk.js";import"./Button-BIMxSH7M.js";import"./small-cross-Dz6lKUNI.js";import"./ActionButton-Bt69IyHY.js";import"./Checkbox-N-ofHEBa.js";import"./useValueChanged-DNt4iD_c.js";import"./CollapsiblePanel-aLSMls02.js";import"./MultiColumnSortDialog-CdsAFBTS.js";import"./MenuTrigger-B5iErPwW.js";import"./CompositeItem-Cd9-IsCw.js";import"./ToolbarRootContext-WaLBUvtM.js";import"./getDisabledMountTransitionStyles-Dx8Now2z.js";import"./getPseudoElementBounds-DMltA1Ta.js";import"./chevron-down-QYpALvW6.js";import"./index-Xp60VzFy.js";import"./error-BqmstoPM.js";import"./BaseCbacBanner-AJhvy395.js";import"./makeExternalStore-pijIp4DO.js";import"./Tooltip-C_aXZE6C.js";import"./PopoverPopup-ByN3B_TH.js";import"./debounce-Biv857Xj.js";import"./useOsdkClient-MZwKjimd.js";import"./tick-AwKzn_MI.js";import"./DropdownField-DsGQRL42.js";import"./isEqual-Cje0TKXT.js";import"./withOsdkMetrics-Bofw38ai.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
