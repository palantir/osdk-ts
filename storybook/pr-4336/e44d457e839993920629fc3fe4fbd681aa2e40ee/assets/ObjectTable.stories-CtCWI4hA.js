import{j as i}from"./iframe-BTvYIEq8.js";import{O as p}from"./object-table-BDs6ZIZB.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D7-PgH_K.js";import"./preload-helper-CFYdII7P.js";import"./Table-HrNvjbUR.js";import"./index-Beef_kHp.js";import"./Dialog-CRyYU8oH.js";import"./cross-sKht6Kec.js";import"./svgIconContainer-CDJ2X3CN.js";import"./useBaseUiId-DVwPqKHc.js";import"./InternalBackdrop-BI_MJr4_.js";import"./composite-UnbXp0a2.js";import"./index-BVCWAs35.js";import"./index-CHR8y95E.js";import"./index-CANSaJTu.js";import"./useEventCallback-CwXh44fh.js";import"./SkeletonBar-iK4bBXD5.js";import"./LoadingCell-B-gsgGd4.js";import"./ColumnConfigDialog-2_efwR7t.js";import"./DraggableList-BfQihvC2.js";import"./search-Dy8Cjq17.js";import"./Input-WD0q61A7.js";import"./useControlled-CpfYcIbT.js";import"./Button-EZBekNYG.js";import"./small-cross-CqhWne9-.js";import"./ActionButton-DfZ4bMP2.js";import"./Checkbox-D7sg0_ag.js";import"./useValueChanged-DAMkXmw8.js";import"./CollapsiblePanel-DcdCTuB_.js";import"./MultiColumnSortDialog-D01rTg2B.js";import"./MenuTrigger-ejaNiXN3.js";import"./CompositeItem-nLfGi46c.js";import"./ToolbarRootContext-U5RtpmpZ.js";import"./getDisabledMountTransitionStyles-BbQWw9EP.js";import"./getPseudoElementBounds-BDf86miM.js";import"./chevron-down-Bkejrg-1.js";import"./index-DyutDDDZ.js";import"./error-ByI-eSLJ.js";import"./BaseCbacBanner-QUKWe09r.js";import"./makeExternalStore-B8YeuVYn.js";import"./Tooltip-B1Fhyptq.js";import"./PopoverPopup-CtLtSFsG.js";import"./debounce-C9YzblTl.js";import"./useOsdkClient-Dy5Kdk0b.js";import"./tick-DqlQ5rnC.js";import"./DropdownField-NUB4RBhJ.js";import"./isEqual-B9PMZa9f.js";import"./withOsdkMetrics-BCNSh7gL.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
