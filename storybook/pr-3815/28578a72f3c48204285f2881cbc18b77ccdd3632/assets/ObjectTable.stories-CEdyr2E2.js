import{j as i}from"./iframe-adBEvIDP.js";import{O as p}from"./object-table-Clg_HF0y.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BCJJq7C9.js";import"./preload-helper-BhBV5VvG.js";import"./Table-z7q50Cpk.js";import"./index-BDD5zJf7.js";import"./Dialog-B9w9U6Ch.js";import"./cross-Bif6nOGI.js";import"./svgIconContainer-Bl3q8D9_.js";import"./useBaseUiId-DyFDvApR.js";import"./InternalBackdrop-DN7X8cgl.js";import"./composite-JUgX4sxF.js";import"./index-DMEf-8YF.js";import"./index-OkLbN1Mo.js";import"./index-Cq2vpVq1.js";import"./useEventCallback-Tk2MUqWC.js";import"./SkeletonBar-BcbKwHN-.js";import"./LoadingCell-D8v27LCJ.js";import"./ColumnConfigDialog-THinIGrq.js";import"./DraggableList-BPPX5kOX.js";import"./search-kHOlebpK.js";import"./Input-BDn5fHA0.js";import"./useControlled-CVmz4Ros.js";import"./createLabelsContext-CiP6eikM.js";import"./small-cross-5Y9KWd2p.js";import"./Button-DV46QcLx.js";import"./ActionButton-CXCq-CCl.js";import"./Checkbox-DCH7vFa-.js";import"./useValueChanged-B_9kR55m.js";import"./CollapsiblePanel-DtE8aiLi.js";import"./MultiColumnSortDialog-Ci1KkklX.js";import"./MenuTrigger-UwBkNCHD.js";import"./CompositeItem-CP4Xva_b.js";import"./ToolbarRootContext-MfBf8pTt.js";import"./getDisabledMountTransitionStyles-DLtgxTnY.js";import"./getPseudoElementBounds-BEHW4t2y.js";import"./chevron-down-DGGvLAME.js";import"./index-0Syumzr1.js";import"./error-Bi_YGwJE.js";import"./BaseCbacBanner-X0wpogzT.js";import"./makeExternalStore-0SxKyWnk.js";import"./Tooltip-BNCTPWdV.js";import"./PopoverPopup-B19vtAkQ.js";import"./Combobox-DauBND44.js";import"./useOsdkClient-C-6QWSG5.js";import"./tick-chbWG91L.js";import"./DropdownField-B8gWdr58.js";import"./withOsdkMetrics-0n2sREvo.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
