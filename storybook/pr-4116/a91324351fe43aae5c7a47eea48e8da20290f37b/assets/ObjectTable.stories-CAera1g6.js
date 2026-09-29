import{j as i}from"./iframe-CZutwAHo.js";import{O as p}from"./object-table-BbJRuFno.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BqPDFhUD.js";import"./preload-helper-Cn3SJHww.js";import"./Table-B8cgGfQL.js";import"./index-CppgNV0M.js";import"./Dialog-B1VpodKR.js";import"./cross-D02obdgD.js";import"./svgIconContainer-CmX1H1mx.js";import"./useBaseUiId-CtEICjky.js";import"./InternalBackdrop-G99DwSaZ.js";import"./composite-mcUSxhXz.js";import"./index-B50GZKUg.js";import"./index-2k1Tvx5C.js";import"./index-HA6Va8NR.js";import"./useEventCallback-DZshVR4a.js";import"./SkeletonBar-B0Lj-A75.js";import"./LoadingCell-DZJOvAcQ.js";import"./ColumnConfigDialog-Bu4boOIF.js";import"./DraggableList-C-UqdMK0.js";import"./search-C59PF3w9.js";import"./Input-oDj_0Z0d.js";import"./useControlled-DwVRdNhF.js";import"./Button-sSK8eFI-.js";import"./small-cross-CFVLA5Ia.js";import"./ActionButton-axhhg9v5.js";import"./Checkbox-CgMU5S4K.js";import"./useValueChanged-CZKUaGQu.js";import"./CollapsiblePanel-Dsv7xvDY.js";import"./MultiColumnSortDialog-WIJhht9a.js";import"./MenuTrigger-C2muNGYu.js";import"./CompositeItem-DdZNAqnt.js";import"./ToolbarRootContext-FQPAQT5c.js";import"./getDisabledMountTransitionStyles-BZ863oN2.js";import"./getPseudoElementBounds-D34_EoM3.js";import"./chevron-down--5qYG9Xz.js";import"./index-io1wfiP6.js";import"./error-CZtG4Hsy.js";import"./BaseCbacBanner-mfv3mmX8.js";import"./makeExternalStore-CCR0CM05.js";import"./Tooltip-8A2JRkIJ.js";import"./PopoverPopup-CJaw97SK.js";import"./debounce-0IA_cAla.js";import"./useOsdkClient-DgvAplUI.js";import"./tick-Dwj_TbVz.js";import"./DropdownField-CGLxykfT.js";import"./isEqual-CD-t15N1.js";import"./withOsdkMetrics-Bw7lmz7K.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
