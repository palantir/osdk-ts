import{j as i}from"./iframe-3OlCtOnX.js";import{O as p}from"./object-table-BvyHghk7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Fo1TK6BA.js";import"./preload-helper-DmXfM5jO.js";import"./Table-WM1LRRuU.js";import"./index-yHmphh38.js";import"./Dialog-BnYZSNWW.js";import"./cross-BDST6L4k.js";import"./svgIconContainer-BDwLYbew.js";import"./useBaseUiId-DF4e_SYr.js";import"./InternalBackdrop-DdQOJpo0.js";import"./composite-U0WuYJlx.js";import"./index-BIyck5Eo.js";import"./index-Dkb2coF2.js";import"./index-ByPauzBu.js";import"./useEventCallback-D7je9L3S.js";import"./SkeletonBar-BXcGfT3d.js";import"./LoadingCell-BG8BLS5r.js";import"./ColumnConfigDialog-Chy4GVeW.js";import"./DraggableList-CVZrPSkM.js";import"./search-DDk_kDx9.js";import"./Input-Du0sMknh.js";import"./useControlled-D4KKpMBk.js";import"./Button-DvYWHdUE.js";import"./small-cross-Q6V4ucxv.js";import"./ActionButton-X9C3Amb_.js";import"./Checkbox-CFLZGIxk.js";import"./useValueChanged-BmFaeCuB.js";import"./CollapsiblePanel-Cq5Vusdc.js";import"./MultiColumnSortDialog-B613juMG.js";import"./MenuTrigger-BwhUQFuO.js";import"./CompositeItem-CpBBjcG8.js";import"./ToolbarRootContext-DhJDeVBv.js";import"./getDisabledMountTransitionStyles-BR9XCEFs.js";import"./getPseudoElementBounds-BX9nOk-V.js";import"./chevron-down-CgI6LlJc.js";import"./index-DLQ0415V.js";import"./error-CWwoWVCq.js";import"./BaseCbacBanner-C08fTxVd.js";import"./makeExternalStore-C_bh9nYT.js";import"./Tooltip-BN6uj7yR.js";import"./isObject-UhbsXXcU.js";import"./debounce-ger8MaPs.js";import"./useOsdkClient--TOQCL4r.js";import"./tick-JCXFlbLf.js";import"./DropdownField-BIODsSJB.js";import"./isEqual-CtwCO3Wt.js";import"./_baseIsEqual-Cx8-OPaz.js";import"./withOsdkMetrics-CFm1sTgg.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
