import{j as i}from"./iframe-Do-VpOjh.js";import{O as p}from"./object-table-BwRPkyFs.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B0IJnsh-.js";import"./preload-helper-5MNjctgv.js";import"./Table-DlXnM-uc.js";import"./index-guBT-Q22.js";import"./Dialog-7E7RidgZ.js";import"./cross-ogJb6_71.js";import"./svgIconContainer-Daa0qYJx.js";import"./useBaseUiId-NGuXhXtm.js";import"./InternalBackdrop-CAfbe648.js";import"./composite-XuPIjsZ0.js";import"./index-BPQdlCoY.js";import"./index-Bl0nKd-v.js";import"./index-6QJ451ri.js";import"./useEventCallback-BfN-usbW.js";import"./SkeletonBar-DEQbvDAC.js";import"./LoadingCell-TR-8Cewx.js";import"./ColumnConfigDialog-CZtIpYKX.js";import"./DraggableList-DCsvageq.js";import"./search-CUVFG7hS.js";import"./Input-DBYDuVVL.js";import"./useControlled-Bktt7DnW.js";import"./Button-CyEQqHyS.js";import"./small-cross-BbsWtOmh.js";import"./ActionButton-CGqklm4n.js";import"./Checkbox-X0ByKMK-.js";import"./useValueChanged-BWy_YmP2.js";import"./CollapsiblePanel-DU8jndzx.js";import"./MultiColumnSortDialog-BG5mZIhG.js";import"./MenuTrigger-Bx9xsw3l.js";import"./CompositeItem-tVccsBIo.js";import"./ToolbarRootContext-ABr2rsL3.js";import"./getDisabledMountTransitionStyles-DJ-_H-jY.js";import"./getPseudoElementBounds-Dn4RekYY.js";import"./chevron-down-CEDyHpu0.js";import"./index-BCFomdyL.js";import"./error-CfZglkqO.js";import"./BaseCbacBanner-Bgyzasq9.js";import"./makeExternalStore-C6Ji6_pQ.js";import"./Tooltip-iQ-POIkn.js";import"./PopoverPopup-Bu1yL2u-.js";import"./debounce-BXhlOus3.js";import"./useOsdkClient-ClIl2h3b.js";import"./tick-De1F-M9u.js";import"./DropdownField-Ds_qQON0.js";import"./isEqual-C845QIj_.js";import"./withOsdkMetrics-C1OJVKTR.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
