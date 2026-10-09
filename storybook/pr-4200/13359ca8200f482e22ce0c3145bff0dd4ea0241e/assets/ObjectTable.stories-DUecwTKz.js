import{j as i}from"./iframe-CHlNqADV.js";import{O as p}from"./object-table-Bz1O0psn.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CTmCRCoI.js";import"./preload-helper-ChuInVZg.js";import"./Table-DSVdoqZo.js";import"./index-Bf2fBgJU.js";import"./Dialog-CUe0f-N6.js";import"./cross-CuFYXv7r.js";import"./svgIconContainer-BDP_fhkF.js";import"./useBaseUiId-DYvtoeJl.js";import"./InternalBackdrop-L9tv4-K0.js";import"./composite-DktMQB3d.js";import"./index-ChdJCR6a.js";import"./index-A-SGLt67.js";import"./index-BH1I75dT.js";import"./useEventCallback-DjyoxhV1.js";import"./SkeletonBar-Bqq4C_Xz.js";import"./LoadingCell-EwnPi-q5.js";import"./ColumnConfigDialog-DxDbIYPV.js";import"./DraggableList-C8q6Bo9V.js";import"./search-kgQIq9W2.js";import"./Input-CRkTA9js.js";import"./useControlled-D7wM_LXO.js";import"./Button-C2n7qnnT.js";import"./small-cross-DxzGq3IE.js";import"./ActionButton-DeQmFSZA.js";import"./Checkbox-BStfIwWS.js";import"./useValueChanged-DNlrhM8D.js";import"./CollapsiblePanel-CqIVhAsV.js";import"./MultiColumnSortDialog-CBGhSZ7z.js";import"./MenuTrigger-CbvpRhV-.js";import"./CompositeItem-Cfdppx_k.js";import"./ToolbarRootContext-CUs10wim.js";import"./getDisabledMountTransitionStyles-B6MFKsrU.js";import"./getPseudoElementBounds-Dzxtf5td.js";import"./chevron-down-DJ0NZq7q.js";import"./index-BCBHNrII.js";import"./error-B_eFesCr.js";import"./BaseCbacBanner-L5OpTRFG.js";import"./makeExternalStore-C006dyrV.js";import"./Tooltip-BybVAEch.js";import"./PopoverPopup-CPS07fp6.js";import"./debounce-C1-IqOWQ.js";import"./useOsdkClient-BUpa-g5c.js";import"./tick-BGYvlHNw.js";import"./DropdownField-BHM3Py0i.js";import"./isEqual-5lz-MWW-.js";import"./withOsdkMetrics-Dhrl7hco.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
