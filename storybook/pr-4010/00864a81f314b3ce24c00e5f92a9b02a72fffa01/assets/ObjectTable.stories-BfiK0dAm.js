import{j as i}from"./iframe-CtRHQTYJ.js";import{O as p}from"./object-table-Co1YG3YU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BFOg8naQ.js";import"./preload-helper-fhfz86w0.js";import"./Table-DrC-r9x3.js";import"./index-riCZd5Ar.js";import"./Dialog-BgLm7Z_4.js";import"./cross-DEABcOeY.js";import"./svgIconContainer-CnTR-ACc.js";import"./useBaseUiId-qkDK2XTS.js";import"./InternalBackdrop-CWaOdvE-.js";import"./composite-DuXOIKmO.js";import"./index-Fr7QusuU.js";import"./index-pqaS_ebL.js";import"./index-yCAZ2DAg.js";import"./useEventCallback-BIhF7inU.js";import"./SkeletonBar-DvxbY3ok.js";import"./LoadingCell-Dj6cXJnK.js";import"./ColumnConfigDialog-Biif9j1h.js";import"./DraggableList-B4zxhLs0.js";import"./search-BsaMQbW0.js";import"./Input-Civ7Ghzz.js";import"./useControlled-tah5fGcR.js";import"./Button-BqinPFLf.js";import"./small-cross-BpXb6yiG.js";import"./ActionButton-C_VR3Nw4.js";import"./Checkbox-DfxlNGGM.js";import"./useValueChanged-CKgwQ1DR.js";import"./CollapsiblePanel-WOW1j6DY.js";import"./MultiColumnSortDialog-Bi594TZ3.js";import"./MenuTrigger-B5CIkydJ.js";import"./CompositeItem-C6o3RrT-.js";import"./ToolbarRootContext-BObKP8Zm.js";import"./getDisabledMountTransitionStyles-fGFKvTKF.js";import"./getPseudoElementBounds-reWLTMCw.js";import"./chevron-down-DdzT4R3d.js";import"./index-BEVcgcQr.js";import"./error-7X7jIqwN.js";import"./BaseCbacBanner-JTAmQZoQ.js";import"./makeExternalStore-C5B573Wo.js";import"./Tooltip-C_nFk_LA.js";import"./PopoverPopup-DRdBjFn0.js";import"./debounce-BYWJGvRn.js";import"./useOsdkClient-Ws-Fn5Vr.js";import"./tick-D4iao2Tc.js";import"./DropdownField-BRYcu045.js";import"./isEqual-CLXUfsc9.js";import"./withOsdkMetrics-C6vvxMqe.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
