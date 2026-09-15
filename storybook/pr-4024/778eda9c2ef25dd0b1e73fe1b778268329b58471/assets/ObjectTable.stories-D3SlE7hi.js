import{j as i}from"./iframe-BCQQ5idH.js";import{O as p}from"./object-table-CiAWSjw6.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DGKP8ACE.js";import"./preload-helper-coqosfEI.js";import"./Table-BjsGcEug.js";import"./index-nevoWaco.js";import"./Dialog-C5qQPBcK.js";import"./cross-CEa64cbV.js";import"./svgIconContainer-CKj1NjbI.js";import"./useBaseUiId-DiDvWzye.js";import"./InternalBackdrop-N2Ue8An6.js";import"./composite-D0UtEOtq.js";import"./index-B3YRQCj_.js";import"./index-D04-iFGI.js";import"./index-BzNe3PgQ.js";import"./useEventCallback-Ba_k9sT5.js";import"./SkeletonBar-C04_QzCc.js";import"./LoadingCell-CxctrIdy.js";import"./ColumnConfigDialog-9haTRGzY.js";import"./DraggableList-BbZm-3gx.js";import"./search-BBu7BPS5.js";import"./Input-C6nfWZbz.js";import"./useControlled-Cq_GfurO.js";import"./Button-CEig4mHb.js";import"./small-cross-BGKOGZvf.js";import"./ActionButton-DHvPjza2.js";import"./Checkbox-B6jpZoN4.js";import"./useValueChanged-D3kLtDwA.js";import"./CollapsiblePanel-GdXVEA_b.js";import"./MultiColumnSortDialog-CtgSOTwj.js";import"./MenuTrigger-C0kxST0T.js";import"./CompositeItem-ldRXr3Bh.js";import"./ToolbarRootContext-BXYKMrbO.js";import"./getDisabledMountTransitionStyles-BQ29FsW-.js";import"./getPseudoElementBounds-Ckqa6CIQ.js";import"./chevron-down-DUkETYvc.js";import"./index-CLw5_nKq.js";import"./error-CJVmwm75.js";import"./BaseCbacBanner-8gebQmnF.js";import"./makeExternalStore-DUkSZpJS.js";import"./Tooltip-O_DZ5X_J.js";import"./PopoverPopup-dla5XZcT.js";import"./debounce-C1U5cA8k.js";import"./useOsdkClient-B5gZh-Vy.js";import"./tick--0MwaCEo.js";import"./DropdownField-DO1VI0xx.js";import"./isEqual-BbjsSR4E.js";import"./withOsdkMetrics-SGz3lb0q.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
