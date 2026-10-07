import{j as i}from"./iframe-BV8H6lRC.js";import{O as p}from"./object-table-C6lRfVfE.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-a_0RCS5-.js";import"./preload-helper-FghdvxpP.js";import"./Table-JaytBHn3.js";import"./index-DU9RRfrb.js";import"./Dialog-DvRIB5zl.js";import"./cross-D92mjgqE.js";import"./svgIconContainer-B2TLggqZ.js";import"./useBaseUiId-Bch4RCf-.js";import"./InternalBackdrop-DFn2kFuw.js";import"./composite-6jNJwuj9.js";import"./index-fE68LmNS.js";import"./index-ByctvPor.js";import"./index-xKI30ir_.js";import"./useEventCallback-ZwAzgc5q.js";import"./SkeletonBar-BcrwqPs9.js";import"./LoadingCell-BZ-ka11a.js";import"./ColumnConfigDialog-Dv0fubDw.js";import"./DraggableList-CHaV7Vg7.js";import"./search-BlhwHZiG.js";import"./Input-B3KKnPgU.js";import"./useControlled-DFgYtmw-.js";import"./Button-cZssApwN.js";import"./small-cross-CB3FdAHS.js";import"./ActionButton-v2nTt39b.js";import"./Checkbox-B4TDd9O8.js";import"./useValueChanged-Bqcd_ocF.js";import"./CollapsiblePanel-h5yRCfis.js";import"./MultiColumnSortDialog-CHYeqK8V.js";import"./MenuTrigger-B-EwXmEp.js";import"./CompositeItem-CfY4xOZ4.js";import"./ToolbarRootContext-B0zqLD7S.js";import"./getDisabledMountTransitionStyles-CaNIdVg_.js";import"./getPseudoElementBounds-B3RJWnEx.js";import"./chevron-down-CmiHvm8d.js";import"./index-BSOrQZ_c.js";import"./error-Bt7eKOT3.js";import"./BaseCbacBanner-CV_DEHlP.js";import"./makeExternalStore-DXngIb0h.js";import"./Tooltip-BGLVmsTF.js";import"./PopoverPopup-MAImkRcc.js";import"./debounce-CcLYKazv.js";import"./useOsdkClient-DySK7kNm.js";import"./tick-M2SHJwUO.js";import"./DropdownField-DkGcdfin.js";import"./isEqual-DY2caHIP.js";import"./withOsdkMetrics-ybYt3TTQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
