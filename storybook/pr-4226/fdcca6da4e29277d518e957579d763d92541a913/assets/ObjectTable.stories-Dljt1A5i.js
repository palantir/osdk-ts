import{j as i}from"./iframe-B6ilqw57.js";import{O as p}from"./object-table-YvUTv0RO.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CFzBTxvl.js";import"./preload-helper-D-9CJsjA.js";import"./Table-DxotyaED.js";import"./index-DbyNdYIV.js";import"./Dialog-C48tkAvG.js";import"./cross-DPKuiR4p.js";import"./svgIconContainer-cN2FPQGz.js";import"./useBaseUiId-DHE-id5O.js";import"./InternalBackdrop-CMe-Gh9-.js";import"./composite-DlL-mJ_3.js";import"./index-P1JTOsnm.js";import"./index-Df4HlJX1.js";import"./index-CVmOQE98.js";import"./useEventCallback-CpyAivRw.js";import"./SkeletonBar-DpcdXqqq.js";import"./LoadingCell-DdvMbUk8.js";import"./ColumnConfigDialog-B7V5mAol.js";import"./DraggableList-DfFj4dUH.js";import"./search-QZJd4Wc4.js";import"./Input-DWSs0FOD.js";import"./useControlled-B3abm0PF.js";import"./Button-dJtUFXII.js";import"./small-cross-D3G7vTv6.js";import"./ActionButton-BEqEK5Xi.js";import"./Checkbox-qSC09PM1.js";import"./useValueChanged-D5nzYuqC.js";import"./CollapsiblePanel-B7_nvTjp.js";import"./MultiColumnSortDialog-DWw4hToi.js";import"./MenuTrigger-BEldzrty.js";import"./CompositeItem-C4j1wUUU.js";import"./ToolbarRootContext-DC1oDeWo.js";import"./getDisabledMountTransitionStyles-DpUjid9g.js";import"./getPseudoElementBounds-CU-tnlvo.js";import"./chevron-down-CMdh2Fjb.js";import"./index-FPD_SzEe.js";import"./error-DqxELFjs.js";import"./BaseCbacBanner-Cp5mWgH0.js";import"./makeExternalStore-C_9OaqSF.js";import"./Tooltip-S82UM2K1.js";import"./PopoverPopup-B6N4zjBr.js";import"./debounce-Cr6ef7Zd.js";import"./useOsdkClient-CEMDVQcB.js";import"./tick-DFqE3VKw.js";import"./DropdownField-B2xi4c23.js";import"./isEqual-BaTqElux.js";import"./withOsdkMetrics-D8k6BHrp.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
