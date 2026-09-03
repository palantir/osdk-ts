import{j as i}from"./iframe-BjnXfZ9H.js";import{O as p}from"./object-table-DNJIjvBp.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BglenNtL.js";import"./preload-helper-bepxIrLy.js";import"./Table-ybsmukH_.js";import"./index-BelFyW9j.js";import"./Dialog-BOJM-McT.js";import"./cross-Ca4hBGJI.js";import"./svgIconContainer-CwvuHzUD.js";import"./useBaseUiId--nXvl9pb.js";import"./InternalBackdrop-BLN5UK4x.js";import"./composite-CmHNarO8.js";import"./index-B42gKKnv.js";import"./index-BA9yDYNK.js";import"./index-DuJvB77H.js";import"./useEventCallback-BKqRKbmG.js";import"./SkeletonBar-DfILH45u.js";import"./LoadingCell-yFIpndmd.js";import"./ColumnConfigDialog-zq4SufD-.js";import"./DraggableList-BkF6LG2L.js";import"./search-4U4uPWIz.js";import"./Input-DOBVQBLE.js";import"./useControlled-30IDLW3T.js";import"./Button-87n6zTQD.js";import"./small-cross-D7Hbyjsr.js";import"./ActionButton-CQYbxlLb.js";import"./Checkbox-TZ3IuKyF.js";import"./useValueChanged-A_lNNdYi.js";import"./CollapsiblePanel-CS2mE_oJ.js";import"./MultiColumnSortDialog-CcC31-_u.js";import"./MenuTrigger-Bq4Sdh9Z.js";import"./CompositeItem-DVl86_s7.js";import"./ToolbarRootContext-Dapwrg0X.js";import"./getDisabledMountTransitionStyles-DPwXStNv.js";import"./getPseudoElementBounds-CpUcIsOX.js";import"./chevron-down-C_lHJsgk.js";import"./index-C3tw8knN.js";import"./error-B6h0Ljte.js";import"./BaseCbacBanner-L6j0Cbsw.js";import"./makeExternalStore-C1Xa5Pr9.js";import"./Tooltip-C16yb5G_.js";import"./PopoverPopup-C-RgfkQV.js";import"./debounce-BbeoZOOC.js";import"./useOsdkClient-ByYF3VD2.js";import"./tick-_NQRZlmZ.js";import"./DropdownField-CDdmQF3S.js";import"./isEqual-BQ4IEcpg.js";import"./withOsdkMetrics-9hdMnSaG.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
