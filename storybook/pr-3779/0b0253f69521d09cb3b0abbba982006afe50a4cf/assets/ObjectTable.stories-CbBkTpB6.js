import{j as i}from"./iframe-BH0RiS07.js";import{O as p}from"./object-table-Dw7wP583.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CpZmf--s.js";import"./preload-helper-ByubuHXR.js";import"./Table-xSzS9mg-.js";import"./index-7v2RjI2w.js";import"./Dialog-BrxKY4U3.js";import"./cross-D9ZUP5Ns.js";import"./svgIconContainer-FtuH6umr.js";import"./useBaseUiId-CUYaSpyz.js";import"./InternalBackdrop-30LaOI8b.js";import"./composite-Bx3ib-QK.js";import"./index-BPstulOd.js";import"./index-C2T1E1t9.js";import"./index-DWOM7wqb.js";import"./useEventCallback-D3r1tBuv.js";import"./SkeletonBar-CHLz7Pge.js";import"./LoadingCell-CHqJC0Jc.js";import"./ColumnConfigDialog-Byj8iSeW.js";import"./DraggableList-BjdYdEPc.js";import"./search-Bk-_LlpL.js";import"./Input-elqhlQ-r.js";import"./useControlled-CIhWFCzo.js";import"./isEqual-vJ1Qj1LB.js";import"./isObject-3i0MZCeP.js";import"./Button-Dpxlhfn0.js";import"./ActionButton-DIeKcdCW.js";import"./Checkbox-B4-NPCZf.js";import"./useValueChanged-gmanHop6.js";import"./CollapsiblePanel-DzvSaaqJ.js";import"./MultiColumnSortDialog-C_rWXuaq.js";import"./MenuTrigger-Bk13KZ3o.js";import"./CompositeItem-YyL2cv7w.js";import"./ToolbarRootContext-Dy6qwQeR.js";import"./getDisabledMountTransitionStyles-DA2haucZ.js";import"./getPseudoElementBounds-Bg_oiIin.js";import"./chevron-down-DuuQaagn.js";import"./index-BkgjoZmi.js";import"./error-BPzajNoT.js";import"./BaseCbacBanner-CSXlxhGL.js";import"./makeExternalStore-Cn2OHyrh.js";import"./Tooltip-BAkr9kah.js";import"./PopoverPopup-D3PXg0cX.js";import"./toNumber-BmEn9jnI.js";import"./useOsdkClient-DVK7fMCH.js";import"./tick-BKXV2n6K.js";import"./DropdownField-BB3NRdoL.js";import"./withOsdkMetrics-BwSBQoqW.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
