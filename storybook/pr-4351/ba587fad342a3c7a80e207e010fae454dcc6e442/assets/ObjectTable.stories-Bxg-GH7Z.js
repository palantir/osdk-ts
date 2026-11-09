import{j as i}from"./iframe-BCHKv9OM.js";import{O as p}from"./object-table-B9cXelKG.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-y56ioilP.js";import"./preload-helper-VdwPsvvy.js";import"./Table-CPWiRxme.js";import"./index-Bwt2nvxG.js";import"./Dialog-DDvBinru.js";import"./cross-2PepCGpt.js";import"./svgIconContainer-DyfXuRzr.js";import"./useBaseUiId-D9fN6cGs.js";import"./InternalBackdrop-C0GHdOIg.js";import"./composite-C-pKBr51.js";import"./index-BkIhD60u.js";import"./index-z0BP5rZZ.js";import"./index-DwHqoGtG.js";import"./useEventCallback-DEkx1Ulc.js";import"./SkeletonBar-B3WDYch4.js";import"./LoadingCell-tRarhgMa.js";import"./ColumnConfigDialog-BagXSypE.js";import"./DraggableList-Ck0dsNNP.js";import"./search-DF6xe5EC.js";import"./Input-sKzdlVIX.js";import"./useControlled-BHnn3yAy.js";import"./Button-C3RFGMgN.js";import"./small-cross-95SsO8Gt.js";import"./ActionButton-8LNq2ikE.js";import"./Checkbox-D_U5yD_5.js";import"./useValueChanged-C7KiF5LC.js";import"./CollapsiblePanel-BbSBPuZD.js";import"./MultiColumnSortDialog-0X8uCerL.js";import"./MenuTrigger-evJ21J4D.js";import"./CompositeItem-BMLR6r4a.js";import"./ToolbarRootContext-CwhQOyHm.js";import"./getDisabledMountTransitionStyles-5PmgAQkM.js";import"./getPseudoElementBounds-UEouzKLj.js";import"./chevron-down-BKy1nerW.js";import"./index-C5vlMEFw.js";import"./error-6YNMu2Ib.js";import"./BaseCbacBanner-Bi4Q6fdO.js";import"./makeExternalStore-CbzDxk6X.js";import"./Tooltip-DBSqCNw9.js";import"./isObject-BYugPURt.js";import"./debounce-CdYSIISE.js";import"./useOsdkClient-BaaChpHI.js";import"./tick-D35hPI0R.js";import"./DropdownField-Ce9UBfUI.js";import"./isEqual-BBtYZJe_.js";import"./_baseIsEqual-UBFzx4HI.js";import"./withOsdkMetrics-DIduflDc.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
