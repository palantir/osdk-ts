import{j as i}from"./iframe-Dm9tPq9-.js";import{O as p}from"./object-table-B2wyECGp.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CMoqCjDL.js";import"./preload-helper-DbanGSn8.js";import"./Table-0jLCAVha.js";import"./index-SudSBJ9d.js";import"./Dialog-BDOz5nRC.js";import"./cross-DovxETch.js";import"./svgIconContainer-DLeOey4i.js";import"./useBaseUiId-Bh3ZKuZJ.js";import"./InternalBackdrop-CQfhuxOD.js";import"./composite-DwLeZJsP.js";import"./index-pwNhYih4.js";import"./index-BEF1L48c.js";import"./index-jJsu7-Bg.js";import"./useEventCallback-D0i4hHrz.js";import"./SkeletonBar-Co2KJNpr.js";import"./LoadingCell-ClA53876.js";import"./ColumnConfigDialog-CCOQZeJ3.js";import"./DraggableList-DmtqR8L7.js";import"./search-DpPE568F.js";import"./Input-1s2rxWuw.js";import"./useControlled-zgk6WMo4.js";import"./Button-D711FISQ.js";import"./small-cross-D1_y47j8.js";import"./ActionButton-BoWHV299.js";import"./Checkbox-BgLuiuwc.js";import"./useValueChanged-T9NupB12.js";import"./CollapsiblePanel-oCJFTmUj.js";import"./MultiColumnSortDialog-DkH22_Rz.js";import"./MenuTrigger-Cfhmo_uS.js";import"./CompositeItem-Brc_cUGL.js";import"./ToolbarRootContext-DattZO7d.js";import"./getDisabledMountTransitionStyles-LF-SO7gC.js";import"./getPseudoElementBounds-bh7QF3ZR.js";import"./chevron-down-COzwHJk7.js";import"./index-BwyOjzrJ.js";import"./error-CX1V2PGn.js";import"./BaseCbacBanner-BSaJ_SWa.js";import"./makeExternalStore-CEHTDEAH.js";import"./Tooltip-Dj98utpN.js";import"./isObject-iDHKARFT.js";import"./debounce-v3DZ4rGU.js";import"./useOsdkClient-DfBdKLO7.js";import"./tick-BuAP4hF8.js";import"./DropdownField-C2nHBICk.js";import"./isEqual-D7o6NFD6.js";import"./_baseIsEqual-CK_tMD84.js";import"./withOsdkMetrics-4sk2cJVp.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
