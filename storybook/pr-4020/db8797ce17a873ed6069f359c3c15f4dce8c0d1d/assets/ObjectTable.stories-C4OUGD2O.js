import{j as i}from"./iframe-xaYq_0YR.js";import{O as p}from"./object-table-AsjdrsJY.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CdjQ9nyz.js";import"./preload-helper-CtEamZCu.js";import"./Table-BtBCLADu.js";import"./index-BAZUgVLK.js";import"./Dialog-DjzaMP01.js";import"./cross-BYWrVYOR.js";import"./svgIconContainer-B7c-1n-U.js";import"./useBaseUiId-CuYx4u3b.js";import"./InternalBackdrop-DGDqVAbo.js";import"./composite-CLd-Xsnk.js";import"./index-CyyrZFiN.js";import"./index-DF2Gn0NH.js";import"./index-DP9PCb3S.js";import"./useEventCallback-PLoii0z9.js";import"./SkeletonBar-DOvs9Ogk.js";import"./LoadingCell-Dr03zqDl.js";import"./ColumnConfigDialog-8A_bgKtY.js";import"./DraggableList-BhkpGpNV.js";import"./search-CSNqrmY1.js";import"./Input-DH1br5He.js";import"./useControlled-Dxi7lg4n.js";import"./Button-DeJ4BDKP.js";import"./small-cross-CMj_rk0B.js";import"./ActionButton-Pylu-ep_.js";import"./Checkbox-_PBPSJCl.js";import"./useValueChanged-CXh9zAke.js";import"./CollapsiblePanel-DT_VkLtR.js";import"./MultiColumnSortDialog-BU0GAb_6.js";import"./MenuTrigger-DWCTdmWV.js";import"./CompositeItem-BRCxLN7a.js";import"./ToolbarRootContext-BsrWQvwk.js";import"./getDisabledMountTransitionStyles-CYDL5wfQ.js";import"./getPseudoElementBounds-CNTTaqKi.js";import"./chevron-down-C-g4LLea.js";import"./index-CnactCyz.js";import"./error-C61gPazY.js";import"./BaseCbacBanner-BMf-_ldK.js";import"./makeExternalStore-BQ-WZB7-.js";import"./Tooltip-CRRIRYeo.js";import"./PopoverPopup-KIkgahna.js";import"./debounce-MHGPLv4v.js";import"./useOsdkClient-SxgRcysC.js";import"./tick--__R7rUv.js";import"./DropdownField-Cy43Eyay.js";import"./isEqual-qRCnD2AV.js";import"./withOsdkMetrics-Cry6aqA_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
