import{j as i}from"./iframe-Dn-9qR05.js";import{O as p}from"./object-table-RVYWSQVb.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CrDcw8ax.js";import"./preload-helper-CEUgRBGl.js";import"./Table-3aCJl_YM.js";import"./index-CShzoPuj.js";import"./Dialog-TK6XzCpV.js";import"./cross-CFJY3pI7.js";import"./svgIconContainer-DN7hY7wX.js";import"./useBaseUiId-DlYLGnbC.js";import"./InternalBackdrop-CSP9tAeZ.js";import"./composite-Dam7p1Gi.js";import"./index-siGyqdKv.js";import"./index-Cm5JEtld.js";import"./index-PmTUoQ6e.js";import"./useEventCallback-yrBTKri_.js";import"./SkeletonBar-g7tzeTNf.js";import"./LoadingCell-CeUY9Yie.js";import"./ColumnConfigDialog-D-3H8mRr.js";import"./DraggableList-Clp-stUz.js";import"./search-B9RszC_k.js";import"./Input-Ckj63NR0.js";import"./useControlled-CX6Xi137.js";import"./Button-CD6ruQEI.js";import"./small-cross-CfSIwwvk.js";import"./ActionButton-DJJlGWOS.js";import"./Checkbox-CMMOr2Lt.js";import"./useValueChanged-B9A96Xzu.js";import"./CollapsiblePanel-Banv_PU4.js";import"./MultiColumnSortDialog-fLe92FZV.js";import"./MenuTrigger-ZXE47TlK.js";import"./CompositeItem-DUnPjw9m.js";import"./ToolbarRootContext-C6ldVUmb.js";import"./getDisabledMountTransitionStyles-DhN5fa4D.js";import"./getPseudoElementBounds-aQjcu0Ut.js";import"./chevron-down-fpE-PXKH.js";import"./index-B79Dn3Wp.js";import"./error-Cuq16P9x.js";import"./BaseCbacBanner-DNbN0KCn.js";import"./makeExternalStore-Dqgr7oFO.js";import"./Tooltip-CbEYBBXB.js";import"./PopoverPopup-B_2-3pgb.js";import"./debounce-Bvt0kX1y.js";import"./useOsdkClient-D1GnjUl5.js";import"./tick-CgK3j2VX.js";import"./DropdownField-DC36O3p8.js";import"./isEqual-Dm8G62_o.js";import"./withOsdkMetrics-BQNjNhlw.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
