import{j as i}from"./iframe-Cu1bkUV2.js";import{O as p}from"./object-table-DurmvQoB.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DxxEB7_T.js";import"./preload-helper-ByBgFQo4.js";import"./Table-Y1FWE3IE.js";import"./index-D8Vgs137.js";import"./Dialog-DVWo0jsn.js";import"./cross-CpkrEpF5.js";import"./svgIconContainer-Dtkj8beD.js";import"./useBaseUiId-CsOE9eY7.js";import"./InternalBackdrop-C8f9FJlV.js";import"./composite-CI-SY_Qx.js";import"./index-BJrnppPH.js";import"./index-B9_oej9c.js";import"./index-CUR5Eq6E.js";import"./useEventCallback-BtQ8PHNi.js";import"./SkeletonBar-Bq8PEonM.js";import"./LoadingCell-zA0x8rnT.js";import"./ColumnConfigDialog-Bm2LYWhb.js";import"./DraggableList-BKF9Kuwl.js";import"./search-DrsueRnd.js";import"./Input-DJ6MiMh_.js";import"./useControlled-ZBCcjOJi.js";import"./Button-DZYZZvZz.js";import"./small-cross-B1S7LnfD.js";import"./ActionButton-DH9h44Al.js";import"./Checkbox-CJqLusV1.js";import"./useValueChanged-DYWR0khf.js";import"./CollapsiblePanel-zk9ZxzpR.js";import"./MultiColumnSortDialog-CUpRvVWU.js";import"./MenuTrigger-B1Lm0LL5.js";import"./CompositeItem-h8YISAEh.js";import"./ToolbarRootContext-BY5M87wV.js";import"./getDisabledMountTransitionStyles-Butv2vF5.js";import"./getPseudoElementBounds-BRoXmMe-.js";import"./chevron-down-BybrbSIU.js";import"./index-BqaXp55y.js";import"./error-IUDeQ-Lf.js";import"./BaseCbacBanner-0mX1MplM.js";import"./makeExternalStore-3zKJ5_AP.js";import"./Tooltip-CT4INsO4.js";import"./PopoverPopup-D2wQ8s1I.js";import"./debounce-BB3252tl.js";import"./useOsdkClient-BSCp6sZ5.js";import"./tick-BzU5rGKz.js";import"./DropdownField-Cx1jh9K8.js";import"./isEqual-DKH62cLk.js";import"./withOsdkMetrics-DT7zQxuO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
