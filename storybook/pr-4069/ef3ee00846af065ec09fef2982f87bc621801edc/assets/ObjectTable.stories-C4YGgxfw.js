import{j as i}from"./iframe-DAMQ0kJi.js";import{O as p}from"./object-table-BoCVYoye.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CBoQ4j0R.js";import"./preload-helper-B_MKI7VB.js";import"./Table-BeIR0nLw.js";import"./index-Bp0gXdhg.js";import"./Dialog-Bh1BSDP_.js";import"./cross-DxIbIlzH.js";import"./svgIconContainer-CVBLUyxF.js";import"./useBaseUiId-CZjCaxZv.js";import"./InternalBackdrop-CKMU2rkm.js";import"./composite-BYBlPAgy.js";import"./index-8-mAEuet.js";import"./index-D8IRtIy_.js";import"./index-C9gl1QHm.js";import"./useEventCallback-ghRGpfyt.js";import"./SkeletonBar-BxVkW2-h.js";import"./LoadingCell-CF8ye8h8.js";import"./ColumnConfigDialog-BEWA1CMP.js";import"./DraggableList-C_TNi5vD.js";import"./search-AYrmuoce.js";import"./Input-CyyvCwcw.js";import"./useControlled-DC6nW2lc.js";import"./Button-5SDZ05K4.js";import"./small-cross-Cq43VNdb.js";import"./ActionButton-CDelunAe.js";import"./Checkbox-KoJLRf2Y.js";import"./useValueChanged-DjExxn5b.js";import"./CollapsiblePanel-0-xMKkM2.js";import"./MultiColumnSortDialog-B_5NUOMJ.js";import"./MenuTrigger-DBLFLpoD.js";import"./CompositeItem-BDbWSvwq.js";import"./ToolbarRootContext-DNW6tFJb.js";import"./getDisabledMountTransitionStyles-1cZ4ebyu.js";import"./getPseudoElementBounds-COCrN9V9.js";import"./chevron-down-CXmtiTux.js";import"./index-DPV2fpq5.js";import"./error-COQAffC4.js";import"./BaseCbacBanner-PHPKD-SZ.js";import"./makeExternalStore-BpUsTfEq.js";import"./Tooltip-DHasjvAh.js";import"./PopoverPopup-DEz0V8jj.js";import"./debounce-CTk30Vh4.js";import"./useOsdkClient-rfrnBJy_.js";import"./tick-Cy96E2pR.js";import"./DropdownField-DNoVk62f.js";import"./isEqual-SHSvvOQ6.js";import"./withOsdkMetrics-D6W1KI3Y.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
