import{j as i}from"./iframe-CJdhljqY.js";import{O as p}from"./object-table-C15HZsK6.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CoEKHDYp.js";import"./preload-helper-Dt50QPrM.js";import"./Table-66i0ylnA.js";import"./index-C_XWhVsk.js";import"./Dialog-VSy_iTM4.js";import"./cross-xpJwG0PM.js";import"./svgIconContainer-DfUk_uW1.js";import"./useBaseUiId-DhLXeG5Q.js";import"./InternalBackdrop-BZc-gUEh.js";import"./composite-CMxCP_fe.js";import"./index-CiaROGr7.js";import"./index-PvN9PIAf.js";import"./index-B0u6fGpW.js";import"./useEventCallback-BSb5aBsV.js";import"./SkeletonBar-Do_BGkRf.js";import"./LoadingCell-DDr-ObVZ.js";import"./ColumnConfigDialog-CYwlsrqG.js";import"./DraggableList-Cw8pOFJj.js";import"./search-KsJ5YUkQ.js";import"./Input-MNhthrzu.js";import"./useControlled-DxG1_BRX.js";import"./Button-BW0xuowo.js";import"./small-cross-4RRmn2cJ.js";import"./ActionButton-NXakpU_-.js";import"./Checkbox-CCMcLkD6.js";import"./useValueChanged-WbLrwhHG.js";import"./CollapsiblePanel-Cc53AZ9G.js";import"./MultiColumnSortDialog-HRkDiJIo.js";import"./MenuTrigger-Dh02swDl.js";import"./CompositeItem-D1aj4ASS.js";import"./ToolbarRootContext-BUjzSc7s.js";import"./getDisabledMountTransitionStyles-DjY5DFv9.js";import"./getPseudoElementBounds-DjMkCYmI.js";import"./chevron-down-HDas2nyI.js";import"./index-JTXg-Z1T.js";import"./error-De8eomlR.js";import"./BaseCbacBanner-Cbq547lz.js";import"./makeExternalStore-JX4u0CWz.js";import"./Tooltip-DXKWPKVU.js";import"./PopoverPopup-JStXvDFZ.js";import"./debounce-DmZlAZ0B.js";import"./useOsdkClient-DoLuxURC.js";import"./tick-9_KQHHd1.js";import"./DropdownField-BRJuo5am.js";import"./isEqual-DrMdl6cL.js";import"./withOsdkMetrics-C23PGbte.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
