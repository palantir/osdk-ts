import{j as i}from"./iframe-BHP--iSv.js";import{O as p}from"./object-table-CiDmmhiS.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Comg_l-v.js";import"./preload-helper-4Y0sWPF7.js";import"./Table-DQpHWODC.js";import"./index-CuQOASnK.js";import"./Dialog-BKKVoGn9.js";import"./cross-D3_DOx--.js";import"./svgIconContainer-XMK9JozI.js";import"./useBaseUiId-txgvadn-.js";import"./InternalBackdrop-BaP5BEVm.js";import"./composite-CY1_GtTz.js";import"./index-BMZH6GYS.js";import"./index-CjU2x-RF.js";import"./index-_cBTnAHR.js";import"./useEventCallback-By_yXujH.js";import"./SkeletonBar-3dHEcipt.js";import"./LoadingCell-DsG_X0ml.js";import"./ColumnConfigDialog-BT6S1fEv.js";import"./DraggableList-CaUaYMqt.js";import"./search-gxC0SZFk.js";import"./Input-DBfp7isZ.js";import"./useControlled-DACQJINy.js";import"./Button-cuAOjsWC.js";import"./small-cross-CT1xO2rS.js";import"./ActionButton-CgEHLRCh.js";import"./Checkbox-CrRIvHD3.js";import"./useValueChanged-MdzQIZy9.js";import"./CollapsiblePanel-BStH85wc.js";import"./MultiColumnSortDialog-xA9xRG8E.js";import"./MenuTrigger-BwG1oPrV.js";import"./CompositeItem-QqJnKLYC.js";import"./ToolbarRootContext-i6dOGAi5.js";import"./getDisabledMountTransitionStyles-D9c4uTR_.js";import"./getPseudoElementBounds-CL-DWHCc.js";import"./chevron-down-BptITD6J.js";import"./index-C-eIeMvP.js";import"./error-Bl2IH4zy.js";import"./BaseCbacBanner-tJbKI--4.js";import"./makeExternalStore-nAPJO73f.js";import"./Tooltip-B6i-uyb3.js";import"./PopoverPopup-sbiZa-o-.js";import"./debounce-B6E0h1Dy.js";import"./useOsdkClient-Bt205Lro.js";import"./tick-Dy2Ajo8a.js";import"./DropdownField-CdixWEkP.js";import"./isEqual-BuHIXC9x.js";import"./withOsdkMetrics-xpnG9elc.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
