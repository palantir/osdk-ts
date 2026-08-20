import{j as i}from"./iframe-BApgeGXl.js";import{O as p}from"./object-table-L9Ky81ED.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CEZ8CrHF.js";import"./preload-helper-B5SDrfLX.js";import"./Table-CYUy2OZk.js";import"./index-D1DKxRCC.js";import"./Dialog-BUikXbV8.js";import"./cross-ZTt9cbvY.js";import"./svgIconContainer-DsyE7o9I.js";import"./useBaseUiId-HvC3sL6i.js";import"./InternalBackdrop--ZTWLfQl.js";import"./composite-CfLZxk0Y.js";import"./index-D6GjFiH-.js";import"./index-T-rcUtZ2.js";import"./index-BjC4jF9D.js";import"./useEventCallback-BnHXtP8m.js";import"./SkeletonBar-CFo_1ayu.js";import"./LoadingCell-BHTZiZSs.js";import"./ColumnConfigDialog-CxHOLgQs.js";import"./DraggableList-iPa5GZpO.js";import"./search-DA1A23L5.js";import"./Input-JtvTue8M.js";import"./useControlled-DwtdN-yM.js";import"./Button-C7YfkSI7.js";import"./small-cross-Vh49dVTG.js";import"./ActionButton-juathNjQ.js";import"./Checkbox-C7tXqNxh.js";import"./useValueChanged-e4ysBGYq.js";import"./CollapsiblePanel-B5H4huYa.js";import"./MultiColumnSortDialog-Ch07S50J.js";import"./MenuTrigger-DHzhysiY.js";import"./CompositeItem-Di2z5EXS.js";import"./ToolbarRootContext-BucTdyIl.js";import"./getDisabledMountTransitionStyles-B5BYpj3H.js";import"./getPseudoElementBounds-ATfKY2eH.js";import"./chevron-down-DFCusqRp.js";import"./index-BZG1se71.js";import"./error-D3Ew2_Fi.js";import"./BaseCbacBanner-Bee4-SeT.js";import"./makeExternalStore-DvSdjbOg.js";import"./Tooltip-Ca9hBF2Y.js";import"./PopoverPopup-DGPJk_zW.js";import"./debounce-BnXt5WXY.js";import"./useOsdkClient-UetNUWte.js";import"./tick-CxJ8OjsD.js";import"./DropdownField-CITGD--l.js";import"./isEqual-uxWSHrgG.js";import"./withOsdkMetrics-RpuKM6nt.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
