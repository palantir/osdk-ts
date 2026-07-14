import{f as n,j as t}from"./iframe-QZNV0zY0.js";import{O as p}from"./object-table-DfDRF29E.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-KM8tXi5L.js";import"./Table-CuqG87F8.js";import"./index-DBM_aGHQ.js";import"./Dialog-d4EElO47.js";import"./cross-J9xkeTdd.js";import"./svgIconContainer-B8Ql_wUB.js";import"./useBaseUiId-DGf8qofv.js";import"./InternalBackdrop-DcvOIGzY.js";import"./composite-CmJ23A7k.js";import"./index-Dt775aIT.js";import"./index-Bq588UAZ.js";import"./index-BjmxLv4V.js";import"./useEventCallback-Cev7r3vI.js";import"./SkeletonBar-CGrxci-Q.js";import"./LoadingCell-BHvJUCIN.js";import"./ColumnConfigDialog-CPLwbyGn.js";import"./DraggableList-By3_wuW5.js";import"./search-BB3pPNkM.js";import"./Input-2byi3xAm.js";import"./useControlled-DihNxNbE.js";import"./Button-9l069q3l.js";import"./small-cross-BTwx2TJa.js";import"./ActionButton-BwyStZIU.js";import"./Checkbox-Bag4UDN6.js";import"./useValueChanged-DXYYvTKc.js";import"./CollapsiblePanel-C3j7qtPg.js";import"./MultiColumnSortDialog-Cei4GyF7.js";import"./MenuTrigger-AP08xSa7.js";import"./CompositeItem-P4J3iqkU.js";import"./ToolbarRootContext-DaCpu9EQ.js";import"./getDisabledMountTransitionStyles-ClOzGYc0.js";import"./getPseudoElementBounds-drKd3G7p.js";import"./chevron-down-BX_1bk7N.js";import"./index-Crk9oV48.js";import"./error-B6j2nIx9.js";import"./BaseCbacBanner-DfyoyB3p.js";import"./makeExternalStore-CtcgWyO0.js";import"./Tooltip-D4UQif__.js";import"./PopoverPopup-DpUWgTJc.js";import"./toNumber-CvYT9yDn.js";import"./useOsdkClient-asYkcj2R.js";import"./tick-BRAuHq0H.js";import"./DropdownField-CKTZX7E_.js";import"./withOsdkMetrics-CyFyHeyy.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
