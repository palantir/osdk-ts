import{j as i}from"./iframe-BcdGDu9j.js";import{O as p}from"./object-table-CLlobdDW.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BxT4v04a.js";import"./preload-helper-CMbSo1WN.js";import"./Table-CbY9U08a.js";import"./index-CV-Cj0Fr.js";import"./Dialog-BFu9Jvbt.js";import"./cross-HX620Mow.js";import"./svgIconContainer-dXK4wDtR.js";import"./useBaseUiId-DuyHfeNj.js";import"./InternalBackdrop-ye5hVQhH.js";import"./composite-FZbs1kn9.js";import"./index-kWczGDq0.js";import"./index-Bf3lveVK.js";import"./index-DELrWLc6.js";import"./useEventCallback-0GkWAOSy.js";import"./SkeletonBar-IaH5vXYh.js";import"./LoadingCell-B9K2QG1V.js";import"./ColumnConfigDialog-BKYdkhP1.js";import"./DraggableList-BpJWrtjR.js";import"./search-CVgCtTip.js";import"./Input-DBRGGeXT.js";import"./useControlled-DXehS_Ds.js";import"./Button-BxGbP4Tj.js";import"./small-cross-Bc-bQBjF.js";import"./ActionButton-CoM8fqA1.js";import"./Checkbox-BubTyfqD.js";import"./useValueChanged-DPTlKWjR.js";import"./CollapsiblePanel-aNff5u-g.js";import"./MultiColumnSortDialog-Bj0C4GEb.js";import"./MenuTrigger-DlV5a9JX.js";import"./CompositeItem-D98IS09u.js";import"./ToolbarRootContext-BRDqWHEt.js";import"./getDisabledMountTransitionStyles-DH1jUBNu.js";import"./getPseudoElementBounds-QT6HlcN-.js";import"./chevron-down-DIIoHKL4.js";import"./index-Cz3Lv1z4.js";import"./error-0GjEwwWq.js";import"./BaseCbacBanner-VxS8s1Ia.js";import"./makeExternalStore-DW1w7Bj0.js";import"./Tooltip-B8GoiLs-.js";import"./PopoverPopup-CSwQSVBM.js";import"./debounce-GGX-LYbn.js";import"./useOsdkClient-8LhuH1T7.js";import"./tick-DyYg55N-.js";import"./DropdownField-B02oWN-k.js";import"./isEqual-BdDBDq6i.js";import"./withOsdkMetrics-CesyT9oD.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
