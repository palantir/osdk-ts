import{j as i}from"./iframe-BmwK0NB6.js";import{O as p}from"./object-table-BeuJFUAl.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BVkbHAp0.js";import"./preload-helper-CJI9HYts.js";import"./Table-ChWSbzv8.js";import"./index-NnjawErR.js";import"./Dialog-Cjov8EJt.js";import"./cross-hgFEJfRa.js";import"./svgIconContainer-DHRvXAx1.js";import"./useBaseUiId-DICqGIOz.js";import"./InternalBackdrop-BNdzkB7f.js";import"./composite-C06v5r-q.js";import"./index-DuWg3JLn.js";import"./index-DiZc7AlS.js";import"./index-DX06iv2-.js";import"./useEventCallback-DekRZM9z.js";import"./SkeletonBar-cj1km_Ew.js";import"./LoadingCell-ir3KaEX9.js";import"./ColumnConfigDialog-CinlVjur.js";import"./DraggableList-DsMXG4CE.js";import"./search-Dm097x9N.js";import"./Input-Bfu2n9eX.js";import"./useControlled-D_GkEGnz.js";import"./Button-C7GE2_Px.js";import"./small-cross-ZFjbIYNW.js";import"./ActionButton-DO9pXiqf.js";import"./Checkbox-Bm4hlpwh.js";import"./useValueChanged-CYhlDneB.js";import"./CollapsiblePanel-BlAI9gbe.js";import"./MultiColumnSortDialog-DQlwKNla.js";import"./MenuTrigger-CQQrfhyE.js";import"./CompositeItem-BHcZzMjK.js";import"./ToolbarRootContext-ReHQQSwk.js";import"./getDisabledMountTransitionStyles-D6uMoq56.js";import"./getPseudoElementBounds-7hGlU8g7.js";import"./chevron-down-YY61_NRW.js";import"./index-BpeS-KLN.js";import"./error-CHia6_Yv.js";import"./BaseCbacBanner-BxZMmDMR.js";import"./makeExternalStore-RuIAz4L3.js";import"./Tooltip-yGZeBWi0.js";import"./PopoverPopup-CMLgSpj-.js";import"./debounce-CVCv63C4.js";import"./useOsdkClient-UKqs4_2L.js";import"./tick-BXHwy8u9.js";import"./DropdownField-1ya05CQB.js";import"./isEqual-eMF9IvTP.js";import"./withOsdkMetrics-BVS2eODs.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
