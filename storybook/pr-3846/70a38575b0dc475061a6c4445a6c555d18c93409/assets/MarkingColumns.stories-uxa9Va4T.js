import{f as p,j as e}from"./iframe-gVAmUTQg.js";import{O as i}from"./object-table-D9jtfPUd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-3Sf5Feu3.js";import"./Table-Bn8VFvlv.js";import"./index-BeeoVX-q.js";import"./Dialog-BPW7Fnqp.js";import"./cross-jlTg3KlE.js";import"./svgIconContainer-B4Z8Cc9p.js";import"./useBaseUiId-CHWfe0kM.js";import"./InternalBackdrop-MQIEsE87.js";import"./composite-DuUe5pNY.js";import"./index-J26Dm_pE.js";import"./index-G-6YzhfM.js";import"./index-ZTHZOD5S.js";import"./useEventCallback-BGxuyWEQ.js";import"./SkeletonBar-Dr7WQbwR.js";import"./LoadingCell-DXD9SzMl.js";import"./ColumnConfigDialog-BsHyb-5Z.js";import"./DraggableList-CAsDI2FA.js";import"./search-BaBEiFT5.js";import"./Input-BkbQvjPR.js";import"./useControlled-CdRGPDPf.js";import"./isEqual-UcadrFyw.js";import"./isObject-BiW_nSk5.js";import"./Button-Dr-T1AFV.js";import"./ActionButton-CqliKloO.js";import"./Checkbox-D2PC0jxt.js";import"./useValueChanged-ByAqqMPO.js";import"./CollapsiblePanel-wCqvJGO2.js";import"./MultiColumnSortDialog-BN0XCeIQ.js";import"./MenuTrigger-CKbR4gwr.js";import"./CompositeItem-ieCqGqC2.js";import"./ToolbarRootContext-ByYznoe0.js";import"./getDisabledMountTransitionStyles-BQxyBjfI.js";import"./getPseudoElementBounds-Bv56xCKO.js";import"./chevron-down-C1g0o6pf.js";import"./index-CR2aVeKh.js";import"./error-tp1IHQ0n.js";import"./BaseCbacBanner-ATQ7faMG.js";import"./makeExternalStore-DdyFijLM.js";import"./Tooltip-BPUhfpna.js";import"./PopoverPopup-CaEv5Luc.js";import"./toNumber-kAKe2Owq.js";import"./useOsdkClient-CD_W310F.js";import"./tick-5ftwsX0l.js";import"./DropdownField-DzuaA_EY.js";import"./withOsdkMetrics-F5cMDIFA.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
