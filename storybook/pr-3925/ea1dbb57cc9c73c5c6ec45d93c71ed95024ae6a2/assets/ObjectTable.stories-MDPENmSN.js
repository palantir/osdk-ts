import{j as i}from"./iframe-BVyCc2AC.js";import{O as p}from"./object-table-BvrjOYow.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-kfQ_BCKI.js";import"./preload-helper--HBo1d6L.js";import"./Table-NzMBYDC_.js";import"./index-BNzHGqwC.js";import"./Dialog-RFfKY_MI.js";import"./cross-Ch6pWJlm.js";import"./svgIconContainer-C1dTG25d.js";import"./useBaseUiId-DiffXzRm.js";import"./InternalBackdrop-Dx58jf-M.js";import"./composite-CBp6hdMU.js";import"./index-BevvX3YQ.js";import"./index-x0mWFteh.js";import"./index-B8CTpNC0.js";import"./useEventCallback-C0ELfPhC.js";import"./SkeletonBar-BR_liQHe.js";import"./LoadingCell-CZlAChsW.js";import"./ColumnConfigDialog-B83i398L.js";import"./DraggableList-B9Ryk58k.js";import"./search-Dykn9IV3.js";import"./Input-BZeDxcIX.js";import"./useControlled-C2MZaBz1.js";import"./Button-BRNew1Yr.js";import"./small-cross-BuJARxxP.js";import"./ActionButton-Dp7wT3Gt.js";import"./Checkbox-CnXUg1xk.js";import"./useValueChanged-DnFEdsSp.js";import"./CollapsiblePanel-BYmC-C9w.js";import"./MultiColumnSortDialog-BaAbpi0b.js";import"./MenuTrigger-Rg53KH2n.js";import"./CompositeItem-C3G54MgE.js";import"./ToolbarRootContext-DsUmoyrJ.js";import"./getDisabledMountTransitionStyles-DGgBy0ZL.js";import"./getPseudoElementBounds-C0BRyLYY.js";import"./chevron-down-ClvvnW1g.js";import"./index-cmuB7ZqK.js";import"./error-QOEmR757.js";import"./BaseCbacBanner-CgZ5qHj0.js";import"./makeExternalStore-B_RrnM78.js";import"./Tooltip-BJ9N3gwB.js";import"./PopoverPopup-VXym3Z2T.js";import"./debounce-HEmB9pej.js";import"./useOsdkClient-BjhGBjE8.js";import"./tick-TdYmBPGO.js";import"./DropdownField-DVFSk7iy.js";import"./isEqual-D2FhFc1A.js";import"./withOsdkMetrics-B82QxFXL.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
