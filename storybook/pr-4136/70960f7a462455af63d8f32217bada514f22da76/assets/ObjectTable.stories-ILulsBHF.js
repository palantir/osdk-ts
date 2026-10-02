import{j as i}from"./iframe-CPz-wzhp.js";import{O as p}from"./object-table-Nhfkur6o.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cs3F0jUS.js";import"./preload-helper-B3PLv50W.js";import"./Table-CJIoNyJZ.js";import"./index-CtV6ZPdt.js";import"./Dialog-DZNqhh4A.js";import"./cross-DRBzl1mu.js";import"./svgIconContainer-B99gTCIO.js";import"./useBaseUiId-bEyq9hSb.js";import"./InternalBackdrop-BrVnOHT7.js";import"./composite-Dda615xV.js";import"./index-DzRVDHUw.js";import"./index-BRVvkZ9q.js";import"./index-q41jJGqb.js";import"./useEventCallback-D-a5Riu5.js";import"./SkeletonBar-CCqJKh0H.js";import"./LoadingCell-COTwWinn.js";import"./ColumnConfigDialog-C24FYH5u.js";import"./DraggableList-Drwzm63S.js";import"./search-CPfH1VP1.js";import"./Input-BO6jo4k5.js";import"./useControlled-7vp-sIj7.js";import"./Button-6LWfTNU-.js";import"./small-cross-CUpJa2rI.js";import"./ActionButton-DvbMI2E1.js";import"./Checkbox-CXS8nVFq.js";import"./useValueChanged-sLT7_-gz.js";import"./CollapsiblePanel-Bv-tJbaL.js";import"./MultiColumnSortDialog-ByJpRQ7x.js";import"./MenuTrigger-Ce4bdmjT.js";import"./CompositeItem-t2T-QHuZ.js";import"./ToolbarRootContext-ClJ_sUWs.js";import"./getDisabledMountTransitionStyles-Bznae3H_.js";import"./getPseudoElementBounds-zuJ-zqHd.js";import"./chevron-down-BNy5Nzph.js";import"./index-CbuVsfr5.js";import"./error-BD3e32HB.js";import"./BaseCbacBanner-BwcFXt-1.js";import"./makeExternalStore-Ba5nMm5U.js";import"./Tooltip-MzGB87hV.js";import"./PopoverPopup-Bh7nIoKv.js";import"./debounce-DaKFtC_V.js";import"./useOsdkClient-eahsPVnP.js";import"./tick-C0JYyDJw.js";import"./DropdownField-BJnpWJam.js";import"./isEqual-DFPP44u1.js";import"./withOsdkMetrics-BXgZN6T2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
