import{j as i}from"./iframe-BjZw4uZx.js";import{O as p}from"./object-table-BB3hzK-D.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-_tbsaO71.js";import"./preload-helper-ORk2FqAe.js";import"./Table-DP-o-U8z.js";import"./index-1W3MQsZX.js";import"./Dialog-BjZqbaKB.js";import"./cross-B7IcoVob.js";import"./svgIconContainer-BFOOKm-2.js";import"./useBaseUiId-C8tvPGb8.js";import"./InternalBackdrop-C46cFkSM.js";import"./composite-D0Ri5kCB.js";import"./index-DQXv-LA5.js";import"./index-raVyMjZg.js";import"./index-r0kwR1Gy.js";import"./useEventCallback-CSDQXoK-.js";import"./SkeletonBar-Daru_zCU.js";import"./LoadingCell-B2u1yJgq.js";import"./ColumnConfigDialog-DPonYtjV.js";import"./DraggableList-C6r4jY7G.js";import"./search-H7eFoEJT.js";import"./Input-LhLxUdgb.js";import"./useControlled-CVj57D_o.js";import"./Button-CWwJb2Uz.js";import"./small-cross-bjtS9678.js";import"./ActionButton-CpeH4f8W.js";import"./Checkbox-BdW6PSMV.js";import"./useValueChanged-Dm26sXFI.js";import"./CollapsiblePanel-DjPQRvCu.js";import"./MultiColumnSortDialog-33ABf7qi.js";import"./MenuTrigger-DS-3gBTu.js";import"./CompositeItem-aZoPkaZ5.js";import"./ToolbarRootContext-DZ7-AtKR.js";import"./getDisabledMountTransitionStyles-BxHU8rzl.js";import"./getPseudoElementBounds-PRDfHB8H.js";import"./chevron-down-D59bxWeC.js";import"./index-DL1T0XSi.js";import"./error-BcfWkrIR.js";import"./BaseCbacBanner-BLaT_MeG.js";import"./makeExternalStore-NPZJ19CP.js";import"./Tooltip-COufKIaj.js";import"./PopoverPopup-Ba3qL99k.js";import"./debounce-D6KN3GLj.js";import"./useOsdkClient-DAD_fQEy.js";import"./tick-C-xJqvAS.js";import"./DropdownField-ByxMaZrM.js";import"./isEqual-DSKswR02.js";import"./withOsdkMetrics-C2-SGnqg.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
