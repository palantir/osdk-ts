import{j as i}from"./iframe-DVYiR4EF.js";import{O as p}from"./object-table-sQKT1Hms.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-taq87l7Z.js";import"./preload-helper-Dxk87wO7.js";import"./Table-BWsLtIqg.js";import"./index-BHhu1kj6.js";import"./Dialog-D9t2Q_eT.js";import"./cross-Clyp6xFe.js";import"./svgIconContainer-DdXGKFJg.js";import"./useBaseUiId-zYEXD-mx.js";import"./InternalBackdrop-45RWgNJh.js";import"./composite-C7v8Qqey.js";import"./index-DIoaGE9P.js";import"./index-yOUNHIkz.js";import"./index-D7AKpZwx.js";import"./useEventCallback-CL7T-E8E.js";import"./SkeletonBar-DklFIqEo.js";import"./LoadingCell-9wE-_EeY.js";import"./ColumnConfigDialog-2cC7ZUXL.js";import"./DraggableList-BnidScZ4.js";import"./search-CYXYxyYM.js";import"./Input-DXhcExkR.js";import"./useControlled-DcB6TY6E.js";import"./Button-B_OVrsNR.js";import"./small-cross-Dlrwx8kU.js";import"./ActionButton-BPkJKo5R.js";import"./Checkbox-CuQ8P-mi.js";import"./useValueChanged-DGoAYXNJ.js";import"./CollapsiblePanel-CVyMq5pH.js";import"./MultiColumnSortDialog-DrZkFUz7.js";import"./MenuTrigger-CoIP7yCb.js";import"./CompositeItem-DR-oTCoP.js";import"./ToolbarRootContext-DQtyGnCu.js";import"./getDisabledMountTransitionStyles-DLwvsE1G.js";import"./getPseudoElementBounds-CjM1EGF3.js";import"./chevron-down-DS4rSc_R.js";import"./index-F6YJXidF.js";import"./error-BkP1c58R.js";import"./BaseCbacBanner-B0ujK9Fu.js";import"./makeExternalStore-CYe5TaAL.js";import"./Tooltip-B5IkKrvL.js";import"./PopoverPopup-DPI-Oc34.js";import"./debounce-Dh9coxFN.js";import"./useOsdkClient-IgD677I1.js";import"./tick-HHHCZX4A.js";import"./DropdownField-CbgRYZRX.js";import"./isEqual-CM-FwJhI.js";import"./withOsdkMetrics-B0MkRVBC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
