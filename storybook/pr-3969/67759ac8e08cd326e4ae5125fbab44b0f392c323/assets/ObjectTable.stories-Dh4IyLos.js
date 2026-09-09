import{j as i}from"./iframe-B3Tmb11O.js";import{O as p}from"./object-table-BCvZmn17.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CAX5zgpH.js";import"./preload-helper-gakQdOi4.js";import"./Table-DlLJZcDW.js";import"./index-kZbgPBf-.js";import"./Dialog-DXajQC4U.js";import"./cross-C-JhHfM1.js";import"./svgIconContainer-BsQARODV.js";import"./useBaseUiId-Bm-vJATe.js";import"./InternalBackdrop-BOPEQbPn.js";import"./composite-2j3kB3hN.js";import"./index-DfPJChMi.js";import"./index-QmBbQjFR.js";import"./index-e_qtktns.js";import"./useEventCallback-B042jdme.js";import"./SkeletonBar-C_iP2YwF.js";import"./LoadingCell-CM3CyC3m.js";import"./ColumnConfigDialog-Bz076Z86.js";import"./DraggableList-BZjWJwF_.js";import"./search-ZvK9KowR.js";import"./Input-CWGLraK0.js";import"./useControlled-uOco89xC.js";import"./Button-BRlUcQED.js";import"./small-cross-DXMdsdMX.js";import"./ActionButton-BTBAdMJU.js";import"./Checkbox-MCdCcxi7.js";import"./useValueChanged-BchUu2C7.js";import"./CollapsiblePanel-DLuGcKFZ.js";import"./MultiColumnSortDialog-DcdKGjbm.js";import"./MenuTrigger-DKp4zb-V.js";import"./CompositeItem-BKoGSNiO.js";import"./ToolbarRootContext-CqEf4XEU.js";import"./getDisabledMountTransitionStyles-BzgaS7Qg.js";import"./getPseudoElementBounds-DAnTahBd.js";import"./chevron-down-CsQH01fJ.js";import"./index-D4PUZNNP.js";import"./error-DCFU_pHO.js";import"./BaseCbacBanner-CgGJwGzr.js";import"./makeExternalStore-fsIP6Iuw.js";import"./Tooltip-DlikgLh9.js";import"./PopoverPopup-B8BhyguS.js";import"./debounce-CWwSNpvq.js";import"./useOsdkClient-CEGzqg9X.js";import"./tick-Cl-i5oQo.js";import"./DropdownField-T9pQTlKf.js";import"./isEqual-CFaY0btu.js";import"./withOsdkMetrics-BtfS3RDS.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
