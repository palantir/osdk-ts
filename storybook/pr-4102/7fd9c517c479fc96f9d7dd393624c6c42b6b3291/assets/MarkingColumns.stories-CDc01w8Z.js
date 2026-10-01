import{f as p,j as e}from"./iframe-BHP--iSv.js";import{O as i}from"./object-table-CiDmmhiS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-4Y0sWPF7.js";import"./Table-DQpHWODC.js";import"./index-CuQOASnK.js";import"./Dialog-BKKVoGn9.js";import"./cross-D3_DOx--.js";import"./svgIconContainer-XMK9JozI.js";import"./useBaseUiId-txgvadn-.js";import"./InternalBackdrop-BaP5BEVm.js";import"./composite-CY1_GtTz.js";import"./index-BMZH6GYS.js";import"./index-CjU2x-RF.js";import"./index-_cBTnAHR.js";import"./useEventCallback-By_yXujH.js";import"./SkeletonBar-3dHEcipt.js";import"./LoadingCell-DsG_X0ml.js";import"./ColumnConfigDialog-BT6S1fEv.js";import"./DraggableList-CaUaYMqt.js";import"./search-gxC0SZFk.js";import"./Input-DBfp7isZ.js";import"./useControlled-DACQJINy.js";import"./Button-cuAOjsWC.js";import"./small-cross-CT1xO2rS.js";import"./ActionButton-CgEHLRCh.js";import"./Checkbox-CrRIvHD3.js";import"./useValueChanged-MdzQIZy9.js";import"./CollapsiblePanel-BStH85wc.js";import"./MultiColumnSortDialog-xA9xRG8E.js";import"./MenuTrigger-BwG1oPrV.js";import"./CompositeItem-QqJnKLYC.js";import"./ToolbarRootContext-i6dOGAi5.js";import"./getDisabledMountTransitionStyles-D9c4uTR_.js";import"./getPseudoElementBounds-CL-DWHCc.js";import"./chevron-down-BptITD6J.js";import"./index-C-eIeMvP.js";import"./error-Bl2IH4zy.js";import"./BaseCbacBanner-tJbKI--4.js";import"./makeExternalStore-nAPJO73f.js";import"./Tooltip-B6i-uyb3.js";import"./PopoverPopup-sbiZa-o-.js";import"./debounce-B6E0h1Dy.js";import"./useOsdkClient-Bt205Lro.js";import"./tick-Dy2Ajo8a.js";import"./DropdownField-CdixWEkP.js";import"./isEqual-BuHIXC9x.js";import"./withOsdkMetrics-xpnG9elc.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:a=>e.jsx("div",{style:{height:480},children:e.jsx(i,{...a})})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      }
    }, {
      locator: {
        type: "property",
        id: "classificationMarking"
      }
    }, {
      locator: {
        type: "property",
        id: "clearanceMarking"
      }
    }]
  },
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const nr=["MarkingColumns"];export{r as MarkingColumns,nr as __namedExportsOrder,or as default};
