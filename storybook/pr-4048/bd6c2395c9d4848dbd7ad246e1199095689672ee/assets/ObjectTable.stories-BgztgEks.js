import{j as i}from"./iframe-cfVHShSW.js";import{O as p}from"./object-table-h-pD-D9U.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-4YmfeOM6.js";import"./preload-helper-DIuXOY3G.js";import"./Table-BkLnj2tw.js";import"./index-Dh0_pJy1.js";import"./Dialog-fvTgsksn.js";import"./cross-CQMpStFn.js";import"./svgIconContainer-shdj6Qbw.js";import"./useBaseUiId-Dx0z8IdG.js";import"./InternalBackdrop-D8f4nw96.js";import"./composite-DGFet_96.js";import"./index-DyU-H2ls.js";import"./index-B1nRcBho.js";import"./index-4e4CIFBu.js";import"./useEventCallback-BEjjrUNS.js";import"./SkeletonBar-B7tEemlu.js";import"./LoadingCell-BQwKQHLp.js";import"./ColumnConfigDialog-BxFvYZit.js";import"./DraggableList-B-boOlGO.js";import"./search-HP5frDaz.js";import"./Input-CRQW49QU.js";import"./useControlled-DRr_lzX9.js";import"./Button-2DUkL7w7.js";import"./small-cross-CMcRrXYz.js";import"./ActionButton-CQj94TDP.js";import"./Checkbox-B5DEItIX.js";import"./useValueChanged-B7R09HF5.js";import"./CollapsiblePanel-CHOxQQMz.js";import"./MultiColumnSortDialog-DoGW72Du.js";import"./MenuTrigger-DgHMNTY4.js";import"./CompositeItem-BNd8aIDX.js";import"./ToolbarRootContext-rTwoUfWD.js";import"./getDisabledMountTransitionStyles-Q1E4gOTQ.js";import"./getPseudoElementBounds-DNOwWkqq.js";import"./chevron-down-SG4gwSm2.js";import"./index-C9sGbhZ7.js";import"./error-DFzqEfiP.js";import"./BaseCbacBanner-CAItOWNI.js";import"./makeExternalStore-ClpC--FM.js";import"./Tooltip-dXIOIOnO.js";import"./PopoverPopup-Ra0J62dt.js";import"./debounce-l3cliQfv.js";import"./useOsdkClient-DhV-YBPx.js";import"./tick-Clw3DVoZ.js";import"./DropdownField-qj0jYiEp.js";import"./isEqual-C3ehgu6v.js";import"./withOsdkMetrics-C8YqvKiy.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
