import{j as i}from"./iframe-EsVd8uKr.js";import{O as p}from"./object-table-CVwpOI-3.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-4zsgkWKy.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DwIVPlkr.js";import"./index-BGqGRh_w.js";import"./Dialog-DGNCDGE1.js";import"./cross-BAb-KGA7.js";import"./svgIconContainer-CKoutHCt.js";import"./useBaseUiId-MN2jXq2W.js";import"./InternalBackdrop-BJfdLHLT.js";import"./composite-1IP-k403.js";import"./index-Dk_BL0rE.js";import"./index-BIk1hOdK.js";import"./index-B6Ums3yK.js";import"./useEventCallback-wffioqZZ.js";import"./SkeletonBar-mr59Hpvz.js";import"./LoadingCell-URVgcuw-.js";import"./ColumnConfigDialog-6L7UVeRK.js";import"./DraggableList-DI_EZ-AX.js";import"./search-D3m2bIkp.js";import"./Input-n0yDacSG.js";import"./useControlled-D9mCn6KG.js";import"./isEqual-ChaQSh95.js";import"./isObject-CzveNGjM.js";import"./Button-CN-ZsKSm.js";import"./ActionButton-ByslPckg.js";import"./Checkbox-H7yuK3U6.js";import"./useValueChanged-D9Chzcta.js";import"./CollapsiblePanel-BddaWApP.js";import"./MultiColumnSortDialog-nOGxT1KZ.js";import"./MenuTrigger-CZ5pywSw.js";import"./CompositeItem-aLBC2g8K.js";import"./ToolbarRootContext-Bq44IorR.js";import"./getDisabledMountTransitionStyles-DdBlRsOn.js";import"./getPseudoElementBounds-D9GjUDAo.js";import"./chevron-down-DFflXKhs.js";import"./index-BSoSJ7XO.js";import"./error-DWSN8l-7.js";import"./BaseCbacBanner-1et35qbL.js";import"./makeExternalStore-BhrsvHlw.js";import"./Tooltip-Bmgkzn1B.js";import"./PopoverPopup-Bxyq7tkW.js";import"./toNumber-BLNqaA0s.js";import"./useOsdkClient-CcauODOu.js";import"./tick-BHhwfOu2.js";import"./DropdownField-Cl_tjCSy.js";import"./withOsdkMetrics-D6Z_3e9u.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
