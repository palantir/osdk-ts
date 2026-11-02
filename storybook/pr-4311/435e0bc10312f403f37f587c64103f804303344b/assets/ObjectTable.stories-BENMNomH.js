import{j as i}from"./iframe-CvsrxUF4.js";import{O as p}from"./object-table-BGRqFDk_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-bPQwXcW6.js";import"./preload-helper-uWi1ckbZ.js";import"./Table-FapocmMs.js";import"./index-DCyy6adA.js";import"./Dialog-BcIQF-0e.js";import"./cross-DtTtrll4.js";import"./svgIconContainer-DzgbD020.js";import"./useBaseUiId-B5t4I27A.js";import"./InternalBackdrop-Cugch1V3.js";import"./composite-B3OVmB-U.js";import"./index-DJNWwc48.js";import"./index-CEMwvdDY.js";import"./index-AdzqFMQC.js";import"./useEventCallback-CWso9AzW.js";import"./SkeletonBar-DNcYviI0.js";import"./LoadingCell-D4aa-3Yl.js";import"./ColumnConfigDialog-Gsmn_JKq.js";import"./DraggableList-Dt_y-hjj.js";import"./search-DUdimr2h.js";import"./Input-C5HOYdeG.js";import"./useControlled-m2VSv2nN.js";import"./Button-COOo6KA1.js";import"./small-cross-BdHCzf60.js";import"./ActionButton-BacuR1Ht.js";import"./Checkbox-Cu78tutu.js";import"./useValueChanged-DJNKhzCf.js";import"./CollapsiblePanel-C8Ffq7bK.js";import"./MultiColumnSortDialog-CFw1tWaG.js";import"./MenuTrigger-MhD22OcO.js";import"./CompositeItem-Df2qP5O_.js";import"./ToolbarRootContext-CSZctfrL.js";import"./getDisabledMountTransitionStyles-BqX912Sn.js";import"./getPseudoElementBounds-C85wL7-g.js";import"./chevron-down-eSVm9fha.js";import"./index-DWgnpQrU.js";import"./error-DR19w44a.js";import"./BaseCbacBanner-B4OTIvOe.js";import"./makeExternalStore-BsYlQUVX.js";import"./Tooltip-B-kgUKy-.js";import"./PopoverPopup-DNc4ifyx.js";import"./debounce-CNMotwK2.js";import"./useOsdkClient-7BSZc32P.js";import"./tick-NgklbaJL.js";import"./DropdownField-CdiCIvXD.js";import"./isEqual-CIWEuh_q.js";import"./withOsdkMetrics-DQZsQ0ny.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
