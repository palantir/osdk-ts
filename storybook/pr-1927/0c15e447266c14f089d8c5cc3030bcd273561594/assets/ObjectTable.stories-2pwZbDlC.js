import{j as i}from"./iframe-QQ9Fs_tc.js";import{O as p}from"./object-table-Qwse69C6.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-X0eq44IT.js";import"./preload-helper-B4fYryDC.js";import"./Table-XvNUOy3B.js";import"./index-DkrQDtS2.js";import"./Dialog-BidFhY0J.js";import"./cross-DmvM--6P.js";import"./svgIconContainer-DTxq_i5h.js";import"./useBaseUiId-1r5VJFrp.js";import"./InternalBackdrop-CV3kvSS-.js";import"./composite-2UwVI9RX.js";import"./index-D63-R6ut.js";import"./index-DsjkNNfA.js";import"./index-DN5mWcju.js";import"./useEventCallback-UDwFt7_R.js";import"./SkeletonBar-bIWrP7Fa.js";import"./LoadingCell-5E5jRK52.js";import"./ColumnConfigDialog-DsKPIw6u.js";import"./DraggableList-DsZqtxDJ.js";import"./search-BSq4Mlrv.js";import"./Input-CucLW42P.js";import"./useControlled-36aB-sGp.js";import"./Button-DJziOx5S.js";import"./small-cross-CwQDMn6h.js";import"./ActionButton-D_tYhxEf.js";import"./Checkbox-BQqiVQMr.js";import"./useValueChanged-zGcUW3kI.js";import"./CollapsiblePanel-B9w9s6OF.js";import"./MultiColumnSortDialog-CWeOA6_H.js";import"./MenuTrigger-ZsgrxCHv.js";import"./CompositeItem-Bl0uQaQG.js";import"./ToolbarRootContext-YsoXVLyq.js";import"./getDisabledMountTransitionStyles-2ojh7cGB.js";import"./getPseudoElementBounds-DXdFGrw3.js";import"./chevron-down-Bgnu4jc9.js";import"./index-C32oDOmG.js";import"./error-DTTckfDx.js";import"./BaseCbacBanner-D46qbUJD.js";import"./makeExternalStore-kQ-0-i1V.js";import"./Tooltip-BPNAr5X_.js";import"./PopoverPopup-LQKhjub2.js";import"./debounce-Ds7iogVo.js";import"./useOsdkClient-DtjCwYRE.js";import"./tick-fiXJSjT8.js";import"./DropdownField-B-kw3xxE.js";import"./isEqual-DKOAC8cr.js";import"./withOsdkMetrics-MEpQgkcH.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
