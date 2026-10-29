import{j as i}from"./iframe-CDOSHHrT.js";import{O as p}from"./object-table-yA2uLPHr.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DGd5gY0C.js";import"./preload-helper-C7s0GH2x.js";import"./Table-CzhTEXAF.js";import"./index-B49rYjrW.js";import"./Dialog-CnewdUpg.js";import"./cross-BFylRGnd.js";import"./svgIconContainer-De09oUFB.js";import"./useBaseUiId-DTVz5o-p.js";import"./InternalBackdrop-Cz8GamC4.js";import"./composite-ClRcggKL.js";import"./index-CMiNXGca.js";import"./index-DGmOJSLl.js";import"./useEventCallback-OCPQsthF.js";import"./SkeletonBar-BbruRB1c.js";import"./LoadingCell-CG861Lp6.js";import"./ColumnConfigDialog-BaWSSk7K.js";import"./DraggableList-CddPZ7rk.js";import"./search-CEcnnij_.js";import"./Input-BurDSqz5.js";import"./useControlled-C7Ep-7i8.js";import"./Button-BvdBUf3P.js";import"./small-cross-BhFa-iux.js";import"./ActionButton-C99QTbiy.js";import"./Checkbox-TsyVahlk.js";import"./useValueChanged-DrhV6J-4.js";import"./CollapsiblePanel-D6WRzd0y.js";import"./MultiColumnSortDialog-B526rR5B.js";import"./MenuTrigger-CIQ7JhVC.js";import"./CompositeItem-CaCo0rwH.js";import"./ToolbarRootContext-B8w6xXAv.js";import"./getDisabledMountTransitionStyles-BS4YLUcj.js";import"./getPseudoElementBounds-B_MpIFyK.js";import"./chevron-down-BmuDMVTK.js";import"./index-CpJ8i9_a.js";import"./error-C4hjwR0B.js";import"./BaseCbacBanner-DGLnZVUS.js";import"./makeExternalStore-D4uD5G65.js";import"./Tooltip-C9jpQygb.js";import"./PopoverPopup-SjgoRQ3b.js";import"./debounce-BmMiYGXj.js";import"./useOsdkClient-B9tQWmKk.js";import"./tick-DfF6ja2F.js";import"./DropdownField-fwqkmPCP.js";import"./isEqual-BB4oShAJ.js";import"./withOsdkMetrics-RGxpItz-.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
