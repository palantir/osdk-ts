import{j as i}from"./iframe-BNfKFTwQ.js";import{O as p}from"./object-table-CAaU72U0.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DE8dqK6P.js";import"./preload-helper-DcxZ55lb.js";import"./Table-Ckif-3P-.js";import"./index-DAFvvsPq.js";import"./Dialog-D2Rmh4sD.js";import"./cross-HH4wJUZw.js";import"./svgIconContainer-74CT1nDx.js";import"./useBaseUiId-CaxbLd3J.js";import"./InternalBackdrop-C7RqDA_u.js";import"./composite-BC8qF70z.js";import"./index-bdV_r4dW.js";import"./index-DXeJyDDl.js";import"./index-BzZahzsx.js";import"./useEventCallback-DEpsGOa3.js";import"./SkeletonBar-BTeWxew_.js";import"./LoadingCell-pHyTVOpD.js";import"./ColumnConfigDialog-BzhRSFeQ.js";import"./DraggableList-dyo4Og3o.js";import"./search-CwOYclZa.js";import"./Input-E0NWe4pC.js";import"./useControlled-Bu0wvWhJ.js";import"./Button-BnlzCXtA.js";import"./small-cross-D4OkGDzt.js";import"./ActionButton-CVvxUvnD.js";import"./Checkbox-EiVPEQxE.js";import"./useValueChanged-ozJJ4mlR.js";import"./CollapsiblePanel-gQlK7m0B.js";import"./MultiColumnSortDialog-BIxcpfsm.js";import"./MenuTrigger-qhvNYd-R.js";import"./CompositeItem-DTeaCrKp.js";import"./ToolbarRootContext-Bs5lRq7j.js";import"./getDisabledMountTransitionStyles-DlzHPGDE.js";import"./getPseudoElementBounds-DsMDFke9.js";import"./chevron-down-BMgxqa-T.js";import"./index-BYcE_cgH.js";import"./error-B-mlb-Oh.js";import"./BaseCbacBanner-DgfovizO.js";import"./makeExternalStore-CJ7wcEHs.js";import"./Tooltip-Co0bnHu5.js";import"./PopoverPopup-C_HbajH0.js";import"./debounce-Db6rsQgj.js";import"./useOsdkClient-CLsd_6uS.js";import"./tick-tCkSegKb.js";import"./DropdownField-5YYwz-Gk.js";import"./isEqual-B4kkNXI6.js";import"./withOsdkMetrics-aegz5loh.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
