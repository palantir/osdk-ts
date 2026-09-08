import{j as i}from"./iframe-K0TCdsde.js";import{O as p}from"./object-table-M3n5hKDi.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C5KFpfSB.js";import"./preload-helper-Dwgne7Il.js";import"./Table-C1XM_QKS.js";import"./index-DItHkTgY.js";import"./Dialog-B1DayVK3.js";import"./cross-DjsH4BEX.js";import"./svgIconContainer-Gp_WdiNB.js";import"./useBaseUiId-BMvE3UAz.js";import"./InternalBackdrop-D74UPcil.js";import"./composite-BDOTFVh5.js";import"./index-Ce5TUgVz.js";import"./index-BSQQlf89.js";import"./index-CC8neGBv.js";import"./useEventCallback-Bz_plcSd.js";import"./SkeletonBar-Brb8R_mA.js";import"./LoadingCell-BWzyKLCF.js";import"./ColumnConfigDialog-D_yPVd8N.js";import"./DraggableList-BqMr2Fp_.js";import"./search-FP5lKD6I.js";import"./Input-jHELzDU6.js";import"./useControlled-CpHTfHM_.js";import"./Button-vcsLfruM.js";import"./small-cross-vpbYh6K7.js";import"./ActionButton-De6D_lsR.js";import"./Checkbox-DCU9bxEE.js";import"./useValueChanged-wDqDSQMF.js";import"./CollapsiblePanel-CCOarC2c.js";import"./MultiColumnSortDialog-BK-e9qA_.js";import"./MenuTrigger-WTCUNXlT.js";import"./CompositeItem-CKtGokfX.js";import"./ToolbarRootContext-B08lxs8l.js";import"./getDisabledMountTransitionStyles-BmL_QtPR.js";import"./getPseudoElementBounds-DYoZN7nx.js";import"./chevron-down-BkK6PVnf.js";import"./index-DTPy9xIo.js";import"./error-C3B7tWvq.js";import"./BaseCbacBanner-BOLM0JoP.js";import"./makeExternalStore-sZwLQQxf.js";import"./Tooltip-DV12Jp8G.js";import"./PopoverPopup-DfnNNJDY.js";import"./debounce-GmSPsudP.js";import"./useOsdkClient-Cb96qSwW.js";import"./tick-D-0sxjMV.js";import"./DropdownField-D7fdjvLz.js";import"./isEqual-D6N9qcKt.js";import"./withOsdkMetrics-B9tQP4dB.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
