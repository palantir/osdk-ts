import{j as i}from"./iframe-C-Tx6HWi.js";import{O as p}from"./object-table-Cf5MFxaA.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-GCVRWJpc.js";import"./preload-helper-DGI0evEf.js";import"./Table-CZHeyD1o.js";import"./index-D83LHBrr.js";import"./Dialog-r1D42-Ux.js";import"./cross-1eBPB5o6.js";import"./svgIconContainer-B0ue0tIb.js";import"./useBaseUiId-DmObUJIN.js";import"./InternalBackdrop-BUrvlczT.js";import"./composite-Cc9l10TW.js";import"./index-Br_EbTHZ.js";import"./index-BZnuPb4P.js";import"./index-lRbbaMu8.js";import"./useEventCallback-Q-L5djZk.js";import"./SkeletonBar-DoUtLMSm.js";import"./LoadingCell-BCjONaSV.js";import"./ColumnConfigDialog-giesQaTM.js";import"./DraggableList-Dcmngyiz.js";import"./search-DE-tamAG.js";import"./Input-CIq38a5l.js";import"./useControlled-OhGlr_am.js";import"./Button-C5vL1jQD.js";import"./small-cross-BepHp4Xz.js";import"./ActionButton-D-i2pL5W.js";import"./Checkbox-anlJ1-A9.js";import"./useValueChanged-Bp_MYZXj.js";import"./CollapsiblePanel-B_JSdAcK.js";import"./MultiColumnSortDialog-C7J6eDlO.js";import"./MenuTrigger-BD2OxlOZ.js";import"./CompositeItem-CqPIIJ4M.js";import"./ToolbarRootContext-V5A_2QeJ.js";import"./getDisabledMountTransitionStyles-nsF5d56f.js";import"./getPseudoElementBounds-DT0mYvTC.js";import"./chevron-down-Co2dXPpt.js";import"./index-C9VJ4ZCw.js";import"./error-DRRLvBR9.js";import"./BaseCbacBanner-B9_VmhHF.js";import"./makeExternalStore-Cp2BBvmZ.js";import"./Tooltip-BjpU_Knk.js";import"./PopoverPopup-C0yBx_TL.js";import"./debounce-D71Y9sGY.js";import"./useOsdkClient-C2VOm62_.js";import"./tick-BvEUUXuE.js";import"./DropdownField-CSrtnpGB.js";import"./isEqual-CRRlnMab.js";import"./withOsdkMetrics-XUw2KNZ5.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
