import{j as i}from"./iframe-SCQrgHSr.js";import{O as p}from"./object-table-B617jB-3.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-1y6eyjzc.js";import"./preload-helper-ruFAjrX8.js";import"./Table-DkDB8z-y.js";import"./index-BUtIlNP3.js";import"./Dialog-CXnN9hQo.js";import"./cross-RzKZrUkh.js";import"./svgIconContainer-PYczuJwB.js";import"./useBaseUiId-BR-Fy_C2.js";import"./InternalBackdrop-CVssRVAp.js";import"./composite-Dt5lUk_W.js";import"./index--0Ld1SF2.js";import"./index-w54i75Ov.js";import"./index-CT5e1oGB.js";import"./useEventCallback-C4za5yjU.js";import"./SkeletonBar-DuD90zQc.js";import"./LoadingCell-DgbcSV4w.js";import"./ColumnConfigDialog-DypaZEDp.js";import"./DraggableList-Dug4fsy0.js";import"./search-Dm4EdHL9.js";import"./Input-CnPO-APv.js";import"./useControlled-Cz7FsEHc.js";import"./Button-CuEtz6jx.js";import"./small-cross-Bw4zLqUD.js";import"./ActionButton-Czv-I_yU.js";import"./Checkbox-b815pw-1.js";import"./useValueChanged-B1QwrseW.js";import"./CollapsiblePanel-DkamSJ2Z.js";import"./MultiColumnSortDialog-BZC_LUEx.js";import"./MenuTrigger-DZ_gD7BR.js";import"./CompositeItem-Co12UxPz.js";import"./ToolbarRootContext-BfCeEs7c.js";import"./getDisabledMountTransitionStyles-BTvGlHNw.js";import"./getPseudoElementBounds-BmOO-M7r.js";import"./chevron-down-CgTNl4cy.js";import"./index-ZLSkTGBP.js";import"./error-bDXyKJC8.js";import"./BaseCbacBanner-pRZs5Dex.js";import"./makeExternalStore-CUOtWXW6.js";import"./Tooltip-BR8Gpg6Y.js";import"./PopoverPopup-Be5JEcOd.js";import"./debounce-BzGmHbO5.js";import"./useOsdkClient-osmLaNC1.js";import"./tick-D-DSVTdq.js";import"./DropdownField-C7QjeZet.js";import"./isEqual-tncELNRj.js";import"./withOsdkMetrics-tKMMAYTA.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
