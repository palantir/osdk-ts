import{j as i}from"./iframe-BE_0juHq.js";import{O as p}from"./object-table-ak3ru7OW.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CjGByPiV.js";import"./preload-helper-DGE0hYRw.js";import"./Table-Wr5ik1U4.js";import"./index-CZ-KL49G.js";import"./Dialog-DWHvidN5.js";import"./cross-CUPzUyHl.js";import"./svgIconContainer-DTm7GTT3.js";import"./useBaseUiId-CyOhG5WV.js";import"./InternalBackdrop-BS79ekQH.js";import"./composite-BMP3afRS.js";import"./index-YpmziLMg.js";import"./index-DPXYEgdz.js";import"./index-Coaj1lHt.js";import"./useEventCallback-uz51Y23w.js";import"./SkeletonBar-CTy64fAf.js";import"./LoadingCell-Z9AAzKS9.js";import"./ColumnConfigDialog-2qzHZsqu.js";import"./DraggableList-DTSHp1Ii.js";import"./search-BJgzsAei.js";import"./Input-eCN9724n.js";import"./useControlled-C0uJcmsm.js";import"./Button-DoRYjZBD.js";import"./small-cross-CZg5giIs.js";import"./ActionButton-BijjX4lr.js";import"./Checkbox-TSfcgPuk.js";import"./useValueChanged-Dso7iA8F.js";import"./CollapsiblePanel-SwrmgAr0.js";import"./MultiColumnSortDialog-DP8lPfib.js";import"./MenuTrigger-vvTXbVH5.js";import"./CompositeItem-CAbmT9yz.js";import"./ToolbarRootContext-Bo_aNGPT.js";import"./getDisabledMountTransitionStyles-DBPmoJix.js";import"./getPseudoElementBounds-DIHB9vsV.js";import"./chevron-down-Cem4vbB0.js";import"./index-CVu1gKpb.js";import"./error-BpU3JwpA.js";import"./BaseCbacBanner-DNS9oBIc.js";import"./makeExternalStore-nfAmPwlH.js";import"./Tooltip-Bs9C1rJp.js";import"./PopoverPopup-DlcEpqfX.js";import"./debounce-Crg_S_Lg.js";import"./useOsdkClient-C3FxVITg.js";import"./tick-FutLlINL.js";import"./DropdownField-Dhkja8wq.js";import"./isEqual-CMnP8-CM.js";import"./withOsdkMetrics-CLNWKIq7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
