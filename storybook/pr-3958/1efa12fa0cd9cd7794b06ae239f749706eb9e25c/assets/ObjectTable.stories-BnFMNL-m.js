import{j as i}from"./iframe-B26-UX9b.js";import{O as p}from"./object-table-C9x2l5v3.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CNbD44Dy.js";import"./preload-helper-qgH9prhH.js";import"./Table-DOMvSBP6.js";import"./index-gSzx-VKs.js";import"./Dialog-BBrF0zw7.js";import"./cross-4Wy1lzRG.js";import"./svgIconContainer-CNIysoPo.js";import"./useBaseUiId-BNFolbRL.js";import"./InternalBackdrop-6deiMnyZ.js";import"./composite-B5QPNFwO.js";import"./index-CvJGlMcY.js";import"./index-BdbeSUQe.js";import"./index-DrTJqFym.js";import"./useEventCallback-D-uUzVqw.js";import"./SkeletonBar-Df1XYI_J.js";import"./LoadingCell-CukOSP_9.js";import"./ColumnConfigDialog-C_xAQ7Wv.js";import"./DraggableList-DfKsY10n.js";import"./search-fQO_n2xV.js";import"./Input-SuAL17yL.js";import"./useControlled-BHqUi1Rr.js";import"./Button-BAa0NYG4.js";import"./small-cross-DiC_XmxI.js";import"./ActionButton-CZ5v5Gbt.js";import"./Checkbox-CO5YM7xz.js";import"./useValueChanged-IRSXffCV.js";import"./CollapsiblePanel-Cyh9zt9a.js";import"./MultiColumnSortDialog-CLlsXUoZ.js";import"./MenuTrigger-Brp4P9tg.js";import"./CompositeItem-CL1dJO-b.js";import"./ToolbarRootContext-Dav0NKZT.js";import"./getDisabledMountTransitionStyles-BqJTFbRl.js";import"./getPseudoElementBounds-ziTcDrkP.js";import"./chevron-down-CCwBQ-Op.js";import"./index-DrBipA26.js";import"./error-BBoH6WG4.js";import"./BaseCbacBanner-qXigIY7P.js";import"./makeExternalStore-B7jmTiXs.js";import"./Tooltip-sDanQ0l7.js";import"./PopoverPopup-D0TjUtq8.js";import"./debounce-CdsfP08y.js";import"./useOsdkClient-D7R-JaCT.js";import"./tick-DpLCRzEH.js";import"./DropdownField-Qb5LfBsz.js";import"./isEqual-DUwwd1cV.js";import"./withOsdkMetrics-uTMtOsB_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
