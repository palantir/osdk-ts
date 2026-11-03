import{j as i}from"./iframe-B5RHZXsu.js";import{O as p}from"./object-table-Dkcx8iw6.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-duO5-O_t.js";import"./preload-helper-tHX7vXiV.js";import"./Table-BhIIsFCs.js";import"./index-UZy2jxQz.js";import"./Dialog-udJgb8ju.js";import"./cross-BlEfWoOy.js";import"./svgIconContainer-B_LjJP-U.js";import"./useBaseUiId-CuPoV62G.js";import"./InternalBackdrop-DQlLfdJE.js";import"./composite-BR00GrWy.js";import"./index-VU42HTLU.js";import"./index-BHsGwZQS.js";import"./index-BiYhGcN8.js";import"./useEventCallback-CUl5eVDE.js";import"./SkeletonBar-DP2T5nTp.js";import"./LoadingCell-JwB4v6GZ.js";import"./ColumnConfigDialog-DkMRJkKy.js";import"./DraggableList-BRsM8x8B.js";import"./search-CznqLCy2.js";import"./Input-BXzrXoG1.js";import"./useControlled-DlsNgd8K.js";import"./Button-Cie7BQIA.js";import"./small-cross-D2pF67Rj.js";import"./ActionButton-y0Novnh7.js";import"./Checkbox-CzdYiTdt.js";import"./useValueChanged-BfhksQOL.js";import"./CollapsiblePanel-CCt5xsKY.js";import"./MultiColumnSortDialog-CQ5wDmsr.js";import"./MenuTrigger-CkEwNIFd.js";import"./CompositeItem-XiaPpMq3.js";import"./ToolbarRootContext-DwV7g7uX.js";import"./getDisabledMountTransitionStyles-BCopWTyc.js";import"./getPseudoElementBounds-CkNhuPMZ.js";import"./chevron-down-UdMSp5ir.js";import"./index-BlmshJoj.js";import"./error-BhBB_kyZ.js";import"./BaseCbacBanner-Dc5V3Lie.js";import"./makeExternalStore-82wrc-fZ.js";import"./Tooltip-DlHQ0CXj.js";import"./PopoverPopup-DfYrZwnF.js";import"./debounce-BxIoRoJ-.js";import"./useOsdkClient-ClQGOlrW.js";import"./tick-BcP6gfmV.js";import"./DropdownField-BnK7E9TF.js";import"./isEqual-pJA2XBQu.js";import"./withOsdkMetrics-VuSz_R8I.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
