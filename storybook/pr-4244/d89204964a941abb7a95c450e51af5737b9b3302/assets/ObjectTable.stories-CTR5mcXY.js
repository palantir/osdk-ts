import{j as i}from"./iframe-DmoMQzpD.js";import{O as p}from"./object-table-c_BNjK3P.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CYoW3j9V.js";import"./preload-helper-0xn3Nkw5.js";import"./Table-B64kdof3.js";import"./index-DPXokUby.js";import"./Dialog-VOeWPfhL.js";import"./cross-C9RHIJgp.js";import"./svgIconContainer-C0jxJ_1G.js";import"./useBaseUiId-BxnyJA2P.js";import"./InternalBackdrop-BsBLBzYe.js";import"./composite-RG7e36sI.js";import"./index-DUz5HI9G.js";import"./index-BXiJ_67x.js";import"./index-DmGCqnm3.js";import"./useEventCallback-FACcLVn-.js";import"./SkeletonBar-BhdoBlry.js";import"./LoadingCell-IS5e8M_0.js";import"./ColumnConfigDialog-DG9B0wa6.js";import"./DraggableList-BfGrODX6.js";import"./search-g9MHYdyd.js";import"./Input-CN7AavNu.js";import"./useControlled-C5PyKbe1.js";import"./Button-DawQ6LNI.js";import"./small-cross-B5QHLenC.js";import"./ActionButton-aUTPXbO1.js";import"./Checkbox-eJcqNJpv.js";import"./useValueChanged-BZ44jBcl.js";import"./CollapsiblePanel-C280Av3f.js";import"./MultiColumnSortDialog-1MmNuSWr.js";import"./MenuTrigger-DLJdCz9v.js";import"./CompositeItem-Drfjdgjy.js";import"./ToolbarRootContext-DyHioDsT.js";import"./getDisabledMountTransitionStyles-CJwnQjun.js";import"./getPseudoElementBounds-CFDjab3s.js";import"./chevron-down-vzowt2v5.js";import"./index-BM7Z1UL0.js";import"./error-CSsiItLy.js";import"./BaseCbacBanner-qjoLbGN0.js";import"./makeExternalStore-nzxHrE9v.js";import"./Tooltip-CjVXqByo.js";import"./PopoverPopup-7uRjXaTb.js";import"./debounce-CM9X_VMN.js";import"./useOsdkClient-ZQ1sGaOD.js";import"./tick-B2FvzgWn.js";import"./DropdownField-Cz44kW52.js";import"./isEqual-Df6IwIr9.js";import"./withOsdkMetrics-DGBLah1x.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
