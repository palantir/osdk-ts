import{j as i}from"./iframe-Dua4ajQH.js";import{O as p}from"./object-table-BSBQ7353.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-5DCNikty.js";import"./preload-helper-TWiFBZiW.js";import"./Table-DyO6ZkMd.js";import"./index-B5QPpnt_.js";import"./Dialog-CoMuSCwK.js";import"./cross-Dk_ZgApr.js";import"./svgIconContainer-BndmJKKI.js";import"./useBaseUiId-BiStwtEQ.js";import"./InternalBackdrop-LR3Q-MAi.js";import"./composite-C1niPINm.js";import"./index-DfHqmq9q.js";import"./index-X9-XOgeq.js";import"./index-Bj03qASY.js";import"./useEventCallback-DZJs1tu0.js";import"./SkeletonBar-BtuMnAJN.js";import"./LoadingCell-CIVBKFE1.js";import"./ColumnConfigDialog-D5XiHMJ_.js";import"./DraggableList-CU9ZT-2r.js";import"./search-BpzzW9g6.js";import"./Input-CWXiSgRy.js";import"./useControlled-jEZs-eRF.js";import"./Button--2vsDgC3.js";import"./small-cross-CErn4ZoN.js";import"./ActionButton-6icQAY27.js";import"./Checkbox-wBcS_UPd.js";import"./useValueChanged-Dl2xjnKi.js";import"./CollapsiblePanel-Pt5pzLj1.js";import"./MultiColumnSortDialog-E8hvHAyR.js";import"./MenuTrigger-DMCiVOOQ.js";import"./CompositeItem-BwhFHjMK.js";import"./ToolbarRootContext-jICZlJZR.js";import"./getDisabledMountTransitionStyles-D--ljA0s.js";import"./getPseudoElementBounds-ruL93tCB.js";import"./chevron-down-CBHx2nKD.js";import"./index-kT6ASJhA.js";import"./error-B8MXwNx9.js";import"./BaseCbacBanner-BV5_M2D5.js";import"./makeExternalStore-C1Ti9SLi.js";import"./Tooltip-B0A5ZHrA.js";import"./PopoverPopup-DqsKdDvA.js";import"./debounce-CGnJH3Kx.js";import"./useOsdkClient-kLLc3fFG.js";import"./tick-C8Mo77j_.js";import"./DropdownField-BHc6qe6w.js";import"./isEqual-CzhJjz_a.js";import"./withOsdkMetrics-BPBDIPLq.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
