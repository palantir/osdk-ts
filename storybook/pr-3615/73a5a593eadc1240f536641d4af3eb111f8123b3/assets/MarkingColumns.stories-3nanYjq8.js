import{f as n,j as t}from"./iframe-CWO1fvBo.js";import{O as p}from"./object-table-nMthrIB0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CF_QmvPv.js";import"./Table-C3eES0ov.js";import"./index-BPBU698V.js";import"./Dialog-D0Kb8YHr.js";import"./cross-C53D70xz.js";import"./svgIconContainer-BuDMXWHZ.js";import"./useBaseUiId-DM7x9ZDC.js";import"./InternalBackdrop-yXw9TMxY.js";import"./composite-yBh-VmZz.js";import"./index-BSFgsXl-.js";import"./index-DNZZq66F.js";import"./index-ClMsQ9HA.js";import"./useEventCallback-CLvoly_i.js";import"./SkeletonBar-DySVxWL-.js";import"./LoadingCell-BtYJoqFc.js";import"./ColumnConfigDialog-KUgjW48d.js";import"./DraggableList-CeVnZo23.js";import"./search-CZ_y3M4b.js";import"./Input-D7ZPj5kI.js";import"./useControlled-BZAnElmC.js";import"./Button-BunOl2O4.js";import"./small-cross-BzzVn_ep.js";import"./ActionButton-7aSkANLY.js";import"./Checkbox-D1p96baV.js";import"./minus-CS4ruBfE.js";import"./tick-Djwm-j5q.js";import"./useValueChanged-Uh0h5LXI.js";import"./caret-down-CfEtZvnb.js";import"./CollapsiblePanel-DiVW5mqy.js";import"./MultiColumnSortDialog-CzW6UWJl.js";import"./MenuTrigger-DcUYb6Xb.js";import"./CompositeItem-D8DaB9iF.js";import"./ToolbarRootContext-C4FQfOjX.js";import"./getDisabledMountTransitionStyles-DBwAuNWL.js";import"./getPseudoElementBounds-CuY8cYnw.js";import"./chevron-down-DAr5FmU0.js";import"./index-CBlgFxGV.js";import"./error-ConVINU8.js";import"./BaseCbacBanner-BMEJqiW3.js";import"./makeExternalStore-Cmkt9Gtj.js";import"./Tooltip-_EilQ81I.js";import"./PopoverPopup-DbqRKS1Y.js";import"./toNumber-BFDFxisR.js";import"./useOsdkClient-DuZS-6jc.js";import"./DropdownField-C5DY7VSc.js";import"./withOsdkMetrics-C7u0s7n-.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ir as default};
