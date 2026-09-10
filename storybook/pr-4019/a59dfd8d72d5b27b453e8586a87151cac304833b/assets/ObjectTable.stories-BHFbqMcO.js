import{j as i}from"./iframe-BP2VUYWC.js";import{O as p}from"./object-table-6oVdn4P3.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DcuoOUE7.js";import"./preload-helper-BbwyyhLF.js";import"./Table-CUH5qwyP.js";import"./index-B3KCIuhY.js";import"./Dialog-CMrT0k9e.js";import"./cross-DeTD0CpU.js";import"./svgIconContainer-CMKl73gN.js";import"./useBaseUiId-CYXU-WIp.js";import"./InternalBackdrop-r9gAECWy.js";import"./composite-DVGPAs_G.js";import"./index-NspJIeyA.js";import"./index-DhixDc4A.js";import"./index-DaoL6F_8.js";import"./useEventCallback-BDFp3vdh.js";import"./SkeletonBar-9y-j050X.js";import"./LoadingCell-_K4wPDga.js";import"./ColumnConfigDialog-De_gjKut.js";import"./DraggableList-DoZx-BCC.js";import"./search-DINZsCiw.js";import"./Input-DpmPrvJG.js";import"./useControlled-CeB8N0Pd.js";import"./Button-pnZeIBQ4.js";import"./small-cross-RfyOkJqj.js";import"./ActionButton-P7WnwUh9.js";import"./Checkbox-BcbJaqEV.js";import"./useValueChanged-z-dahWB0.js";import"./CollapsiblePanel-BIqJgZTu.js";import"./MultiColumnSortDialog-CVnXS-KB.js";import"./MenuTrigger-Clt4RC5o.js";import"./CompositeItem-CSy4C5-C.js";import"./ToolbarRootContext-Dpyy3jMP.js";import"./getDisabledMountTransitionStyles-DOtULwnT.js";import"./getPseudoElementBounds-Blw9_fDf.js";import"./chevron-down-DV6qQJYt.js";import"./index-WcLTZ_9n.js";import"./error-CPXKUEGb.js";import"./BaseCbacBanner-C2sRTlMm.js";import"./makeExternalStore-BtzD4IhM.js";import"./Tooltip-DIJzoANq.js";import"./PopoverPopup-wwj7egFy.js";import"./debounce-2s8xu7yX.js";import"./useOsdkClient-CuR5pRcj.js";import"./tick-Z8pTNBDG.js";import"./DropdownField-GomfOeRU.js";import"./isEqual-DRaFd88J.js";import"./withOsdkMetrics-CDKAmrIU.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
