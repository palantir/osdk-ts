import{j as i}from"./iframe-DaheMBBp.js";import{O as p}from"./object-table-0sFqeEZJ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CcLSXgJM.js";import"./preload-helper-ogFyI84a.js";import"./Table-DpONygi1.js";import"./index-C3YYW7Av.js";import"./Dialog-C5hKyCQA.js";import"./cross-Bby6H2na.js";import"./svgIconContainer-B_QTzoaQ.js";import"./useBaseUiId-BLpW-viY.js";import"./InternalBackdrop-DzAttt_G.js";import"./composite-BEI6HnWE.js";import"./index-C2SDphz6.js";import"./index-CLtbVn_M.js";import"./index-DtDtTYps.js";import"./useEventCallback-CiJJ5Lcl.js";import"./SkeletonBar-B6_gKLM1.js";import"./LoadingCell-DVEbX28s.js";import"./ColumnConfigDialog-DjiiQJEk.js";import"./DraggableList-BCVYLE2X.js";import"./search-BihmlxdI.js";import"./Input-Bz5EgY5O.js";import"./useControlled-Dcfr4NOJ.js";import"./Button-tOMZXVUq.js";import"./small-cross-Bh63RFvI.js";import"./ActionButton-_PEshhAj.js";import"./Checkbox-Ch8nntwM.js";import"./useValueChanged-CVQIhm4Y.js";import"./CollapsiblePanel-C_4v9b-F.js";import"./MultiColumnSortDialog-BZ-FEhQI.js";import"./MenuTrigger-BHmjH1Az.js";import"./CompositeItem-CkBG_Idz.js";import"./ToolbarRootContext-DE_UAbqs.js";import"./getDisabledMountTransitionStyles-BcwyM6JI.js";import"./getPseudoElementBounds-D-A00nd4.js";import"./chevron-down-MXNqVixY.js";import"./index-DtzQd4z2.js";import"./error-DQ7GCXA7.js";import"./BaseCbacBanner-CPCuX73W.js";import"./makeExternalStore-CWnObUAx.js";import"./Tooltip-Cxytr_Mg.js";import"./PopoverPopup-CsO8UfgH.js";import"./debounce-nEYC7Ov0.js";import"./useOsdkClient-CN5l5L7Y.js";import"./tick-ZFnf1M-z.js";import"./DropdownField-BLLMqEAK.js";import"./isEqual-Bbl_ErEq.js";import"./withOsdkMetrics-BZUZattY.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
