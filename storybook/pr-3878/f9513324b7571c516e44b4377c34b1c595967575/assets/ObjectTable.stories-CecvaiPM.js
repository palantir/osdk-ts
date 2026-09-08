import{j as i}from"./iframe-C3HGDapW.js";import{O as p}from"./object-table-CQz3p20b.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-QMQHdz9N.js";import"./preload-helper-Dd-r_PP_.js";import"./Table-DFFYj90Y.js";import"./index-CJ776Wah.js";import"./Dialog-ZkfoqNUX.js";import"./cross-D5WvDMJV.js";import"./svgIconContainer-CFN5a8Be.js";import"./useBaseUiId-DDU_oadF.js";import"./InternalBackdrop-Be2xXmYq.js";import"./composite-C0TGio2P.js";import"./index-DQeQgx2N.js";import"./index-BijSJOSI.js";import"./index-CI4EIWpq.js";import"./useEventCallback-Lx0RHoQ3.js";import"./SkeletonBar-vwa0QD39.js";import"./LoadingCell-B_QIsEjI.js";import"./ColumnConfigDialog-Da8NeShu.js";import"./DraggableList-BK2bp82b.js";import"./search-B43uCRp2.js";import"./Input-BSSKD0Yf.js";import"./useControlled-U-IEPHgG.js";import"./Button-D-rdzhRE.js";import"./small-cross-AZq4qJ1d.js";import"./ActionButton-C4HUNn1x.js";import"./Checkbox-D3EvpIya.js";import"./useValueChanged-Dgd9m4pd.js";import"./CollapsiblePanel-BL4COOfP.js";import"./MultiColumnSortDialog-Cceo__Pb.js";import"./MenuTrigger-Cki9aRxB.js";import"./CompositeItem-ug1IBEV3.js";import"./ToolbarRootContext-DquNC5M6.js";import"./getDisabledMountTransitionStyles-C6vvAqBU.js";import"./getPseudoElementBounds-CkAjQIKN.js";import"./chevron-down-DzjGRqJz.js";import"./index-LE1XJX1v.js";import"./error-BHy_Uegk.js";import"./BaseCbacBanner-CcieG2Vc.js";import"./makeExternalStore-CFal4aDF.js";import"./Tooltip-5nh3-0V1.js";import"./PopoverPopup-Cr_rWDbz.js";import"./debounce-KZy00M_V.js";import"./useOsdkClient-CO8K2hWt.js";import"./tick-l_Py6lRO.js";import"./DropdownField-FtuodETP.js";import"./isEqual-C1sHjSdi.js";import"./withOsdkMetrics-TK1FZJZJ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
