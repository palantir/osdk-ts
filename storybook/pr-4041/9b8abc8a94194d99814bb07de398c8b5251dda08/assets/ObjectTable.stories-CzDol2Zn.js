import{j as i}from"./iframe-C2aef3Jo.js";import{O as p}from"./object-table-DMcKKEk4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D1nNT13M.js";import"./preload-helper-B0E-WsIe.js";import"./Table-pflxRlkp.js";import"./index-CsHYpv_s.js";import"./Dialog-BtdNvTzc.js";import"./cross-mqWCDQwu.js";import"./svgIconContainer-BXdP-ypI.js";import"./useBaseUiId-BjYhZ9YY.js";import"./InternalBackdrop-BlKAfi2x.js";import"./composite-B2RxptoP.js";import"./index-DQucsIw7.js";import"./index-Cp-EDvHL.js";import"./index-CyH7L4rU.js";import"./useEventCallback-CoxthiVL.js";import"./SkeletonBar-gnedLyA8.js";import"./LoadingCell-DdO7Ovgw.js";import"./ColumnConfigDialog-C2N80SQq.js";import"./DraggableList-BgAgl3DM.js";import"./search-D59Jmp9F.js";import"./Input-DZdZFiVD.js";import"./useControlled-D_x1ayHM.js";import"./Button-Cg9SUJSs.js";import"./small-cross-DtWUwlkL.js";import"./ActionButton-CfluOSPS.js";import"./Checkbox-CQZyZMOV.js";import"./useValueChanged-CVWJNNpw.js";import"./CollapsiblePanel-BUi3el3A.js";import"./MultiColumnSortDialog-B1FOLAbC.js";import"./MenuTrigger-wDdcEy_H.js";import"./CompositeItem-083J1aRu.js";import"./ToolbarRootContext-B7lRNTOm.js";import"./getDisabledMountTransitionStyles-BNLNL_0E.js";import"./getPseudoElementBounds-CD5dDWGk.js";import"./chevron-down-DQZukdfl.js";import"./index-aIdw8oWM.js";import"./error-D0kSZtEZ.js";import"./BaseCbacBanner-BiWMelEa.js";import"./makeExternalStore-Bm5e9_5-.js";import"./Tooltip-DPyBGWcj.js";import"./PopoverPopup-DvqStvko.js";import"./debounce-BmYDT_B0.js";import"./useOsdkClient-2T4P3ooX.js";import"./tick-CqaW51QZ.js";import"./DropdownField-CILDnmw3.js";import"./isEqual-BvfB1Oe3.js";import"./withOsdkMetrics-DRjEcDDc.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
