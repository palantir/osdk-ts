import{j as i}from"./iframe-C9Yk6gDU.js";import{O as p}from"./object-table-D6erdPoU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DDmiSK_e.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C1C1Zb7q.js";import"./index-C1LUXaZv.js";import"./Dialog-CDkS_jOu.js";import"./cross--AbW-HvV.js";import"./svgIconContainer-Vc9A0mR-.js";import"./useBaseUiId-b5v8aEB7.js";import"./InternalBackdrop-C7n6oAdh.js";import"./composite-DaJF-Ug9.js";import"./index-BqzRBHu8.js";import"./index-CvC-GtCK.js";import"./index-Pn3t-jka.js";import"./useEventCallback-CKcNtt_k.js";import"./SkeletonBar-DdG9T8Ii.js";import"./LoadingCell-nvv6E0-U.js";import"./ColumnConfigDialog-BmorUqWW.js";import"./DraggableList-qGQ6dVRD.js";import"./search-7dKohem7.js";import"./Input-DAXz4YJS.js";import"./useControlled-DMm9xSYk.js";import"./Button-y2WBjgut.js";import"./small-cross-CbivvQt1.js";import"./ActionButton-dAjZm_x0.js";import"./Checkbox-CC7puzXu.js";import"./useValueChanged-RmTUBVN2.js";import"./CollapsiblePanel-C_lIliGf.js";import"./MultiColumnSortDialog-0wa6dZr4.js";import"./MenuTrigger-BZRPF_be.js";import"./CompositeItem-BZYu3hRC.js";import"./ToolbarRootContext-mnplRdcK.js";import"./getDisabledMountTransitionStyles-O3sebmRm.js";import"./getPseudoElementBounds-BNgO_MWm.js";import"./chevron-down-C4Xw0sT3.js";import"./index-iqHzidmh.js";import"./error-c-8HRK8d.js";import"./BaseCbacBanner-BJC8pASp.js";import"./makeExternalStore-BIsaNjNd.js";import"./Tooltip-CPPwTdsT.js";import"./PopoverPopup-B_2bYS3U.js";import"./debounce-BTWXBbIs.js";import"./useOsdkClient-BnQc_DSv.js";import"./tick-iNYSCbk-.js";import"./DropdownField-DhZIM-xb.js";import"./isEqual-CJvGUfrO.js";import"./withOsdkMetrics-OfArat_u.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
