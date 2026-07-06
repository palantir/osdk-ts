import{f as n,j as t}from"./iframe-DA0LK0PO.js";import{O as p}from"./object-table-DpKWH6dL.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-NpZyLPMJ.js";import"./Table-B-EFWixq.js";import"./index-BWkayCb_.js";import"./Dialog-C449Y-pA.js";import"./cross-BFH9F46y.js";import"./svgIconContainer-qs29eHlL.js";import"./useBaseUiId-Dhz76j27.js";import"./InternalBackdrop-jc-aaMhm.js";import"./composite-DnxsldG3.js";import"./index-D7KSWWZf.js";import"./index-DmJjh6o3.js";import"./index-w2CRRmfp.js";import"./useEventCallback-DsrVitO6.js";import"./SkeletonBar-BQGEbZXR.js";import"./LoadingCell-DljzEKIc.js";import"./ColumnConfigDialog-CN0wghCv.js";import"./DraggableList-CGPQfJ80.js";import"./search-vMtqOwhS.js";import"./Input-CeBvJaDe.js";import"./useControlled-DdZqejsA.js";import"./Button-CQixxqzR.js";import"./small-cross-B5TJhqiy.js";import"./ActionButton-CTHYnyTp.js";import"./Checkbox-DQRwdntg.js";import"./useValueChanged-CQHgMJxd.js";import"./CollapsiblePanel-D0zi0MVx.js";import"./MultiColumnSortDialog-BWqrkucv.js";import"./MenuTrigger-Cb8zVB90.js";import"./CompositeItem-C1QzPodC.js";import"./ToolbarRootContext-CVq3j2Rc.js";import"./getDisabledMountTransitionStyles-EE2H3kdR.js";import"./getPseudoElementBounds-DOxqI0iv.js";import"./chevron-down-BrzTXwEl.js";import"./index-D51uC2Zm.js";import"./error-emH52XYg.js";import"./BaseCbacBanner-D6z-XaIj.js";import"./makeExternalStore-BAUY6IV_.js";import"./Tooltip-D3LBx6mC.js";import"./PopoverPopup-B_eeiv3A.js";import"./toNumber-B8fT7g-M.js";import"./useOsdkClient-C1dH34Z6.js";import"./tick-C2xuRqeF.js";import"./DropdownField-CeE_V-vL.js";import"./withOsdkMetrics-BWu_mDRQ.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
