import{j as i}from"./iframe-DbFL1YKD.js";import{O as p}from"./object-table-E1TD6FiH.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BR4fPXLZ.js";import"./preload-helper-DPeLqFG0.js";import"./Table-4fjAyFff.js";import"./index-BpVl4HIU.js";import"./Dialog-nIfIufiq.js";import"./cross-BbsbdKVz.js";import"./svgIconContainer-DmqA5_t8.js";import"./useBaseUiId-DpJu2OQl.js";import"./InternalBackdrop-CWJBApus.js";import"./composite-DUwAvhnX.js";import"./index-Dqg20C0A.js";import"./index-BusxuARM.js";import"./index-pnTqVHDC.js";import"./useEventCallback-Dp_d2SUA.js";import"./SkeletonBar-C5Dm8uJU.js";import"./LoadingCell-NDk8zku3.js";import"./ColumnConfigDialog-BEksKmdc.js";import"./DraggableList-7WaRfhpo.js";import"./search-DfBNorlD.js";import"./Input-Z3iSNu5L.js";import"./useControlled-CC7pAFD9.js";import"./Button-DsQQlkgI.js";import"./small-cross-CXtNxeYe.js";import"./ActionButton-DojK71a-.js";import"./Checkbox-C_WkvYth.js";import"./useValueChanged-rzn5oUi-.js";import"./CollapsiblePanel-rxa4K0IB.js";import"./MultiColumnSortDialog-KMu4fX3c.js";import"./MenuTrigger-BPE6GEGI.js";import"./CompositeItem-BFMnxKL4.js";import"./ToolbarRootContext-BGVeLiJB.js";import"./getDisabledMountTransitionStyles-Co12HikA.js";import"./getPseudoElementBounds-C-Gj9_OL.js";import"./chevron-down-BFigfpWF.js";import"./index-Dqpnei48.js";import"./error-B_or4gbN.js";import"./BaseCbacBanner-BAqqImX8.js";import"./makeExternalStore-DCuWZO1g.js";import"./Tooltip-BnTll5Ro.js";import"./PopoverPopup-BpDStnyX.js";import"./debounce-B-7wdJBB.js";import"./useOsdkClient-CwS7VwCc.js";import"./tick-C7lpv1d9.js";import"./DropdownField-DzYuycL4.js";import"./isEqual-BpI-y_2L.js";import"./withOsdkMetrics-CCBEdesf.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
