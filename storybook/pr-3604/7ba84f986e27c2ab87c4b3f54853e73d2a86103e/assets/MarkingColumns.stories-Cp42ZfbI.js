import{f as n,j as t}from"./iframe-1Azl5uc0.js";import{O as p}from"./object-table-BDAVHYgZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CgDZefhM.js";import"./Table-Bb_L8gQ7.js";import"./index-BJNL37mn.js";import"./Dialog-e9k1xxl-.js";import"./cross-BJjus-w4.js";import"./svgIconContainer-CVWrqxWd.js";import"./useBaseUiId-CXR80G2d.js";import"./InternalBackdrop-Bp4CBLLn.js";import"./composite-C79FaEV-.js";import"./index-DTrnsxUK.js";import"./index-BeAfX0yj.js";import"./index-BecbYNZc.js";import"./useEventCallback-B0PxsPmY.js";import"./SkeletonBar-CFr1wBS7.js";import"./LoadingCell-DqwXAUfT.js";import"./ColumnConfigDialog-Ctp2CswE.js";import"./DraggableList-CBVOHVHe.js";import"./search-CIjMzcGS.js";import"./Input-50n4J--L.js";import"./useControlled-DCU-8Ica.js";import"./Button-DmGRhsTY.js";import"./small-cross-CI5UnZJe.js";import"./ActionButton-UK-mLusE.js";import"./Checkbox-BxeXGnXe.js";import"./minus-CYUlzDsX.js";import"./tick-9Ts3kpfm.js";import"./useValueChanged-BWqNLOD2.js";import"./caret-down-CxK8eJ_i.js";import"./CollapsiblePanel-BKtPcjYL.js";import"./MultiColumnSortDialog-D_3ti97Y.js";import"./MenuTrigger-DsLl-GY6.js";import"./CompositeItem-MOXOHzqr.js";import"./ToolbarRootContext-ARc5ZBdC.js";import"./getDisabledMountTransitionStyles-BrvcOjjL.js";import"./getPseudoElementBounds-BbM7SUp6.js";import"./chevron-down-G-yANiQH.js";import"./index-CdsRJap3.js";import"./error-B6nnzO4z.js";import"./BaseCbacBanner-C4qTiQE5.js";import"./makeExternalStore-xV4SCnQr.js";import"./Tooltip-CMon2suc.js";import"./PopoverPopup-Cg1PAty7.js";import"./toNumber-BbicAusm.js";import"./useOsdkClient-D7yV-LBJ.js";import"./DropdownField-C1UqmbPt.js";import"./withOsdkMetrics-BKBUkPyk.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
