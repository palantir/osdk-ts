import{j as i}from"./iframe-CWeddnom.js";import{O as p}from"./object-table-Cmk1Tq7o.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DF3MyxQN.js";import"./preload-helper-P6cBfe2q.js";import"./Table-CAg7JBCr.js";import"./index-Ce_LLk-c.js";import"./Dialog-DmJOQXeH.js";import"./cross-Dfng7QTU.js";import"./svgIconContainer-DmSfLyH4.js";import"./useBaseUiId-BHqcFBZd.js";import"./InternalBackdrop-CUe8mTus.js";import"./composite-4vKCxbin.js";import"./index-C-EhxOhv.js";import"./index-DmTK8ivk.js";import"./index-BKOWYi9Q.js";import"./useEventCallback-BLR7QFGQ.js";import"./SkeletonBar-DSJtFa11.js";import"./LoadingCell-DyoT1BNV.js";import"./ColumnConfigDialog-D4S5CB4u.js";import"./DraggableList-CJQgDYL-.js";import"./search-DgtO9tzy.js";import"./Input-DKw_pk-9.js";import"./useControlled-D25GPjW5.js";import"./Button-B3SaH4FN.js";import"./small-cross-BRS5cwBI.js";import"./ActionButton-lh-w21Ih.js";import"./Checkbox-DnottsQR.js";import"./useValueChanged-D1MsbkTY.js";import"./CollapsiblePanel-11i6tH5E.js";import"./MultiColumnSortDialog-DNGEJFI2.js";import"./MenuTrigger-D0XdkPwu.js";import"./CompositeItem-cY4WW7Zc.js";import"./ToolbarRootContext-Dr7NuLF0.js";import"./getDisabledMountTransitionStyles-CiLe7hHe.js";import"./getPseudoElementBounds-Gi24AHc2.js";import"./chevron-down-KrLWmTY_.js";import"./index-J0u8aPtF.js";import"./error-B2dkz28B.js";import"./BaseCbacBanner-HikvfUlP.js";import"./makeExternalStore-Cr_BtxbS.js";import"./Tooltip-CUH0BAfU.js";import"./PopoverPopup-CZL41Qwp.js";import"./debounce-COR7M_m6.js";import"./useOsdkClient-CkY_R6LW.js";import"./tick-nc1mWgQb.js";import"./DropdownField-BPGrCOqN.js";import"./isEqual-BOrxupAe.js";import"./withOsdkMetrics-DJ5t4kKo.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
