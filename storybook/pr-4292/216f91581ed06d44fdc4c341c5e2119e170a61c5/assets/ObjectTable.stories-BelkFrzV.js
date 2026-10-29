import{j as i}from"./iframe-BJLBRZOh.js";import{O as p}from"./object-table-D6XTw50v.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BY9JeJm2.js";import"./preload-helper-BwUp_7F1.js";import"./Table-dj-3XM9K.js";import"./index-C9_BYSi8.js";import"./Dialog-w7wPINN3.js";import"./cross-DYYKBVG2.js";import"./svgIconContainer-CQ7lEg_v.js";import"./useBaseUiId-LHwOB3kw.js";import"./InternalBackdrop-Bg95Crdb.js";import"./composite-BxFzj_3L.js";import"./index-MgR6vtA5.js";import"./index-Cf7wbzeY.js";import"./index-DsPo5D0P.js";import"./useEventCallback-D_IWJpWQ.js";import"./SkeletonBar-CA0TLWsN.js";import"./LoadingCell-oMac1VC6.js";import"./ColumnConfigDialog-D8ziylzG.js";import"./DraggableList-D3U2xt4z.js";import"./search-lm4u23Jr.js";import"./Input-DotRyYSg.js";import"./useControlled-DvCQBOjX.js";import"./Button-B1QFNCxV.js";import"./small-cross-s83LmiPv.js";import"./ActionButton-DfBkhzDx.js";import"./Checkbox-Cf1eTA8o.js";import"./useValueChanged-DKvkRZw_.js";import"./CollapsiblePanel-DeNvoW95.js";import"./MultiColumnSortDialog-Bxs_R_QI.js";import"./MenuTrigger-DUpdUHK8.js";import"./CompositeItem-B-vP8lxH.js";import"./ToolbarRootContext-DhgC0mq4.js";import"./getDisabledMountTransitionStyles-CMTlxnVD.js";import"./getPseudoElementBounds-GUEr2WJt.js";import"./chevron-down-PUEKZFzz.js";import"./index-BxHhiHH9.js";import"./error-RXBYB8o8.js";import"./BaseCbacBanner-CqC4EUL0.js";import"./makeExternalStore-BWhFJ2a3.js";import"./Tooltip-BYFoA5Qd.js";import"./PopoverPopup-Cbo8QQ1w.js";import"./debounce-lfKLdo1S.js";import"./useOsdkClient-BnXpdimb.js";import"./tick-G0_utWJZ.js";import"./DropdownField-DLWbrKeC.js";import"./isEqual-Bm2E3Blo.js";import"./withOsdkMetrics-CUH6WGya.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
