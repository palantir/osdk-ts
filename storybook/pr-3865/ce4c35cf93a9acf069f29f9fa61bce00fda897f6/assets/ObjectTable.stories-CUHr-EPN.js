import{j as i}from"./iframe-K2lL5yZa.js";import{O as p}from"./object-table-CS1bFxKA.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D59HLu2V.js";import"./preload-helper-zTJR2VVu.js";import"./Table-OcecaMIa.js";import"./index-DG2QGQKO.js";import"./Dialog-_JApRq-4.js";import"./cross-BBzA-0FD.js";import"./svgIconContainer-LFdnXjkf.js";import"./useBaseUiId-6Oj8SlmF.js";import"./InternalBackdrop-CNYY8FxI.js";import"./composite-D2OvudN1.js";import"./index-DGaoMYYr.js";import"./index-DKnEAJke.js";import"./index-CRubwX-j.js";import"./useEventCallback-ChYCPbxs.js";import"./SkeletonBar-BK3M9MUf.js";import"./LoadingCell-CXbDE-rI.js";import"./ColumnConfigDialog-Bcg9LH1d.js";import"./DraggableList-DfG1W5nU.js";import"./search-uSNLpV_J.js";import"./Input-BCT2mqmz.js";import"./useControlled-BRKOM8iX.js";import"./Button-CMzjLHfg.js";import"./small-cross-DCCFeUk7.js";import"./ActionButton-C3BoQLQ_.js";import"./Checkbox-m7qFNS7J.js";import"./useValueChanged-Bv0S7zcp.js";import"./CollapsiblePanel-CcF9UvWu.js";import"./MultiColumnSortDialog-DsR5yjvH.js";import"./MenuTrigger-D5We7Y0z.js";import"./CompositeItem-QpacyHa1.js";import"./ToolbarRootContext-BNVauRMC.js";import"./getDisabledMountTransitionStyles-Bv2gYzkX.js";import"./getPseudoElementBounds-exFm21_L.js";import"./chevron-down-Ci68Jmqo.js";import"./index-CA4RuaSb.js";import"./error-CKG1y6S7.js";import"./BaseCbacBanner--6koxanl.js";import"./makeExternalStore-CHsvXMvU.js";import"./Tooltip-BG2GxZtn.js";import"./PopoverPopup-Bsp9DcIy.js";import"./debounce-BdkAtH3B.js";import"./useOsdkClient-rjGhEEeG.js";import"./tick-DbTSlkSl.js";import"./DropdownField-jrsNcXWF.js";import"./isEqual-CWNNtG3w.js";import"./withOsdkMetrics-BBCl75ZX.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
