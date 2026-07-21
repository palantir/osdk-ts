import{f as n,j as t}from"./iframe-BRf1YbHX.js";import{O as p}from"./object-table-CW9aBU__.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DGgabIEW.js";import"./Table-9lpLkBuC.js";import"./index-BW32cp61.js";import"./Dialog-C4LMRQWg.js";import"./cross-DH-1DeB9.js";import"./svgIconContainer-BQSmYZFS.js";import"./useBaseUiId-CvubAMpM.js";import"./InternalBackdrop-CPu3n-uq.js";import"./composite-CdMSFvSg.js";import"./index-CxMucO3r.js";import"./index-DrmZfwHC.js";import"./index-DBWDkx-q.js";import"./useEventCallback-CMpOSskY.js";import"./SkeletonBar-sVTabU8i.js";import"./LoadingCell-G5hQWXCo.js";import"./ColumnConfigDialog-CsRpBJS6.js";import"./DraggableList-DuFHqNQH.js";import"./search-B6TANuqO.js";import"./Input-DmJIp4x4.js";import"./useControlled-tOUMdbqt.js";import"./Button-xV56_hno.js";import"./small-cross-XhtefH-X.js";import"./ActionButton-dAQHYMHg.js";import"./Checkbox-BPQO0ulN.js";import"./useValueChanged-n93UQcZR.js";import"./CollapsiblePanel-D1xIdiAj.js";import"./MultiColumnSortDialog-XW_VryF1.js";import"./MenuTrigger-C1Csi1-9.js";import"./CompositeItem-C-XZ9AMd.js";import"./ToolbarRootContext-Btka9goz.js";import"./getDisabledMountTransitionStyles-CPoY1i5S.js";import"./getPseudoElementBounds-CpT_Izid.js";import"./chevron-down-CCNuSU_Y.js";import"./index-Cl10T_A-.js";import"./error-DysCelmF.js";import"./BaseCbacBanner-B70b7eg-.js";import"./makeExternalStore-BSabzYec.js";import"./Tooltip-CbogbsYg.js";import"./PopoverPopup-4RHZNSF5.js";import"./toNumber-CPPczm67.js";import"./useOsdkClient-B8oX4tQv.js";import"./tick-CkhWtZSp.js";import"./DropdownField-OcY021Ll.js";import"./withOsdkMetrics-CQFtgL6W.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
