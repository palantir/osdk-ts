import{j as i}from"./iframe-tKy6APGZ.js";import{O as p}from"./object-table-CXOQ5-Bt.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Co-pcSI5.js";import"./preload-helper-TkRVYpGj.js";import"./Table-aVr-cm8e.js";import"./index-xL2dF_iL.js";import"./Dialog-_HKqoJi0.js";import"./cross-CZNxjxTb.js";import"./svgIconContainer-Fm0Itt8L.js";import"./useBaseUiId-D4LRJH62.js";import"./InternalBackdrop-JtePeB2n.js";import"./composite-CQXmhBC2.js";import"./index-tz8HT03m.js";import"./index-DPumkzsB.js";import"./index-BURy5Q0k.js";import"./useEventCallback-BPZsErWH.js";import"./SkeletonBar-DKA6QS3d.js";import"./LoadingCell-C4FlmSc0.js";import"./ColumnConfigDialog-1wLW7wAA.js";import"./DraggableList-DzkYxRiU.js";import"./search-D28QZpbg.js";import"./Input-CNh3fqAG.js";import"./useControlled-DKIul1JY.js";import"./Button-CO7TuWo7.js";import"./small-cross-B57Jo-iY.js";import"./ActionButton-CH2f-vaq.js";import"./Checkbox-i1pzXO7M.js";import"./useValueChanged-Btmb51LF.js";import"./CollapsiblePanel-BBg5V9Fw.js";import"./MultiColumnSortDialog-VCNdJIc8.js";import"./MenuTrigger-JZuFOHD6.js";import"./CompositeItem-CPH8rcqG.js";import"./ToolbarRootContext-BNp90vCd.js";import"./getDisabledMountTransitionStyles--YjRI_nH.js";import"./getPseudoElementBounds-oj5UDNKB.js";import"./chevron-down-Dz9066r5.js";import"./index-BY_Q76g3.js";import"./error-DeDVZ0qI.js";import"./BaseCbacBanner-Ce6XNrpU.js";import"./makeExternalStore-C4vMnOBy.js";import"./Tooltip-3YSWsEh-.js";import"./PopoverPopup-CzPcYQbn.js";import"./debounce-DlATweo8.js";import"./useOsdkClient-DffW2GNh.js";import"./tick-Hrp6Yd74.js";import"./DropdownField-CPXyhYMx.js";import"./isEqual-OqbIOAu3.js";import"./withOsdkMetrics-D45euEFz.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
