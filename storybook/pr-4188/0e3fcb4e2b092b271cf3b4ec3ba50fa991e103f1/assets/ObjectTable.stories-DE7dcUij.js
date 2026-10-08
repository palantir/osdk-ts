import{j as i}from"./iframe-BgM5ILJD.js";import{O as p}from"./object-table-Dqm71HsL.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-KM3rZjZl.js";import"./preload-helper-D1sAdP5a.js";import"./Table-DfE3HXIV.js";import"./index-ah8Na9h1.js";import"./Dialog-C1fnwkaV.js";import"./cross-B5mOqZwT.js";import"./svgIconContainer-De6gxcHK.js";import"./useBaseUiId-CzAuSX_4.js";import"./InternalBackdrop-B3lJ8A-i.js";import"./composite-BS7dFqvY.js";import"./index-DAXSmbbp.js";import"./index-YnWjipca.js";import"./index-BtZ9XuP3.js";import"./useEventCallback-ED2yFhLZ.js";import"./SkeletonBar-c3-BssZC.js";import"./LoadingCell-UzH3i-RV.js";import"./ColumnConfigDialog-BG6weTj9.js";import"./DraggableList-Cj8oPYGs.js";import"./search-C2iFy_Yx.js";import"./Input-DL79KIMl.js";import"./useControlled-COnm-wVi.js";import"./Button-KrMtAmhv.js";import"./small-cross-R2Kh-d3N.js";import"./ActionButton-4Ees6e5q.js";import"./Checkbox-Gq8tw6H7.js";import"./useValueChanged-Deeelsz_.js";import"./CollapsiblePanel-IXMutafc.js";import"./MultiColumnSortDialog-CKj_uiZa.js";import"./MenuTrigger-98n7_1EC.js";import"./CompositeItem-B6xGoOu0.js";import"./ToolbarRootContext-CjwaP5zw.js";import"./getDisabledMountTransitionStyles-7N3HMxRW.js";import"./getPseudoElementBounds-CdSGgRcD.js";import"./chevron-down-D1QYpBiI.js";import"./index-DturTZ53.js";import"./error-BFuWQWXY.js";import"./BaseCbacBanner-D3f4VTUa.js";import"./makeExternalStore-CkeVFEY-.js";import"./Tooltip-nFXiDwkG.js";import"./PopoverPopup-BBlagmYo.js";import"./debounce-8yqP3aY_.js";import"./useOsdkClient-EIls4xNE.js";import"./tick-B5Dk5gWg.js";import"./DropdownField-7t-kwafh.js";import"./isEqual-w7VvbcfM.js";import"./withOsdkMetrics-DYzG-urA.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
