import{j as i}from"./iframe-C2B-VFRS.js";import{O as p}from"./object-table-BJ5i7PgH.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B4ClCFer.js";import"./preload-helper-gVkjcPWs.js";import"./Table-OE5eKuz9.js";import"./index-CibutWy_.js";import"./Dialog-BH9sTQ_Y.js";import"./cross-mlHeLHgf.js";import"./svgIconContainer-CM1uLq-t.js";import"./useBaseUiId-VQFtxAep.js";import"./InternalBackdrop-CJYBMOj7.js";import"./composite-C2cqujK-.js";import"./index-DV_a4T4n.js";import"./index-BPBEeE2g.js";import"./index-CHTq1_qN.js";import"./useEventCallback-BashrAx4.js";import"./SkeletonBar-DWukyqXK.js";import"./LoadingCell-C9_4ywTt.js";import"./ColumnConfigDialog-qgZJ46M8.js";import"./DraggableList-BcZ88qI6.js";import"./search-BLJN7rrF.js";import"./Input-FVPyTFRQ.js";import"./useControlled-BCVnds_y.js";import"./Button-Mk-BPYCM.js";import"./small-cross-Cz9QG-kv.js";import"./ActionButton-D85etQjf.js";import"./Checkbox-DktXiTxH.js";import"./useValueChanged-RJlV-1X-.js";import"./CollapsiblePanel-DS7gWxno.js";import"./MultiColumnSortDialog-CARKhX7X.js";import"./MenuTrigger-DALOgPOG.js";import"./CompositeItem-CfE-UZcL.js";import"./ToolbarRootContext-CfiR31pw.js";import"./getDisabledMountTransitionStyles-CuVxlwmy.js";import"./getPseudoElementBounds-KVjV016-.js";import"./chevron-down-BhxKf9kJ.js";import"./index-PJ8iOaai.js";import"./error-qCP94tkU.js";import"./BaseCbacBanner-2HHCZ3oe.js";import"./makeExternalStore-D8T9YNbX.js";import"./Tooltip-DnchQPHR.js";import"./PopoverPopup-Bl_99L64.js";import"./debounce-B7lhl0_T.js";import"./useOsdkClient-GURrMHyG.js";import"./tick-EdYP3z7-.js";import"./DropdownField-RoShH29N.js";import"./isEqual-BbjptkFW.js";import"./withOsdkMetrics-CLj2Tgqh.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
