import{j as i}from"./iframe-DpkDs-j9.js";import{O as p}from"./object-table-qHXZVdv7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CSyPzAxA.js";import"./preload-helper-BJT4uFVz.js";import"./Table-M8rJDnV8.js";import"./index-BfXl5P7F.js";import"./Dialog-CFkLUvdo.js";import"./cross-CySzb61z.js";import"./svgIconContainer-0YWxOZfe.js";import"./useBaseUiId-BRApLhFH.js";import"./InternalBackdrop-DC1ctXr5.js";import"./composite-CYXI2UHT.js";import"./index-CXFl5eQh.js";import"./index-g8PO-kx8.js";import"./index-NMIlAdCq.js";import"./useEventCallback-BPE_ThAx.js";import"./SkeletonBar-CxtJcPP9.js";import"./LoadingCell-DaxbBC-P.js";import"./ColumnConfigDialog-Ca3Me8kg.js";import"./DraggableList-Bt-2hyGV.js";import"./search-9Dh1YH6c.js";import"./Input-xEESwrVF.js";import"./useControlled-Z-gfVngv.js";import"./Button-DUyzdMzu.js";import"./small-cross-TQik36_V.js";import"./ActionButton-CMt3pcys.js";import"./Checkbox-ClD25Fhc.js";import"./useValueChanged-HHJBGoHs.js";import"./CollapsiblePanel-DEhHFVMb.js";import"./MultiColumnSortDialog-m5T-8CWC.js";import"./MenuTrigger-BwLriEBa.js";import"./CompositeItem-BWOALM-p.js";import"./ToolbarRootContext-BtylWzdM.js";import"./getDisabledMountTransitionStyles-CXfJ9VyR.js";import"./getPseudoElementBounds-BrH_UC6z.js";import"./chevron-down-_hw012xs.js";import"./index-tOaH1qey.js";import"./error-CJpmyc4X.js";import"./BaseCbacBanner-DrLRu2Wj.js";import"./makeExternalStore-DVFvu1DO.js";import"./Tooltip-D5NnoavJ.js";import"./PopoverPopup-4S9R5K2E.js";import"./debounce-D7fYvY9R.js";import"./useOsdkClient-CQh8Mqca.js";import"./tick-BPyaXYcz.js";import"./DropdownField-DHNplSVP.js";import"./isEqual-BF2u6U9o.js";import"./withOsdkMetrics-D7yY5fd-.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
