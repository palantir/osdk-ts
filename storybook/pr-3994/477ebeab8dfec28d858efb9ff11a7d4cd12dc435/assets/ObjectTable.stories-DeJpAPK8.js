import{j as i}from"./iframe-CqpELHwS.js";import{O as p}from"./object-table-DbKwyHc5.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-TbBae5vS.js";import"./preload-helper-DfJ58b8G.js";import"./Table-Dht-ckZc.js";import"./index-BER4WQBS.js";import"./Dialog-C6jAoGEU.js";import"./cross-u_0PEuYq.js";import"./svgIconContainer-BTP1tkQ_.js";import"./useBaseUiId-CqI62Qpb.js";import"./InternalBackdrop-K6p4ENHo.js";import"./composite-DOZwc2bc.js";import"./index-Cis59Sxl.js";import"./index-CcEEUUj6.js";import"./index-CKO26sQe.js";import"./useEventCallback-b_Kd5kWf.js";import"./SkeletonBar-Cm1tloZj.js";import"./LoadingCell-5DLOBqqN.js";import"./ColumnConfigDialog-B0fzjNWg.js";import"./DraggableList-CibwmZ2o.js";import"./search-D9m05WlM.js";import"./Input-B8oxxBH0.js";import"./useControlled-D7QaFiC3.js";import"./Button-DVcrv2BS.js";import"./small-cross-C-5iiC69.js";import"./ActionButton-CLTSCNsY.js";import"./Checkbox-C950EoGE.js";import"./useValueChanged-BLX9s3qf.js";import"./CollapsiblePanel-DPutPnXc.js";import"./MultiColumnSortDialog-DZpwOj1q.js";import"./MenuTrigger-DXKsiQKV.js";import"./CompositeItem-Du2CIA1V.js";import"./ToolbarRootContext-uFYVc9Dk.js";import"./getDisabledMountTransitionStyles-BuRkNMoJ.js";import"./getPseudoElementBounds-B1CPQfJe.js";import"./chevron-down-CiPBsoDI.js";import"./index-0kwSuhRB.js";import"./error-jtHR9fDA.js";import"./BaseCbacBanner-z2_XzsM3.js";import"./makeExternalStore-CUMLWxOP.js";import"./Tooltip-A2o7ZLx2.js";import"./PopoverPopup-CJVmVuZk.js";import"./debounce-qnDwyFzV.js";import"./useOsdkClient-CHiIV34U.js";import"./tick-DztBPc7i.js";import"./DropdownField-D5sFpe7Y.js";import"./isEqual-DVLS-UMQ.js";import"./withOsdkMetrics-lKot8ktS.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
