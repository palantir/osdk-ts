import{j as i}from"./iframe-CuiGp-Dt.js";import{O as p}from"./object-table-B7uvWIw8.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CohWELm4.js";import"./preload-helper-SMMH4kyg.js";import"./Table-CLWCpSj8.js";import"./index-CCPD4c0K.js";import"./Dialog-CMWSmxiX.js";import"./cross-CqlThrbh.js";import"./svgIconContainer-D37Tnjck.js";import"./useBaseUiId-dJ6_umyu.js";import"./InternalBackdrop-CCnfXl4v.js";import"./composite-FY18TxQF.js";import"./index-DDW4Db7g.js";import"./index-cGGpA_xq.js";import"./index-CAyJQP-c.js";import"./useEventCallback-D_nZVAgt.js";import"./SkeletonBar-DSIq-YUs.js";import"./LoadingCell-fEViiG9H.js";import"./ColumnConfigDialog-CxA8RUHD.js";import"./DraggableList-CSzrfUqu.js";import"./search-BVtYeN3h.js";import"./Input-CSq1qZza.js";import"./useControlled-BQU4YQHh.js";import"./isEqual-BAaGBZAh.js";import"./isObject-C4mu_IpK.js";import"./Button-CHWa0SfK.js";import"./ActionButton-rfmGaQx6.js";import"./Checkbox-aRNMXRNJ.js";import"./useValueChanged-BE6yVMji.js";import"./CollapsiblePanel-DGuJ-eTT.js";import"./MultiColumnSortDialog-B6im6FhY.js";import"./MenuTrigger-ChQxOJcf.js";import"./CompositeItem-O6Z2TQDF.js";import"./ToolbarRootContext-D7hBI_DT.js";import"./getDisabledMountTransitionStyles-DTh42eTs.js";import"./getPseudoElementBounds-Bszm0I6K.js";import"./chevron-down-5QkSvcpX.js";import"./index-D5uc652e.js";import"./error-DmBa7_lJ.js";import"./BaseCbacBanner-BkLaiyVr.js";import"./makeExternalStore-CNEnZVLO.js";import"./Tooltip-BwaQ8jJh.js";import"./PopoverPopup-Bz0Ltawp.js";import"./toNumber-C1CexwWJ.js";import"./useOsdkClient-BjfarLwZ.js";import"./tick-LANHlESD.js";import"./DropdownField-8Hpa1OBm.js";import"./withOsdkMetrics-IOnx9SUw.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
