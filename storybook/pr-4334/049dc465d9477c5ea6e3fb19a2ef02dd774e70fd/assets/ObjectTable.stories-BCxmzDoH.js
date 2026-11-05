import{j as i}from"./iframe-tTpw548-.js";import{O as p}from"./object-table-BCDZaXaC.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D50JYuXZ.js";import"./preload-helper-BfLQzAkp.js";import"./Table-CQgHASpq.js";import"./index-CfoC8y9T.js";import"./Dialog-CcCJwuwm.js";import"./cross-CLKnrtat.js";import"./svgIconContainer-T3TG2U7K.js";import"./useBaseUiId-CAQFrlAe.js";import"./InternalBackdrop-_xAR7iPe.js";import"./composite-CJkTEPcI.js";import"./index-BP7y8sZT.js";import"./index-D2O-B8gB.js";import"./index-C8camuNF.js";import"./useEventCallback-1ybuVTus.js";import"./SkeletonBar-Ba6ZiQYs.js";import"./LoadingCell-CDMAzX01.js";import"./ColumnConfigDialog-D3qNKgcM.js";import"./DraggableList-mlkL4pGw.js";import"./search-DermPgDt.js";import"./Input-HFN8Ab80.js";import"./useControlled-C7x4-FQ_.js";import"./Button-GJuyUH0v.js";import"./small-cross-DlwKfIY_.js";import"./ActionButton-cg61E8o3.js";import"./Checkbox-utjOGAI8.js";import"./useValueChanged-DAHI-SPm.js";import"./CollapsiblePanel-C5C_WUGb.js";import"./MultiColumnSortDialog-DRlOQfTI.js";import"./MenuTrigger-CwGcycds.js";import"./CompositeItem-CCzTqTt9.js";import"./ToolbarRootContext-CJ6qVhPJ.js";import"./getDisabledMountTransitionStyles-BbmWSW2i.js";import"./getPseudoElementBounds-Bmi-Rz86.js";import"./chevron-down-EEhO5M0S.js";import"./index-LL3h6rZ2.js";import"./error-DVgq5BdO.js";import"./BaseCbacBanner-fq8ZDz2f.js";import"./makeExternalStore-0aQuonQe.js";import"./Tooltip-D0gUYvNC.js";import"./PopoverPopup-C-VSahmb.js";import"./debounce-DfLNQaQZ.js";import"./useOsdkClient-DSnXFag8.js";import"./tick-D3aN5WCZ.js";import"./DropdownField-9NgabMek.js";import"./isEqual-D5EvyUKD.js";import"./withOsdkMetrics-DMDExHtI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
