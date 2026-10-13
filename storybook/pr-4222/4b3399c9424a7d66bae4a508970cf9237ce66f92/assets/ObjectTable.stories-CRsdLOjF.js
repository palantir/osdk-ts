import{j as i}from"./iframe-tVbcsjZa.js";import{O as p}from"./object-table-B0uQ2vYC.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BcuQyaf7.js";import"./preload-helper-y3mk_7AM.js";import"./Table-DJ3-rkk6.js";import"./index-BUwo4Wun.js";import"./Dialog-CA4eBZ3a.js";import"./cross-Cg8bwusU.js";import"./svgIconContainer-D6fQk_si.js";import"./useBaseUiId-DvMZwhQw.js";import"./InternalBackdrop-iKHycqz0.js";import"./composite-OrxFWVZn.js";import"./index-sjIEPV-q.js";import"./index-DRL_czfg.js";import"./index-BWfL3ztK.js";import"./useEventCallback-DPWvOD4-.js";import"./SkeletonBar-xgxIJ15e.js";import"./LoadingCell-BbnxGOil.js";import"./ColumnConfigDialog-CyjCyORM.js";import"./DraggableList-DaPP3yBB.js";import"./search-BhYP5RmD.js";import"./Input-CKwugJU4.js";import"./useControlled-SzLU43Qu.js";import"./Button-BsWA9Md6.js";import"./small-cross-DM3EA47X.js";import"./ActionButton-BiTy67hR.js";import"./Checkbox-BgvVvf8V.js";import"./useValueChanged-CcIn2mPz.js";import"./CollapsiblePanel-BUzPJH96.js";import"./MultiColumnSortDialog-D3Ds34Ko.js";import"./MenuTrigger-BZkIRRu0.js";import"./CompositeItem-G9QZyuPm.js";import"./ToolbarRootContext-BeKKodE4.js";import"./getDisabledMountTransitionStyles-BPk3yLY1.js";import"./getPseudoElementBounds-kLv_VCs0.js";import"./chevron-down-ADlv-Mhp.js";import"./index-CkH4TDjm.js";import"./error-e6srGYm1.js";import"./BaseCbacBanner-CL2sF9mr.js";import"./makeExternalStore-Bo5qeas1.js";import"./Tooltip-CHiDBImr.js";import"./PopoverPopup-DpPqupmM.js";import"./debounce-BpLWDfM1.js";import"./useOsdkClient-1rx9_4le.js";import"./tick-Bh3J60SL.js";import"./DropdownField-Bisnh0x5.js";import"./isEqual-CmNvlTDA.js";import"./withOsdkMetrics-LuX7zwcW.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
