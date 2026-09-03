import{j as i}from"./iframe-CJbOBKBh.js";import{O as p}from"./object-table-C0WNmDxa.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BtBgMJ7B.js";import"./preload-helper-BLHdcgal.js";import"./Table-BcnA4fIo.js";import"./index-BZGK6RAy.js";import"./Dialog-Bo-c0AOc.js";import"./cross-DXZ7nfx1.js";import"./svgIconContainer-nMosQuRN.js";import"./useBaseUiId-BLfqnsnM.js";import"./InternalBackdrop-I-coYiRS.js";import"./composite-C9nRcOzN.js";import"./index-De6fjuAQ.js";import"./index-B_6VUgxJ.js";import"./index-BIEbhHvU.js";import"./useEventCallback-BXLXlKzm.js";import"./SkeletonBar-Dag5WjEc.js";import"./LoadingCell-Djlq0I6u.js";import"./ColumnConfigDialog-Ch2uVIOq.js";import"./DraggableList-DEf4p0ef.js";import"./search-BiEjqGXz.js";import"./Input-B6hCJoOA.js";import"./useControlled-CZ4YcEAU.js";import"./Button-ChlDUqJf.js";import"./small-cross-DJuRoaKr.js";import"./ActionButton-DP8E2oQU.js";import"./Checkbox-Bu4_rX8p.js";import"./useValueChanged-DMI7G-AI.js";import"./CollapsiblePanel-CQvGKC7K.js";import"./MultiColumnSortDialog-DtBR4rIY.js";import"./MenuTrigger-BRYGwGKp.js";import"./CompositeItem-CstBZeOc.js";import"./ToolbarRootContext-DRMcjCuu.js";import"./getDisabledMountTransitionStyles-ClJ44Vqv.js";import"./getPseudoElementBounds-D2bAA-Mc.js";import"./chevron-down-Cy1gcHm4.js";import"./index-Dxrf0IE0.js";import"./error-SsNWn793.js";import"./BaseCbacBanner-D2xMWTIl.js";import"./makeExternalStore-BjeVU-bl.js";import"./Tooltip-CLlrYrN9.js";import"./PopoverPopup-BrpFbh7n.js";import"./debounce-2qg7QCVU.js";import"./useOsdkClient-BLe4A4YY.js";import"./tick-CDcAZVlx.js";import"./DropdownField-Ig58Wcdc.js";import"./isEqual-BSq_xDkI.js";import"./withOsdkMetrics-PeDqWSVe.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
