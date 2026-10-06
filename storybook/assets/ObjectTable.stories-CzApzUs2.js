import{j as i}from"./iframe-CDH1WiIm.js";import{O as p}from"./object-table-DvV-fhP8.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-KV704inH.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C7k-xA1j.js";import"./index-B7I34VMP.js";import"./Dialog-B00E6QBC.js";import"./cross-DSLkFMBK.js";import"./svgIconContainer-Da2lUN6l.js";import"./useBaseUiId-JwegC6SR.js";import"./InternalBackdrop-Ymvd285K.js";import"./composite-DFKUfi-t.js";import"./index-DCeQ8dAs.js";import"./index-D4yRNX2z.js";import"./index-ByzjRZqg.js";import"./useEventCallback-YXO9hBaK.js";import"./SkeletonBar-vcgWDMUZ.js";import"./LoadingCell-CEa6pU9A.js";import"./ColumnConfigDialog-DlV2mLPY.js";import"./DraggableList-Z0LPk5VF.js";import"./search-X3YzFylv.js";import"./Input-C3uKrLbE.js";import"./useControlled-A612R_Ug.js";import"./Button-BAc-Yi4x.js";import"./small-cross-Y-Ua0rov.js";import"./ActionButton-qDTU_xQE.js";import"./Checkbox-Doix9LyN.js";import"./useValueChanged-CdCPYrMD.js";import"./CollapsiblePanel-HEhJKVUx.js";import"./MultiColumnSortDialog-CSYiplEL.js";import"./MenuTrigger-D0RZOwzK.js";import"./CompositeItem-Bb5XEEzb.js";import"./ToolbarRootContext-C2jXlctC.js";import"./getDisabledMountTransitionStyles-sx84wb4-.js";import"./getPseudoElementBounds-Cyvc7G6J.js";import"./chevron-down-NcW2HNuz.js";import"./index-CWdGZp3O.js";import"./error-CzptjxzD.js";import"./BaseCbacBanner-CPSiiTfE.js";import"./makeExternalStore-BAbkp8fW.js";import"./Tooltip-DNYhKq8H.js";import"./PopoverPopup-DtSASMWY.js";import"./debounce-CKvBdIMZ.js";import"./useOsdkClient-quJN66XR.js";import"./tick-DugjRgsB.js";import"./DropdownField-hs-JPN-J.js";import"./isEqual-SVs-xcCf.js";import"./withOsdkMetrics-BG-JB_sg.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
