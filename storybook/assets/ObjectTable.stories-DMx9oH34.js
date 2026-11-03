import{j as i}from"./iframe-BZrHCCWD.js";import{O as p}from"./object-table-DpPY2M7V.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-EHaLIbco.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-OKpIXbCH.js";import"./index-BbBwfHG7.js";import"./Dialog-D5yCcZki.js";import"./cross-CQg-zCtt.js";import"./svgIconContainer-DvKRTV-T.js";import"./useBaseUiId-BS5c_qfo.js";import"./InternalBackdrop-C26unrC9.js";import"./composite-B06N-5LO.js";import"./index-D_mlxwiI.js";import"./index-BoSlXWJn.js";import"./index-aQp0TPl5.js";import"./useEventCallback-Bz01pljJ.js";import"./SkeletonBar-CbuDz3oc.js";import"./LoadingCell-DOCqVuTS.js";import"./ColumnConfigDialog-DkSiEPBm.js";import"./DraggableList-DsrHiH1T.js";import"./search-PU-jJ5zI.js";import"./Input-3V3vHuAM.js";import"./useControlled-CGFBoHyX.js";import"./Button-JGRhrjvL.js";import"./small-cross-o2gbtp7v.js";import"./ActionButton-C6T7h1rl.js";import"./Checkbox-BGBCPMbG.js";import"./useValueChanged-DanfgwZ-.js";import"./CollapsiblePanel-BrYWz7mk.js";import"./MultiColumnSortDialog-Vt0kB0E9.js";import"./MenuTrigger-8jpSTywc.js";import"./CompositeItem-DdzLCYzu.js";import"./ToolbarRootContext-HdK5b1bg.js";import"./getDisabledMountTransitionStyles-BMID7lxe.js";import"./getPseudoElementBounds-C0AdvYra.js";import"./chevron-down-BCopBMR6.js";import"./index-J3cPUL6v.js";import"./error-D2Jou9ns.js";import"./BaseCbacBanner-BPwWbKhf.js";import"./makeExternalStore-Dg_VN0ud.js";import"./Tooltip-CPptvKhe.js";import"./PopoverPopup-CGVwQ1cR.js";import"./debounce-RV0_NzqU.js";import"./useOsdkClient-aEZ1eEbo.js";import"./tick-DOuBmutW.js";import"./DropdownField-JLZ1LJgg.js";import"./isEqual-B_gGF4aE.js";import"./withOsdkMetrics-DyjVeD0H.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
