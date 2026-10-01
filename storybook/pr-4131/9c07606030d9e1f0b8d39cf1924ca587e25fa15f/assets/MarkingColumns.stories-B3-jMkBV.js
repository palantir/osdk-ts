import{f as p,j as e}from"./iframe-DxxbQvQS.js";import{O as i}from"./object-table-CJ9J0DMr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BmW5a970.js";import"./Table-CnaCRFYx.js";import"./index-Cu-WR_G5.js";import"./Dialog-BsMxDY0C.js";import"./cross-D--1C_uR.js";import"./svgIconContainer-PZP2rkyO.js";import"./useBaseUiId-Brl8T8Kf.js";import"./InternalBackdrop-nw-0n2j_.js";import"./composite-C5YJt7dM.js";import"./index-mzAwx4l9.js";import"./index-CkYBlAD9.js";import"./index-vkezJOJG.js";import"./useEventCallback-CAdWC4ED.js";import"./SkeletonBar-BeU71Ayo.js";import"./LoadingCell-Bu2vJSgu.js";import"./ColumnConfigDialog-CSsvZjAE.js";import"./DraggableList-OtqLtn_q.js";import"./search-rJtEr32Y.js";import"./Input-CVhM1jds.js";import"./useControlled-CL6vvYza.js";import"./Button-BnqDmIMF.js";import"./small-cross-Dpw_vhgf.js";import"./ActionButton-Db9MAiVt.js";import"./Checkbox-BtXMD4Jt.js";import"./useValueChanged-DeuKFFlX.js";import"./CollapsiblePanel-CwmPk1HL.js";import"./MultiColumnSortDialog-BIZUu89Z.js";import"./MenuTrigger-BB9DnI0R.js";import"./CompositeItem-beHVPrKw.js";import"./ToolbarRootContext-9fMJDea1.js";import"./getDisabledMountTransitionStyles-CdcAqYKt.js";import"./getPseudoElementBounds-D5nG0WVt.js";import"./chevron-down-CCZd9VTh.js";import"./index-CI5AqopY.js";import"./error-ClKWsTpb.js";import"./BaseCbacBanner-DdIcsJYY.js";import"./makeExternalStore-SAYXMC44.js";import"./Tooltip-CQLTRANm.js";import"./PopoverPopup-B4xa-esw.js";import"./debounce-DCqgfrAu.js";import"./useOsdkClient-_f8xX1vc.js";import"./tick-DRGERfep.js";import"./DropdownField-DzabicEs.js";import"./isEqual-DjhR2rdN.js";import"./withOsdkMetrics-DJHuuWR4.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
