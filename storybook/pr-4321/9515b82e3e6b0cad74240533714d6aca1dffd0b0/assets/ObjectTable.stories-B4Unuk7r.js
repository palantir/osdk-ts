import{j as i}from"./iframe-D7hanWlH.js";import{O as p}from"./object-table-B9BSBSuY.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BX2e-dYM.js";import"./preload-helper-CO6dxj1b.js";import"./Table-DnfTO7tD.js";import"./index-D-fAM26k.js";import"./Dialog-DykZ-GDW.js";import"./cross-Y5gvP3Fl.js";import"./svgIconContainer-DvWstcAL.js";import"./useBaseUiId-Bu7z_xTH.js";import"./InternalBackdrop-BFQj_iFn.js";import"./composite-D9lkXcst.js";import"./index-D_yrCdEG.js";import"./index-vVHHs4bi.js";import"./index-IdV4lxqA.js";import"./useEventCallback-BbTn_ynB.js";import"./SkeletonBar-DmFGXpbg.js";import"./LoadingCell-BvBSbo6-.js";import"./ColumnConfigDialog-B-cqY6bi.js";import"./DraggableList-BDoSemfa.js";import"./search-DSRtq581.js";import"./Input-Cdf8UtKg.js";import"./useControlled-i2ARdjw-.js";import"./Button-BnMNzQq6.js";import"./small-cross-B6GvYH7n.js";import"./ActionButton-C66CjuoN.js";import"./Checkbox-D6sv6PUT.js";import"./useValueChanged-oGOkIYmK.js";import"./CollapsiblePanel-pB8a9YNp.js";import"./MultiColumnSortDialog-BbVtWN8m.js";import"./MenuTrigger-BSuArtnh.js";import"./CompositeItem-tDOcOAJb.js";import"./ToolbarRootContext-Dx6PUY5o.js";import"./getDisabledMountTransitionStyles-DWFqeBfp.js";import"./getPseudoElementBounds-DqLcKxx9.js";import"./chevron-down-Cjgkim-K.js";import"./index-Dt79Win6.js";import"./error-CzhlMkp_.js";import"./BaseCbacBanner-BcxhCrYW.js";import"./makeExternalStore-UI8ZJEmg.js";import"./Tooltip-Bb8Pjuc6.js";import"./isObject-Ch3YWkBe.js";import"./debounce-mHKnM1xi.js";import"./useOsdkClient-BSYzdils.js";import"./tick-CdQvoyle.js";import"./DropdownField-D4ARGNHY.js";import"./isEqual-CNmW_1dD.js";import"./_baseIsEqual-TTSxSqVi.js";import"./withOsdkMetrics-BemcFffG.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
