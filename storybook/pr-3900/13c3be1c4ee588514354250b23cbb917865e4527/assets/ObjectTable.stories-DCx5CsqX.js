import{j as i}from"./iframe-CJUBUTub.js";import{O as p}from"./object-table-DwddERxx.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C4jIdbL-.js";import"./preload-helper-CIaS7xmC.js";import"./Table-D6LAu_qp.js";import"./index-D6RKL9xW.js";import"./Dialog-tFwyZqn4.js";import"./cross-CLjLUeJo.js";import"./svgIconContainer-CXg-3J8w.js";import"./useBaseUiId-YnyDNtng.js";import"./InternalBackdrop-Rxhs1aJY.js";import"./composite-IgJfsXTy.js";import"./index-DmjIOSHs.js";import"./index-BfGfq02Q.js";import"./index-C5qONp6M.js";import"./useEventCallback-L7RTqL_n.js";import"./SkeletonBar-BdJVeNGK.js";import"./LoadingCell-BA54JClW.js";import"./ColumnConfigDialog-0w9-pAgF.js";import"./DraggableList-K0eBUk7L.js";import"./search-5t0wk0Gr.js";import"./Input-DfF7VsZQ.js";import"./useControlled-C4N2tr7p.js";import"./Button-DCqz38K7.js";import"./small-cross-BLph0oUA.js";import"./ActionButton-aE1Vn891.js";import"./Checkbox-C1_eXCF3.js";import"./useValueChanged-BhGo1cQZ.js";import"./CollapsiblePanel-BUDs43GM.js";import"./MultiColumnSortDialog-DqqkdhJm.js";import"./MenuTrigger-PEhyz_-A.js";import"./CompositeItem-CL-JcIqG.js";import"./ToolbarRootContext-BtuYN_1f.js";import"./getDisabledMountTransitionStyles-CpqTqMd3.js";import"./getPseudoElementBounds-BF4H2UwQ.js";import"./chevron-down-CuNdvUfz.js";import"./index-C3hSlA2p.js";import"./error--zLI5MtK.js";import"./BaseCbacBanner-CYib6Qd_.js";import"./makeExternalStore-DKQcCda3.js";import"./Tooltip-DIGJzMd5.js";import"./PopoverPopup-CRY5tVUJ.js";import"./debounce-DNVsdhoz.js";import"./useOsdkClient-B1B799x9.js";import"./tick-iXfhAnSu.js";import"./DropdownField-Colf05W8.js";import"./isEqual-X86jlpqw.js";import"./withOsdkMetrics-DJlQtgHI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
