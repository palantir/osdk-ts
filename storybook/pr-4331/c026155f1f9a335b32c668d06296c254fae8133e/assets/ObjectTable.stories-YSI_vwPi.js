import{j as i}from"./iframe-Ck95bxu4.js";import{O as p}from"./object-table-yfo4r35p.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B066FeIB.js";import"./preload-helper-KA9de6lE.js";import"./Table-BfpJ92cE.js";import"./index-Cif5jAEJ.js";import"./Dialog-CxNG9xUy.js";import"./cross-D4AVy5in.js";import"./svgIconContainer-CPHbIRji.js";import"./useBaseUiId-CWyLFOC8.js";import"./InternalBackdrop-BN5IDP0f.js";import"./composite-Yh1yynjC.js";import"./index-BhAq9v2h.js";import"./index-QaBJUBwA.js";import"./index-jkcmc-OQ.js";import"./useEventCallback-B4j9PWJ8.js";import"./SkeletonBar-8iEwSFxF.js";import"./LoadingCell-D9PdMFhW.js";import"./ColumnConfigDialog-M8P9_gve.js";import"./DraggableList-AYfFvqAw.js";import"./search-BS_g30el.js";import"./Input-s6yy9vkz.js";import"./useControlled-B8TEOr6k.js";import"./Button-PWPX_ks7.js";import"./small-cross-B8CohMqi.js";import"./ActionButton-r8oP0f9s.js";import"./Checkbox-D7ynqdrt.js";import"./useValueChanged-B4fSJG4I.js";import"./CollapsiblePanel-D4YJo7Ff.js";import"./MultiColumnSortDialog-CEzGqhr_.js";import"./MenuTrigger-BPdJ6fv_.js";import"./CompositeItem-B10VO3gZ.js";import"./ToolbarRootContext-BRWZ8sOA.js";import"./getDisabledMountTransitionStyles-D5C9DTmw.js";import"./getPseudoElementBounds-skEh5NHv.js";import"./chevron-down-bheQQ_PQ.js";import"./index-K_6WRtRx.js";import"./error-RnJ96IVH.js";import"./BaseCbacBanner-DjBChTmW.js";import"./makeExternalStore-BMm4gCLi.js";import"./Tooltip-rzDvG8SV.js";import"./isObject-1wBlTIbM.js";import"./debounce-xVAvVgAm.js";import"./useOsdkClient-BanL0364.js";import"./tick-CkjrrKLh.js";import"./DropdownField-nQt9qvfV.js";import"./isEqual-DPuwhVwN.js";import"./_baseIsEqual-TosI8jgs.js";import"./withOsdkMetrics-Dr6WHfBD.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
