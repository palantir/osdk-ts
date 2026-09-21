import{j as i}from"./iframe-DsP96Xjx.js";import{O as p}from"./object-table-TkpdlQXd.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-88J7_Sam.js";import"./preload-helper-DwitJgNj.js";import"./Table-2WnmhRCG.js";import"./index-CCZQyGW1.js";import"./Dialog-BEgGVBxb.js";import"./cross-BeyCouG7.js";import"./svgIconContainer-DK5XvhMp.js";import"./useBaseUiId-CmljmHpR.js";import"./InternalBackdrop-C3nPSiVQ.js";import"./composite-j1sQv_62.js";import"./index-DOmZP-tW.js";import"./index-B7ldO9Ow.js";import"./index-BLLb1gnX.js";import"./useEventCallback-DFq_e--v.js";import"./SkeletonBar-BZJ5t8a8.js";import"./LoadingCell-ByQcafEp.js";import"./ColumnConfigDialog-BeauIrkr.js";import"./DraggableList-DvkSISyE.js";import"./search-CHKIWokO.js";import"./Input-Bp3qfxHC.js";import"./useControlled-OAEAKhSc.js";import"./Button-D7SLUTAS.js";import"./small-cross-DqTpJXLx.js";import"./ActionButton-DdUHOyw7.js";import"./Checkbox-BMAUUPAo.js";import"./useValueChanged-NP9GJqeg.js";import"./CollapsiblePanel-BSmym8_v.js";import"./MultiColumnSortDialog-B2Fk3pAJ.js";import"./MenuTrigger-Bo5akJPw.js";import"./CompositeItem-Bt-RplsU.js";import"./ToolbarRootContext-MS5BqpDI.js";import"./getDisabledMountTransitionStyles-BYYMCiyL.js";import"./getPseudoElementBounds-Bi6nNbbr.js";import"./chevron-down-BXNKs90J.js";import"./index-D94pbFc4.js";import"./error-BrJRNRov.js";import"./BaseCbacBanner-QY9kdETd.js";import"./makeExternalStore-m0KaaoZC.js";import"./Tooltip-80snLRYh.js";import"./PopoverPopup-qu2sjpZ7.js";import"./debounce-DOMkCj-B.js";import"./useOsdkClient-DGSsfpPV.js";import"./tick-DASReF7p.js";import"./DropdownField-CIyOjqZ7.js";import"./isEqual-C-16vm51.js";import"./withOsdkMetrics-CJFmOHw0.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
