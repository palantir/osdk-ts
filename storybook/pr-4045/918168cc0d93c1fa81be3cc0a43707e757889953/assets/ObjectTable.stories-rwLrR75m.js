import{j as i}from"./iframe-BAp-mBFg.js";import{O as p}from"./object-table-BwMsZml0.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DFNji4Mm.js";import"./preload-helper-DMA-8k7h.js";import"./Table-D-OYfOQU.js";import"./index-BL8Ey2sj.js";import"./Dialog-DgJAG6u4.js";import"./cross-YEQVvPJ0.js";import"./svgIconContainer-CBRcPR9-.js";import"./useBaseUiId-CLc976mR.js";import"./InternalBackdrop-BMvkPGPo.js";import"./composite-ziK8MZ0d.js";import"./index-bbZZKUgK.js";import"./index-CZnpWueQ.js";import"./index-r6qGL197.js";import"./useEventCallback-DsNDBn2R.js";import"./SkeletonBar-CE7RHls9.js";import"./LoadingCell-FXeHl9Cp.js";import"./ColumnConfigDialog-CV59x_CT.js";import"./DraggableList-CsxMBOz_.js";import"./search-CXHMKnff.js";import"./Input-CAD3JQQ8.js";import"./useControlled-DqAef5Et.js";import"./Button-jiVV_CtX.js";import"./small-cross-DtUlhkvJ.js";import"./ActionButton-CwoDW7qs.js";import"./Checkbox-Dh8EGbK5.js";import"./useValueChanged-Bu3JV_v0.js";import"./CollapsiblePanel-DsuV6JMN.js";import"./MultiColumnSortDialog-CdOmge7j.js";import"./MenuTrigger-NtnRBXis.js";import"./CompositeItem-DuZe3uzk.js";import"./ToolbarRootContext-Ul6dl8O6.js";import"./getDisabledMountTransitionStyles-F5l8rP_A.js";import"./getPseudoElementBounds-rnzBkK8G.js";import"./chevron-down-DRRMSp6v.js";import"./index-BPbKBD04.js";import"./error-WBAOjD-R.js";import"./BaseCbacBanner-7Xyx8yME.js";import"./makeExternalStore-Ct8XmniK.js";import"./Tooltip-CKf84lvP.js";import"./PopoverPopup-BjqCWmO1.js";import"./debounce-Cb4zQ-Dj.js";import"./useOsdkClient-CWsVjcHT.js";import"./tick-DsIbBRWu.js";import"./DropdownField-ClNc4bFA.js";import"./isEqual-BrCdU8a1.js";import"./withOsdkMetrics-BuxsjMHL.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
