import{j as i}from"./iframe-vWRqqmX-.js";import{O as p}from"./object-table-804WIQTK.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BlSLDN5C.js";import"./preload-helper-rcEVmD-8.js";import"./Table-BIMKxZRx.js";import"./index-CHsUa7_U.js";import"./Dialog-DWTZ77Co.js";import"./cross-BIItHWLB.js";import"./svgIconContainer-B_rEL3k8.js";import"./useBaseUiId-DqVebmsP.js";import"./InternalBackdrop-Bj_asFWJ.js";import"./composite-D97u5UoY.js";import"./index-CoSoVngB.js";import"./index-B1eqFRL5.js";import"./index-sVUrmcsW.js";import"./useEventCallback-DMVnoZ3z.js";import"./SkeletonBar-CqBoYZ8U.js";import"./LoadingCell-qD_P_fRR.js";import"./ColumnConfigDialog-yWt_y5TP.js";import"./DraggableList-ZdW5g8dr.js";import"./search-C9O70xSJ.js";import"./Input-CDZCyUSS.js";import"./useControlled-C4H7EWzs.js";import"./Button-C6bK3SUF.js";import"./small-cross-DgmUASg5.js";import"./ActionButton-BPD_E_Z-.js";import"./Checkbox-Bk6kGgLm.js";import"./useValueChanged-aefsk5NO.js";import"./CollapsiblePanel-2hkcDRMt.js";import"./MultiColumnSortDialog-B5Vn8yrA.js";import"./MenuTrigger-C65re9Vs.js";import"./CompositeItem-C9y1P_Q2.js";import"./ToolbarRootContext-DpnDbVh3.js";import"./getDisabledMountTransitionStyles-C2Knmcgg.js";import"./getPseudoElementBounds-B9pvaRUu.js";import"./chevron-down-CgEqRVri.js";import"./index-DzR_Swb2.js";import"./error-C1w4OL1G.js";import"./BaseCbacBanner-C-Vru3Z4.js";import"./makeExternalStore-D3utWwkK.js";import"./Tooltip-BADmUJIy.js";import"./PopoverPopup-D7-JPOKG.js";import"./debounce-UXxVW676.js";import"./useOsdkClient-B6lrTeDC.js";import"./tick-BtAbSo2V.js";import"./DropdownField-DfFvOzAq.js";import"./isEqual-DxBRoLuF.js";import"./withOsdkMetrics-CfKbJ4sV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
