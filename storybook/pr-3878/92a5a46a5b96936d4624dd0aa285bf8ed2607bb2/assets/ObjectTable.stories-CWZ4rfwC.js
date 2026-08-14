import{j as i}from"./iframe-vUigHa_R.js";import{O as p}from"./object-table-DGwgE45W.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CVGClxBr.js";import"./preload-helper-y4UwMW9A.js";import"./Table-C_3YDv9s.js";import"./index-D23DfkwD.js";import"./Dialog-DolWiMuS.js";import"./cross-4LijBnZ1.js";import"./svgIconContainer-B9kPsCJD.js";import"./useBaseUiId-B_Xr74Hh.js";import"./InternalBackdrop-wWroyLHr.js";import"./composite-B5_hjWtY.js";import"./index-M84BU-nW.js";import"./index-Bhvq4vDE.js";import"./index-BxUjSB8i.js";import"./useEventCallback-Df0Uw9vc.js";import"./SkeletonBar-w0o065Tr.js";import"./LoadingCell-BdCRpTF3.js";import"./ColumnConfigDialog-BpVTnDJZ.js";import"./DraggableList-CMXagTEH.js";import"./search-Du0pQ6pL.js";import"./Input-Ca0Q4NVt.js";import"./useControlled-7ZCh4KeY.js";import"./Button-B9LxW1HS.js";import"./small-cross-C7JwLoUr.js";import"./ActionButton-C98XASXJ.js";import"./Checkbox-BSEISqRZ.js";import"./useValueChanged-TqXgw_xj.js";import"./CollapsiblePanel-Dwu8tjuK.js";import"./MultiColumnSortDialog-Dvt2-75n.js";import"./MenuTrigger-CroGNNa4.js";import"./CompositeItem-N7hxfDs2.js";import"./ToolbarRootContext-hmB3Z2ti.js";import"./getDisabledMountTransitionStyles-FRxSr_Lg.js";import"./getPseudoElementBounds-BhLD9aHH.js";import"./chevron-down-Dk583wTX.js";import"./index-adjP72nR.js";import"./error-DkxPnmmW.js";import"./BaseCbacBanner-9KRL944L.js";import"./makeExternalStore-DzBHK_Wg.js";import"./Tooltip-TZFzUmuz.js";import"./PopoverPopup-B0Qqbtvx.js";import"./debounce-BibzVj7i.js";import"./useOsdkClient-oBZ78Nx2.js";import"./tick-Ci_qLFZl.js";import"./DropdownField-DfPQW3Lm.js";import"./isEqual-f0kfjnzR.js";import"./withOsdkMetrics-DO0ZWj9H.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
