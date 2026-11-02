import{j as i}from"./iframe-Bjmz4Pw6.js";import{O as p}from"./object-table-Cbq5OCuZ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DlGlu5l4.js";import"./preload-helper-ChdqJ_Fk.js";import"./Table-5_CJmnAL.js";import"./index-CteV8V5-.js";import"./Dialog-RyhhQJPG.js";import"./cross-DLiU4vOO.js";import"./svgIconContainer-waXVP79l.js";import"./useBaseUiId-Dab5gkr1.js";import"./InternalBackdrop-wmuwnNCk.js";import"./composite-D5kvXpM3.js";import"./index-B0jhHXrB.js";import"./index-xuV1OxFF.js";import"./index-DXs3na67.js";import"./useEventCallback-CEkSFShG.js";import"./SkeletonBar-RK8wJKnc.js";import"./LoadingCell-DzfUiNrU.js";import"./ColumnConfigDialog-C7PhcgmF.js";import"./DraggableList-DEQHvBAg.js";import"./search-BFNLN2pg.js";import"./Input-CYsfOYNb.js";import"./useControlled-UgrzeJ-P.js";import"./Button-gMxn8bZ8.js";import"./small-cross-CwgSRf6S.js";import"./ActionButton-BXkFs4JK.js";import"./Checkbox-B30WmTbv.js";import"./useValueChanged-CtNi9ozz.js";import"./CollapsiblePanel-7Vg1XIbp.js";import"./MultiColumnSortDialog-5T3HYw5a.js";import"./MenuTrigger-iuHF1wpt.js";import"./CompositeItem-XruUBT06.js";import"./ToolbarRootContext-D0yTrMZy.js";import"./getDisabledMountTransitionStyles-BclIXzND.js";import"./getPseudoElementBounds-CVsUqdMo.js";import"./chevron-down-DYnrRDqf.js";import"./index-BqU459RR.js";import"./error-DXq7Sg4A.js";import"./BaseCbacBanner-DNpt7vOE.js";import"./makeExternalStore-Czv1SlrP.js";import"./Tooltip-B6HLdM-u.js";import"./PopoverPopup-B8vKH9Gz.js";import"./debounce-BS14Ht-K.js";import"./useOsdkClient-DWH25UnA.js";import"./tick-DI_p6XGO.js";import"./DropdownField-E6FKc9RM.js";import"./isEqual-Cb_ACtXN.js";import"./withOsdkMetrics-DHpFVYZj.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
