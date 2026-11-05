import{j as i}from"./iframe-Cj5xKvLA.js";import{O as p}from"./object-table-CXvKUv2q.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cw9ZEYkG.js";import"./preload-helper-D1DDVoTO.js";import"./Table-DGGWQjwY.js";import"./index-BBh4Z0mE.js";import"./Dialog-DtCOhCpV.js";import"./cross-BPLfBPr7.js";import"./svgIconContainer-DZYGEA7n.js";import"./useBaseUiId-n2QF9Zar.js";import"./InternalBackdrop-CYszCwsc.js";import"./composite-925znV2G.js";import"./index-DKWCLtL5.js";import"./index-Cb9jn425.js";import"./index-C38bxeqR.js";import"./useEventCallback-ByjKqT98.js";import"./SkeletonBar-_qu8whIi.js";import"./LoadingCell-BjLHFRuH.js";import"./ColumnConfigDialog-Cl9Wb7Yv.js";import"./DraggableList-DirU_-P4.js";import"./search-BmtS1KCs.js";import"./Input-Bffgvop9.js";import"./useControlled-D5krREh9.js";import"./Button-Be388aOs.js";import"./small-cross-CADTU48B.js";import"./ActionButton-D9I3daR7.js";import"./Checkbox-CySyhzbG.js";import"./useValueChanged-owXuKPN-.js";import"./CollapsiblePanel-Ba92qoA8.js";import"./MultiColumnSortDialog-B6sg6gM1.js";import"./MenuTrigger-D-QWhFP0.js";import"./CompositeItem-Cu_iWJpi.js";import"./ToolbarRootContext-DFdsIL16.js";import"./getDisabledMountTransitionStyles-BgDH7Jb-.js";import"./getPseudoElementBounds-DXisblbi.js";import"./chevron-down-C93yiICa.js";import"./index-oe6lplKX.js";import"./error-Bd1ykK4E.js";import"./BaseCbacBanner-ChRzr7gJ.js";import"./makeExternalStore-BZjXkoXh.js";import"./Tooltip-D09713yr.js";import"./isObject-DuNnO_hx.js";import"./debounce-D6aQMZp0.js";import"./useOsdkClient-oka-dZbc.js";import"./tick-Cf_flWq8.js";import"./DropdownField-5C_sV8hr.js";import"./isEqual-BNgPn_sy.js";import"./_baseIsEqual-DNNLc-1V.js";import"./withOsdkMetrics-Dl0Rlheu.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
