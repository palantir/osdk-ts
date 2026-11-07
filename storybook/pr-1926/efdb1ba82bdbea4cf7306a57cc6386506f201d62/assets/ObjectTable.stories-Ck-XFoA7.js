import{j as i}from"./iframe-sxtnZ__3.js";import{O as p}from"./object-table-4tt7hdOi.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BJBgZeHv.js";import"./preload-helper-DN2WWHpq.js";import"./Table-BGPShlqn.js";import"./index-B43ZU6C6.js";import"./Dialog-CXmBI3Rr.js";import"./cross-59RLUben.js";import"./svgIconContainer-p2RMTI7a.js";import"./useBaseUiId-Ba5m3KpF.js";import"./InternalBackdrop-DRPW9LZb.js";import"./composite-C8kR_XfL.js";import"./index-BFg6-CgA.js";import"./index-CgOTndjm.js";import"./index-zNfO2gJL.js";import"./useEventCallback-D5KlyZoa.js";import"./SkeletonBar-CK-yRV8p.js";import"./LoadingCell-1ChU6nL2.js";import"./ColumnConfigDialog-DFBJLtnX.js";import"./DraggableList-D00Tg26d.js";import"./search-t4p9zjVy.js";import"./Input-BXAWaOKi.js";import"./useControlled-qu9E_ZvC.js";import"./Button-BMtY7X7F.js";import"./small-cross-ZSOiCyZ5.js";import"./ActionButton-D86xvSSL.js";import"./Checkbox-B-gPcLSG.js";import"./useValueChanged-C8cRSBzx.js";import"./CollapsiblePanel-BegV3C45.js";import"./MultiColumnSortDialog-RBoqswCG.js";import"./MenuTrigger-Ba6gU_CA.js";import"./CompositeItem-CQpfGOEN.js";import"./ToolbarRootContext-C88ng33h.js";import"./getDisabledMountTransitionStyles-BqiNfuke.js";import"./getPseudoElementBounds-BTObdfHz.js";import"./chevron-down-Dv8O8W9l.js";import"./index-DmmZjvsT.js";import"./error-B8i5ABXk.js";import"./BaseCbacBanner-CyF9HA0J.js";import"./makeExternalStore-zzt6bEAW.js";import"./Tooltip-ByAr14nR.js";import"./isObject-Bh9lnnOC.js";import"./debounce-th_H1hxT.js";import"./useOsdkClient-CFrWyuCF.js";import"./tick-Ogtike7m.js";import"./DropdownField-CtO5bKXX.js";import"./isEqual-C9IjsvIh.js";import"./_baseIsEqual-BHBxrEn3.js";import"./withOsdkMetrics-CQhdGkJo.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
