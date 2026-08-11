import{j as i}from"./iframe-6a0axaYb.js";import{O as p}from"./object-table-ckLHDuUg.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-TvjjpnYM.js";import"./preload-helper-C65r43dF.js";import"./Table-Bp_iz_Lh.js";import"./index-Bx8WIjbQ.js";import"./Dialog-Dniq6lMf.js";import"./cross-ui5GjUpZ.js";import"./svgIconContainer-CaPxp0ph.js";import"./useBaseUiId-Cbq5nu5V.js";import"./InternalBackdrop-CCRxD5z3.js";import"./composite-C5OCHPh0.js";import"./index-BGOIdxxc.js";import"./index-lSA6E12E.js";import"./index-BtvGHLm_.js";import"./useEventCallback-BxS3_eQ_.js";import"./SkeletonBar-DXlHutjQ.js";import"./LoadingCell-Cp2o2IIh.js";import"./ColumnConfigDialog-BBQhTIyV.js";import"./DraggableList-CW8x0iH2.js";import"./search-BNwfslCq.js";import"./Input-DMbXSCc_.js";import"./useControlled-CjqN0_NF.js";import"./isEqual-56Gbp1Vh.js";import"./isObject-B29iDIAZ.js";import"./Button-De2gQHI6.js";import"./ActionButton-DrWqQcrB.js";import"./Checkbox-akOJqxna.js";import"./useValueChanged-C0Arb9yb.js";import"./CollapsiblePanel-DMUD5QcD.js";import"./MultiColumnSortDialog-C19AmYzX.js";import"./MenuTrigger-DfEaML1p.js";import"./CompositeItem-QPaHlaAE.js";import"./ToolbarRootContext-3aAm6U4A.js";import"./getDisabledMountTransitionStyles-CQcYSoK0.js";import"./getPseudoElementBounds-EVwwh6hp.js";import"./chevron-down-ZwgymyQM.js";import"./index-BaPDJwEJ.js";import"./error-ZufoUxds.js";import"./BaseCbacBanner-CYPhAEd2.js";import"./makeExternalStore-BIiPaBhV.js";import"./Tooltip-DRQfkytf.js";import"./PopoverPopup-B1YhPEAq.js";import"./toNumber-SIC4RXNP.js";import"./useOsdkClient-BFFz0Pdr.js";import"./tick-ChlBO6Ol.js";import"./DropdownField-BTkkJQzG.js";import"./withOsdkMetrics-DDxseQIl.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
