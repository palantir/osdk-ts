import{j as i}from"./iframe-VyYU4_vz.js";import{O as p}from"./object-table-qLQNuHCM.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DNLIblAn.js";import"./preload-helper-BuqLdsok.js";import"./Table-D9gw01TB.js";import"./index-Ds9RaOEw.js";import"./Dialog-BYVV7Vxz.js";import"./cross-B8BSPVsW.js";import"./svgIconContainer-RHuD6B4X.js";import"./useBaseUiId-oAJGM4T3.js";import"./InternalBackdrop-Ks9C_KBp.js";import"./composite-D-GMalcD.js";import"./index-DGfEWUId.js";import"./index-CIaumvnO.js";import"./index-8WSLTY8y.js";import"./useEventCallback-LhuC7cwi.js";import"./SkeletonBar-pyPg3O_J.js";import"./LoadingCell-BTtjd3SD.js";import"./ColumnConfigDialog-Bawmc31o.js";import"./DraggableList-C2Qzt0AU.js";import"./search-Cp9T6kDH.js";import"./Input-Ck1mtXHC.js";import"./useControlled-DF-V1JcA.js";import"./Button-BO4-XA9w.js";import"./small-cross-BhR-tKKW.js";import"./ActionButton-BaZ1pakt.js";import"./Checkbox-ChTvZHXN.js";import"./useValueChanged-BlhavTes.js";import"./CollapsiblePanel-6lTx7MnB.js";import"./MultiColumnSortDialog-CLP9oSNu.js";import"./MenuTrigger-WG6WH2x9.js";import"./CompositeItem-BpcnF50U.js";import"./ToolbarRootContext-DNatahNZ.js";import"./getDisabledMountTransitionStyles-CZqTqyjY.js";import"./getPseudoElementBounds-CGw1_hUQ.js";import"./chevron-down-C6hF1wmk.js";import"./index-D3QHbtaM.js";import"./error-D4hrAgPV.js";import"./BaseCbacBanner-BlVyIN4U.js";import"./makeExternalStore-fugyGUCm.js";import"./Tooltip-BKVen5s5.js";import"./PopoverPopup-WQ_0bkhD.js";import"./debounce-C3KWhkea.js";import"./useOsdkClient-Yo8cLSm5.js";import"./tick-Fs7Tv_3o.js";import"./DropdownField-BEcIoxEz.js";import"./isEqual-CuqG53Rd.js";import"./withOsdkMetrics-iTeYpiSH.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
