import{j as i}from"./iframe-a31F6Zea.js";import{O as p}from"./object-table-BINMUfCj.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CuLm83_u.js";import"./preload-helper-BfFj_4tp.js";import"./Table-MhGt0czb.js";import"./index-BnGZPYV4.js";import"./Dialog-BuBmqvFw.js";import"./cross-Ctxx23y-.js";import"./svgIconContainer-DxZS3Oh3.js";import"./useBaseUiId-CSUeT06E.js";import"./InternalBackdrop-DjwrHJRF.js";import"./composite-B8asvRon.js";import"./index-DFESKWXH.js";import"./index-DSAvdwec.js";import"./index-CTMiLHyK.js";import"./useEventCallback-DbzrgPEa.js";import"./SkeletonBar-4ArO1hst.js";import"./LoadingCell-CeC_Y0KB.js";import"./ColumnConfigDialog-pS-0zZHr.js";import"./DraggableList-BjfnW581.js";import"./search-BWfh2RdL.js";import"./Input-CBWYwmBc.js";import"./useControlled-CN75eaZx.js";import"./Button-a8my9L0w.js";import"./small-cross-DydNjtyB.js";import"./ActionButton-DRwEwaLd.js";import"./Checkbox-CH-4dSS6.js";import"./useValueChanged-BCR7isnN.js";import"./CollapsiblePanel-BhG8Ptxn.js";import"./MultiColumnSortDialog-jD23MlbX.js";import"./MenuTrigger-DvGn-ZBM.js";import"./CompositeItem-mbuOs1fC.js";import"./ToolbarRootContext-wQy2gScd.js";import"./getDisabledMountTransitionStyles-DnjPaBF0.js";import"./getPseudoElementBounds-BXq9UpA2.js";import"./chevron-down-hBWeBGBN.js";import"./index-gZqL-2oV.js";import"./error-C3q1XKPy.js";import"./BaseCbacBanner-BYsPA5Ea.js";import"./makeExternalStore-CySlHC0C.js";import"./Tooltip-Bta8a6KY.js";import"./PopoverPopup--cbpjW0Q.js";import"./debounce-CODw_OdZ.js";import"./useOsdkClient-Ci2TgkT7.js";import"./tick-D6JN-An3.js";import"./DropdownField-C3Jn0eQq.js";import"./isEqual-Cj_SI081.js";import"./withOsdkMetrics-B5cAgh1b.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
