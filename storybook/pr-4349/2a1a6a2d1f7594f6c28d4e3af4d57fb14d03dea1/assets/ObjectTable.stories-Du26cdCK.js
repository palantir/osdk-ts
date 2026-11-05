import{j as i}from"./iframe-_xCtEPM4.js";import{O as p}from"./object-table-CX2vqi2p.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-RY7BtavD.js";import"./preload-helper-BvkLr_T8.js";import"./Table-Bpb1awiB.js";import"./index-BBF2nMyv.js";import"./Dialog-DAIDfao_.js";import"./cross-YJjC_kdM.js";import"./svgIconContainer-5YMx1lyC.js";import"./useBaseUiId-qq3Q_R-A.js";import"./InternalBackdrop-Dhb2Gme1.js";import"./composite-RG9aVNdC.js";import"./index-Ch2OG5I0.js";import"./index-oRHr0Ey_.js";import"./index-Czl8XPIs.js";import"./useEventCallback-jAZccFQT.js";import"./SkeletonBar-BWH5Ax4a.js";import"./LoadingCell-wQaM50Dl.js";import"./ColumnConfigDialog-BJ2OMihb.js";import"./DraggableList-W2XCxLEj.js";import"./search-EgEnIgJy.js";import"./Input-CbxbAG1i.js";import"./useControlled-BqnjfWyt.js";import"./Button-B5hG9nBO.js";import"./small-cross-CbC-3xN6.js";import"./ActionButton-C2zs3wiy.js";import"./Checkbox-BSNrs3M6.js";import"./useValueChanged-MMHfjh9x.js";import"./CollapsiblePanel-ZHKipLnY.js";import"./MultiColumnSortDialog-CTjvt41u.js";import"./MenuTrigger-BDeOM6rc.js";import"./CompositeItem-C0afETt6.js";import"./ToolbarRootContext-B_pkS0jH.js";import"./getDisabledMountTransitionStyles-DbKz4kaQ.js";import"./getPseudoElementBounds-FFlb83uV.js";import"./chevron-down-Dgi1lUDW.js";import"./index-Dp_8qpaL.js";import"./error-CPk-KRIB.js";import"./BaseCbacBanner-9tAX29-P.js";import"./makeExternalStore-DP7fUFlc.js";import"./Tooltip-CRHJdF88.js";import"./isObject-BjXVlsmF.js";import"./debounce-BLKiEPm1.js";import"./useOsdkClient-CsHMVj33.js";import"./tick-BpxRmUp6.js";import"./DropdownField-DARaJilg.js";import"./isEqual-BODadTDI.js";import"./_baseIsEqual-CQEQ0Dmr.js";import"./withOsdkMetrics-Sswq0Wu_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
