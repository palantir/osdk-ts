import{j as i}from"./iframe-DGxn_FfA.js";import{O as p}from"./object-table-BxRemYk8.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BLAWxkNq.js";import"./preload-helper-K_1Peegk.js";import"./Table-CbxiFHKY.js";import"./index-DRUA9-Xo.js";import"./Dialog-jSwZKnpK.js";import"./cross-BbLFpAfM.js";import"./svgIconContainer-BTT_iTBU.js";import"./useBaseUiId-CmBmMESo.js";import"./InternalBackdrop-GnU91IOM.js";import"./composite-DsQ0vKV8.js";import"./index-Cn-ogudX.js";import"./index-C09U9z-b.js";import"./index-BM9tlzVi.js";import"./useEventCallback-DuO9QBbh.js";import"./SkeletonBar-CDppLlgJ.js";import"./LoadingCell-QjotfTLw.js";import"./ColumnConfigDialog-Bv7VfvsR.js";import"./DraggableList-CpRUxk29.js";import"./search-D7bJBEOM.js";import"./Input-vHhrLUUa.js";import"./useControlled-SGdv5sh_.js";import"./Button-dnprDbN8.js";import"./small-cross-kJ_hIE7y.js";import"./ActionButton-Can6ePob.js";import"./Checkbox-Bn2M37w9.js";import"./useValueChanged-DwzXRX5T.js";import"./CollapsiblePanel-DkNf_69s.js";import"./MultiColumnSortDialog-CtiTwMcM.js";import"./MenuTrigger-B96hJs3R.js";import"./CompositeItem-CqRwnn1g.js";import"./ToolbarRootContext-BvwYmpzB.js";import"./getDisabledMountTransitionStyles-Bg4xxQbV.js";import"./getPseudoElementBounds-C1aLo5q2.js";import"./chevron-down-kbFfOEdC.js";import"./index-BzK3-5ei.js";import"./error-GM-hvFd6.js";import"./BaseCbacBanner-BJef3Sds.js";import"./makeExternalStore-Bpd5p4CZ.js";import"./Tooltip-Jif4AIdv.js";import"./PopoverPopup-D6mETjM4.js";import"./debounce-CkaWxo8p.js";import"./useOsdkClient-qyzcppCx.js";import"./tick-Ddjt3-Xj.js";import"./DropdownField-CN6UkTVW.js";import"./isEqual-DDUfx3V0.js";import"./withOsdkMetrics-S3mu6MhE.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
