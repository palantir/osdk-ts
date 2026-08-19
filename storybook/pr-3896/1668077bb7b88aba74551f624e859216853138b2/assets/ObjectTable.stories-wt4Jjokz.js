import{j as i}from"./iframe-GgX3iuQS.js";import{O as p}from"./object-table-BCgwsQuJ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DQpP1roP.js";import"./preload-helper-DopDlguM.js";import"./Table-qQ6IkZzA.js";import"./index-2cEc6EpX.js";import"./Dialog-D6t24oV_.js";import"./cross-_o4FWU3M.js";import"./svgIconContainer-DqfRg1i7.js";import"./useBaseUiId-RBpeDYi5.js";import"./InternalBackdrop-BfvvVy03.js";import"./composite-DTJ2CAOA.js";import"./index-CqrWKdwO.js";import"./index-BFiXO6wc.js";import"./index-B6c9dS4m.js";import"./useEventCallback-JA9CtIGH.js";import"./SkeletonBar-DIwIX8Wd.js";import"./LoadingCell-BXZtLt9z.js";import"./ColumnConfigDialog-DI6GpbHs.js";import"./DraggableList-CQtVxoSy.js";import"./search-DiWIaVzY.js";import"./Input-CVnvfPvb.js";import"./useControlled-CcoQ1fix.js";import"./Button-QgQBUZaq.js";import"./small-cross-BbNCGVEJ.js";import"./ActionButton-C4p7Hgw-.js";import"./Checkbox-DQZUq8am.js";import"./useValueChanged-DAQKJS5p.js";import"./CollapsiblePanel-BlAOkLEb.js";import"./MultiColumnSortDialog-ZPWzJcZx.js";import"./MenuTrigger-sgCV-ErZ.js";import"./CompositeItem-CaeojGGt.js";import"./ToolbarRootContext-BWdhq6Lq.js";import"./getDisabledMountTransitionStyles-6p_UzfDx.js";import"./getPseudoElementBounds-Bwsxs8-C.js";import"./chevron-down-BhZlmI0F.js";import"./index-nxvIp1-k.js";import"./error-DEuyLPP2.js";import"./BaseCbacBanner-TU4zaPAq.js";import"./makeExternalStore-DX9YQrWu.js";import"./Tooltip-bTH8sLKK.js";import"./PopoverPopup-BGdXC6LF.js";import"./debounce-CWF4YRYe.js";import"./useOsdkClient-DzwfnAlk.js";import"./tick-D8vs_8Jl.js";import"./DropdownField-BmZNq9zA.js";import"./isEqual-Z_mCcB6L.js";import"./withOsdkMetrics-BW_V9voC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
