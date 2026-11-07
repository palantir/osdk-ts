import{j as i}from"./iframe-ByxoF4UB.js";import{O as p}from"./object-table-i4_SWQmL.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CGyzMjcA.js";import"./preload-helper-CXMZSjtp.js";import"./Table-DZvz2Swy.js";import"./index-87CISW6C.js";import"./Dialog-sWeXwNNr.js";import"./cross-wBV-Qz69.js";import"./svgIconContainer-C7yUgkWe.js";import"./useBaseUiId-uat7AM1o.js";import"./InternalBackdrop-CzcksTqB.js";import"./composite-wjt4XLHj.js";import"./index-BjYlodOL.js";import"./index-DbpuMeeP.js";import"./index-C70dk2Pf.js";import"./useEventCallback-B_ko9UJi.js";import"./SkeletonBar-CtkMryCw.js";import"./LoadingCell-DUS-9_f_.js";import"./ColumnConfigDialog-B24LGm76.js";import"./DraggableList-BkuIleRX.js";import"./search-Cs7dO1R3.js";import"./Input-DgqlI36T.js";import"./useControlled-Dzpgg9G4.js";import"./Button-GV0a0tCT.js";import"./small-cross-SMAuoYrx.js";import"./ActionButton-DOmmgWg5.js";import"./Checkbox-BwgRj8PA.js";import"./useValueChanged-C7klXfZS.js";import"./CollapsiblePanel-BKL2IXwk.js";import"./MultiColumnSortDialog-CKYKNCyG.js";import"./MenuTrigger-DU7skQGD.js";import"./CompositeItem-CwRzyQgC.js";import"./ToolbarRootContext-Dnh-d6oH.js";import"./getDisabledMountTransitionStyles-Dl9xKsbw.js";import"./getPseudoElementBounds-CQCChVBu.js";import"./chevron-down-j_R9vXIX.js";import"./index-CQ29xKcD.js";import"./error-BsU_wzAp.js";import"./BaseCbacBanner-BRAkof2I.js";import"./makeExternalStore-CDdf-Cz-.js";import"./Tooltip-DpHICHzA.js";import"./isObject-CdQNKQKv.js";import"./debounce-DeIoYJsa.js";import"./useOsdkClient-BdIxFpI6.js";import"./tick-csDNEheu.js";import"./DropdownField-Cz1Kwyi1.js";import"./isEqual-C9uj5OR1.js";import"./_baseIsEqual-BR0JMNW1.js";import"./withOsdkMetrics-A7PvRLF9.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
