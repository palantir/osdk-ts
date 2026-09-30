import{j as i}from"./iframe-za2gFZm7.js";import{O as p}from"./object-table-BS8MM0wq.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BjOgm-cf.js";import"./preload-helper-B152vIQk.js";import"./Table-DKIXKU0X.js";import"./index-C4E5Dk0R.js";import"./Dialog-BKjUT0WY.js";import"./cross-TTEnlvkl.js";import"./svgIconContainer-Dr6j7alJ.js";import"./useBaseUiId-BpIGGvmI.js";import"./InternalBackdrop-CuWltaZZ.js";import"./composite-D56jxQaX.js";import"./index-C4smQJ4G.js";import"./index-OBpStMAY.js";import"./index-BXHLylGJ.js";import"./useEventCallback-B-1PMCAh.js";import"./SkeletonBar-DJX3wRZn.js";import"./LoadingCell-76SMTSbQ.js";import"./ColumnConfigDialog-x5n0fU9Y.js";import"./DraggableList-BN2F7Ttd.js";import"./search-FcuyWSqL.js";import"./Input-B_NAvwoc.js";import"./useControlled-x2G49QSH.js";import"./Button-DwQfUaLn.js";import"./small-cross-Cpr2Bt40.js";import"./ActionButton-yFn7B9Sr.js";import"./Checkbox-Bl7oN82I.js";import"./useValueChanged-CgoAhXS1.js";import"./CollapsiblePanel-f2IrHI_h.js";import"./MultiColumnSortDialog-BAtKqwsE.js";import"./MenuTrigger-DcOti6NU.js";import"./CompositeItem-BDB5_ay2.js";import"./ToolbarRootContext-BG5Gc4jy.js";import"./getDisabledMountTransitionStyles-BtrYbTrP.js";import"./getPseudoElementBounds-CYZLYzqG.js";import"./chevron-down-DJF2R6Zo.js";import"./index-CHACBaIH.js";import"./error-Dk8fbBB5.js";import"./BaseCbacBanner-DBUtzZ_e.js";import"./makeExternalStore-C8qXbmFn.js";import"./Tooltip-DpzWRQIQ.js";import"./PopoverPopup-BzwgnfVt.js";import"./debounce-BxVMhpPq.js";import"./useOsdkClient-DPxpEBB0.js";import"./tick-DCTTAhNR.js";import"./DropdownField-DbWdFCIz.js";import"./isEqual-Co-ogKGs.js";import"./withOsdkMetrics-U5yEFT5F.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
