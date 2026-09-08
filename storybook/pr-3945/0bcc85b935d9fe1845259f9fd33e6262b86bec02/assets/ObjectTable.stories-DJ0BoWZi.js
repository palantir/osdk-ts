import{j as i}from"./iframe-zJLPhxDK.js";import{O as p}from"./object-table-Cp_r17tu.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DvL6J2Nk.js";import"./preload-helper-GdadUrm9.js";import"./Table-D8q83Fop.js";import"./index-vZmbqUi_.js";import"./Dialog-BJTpqgdP.js";import"./cross-CmuzwVFc.js";import"./svgIconContainer-17tBJAuz.js";import"./useBaseUiId-J532w0x8.js";import"./InternalBackdrop-DYym0q9C.js";import"./composite-CNMHWwCZ.js";import"./index-CDChpdVQ.js";import"./index-CPu2nGpB.js";import"./index-CjB3uV7l.js";import"./useEventCallback-CBonnidZ.js";import"./SkeletonBar-BB2sdYKt.js";import"./LoadingCell-BWSietrN.js";import"./ColumnConfigDialog-BMfkiHBt.js";import"./DraggableList-DkEAjvno.js";import"./search-Bw5FPkB2.js";import"./Input-DZwpfTHR.js";import"./useControlled-CczBvYjn.js";import"./Button-DBmBk1R0.js";import"./small-cross-CPIIsUu1.js";import"./ActionButton-DFDnceTv.js";import"./Checkbox-CsH-jZZw.js";import"./useValueChanged-C-tMKNKt.js";import"./CollapsiblePanel-8-MkrIjK.js";import"./MultiColumnSortDialog-D-a7nSC7.js";import"./MenuTrigger-C7PFgrEd.js";import"./CompositeItem-BJ5z2a5g.js";import"./ToolbarRootContext-BZVYMUxs.js";import"./getDisabledMountTransitionStyles-CLhsnKXl.js";import"./getPseudoElementBounds-B6OAxxYX.js";import"./chevron-down-Bpi62_qF.js";import"./index-C3FdRyLS.js";import"./error-CbniACzb.js";import"./BaseCbacBanner-BqucRKS0.js";import"./makeExternalStore-BwWr7KGq.js";import"./Tooltip-DPh4VI-S.js";import"./PopoverPopup-BppR1H6u.js";import"./debounce-mJk9aS5I.js";import"./useOsdkClient-C-E3sQun.js";import"./tick-BImD79hT.js";import"./DropdownField-C-INYeTI.js";import"./isEqual-CkRnhV_Y.js";import"./withOsdkMetrics-Bw_72zWT.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
