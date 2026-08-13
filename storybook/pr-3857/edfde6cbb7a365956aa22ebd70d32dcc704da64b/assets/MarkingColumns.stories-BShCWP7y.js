import{f as p,j as e}from"./iframe-Ct8R5TQf.js";import{O as i}from"./object-table-xRIBPBGx.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CmnAPtah.js";import"./Table-CHMoffmR.js";import"./index-BRgsegbN.js";import"./Dialog-sHJ-Lwpx.js";import"./cross-D1xZE6uN.js";import"./svgIconContainer-Duqk0EvN.js";import"./useBaseUiId-DoNgXT9k.js";import"./InternalBackdrop-CmAxUY43.js";import"./composite-Be4Z-niC.js";import"./index-BtTgSEhG.js";import"./index-4doTHW3z.js";import"./index-C1yjTJBR.js";import"./useEventCallback-BPwGWkYm.js";import"./SkeletonBar-D5z58f16.js";import"./LoadingCell-Dd9Y9O5K.js";import"./ColumnConfigDialog-VwsIjpmc.js";import"./DraggableList-BIPdkCGd.js";import"./search-CxT81SBo.js";import"./Input-887jmIgI.js";import"./useControlled-CKc1aHxj.js";import"./isEqual-B_1WvBBP.js";import"./isObject-DsLUKuNx.js";import"./Button-DAFBE6sk.js";import"./ActionButton-Dy803DLk.js";import"./Checkbox-C8Bm-09C.js";import"./useValueChanged-Dt5s7uy9.js";import"./CollapsiblePanel-CQSwWtqU.js";import"./MultiColumnSortDialog-C_BPKUJB.js";import"./MenuTrigger-B77a9xoL.js";import"./CompositeItem-sASbL7Ao.js";import"./ToolbarRootContext-BFoDjrVA.js";import"./getDisabledMountTransitionStyles-c53JuB2C.js";import"./getPseudoElementBounds-B19hTPqu.js";import"./chevron-down-hHedeX78.js";import"./index-B-_jawLE.js";import"./error-BzhSLAKe.js";import"./BaseCbacBanner-CZNuGQ2q.js";import"./makeExternalStore-D6qxd4Fu.js";import"./Tooltip-CEgxcaNi.js";import"./PopoverPopup-CD16ekSW.js";import"./toNumber-VtCCuLiZ.js";import"./useOsdkClient-r4aP_XEn.js";import"./tick-DY14VF5-.js";import"./DropdownField-CmEpGFBE.js";import"./withOsdkMetrics-DgiHV6Et.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
