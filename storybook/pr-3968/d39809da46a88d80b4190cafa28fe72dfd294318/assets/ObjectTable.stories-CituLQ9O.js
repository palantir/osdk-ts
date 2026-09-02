import{j as i}from"./iframe-DTTRhbjz.js";import{O as p}from"./object-table-CSCzKFD6.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-LrSwQZsJ.js";import"./preload-helper-DZ8L_H7u.js";import"./Table-CpecjfT5.js";import"./index-CUoqkEXP.js";import"./Dialog-BfK58nrJ.js";import"./cross-DxV9JdK2.js";import"./svgIconContainer-B_ocSrmO.js";import"./useBaseUiId-BmoDTCf9.js";import"./InternalBackdrop-rtSS2ycu.js";import"./composite-oJZ0BVll.js";import"./index-zn7h2p8a.js";import"./index-V6cd4RX1.js";import"./index-Dcu6sCXm.js";import"./useEventCallback-BtfkEBd9.js";import"./SkeletonBar-DXkSeF2t.js";import"./LoadingCell-y1Zb8CB1.js";import"./ColumnConfigDialog-FvnOSS5M.js";import"./DraggableList-DPKzfUhR.js";import"./search-B7jXOPcp.js";import"./Input-qArtebK8.js";import"./useControlled-hxzK8_TE.js";import"./Button-C9Wmar6u.js";import"./small-cross-DLGahr5f.js";import"./ActionButton-B-CndYNu.js";import"./Checkbox-Ci3x7wul.js";import"./useValueChanged-DtuqEhdD.js";import"./CollapsiblePanel-CUxqdNXN.js";import"./MultiColumnSortDialog-BiM6tuW7.js";import"./MenuTrigger-BNlJoVy-.js";import"./CompositeItem-CyxD93o0.js";import"./ToolbarRootContext-C0tIZT9m.js";import"./getDisabledMountTransitionStyles-B_CQ4ePe.js";import"./getPseudoElementBounds-CTJoaJ_q.js";import"./chevron-down-tY3lDuMM.js";import"./index-VjiLdOhj.js";import"./error-DVsJjH4l.js";import"./BaseCbacBanner-D6FC6U4k.js";import"./makeExternalStore-DSiAtSgU.js";import"./Tooltip-F2Jve4L0.js";import"./PopoverPopup-CYgRzRPM.js";import"./debounce-Cx_WnQAf.js";import"./useOsdkClient-DbJUAzjP.js";import"./tick-CM5fRMiT.js";import"./DropdownField-ZTNTLS3m.js";import"./isEqual-BSqo0_8f.js";import"./withOsdkMetrics-Bai-2IUn.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
