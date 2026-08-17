import{j as i}from"./iframe-BFuSGtb4.js";import{O as p}from"./object-table-DIDlqmGN.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-3yRhxw7T.js";import"./preload-helper-vKgnz1L2.js";import"./Table-D_tIUI_h.js";import"./index-BvJhM8Nl.js";import"./Dialog-Ba75vVzI.js";import"./cross-BgMco_KD.js";import"./svgIconContainer-BjNM3mFN.js";import"./useBaseUiId-r6vSLRg9.js";import"./InternalBackdrop-D7Zjn0JH.js";import"./composite-B2dxckkZ.js";import"./index-C9p7LPrR.js";import"./index-DuqoT3Af.js";import"./index-CtKwAVJH.js";import"./useEventCallback-b3jrFQtV.js";import"./SkeletonBar-C5xn974V.js";import"./LoadingCell-z1RIh6FB.js";import"./ColumnConfigDialog-8XqN-0j6.js";import"./DraggableList-BnOKpmts.js";import"./search-CmZO1BAH.js";import"./Input-2D_wjpim.js";import"./useControlled-HR5zxcvB.js";import"./Button-B6iuwea3.js";import"./small-cross-DyS1PJUB.js";import"./ActionButton-BodBsvDl.js";import"./Checkbox-hwN15EQ0.js";import"./useValueChanged-svOgCIYj.js";import"./CollapsiblePanel-BE3lHqTd.js";import"./MultiColumnSortDialog-CRH8YgbT.js";import"./MenuTrigger-B9gdjT_B.js";import"./CompositeItem-CfQdryXv.js";import"./ToolbarRootContext-infwX91F.js";import"./getDisabledMountTransitionStyles-AfkUr7I7.js";import"./getPseudoElementBounds-DFBrl2s7.js";import"./chevron-down-B0DZKVpj.js";import"./index-D9SzM9i_.js";import"./error-Cd0VNhT4.js";import"./BaseCbacBanner-DWkxryeY.js";import"./makeExternalStore-B3u7TgQ1.js";import"./Tooltip-BHcAgbri.js";import"./PopoverPopup-CUYl0njo.js";import"./debounce-kGXPhJ8y.js";import"./useOsdkClient-CmlJgVuI.js";import"./tick-D5bi3_r5.js";import"./DropdownField-DQ6QS32M.js";import"./isEqual-BmzUKNpD.js";import"./withOsdkMetrics-CJ-ARXZP.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
