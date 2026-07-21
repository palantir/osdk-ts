import{j as i}from"./iframe-1zlKUcSc.js";import{O as p}from"./object-table-0zGasvWZ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DPDX8mBG.js";import"./preload-helper-CTkLWgF6.js";import"./Table-qa_QPh6R.js";import"./index-DiPEpNnl.js";import"./Dialog-Dv1LegWm.js";import"./cross-BuIFoaJh.js";import"./svgIconContainer-C8IZLkS0.js";import"./useBaseUiId-6JzTpPfQ.js";import"./InternalBackdrop-DLdRs8Q_.js";import"./composite-DWazgZ7T.js";import"./index-HXc49RyK.js";import"./index-BcuLOOrQ.js";import"./index-YAqT93Eu.js";import"./useEventCallback-DogtZdFU.js";import"./SkeletonBar-BdjjM6wz.js";import"./LoadingCell-BwTv40Ii.js";import"./ColumnConfigDialog-Sq7J_f_J.js";import"./DraggableList-DkLb-DCG.js";import"./search-Dv_yGgK4.js";import"./Input-HecR9wga.js";import"./useControlled-FW3ZNM_t.js";import"./Button-CY55YNlH.js";import"./small-cross-ClgWOj27.js";import"./ActionButton-C1Q6FCZj.js";import"./Checkbox-B3qwtiI8.js";import"./useValueChanged-DiFtdmMU.js";import"./CollapsiblePanel-Du9x8fCY.js";import"./MultiColumnSortDialog-Dbs6a56B.js";import"./MenuTrigger-DePITIk0.js";import"./CompositeItem-D-oGgt8S.js";import"./ToolbarRootContext-CB0hAZMy.js";import"./getDisabledMountTransitionStyles-DsJe-dBa.js";import"./getPseudoElementBounds-DLWZSL_K.js";import"./chevron-down-Bey2Po21.js";import"./index-h_0uM_IG.js";import"./error-DfNGl4TZ.js";import"./BaseCbacBanner-DtgjtSCa.js";import"./makeExternalStore-BSSkPAFY.js";import"./Tooltip-CTaReriA.js";import"./PopoverPopup-D3-jGPJC.js";import"./toNumber-Cdp4tCLf.js";import"./useOsdkClient-tRRl3zj7.js";import"./tick-D7CXLxix.js";import"./DropdownField-BNqwN1Kc.js";import"./withOsdkMetrics-CJWuisvC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
