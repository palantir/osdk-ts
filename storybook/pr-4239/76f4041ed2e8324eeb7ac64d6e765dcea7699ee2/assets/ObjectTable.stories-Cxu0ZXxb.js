import{j as i}from"./iframe-Cjxg6iNn.js";import{O as p}from"./object-table-Ix73Tn5r.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-1Uus1SwG.js";import"./preload-helper-Cxg0i_EX.js";import"./Table-K51QDYgB.js";import"./index-C7K0gZWV.js";import"./Dialog-CAFi7SxX.js";import"./cross-B4PrOhV3.js";import"./svgIconContainer-CZvHNGTg.js";import"./useBaseUiId-CnlnTXqN.js";import"./InternalBackdrop-CpFHocTv.js";import"./composite-BjxBGEhF.js";import"./index-CSSvwtgv.js";import"./index-CHnUBrda.js";import"./index-DFkF7jqg.js";import"./useEventCallback-uFwCyQiz.js";import"./SkeletonBar-X_1w1HPl.js";import"./LoadingCell-D4lWsGoh.js";import"./ColumnConfigDialog-rqNJs-Cu.js";import"./DraggableList-Bu2LxrUi.js";import"./search-DdTpXEBG.js";import"./Input-BQ8CO2Zx.js";import"./useControlled-DvCyj3QQ.js";import"./Button-DgwxYDBH.js";import"./small-cross-CigndlKD.js";import"./ActionButton-Du7n99Za.js";import"./Checkbox-BGT7pel6.js";import"./useValueChanged-DIJyPS0-.js";import"./CollapsiblePanel-O8dFOxez.js";import"./MultiColumnSortDialog-BqJ7lR5M.js";import"./MenuTrigger-DqSnQGCV.js";import"./CompositeItem-CNr4k86k.js";import"./ToolbarRootContext-DZlA8QGQ.js";import"./getDisabledMountTransitionStyles-BvfAIkEV.js";import"./getPseudoElementBounds-DMxNZQvA.js";import"./chevron-down-bhCi1ARW.js";import"./index-D5MyUYDa.js";import"./error-BXzFpfZ4.js";import"./BaseCbacBanner-DkxvvO3y.js";import"./makeExternalStore-CNSVvc9t.js";import"./Tooltip-B5VRIXsW.js";import"./PopoverPopup-BX8ciyA_.js";import"./debounce-C5Se__zz.js";import"./useOsdkClient-AZh_79x-.js";import"./tick-YxVbnp5T.js";import"./DropdownField-DkMSVjea.js";import"./isEqual-BR465NME.js";import"./withOsdkMetrics-BpvOsnqH.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
