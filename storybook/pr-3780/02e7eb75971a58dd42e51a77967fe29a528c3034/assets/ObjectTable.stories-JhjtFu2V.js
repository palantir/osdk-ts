import{j as i}from"./iframe-BLF6zRqG.js";import{O as p}from"./object-table-C0cdKhB3.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CMv6jBqb.js";import"./preload-helper-BDaxV4R2.js";import"./Table-CeE5JrDd.js";import"./index-BLFrbzvg.js";import"./Dialog-n73yCmVX.js";import"./cross-BA9FjJ9G.js";import"./svgIconContainer-B1hh76l8.js";import"./useBaseUiId-Zjs0lNV0.js";import"./InternalBackdrop-CyIeJrcr.js";import"./composite-CcKV35Kr.js";import"./index-CLYhFphF.js";import"./index-ByFfno_8.js";import"./index-Bl_HIsRn.js";import"./useEventCallback-DH0i-Vx2.js";import"./SkeletonBar-C1CYbmJA.js";import"./LoadingCell-Cm0bxSxn.js";import"./ColumnConfigDialog-BTqcioDF.js";import"./DraggableList-CsjHVdfB.js";import"./search-9jU6Q1us.js";import"./Input-CCDmeNBI.js";import"./useControlled-CoQlBX4R.js";import"./Button-9qWiKKY-.js";import"./small-cross-BqECmGEj.js";import"./ActionButton-DbZE13mN.js";import"./Checkbox-Bu0FH9eh.js";import"./useValueChanged-BKw1I0EK.js";import"./CollapsiblePanel-Dda8YuQy.js";import"./MultiColumnSortDialog-C9HqTSZt.js";import"./MenuTrigger-XxylOScL.js";import"./CompositeItem-DtwY3yqS.js";import"./ToolbarRootContext-2-p_DBQP.js";import"./getDisabledMountTransitionStyles-ARetRnAA.js";import"./getPseudoElementBounds-4DmUh_rK.js";import"./chevron-down-D3B34KT6.js";import"./index-ccXt1NIS.js";import"./error-CBG8l0PN.js";import"./BaseCbacBanner-Bxx3iju9.js";import"./makeExternalStore-GX9DdVy4.js";import"./Tooltip-8Jei4W6Q.js";import"./PopoverPopup-B7UZBa1s.js";import"./debounce-B91OJyBP.js";import"./useOsdkClient-1axdfMxV.js";import"./tick-28tjcfUj.js";import"./DropdownField-D-l1iVFe.js";import"./isEqual-DXHdtgab.js";import"./withOsdkMetrics-CRvkKsTN.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
