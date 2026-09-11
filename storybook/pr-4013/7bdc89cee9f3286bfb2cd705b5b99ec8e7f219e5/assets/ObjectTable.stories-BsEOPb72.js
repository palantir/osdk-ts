import{j as i}from"./iframe-B8NhUX_0.js";import{O as p}from"./object-table-CA1teDNA.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BlX-uSt-.js";import"./preload-helper-DjGFPnLe.js";import"./Table-C2uoaozX.js";import"./index-qsMi88gm.js";import"./Dialog-CHkRp34m.js";import"./cross-D9Q-WwoP.js";import"./svgIconContainer-Bf9SOHJ7.js";import"./useBaseUiId-Cn8iX50p.js";import"./InternalBackdrop-Zc3lnf0p.js";import"./composite-BwIOwpx5.js";import"./index-CQvGYdFy.js";import"./index-DWq__3H-.js";import"./index-Ba4Tc_iW.js";import"./useEventCallback-xA1EFPwl.js";import"./SkeletonBar-DmZ0r3ux.js";import"./LoadingCell-DtncvfD2.js";import"./ColumnConfigDialog-Di44nFKi.js";import"./DraggableList-gdzatwPU.js";import"./search-BmvHXAW1.js";import"./Input-SBCQtK3z.js";import"./useControlled-Bf5eet3i.js";import"./Button-DNRq2HIP.js";import"./small-cross-nXdJrVSH.js";import"./ActionButton-2e8flOqN.js";import"./Checkbox-BlAB2Wqb.js";import"./useValueChanged-g78IRiUM.js";import"./CollapsiblePanel-BJZlXQuG.js";import"./MultiColumnSortDialog-CpVilSt6.js";import"./MenuTrigger-DINcwWL4.js";import"./CompositeItem-C5ZLF5hx.js";import"./ToolbarRootContext-bf_wSBCX.js";import"./getDisabledMountTransitionStyles-O8DCg2MV.js";import"./getPseudoElementBounds-CbA1rS7d.js";import"./chevron-down-DxRnKcur.js";import"./index-CtzR-IoK.js";import"./error-CPePVciD.js";import"./BaseCbacBanner-Dohx4NqC.js";import"./makeExternalStore-BpOl3JpH.js";import"./Tooltip-Cw796QuD.js";import"./PopoverPopup-DU44Cqzs.js";import"./debounce-uoRbC81R.js";import"./useOsdkClient-BUtE_XGy.js";import"./tick-DJSkN9NZ.js";import"./DropdownField-BxGt7Ohj.js";import"./isEqual-C8yEni87.js";import"./withOsdkMetrics-BzqeXglY.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
