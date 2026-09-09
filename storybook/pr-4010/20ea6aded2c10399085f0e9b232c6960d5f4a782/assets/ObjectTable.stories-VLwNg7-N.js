import{j as i}from"./iframe-CMVepAJE.js";import{O as p}from"./object-table-DrYoEV5F.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DlkbybLu.js";import"./preload-helper-B-pat0t1.js";import"./Table-D1LPpzIv.js";import"./index-DjkhfCfT.js";import"./Dialog-UkIf-Cia.js";import"./cross-Bt6SdNHm.js";import"./svgIconContainer-Bbnic8gm.js";import"./useBaseUiId-DzJi2twx.js";import"./InternalBackdrop-D5ExGecl.js";import"./composite-BNbUAYfg.js";import"./index-DFWQdO8O.js";import"./index-D8Snt0rf.js";import"./index-tAYlbVzq.js";import"./useEventCallback-BNdTIoO0.js";import"./SkeletonBar-DMdShgvr.js";import"./LoadingCell-B_jbOxSN.js";import"./ColumnConfigDialog-D1fIMUYr.js";import"./DraggableList-C5Ja6789.js";import"./search-ByupdJIi.js";import"./Input-BrboKIWX.js";import"./useControlled-BNdmAelW.js";import"./Button-Rom60jiD.js";import"./small-cross-Daxd_o57.js";import"./ActionButton-7uiQn5bN.js";import"./Checkbox-C1ZQPvyX.js";import"./useValueChanged-2qNB1H9S.js";import"./CollapsiblePanel-DRHJsQ_R.js";import"./MultiColumnSortDialog-BViHg8Kr.js";import"./MenuTrigger-HlrGbgAx.js";import"./CompositeItem-DR4WY-BM.js";import"./ToolbarRootContext-qvOmnhBt.js";import"./getDisabledMountTransitionStyles-DeWLLfFW.js";import"./getPseudoElementBounds-CLKaAdce.js";import"./chevron-down-DvYjBW4w.js";import"./index-18i-4mqz.js";import"./error-BP38p0Wz.js";import"./BaseCbacBanner-xwrxkHCM.js";import"./makeExternalStore-CylZcwCT.js";import"./Tooltip-CpbJ4M8Z.js";import"./PopoverPopup-Db5oD-HC.js";import"./debounce-DwOMz3I5.js";import"./useOsdkClient-9-M1ms6x.js";import"./tick-OGu8ycnQ.js";import"./DropdownField-B3BsKGIg.js";import"./isEqual-CqojoX74.js";import"./withOsdkMetrics-fhlMSJmK.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
