import{j as i}from"./iframe-BaqisVl-.js";import{O as p}from"./object-table-N9TioOP6.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-TTd-lgx4.js";import"./preload-helper-BNi0jLvn.js";import"./Table-CmYmfT6c.js";import"./index-DsJxcxuD.js";import"./Dialog-EoiXNhL7.js";import"./cross-NcNTP23a.js";import"./svgIconContainer-TSbWa_lF.js";import"./useBaseUiId-CZNOvWOX.js";import"./InternalBackdrop-up968Klp.js";import"./composite-DaM8qI8D.js";import"./index-DVQ_HGj7.js";import"./index-Dku8OroJ.js";import"./index-A62OeQPQ.js";import"./useEventCallback-DY-p_fZ5.js";import"./SkeletonBar-fHefpQx1.js";import"./LoadingCell-CZn5d-3r.js";import"./ColumnConfigDialog-mI5vm6MR.js";import"./DraggableList-CT2mXdMy.js";import"./search-xoA6p7gs.js";import"./Input-CegZe646.js";import"./useControlled-CryTPf8E.js";import"./Button-BTfyWfru.js";import"./small-cross-BYjsDC9b.js";import"./ActionButton-Cn9rIuq9.js";import"./Checkbox-xYsvmbaU.js";import"./useValueChanged-CZOqhP_j.js";import"./CollapsiblePanel-D6lMZr7T.js";import"./MultiColumnSortDialog-q0IiDNWX.js";import"./MenuTrigger-Cu7J25is.js";import"./CompositeItem-oqc0csOw.js";import"./ToolbarRootContext-DvsCcilH.js";import"./getDisabledMountTransitionStyles-CHGeqOic.js";import"./getPseudoElementBounds-BGR3l_iX.js";import"./chevron-down-DUYAtgkB.js";import"./index-fm-M8VrQ.js";import"./error-USmwsDsu.js";import"./BaseCbacBanner-CUsDT1Gr.js";import"./makeExternalStore-DaHYiupK.js";import"./Tooltip-Cy4Rx_YN.js";import"./PopoverPopup-BpgX9bSu.js";import"./debounce-BYezYolD.js";import"./useOsdkClient-D7dXXw4f.js";import"./tick-Sp8vA4eE.js";import"./DropdownField-S_mE2t2D.js";import"./isEqual-eVn1E-7x.js";import"./withOsdkMetrics-CQLdSUZI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
