import{j as i}from"./iframe-DbQMorYR.js";import{O as p}from"./object-table-CuscO_G6.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-kVThueL4.js";import"./preload-helper-DES03_oL.js";import"./Table-CyQzIj_n.js";import"./index-CHOCnb0f.js";import"./Dialog-h-CcUbBk.js";import"./cross-CE7V7QeW.js";import"./svgIconContainer-Cwo2AziM.js";import"./useBaseUiId-CKJO2MlM.js";import"./InternalBackdrop-Buze4txO.js";import"./composite-BjHYFgsw.js";import"./index-DpVhWfLY.js";import"./index-C0C-Vl87.js";import"./index-Dkbx_AOS.js";import"./useEventCallback-DDVJcajp.js";import"./SkeletonBar-CHw8W08J.js";import"./LoadingCell-CCoYUe9Q.js";import"./ColumnConfigDialog-CNsz8uaI.js";import"./DraggableList-DMkvCqAL.js";import"./search-ChjdgZEs.js";import"./Input-Q-MRNWMg.js";import"./useControlled-DOgj4MtD.js";import"./Button-S-V8j-aZ.js";import"./small-cross-Cq5E9zQ8.js";import"./ActionButton-CMzKEzrG.js";import"./Checkbox-Cacl4mQ_.js";import"./useValueChanged-BH_8poyT.js";import"./CollapsiblePanel-_cTDz2Uo.js";import"./MultiColumnSortDialog-C66gKvlF.js";import"./MenuTrigger-BTpBscFq.js";import"./CompositeItem-DHvx_K1s.js";import"./ToolbarRootContext-D619hRph.js";import"./getDisabledMountTransitionStyles-T22xlpK-.js";import"./getPseudoElementBounds-CcW8NnN6.js";import"./chevron-down-CVwhtMCl.js";import"./index-CwvWt_bc.js";import"./error-CkRxITwV.js";import"./BaseCbacBanner-QNT9vg-p.js";import"./makeExternalStore-smBq6vy5.js";import"./Tooltip-DxJ5tz0m.js";import"./PopoverPopup-uiUnYz9Z.js";import"./debounce-DMgjlNzy.js";import"./useOsdkClient-3n3qj0TA.js";import"./tick-DtRotk-c.js";import"./DropdownField-DwSBz2YC.js";import"./isEqual-CVwS2TLN.js";import"./withOsdkMetrics-BpNcVo1X.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
