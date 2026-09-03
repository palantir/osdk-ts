import{j as i}from"./iframe-CraWtfc_.js";import{O as p}from"./object-table-CqUIyxj-.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D8_aZUWU.js";import"./preload-helper-B2ygN63P.js";import"./Table-KtYOXFQq.js";import"./index-uggTCp7M.js";import"./Dialog-Y6nV2B8-.js";import"./cross-DBeI7hzA.js";import"./svgIconContainer-C4_0pLg-.js";import"./useBaseUiId-B3gf6Rgr.js";import"./InternalBackdrop-Dg25XYUo.js";import"./composite-DStzulLq.js";import"./index-C7ILWK60.js";import"./index-CE8B_DUN.js";import"./index-DNCvPjCM.js";import"./useEventCallback-DgbAS9H5.js";import"./SkeletonBar-C0h9i0be.js";import"./LoadingCell-D8YQtYke.js";import"./ColumnConfigDialog-BfEFElLi.js";import"./DraggableList-DgvxE2sP.js";import"./search-BX2x7npa.js";import"./Input-BXsVCVWI.js";import"./useControlled-C2EFnSRK.js";import"./Button-CzW3iwgW.js";import"./small-cross-DYP0x5Vu.js";import"./ActionButton-DURMVT6a.js";import"./Checkbox-DeMSOIgB.js";import"./useValueChanged-cqUllIYD.js";import"./CollapsiblePanel-DVQXLfG-.js";import"./MultiColumnSortDialog-CfwBUaEm.js";import"./MenuTrigger-BUKgLqic.js";import"./CompositeItem-D5jj9W4Y.js";import"./ToolbarRootContext-BqVmfek1.js";import"./getDisabledMountTransitionStyles-CLSya5zn.js";import"./getPseudoElementBounds-aRlZ5-U9.js";import"./chevron-down-B7zCZjZp.js";import"./index-KL6FZw16.js";import"./error-CwgXbJjF.js";import"./BaseCbacBanner-BNQ8ukia.js";import"./makeExternalStore-CprYBPlM.js";import"./Tooltip-DzUvCExT.js";import"./PopoverPopup-DG4Ey1uv.js";import"./debounce-DhP8Rurz.js";import"./useOsdkClient-BiolEA8f.js";import"./tick-Daa0kwHZ.js";import"./DropdownField-DO8Lcsso.js";import"./isEqual-Dh2DvVI3.js";import"./withOsdkMetrics-D5fF38B3.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
