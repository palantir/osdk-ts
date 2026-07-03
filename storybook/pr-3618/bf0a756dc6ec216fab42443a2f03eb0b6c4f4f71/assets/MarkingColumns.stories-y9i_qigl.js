import{f as n,j as t}from"./iframe-BxdZkH6A.js";import{O as p}from"./object-table-AFRXuy8t.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-kyeI2UBP.js";import"./Table-B-3ZM6Hx.js";import"./index-BpFtrvBx.js";import"./Dialog-CntuE7dE.js";import"./cross-C7Vfl4hr.js";import"./svgIconContainer-DW8Dw9Bg.js";import"./useBaseUiId-BIFZVZoh.js";import"./InternalBackdrop-CMzNR6H8.js";import"./composite-BUhRqbHb.js";import"./index-hl-eFwnB.js";import"./index-CFu72cYJ.js";import"./index-SGGEt0vQ.js";import"./useEventCallback-BV6qBXQ-.js";import"./SkeletonBar-BIv7YF9T.js";import"./LoadingCell-Cjfk_8tS.js";import"./ColumnConfigDialog-DS4VBsYl.js";import"./DraggableList-W9nfHITm.js";import"./search-rKvDiiHV.js";import"./Input-CJnPWafs.js";import"./useControlled-C2uta6Np.js";import"./Button-DJoHiVcG.js";import"./small-cross-BiSG7fc8.js";import"./ActionButton-1E-wqB8r.js";import"./Checkbox-a71iIJUy.js";import"./useValueChanged-WcBnDaOd.js";import"./CollapsiblePanel-CPUx_A3a.js";import"./MultiColumnSortDialog-BKQOdeOH.js";import"./MenuTrigger-mNVbLufI.js";import"./CompositeItem-DwH973Jd.js";import"./ToolbarRootContext-CiIuJ2M6.js";import"./getDisabledMountTransitionStyles-uEAaVx1l.js";import"./getPseudoElementBounds-BgL0riCu.js";import"./chevron-down-lW7PZNMT.js";import"./index-CSJ77PwE.js";import"./error-DJDCeW5s.js";import"./BaseCbacBanner-CVb_V5A8.js";import"./makeExternalStore-B2S42JoF.js";import"./Tooltip-CgFL1FXY.js";import"./PopoverPopup-DI4WJJM-.js";import"./toNumber-B9nk268A.js";import"./useOsdkClient-B5jEcJnt.js";import"./tick-DxrYeZW0.js";import"./DropdownField-DIEFvzeV.js";import"./withOsdkMetrics-BVCViJi2.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
