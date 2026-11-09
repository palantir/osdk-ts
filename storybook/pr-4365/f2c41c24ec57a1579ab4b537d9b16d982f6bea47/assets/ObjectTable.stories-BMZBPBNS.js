import{j as i}from"./iframe-B1cjW9lN.js";import{O as p}from"./object-table-B9PygxED.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CiLocD64.js";import"./preload-helper-esge5jOw.js";import"./Table-Eq_CeIkf.js";import"./index-DBKcAKBa.js";import"./Dialog-Jn4y4XS8.js";import"./cross-B-sNKi3J.js";import"./svgIconContainer-z9g6oSzF.js";import"./useBaseUiId-CtX_9P1W.js";import"./InternalBackdrop-wKJgBdeU.js";import"./composite-rAM9AtlZ.js";import"./index-CuHejiQW.js";import"./index-CalZYv_8.js";import"./index-Bql2IapG.js";import"./useEventCallback-92aUWZ3N.js";import"./SkeletonBar-BLVnUxZg.js";import"./LoadingCell-BQamoQUk.js";import"./ColumnConfigDialog-_8oVLR1B.js";import"./DraggableList-gqUnaBKo.js";import"./search-050tV6oC.js";import"./Input-DbrQZdXa.js";import"./useControlled-DdMiAZ8X.js";import"./Button-Dy6NAp_j.js";import"./small-cross-BVJ_zxjg.js";import"./ActionButton-3Dynih0B.js";import"./Checkbox-ChDDet3u.js";import"./useValueChanged-CEYyAvOZ.js";import"./CollapsiblePanel-56xbF4C6.js";import"./MultiColumnSortDialog-BlHZIdWq.js";import"./MenuTrigger-79xVCCUd.js";import"./CompositeItem-CR9WkMFf.js";import"./ToolbarRootContext-CQYaUzuu.js";import"./getDisabledMountTransitionStyles-B5gHyAnx.js";import"./getPseudoElementBounds-Cs7nJpkY.js";import"./chevron-down-Qs9iMpX5.js";import"./index-B7TJ5Vg6.js";import"./error-4QB3sX_8.js";import"./BaseCbacBanner-BUmy3QjG.js";import"./makeExternalStore-CvmwDfYu.js";import"./Tooltip-DzMrezpL.js";import"./isObject-ekK2jEIM.js";import"./debounce-BsGa84tP.js";import"./useOsdkClient-DPZRapDv.js";import"./tick-7_Cax-oj.js";import"./DropdownField-Bhsc50nt.js";import"./isEqual-WveHXPpz.js";import"./_baseIsEqual-DkPaQEsL.js";import"./withOsdkMetrics-NF_KYzrC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
