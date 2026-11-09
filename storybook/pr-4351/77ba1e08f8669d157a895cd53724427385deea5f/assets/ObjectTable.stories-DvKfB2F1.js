import{j as i}from"./iframe-D3hBsnsj.js";import{O as p}from"./object-table-BDCVUGn6.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C-ohEKR1.js";import"./preload-helper-DMLOvsmI.js";import"./Table-u1lWsm55.js";import"./index-BFoG3y9f.js";import"./Dialog-CuB9xgJ9.js";import"./cross-zcrYkWBY.js";import"./svgIconContainer-Bz0YpGKi.js";import"./useBaseUiId-Bk-faTDV.js";import"./InternalBackdrop-CS-KNpxJ.js";import"./composite-DWlrqv2G.js";import"./index-CCkpr9rO.js";import"./index-BPny8RHi.js";import"./index-CeAiM1qG.js";import"./useEventCallback-BP_wGY7x.js";import"./SkeletonBar-DI0g9AHe.js";import"./LoadingCell-CT7wzQLK.js";import"./ColumnConfigDialog-w0Tnxbhj.js";import"./DraggableList-BBuYe0yT.js";import"./search-CE7lhKVr.js";import"./Input-DbDZgezU.js";import"./useControlled-D75sOh0K.js";import"./Button-Z7wlB8te.js";import"./small-cross-BH03RGEV.js";import"./ActionButton-P3mRJLVa.js";import"./Checkbox-Cna2c8lA.js";import"./useValueChanged-Dbp_U3FV.js";import"./CollapsiblePanel-By1TCkBA.js";import"./MultiColumnSortDialog-l7mW_WED.js";import"./MenuTrigger-DwCPrNRY.js";import"./CompositeItem-DxaSaYkw.js";import"./ToolbarRootContext-CMXlPgPk.js";import"./getDisabledMountTransitionStyles-DsHQCkew.js";import"./getPseudoElementBounds-BXFF9d0t.js";import"./chevron-down-i4CyxBDw.js";import"./index-DzDp982c.js";import"./error-BUxN-ftl.js";import"./BaseCbacBanner-DSSobXcA.js";import"./makeExternalStore-CKN6mP8s.js";import"./Tooltip-BF8YE5eC.js";import"./isObject-DTGaRAh3.js";import"./debounce-4gosawj0.js";import"./useOsdkClient-CSiMh-gG.js";import"./tick-X_jDyEUZ.js";import"./DropdownField-DgWMbQ5Q.js";import"./isEqual-B7i9BrOq.js";import"./_baseIsEqual-D3i4A-oD.js";import"./withOsdkMetrics-CQ22kB-k.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
