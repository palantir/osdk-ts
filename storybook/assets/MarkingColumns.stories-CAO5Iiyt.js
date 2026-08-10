import{f as p,j as e}from"./iframe-DOeAYoRk.js";import{O as i}from"./object-table-BMbidIlQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BwDvF8K8.js";import"./index-C8enkHHH.js";import"./Dialog-DT-6RsPK.js";import"./cross-CTQfiCoc.js";import"./svgIconContainer-4JA-55AY.js";import"./useBaseUiId-CqKYfNUG.js";import"./InternalBackdrop-BLrtRR73.js";import"./composite-CxfEfgAE.js";import"./index-jM1sW0ik.js";import"./index-C3Zqf3YM.js";import"./index-Ca1wRqXA.js";import"./useEventCallback-BTk3Z6Qr.js";import"./SkeletonBar-Dmjzy1lt.js";import"./LoadingCell-DYH1qbvq.js";import"./ColumnConfigDialog-B6g0duZI.js";import"./DraggableList-DrVMbYk9.js";import"./search-SpwpHeSC.js";import"./Input-oDyylqSn.js";import"./useControlled-4ALZ6JWG.js";import"./isEqual-_B9NyKT8.js";import"./isObject-BGTx8vaf.js";import"./Button-Cdun-kQv.js";import"./ActionButton-DbCm8V1N.js";import"./Checkbox-BOHdBk7N.js";import"./useValueChanged-CbWVEL48.js";import"./CollapsiblePanel-DPDp83X3.js";import"./MultiColumnSortDialog-CIChi61X.js";import"./MenuTrigger-BhWhB7VG.js";import"./CompositeItem-DpuZl7_I.js";import"./ToolbarRootContext-DZ03LuRT.js";import"./getDisabledMountTransitionStyles-DBl444QP.js";import"./getPseudoElementBounds-Bo7TLJ0Y.js";import"./chevron-down-CKxHpqTt.js";import"./index-bOvw0pIt.js";import"./error-DvFfN3ld.js";import"./BaseCbacBanner-qyS-LwHQ.js";import"./makeExternalStore-DjKzDLfr.js";import"./Tooltip-BoEvhs6Q.js";import"./PopoverPopup-C5owdlCI.js";import"./toNumber-Cs6XeUud.js";import"./useOsdkClient-Bz-qXpDK.js";import"./tick-afTKFpG8.js";import"./DropdownField-BwGsUJcf.js";import"./withOsdkMetrics-CP1ydFVJ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
