import{f as p,j as e}from"./iframe-BgoKo-i2.js";import{O as i}from"./object-table-CI8YfS4h.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DIrScT_n.js";import"./Table-diMd5iNY.js";import"./index-3V6CRxOT.js";import"./Dialog-Ltm4-WQh.js";import"./cross-pMkSGJpw.js";import"./svgIconContainer-Co1wj9K_.js";import"./useBaseUiId-DS7J75OO.js";import"./InternalBackdrop-kJ7I3CoG.js";import"./composite-CMVBbtsk.js";import"./index-Bdsk4x9T.js";import"./index-B65kqQu_.js";import"./index-BmEzYu9v.js";import"./useEventCallback-D_OYMyA3.js";import"./SkeletonBar-TBBsHigX.js";import"./LoadingCell-DJPy-_Il.js";import"./ColumnConfigDialog-W7fHJ_NL.js";import"./DraggableList-DUOjZipc.js";import"./search-C9CyrmBD.js";import"./Input-CjhSYZMH.js";import"./useControlled-DShEq97X.js";import"./isEqual-C90e21Bj.js";import"./isObject-swjZWcT8.js";import"./Button-CreK4JWQ.js";import"./ActionButton-D_CIcEZj.js";import"./Checkbox-BLUN__dJ.js";import"./useValueChanged-Dkb-WKVE.js";import"./CollapsiblePanel-CDbG0DY0.js";import"./MultiColumnSortDialog-DBNQOGqf.js";import"./MenuTrigger-Mw5Zxb32.js";import"./CompositeItem-DXRUm4lR.js";import"./ToolbarRootContext-CNkC_ExZ.js";import"./getDisabledMountTransitionStyles-CPZmqG2A.js";import"./getPseudoElementBounds-Cpf5jJJ0.js";import"./chevron-down-BW1Jk0Gy.js";import"./index-CPVhZyIF.js";import"./error-ChPfLHEW.js";import"./BaseCbacBanner-BPiM2zMm.js";import"./makeExternalStore-BwEONY5Y.js";import"./Tooltip-BFkoO91K.js";import"./PopoverPopup-CwVzquJ3.js";import"./toNumber-BDMOOKGE.js";import"./useOsdkClient-BVkWLcTH.js";import"./tick-T4PfDILy.js";import"./DropdownField-CUdK6Ljc.js";import"./withOsdkMetrics-DwfUgwww.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
