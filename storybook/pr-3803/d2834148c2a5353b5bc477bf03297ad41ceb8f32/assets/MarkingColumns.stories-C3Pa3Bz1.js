import{f as p,j as e}from"./iframe-DnZQIvTT.js";import{O as i}from"./object-table-DVRIN3fz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BkW8a5rl.js";import"./Table-75SC6Pmm.js";import"./index-9hlHlyou.js";import"./Dialog-Cm-o7Xu1.js";import"./cross-C0DMMgZH.js";import"./svgIconContainer-yuQ64jxi.js";import"./useBaseUiId-BiQqFJiH.js";import"./InternalBackdrop-FmHXWr_y.js";import"./composite-B_yB_W3d.js";import"./index-Co5VwW1q.js";import"./index-CCOub406.js";import"./index-DSZ7IIaR.js";import"./useEventCallback-S3i3cwUJ.js";import"./SkeletonBar-DuBFX7MQ.js";import"./LoadingCell-Dz5yl_8o.js";import"./ColumnConfigDialog-CpFqQfx6.js";import"./DraggableList-CAHF7cXc.js";import"./search-DkG_mcgd.js";import"./Input-B-XWsA0h.js";import"./useControlled-lSDM3Zga.js";import"./isEqual-DxajWOoa.js";import"./isObject-DJ6ciwEQ.js";import"./Button-nmd_W8Kk.js";import"./ActionButton-Bpwm6fQH.js";import"./Checkbox-Dxxnmc4W.js";import"./useValueChanged-CkAf_GeI.js";import"./CollapsiblePanel-DI1vG4zM.js";import"./MultiColumnSortDialog-BOrrDHGi.js";import"./MenuTrigger-BYlkQB5e.js";import"./CompositeItem-5_WtziOg.js";import"./ToolbarRootContext-DeRNPR7X.js";import"./getDisabledMountTransitionStyles-PiiH0z4l.js";import"./getPseudoElementBounds-CAkRuCAN.js";import"./chevron-down-VeqrXGGR.js";import"./index-D6YwWFy-.js";import"./error-BLztiVY7.js";import"./BaseCbacBanner-DSJTxRm1.js";import"./makeExternalStore-CouSw7Ae.js";import"./Tooltip-kBgN66pM.js";import"./PopoverPopup-CwrAv6_7.js";import"./toNumber-Dom4meFx.js";import"./useOsdkClient-C6UovaqT.js";import"./tick-Cw1PsFg_.js";import"./DropdownField-DbDbsfOB.js";import"./withOsdkMetrics-fofNv3K2.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
