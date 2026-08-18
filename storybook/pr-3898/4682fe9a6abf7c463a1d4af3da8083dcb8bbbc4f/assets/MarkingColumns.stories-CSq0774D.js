import{f as p,j as e}from"./iframe-CaT_SB1N.js";import{O as i}from"./object-table-DxWFz5_z.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BPrtRX9r.js";import"./Table-BPF3DIoq.js";import"./index-Dd6LgUAX.js";import"./Dialog-588UW6Qz.js";import"./cross-BWOJYHQ2.js";import"./svgIconContainer-Bz8Ma6vE.js";import"./useBaseUiId-CvmHPMet.js";import"./InternalBackdrop-DaZylwN7.js";import"./composite-5peG0ZaO.js";import"./index-Sztf62uh.js";import"./index-CGIYb_6P.js";import"./index-ynByCEBN.js";import"./useEventCallback-CVPMd79M.js";import"./SkeletonBar-CxMrTn-U.js";import"./LoadingCell-D7zj3eW1.js";import"./ColumnConfigDialog-Bg6SY_Ld.js";import"./DraggableList-uveBSP7V.js";import"./search-CPBZ1v0m.js";import"./Input-B2ntkDdJ.js";import"./useControlled-Fy1hnDi2.js";import"./isEqual-BrC4uVGU.js";import"./isObject-KEZJ5QTR.js";import"./Button-BkKNJWx6.js";import"./ActionButton-Bp-l3MqX.js";import"./Checkbox-BwZLW8Tq.js";import"./useValueChanged-BUQcfQU6.js";import"./CollapsiblePanel-BSFye_sE.js";import"./MultiColumnSortDialog-C7y3pk0H.js";import"./MenuTrigger-BSmne0Gh.js";import"./CompositeItem-C1Yswmxi.js";import"./ToolbarRootContext-BobQvyh-.js";import"./getDisabledMountTransitionStyles-CHrpwNSH.js";import"./getPseudoElementBounds-Buoi7Tjq.js";import"./chevron-down-CJo4dMXj.js";import"./index-Clp_coQb.js";import"./error-Ca_B-WSi.js";import"./BaseCbacBanner-CyE-IyFA.js";import"./makeExternalStore-CruiM0F1.js";import"./Tooltip-BsBvfL1j.js";import"./PopoverPopup-DBi1WA6M.js";import"./toNumber-HvOjUaHa.js";import"./useOsdkClient-C37wa3ql.js";import"./tick-Bq27YaX3.js";import"./DropdownField-Do15YAuW.js";import"./withOsdkMetrics-3xHWN_Ge.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
