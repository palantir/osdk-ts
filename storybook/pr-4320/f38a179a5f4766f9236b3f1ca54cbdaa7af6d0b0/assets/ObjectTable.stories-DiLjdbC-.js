import{j as i}from"./iframe-DvvsknHZ.js";import{O as p}from"./object-table-B7Fjhpk3.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BRuAqF2O.js";import"./preload-helper-B7RcIo-x.js";import"./Table-CDrZK7oT.js";import"./index-BXq-npjw.js";import"./Dialog-DN7kteIN.js";import"./cross-CVayjJ6n.js";import"./svgIconContainer-B68gmxzG.js";import"./useBaseUiId-pUFvyVHu.js";import"./InternalBackdrop-8CXRVLpP.js";import"./composite-B7vL0viI.js";import"./index-BvLG983R.js";import"./index-B-EIevQb.js";import"./index-CjvFBH5-.js";import"./useEventCallback-CnE_RJva.js";import"./SkeletonBar-Bi99HG7c.js";import"./LoadingCell-BADy_T3j.js";import"./ColumnConfigDialog-dMBAE_Bg.js";import"./DraggableList-CB5et2oc.js";import"./search-DO24WHTI.js";import"./Input-BoS4yQSc.js";import"./useControlled-DdoeZPFa.js";import"./Button-D89LqMeP.js";import"./small-cross-CjoP5etI.js";import"./ActionButton-DPMqraix.js";import"./Checkbox-CRkJSNAJ.js";import"./useValueChanged-C8_UfD93.js";import"./CollapsiblePanel-Chc1gEI_.js";import"./MultiColumnSortDialog-CYLBLJyV.js";import"./MenuTrigger-Dhoyxi7v.js";import"./CompositeItem-CPdzs_zJ.js";import"./ToolbarRootContext-wkwm_H2V.js";import"./getDisabledMountTransitionStyles-Ndk95izG.js";import"./getPseudoElementBounds-CZDJgWkH.js";import"./chevron-down-C_1zArjr.js";import"./index-5sndl28g.js";import"./error-b08krvJC.js";import"./BaseCbacBanner-CFgS8zqR.js";import"./makeExternalStore-tEc9bJ3H.js";import"./Tooltip-BFA62Jc4.js";import"./PopoverPopup-CUfcT_az.js";import"./debounce-7jKtScuE.js";import"./useOsdkClient-COXkAQJS.js";import"./tick-DLmYlJNm.js";import"./DropdownField-keYRULb0.js";import"./isEqual-D7-eQiR0.js";import"./withOsdkMetrics-DvI-Ja_4.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
