import{j as i}from"./iframe-DhSxUQkX.js";import{O as p}from"./object-table-DbphsC1p.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Ce2CeBWt.js";import"./preload-helper-sXoL7niC.js";import"./Table-Cxw9cwM6.js";import"./index-BvSFmfl4.js";import"./Dialog-BT2zLzQV.js";import"./cross-DPp5FPP-.js";import"./svgIconContainer-Cv6Vlj7K.js";import"./useBaseUiId-CZTbsmZg.js";import"./InternalBackdrop-C1ZWO4Fv.js";import"./composite-CVjZUaK1.js";import"./index-CIxCim47.js";import"./index-DqmtWcN5.js";import"./index-jTHMQX5i.js";import"./useEventCallback-CvDvv5HC.js";import"./SkeletonBar-CyDJ1Ldz.js";import"./LoadingCell-CYynvORP.js";import"./ColumnConfigDialog-oy9TAHvX.js";import"./DraggableList-B0EZBRPj.js";import"./search-DUqXaRZn.js";import"./Input-CZERibHA.js";import"./useControlled-BFOHrubs.js";import"./Button-WT-hQp_M.js";import"./small-cross-sUBGXhQ0.js";import"./ActionButton-D68fVxeC.js";import"./Checkbox-BeTRGy-6.js";import"./useValueChanged-O0UVeLkr.js";import"./CollapsiblePanel-CnIi4ruU.js";import"./MultiColumnSortDialog-DQ1pW78O.js";import"./MenuTrigger-BGLuUfjR.js";import"./CompositeItem-B0iGyW5R.js";import"./ToolbarRootContext-DCHPkWcS.js";import"./getDisabledMountTransitionStyles-B8WSataG.js";import"./getPseudoElementBounds-Dg91PpPW.js";import"./chevron-down-DgOK1tfP.js";import"./index-DS-3NohG.js";import"./error-BkDo7z_m.js";import"./BaseCbacBanner-DfrB6rgb.js";import"./makeExternalStore-C6P_xGma.js";import"./Tooltip-GjEUJm8I.js";import"./PopoverPopup-BhdoMacR.js";import"./debounce-CttzonmO.js";import"./useOsdkClient-JBSVfS2z.js";import"./tick-DIF_A_6E.js";import"./DropdownField-eY4WYUsH.js";import"./isEqual-BPbLcVx_.js";import"./withOsdkMetrics-BwywW8LF.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
