import{j as i}from"./iframe-D4LVDAiJ.js";import{O as p}from"./object-table-D1_mVYyU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DMb43DLq.js";import"./preload-helper-BRiuw1tM.js";import"./Table-DOpeTxiX.js";import"./index-Doq37HVC.js";import"./Dialog-Bx_F1j1I.js";import"./cross-CrN1mHSM.js";import"./svgIconContainer-CKDcZSuW.js";import"./useBaseUiId-t0XnwFOX.js";import"./InternalBackdrop-BOzYgdF3.js";import"./composite-BgyxEEOk.js";import"./index-DgptZbMC.js";import"./index-9wm5pOXR.js";import"./index-BFnO8bnI.js";import"./useEventCallback-ecbQBYez.js";import"./SkeletonBar-MoCvVI88.js";import"./LoadingCell-H4ZHpqgi.js";import"./ColumnConfigDialog-D0Zpm4uY.js";import"./DraggableList-C--cWquz.js";import"./search-BWsEyD_y.js";import"./Input-Dus9QmGC.js";import"./useControlled-BSRYlGKN.js";import"./Button-De22pfKg.js";import"./small-cross-BGgjchjT.js";import"./ActionButton-hlHYq4Ql.js";import"./Checkbox-Nx_0sa1a.js";import"./useValueChanged-eXWosK3O.js";import"./CollapsiblePanel-D8e_JP8A.js";import"./MultiColumnSortDialog-BHIJoffJ.js";import"./MenuTrigger-Dm3yFkAm.js";import"./CompositeItem-BgdG338-.js";import"./ToolbarRootContext-VbrNfAOv.js";import"./getDisabledMountTransitionStyles-DHkhoqiG.js";import"./getPseudoElementBounds-BHzzAx7-.js";import"./chevron-down-DO0q0xd1.js";import"./index-CgV2ExFN.js";import"./error-B5872Opm.js";import"./BaseCbacBanner-C3Z3yFar.js";import"./makeExternalStore-CGuk3GA7.js";import"./Tooltip-1Df9hLxD.js";import"./PopoverPopup--885M2Lm.js";import"./debounce-B-C1jtyL.js";import"./useOsdkClient--x9hnGz1.js";import"./tick-Du1HMgdZ.js";import"./DropdownField-BuncSUDK.js";import"./isEqual-BPsbN3op.js";import"./withOsdkMetrics-ooLMpNFk.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
