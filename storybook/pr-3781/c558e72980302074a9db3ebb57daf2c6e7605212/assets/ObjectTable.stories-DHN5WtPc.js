import{j as i}from"./iframe-DQyXgQjF.js";import{O as p}from"./object-table-Buiz7_zN.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-LaQUDjj5.js";import"./preload-helper-BwATEbbW.js";import"./Table-B59PSWJQ.js";import"./index-zxLoORa7.js";import"./Dialog-Brve9XOD.js";import"./cross-DYm99n8j.js";import"./svgIconContainer-CWf268Wa.js";import"./useBaseUiId-3phzK7j-.js";import"./InternalBackdrop-verxdvs1.js";import"./composite-CU43rjMu.js";import"./index-YSBI5FA8.js";import"./index-L_6XzX0S.js";import"./index-CwpcqqAQ.js";import"./useEventCallback-DNyqnppz.js";import"./SkeletonBar-BBzp9902.js";import"./LoadingCell-CZ0qhRs8.js";import"./ColumnConfigDialog-AVcPD8Jq.js";import"./DraggableList-DUjLA_JY.js";import"./search-BmUdzc_y.js";import"./Input-DiCaaolk.js";import"./useControlled-D7uKPK_J.js";import"./Button-7Yv-s8d8.js";import"./small-cross-DsIT7tGr.js";import"./ActionButton-zXa_t6ga.js";import"./Checkbox-Z99gldXK.js";import"./useValueChanged-DVlVg2nV.js";import"./CollapsiblePanel-j1dwugrc.js";import"./MultiColumnSortDialog-2u3dK1Q7.js";import"./MenuTrigger-BxAwaBm5.js";import"./CompositeItem-RFl7h3zH.js";import"./ToolbarRootContext-BfCsQAap.js";import"./getDisabledMountTransitionStyles-D0wMZ4Z4.js";import"./getPseudoElementBounds-CJlWZBwf.js";import"./chevron-down-B7bppAwZ.js";import"./index-Dvo2_Daj.js";import"./error-F90l69c5.js";import"./BaseCbacBanner-DRohbIbG.js";import"./makeExternalStore-CjiqYirX.js";import"./Tooltip-DMcknpxT.js";import"./PopoverPopup-Lw5BvCW6.js";import"./debounce-kj3B_jEO.js";import"./useOsdkClient-BCI3PIPJ.js";import"./tick-DeKMMXtG.js";import"./DropdownField-B1cH9VTb.js";import"./isEqual-g9VSMI7E.js";import"./withOsdkMetrics-o51FJnXF.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
