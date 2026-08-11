import{j as i}from"./iframe-B5hHVZQu.js";import{O as p}from"./object-table-CRa7hXQr.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CamdZSZK.js";import"./preload-helper-DyqMQgY0.js";import"./Table-CbYifu0N.js";import"./index-DaYiiRu5.js";import"./Dialog-CUw2nEX3.js";import"./cross-CTSJrujW.js";import"./svgIconContainer-DXyLBKXl.js";import"./useBaseUiId-CRlCyX-w.js";import"./InternalBackdrop-B2AgvPjW.js";import"./composite-CK8SD67A.js";import"./index-Cu4Ah4up.js";import"./index-ylobHPnE.js";import"./index-fX2rnPUV.js";import"./useEventCallback-CaB44r3W.js";import"./SkeletonBar-BiRh_pBp.js";import"./LoadingCell-CFlyTKGM.js";import"./ColumnConfigDialog-D9Lf1Y0L.js";import"./DraggableList-BGP-kqw7.js";import"./search-CxznAXlW.js";import"./Input-b2ptVJAS.js";import"./useControlled-By0Ac4RD.js";import"./isEqual-8i0GB84A.js";import"./isObject-CbTSOvn8.js";import"./Button-C90dbigt.js";import"./ActionButton-CwK2Sti0.js";import"./Checkbox-AQ_tXtJE.js";import"./useValueChanged-BAHrQvHb.js";import"./CollapsiblePanel-D7gMr-Bp.js";import"./MultiColumnSortDialog-B5QCiZ6f.js";import"./MenuTrigger-DGJeoD7u.js";import"./CompositeItem-BtNP4ARS.js";import"./ToolbarRootContext-DJjlFlUm.js";import"./getDisabledMountTransitionStyles-CQxLvVA1.js";import"./getPseudoElementBounds-Ofapsbk-.js";import"./chevron-down-Cc8R_gLM.js";import"./index-CfwqnS6H.js";import"./error-DRrdgJam.js";import"./BaseCbacBanner-ByQuoR7a.js";import"./makeExternalStore-004jpP0-.js";import"./Tooltip-BsUgOztO.js";import"./PopoverPopup-DbUxnxE-.js";import"./toNumber-Ct448nRS.js";import"./useOsdkClient-nCYvOOHq.js";import"./tick-lV8tZ7Ef.js";import"./DropdownField-Iac_8gPN.js";import"./withOsdkMetrics-DvK36u8X.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
