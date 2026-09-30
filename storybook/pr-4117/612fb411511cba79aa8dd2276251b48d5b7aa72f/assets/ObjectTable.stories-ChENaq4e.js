import{j as i}from"./iframe-BarfOKYJ.js";import{O as p}from"./object-table-BA95ot9T.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BduLNUSs.js";import"./preload-helper-DhgTfoUj.js";import"./Table-CYwjXXf8.js";import"./index-DdXQxkq9.js";import"./Dialog-BObe6AXz.js";import"./cross-awiM4qkb.js";import"./svgIconContainer-CZ2JLaJP.js";import"./useBaseUiId-DPa9F6U_.js";import"./InternalBackdrop-CzqI8c2A.js";import"./composite-C6iH7oZR.js";import"./index-CylLJLDi.js";import"./index-BSz4BzcY.js";import"./index-8BqqJVP-.js";import"./useEventCallback-BM5lsma7.js";import"./SkeletonBar-DwtS4_5f.js";import"./LoadingCell-BZXewJRV.js";import"./ColumnConfigDialog-D8VaEYza.js";import"./DraggableList-PlZw6FYG.js";import"./search-C8DSNwE8.js";import"./Input-BuDULjbT.js";import"./useControlled-Bj7AFHc7.js";import"./Button-glJjOdf_.js";import"./small-cross-BpfwKVxt.js";import"./ActionButton-CLQTqINC.js";import"./Checkbox-CIvg_P1G.js";import"./useValueChanged-CeW4BP0G.js";import"./CollapsiblePanel-BLyrJB6N.js";import"./MultiColumnSortDialog-CNuD0TJX.js";import"./MenuTrigger-WpUQ5-iy.js";import"./CompositeItem-DtdptPgn.js";import"./ToolbarRootContext-BuAvit0a.js";import"./getDisabledMountTransitionStyles-BKNuGRXS.js";import"./getPseudoElementBounds-CoZE2llY.js";import"./chevron-down-CDrseuzZ.js";import"./index-BYqnSnwI.js";import"./error-D3ss51fq.js";import"./BaseCbacBanner-Lt4jf_3F.js";import"./makeExternalStore-Ddoj9Y3j.js";import"./Tooltip-BFgf2gEu.js";import"./PopoverPopup-CIFWoRMP.js";import"./debounce-BerZfsn6.js";import"./useOsdkClient-Bup81mrr.js";import"./tick-BdVYhETS.js";import"./DropdownField-CsNv8iOU.js";import"./isEqual-BDgUedTG.js";import"./withOsdkMetrics-B8r59qzx.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
