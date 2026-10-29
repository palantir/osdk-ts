import{j as i}from"./iframe-BUAKey-b.js";import{O as p}from"./object-table-Btb1NcEU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CU5_845b.js";import"./preload-helper-8ONSILo-.js";import"./Table-v9Wirb0W.js";import"./index-C_XWLLnL.js";import"./Dialog-BklgDVkJ.js";import"./cross-DIKNxaCS.js";import"./svgIconContainer-R7EcdMMS.js";import"./useBaseUiId-C8Y4NjI4.js";import"./InternalBackdrop-DBedaqK2.js";import"./composite-B5eojsZ9.js";import"./index-0X59r-jL.js";import"./index-BVUJd12s.js";import"./index-BOoWcbcQ.js";import"./useEventCallback-DB_YKX3R.js";import"./SkeletonBar-DGJh5kUn.js";import"./LoadingCell-CcTUe4FR.js";import"./ColumnConfigDialog-DxUdtHxn.js";import"./DraggableList-WR8qNa8F.js";import"./search-BpOSeHLA.js";import"./Input-XOa6KB6m.js";import"./useControlled-DbbiJxEI.js";import"./Button-BiKKO9jr.js";import"./small-cross-CsGj_6WB.js";import"./ActionButton-DbyswEM_.js";import"./Checkbox-DnMOAb9A.js";import"./useValueChanged-CJ3EpaVI.js";import"./CollapsiblePanel-CJyeuEr2.js";import"./MultiColumnSortDialog-DDLKVEP1.js";import"./MenuTrigger-DWa9A5uG.js";import"./CompositeItem-D3aderF4.js";import"./ToolbarRootContext-CFT1kSbY.js";import"./getDisabledMountTransitionStyles-Ckfz4xV-.js";import"./getPseudoElementBounds-CEULC0ey.js";import"./chevron-down-B1umsHcu.js";import"./index-BxV1QnRa.js";import"./error-K70cMOqt.js";import"./BaseCbacBanner-BfuGodE8.js";import"./makeExternalStore-BoGnPwwN.js";import"./Tooltip-CAd6Fq_j.js";import"./PopoverPopup-B29eQZ64.js";import"./debounce-TB1Vypf1.js";import"./useOsdkClient-De86zlhT.js";import"./tick-DdBTMVZy.js";import"./DropdownField-wtjKeadJ.js";import"./isEqual-DKRu4Yn9.js";import"./withOsdkMetrics-CgOQk5ql.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
