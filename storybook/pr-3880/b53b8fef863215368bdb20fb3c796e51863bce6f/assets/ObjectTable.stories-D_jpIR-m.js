import{j as i}from"./iframe-C9HB86if.js";import{O as p}from"./object-table-B_EnMZcp.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DR4YCFsW.js";import"./preload-helper-rFANKmdh.js";import"./Table-OMFRcBcg.js";import"./index-CVyRPfKn.js";import"./Dialog-CQDZ3eii.js";import"./cross-D03jwveB.js";import"./svgIconContainer-DWuV-Vpk.js";import"./useBaseUiId-ClGI3kD_.js";import"./InternalBackdrop-B2dPExX-.js";import"./composite-C64kubUR.js";import"./index-C_aN6gDN.js";import"./index-BZ_jxMnq.js";import"./index-CqBAKLWt.js";import"./useEventCallback-CkepUuPK.js";import"./SkeletonBar-CqZT9-l8.js";import"./LoadingCell-B4lZKo_2.js";import"./ColumnConfigDialog-BYmyLXkG.js";import"./DraggableList-BEXEnYy_.js";import"./search-DZMUxcm3.js";import"./Input-AYOPk6Tg.js";import"./useControlled-EwxAbnnM.js";import"./Button-Dy6rgqj6.js";import"./small-cross-CZzvuKLa.js";import"./ActionButton-C7Xr1Qbw.js";import"./Checkbox-CSFKbNXt.js";import"./useValueChanged-DaTrWp7s.js";import"./CollapsiblePanel-DhCOByhw.js";import"./MultiColumnSortDialog-9sr6IMbJ.js";import"./MenuTrigger-NlbBKfKD.js";import"./CompositeItem-CsJuLa-c.js";import"./ToolbarRootContext-DXQuQHMp.js";import"./getDisabledMountTransitionStyles-BvcOX-OE.js";import"./getPseudoElementBounds-DBEOMWTp.js";import"./chevron-down-DIEjexWB.js";import"./index-CuMVRYrp.js";import"./error-44gbpeNf.js";import"./BaseCbacBanner-DJQheQBW.js";import"./makeExternalStore-eol4uEvM.js";import"./Tooltip-Do-q59d8.js";import"./PopoverPopup-Dqa-NJJk.js";import"./debounce-BhNEbBP_.js";import"./useOsdkClient-CsEpS7UN.js";import"./tick-DJz5yCf-.js";import"./DropdownField-rFDf7Nf9.js";import"./isEqual-CuL2lqiL.js";import"./withOsdkMetrics-BhEmmhw8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
