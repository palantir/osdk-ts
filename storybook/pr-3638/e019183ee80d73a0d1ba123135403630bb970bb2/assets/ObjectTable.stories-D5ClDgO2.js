import{j as i}from"./iframe-BdrRBIvD.js";import{O as p}from"./object-table-Bp9ZPXwv.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BitKGKZC.js";import"./preload-helper-N4H8PUoz.js";import"./Table-Cba47QOv.js";import"./index-CyGaVN4-.js";import"./Dialog-BYZH3diU.js";import"./cross-D7w2_wJU.js";import"./svgIconContainer-BaNqItXx.js";import"./useBaseUiId-CaVqH5La.js";import"./InternalBackdrop-a6ksL_iS.js";import"./composite-AHJSpspS.js";import"./index-CeaTfT0R.js";import"./index-CKJSQvSH.js";import"./index-Pelcz0Jw.js";import"./useEventCallback-BVBEQazv.js";import"./SkeletonBar-DPxsnRRt.js";import"./LoadingCell-MwptuhCt.js";import"./ColumnConfigDialog-Cr79jsaD.js";import"./DraggableList-CZoJ12ek.js";import"./search-P7WA0n-i.js";import"./Input-Crry490_.js";import"./useControlled-jNQesOqe.js";import"./Button-C9phC2y1.js";import"./small-cross-CXbRHj9E.js";import"./ActionButton-B4tMIaGw.js";import"./Checkbox-ByIXHCwi.js";import"./useValueChanged-B8B2MLUf.js";import"./CollapsiblePanel-sFHX5HPm.js";import"./MultiColumnSortDialog-B9Hj3lBb.js";import"./MenuTrigger-BwOTrPip.js";import"./CompositeItem-DukmHiA_.js";import"./ToolbarRootContext-DgRaA1gf.js";import"./getDisabledMountTransitionStyles-Ci3H7Cv-.js";import"./getPseudoElementBounds-CLs6rES9.js";import"./chevron-down-JT0IhlWE.js";import"./index-CyfjPVR_.js";import"./error-DWKLqXS9.js";import"./BaseCbacBanner-DhNV4gSP.js";import"./makeExternalStore--cYtEdhQ.js";import"./Tooltip-uc0E4CK4.js";import"./PopoverPopup-BR5nJgsw.js";import"./debounce-Cz2uqvCU.js";import"./useOsdkClient-DqwdNOrg.js";import"./tick-C7LkjtSk.js";import"./DropdownField-C3dDcHKe.js";import"./isEqual-DatieH5_.js";import"./withOsdkMetrics-BJXn2F5H.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
