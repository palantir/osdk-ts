import{f as n,j as t}from"./iframe-cDHMUf1F.js";import{O as p}from"./object-table-B5mxzgrZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bsvc15g1.js";import"./Table-Ddedv13S.js";import"./index-BB1SOIbb.js";import"./Dialog-J2uCUAP3.js";import"./cross-P0qExKXN.js";import"./svgIconContainer-MVxB4RAP.js";import"./useBaseUiId-DCzNJ-nW.js";import"./InternalBackdrop-DdmCvcjf.js";import"./composite-B2I1dKs8.js";import"./index-BmJ1z2Uc.js";import"./index-1GJkM2hk.js";import"./index-1i2dO12u.js";import"./useEventCallback-BnENSjxF.js";import"./SkeletonBar-Bj-oK86z.js";import"./LoadingCell-ZObjGEod.js";import"./ColumnConfigDialog-e5aaBF1d.js";import"./DraggableList-BLWufxNt.js";import"./search-CaZjzeYa.js";import"./Input-B7l3I1I-.js";import"./useControlled-BlNT2JSa.js";import"./Button-DnNWadzY.js";import"./small-cross-B9qv_oQx.js";import"./ActionButton-DFRKnm8T.js";import"./Checkbox-KmoYKFNN.js";import"./useValueChanged-CQS5tzkt.js";import"./CollapsiblePanel-DYWtf759.js";import"./MultiColumnSortDialog-DQe9UDHn.js";import"./MenuTrigger-wQTEkdye.js";import"./CompositeItem-DkupiegZ.js";import"./ToolbarRootContext-sWq0SK_m.js";import"./getDisabledMountTransitionStyles-DwHqnNkO.js";import"./getPseudoElementBounds-DCLynscD.js";import"./chevron-down-C5qE43wO.js";import"./index-BBsVv4oR.js";import"./error-DUNRbXEF.js";import"./BaseCbacBanner-DWJqRA1F.js";import"./makeExternalStore-Bl0HAa3G.js";import"./Tooltip-C0lnV7H1.js";import"./PopoverPopup-04EI3i6u.js";import"./toNumber-DookCRBK.js";import"./useOsdkClient-CHsuVLzX.js";import"./tick-BBHEHKCM.js";import"./DropdownField-D9Lwkh_z.js";import"./withOsdkMetrics-BnjnR1i-.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
