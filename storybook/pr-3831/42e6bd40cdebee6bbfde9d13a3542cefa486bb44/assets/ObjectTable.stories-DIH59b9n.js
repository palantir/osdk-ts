import{j as i}from"./iframe-rtx-0Vyx.js";import{O as p}from"./object-table-DtPmTNdM.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-q0Lp7cUh.js";import"./preload-helper-Bj3BOALb.js";import"./Table-DBfOvOQZ.js";import"./index-DKIcRxjy.js";import"./Dialog-CUepzDAn.js";import"./cross-6kSQG1-7.js";import"./svgIconContainer-B40rfxVj.js";import"./useBaseUiId-CuRyK44H.js";import"./InternalBackdrop-DvMfLZSf.js";import"./composite-Nf4msj3r.js";import"./index-DOmjJjSc.js";import"./index-ITtGThnU.js";import"./index-3_OFjQJp.js";import"./useEventCallback-B9udz5VM.js";import"./SkeletonBar-C-MuLmph.js";import"./LoadingCell-1QXN4pJr.js";import"./ColumnConfigDialog-C9oQO5-G.js";import"./DraggableList-CoZrT756.js";import"./search-Dwc9HsWE.js";import"./Input-B-96zHSB.js";import"./useControlled-D6W72m7H.js";import"./Button-poD_kS0t.js";import"./small-cross-CDz-CGy6.js";import"./ActionButton-CLmSCJDX.js";import"./Checkbox-B6zqZfCp.js";import"./useValueChanged-BOReqqPH.js";import"./CollapsiblePanel-YvE-EakE.js";import"./MultiColumnSortDialog-D_-x7Yam.js";import"./MenuTrigger-fi2dtKt0.js";import"./CompositeItem-BYIrnHf7.js";import"./ToolbarRootContext-CZQywvtv.js";import"./getDisabledMountTransitionStyles-CEdGgCOp.js";import"./getPseudoElementBounds-BpzKuQgE.js";import"./chevron-down-uhEr0Z3V.js";import"./index-CxSdDGJa.js";import"./error-ClD13ltF.js";import"./BaseCbacBanner-CC_Nqmy_.js";import"./makeExternalStore-ColxyoCn.js";import"./Tooltip-CGWRFZRN.js";import"./PopoverPopup-BRQtjEfh.js";import"./toNumber-DfJFvF00.js";import"./useOsdkClient-D3_4QTIG.js";import"./tick-vnDda9AF.js";import"./DropdownField-kN_2pP4G.js";import"./withOsdkMetrics-B-DLHJlS.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
