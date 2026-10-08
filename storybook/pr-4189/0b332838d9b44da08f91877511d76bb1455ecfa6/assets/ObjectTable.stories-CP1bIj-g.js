import{j as i}from"./iframe-D2-93i0D.js";import{O as p}from"./object-table-CU4ocIYo.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dh1EUPyS.js";import"./preload-helper-B5ioDAdF.js";import"./Table-Bz-Xnftt.js";import"./index-ZkzuTgCa.js";import"./Dialog-DDW4FXfg.js";import"./cross-XZbp8X1U.js";import"./svgIconContainer-C_WiUj7c.js";import"./useBaseUiId-O9oPLbry.js";import"./InternalBackdrop-giWMz8bK.js";import"./composite-D2489evg.js";import"./index-CouUEHg5.js";import"./index-C9V5vUYP.js";import"./index-CjjifVq9.js";import"./useEventCallback-CQR4vsZ1.js";import"./SkeletonBar-DVMts2Iv.js";import"./LoadingCell-NTlntxTv.js";import"./ColumnConfigDialog-BDuwqKar.js";import"./DraggableList-CfVTqu85.js";import"./search-e1zERwtP.js";import"./Input-BVsduhCe.js";import"./useControlled-BJsQhtpL.js";import"./Button-BaohMVfV.js";import"./small-cross-C99vIUVl.js";import"./ActionButton-cXi4c_mc.js";import"./Checkbox-Cj96SasP.js";import"./useValueChanged-D3T-RyJH.js";import"./CollapsiblePanel-4um4tHTf.js";import"./MultiColumnSortDialog-CAOIkBtn.js";import"./MenuTrigger-DqtW1DFU.js";import"./CompositeItem-D9rSr-Un.js";import"./ToolbarRootContext-CbCHGeOF.js";import"./getDisabledMountTransitionStyles-Decrs7np.js";import"./getPseudoElementBounds-Cn4hAtui.js";import"./chevron-down-vlgCUq2z.js";import"./index-bBa3vPeF.js";import"./error-C7BXsrlL.js";import"./BaseCbacBanner-Bc06xCFN.js";import"./makeExternalStore-D-FYFBVJ.js";import"./Tooltip-CZ0MFvfo.js";import"./PopoverPopup-DnrWzk-e.js";import"./debounce-DPYgmBq5.js";import"./useOsdkClient-D3LzfKgy.js";import"./tick-BlPreKBC.js";import"./DropdownField-BCaiyljy.js";import"./isEqual-DtAP17iv.js";import"./withOsdkMetrics-B-CCJubj.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
