import{j as i}from"./iframe-DfNFuvd8.js";import{O as p}from"./object-table-Bx2po24i.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D5HJDenW.js";import"./preload-helper-B2A7KixS.js";import"./Table-BeuFq0M8.js";import"./index-hJ034l85.js";import"./Dialog-BMihQgwB.js";import"./cross-CBZgOvDJ.js";import"./svgIconContainer-B6TYwpfX.js";import"./useBaseUiId-Bo6GSES5.js";import"./InternalBackdrop-C_nhbKJU.js";import"./composite-D6AWaxnU.js";import"./index-DO9KDqDU.js";import"./index-Co9EvdKx.js";import"./index-DiD4EhSO.js";import"./useEventCallback-RjnLJur2.js";import"./SkeletonBar-CegOdRAd.js";import"./LoadingCell-DR1jrdbZ.js";import"./ColumnConfigDialog-By6deAV9.js";import"./DraggableList-CawOkJQL.js";import"./search-C0uD-Uv6.js";import"./Input-DQxNJVQ9.js";import"./useControlled-P4f8RlVJ.js";import"./Button-BqZDxH8m.js";import"./small-cross-BYYoKwWX.js";import"./ActionButton-JQL18lz7.js";import"./Checkbox-DhoSAxgA.js";import"./useValueChanged-wyGRNMGl.js";import"./CollapsiblePanel-DRB_PNPV.js";import"./MultiColumnSortDialog-BB2gxRpV.js";import"./MenuTrigger-CB1FawQ6.js";import"./CompositeItem-C2W2AWaC.js";import"./ToolbarRootContext-BppEIMJO.js";import"./getDisabledMountTransitionStyles-BIM2Nojc.js";import"./getPseudoElementBounds-DNQ_Lyqg.js";import"./chevron-down-C8YJ1kBl.js";import"./index-D4IU9xHw.js";import"./error-ThwmBgve.js";import"./BaseCbacBanner-Bxx78FaA.js";import"./makeExternalStore-DLzSgHee.js";import"./Tooltip-CDXk7Z_Y.js";import"./PopoverPopup-YOckH7SE.js";import"./debounce-R5M_pHII.js";import"./useOsdkClient-DrnSR9t9.js";import"./tick-zr2mL_AY.js";import"./DropdownField-Bzzr4tIT.js";import"./isEqual-BmWHZ7sE.js";import"./withOsdkMetrics-CJRcI3lK.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
