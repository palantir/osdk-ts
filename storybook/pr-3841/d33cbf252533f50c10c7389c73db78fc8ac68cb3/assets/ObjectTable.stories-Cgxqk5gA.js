import{j as i}from"./iframe-B8G1jItW.js";import{O as p}from"./object-table-k-UfENXm.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CA6pUMU9.js";import"./preload-helper-B1IURV7o.js";import"./Table-BwElsE2a.js";import"./index-DB13g_6W.js";import"./Dialog-CsnA13_u.js";import"./cross-CZEt4CQ9.js";import"./svgIconContainer-CB3cR2O2.js";import"./useBaseUiId-S4IVgEx3.js";import"./InternalBackdrop-C20G---M.js";import"./composite-DlSXVEG5.js";import"./index-ad9AYhfW.js";import"./index-COXmaWmi.js";import"./index-HEN-Pfmt.js";import"./useEventCallback-sCqLMStA.js";import"./SkeletonBar-DP27X8f1.js";import"./LoadingCell-8me7lGG_.js";import"./ColumnConfigDialog-BK8EX9Ja.js";import"./DraggableList-CKwGoZCZ.js";import"./search-GKgaZqTV.js";import"./Input-D7bf_syM.js";import"./useControlled-Bxr4Vh5_.js";import"./Button-Bq6MDfzu.js";import"./small-cross-DqO0yT6m.js";import"./ActionButton-avzkQ9at.js";import"./Checkbox-BTIiX3dV.js";import"./useValueChanged-DNSQAzpI.js";import"./CollapsiblePanel-Dh2wBANq.js";import"./MultiColumnSortDialog-Dw3NJlo9.js";import"./MenuTrigger-jLSwLtFH.js";import"./CompositeItem-DppqfLhH.js";import"./ToolbarRootContext-DNpt4PCI.js";import"./getDisabledMountTransitionStyles-BSxcypJ-.js";import"./getPseudoElementBounds-F1Xvk9J_.js";import"./chevron-down-CSSbm5fQ.js";import"./index-w8Xrn1oV.js";import"./error-BcGqswAb.js";import"./BaseCbacBanner-B1FxIqOJ.js";import"./makeExternalStore-ByyfvAII.js";import"./Tooltip-BSwHpWu9.js";import"./PopoverPopup-B695G3fz.js";import"./debounce-OG7_ZmsP.js";import"./useOsdkClient-DBY3KNGZ.js";import"./tick-Bs7VXaZc.js";import"./DropdownField-lFeyoiMB.js";import"./isEqual-BL8MlQOH.js";import"./withOsdkMetrics-Bg8xFEho.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
