import{j as i}from"./iframe-CEat60Hp.js";import{O as p}from"./object-table-BCLmmaTi.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-aw_1Zku1.js";import"./preload-helper-LGTzr2gM.js";import"./Table-Bub_W-mz.js";import"./index-DyITJqpd.js";import"./Dialog-DROKoGMC.js";import"./cross-D-uWfUMG.js";import"./svgIconContainer-CN1a-FY8.js";import"./useBaseUiId-ClM_1fTm.js";import"./InternalBackdrop-B4asx7Ai.js";import"./composite-Ce22aUj6.js";import"./index-BKoym7aL.js";import"./index-C_WLSqh0.js";import"./index-DndZj0Gs.js";import"./useEventCallback-BnyMPdTZ.js";import"./SkeletonBar-BrLmTLmg.js";import"./LoadingCell-DXyX9_yJ.js";import"./ColumnConfigDialog-BO4pL0eI.js";import"./DraggableList-Bl_9-C_6.js";import"./search-COfQ1bXD.js";import"./Input-By_gu53Z.js";import"./useControlled-CZHKBSyi.js";import"./Button-CCDq6dgu.js";import"./small-cross-CUzjSNDu.js";import"./ActionButton-B24-6bCU.js";import"./Checkbox-CiKag_ve.js";import"./useValueChanged-CmG-WmUh.js";import"./CollapsiblePanel-BnqmfXh-.js";import"./MultiColumnSortDialog-BiFc0ET9.js";import"./MenuTrigger-CBcFJ7OF.js";import"./CompositeItem-ChZ-XSJC.js";import"./ToolbarRootContext-MdE91PHa.js";import"./getDisabledMountTransitionStyles-BGMhA--N.js";import"./getPseudoElementBounds-Bm7AaELE.js";import"./chevron-down-CbnQEPHn.js";import"./index-DO0PQOk2.js";import"./error-Us6LDG_u.js";import"./BaseCbacBanner-_8RGnGge.js";import"./makeExternalStore-DYDIpdrC.js";import"./Tooltip-DYd7gvd4.js";import"./PopoverPopup-CE6K_Cw0.js";import"./debounce-9GnBlJ2l.js";import"./useOsdkClient-BR1Urz0Q.js";import"./tick-jmlbvTuh.js";import"./DropdownField-dGzl7MKn.js";import"./isEqual-DcvmIx5z.js";import"./withOsdkMetrics-CSdFZ0uc.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
