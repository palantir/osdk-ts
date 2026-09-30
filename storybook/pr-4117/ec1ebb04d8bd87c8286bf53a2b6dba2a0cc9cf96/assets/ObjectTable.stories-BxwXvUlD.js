import{j as i}from"./iframe-DRNk89ZH.js";import{O as p}from"./object-table-DyslRn07.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-HBvUCNYH.js";import"./preload-helper-CL4j9Mgj.js";import"./Table-CCvso8pR.js";import"./index-CS7yPxi2.js";import"./Dialog-DhLNyJn8.js";import"./cross-CdajDpt0.js";import"./svgIconContainer-BYMe6jPQ.js";import"./useBaseUiId-DA__XCsT.js";import"./InternalBackdrop-DyXkqyZv.js";import"./composite-8utJ-QhI.js";import"./index-DZWIzD1L.js";import"./index-Du8pqTKc.js";import"./index-CR7ijv3D.js";import"./useEventCallback-Dix1JuJQ.js";import"./SkeletonBar-D55GtZ7r.js";import"./LoadingCell-C5WX1ZtT.js";import"./ColumnConfigDialog-D7jswbWW.js";import"./DraggableList-B30xQjvE.js";import"./search-Cy6sHHpP.js";import"./Input-DehlDyjB.js";import"./useControlled-CE505VKa.js";import"./Button-Br4k3ffi.js";import"./small-cross-Blo856Jy.js";import"./ActionButton-ByUIz9Jq.js";import"./Checkbox-BZM4LvUK.js";import"./useValueChanged-BB_kvMD4.js";import"./CollapsiblePanel-Bwzr5sqV.js";import"./MultiColumnSortDialog-BIvzGas2.js";import"./MenuTrigger-C7Mh7EWc.js";import"./CompositeItem-DF-AHu7i.js";import"./ToolbarRootContext-BDHJtdhK.js";import"./getDisabledMountTransitionStyles-BQM7zsXg.js";import"./getPseudoElementBounds-BcErDK4h.js";import"./chevron-down-CphPepB3.js";import"./index-CMtFadZ1.js";import"./error-B_EjGR4-.js";import"./BaseCbacBanner-BeWGcHZq.js";import"./makeExternalStore-B6lEYqi9.js";import"./Tooltip-YY6aadVm.js";import"./PopoverPopup-C0n4VFaw.js";import"./debounce-CZTrh2IE.js";import"./useOsdkClient-Bnc6agZG.js";import"./tick-C69MPngT.js";import"./DropdownField-BLLbuNZd.js";import"./isEqual-BW7L9s0X.js";import"./withOsdkMetrics-B1ACrfWT.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
