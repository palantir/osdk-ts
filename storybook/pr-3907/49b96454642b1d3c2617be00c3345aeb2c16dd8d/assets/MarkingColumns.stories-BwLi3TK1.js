import{f as p,j as e}from"./iframe-DYBY68Q5.js";import{O as i}from"./object-table-7jZkx5MQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-6jdikgud.js";import"./Table-BI6QQzme.js";import"./index-DYr8tZfC.js";import"./Dialog-DdQok29H.js";import"./cross-D1pY89Tf.js";import"./svgIconContainer-DVOm9YM-.js";import"./useBaseUiId-BCwirq_0.js";import"./InternalBackdrop-C83NCaF8.js";import"./composite-DPIoPlux.js";import"./index-DC69q5Jt.js";import"./index-wVZvTCZs.js";import"./index-Bg_slHsw.js";import"./useEventCallback-DoyLzMRU.js";import"./SkeletonBar-POUHWA40.js";import"./LoadingCell-CwIhxMor.js";import"./ColumnConfigDialog-BmsJ16bH.js";import"./DraggableList-BB4LGUdH.js";import"./search-BT_TSpdS.js";import"./Input-CeNaPmq7.js";import"./useControlled-DGyihqNn.js";import"./Button-Ckf62jzo.js";import"./small-cross-C0orqSu_.js";import"./ActionButton-4sbCgVC0.js";import"./Checkbox-D_HOJ0vt.js";import"./useValueChanged-BLTi5hDu.js";import"./CollapsiblePanel-BYQqT4Yv.js";import"./MultiColumnSortDialog-B55nseyW.js";import"./MenuTrigger-BMalK_zu.js";import"./CompositeItem-C1KECpIa.js";import"./ToolbarRootContext-sggHk5XS.js";import"./getDisabledMountTransitionStyles-DPEQynz2.js";import"./getPseudoElementBounds-DWvo2zhM.js";import"./chevron-down-DsJHih2n.js";import"./index-Cn62hcUq.js";import"./error-CiemvQ24.js";import"./BaseCbacBanner-DbKnsRoL.js";import"./makeExternalStore-B1pouQLK.js";import"./Tooltip-Cv5sHp_6.js";import"./PopoverPopup-B9mbop5m.js";import"./debounce-DjfstlXR.js";import"./useOsdkClient-BVZQ9HkC.js";import"./tick-LKuIFCdg.js";import"./DropdownField-BcFd03Vz.js";import"./isEqual-MKOeJWxb.js";import"./withOsdkMetrics-BwDH-iYP.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
