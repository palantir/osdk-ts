import{j as i}from"./iframe-DlVDy023.js";import{O as p}from"./object-table-CPAm_TLy.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CGCPAlr4.js";import"./preload-helper-DJFhMTqE.js";import"./Table-j2_rfAjy.js";import"./index-B3fXiAQb.js";import"./Dialog-BGV1_4Fw.js";import"./cross-mcjuSBTc.js";import"./svgIconContainer-s-JQVLQ9.js";import"./useBaseUiId-BKw8YauT.js";import"./InternalBackdrop-D_CBn7dT.js";import"./composite-BLhg11U-.js";import"./index-LVqexgrH.js";import"./index-C3j1YyMW.js";import"./index-BjgwtoXC.js";import"./useEventCallback-SgtlW3mH.js";import"./SkeletonBar-B2rGYxr9.js";import"./LoadingCell-DOnLUlr2.js";import"./ColumnConfigDialog-CDGOT_Fh.js";import"./DraggableList-fs8A0IHu.js";import"./search-Dlo_g8mx.js";import"./Input-DaMbbLWO.js";import"./useControlled-Dii3KKCf.js";import"./Button-CPiBfc-M.js";import"./small-cross-yv-Uq6dQ.js";import"./ActionButton-B_l7y5Oe.js";import"./Checkbox-BbcpH0v_.js";import"./useValueChanged-LxRYviJx.js";import"./CollapsiblePanel-lLYHy2Fj.js";import"./MultiColumnSortDialog-qHU4Amng.js";import"./MenuTrigger-BJKqFBK7.js";import"./CompositeItem-CCYoAgW2.js";import"./ToolbarRootContext--DNvLQWo.js";import"./getDisabledMountTransitionStyles-Cn73GRue.js";import"./getPseudoElementBounds-BIvWT8t6.js";import"./chevron-down-CjY3inSa.js";import"./index-BzvLJ1CU.js";import"./error-DOacZup1.js";import"./BaseCbacBanner-ekdnej3L.js";import"./makeExternalStore-DF_bocEY.js";import"./Tooltip-bH5NED12.js";import"./PopoverPopup-Cv9ybNd5.js";import"./debounce-Hj0VluNc.js";import"./useOsdkClient-De-2KVrO.js";import"./tick-geEvKQPJ.js";import"./DropdownField-fDoWtAsS.js";import"./isEqual-BUPS7RB4.js";import"./withOsdkMetrics-zKe3req1.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
