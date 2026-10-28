import{j as i}from"./iframe-D9bc5sGs.js";import{O as p}from"./object-table-D98NQBsI.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DeU8vqE7.js";import"./preload-helper-vGOnJPAI.js";import"./Table-BjYScxa6.js";import"./index-CEam5gFO.js";import"./Dialog-DIn83yZk.js";import"./cross-BPOrfQFo.js";import"./svgIconContainer-Dhw0ma3V.js";import"./useBaseUiId-DLMQDqLu.js";import"./InternalBackdrop-VOmSs6FM.js";import"./composite-BeRvyJhW.js";import"./index-ClW3grIR.js";import"./index-BdCRvfl5.js";import"./index-ZYtQI0k4.js";import"./useEventCallback-BoorzceT.js";import"./SkeletonBar-DcN0x3Jd.js";import"./LoadingCell-CUn_ULP8.js";import"./ColumnConfigDialog-BJ532Rxa.js";import"./DraggableList-BZLxRXoI.js";import"./search-Bf3j8VuO.js";import"./Input-D8Pr2sKK.js";import"./useControlled-DNEcMFJZ.js";import"./Button-FP5Viz1l.js";import"./small-cross-DB8z7y2Q.js";import"./ActionButton-ByEZi_P7.js";import"./Checkbox-FPB0D1z8.js";import"./useValueChanged-BshnFGHt.js";import"./CollapsiblePanel-DHmmGhnb.js";import"./MultiColumnSortDialog-BPa70xRK.js";import"./MenuTrigger-8kQCsdaA.js";import"./CompositeItem-DUTzLbNz.js";import"./ToolbarRootContext-Be9Mfuy4.js";import"./getDisabledMountTransitionStyles-C4hp9GAV.js";import"./getPseudoElementBounds-Bb0zZX2S.js";import"./chevron-down-Cyz2_1Cu.js";import"./index-DCNHXyz8.js";import"./error-Df3SJLzh.js";import"./BaseCbacBanner-CvVmvohl.js";import"./makeExternalStore-DCoCUTl5.js";import"./Tooltip-zRPANrX1.js";import"./PopoverPopup-DbOGNWOA.js";import"./debounce-7BefPhSx.js";import"./useOsdkClient-CSlIz3Zl.js";import"./tick-jhbvcied.js";import"./DropdownField-Chrmpf_E.js";import"./isEqual-D-lr0oWU.js";import"./withOsdkMetrics-B-tcpkdE.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
