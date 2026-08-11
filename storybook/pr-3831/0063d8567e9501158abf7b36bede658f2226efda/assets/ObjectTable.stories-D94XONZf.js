import{j as i}from"./iframe-Ba2LHmmw.js";import{O as p}from"./object-table-Dy6R_1mS.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Ba6Quxd5.js";import"./preload-helper-B7XB0fR8.js";import"./Table-g-0N3kvQ.js";import"./index-Di_rEjs8.js";import"./Dialog-CWlAWs2b.js";import"./cross-D_tW4Z6z.js";import"./svgIconContainer-T_6Rhm5F.js";import"./useBaseUiId-kAp3UjRK.js";import"./InternalBackdrop-EUHVbYsy.js";import"./composite-B5aXaGsd.js";import"./index-C__15Ssw.js";import"./index-DNbaFRaz.js";import"./index-Dfaz-I-s.js";import"./useEventCallback-lTWmfAeE.js";import"./SkeletonBar-EjekG6ih.js";import"./LoadingCell-Cs3S_WvF.js";import"./ColumnConfigDialog-CpjwB5oT.js";import"./DraggableList-Csd8qfYC.js";import"./search-DOVEiH9F.js";import"./Input-DYB11wZY.js";import"./useControlled-b4VWKtNW.js";import"./isEqual-Y296ziUA.js";import"./isObject-Bj8AkAg1.js";import"./Button-dXiY3Oih.js";import"./ActionButton-DBptDCp_.js";import"./Checkbox-DtB6bbQd.js";import"./useValueChanged-Bn3N2blk.js";import"./CollapsiblePanel-BZobfyJI.js";import"./MultiColumnSortDialog-Dhayd-uQ.js";import"./MenuTrigger-Dg0FM3v0.js";import"./CompositeItem-BkDvpDV-.js";import"./ToolbarRootContext-DksAfQmT.js";import"./getDisabledMountTransitionStyles-CdNG9aue.js";import"./getPseudoElementBounds-C3XJtjLS.js";import"./chevron-down-rpKQMPMV.js";import"./index--EllkZMo.js";import"./error-CAnhijT4.js";import"./BaseCbacBanner-CAmnOXyH.js";import"./makeExternalStore-vStluxin.js";import"./Tooltip-BW4XIqzG.js";import"./PopoverPopup-RHQG_Rg9.js";import"./toNumber-BRENFX6q.js";import"./useOsdkClient-ETIs1sC4.js";import"./tick-jGM_0Tj2.js";import"./DropdownField-G9ReHW4y.js";import"./withOsdkMetrics-DqTbcU1C.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
