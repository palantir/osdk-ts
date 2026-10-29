import{j as i}from"./iframe-Dk0apQWL.js";import{O as p}from"./object-table-OvSt47Oa.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B26skzIe.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DM8aWAfN.js";import"./index-BB76_vsP.js";import"./Dialog-CzgePr_x.js";import"./cross-mMEGpaf9.js";import"./svgIconContainer-BwfkG_x4.js";import"./useBaseUiId-DQQ7To9Z.js";import"./InternalBackdrop-BUdWMD8m.js";import"./composite-Cbj8LV8T.js";import"./index-Dw8JwmE5.js";import"./index-D4wGw7f5.js";import"./index-QtJ8ftv1.js";import"./useEventCallback-BqQVBoQ2.js";import"./SkeletonBar-Dk0v_u2l.js";import"./LoadingCell-PxmI2QJk.js";import"./ColumnConfigDialog-D2Y1ErhZ.js";import"./DraggableList-BnzrvLxt.js";import"./search-DeE9hnrl.js";import"./Input-BWvGoQIW.js";import"./useControlled-BoHpDSdR.js";import"./Button-cnivFiIY.js";import"./small-cross-CylaTMSl.js";import"./ActionButton-Dz0C2N0K.js";import"./Checkbox-B20ccMkC.js";import"./useValueChanged-D0eJODMY.js";import"./CollapsiblePanel-BM1L2j_O.js";import"./MultiColumnSortDialog-PTPh2Y5W.js";import"./MenuTrigger-ItmFwYXE.js";import"./CompositeItem-C2KsOfaA.js";import"./ToolbarRootContext-Cfg54QU-.js";import"./getDisabledMountTransitionStyles-ByloQe2_.js";import"./getPseudoElementBounds-Bat3eBC6.js";import"./chevron-down-BDsXaIBN.js";import"./index-C72SMcb2.js";import"./error-gPnUZGMu.js";import"./BaseCbacBanner-q8B9Ars3.js";import"./makeExternalStore-hT_U_1se.js";import"./Tooltip-DbhzqFNA.js";import"./PopoverPopup-GacXe4V2.js";import"./debounce-Bisu8SDu.js";import"./useOsdkClient-vEcJQf38.js";import"./tick-DMn6pr7G.js";import"./DropdownField-SyLzUpD6.js";import"./isEqual-BCqbvt43.js";import"./withOsdkMetrics-Bwt22oAD.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
