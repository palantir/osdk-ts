import{j as i}from"./iframe-BXxdMdy7.js";import{O as p}from"./object-table-CNkhkpH_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BEA1I0U5.js";import"./preload-helper-CzdKpJOA.js";import"./Table-C2G7jwul.js";import"./index-BD4H0T12.js";import"./Dialog-DRHeSsTe.js";import"./cross-IC7VDHMx.js";import"./svgIconContainer-Cxa1Q93_.js";import"./useBaseUiId-CWV-_dal.js";import"./InternalBackdrop-DlV4ogxj.js";import"./composite-D8jBtBX-.js";import"./index-CHD8ML8j.js";import"./index-Bnop5Sxj.js";import"./index-C1UlsJzQ.js";import"./useEventCallback-B6HVMKXw.js";import"./SkeletonBar-wwZqpQeQ.js";import"./LoadingCell-D2ajqtvp.js";import"./ColumnConfigDialog-CPQQZ7e-.js";import"./DraggableList-DFo1VqJq.js";import"./search-BBZ4C5jZ.js";import"./Input-CqSjd8ip.js";import"./useControlled-BP-Dvf9O.js";import"./Button--SPNZNsz.js";import"./small-cross-D4fjM2kv.js";import"./ActionButton-ILi5qKYn.js";import"./Checkbox-92mH5DWz.js";import"./useValueChanged-CsAG0mUs.js";import"./CollapsiblePanel-DueIufvn.js";import"./MultiColumnSortDialog-lOlNrxYg.js";import"./MenuTrigger-6So7C7lu.js";import"./CompositeItem-DWha1o73.js";import"./ToolbarRootContext-CIB517xc.js";import"./getDisabledMountTransitionStyles-DvVBqQ0t.js";import"./getPseudoElementBounds-By8aQjXl.js";import"./chevron-down-CYALw_cH.js";import"./index-DS2LC4Xn.js";import"./error-xwnNQugq.js";import"./BaseCbacBanner-CdVh5FXB.js";import"./makeExternalStore-BdrikpT6.js";import"./Tooltip-BqajjhQu.js";import"./isObject-FTD3a_NI.js";import"./debounce-B5PrGahk.js";import"./useOsdkClient-9NpW0bp7.js";import"./tick-BiqOz0tA.js";import"./DropdownField-B_3SnluF.js";import"./isEqual-LLnZruSB.js";import"./_baseIsEqual-DfBqWpeE.js";import"./withOsdkMetrics-LqvHVeDk.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
