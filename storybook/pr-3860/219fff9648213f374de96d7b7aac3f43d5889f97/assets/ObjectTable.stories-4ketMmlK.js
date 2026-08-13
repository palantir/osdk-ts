import{j as i}from"./iframe-CujHdoKl.js";import{O as p}from"./object-table-D_vi4YBI.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DfBwlcnj.js";import"./preload-helper-DUcMUNOo.js";import"./Table-cStpRNvL.js";import"./index-aOGJb9q1.js";import"./Dialog-DcwrNfd-.js";import"./cross-BwDPZyT4.js";import"./svgIconContainer-D9IeJ3ww.js";import"./useBaseUiId-BHrXH9vn.js";import"./InternalBackdrop-DOOVvXRR.js";import"./composite-DHm2bjTW.js";import"./index-_eiMg_S8.js";import"./index-CDyeI7sk.js";import"./index-DCCCbT9H.js";import"./useEventCallback-f_wdHpNZ.js";import"./SkeletonBar-wclGXQ0s.js";import"./LoadingCell-DyYoqDgp.js";import"./ColumnConfigDialog-DZEB9m9U.js";import"./DraggableList-DHut7vra.js";import"./search-DMHXQU1s.js";import"./Input-CJ3jjDAP.js";import"./useControlled-BiZE5Ppy.js";import"./Button-C0UeLBcI.js";import"./small-cross-101h6MuH.js";import"./ActionButton-CABAWaY9.js";import"./Checkbox-DwUaOwDV.js";import"./useValueChanged-BctVuVQ0.js";import"./CollapsiblePanel-C8oABOT0.js";import"./MultiColumnSortDialog-qjR5VKQ8.js";import"./MenuTrigger-D4mBzRd2.js";import"./CompositeItem-D0zI7JSM.js";import"./ToolbarRootContext-wL6J-yBR.js";import"./getDisabledMountTransitionStyles-BoY6xuxX.js";import"./getPseudoElementBounds-CbCqB6i8.js";import"./chevron-down-BJYoVZT-.js";import"./index-Be1gSIYV.js";import"./error-DMVxncVX.js";import"./BaseCbacBanner-C2qSBH6V.js";import"./makeExternalStore-D0Tfgzjd.js";import"./Tooltip-Co9J038a.js";import"./PopoverPopup-B6Ev2xiA.js";import"./debounce-B7zx1OJa.js";import"./useOsdkClient-CXsx3bnP.js";import"./tick-CePMXaUu.js";import"./DropdownField-SGcuL_jM.js";import"./isEqual-CyLYkzQc.js";import"./withOsdkMetrics-DEAu1aG0.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
