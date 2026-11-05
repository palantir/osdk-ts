import{j as i}from"./iframe-BtrE9oAk.js";import{O as p}from"./object-table-D-m31t1G.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BG4AFja8.js";import"./preload-helper-Ck9jHBT4.js";import"./Table-BIBZ5jl8.js";import"./index-DTswWCN-.js";import"./Dialog-DKIHG2Ba.js";import"./cross-BpApkSFN.js";import"./svgIconContainer-CMgWIhhO.js";import"./useBaseUiId-DZ_AJh1G.js";import"./InternalBackdrop-DBd41QYf.js";import"./composite-DJfjq7Qz.js";import"./index-BiKdeyQ9.js";import"./index-DAqFPrmn.js";import"./index-B0IzT3xV.js";import"./useEventCallback-CRqKCUPu.js";import"./SkeletonBar-FkO2CaFD.js";import"./LoadingCell-b3e9No3V.js";import"./ColumnConfigDialog-D3psN8jr.js";import"./DraggableList-DHebKqrE.js";import"./search-DH4c7KHc.js";import"./Input-DP5nsCAr.js";import"./useControlled-BzxnQPZx.js";import"./Button-Dt_Nxhrh.js";import"./small-cross-BEsKiWDj.js";import"./ActionButton-D8YPh8JC.js";import"./Checkbox-CDub8AJh.js";import"./useValueChanged-BUerDF1m.js";import"./CollapsiblePanel-CVBxOGW4.js";import"./MultiColumnSortDialog-BK3bY81l.js";import"./MenuTrigger-n_2nDWz3.js";import"./CompositeItem-KY2ZDv1b.js";import"./ToolbarRootContext-CiVShHn0.js";import"./getDisabledMountTransitionStyles-BPDURfHU.js";import"./getPseudoElementBounds-DJUliXcW.js";import"./chevron-down-CGlt-RaH.js";import"./index-Bsvjejoj.js";import"./error-CWqhrvJ7.js";import"./BaseCbacBanner-BZjXIBV8.js";import"./makeExternalStore-iXyWkOaZ.js";import"./Tooltip-CLiO1emX.js";import"./isObject-BsxAo1Me.js";import"./debounce-nhdj0_a1.js";import"./useOsdkClient-Cng8MMf4.js";import"./tick-C2899HhT.js";import"./DropdownField-dLbZrCEg.js";import"./isEqual-Cq9_D6IN.js";import"./_baseIsEqual-jr9aZD60.js";import"./withOsdkMetrics-BliYF0M9.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
