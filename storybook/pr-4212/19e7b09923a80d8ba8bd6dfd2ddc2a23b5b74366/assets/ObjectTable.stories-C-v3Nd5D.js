import{j as i}from"./iframe-BSB0HYWK.js";import{O as p}from"./object-table-BWVBwQxB.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BM8GEaVv.js";import"./preload-helper-BkFYvt7D.js";import"./Table-DzUVH6T3.js";import"./index-CFn7NuDF.js";import"./Dialog-B_ZKv57J.js";import"./cross-CyBS2Nke.js";import"./svgIconContainer-ZqmkZwCg.js";import"./useBaseUiId-DOYgZcYk.js";import"./InternalBackdrop-rCZWLdBO.js";import"./composite-DrFNuPAr.js";import"./index-qi5mcdT7.js";import"./index-UxDU_lnD.js";import"./index-BWL2KDwg.js";import"./useEventCallback-BmJuJRN8.js";import"./SkeletonBar-AS4gHbaK.js";import"./LoadingCell-D2hxsOA-.js";import"./ColumnConfigDialog-B22nyHE9.js";import"./DraggableList-CZTlQJRm.js";import"./search-DVQNznbm.js";import"./Input-BwaAEQhC.js";import"./useControlled-CPd31jrj.js";import"./Button-odXi-ust.js";import"./small-cross-xl9eyWoT.js";import"./ActionButton-SFqgFBPz.js";import"./Checkbox-CNUTcBu6.js";import"./useValueChanged-DEyO1HnO.js";import"./CollapsiblePanel-BKaGtf_t.js";import"./MultiColumnSortDialog-Dn9jhLxM.js";import"./MenuTrigger-DMz9UZ0B.js";import"./CompositeItem-DFUc4zP3.js";import"./ToolbarRootContext-BHLo6WQV.js";import"./getDisabledMountTransitionStyles-MdauVsir.js";import"./getPseudoElementBounds-DO90Z8uF.js";import"./chevron-down-eX4f9a69.js";import"./index-DF12onFH.js";import"./error-Bf4UPDqQ.js";import"./BaseCbacBanner-DY1hopzF.js";import"./makeExternalStore-dBNRhzI_.js";import"./Tooltip-BcbU3cUH.js";import"./PopoverPopup-D5lvrcxC.js";import"./debounce-CV5acG61.js";import"./useOsdkClient-fF8P9Svw.js";import"./tick-MzeZ9_PK.js";import"./DropdownField-t0KVkBHv.js";import"./isEqual-CMA1ePV8.js";import"./withOsdkMetrics-BSqN_NUg.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
