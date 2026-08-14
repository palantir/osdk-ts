import{j as i}from"./iframe-Bfqgfvg5.js";import{O as p}from"./object-table-CGvvP8fy.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-nJGDwbQ0.js";import"./preload-helper-sbX0EP0E.js";import"./Table-CtWpiWd1.js";import"./index-BmFrK4uE.js";import"./Dialog-De4cyz94.js";import"./cross-B4_R7rVU.js";import"./svgIconContainer-DOVGkrjj.js";import"./useBaseUiId-BdhQOYo_.js";import"./InternalBackdrop-DCvZ8X87.js";import"./composite-DmYhjO8v.js";import"./index-Bl76L6mj.js";import"./index-CS_96wYM.js";import"./index-BlQFXGsd.js";import"./useEventCallback-B1nJIlEC.js";import"./SkeletonBar-C7y8g3ho.js";import"./LoadingCell-CwwWYKx6.js";import"./ColumnConfigDialog-DENP41HD.js";import"./DraggableList-BsJt6HPL.js";import"./search-Dn2xqqj5.js";import"./Input-C_7kfxom.js";import"./useControlled-D38Ax3L2.js";import"./Button-B2JqEm4Y.js";import"./small-cross-kYeT01JS.js";import"./ActionButton-2FoC5y02.js";import"./Checkbox-BO941x-z.js";import"./useValueChanged-Dx9C0HvB.js";import"./CollapsiblePanel-DeyFJV_M.js";import"./MultiColumnSortDialog-CMuwtBdD.js";import"./MenuTrigger-D2DoQiSy.js";import"./CompositeItem-CWhqikpO.js";import"./ToolbarRootContext-DCYSyhUf.js";import"./getDisabledMountTransitionStyles-BQDB16Rl.js";import"./getPseudoElementBounds-CS1VCemy.js";import"./chevron-down-Dtvuz0Wc.js";import"./index-BpPUDBTM.js";import"./error-Bs83EBeR.js";import"./BaseCbacBanner-jJamV-KH.js";import"./makeExternalStore-BJlkM_Kr.js";import"./Tooltip-DlgkUY-o.js";import"./PopoverPopup-C3yc73Ei.js";import"./debounce-CL7jkThf.js";import"./useOsdkClient-BASUQ_Dv.js";import"./tick-grm64bSY.js";import"./DropdownField-DE4NMuDY.js";import"./isEqual-CoQZln15.js";import"./withOsdkMetrics-DMZgHj0E.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
