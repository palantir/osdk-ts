import{j as i}from"./iframe-DBDT7cai.js";import{O as p}from"./object-table-DWATCIRa.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C1mEx6f1.js";import"./preload-helper-CZUIUplp.js";import"./Table-Cdi5X52U.js";import"./index-DNPTs4g2.js";import"./Dialog-Ddy2ySQe.js";import"./cross-DXxcDe7j.js";import"./svgIconContainer-DGCHmuI4.js";import"./useBaseUiId-PRKCGqGz.js";import"./InternalBackdrop-BF5e8bQ9.js";import"./composite-L0L9oW-4.js";import"./index-BsC2sM8x.js";import"./index-kRLOqZpZ.js";import"./index-DCbu_JVG.js";import"./useEventCallback-Dl-swTIN.js";import"./SkeletonBar-DkOilBCf.js";import"./LoadingCell-DXk9-iPx.js";import"./ColumnConfigDialog-CUUOeaZ7.js";import"./DraggableList-C-Djqrfn.js";import"./search-CWHw7Uqg.js";import"./Input-CitZWzLR.js";import"./useControlled-BkrcSri5.js";import"./Button-DP4lNjcp.js";import"./small-cross-DnW6JuIQ.js";import"./ActionButton-DWWhEIcJ.js";import"./Checkbox-CL3C-6Dk.js";import"./useValueChanged-IVDgNvAJ.js";import"./CollapsiblePanel-lWl1OUcH.js";import"./MultiColumnSortDialog-BurrW54K.js";import"./MenuTrigger-DFZTen_H.js";import"./CompositeItem-LxcE4aIz.js";import"./ToolbarRootContext-CsenKUBi.js";import"./getDisabledMountTransitionStyles-BrqcKlYq.js";import"./getPseudoElementBounds-Nk1mGNF0.js";import"./chevron-down-BPXQkSQg.js";import"./index-CBFMIrtK.js";import"./error-OvuTWF-e.js";import"./BaseCbacBanner-BRlz0IYZ.js";import"./makeExternalStore-CP2a49qE.js";import"./Tooltip-Dhugh288.js";import"./PopoverPopup-BgEfDDqS.js";import"./debounce-COvZkwXR.js";import"./useOsdkClient-zmFqX8ua.js";import"./tick-C4TGfFfS.js";import"./DropdownField-CCG2cNMr.js";import"./isEqual-CcV2w9Lh.js";import"./withOsdkMetrics-C04fN_3L.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
