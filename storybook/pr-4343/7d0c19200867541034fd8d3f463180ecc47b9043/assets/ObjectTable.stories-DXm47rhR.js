import{j as i}from"./iframe-DnJOFPSX.js";import{O as p}from"./object-table-gFqlJS5g.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DFKa7cOY.js";import"./preload-helper-DE0LB-In.js";import"./Table-BJcfBT_4.js";import"./index-BsrGUZmH.js";import"./Dialog--q8TWEco.js";import"./cross-RxTC7yT1.js";import"./svgIconContainer-C9e6psM5.js";import"./useBaseUiId-BmOtxMBQ.js";import"./InternalBackdrop-7uH3PXR7.js";import"./composite-ActYTO9Q.js";import"./index-C47JnOK2.js";import"./index-CN_nZvI2.js";import"./index-DQIivcku.js";import"./useEventCallback-C_WDvZGp.js";import"./SkeletonBar-BGTPHBC_.js";import"./LoadingCell-DJghmWTk.js";import"./ColumnConfigDialog-BJKPTxxk.js";import"./DraggableList-DiNHAcJn.js";import"./search-1uNTCuXG.js";import"./Input-DAAzhLOd.js";import"./useControlled-LZY0zNEU.js";import"./Button-cZ9KvtCU.js";import"./small-cross--HeoX71E.js";import"./ActionButton-CLFbgSEP.js";import"./Checkbox-9sBFzHkG.js";import"./useValueChanged-Dwzdf7-z.js";import"./CollapsiblePanel-ZSBWQMSx.js";import"./MultiColumnSortDialog-DrXRIxJ_.js";import"./MenuTrigger-C-pCHk80.js";import"./CompositeItem-C0xu2aal.js";import"./ToolbarRootContext-C0ive6C5.js";import"./getDisabledMountTransitionStyles-Dp_4ImaZ.js";import"./getPseudoElementBounds-CwjzgNQM.js";import"./chevron-down-DnnfJ5YY.js";import"./index-Dz6yRx1S.js";import"./error-BL2HC2Sp.js";import"./BaseCbacBanner-Dfw4KXDB.js";import"./makeExternalStore-CKgPh2OO.js";import"./Tooltip-DFNnZgP9.js";import"./PopoverPopup-DM0BfveY.js";import"./debounce-DbuR1tvL.js";import"./useOsdkClient-B002ZQ1y.js";import"./tick-DQ7wMG8T.js";import"./DropdownField-FHfvzp38.js";import"./isEqual-DzKwZRaR.js";import"./withOsdkMetrics-DbwiXd_V.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
