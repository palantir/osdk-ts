import{f as n,j as t}from"./iframe-DAPf5R79.js";import{O as p}from"./object-table-WskXs1WF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper--c_tbeOe.js";import"./Table-DVxY7GB4.js";import"./index-xCoa8aGB.js";import"./Dialog-DrBivqPd.js";import"./cross-ClhQ1rpF.js";import"./svgIconContainer-BYkztrbc.js";import"./useBaseUiId-fYZwvqln.js";import"./InternalBackdrop-Cmth5hU7.js";import"./composite-D8yTLZWE.js";import"./index-AFTh5nTl.js";import"./index-CnB3s9IP.js";import"./index-Cwpo88Lp.js";import"./useEventCallback-DFKCOTZo.js";import"./SkeletonBar-BvUxO5nN.js";import"./LoadingCell-BAzaNcIu.js";import"./ColumnConfigDialog-RaXqiurW.js";import"./DraggableList-NT5o6iWc.js";import"./search-BnbwIFnT.js";import"./Input-ZkOVrlYt.js";import"./useControlled-DargH3t1.js";import"./Button-BjZAy2ji.js";import"./small-cross-CRM3O6dq.js";import"./ActionButton-wae5oJ9L.js";import"./Checkbox-DXLTMzWh.js";import"./useValueChanged-Bu8gZnsc.js";import"./CollapsiblePanel-DtHQrNdi.js";import"./MultiColumnSortDialog-IgS-lBbN.js";import"./MenuTrigger-fhWNE3-Z.js";import"./CompositeItem-BYrTCyd7.js";import"./ToolbarRootContext-Clg4QEmw.js";import"./getDisabledMountTransitionStyles-D-7qePfd.js";import"./getPseudoElementBounds-Dviz8JhL.js";import"./chevron-down-I9ELS6qu.js";import"./index-Dby3YX0k.js";import"./error-B7xwVXIY.js";import"./BaseCbacBanner-Bqxqh0bK.js";import"./makeExternalStore-ZfRGx0zA.js";import"./Tooltip-BAcCSea-.js";import"./PopoverPopup-GxfTJ8-O.js";import"./toNumber-D-DAklUK.js";import"./useOsdkClient-BrEcD_LB.js";import"./tick-I48KMwzT.js";import"./DropdownField-DZ8rSC_a.js";import"./withOsdkMetrics-4QHDEE-T.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
