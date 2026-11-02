import{j as i}from"./iframe-BOL4lmQu.js";import{O as p}from"./object-table-CMQSXq2e.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dckp4eRm.js";import"./preload-helper-CF5y6P51.js";import"./Table-C-Ja_1RN.js";import"./index-BlfYN_kO.js";import"./Dialog-C58LhjQg.js";import"./cross-C9_cN1cS.js";import"./svgIconContainer-FVhL1hCA.js";import"./useBaseUiId-BpGNe3Eg.js";import"./InternalBackdrop-LCz3M4jq.js";import"./composite-BV3ZD4mr.js";import"./index-CmApk3zh.js";import"./index-DP_XR25E.js";import"./index-DBaqiByX.js";import"./useEventCallback-ifDqPOAF.js";import"./SkeletonBar-BNX5gidE.js";import"./LoadingCell-C0eef9LR.js";import"./ColumnConfigDialog-BEJRup2O.js";import"./DraggableList-BHlopOab.js";import"./search-Cv260GLX.js";import"./Input-CujqDLfg.js";import"./useControlled-1K3KKLgI.js";import"./Button-BQpmuek9.js";import"./small-cross-B0XRPY8R.js";import"./ActionButton-BSJylTXK.js";import"./Checkbox-DbzFPQcL.js";import"./useValueChanged-D-6eFv97.js";import"./CollapsiblePanel-ClIQPlSc.js";import"./MultiColumnSortDialog-Cp5dcT-Y.js";import"./MenuTrigger-DECqK-MD.js";import"./CompositeItem-D7t72lc9.js";import"./ToolbarRootContext-DYZSmWFR.js";import"./getDisabledMountTransitionStyles-CMRhZxrC.js";import"./getPseudoElementBounds-Td3ZX14H.js";import"./chevron-down-wPhaZYI3.js";import"./index-DagXr3NH.js";import"./error-DWdKle1J.js";import"./BaseCbacBanner-DZWHxj7c.js";import"./makeExternalStore-BaKwuUE-.js";import"./Tooltip-ipzaDerj.js";import"./PopoverPopup-QDwqPc_0.js";import"./debounce-C7TgZToh.js";import"./useOsdkClient-CMRz05mU.js";import"./tick-C5Qp1iIQ.js";import"./DropdownField-B0yO1meX.js";import"./isEqual-D1nl7lv3.js";import"./withOsdkMetrics-D8Pyw_HQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
