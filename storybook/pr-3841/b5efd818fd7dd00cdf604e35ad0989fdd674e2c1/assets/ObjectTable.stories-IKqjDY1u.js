import{j as i}from"./iframe-B9IeBNGg.js";import{O as p}from"./object-table-B-OlF3Bh.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-lC7u2_YM.js";import"./preload-helper-ClkC783W.js";import"./Table-BhJp9i_V.js";import"./index-DybWhixB.js";import"./Dialog-DLLScnHi.js";import"./cross-BHBvGy8S.js";import"./svgIconContainer-BmjXdC_z.js";import"./useBaseUiId-CH6EGP3F.js";import"./InternalBackdrop-gCLjnSXP.js";import"./composite-boJAotvg.js";import"./index-CnuXrNj3.js";import"./index-CJqGIAUW.js";import"./index-B4YI5UQN.js";import"./useEventCallback-DbN_DqZs.js";import"./SkeletonBar-C48ZenHQ.js";import"./LoadingCell-CkzG3KX2.js";import"./ColumnConfigDialog-CGw8n6lE.js";import"./DraggableList-BGcE6c7Y.js";import"./search-Deq1gtA1.js";import"./Input-Iq2bz4Jn.js";import"./useControlled-DKviyNQT.js";import"./Button-CoXfleKP.js";import"./small-cross-DIgXmNYJ.js";import"./ActionButton-f-P6g5hs.js";import"./Checkbox-CNcu3hUs.js";import"./useValueChanged-DEPR-2Hx.js";import"./CollapsiblePanel-B5ry5wH_.js";import"./MultiColumnSortDialog-D7NcH3DD.js";import"./MenuTrigger-pRjMlzuQ.js";import"./CompositeItem-c0dv1mNX.js";import"./ToolbarRootContext-B71dHQV4.js";import"./getDisabledMountTransitionStyles-DCV7TnnH.js";import"./getPseudoElementBounds-DpZ43xVJ.js";import"./chevron-down-CKtjlwoI.js";import"./index-DD1785H2.js";import"./error-Cg3e0-pZ.js";import"./BaseCbacBanner-DrIp1n_M.js";import"./makeExternalStore-B8vFN8aQ.js";import"./Tooltip-BogKNoc8.js";import"./PopoverPopup-Cyw_X9pn.js";import"./debounce-DavaxxZS.js";import"./useOsdkClient-CSJF8avV.js";import"./tick-Dbw2_oO_.js";import"./DropdownField-DXf__6c2.js";import"./isEqual-BGhR7l0w.js";import"./withOsdkMetrics-C0Di3XLY.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
