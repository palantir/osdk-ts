import{j as i}from"./iframe-C5plkjSh.js";import{O as p}from"./object-table-D-wd0Qcs.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BtocdWec.js";import"./preload-helper-D2IaZEKn.js";import"./Table-D55pI679.js";import"./index-D9wyEakh.js";import"./Dialog-CPktwRC6.js";import"./cross-qTcD5Byv.js";import"./svgIconContainer-EWLL2EhA.js";import"./useBaseUiId-V6kg8ls-.js";import"./InternalBackdrop-C5tJkjz5.js";import"./composite-BxJrl2yy.js";import"./index-D5BdYI2w.js";import"./index-DGSE155D.js";import"./index-BJLKwKUI.js";import"./useEventCallback-BPOfe5xL.js";import"./SkeletonBar-D7VOiuiY.js";import"./LoadingCell-Cl0-ex6e.js";import"./ColumnConfigDialog-DwlPTvTA.js";import"./DraggableList-DIIzQe75.js";import"./search-DBXUIzFs.js";import"./Input-B8vRDl86.js";import"./useControlled-XDmIyGCI.js";import"./Button-D-euGQeq.js";import"./small-cross-JHfhKmWd.js";import"./ActionButton-UWnXYNQ1.js";import"./Checkbox-CcXa3FW0.js";import"./useValueChanged-CCEYZLFM.js";import"./CollapsiblePanel-DkWAAq2A.js";import"./MultiColumnSortDialog-C1xQBoGS.js";import"./MenuTrigger-sBycFOGP.js";import"./CompositeItem-C0Ixb4m4.js";import"./ToolbarRootContext-BWxTlH90.js";import"./getDisabledMountTransitionStyles-BIiy187H.js";import"./getPseudoElementBounds-DyRvmShW.js";import"./chevron-down-DJkRQn8M.js";import"./index-EcGiAU7n.js";import"./error-BgKA35zl.js";import"./BaseCbacBanner-BdNxAHfp.js";import"./makeExternalStore-BinvBmxp.js";import"./Tooltip-B6v5wWAV.js";import"./PopoverPopup-Dk2YnyhM.js";import"./debounce-B_060YLv.js";import"./useOsdkClient-DVJH9yA4.js";import"./tick-BkRHkH2Y.js";import"./DropdownField-D24t9xbi.js";import"./isEqual-DS72OK34.js";import"./withOsdkMetrics-CfCFI9Ho.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
