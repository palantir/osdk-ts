import{j as i}from"./iframe--2o31fpS.js";import{O as p}from"./object-table-BSmGQ0OR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CIL126ea.js";import"./preload-helper-BGtLG4Ze.js";import"./Table-_NbnqI6p.js";import"./index-CqkP8V1G.js";import"./Dialog-CUnqqWn-.js";import"./cross-11SNaKV0.js";import"./svgIconContainer-C1D02ztO.js";import"./useBaseUiId-DkfG-pIU.js";import"./InternalBackdrop-Cl2iltkm.js";import"./composite-QRzMYoxy.js";import"./index-DVBrMkW3.js";import"./index-DYasKxPB.js";import"./index-WsSVru4g.js";import"./useEventCallback-Bfcmscgt.js";import"./SkeletonBar-dBdl3_Eb.js";import"./LoadingCell-DppxWDb1.js";import"./ColumnConfigDialog-CLPlY36r.js";import"./DraggableList-BCbhifmv.js";import"./search-DCb3eFG7.js";import"./Input-CqReJTw6.js";import"./useControlled-_9g-GziU.js";import"./Button-MFx7ttW0.js";import"./small-cross-CpBPFOEe.js";import"./ActionButton-BxnI5abi.js";import"./Checkbox-7-bZ0hUh.js";import"./useValueChanged-BmRi-Zrz.js";import"./CollapsiblePanel-CaV5vxo-.js";import"./MultiColumnSortDialog-C3WeHFR9.js";import"./MenuTrigger-iYMw9usz.js";import"./CompositeItem-jeolwUWG.js";import"./ToolbarRootContext-B7UKPIgL.js";import"./getDisabledMountTransitionStyles-Coe4unGQ.js";import"./getPseudoElementBounds-CjbEuNK7.js";import"./chevron-down-DQu-ZHpt.js";import"./index-B5Pw0m5Z.js";import"./error-CZE7-qa2.js";import"./BaseCbacBanner-a-FKKl8c.js";import"./makeExternalStore-cJzBmAO1.js";import"./Tooltip-Cb3WfA-U.js";import"./PopoverPopup-BXOF-a2w.js";import"./debounce-CbfdFUk1.js";import"./useOsdkClient-B6Xc0VYo.js";import"./tick-BvZOjkPN.js";import"./DropdownField-DRd1vWmE.js";import"./isEqual-D5Kz6pCE.js";import"./withOsdkMetrics-BZ26a9pj.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
