import{j as i}from"./iframe-D9P9JPnE.js";import{O as p}from"./object-table-IFoklx8i.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-yFaX6Cb2.js";import"./preload-helper-CSJ4fD8P.js";import"./Table-bKWI10Gf.js";import"./index-B0GYFgPw.js";import"./Dialog-80ldRr0D.js";import"./cross-Bk7QQAW7.js";import"./svgIconContainer-DE8FpRUq.js";import"./useBaseUiId-LUhCiIEN.js";import"./InternalBackdrop-BQix0v67.js";import"./composite-CwGSSnNe.js";import"./index-BLSs3q_T.js";import"./index--Qtm9bZ-.js";import"./index-BGyPj0mm.js";import"./useEventCallback-P_K3auvj.js";import"./SkeletonBar-CBLTPv0p.js";import"./LoadingCell-DzyZjAPw.js";import"./ColumnConfigDialog-D0EzBoH0.js";import"./DraggableList-A5hwwOY7.js";import"./search-DVgZ7um_.js";import"./Input-BAe5Vta8.js";import"./useControlled-D8iAD7lp.js";import"./Button-DQyP3ss1.js";import"./small-cross-iaDGlrGg.js";import"./ActionButton-BWc4f3QT.js";import"./Checkbox-SGwbw7ao.js";import"./useValueChanged-DmZj1mM7.js";import"./CollapsiblePanel-B75bc_M-.js";import"./MultiColumnSortDialog-Cui85BYg.js";import"./MenuTrigger-BOUfzK5W.js";import"./CompositeItem-Cn9ylTax.js";import"./ToolbarRootContext-D2FTFjj2.js";import"./getDisabledMountTransitionStyles-BiVo7WJG.js";import"./getPseudoElementBounds-CZz-p69t.js";import"./chevron-down-aDiXlal5.js";import"./index-CeKLzZT1.js";import"./error-CRea6GYa.js";import"./BaseCbacBanner-TUxXHSoK.js";import"./makeExternalStore-Ds2qVRO7.js";import"./Tooltip-D9x1TMqS.js";import"./PopoverPopup-Ez6UvTSW.js";import"./debounce-BZCp6Mj3.js";import"./useOsdkClient-Cl7iWri5.js";import"./tick-CM-K1iFc.js";import"./DropdownField-DAFOn67q.js";import"./isEqual-RrURBxyH.js";import"./withOsdkMetrics-DdvxW2hf.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
