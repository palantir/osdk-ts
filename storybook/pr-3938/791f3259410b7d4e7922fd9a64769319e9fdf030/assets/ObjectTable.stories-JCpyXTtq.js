import{j as i}from"./iframe-ByH6cwcC.js";import{O as p}from"./object-table-vIIHUQVm.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BrR33hK_.js";import"./preload-helper-CTHNm7Zf.js";import"./Table-UkNmrvXR.js";import"./index-BffOjmGP.js";import"./Dialog-DPTNFvmX.js";import"./cross-CUNO9jlI.js";import"./svgIconContainer-C59hMuAg.js";import"./useBaseUiId-rCCQLDzE.js";import"./InternalBackdrop-BOvoVjdH.js";import"./composite-DsmzMxzf.js";import"./index-N0N9SzuH.js";import"./index-B9rySOnb.js";import"./index-DwSNPP4c.js";import"./useEventCallback-5-9ioIJ9.js";import"./SkeletonBar-DH4wpQvw.js";import"./LoadingCell-BHyVKnhe.js";import"./ColumnConfigDialog-CDpP6W2F.js";import"./DraggableList-nivrjWVF.js";import"./search-Do_ND450.js";import"./Input-BQqKdvxX.js";import"./useControlled-CiJux5fd.js";import"./Button-CPqebLlQ.js";import"./small-cross-Cax6JCvi.js";import"./ActionButton-CSu9cdVs.js";import"./Checkbox-B0BvBwx1.js";import"./useValueChanged-CR5RlyXy.js";import"./CollapsiblePanel-CxxueGOW.js";import"./MultiColumnSortDialog-BhxHso4-.js";import"./MenuTrigger-Da8FkEAr.js";import"./CompositeItem-BAQU7622.js";import"./ToolbarRootContext-BlxbtcnM.js";import"./getDisabledMountTransitionStyles-DT4C1Ry1.js";import"./getPseudoElementBounds-hG2SWQQo.js";import"./chevron-down-Dat11n9w.js";import"./index-OS6ALw7f.js";import"./error-Di2DxefB.js";import"./BaseCbacBanner-BXetmlOi.js";import"./makeExternalStore-DxT_f6S6.js";import"./Tooltip-D62erufF.js";import"./PopoverPopup-BCbNGrfj.js";import"./debounce-CGwOWugm.js";import"./useOsdkClient-BInBbtyf.js";import"./tick-abIWECA9.js";import"./DropdownField-BLckusfA.js";import"./isEqual-t7rQRmdo.js";import"./withOsdkMetrics-DSJJhCCa.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
