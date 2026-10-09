import{j as i}from"./iframe-Djgn3mMp.js";import{O as p}from"./object-table-Cwd88ac2.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CcHIFfkc.js";import"./preload-helper-BBzcmrCr.js";import"./Table-DPni56UU.js";import"./index-DMa22myD.js";import"./Dialog-CpMC_SRI.js";import"./cross-P-qahKgk.js";import"./svgIconContainer-BSc8qpEQ.js";import"./useBaseUiId-BpSKPnMp.js";import"./InternalBackdrop-DvFd7PWT.js";import"./composite-v_9iQLjO.js";import"./index-CXL1vt3n.js";import"./index-CX21NhuZ.js";import"./index-BcsqXVef.js";import"./useEventCallback-BdQ5ayqn.js";import"./SkeletonBar-uqnKmx5p.js";import"./LoadingCell-CsQeYTrB.js";import"./ColumnConfigDialog-YRUvF1AL.js";import"./DraggableList-CRGOc0hi.js";import"./search-BFidPBD3.js";import"./Input-DahsmOdu.js";import"./useControlled-Dodjbhjp.js";import"./Button-CJpjwaeJ.js";import"./small-cross-CoHv2Pfy.js";import"./ActionButton-DtQP3hsQ.js";import"./Checkbox-DbWH43Qv.js";import"./useValueChanged-FTGAX_kt.js";import"./CollapsiblePanel-BN6mK2LP.js";import"./MultiColumnSortDialog-CwBxRogq.js";import"./MenuTrigger-zPgdA44C.js";import"./CompositeItem-9M2opMvG.js";import"./ToolbarRootContext-D_OMSFCs.js";import"./getDisabledMountTransitionStyles-BGe123t6.js";import"./getPseudoElementBounds-B0_03GnG.js";import"./chevron-down-hMfe6qGf.js";import"./index-DXiVbOpv.js";import"./error-C4Sj7yvC.js";import"./BaseCbacBanner-Dgk3xGPG.js";import"./makeExternalStore-B1pTPZCa.js";import"./Tooltip-DcgPgXHU.js";import"./PopoverPopup-Ctx82q43.js";import"./debounce-BNjMaQq1.js";import"./useOsdkClient-Dbnxj5w_.js";import"./tick-Br1OP0c4.js";import"./DropdownField-s6aOcfqL.js";import"./isEqual-CtF3zBG8.js";import"./withOsdkMetrics-DZdRX6WM.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
