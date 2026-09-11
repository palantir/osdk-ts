import{j as i}from"./iframe-CUvi9RCV.js";import{O as p}from"./object-table-D10wKq82.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-LdtOR9jP.js";import"./preload-helper-GqmuGD1I.js";import"./Table-BMWdrlsV.js";import"./index-Z2IvR_t6.js";import"./Dialog-zDUgWSJT.js";import"./cross-BswioSgU.js";import"./svgIconContainer-BiFTkGqE.js";import"./useBaseUiId-D-6poyG0.js";import"./InternalBackdrop-CIMfO5y8.js";import"./composite-BnXsOcTt.js";import"./index-COsMkiIW.js";import"./index-Cn-BGg-w.js";import"./index-B95PX811.js";import"./useEventCallback-CG8tP2N4.js";import"./SkeletonBar-r6LXjWHA.js";import"./LoadingCell-D-T0QMYd.js";import"./ColumnConfigDialog-DwaQQ7uZ.js";import"./DraggableList-CWWzUIUD.js";import"./search-DljzsUQ1.js";import"./Input-gjvR1UgW.js";import"./useControlled-CGiicoDL.js";import"./Button-DN8sAUol.js";import"./small-cross-ojaGdjNx.js";import"./ActionButton-DDSl0ABg.js";import"./Checkbox-DWypi4-C.js";import"./useValueChanged-CVvpPlQH.js";import"./CollapsiblePanel-DqM5CzQ9.js";import"./MultiColumnSortDialog-BXSs3FYu.js";import"./MenuTrigger-TKN9rOm7.js";import"./CompositeItem-BOheTBRU.js";import"./ToolbarRootContext-B6eeQfxM.js";import"./getDisabledMountTransitionStyles-DyOCVWdJ.js";import"./getPseudoElementBounds-Cvp7B3_m.js";import"./chevron-down-DG0ceM1k.js";import"./index-fPjfyI_6.js";import"./error-nPJR1KaJ.js";import"./BaseCbacBanner-DiGXVIg-.js";import"./makeExternalStore-CRTDTaWN.js";import"./Tooltip-_cTW755E.js";import"./PopoverPopup-BbwvRm54.js";import"./debounce-Cv2dODgM.js";import"./useOsdkClient-BgZD9TyH.js";import"./tick-CHlHLJu2.js";import"./DropdownField-B-lq3-Qt.js";import"./isEqual-CsYmmgrt.js";import"./withOsdkMetrics-B0yRqBdO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
