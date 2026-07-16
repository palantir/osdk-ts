import{j as i}from"./iframe-DmanCMEI.js";import{O as p}from"./object-table-BOnj1K9n.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DoJUAezz.js";import"./preload-helper-doTXSS6w.js";import"./Table-Bm95r9Jc.js";import"./index-BC1LLXL5.js";import"./Dialog-CyBjPatv.js";import"./cross-gbzL7JWR.js";import"./svgIconContainer-Cvoi4_Sl.js";import"./useBaseUiId-D1zBL0DS.js";import"./InternalBackdrop-Dyb5X86C.js";import"./composite-CxTPo-Sh.js";import"./index-CcBFqiWq.js";import"./index-CfJBzqcM.js";import"./index-7KVEeB0f.js";import"./useEventCallback-DBtfOhpr.js";import"./SkeletonBar-DPIBNUuJ.js";import"./LoadingCell-BIKt8H5R.js";import"./ColumnConfigDialog-MDILY6fY.js";import"./DraggableList-B-jNLDQZ.js";import"./search-DuDCg1Pk.js";import"./Input-BJ05cG_c.js";import"./useControlled-ACJqipIm.js";import"./Button-4qJso63q.js";import"./small-cross-CeY0DZ3A.js";import"./ActionButton-CaVyZJEB.js";import"./Checkbox-hMBSOyWI.js";import"./useValueChanged-D72XIVjX.js";import"./CollapsiblePanel-CqbNntZ_.js";import"./MultiColumnSortDialog-IooCE7Ih.js";import"./MenuTrigger-BArjN5Qq.js";import"./CompositeItem-ZWcQiJwA.js";import"./ToolbarRootContext-BAUHoLHk.js";import"./getDisabledMountTransitionStyles-KhAyXbUC.js";import"./getPseudoElementBounds-ncoZeIgg.js";import"./chevron-down-DR3bdEe4.js";import"./index-IbUXuY6k.js";import"./error-Bw-mjGsQ.js";import"./BaseCbacBanner-BAlDvOtg.js";import"./makeExternalStore-34eYA6eS.js";import"./Tooltip-BGgLPuDf.js";import"./PopoverPopup-BvAwckT4.js";import"./toNumber-Cig2uH6n.js";import"./useOsdkClient-BkKhyzRZ.js";import"./tick-D4FhYBi9.js";import"./DropdownField-DuYJGLJk.js";import"./withOsdkMetrics-CTv8KbCs.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
