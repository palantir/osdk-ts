import{j as i}from"./iframe-DxLxeeBD.js";import{O as p}from"./object-table-CMvLi3AZ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DZxgPLc_.js";import"./preload-helper-B7NNhvj1.js";import"./Table-tPx8wRZ3.js";import"./index-DSM2Nmta.js";import"./Dialog-7K7ukV7q.js";import"./cross-Z_oHrjIu.js";import"./svgIconContainer-B6Cb5ptS.js";import"./useBaseUiId-BEhgV5tS.js";import"./InternalBackdrop-BCmz-HrC.js";import"./composite-D1h37npl.js";import"./index-CKLl7OmG.js";import"./index-CwXC3XWN.js";import"./index-DrEQLJsr.js";import"./useEventCallback-CpuXukHA.js";import"./SkeletonBar-D7VTi4iG.js";import"./LoadingCell-KAKJr_zN.js";import"./ColumnConfigDialog-mkBqXe8j.js";import"./DraggableList-Bd3tF3_V.js";import"./search-BuJ4cv5l.js";import"./Input-CFINwHSJ.js";import"./useControlled-DAtmThLw.js";import"./Button-BOLOFIFE.js";import"./small-cross-CSyQLWSj.js";import"./ActionButton-RMHpWcLm.js";import"./Checkbox-B6ZLBY2Y.js";import"./useValueChanged-O7ZxSsjb.js";import"./CollapsiblePanel-Cba0R3PM.js";import"./MultiColumnSortDialog-Bxz0LRc8.js";import"./MenuTrigger-jD7qjrb3.js";import"./CompositeItem-IyZEpEpW.js";import"./ToolbarRootContext-D7eywLcy.js";import"./getDisabledMountTransitionStyles-D_N2rHM3.js";import"./getPseudoElementBounds-CE6PXmfu.js";import"./chevron-down-DqhD85JK.js";import"./index-bdK4kZrJ.js";import"./error-B99vb4Y2.js";import"./BaseCbacBanner-DuWlNbRS.js";import"./makeExternalStore--BkPrjsd.js";import"./Tooltip-CIkzHwPr.js";import"./isObject-C1XnUciK.js";import"./debounce-DCzHGjeF.js";import"./useOsdkClient-85GRc1g4.js";import"./tick-DWAS6W14.js";import"./DropdownField-D7QCNisd.js";import"./isEqual-DiIZOB07.js";import"./_baseIsEqual-DM2pxxnH.js";import"./withOsdkMetrics-CJ_tbfj8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
