import{j as i}from"./iframe-O11Zq4F1.js";import{O as p}from"./object-table-gqoQGdoV.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dn0x9-R3.js";import"./preload-helper-DlwmVUfx.js";import"./Table-CPb-_s45.js";import"./index-JCX27zQ_.js";import"./Dialog-BThl-qtY.js";import"./cross-CgbZ2Lur.js";import"./svgIconContainer-niJASFYH.js";import"./useBaseUiId-Cu9t8yGo.js";import"./InternalBackdrop-Bmok97NN.js";import"./composite-CXM_4XfT.js";import"./index-D4Y1diP4.js";import"./index-CZs8bj4M.js";import"./index-BOHBCutb.js";import"./useEventCallback-BYLo8DjX.js";import"./SkeletonBar-Dbg84bcv.js";import"./LoadingCell-BKtbAGZ7.js";import"./ColumnConfigDialog-B6e2BpfX.js";import"./DraggableList-D4B0pU47.js";import"./search-Cj99250y.js";import"./Input-KS7sPzNw.js";import"./useControlled-B8YHL1ap.js";import"./Button-C08V9i3x.js";import"./small-cross-6TCOHgWS.js";import"./ActionButton-DwwC6gXd.js";import"./Checkbox-CxNgOj-_.js";import"./useValueChanged-D4OR8Hts.js";import"./CollapsiblePanel-DrNBsuTo.js";import"./MultiColumnSortDialog-aKqJlpMT.js";import"./MenuTrigger-BB0NeSp-.js";import"./CompositeItem-DLmG3BnZ.js";import"./ToolbarRootContext-tyPorBFs.js";import"./getDisabledMountTransitionStyles-BgcrLDKx.js";import"./getPseudoElementBounds-B3Xs9Miq.js";import"./chevron-down-vcyh2ihf.js";import"./index-BZM-lKSg.js";import"./error-Cg1niATE.js";import"./BaseCbacBanner-BSLN0WdA.js";import"./makeExternalStore-DxYkAphJ.js";import"./Tooltip-B3y41h0B.js";import"./PopoverPopup-DJWamGiS.js";import"./debounce-Dl6mTpZa.js";import"./useOsdkClient-BQdHiZjk.js";import"./tick-BEQDUDLL.js";import"./DropdownField-CiK_mq9u.js";import"./isEqual-BFwmF2pp.js";import"./withOsdkMetrics-5_bEfQA7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
