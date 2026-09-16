import{j as i}from"./iframe-C1CKZi3d.js";import{O as p}from"./object-table-DcBSNvfE.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cea-h-q6.js";import"./preload-helper-CjKKPLuI.js";import"./Table-D3YAmEYz.js";import"./index-22zkYmfP.js";import"./Dialog-dWuSBYO5.js";import"./cross-DgfaXAP1.js";import"./svgIconContainer-5vjXCpW3.js";import"./useBaseUiId-kwR7401f.js";import"./InternalBackdrop-CQIAa_cE.js";import"./composite-BHop2ulG.js";import"./index-BaUESoup.js";import"./index-TnDt-8d7.js";import"./index-Z2n3umrQ.js";import"./useEventCallback-BlUSuMKe.js";import"./SkeletonBar-DxYmE8LG.js";import"./LoadingCell-3i-RVTzi.js";import"./ColumnConfigDialog-B8E6aKW_.js";import"./DraggableList-IaJYya1-.js";import"./search-Crhz7pqe.js";import"./Input-B9v9dpXG.js";import"./useControlled-DsloswUn.js";import"./Button-C8GCJke3.js";import"./small-cross-HkAOyTJK.js";import"./ActionButton-fTBY13Di.js";import"./Checkbox-y9WdOHPb.js";import"./useValueChanged-CDUxAEZl.js";import"./CollapsiblePanel-DEPs9Vux.js";import"./MultiColumnSortDialog-Biocbc61.js";import"./MenuTrigger-BuXfTXAg.js";import"./CompositeItem-D6jDCgAH.js";import"./ToolbarRootContext-DaCQoKRW.js";import"./getDisabledMountTransitionStyles-BEchivte.js";import"./getPseudoElementBounds-BNheb4Iy.js";import"./chevron-down-x4h-9kMe.js";import"./index-Bxl9BKgt.js";import"./error-CvIXlX6i.js";import"./BaseCbacBanner-as2b2fdQ.js";import"./makeExternalStore-B-NF9qcV.js";import"./Tooltip-D_3BkBEK.js";import"./PopoverPopup-CDFsG2BZ.js";import"./debounce-D14wviNn.js";import"./useOsdkClient-CZN2Sm0O.js";import"./tick-Bf2DRJjf.js";import"./DropdownField-CnUC2D2t.js";import"./isEqual-DOxjg893.js";import"./withOsdkMetrics-DM8OHQYr.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
