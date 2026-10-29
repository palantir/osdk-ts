import{j as i}from"./iframe-DuPGHU0l.js";import{O as p}from"./object-table-Ba0vIJbC.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-334EwhUF.js";import"./preload-helper-C0i017mv.js";import"./Table-noAsufEy.js";import"./index-trCVkGnT.js";import"./Dialog-BzPqVQ2n.js";import"./cross-DX5M9gAF.js";import"./svgIconContainer-DYavZBCX.js";import"./useBaseUiId-CXOx85Ji.js";import"./InternalBackdrop-MypWFEdM.js";import"./composite-bxfGnibV.js";import"./index-BPZGrXj8.js";import"./index-CxEs7fW4.js";import"./index-D9lJQHx7.js";import"./useEventCallback-DffRG6R1.js";import"./SkeletonBar-qHgUQhEG.js";import"./LoadingCell-Bf_lcAmE.js";import"./ColumnConfigDialog-DNmXXilw.js";import"./DraggableList-1OyrW2jH.js";import"./search-lklVR3bN.js";import"./Input-jGQQmaCN.js";import"./useControlled-uIFuGzm4.js";import"./Button-kErr3Na-.js";import"./small-cross-D_ytDnoJ.js";import"./ActionButton-CpXgr1m4.js";import"./Checkbox-C21-Grtb.js";import"./useValueChanged-Czjmm1xx.js";import"./CollapsiblePanel-BYMuCAsZ.js";import"./MultiColumnSortDialog--U5HnCnj.js";import"./MenuTrigger-CgIzNycJ.js";import"./CompositeItem-D0CjBMiI.js";import"./ToolbarRootContext-wxST6T8W.js";import"./getDisabledMountTransitionStyles-D68V5Zib.js";import"./getPseudoElementBounds-DIwP7tdN.js";import"./chevron-down-2p6Ee397.js";import"./index-D-GgPzMj.js";import"./error-WnyZ_TXe.js";import"./BaseCbacBanner-mJeOJsVv.js";import"./makeExternalStore-B2yZ_Kza.js";import"./Tooltip-B0JeszV9.js";import"./PopoverPopup-Ccr61WFs.js";import"./debounce-DDzZOsHB.js";import"./useOsdkClient-6i4-GCvx.js";import"./tick-gyoLk9c6.js";import"./DropdownField-I3G12o5O.js";import"./isEqual-DxSON3wr.js";import"./withOsdkMetrics-D5QjWVGm.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
