import{j as i}from"./iframe-m0ugFJ_n.js";import{O as p}from"./object-table-DmJiYE4x.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C_v0cxk1.js";import"./preload-helper-KeOwj4qj.js";import"./Table-BEcMkdo0.js";import"./index-CrjphzT5.js";import"./Dialog-pTZq51tA.js";import"./cross-BQwE0Wie.js";import"./svgIconContainer-Y7-V7Oui.js";import"./useBaseUiId-DnAq2IXn.js";import"./InternalBackdrop-CRgyIZok.js";import"./composite-CkzXePM6.js";import"./index-FGKMGa8g.js";import"./index-Cv1cYxMy.js";import"./index-CJxlEYMP.js";import"./useEventCallback-Cuom9Pax.js";import"./SkeletonBar-C5qsauJF.js";import"./LoadingCell-RgHR2Fb3.js";import"./ColumnConfigDialog-D-PMs8be.js";import"./DraggableList-QqAiUCMs.js";import"./search-BBD2MUX2.js";import"./Input-BmzIYnaH.js";import"./useControlled-Cbg37gEr.js";import"./Button-BYPOjnzJ.js";import"./small-cross-DLIPGDB9.js";import"./ActionButton-75hIFgs2.js";import"./Checkbox-ISw-vbZ6.js";import"./useValueChanged-CtZddPP0.js";import"./CollapsiblePanel-D7qJlDW0.js";import"./MultiColumnSortDialog-Be6oA0fc.js";import"./MenuTrigger-B-okH4na.js";import"./CompositeItem-DwEHzZa4.js";import"./ToolbarRootContext-DuKgQD9s.js";import"./getDisabledMountTransitionStyles-CQzsyu-N.js";import"./getPseudoElementBounds-B0jU5gJz.js";import"./chevron-down-CRZsF1SF.js";import"./index-BchCr8yn.js";import"./error-C7YpCdj7.js";import"./BaseCbacBanner-BTNPmbKP.js";import"./makeExternalStore-gYyz61fG.js";import"./Tooltip-BRPBf4sJ.js";import"./PopoverPopup-DtCGLRJW.js";import"./debounce-B4kVVAWf.js";import"./useOsdkClient-BOwEJ48t.js";import"./tick-Bn7hFcMc.js";import"./DropdownField-Dv2YzHOX.js";import"./isEqual-DIxe2VxH.js";import"./withOsdkMetrics-B3S-uWw6.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
