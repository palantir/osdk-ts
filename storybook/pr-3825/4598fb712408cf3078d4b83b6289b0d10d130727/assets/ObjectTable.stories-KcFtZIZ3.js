import{j as i}from"./iframe-CC79wy_g.js";import{O as p}from"./object-table-CkXFhR3k.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DerlwncR.js";import"./preload-helper-z3GLkGAP.js";import"./Table-C_k6UNCH.js";import"./index-C33jCrCz.js";import"./Dialog-B4UEOGBl.js";import"./cross-ipWBqB8R.js";import"./svgIconContainer-BP6BFAr1.js";import"./useBaseUiId-DAg5RdyV.js";import"./InternalBackdrop-COWpBHnV.js";import"./composite-C0Vu5t_m.js";import"./index-BlLuABy0.js";import"./index-D3F-m5eM.js";import"./index-a8jLhQEi.js";import"./useEventCallback-DRddk0cy.js";import"./SkeletonBar-D7y69zaB.js";import"./LoadingCell-DTyZ0HHf.js";import"./ColumnConfigDialog-BJ-BrdIG.js";import"./DraggableList-DTV1vgC0.js";import"./search-C23-bZ6_.js";import"./Input-rDYGL68X.js";import"./useControlled-B01nKra1.js";import"./isEqual-7wD5lyOB.js";import"./isObject-CdHfoVRL.js";import"./Button-DuivO10i.js";import"./ActionButton-CNWw_rBN.js";import"./Checkbox-CsyxZdv8.js";import"./useValueChanged-CZBR_R6j.js";import"./CollapsiblePanel-DeEVZt2f.js";import"./MultiColumnSortDialog-Cne529o4.js";import"./MenuTrigger-D2yJRNIb.js";import"./CompositeItem-DFHw5T7g.js";import"./ToolbarRootContext-DHil5fps.js";import"./getDisabledMountTransitionStyles-Bvyp7A2k.js";import"./getPseudoElementBounds-BlO2I0zb.js";import"./chevron-down-v3_iAZgR.js";import"./index-HMtgFW0K.js";import"./error-wnTyEN9d.js";import"./BaseCbacBanner-B_HqEQWu.js";import"./makeExternalStore-CkX2v-LN.js";import"./Tooltip-qaomFd3j.js";import"./PopoverPopup-CcmMhYNQ.js";import"./toNumber-BhxvyPk1.js";import"./useOsdkClient-DVLj6L8G.js";import"./tick-Ctls74RV.js";import"./DropdownField-IS4psDxI.js";import"./withOsdkMetrics-EoR7xkLR.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
