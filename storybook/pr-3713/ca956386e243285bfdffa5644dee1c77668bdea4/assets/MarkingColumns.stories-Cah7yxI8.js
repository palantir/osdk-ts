import{f as p,j as e}from"./iframe-BxlJWUnI.js";import{O as i}from"./object-table-DovrVTfS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DEzBsDva.js";import"./Table-B8j68gnK.js";import"./index-C3Vz1CWs.js";import"./Dialog-IW2b50TT.js";import"./cross-Dj5VOQuq.js";import"./svgIconContainer-X5m_oOio.js";import"./useBaseUiId-BwdClmHp.js";import"./InternalBackdrop-UHrbaY-n.js";import"./composite-BNPxx5Qm.js";import"./index-ClDDuz4C.js";import"./index-Bo4V7efg.js";import"./index-x6tKg-ee.js";import"./useEventCallback-DvDpnprM.js";import"./SkeletonBar-DwQRtLTJ.js";import"./LoadingCell-nMGvLxc3.js";import"./ColumnConfigDialog-CZWkWF83.js";import"./DraggableList-kfWRm7tb.js";import"./search-BWhtNrWP.js";import"./Input-D2ToTu6w.js";import"./useControlled-Cq0jPoim.js";import"./isEqual-BXTN3JFt.js";import"./isObject-BcPyBUEP.js";import"./Button-DE5_yCTw.js";import"./ActionButton-Dg67gEk9.js";import"./Checkbox-DVQmi2eH.js";import"./useValueChanged-sAFDBUCs.js";import"./CollapsiblePanel-DSJou510.js";import"./MultiColumnSortDialog-VHC74LMA.js";import"./MenuTrigger-BIT5aDGE.js";import"./CompositeItem-CtYq2wv2.js";import"./ToolbarRootContext-eKkO_S8s.js";import"./getDisabledMountTransitionStyles-CerGflJa.js";import"./getPseudoElementBounds-AB_g5Q3B.js";import"./chevron-down-Demu3Liu.js";import"./index-V8230MnH.js";import"./error-BszREstB.js";import"./BaseCbacBanner-BNtqT_RO.js";import"./makeExternalStore-rcO4r3Tb.js";import"./Tooltip-Dw7-pLxH.js";import"./PopoverPopup-ctF-PT3-.js";import"./toNumber-C7wWNeym.js";import"./useOsdkClient-BI6cLM_f.js";import"./tick-C00wAXcY.js";import"./DropdownField-BIZ2ijW3.js";import"./withOsdkMetrics-BgQUIMpa.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
