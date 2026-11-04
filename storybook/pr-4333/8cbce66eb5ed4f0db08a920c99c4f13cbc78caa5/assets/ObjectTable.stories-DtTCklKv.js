import{j as i}from"./iframe-DSFJZDbB.js";import{O as p}from"./object-table-B8xjoy0n.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-cCHR-bCL.js";import"./preload-helper-BXZsHDRp.js";import"./Table-1XkMER8j.js";import"./index-7paxFDvD.js";import"./Dialog-Caab4FUH.js";import"./cross-BB9CVc-Q.js";import"./svgIconContainer-RNVtlkjd.js";import"./useBaseUiId-c3zUK5X5.js";import"./InternalBackdrop-DdORp9Q9.js";import"./composite-DxVQtdWX.js";import"./index-DZNGA6d-.js";import"./index-D6ZHe2_A.js";import"./index-CAeppKO1.js";import"./useEventCallback-DTCuInat.js";import"./SkeletonBar-DQiEZV8C.js";import"./LoadingCell-XNktlDu8.js";import"./ColumnConfigDialog-CjybA5H0.js";import"./DraggableList-C-iyGsMt.js";import"./search-CoFzowK4.js";import"./Input-PKRWZfPT.js";import"./useControlled-C2eq60VR.js";import"./Button-DQPbKfHN.js";import"./small-cross-B1kb7b-t.js";import"./ActionButton-kgYnBNqq.js";import"./Checkbox-Cn6m-uDp.js";import"./useValueChanged-b7YKzV-e.js";import"./CollapsiblePanel-DdKqq7dp.js";import"./MultiColumnSortDialog-P9C5XVU0.js";import"./MenuTrigger-CkpMeat5.js";import"./CompositeItem-Dz7MzIvk.js";import"./ToolbarRootContext-jXB37hMy.js";import"./getDisabledMountTransitionStyles-CwpF8ZPZ.js";import"./getPseudoElementBounds-BWVx--r2.js";import"./chevron-down-VJT3Mdig.js";import"./index-Cwvk-iSE.js";import"./error-uQwZC4G-.js";import"./BaseCbacBanner-B8PXr8iA.js";import"./makeExternalStore-CLq3a0rV.js";import"./Tooltip-DWE64HaZ.js";import"./PopoverPopup-CfSBk3Qn.js";import"./debounce-BHFyCnbQ.js";import"./useOsdkClient-wklcT--g.js";import"./tick-6JyAUDtT.js";import"./DropdownField-DYg7EKof.js";import"./isEqual-DZCHnOpJ.js";import"./withOsdkMetrics-BTLO2asc.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
