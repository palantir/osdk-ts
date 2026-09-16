import{j as i}from"./iframe-CFSd_ghT.js";import{O as p}from"./object-table-C-erOY28.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-q0tZVPD8.js";import"./preload-helper-ZllT-xST.js";import"./Table-Kg2JFIUp.js";import"./index-BVC2DtDE.js";import"./Dialog-D1UeKJjR.js";import"./cross-Pk2YzKDQ.js";import"./svgIconContainer-CuLuTWV9.js";import"./useBaseUiId-Bi512Q4g.js";import"./InternalBackdrop-KQmr3-ne.js";import"./composite-rhm-ES_j.js";import"./index-CX8cSHY9.js";import"./index-PmO53gZu.js";import"./index-CeP15cDX.js";import"./useEventCallback-DwcyWwyP.js";import"./SkeletonBar-DjQkHXkX.js";import"./LoadingCell-CEBP-9hU.js";import"./ColumnConfigDialog-BudUXmYY.js";import"./DraggableList-DiKHUeGr.js";import"./search-CiZh2SnD.js";import"./Input-B266R5K5.js";import"./useControlled-CUIixQM1.js";import"./Button-CII42J6y.js";import"./small-cross-DefbWUHG.js";import"./ActionButton-DyXI2aTY.js";import"./Checkbox-BCew5jIG.js";import"./useValueChanged-D-s1qoWy.js";import"./CollapsiblePanel-D8d1ogGm.js";import"./MultiColumnSortDialog-LJp1m9Qr.js";import"./MenuTrigger-MZrC_UOb.js";import"./CompositeItem-DvZYqwOH.js";import"./ToolbarRootContext-87swm1F0.js";import"./getDisabledMountTransitionStyles-LtEOHvLP.js";import"./getPseudoElementBounds-GHyUotEa.js";import"./chevron-down-CkZ0acRz.js";import"./index-C6yQCaVG.js";import"./error-QrCIC66e.js";import"./BaseCbacBanner-DorfSfUc.js";import"./makeExternalStore-BPSbFC_f.js";import"./Tooltip-Qcx9gV6X.js";import"./PopoverPopup-CZqjkl0j.js";import"./debounce-Cqi7OFEi.js";import"./useOsdkClient-C-wItY3f.js";import"./tick-Bd_VGJ-8.js";import"./DropdownField-BXoQO-Qa.js";import"./isEqual-D5p16SRy.js";import"./withOsdkMetrics-D3lDS6Ow.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
