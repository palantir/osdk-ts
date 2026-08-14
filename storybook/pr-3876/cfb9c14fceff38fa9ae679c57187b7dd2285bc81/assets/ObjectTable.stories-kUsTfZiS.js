import{j as i}from"./iframe-D_O5GLHm.js";import{O as p}from"./object-table-D3yZaObc.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CVQ9d6d_.js";import"./preload-helper-BLPPHW2C.js";import"./Table-BtWkwFr1.js";import"./index-XDSUUcCa.js";import"./Dialog-BRGgRluV.js";import"./cross-Lj5lTaea.js";import"./svgIconContainer-8JL1zmDp.js";import"./useBaseUiId-COien2vv.js";import"./InternalBackdrop-BtehdrfI.js";import"./composite-DGHwIWe7.js";import"./index-7Ufx5a3v.js";import"./index-DFbGTOLT.js";import"./index-BCabjJxl.js";import"./useEventCallback-CNsHmTrb.js";import"./SkeletonBar-DsxSQ0fs.js";import"./LoadingCell-BqSn2AUd.js";import"./ColumnConfigDialog-CDnNCtD3.js";import"./DraggableList-02jrEExn.js";import"./search-CU5APTmq.js";import"./Input-thkDpxWB.js";import"./useControlled-Beot_qrN.js";import"./Button-BrP8Z4b1.js";import"./small-cross-CuvREWXJ.js";import"./ActionButton-BwsvAH-b.js";import"./Checkbox-KnIESxCK.js";import"./useValueChanged-BZz3GkYD.js";import"./CollapsiblePanel-D6rYACOC.js";import"./MultiColumnSortDialog-pStuKZoQ.js";import"./MenuTrigger-CTf5EtnH.js";import"./CompositeItem-DNEzxX_O.js";import"./ToolbarRootContext-D4thcjEL.js";import"./getDisabledMountTransitionStyles-Cxbvf9rA.js";import"./getPseudoElementBounds-BpGMnD2o.js";import"./chevron-down-D5_c8Y-V.js";import"./index-D_1d4DqT.js";import"./error-DjceP8bp.js";import"./BaseCbacBanner-D_5FKbl2.js";import"./makeExternalStore-YLv6cY3e.js";import"./Tooltip-9_9Lgz4D.js";import"./PopoverPopup-Ca-jp817.js";import"./debounce-Brz8Ko54.js";import"./useOsdkClient-c0rRTlqj.js";import"./tick-BUVGhtIk.js";import"./DropdownField-BbAmy0X3.js";import"./isEqual-nCkGt9mz.js";import"./withOsdkMetrics-BU8FJf48.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
