import{j as i}from"./iframe-CxgAHdD_.js";import{O as p}from"./object-table-C7ixhBuT.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cu2_hY38.js";import"./preload-helper-DzzfBRd8.js";import"./Table-BmWVIdNB.js";import"./index-B6MbbFlT.js";import"./Dialog-Bf6796fg.js";import"./cross-EITDvaH2.js";import"./svgIconContainer-DjIuQsyB.js";import"./useBaseUiId-DFqoi1rW.js";import"./InternalBackdrop-Crloy16K.js";import"./composite-BPWDb3yK.js";import"./index-JYYI4S_c.js";import"./index-C5Y_pAhG.js";import"./index-D-vA12FC.js";import"./useEventCallback-sGjAmQeH.js";import"./SkeletonBar-MqJ57wAm.js";import"./LoadingCell-DmY90DU0.js";import"./ColumnConfigDialog-Bprdm90O.js";import"./DraggableList-fZ5NLtJS.js";import"./search-DdlCwk58.js";import"./Input-DwYZqNpM.js";import"./useControlled-UHTW7SDW.js";import"./Button-CKsUHdvx.js";import"./small-cross-B2gJHFCh.js";import"./ActionButton-Dckwg9He.js";import"./Checkbox-CfELijEt.js";import"./useValueChanged-BU8URL3f.js";import"./CollapsiblePanel-Dovlacux.js";import"./MultiColumnSortDialog-BIUGZ0oe.js";import"./MenuTrigger-DNZYutWE.js";import"./CompositeItem-rluq41vP.js";import"./ToolbarRootContext-CWhOmDUt.js";import"./getDisabledMountTransitionStyles-dFS3a40R.js";import"./getPseudoElementBounds-X4FvtDz7.js";import"./chevron-down-BzYJ5JTr.js";import"./index-8jFysFom.js";import"./error-BEe-jKvu.js";import"./BaseCbacBanner-DPhkvM0N.js";import"./makeExternalStore-BX4690TY.js";import"./Tooltip-Dr79PoMC.js";import"./PopoverPopup-0jo72wW7.js";import"./debounce-BfZR2tut.js";import"./useOsdkClient-ByyBiwZ3.js";import"./tick-DFLiPhFT.js";import"./DropdownField-DQTuRx4r.js";import"./isEqual-DErxsFmS.js";import"./withOsdkMetrics-CAH8aQvL.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
