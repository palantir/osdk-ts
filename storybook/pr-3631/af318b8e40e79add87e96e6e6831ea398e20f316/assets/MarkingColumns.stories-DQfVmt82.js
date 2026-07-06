import{f as n,j as t}from"./iframe-BsVCqvLq.js";import{O as p}from"./object-table-SpHS45Y3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C1nWkUX6.js";import"./Table-CnzdLn-T.js";import"./index-BjbM9Rza.js";import"./Dialog-BjozPySa.js";import"./cross-DqGk6Inb.js";import"./svgIconContainer-Cwh5koZd.js";import"./useBaseUiId-B9G5TU1Q.js";import"./InternalBackdrop-C7Td_1Bf.js";import"./composite-DWTuY8D6.js";import"./index-B252it2I.js";import"./index-mACLY2Aq.js";import"./index-JO1Tl2hq.js";import"./useEventCallback-AV6cg69e.js";import"./SkeletonBar-DD5mN4OW.js";import"./LoadingCell-B3sgxYX8.js";import"./ColumnConfigDialog-CE9036k6.js";import"./DraggableList-BsThWR9G.js";import"./search-D7o2UnQe.js";import"./Input-CqC0Q6KM.js";import"./useControlled-DWywZDs6.js";import"./Button-CRH3v-NA.js";import"./small-cross-CRS83Vz2.js";import"./ActionButton-DyNHtEhe.js";import"./Checkbox-dXz44ayX.js";import"./useValueChanged-BwNMgvj3.js";import"./CollapsiblePanel-0NuWO4j7.js";import"./MultiColumnSortDialog-DmdfUCdH.js";import"./MenuTrigger-D3rHgfMG.js";import"./CompositeItem-DbI3tt0U.js";import"./ToolbarRootContext-C5CZq3bt.js";import"./getDisabledMountTransitionStyles-DPDCvk0Z.js";import"./getPseudoElementBounds-BE39VsdS.js";import"./chevron-down-Cdxeetkh.js";import"./index-4hkLauYd.js";import"./error-JcLHrbb4.js";import"./BaseCbacBanner-C-PQUi4y.js";import"./makeExternalStore-B8GBWsQY.js";import"./Tooltip-Dt2AXYSu.js";import"./PopoverPopup-8hrWj6Qf.js";import"./toNumber-B77WbUu5.js";import"./useOsdkClient-DzFZndn2.js";import"./tick-D4b2hEyB.js";import"./DropdownField-Shu2MmG5.js";import"./withOsdkMetrics-6M5vHXdx.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
