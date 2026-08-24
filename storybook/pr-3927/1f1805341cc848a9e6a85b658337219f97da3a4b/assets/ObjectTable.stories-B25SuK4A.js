import{j as i}from"./iframe-BIgcXSDZ.js";import{O as p}from"./object-table-_RywpXF4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-S8CbdEnF.js";import"./preload-helper-I7b_Ch73.js";import"./Table-DotfhjQY.js";import"./index-DM8zfWsc.js";import"./Dialog-DykK4055.js";import"./cross-2eC_maeE.js";import"./svgIconContainer-CenQjbw3.js";import"./useBaseUiId-DcQenqe4.js";import"./InternalBackdrop-yc5qSodQ.js";import"./composite-3NX-rf4m.js";import"./index-CQ7oQ3AC.js";import"./index-CiZKwyh5.js";import"./index-8J_dNII4.js";import"./useEventCallback-B1L0skHy.js";import"./SkeletonBar-br23o8HZ.js";import"./LoadingCell-BOT6J6jL.js";import"./ColumnConfigDialog-DzugBcZL.js";import"./DraggableList-CAh5UQ6G.js";import"./search-BW9tAKbE.js";import"./Input-eEwOcgZF.js";import"./useControlled-BZIw4uYt.js";import"./Button-DFsV6Wzt.js";import"./small-cross-BPNqh88V.js";import"./ActionButton-BNjzCZrh.js";import"./Checkbox-B1KgIEsw.js";import"./useValueChanged-Dm5GnS4m.js";import"./CollapsiblePanel-CoeryTM7.js";import"./MultiColumnSortDialog-XQQGQuR1.js";import"./MenuTrigger-CJeh0sRw.js";import"./CompositeItem-AZoCKB1T.js";import"./ToolbarRootContext-DU0Y7qe6.js";import"./getDisabledMountTransitionStyles-CUA0J2Ai.js";import"./getPseudoElementBounds-CWCGnWko.js";import"./chevron-down-DaVoXduB.js";import"./index-Co6Wvvdj.js";import"./error-DVtZos_5.js";import"./BaseCbacBanner-CETulZJB.js";import"./makeExternalStore-DIX60yxh.js";import"./Tooltip-BCrH7ks-.js";import"./PopoverPopup-re9QpKIm.js";import"./debounce-Bmij6q9M.js";import"./useOsdkClient-DHZTS1gO.js";import"./tick-YabvmYPV.js";import"./DropdownField-Bi_mfmqp.js";import"./useDebouncedCallback-CuViuzMQ.js";import"./withOsdkMetrics-CSD8F9fY.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
