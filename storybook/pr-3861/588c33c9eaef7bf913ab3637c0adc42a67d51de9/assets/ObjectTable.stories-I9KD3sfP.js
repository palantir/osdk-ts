import{j as i}from"./iframe-CBwUUQtW.js";import{O as p}from"./object-table-0xaWUqlZ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CjqbH4vy.js";import"./preload-helper-CFw_NFcA.js";import"./Table-YGzxKRr5.js";import"./index-cQY6v_um.js";import"./Dialog-B9ReEXqN.js";import"./cross-4fv-Jmha.js";import"./svgIconContainer-Cf3n3CxU.js";import"./useBaseUiId-C9meW85R.js";import"./InternalBackdrop-B-FIOdBL.js";import"./composite-Dosig-Z_.js";import"./index-CpJqyn27.js";import"./index-BfNyjIxY.js";import"./index-Ksij_gkC.js";import"./useEventCallback-BfuBJmbG.js";import"./SkeletonBar-9Y4IZJxt.js";import"./LoadingCell-CZBNP2l0.js";import"./ColumnConfigDialog-ClqQ-I_W.js";import"./DraggableList-PFJqvioG.js";import"./search-D4D4eQBI.js";import"./Input-DGlls_dE.js";import"./useControlled-BpJFCpdY.js";import"./Button-Q3-mVk17.js";import"./small-cross-C_J5UAfw.js";import"./ActionButton-DEThs8fs.js";import"./Checkbox-D2Numq26.js";import"./useValueChanged-CeBJINfY.js";import"./CollapsiblePanel-DWrNNlRd.js";import"./MultiColumnSortDialog-DNPh0R2X.js";import"./MenuTrigger-COi8sKvB.js";import"./CompositeItem-BY3ILgBs.js";import"./ToolbarRootContext-B7OOeP9B.js";import"./getDisabledMountTransitionStyles-l20B6Iy6.js";import"./getPseudoElementBounds-Cl6OXwcO.js";import"./chevron-down-CnjRqozX.js";import"./index-cR5viBYS.js";import"./error-BOVvrWvG.js";import"./BaseCbacBanner-D1P6qnD8.js";import"./makeExternalStore-Cmk4ZnMJ.js";import"./Tooltip-DJVEFLTT.js";import"./PopoverPopup-DR1yzW4I.js";import"./debounce-DZNhRaBF.js";import"./useOsdkClient-BNMZFRkx.js";import"./tick-Cug9VCpy.js";import"./DropdownField-CndbXRIy.js";import"./isEqual-E6ni_c_2.js";import"./withOsdkMetrics-BnrNdVzl.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
