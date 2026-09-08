import{j as i}from"./iframe-lO6oHnL4.js";import{O as p}from"./object-table-9DuCQ3cd.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B2RNUspY.js";import"./preload-helper-CZ1zKWtp.js";import"./Table-DMY1ZxT7.js";import"./index-Dl6F1U12.js";import"./Dialog-BmnLqCjA.js";import"./cross-CmTyvcmm.js";import"./svgIconContainer-BCDfPS-8.js";import"./useBaseUiId-B846_agE.js";import"./InternalBackdrop-CRBsd0Rp.js";import"./composite-BjZ2VOoR.js";import"./index-D1QV3ytK.js";import"./index-DwP6FR90.js";import"./index-BxwWnAcj.js";import"./useEventCallback-KTIDuvyR.js";import"./SkeletonBar-C2FZeoWT.js";import"./LoadingCell-CgqmsXgw.js";import"./ColumnConfigDialog-e8Nvt7tr.js";import"./DraggableList-DGwYVxk8.js";import"./search-BNOG_dw_.js";import"./Input-oxwV_krW.js";import"./useControlled-D27zJnZ2.js";import"./Button-8GX9Y-dN.js";import"./small-cross-BcxRCy93.js";import"./ActionButton-O8N4TA40.js";import"./Checkbox-BKHMpGsH.js";import"./useValueChanged-Cwy5ekip.js";import"./CollapsiblePanel-CYfUcVRr.js";import"./MultiColumnSortDialog-nvRpfudt.js";import"./MenuTrigger-DXR1k6sj.js";import"./CompositeItem-FdcQgDtf.js";import"./ToolbarRootContext-BfcKDhBA.js";import"./getDisabledMountTransitionStyles-Cx8i-UAD.js";import"./getPseudoElementBounds-CicDtyQT.js";import"./chevron-down-0zZDUaq4.js";import"./index-Cx18vdAy.js";import"./error-CA5mje1x.js";import"./BaseCbacBanner-IhJ9we9x.js";import"./makeExternalStore-CjtvZY1y.js";import"./Tooltip-BlvnSvUU.js";import"./PopoverPopup-ci5-n8v2.js";import"./debounce-CgoayCyT.js";import"./useOsdkClient-DHPHVa2B.js";import"./tick-xT1qICzH.js";import"./DropdownField-Db4HRbpT.js";import"./isEqual-GLgBae2P.js";import"./withOsdkMetrics-BoEX6J3t.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
