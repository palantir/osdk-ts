import{j as i}from"./iframe-BQKQTmXB.js";import{O as p}from"./object-table-DxzaGByH.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C50VX8fD.js";import"./preload-helper-DpY65_Qx.js";import"./Table-CS7xRIyW.js";import"./index-BAgavFcN.js";import"./Dialog-DjuaQgnL.js";import"./cross-BbeReS0g.js";import"./svgIconContainer-s1izGso1.js";import"./useBaseUiId-D4SYKib3.js";import"./InternalBackdrop-DOuWLN2E.js";import"./composite-BB13Acp8.js";import"./index-DW4OjGFj.js";import"./index-DOiTTslB.js";import"./index-DtlmBYgM.js";import"./useEventCallback-jzD9VSkj.js";import"./SkeletonBar-CHr63-jY.js";import"./LoadingCell-BcWecsrO.js";import"./ColumnConfigDialog-B16mvlsW.js";import"./DraggableList-DRDlkfg0.js";import"./search-C5fONMO5.js";import"./Input-BvQQtcuT.js";import"./useControlled-C-CBJQhx.js";import"./Button-DY1Aghm3.js";import"./small-cross-DRGYN-SH.js";import"./ActionButton-BXjwvh-b.js";import"./Checkbox-B0mnHjoi.js";import"./useValueChanged-aOvOP-Fs.js";import"./CollapsiblePanel-BmP8oKEK.js";import"./MultiColumnSortDialog-DH7Tz3SM.js";import"./MenuTrigger-Dlse7q-R.js";import"./CompositeItem-BvDVmAAl.js";import"./ToolbarRootContext-C9Gx_t9N.js";import"./getDisabledMountTransitionStyles-DnQGFrBG.js";import"./getPseudoElementBounds-D05yaNHB.js";import"./chevron-down-D5kmZbrP.js";import"./index-GsxlN7I4.js";import"./error-dE1POcw9.js";import"./BaseCbacBanner-Bc66uD5M.js";import"./makeExternalStore-g6QM0BRI.js";import"./Tooltip-BNCx0jB1.js";import"./PopoverPopup-DXEOdufz.js";import"./debounce-eoEcRIUs.js";import"./useOsdkClient-CM8jZA73.js";import"./tick-CNB2_64c.js";import"./DropdownField-DG4-GpYq.js";import"./isEqual-CSKA3c_k.js";import"./withOsdkMetrics-DsblZkp9.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
