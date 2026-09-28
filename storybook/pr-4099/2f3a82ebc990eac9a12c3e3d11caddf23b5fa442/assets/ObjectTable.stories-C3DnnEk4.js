import{j as i}from"./iframe-BDPC3MGU.js";import{O as p}from"./object-table-Bel4yIfS.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Eqdy-FSR.js";import"./preload-helper-DqLc1wpe.js";import"./Table-Dgr-gIm8.js";import"./index-wr-Wa-rJ.js";import"./Dialog-DTR1MYhK.js";import"./cross-DYURuHsA.js";import"./svgIconContainer-BbA1ZoWr.js";import"./useBaseUiId-98Vlp7TA.js";import"./InternalBackdrop-Cgbf8eQA.js";import"./composite-BmeraXkj.js";import"./index-BCVo02gU.js";import"./index--VX9rzYc.js";import"./index-BRzzcBKu.js";import"./useEventCallback-ButC9m8B.js";import"./SkeletonBar-CsWliIs4.js";import"./LoadingCell-Dqufu0HX.js";import"./ColumnConfigDialog-By9TyQEv.js";import"./DraggableList-DQNrHfSk.js";import"./search-CHOuY8gu.js";import"./Input-q3l62r8C.js";import"./useControlled-BH2-CGJ0.js";import"./Button-BuWPanNZ.js";import"./small-cross-Cmb1RV_x.js";import"./ActionButton-B2xYsKtl.js";import"./Checkbox-HciCFw3O.js";import"./useValueChanged-CMbbAfeq.js";import"./CollapsiblePanel-hce81KCR.js";import"./MultiColumnSortDialog-BWmVf4xL.js";import"./MenuTrigger-DYNmmqOz.js";import"./CompositeItem-Glk6Ljpg.js";import"./ToolbarRootContext-gDYw7M9I.js";import"./getDisabledMountTransitionStyles-Ca5SDU94.js";import"./getPseudoElementBounds-1wBk6-FK.js";import"./chevron-down-B2ocyj_k.js";import"./index-DH6huj2W.js";import"./error-BZbzk8xv.js";import"./BaseCbacBanner-BBCBr5LI.js";import"./makeExternalStore-zlVMHsWj.js";import"./Tooltip-B8W6XcXq.js";import"./PopoverPopup-Dx8llI49.js";import"./debounce-Dm3_movg.js";import"./useOsdkClient-D8d5JuS7.js";import"./tick-Csqr7cIl.js";import"./DropdownField-zGmV-Acf.js";import"./isEqual-C7uizYde.js";import"./withOsdkMetrics-Dge8_qYA.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
