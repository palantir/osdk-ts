import{j as i}from"./iframe-zPv4Qzqd.js";import{O as p}from"./object-table-CUYlXaxF.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BC_6Am4J.js";import"./preload-helper-PJxV9mQF.js";import"./Table-fZnXH_AO.js";import"./index-CBKHTxLZ.js";import"./Dialog-DZNnheOL.js";import"./cross--dxagHok.js";import"./svgIconContainer-vb3o1rNS.js";import"./useBaseUiId-DVjOyWmw.js";import"./InternalBackdrop-CBe1boE7.js";import"./composite-B2SBl57g.js";import"./index-LSfGN98D.js";import"./index-Dqw7fhLs.js";import"./index-CNxBS-8s.js";import"./useEventCallback-DQ_0G6aA.js";import"./SkeletonBar-YCmzJufB.js";import"./LoadingCell-DuJbkSYV.js";import"./ColumnConfigDialog-CNA6JZ0v.js";import"./DraggableList-vwtiIr8s.js";import"./search-CQlxqsQe.js";import"./Input-BZ1hKq3S.js";import"./useControlled-0ViRdTwH.js";import"./Button-Bpg2U0NI.js";import"./small-cross-VYccQ32Y.js";import"./ActionButton-BfWfVjYe.js";import"./Checkbox-D_Zir1cl.js";import"./useValueChanged-n6G7gR_P.js";import"./CollapsiblePanel-BFa8buwC.js";import"./MultiColumnSortDialog-nRSq_gea.js";import"./MenuTrigger-DuJVMmZY.js";import"./CompositeItem-CdWRe_DK.js";import"./ToolbarRootContext-CKYx1umj.js";import"./getDisabledMountTransitionStyles-Ck2s3g2H.js";import"./getPseudoElementBounds-NPMWYZIY.js";import"./chevron-down-Bq07BQjw.js";import"./index-BFqEQ3NN.js";import"./error-DWSHpljN.js";import"./BaseCbacBanner-CQ6NxDOp.js";import"./makeExternalStore-Bpbj6CnC.js";import"./Tooltip-DVU7TgEy.js";import"./PopoverPopup-D_yXP70P.js";import"./debounce-BrLoezJi.js";import"./useOsdkClient-BGVTEbj_.js";import"./tick-DG8Ui0fG.js";import"./DropdownField-CqnJScbI.js";import"./isEqual-DSgRsP2x.js";import"./withOsdkMetrics-DD1axzdT.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
