import{j as i}from"./iframe-C1uIQEe6.js";import{O as p}from"./object-table-CQ6hETlT.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C0mO7rMg.js";import"./preload-helper-DF4UQXjd.js";import"./Table-Bw-bXIYd.js";import"./index-nY9pkPDF.js";import"./Dialog-q2FQFGgX.js";import"./cross-C9ubRsWO.js";import"./svgIconContainer-BGeGsGPX.js";import"./useBaseUiId-CeyDEbyZ.js";import"./InternalBackdrop-SMklbAKr.js";import"./composite-kICLPGef.js";import"./index-CRvA4CpE.js";import"./index-Bnj0fwTZ.js";import"./index-BtYb8cJb.js";import"./useEventCallback-Dwt0eF5D.js";import"./SkeletonBar-BOpTwsNy.js";import"./LoadingCell-x7gRA1du.js";import"./ColumnConfigDialog-DFXOYvRy.js";import"./DraggableList-BkVauiD1.js";import"./search-CfgnKZCI.js";import"./Input-Bqj-jOKY.js";import"./useControlled-BLqDTZmr.js";import"./Button-BJ7Nz25q.js";import"./small-cross-D02DqgT9.js";import"./ActionButton-p3LXST0-.js";import"./Checkbox-CQZf3jMi.js";import"./useValueChanged-Pi9Ael4a.js";import"./CollapsiblePanel-6McyaGtD.js";import"./MultiColumnSortDialog-DzGyWtDt.js";import"./MenuTrigger-BDQtQuY6.js";import"./CompositeItem-BvnjdHPq.js";import"./ToolbarRootContext-BwNqm28T.js";import"./getDisabledMountTransitionStyles-tyNaz73q.js";import"./getPseudoElementBounds-BvXQIwgX.js";import"./chevron-down-Bo5GDX8K.js";import"./index-BkXU4FNm.js";import"./error-Qui232U8.js";import"./BaseCbacBanner-CihzJWqL.js";import"./makeExternalStore-CD_wbIQr.js";import"./Tooltip-oCOCurFb.js";import"./PopoverPopup-Cm0zY3FO.js";import"./debounce-ClD17fgr.js";import"./useOsdkClient-DaGphxm9.js";import"./tick-Cb96Z_mD.js";import"./DropdownField-Bs4L9M0h.js";import"./isEqual-nBMVAV20.js";import"./withOsdkMetrics-Dccwzuy3.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
