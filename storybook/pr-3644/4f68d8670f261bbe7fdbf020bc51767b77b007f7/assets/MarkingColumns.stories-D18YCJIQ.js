import{f as n,j as t}from"./iframe-DT8yWfXc.js";import{O as p}from"./object-table-DV1RT7t0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DUeAGb5J.js";import"./Table-DEzFQlyJ.js";import"./index-ChpbBA2X.js";import"./Dialog-CQ7n1jAR.js";import"./cross-CBZINCL7.js";import"./svgIconContainer-WkyZ9zSZ.js";import"./useBaseUiId-BdsHdBoH.js";import"./InternalBackdrop-BDOCCE_h.js";import"./composite-DgLXPZgj.js";import"./index-D9T0sRRr.js";import"./index-BaUfu4_D.js";import"./index-B_TizzsB.js";import"./useEventCallback-BI2jpk0-.js";import"./SkeletonBar-BwOabz1c.js";import"./LoadingCell-BS5f6veO.js";import"./ColumnConfigDialog-CjjAq3fL.js";import"./DraggableList-Co7w156Y.js";import"./search-RJIADZv2.js";import"./Input-BzHkswi2.js";import"./useControlled-DjxdMOL9.js";import"./Button-COFyQ3LX.js";import"./small-cross-Dv4GBRxD.js";import"./ActionButton-Dpd2bhAD.js";import"./Checkbox-bdOhEdWn.js";import"./useValueChanged-CgUdP3rG.js";import"./CollapsiblePanel-Ck3s7HVu.js";import"./MultiColumnSortDialog-DoxnWcmN.js";import"./MenuTrigger-t2JAQ24l.js";import"./CompositeItem-DjLRu0nS.js";import"./ToolbarRootContext-vNNp34aR.js";import"./getDisabledMountTransitionStyles-PDv0AwBI.js";import"./getPseudoElementBounds-CYh8elvV.js";import"./chevron-down-CzpMEHmJ.js";import"./index-rcqTQkJk.js";import"./error-BZm3dnxy.js";import"./BaseCbacBanner-DJrVepQJ.js";import"./makeExternalStore-B8VBuO1S.js";import"./Tooltip-DV2-MPHE.js";import"./PopoverPopup-Bo-1RNFZ.js";import"./toNumber-BmMueZu5.js";import"./useOsdkClient-UvK-KPKM.js";import"./tick-CiHmrgHj.js";import"./DropdownField-U-VslPD1.js";import"./withOsdkMetrics-DBvhOA2g.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const er=["MarkingColumns"];export{r as MarkingColumns,er as __namedExportsOrder,or as default};
