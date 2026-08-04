import{j as i}from"./iframe-Zg3agjVA.js";import{O as p}from"./object-table-DtBRANjR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BdMXPQG9.js";import"./preload-helper-BXRBmtzA.js";import"./Table-VcSvCLah.js";import"./index-COc2doys.js";import"./Dialog-DuCup1y3.js";import"./cross-3gwJUULA.js";import"./svgIconContainer-7JSyjSbU.js";import"./useBaseUiId-DRojaVbZ.js";import"./InternalBackdrop-CZBhsVYW.js";import"./composite-CY6EnEDk.js";import"./index-Do1Ejht1.js";import"./index-B1LfTOb2.js";import"./index-DFK3Dggy.js";import"./useEventCallback-B2Brsdpx.js";import"./SkeletonBar-CVhsy3f2.js";import"./LoadingCell-HojjnEqU.js";import"./ColumnConfigDialog-CGSl72f8.js";import"./DraggableList-CoIZMdOK.js";import"./search-i7uPZuYO.js";import"./Input-qYz4RN-U.js";import"./useControlled-CcIGpRzc.js";import"./isEqual-z3tOTpca.js";import"./isObject-C474tTtd.js";import"./Button-BYrujQNz.js";import"./ActionButton-DNbpkLMa.js";import"./Checkbox-CYAdMWyQ.js";import"./useValueChanged-C2Y4VRkm.js";import"./CollapsiblePanel-BajRWGm5.js";import"./MultiColumnSortDialog-BI0weRQX.js";import"./MenuTrigger-C0TksCSi.js";import"./CompositeItem-sHUrGE0o.js";import"./ToolbarRootContext-uC1AZv1t.js";import"./getDisabledMountTransitionStyles-CfZ2kbpR.js";import"./getPseudoElementBounds-CIZC6rE6.js";import"./chevron-down-CtGcJNNE.js";import"./index-BBvO76wk.js";import"./error-BbQ-Z9B4.js";import"./BaseCbacBanner-kvdalyTA.js";import"./makeExternalStore-DLtPHmhK.js";import"./Tooltip-DONLb8VO.js";import"./PopoverPopup-CeLvjh4_.js";import"./toNumber-izRZfRwO.js";import"./useOsdkClient-D3I85USr.js";import"./tick-D3Fn1KVO.js";import"./DropdownField-DIFQ3lkL.js";import"./withOsdkMetrics-Dl0gKApc.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
