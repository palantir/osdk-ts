import{f as n,j as t}from"./iframe-Dbn3udIq.js";import{O as p}from"./object-table-KuZ9ZNwX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B08NS0vP.js";import"./Table-unDfru0A.js";import"./index-V8u8oS9z.js";import"./Dialog-JCadx2F1.js";import"./cross-BKogVy2q.js";import"./svgIconContainer-D1SKNX1h.js";import"./useBaseUiId-BA2_gm4V.js";import"./InternalBackdrop-B7UDDOQ5.js";import"./composite-ZGPanSe0.js";import"./index-Cnpq6BkA.js";import"./index-CihIYmhv.js";import"./index-BBh289r0.js";import"./useEventCallback-CXu8eU4c.js";import"./SkeletonBar-31As_fw1.js";import"./LoadingCell-C7t38VOP.js";import"./ColumnConfigDialog-DQ5Cww7Q.js";import"./DraggableList-BgQO8pif.js";import"./search-BIRbNFR3.js";import"./Input-D5HVKjUk.js";import"./useControlled-Dgnrrptl.js";import"./Button-7v_wedFK.js";import"./small-cross-vvRtkJ0X.js";import"./ActionButton-BVkusK0r.js";import"./Checkbox-ADl7utEz.js";import"./useValueChanged-go9Nm7J1.js";import"./CollapsiblePanel-BNfV-1BA.js";import"./MultiColumnSortDialog-DIsZU3JK.js";import"./MenuTrigger-qc-wgbi1.js";import"./CompositeItem-TVEgXngK.js";import"./ToolbarRootContext-KkBA9jha.js";import"./getDisabledMountTransitionStyles-Dm0SzhJ0.js";import"./getPseudoElementBounds-BHiRUFoB.js";import"./chevron-down-Coetg7mV.js";import"./index-oizMRn8D.js";import"./error-CuW4JffS.js";import"./BaseCbacBanner-D0RAmEKH.js";import"./makeExternalStore-BiC33qK3.js";import"./Tooltip-CGnwMRUX.js";import"./PopoverPopup-xrvZWNMe.js";import"./toNumber-DuKCZNeC.js";import"./useOsdkClient-CAIObE7v.js";import"./tick-Cr1nMnnH.js";import"./DropdownField-9FiHHZAx.js";import"./withOsdkMetrics-JBXVlLu-.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
