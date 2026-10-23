import{j as i}from"./iframe-ue9bX3Iv.js";import{O as p}from"./object-table-KCp5vh9P.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BqOOEpUL.js";import"./preload-helper-C3Wvffv1.js";import"./Table-D0BTKDV8.js";import"./index-IcNnhROh.js";import"./Dialog-NaWY0jNp.js";import"./cross-U1hVGtzD.js";import"./svgIconContainer-BZgEOtnq.js";import"./useBaseUiId-cGzETZoK.js";import"./InternalBackdrop-Ceyi0BuR.js";import"./composite-BhWJUn6b.js";import"./index-DPlEBhdl.js";import"./index-5SMiFPmq.js";import"./index-Cy72BvTv.js";import"./useEventCallback-BH9nt9-5.js";import"./SkeletonBar-CC6lvuY_.js";import"./LoadingCell-CTnp4K_r.js";import"./ColumnConfigDialog-D_g6csXz.js";import"./DraggableList-DegT0gSb.js";import"./search-Bid3yFjL.js";import"./Input-CRAGtCFZ.js";import"./useControlled-yUsh7HNb.js";import"./Button-C0tazeAS.js";import"./small-cross-MncGjMz9.js";import"./ActionButton-D10j_WSJ.js";import"./Checkbox-CdvIj1p1.js";import"./useValueChanged-CKuEXHBa.js";import"./CollapsiblePanel-BJsJTyii.js";import"./MultiColumnSortDialog-Bond2QVr.js";import"./MenuTrigger-Bv5RRTT5.js";import"./CompositeItem-IO3qOv2K.js";import"./ToolbarRootContext-C5ppRaBq.js";import"./getDisabledMountTransitionStyles-CPFTS2y4.js";import"./getPseudoElementBounds-Vjgoy1VG.js";import"./chevron-down-97bKRBG5.js";import"./index-BXYXQLwX.js";import"./error-Bv66Pch2.js";import"./BaseCbacBanner-DZrAsfYB.js";import"./makeExternalStore-DCh8aI2s.js";import"./Tooltip-CMtE3LQx.js";import"./PopoverPopup-Bxk_FVO9.js";import"./debounce-BCtPQVA_.js";import"./useOsdkClient-nZ1mPAY3.js";import"./tick-DxPhMwVy.js";import"./DropdownField-B5Tdlyhu.js";import"./isEqual-f521m5zt.js";import"./withOsdkMetrics-DwrnzR-_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
