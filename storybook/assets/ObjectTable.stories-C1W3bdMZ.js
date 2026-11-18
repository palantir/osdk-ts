import{j as i}from"./iframe-A3cFOKcN.js";import{O as p}from"./object-table-D6T5wWQI.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-FSZrtU2G.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CxGinnZh.js";import"./index-BdisvGQs.js";import"./Dialog-IrmETrAM.js";import"./cross-BpCzBhcu.js";import"./svgIconContainer-Cx_x83Vw.js";import"./useBaseUiId-f8SNshup.js";import"./InternalBackdrop-CLQ76qla.js";import"./composite-CO4egJyo.js";import"./index-iwijohJb.js";import"./index-DC_i6GYR.js";import"./index-CwbCFpmW.js";import"./useEventCallback-DcGGf58T.js";import"./SkeletonBar-CFR5RV76.js";import"./LoadingCell-B-isKo1Q.js";import"./ColumnConfigDialog-C_I9U-JL.js";import"./DraggableList-eFQXa4c_.js";import"./search-CjzZlMWT.js";import"./Input-D8Sxy-AW.js";import"./useControlled-lPa7KKsj.js";import"./Button-BioOQfQu.js";import"./small-cross-E1MTPWPe.js";import"./ActionButton-D1a6Sq8f.js";import"./Checkbox-4H9IL8Qq.js";import"./useValueChanged-BSJmwQff.js";import"./CollapsiblePanel-kcqrPygQ.js";import"./MultiColumnSortDialog-D8ycB0c4.js";import"./MenuTrigger-tCW2Oivw.js";import"./CompositeItem-Brp6gpS6.js";import"./ToolbarRootContext-iK84Y3hB.js";import"./getDisabledMountTransitionStyles-CrBoc_TZ.js";import"./getPseudoElementBounds-DaGoMVcW.js";import"./chevron-down-BNVc1UKn.js";import"./index-C28TVULp.js";import"./error-oGpxxWLn.js";import"./BaseCbacBanner-BlxyISp5.js";import"./makeExternalStore-1BwNCmLf.js";import"./Tooltip-CdI3maSw.js";import"./PopoverPopup-DVMbRx4R.js";import"./Select-DHseJ8-J.js";import"./useOsdkClient-BpfPkxQE.js";import"./tick-DnihwVHh.js";import"./DropdownField-D-Vqq6xe.js";import"./useDebouncedCallback-BP589r5j.js";import"./isEqual-DQ5slpiQ.js";import"./_baseIsEqual-BLEcImby.js";import"./stableSerialize-Ck0v-oQz.js";import"./withOsdkMetrics-BHdLGHRT.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,Te={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const fe=["Default"];export{n as Default,fe as __namedExportsOrder,Te as default};
