import{f as n,j as t}from"./iframe-C4S3DlTX.js";import{O as p}from"./object-table-5TCLLi30.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C12oki_1.js";import"./Table-BZenm8TX.js";import"./index-CGdxS39A.js";import"./Dialog-CdQpPS-a.js";import"./cross-CVWhTfAa.js";import"./svgIconContainer-C5n87xB5.js";import"./useBaseUiId-KxDZNND0.js";import"./InternalBackdrop-D6dNkn8W.js";import"./composite-zkHIXe_o.js";import"./index-CpasDDuw.js";import"./index-B810S7QY.js";import"./index-DKVKUpZO.js";import"./useEventCallback-CAsXO3Pq.js";import"./SkeletonBar-pgpV1reP.js";import"./LoadingCell-CG9NCdW2.js";import"./ColumnConfigDialog-CEE7kLEO.js";import"./DraggableList-DxTPrvu8.js";import"./search-Cq9i3S8m.js";import"./Input-dMIGhA3_.js";import"./useControlled-rJmEjAwF.js";import"./Button-CQDmEc2D.js";import"./small-cross-Cqqf2hJe.js";import"./ActionButton-DwgmEmde.js";import"./Checkbox-B37vfDI7.js";import"./useValueChanged-DtlELAkC.js";import"./CollapsiblePanel-BSd3BHOh.js";import"./MultiColumnSortDialog-3mQqOLyt.js";import"./MenuTrigger-BW1xB-jy.js";import"./CompositeItem-CNDemvXj.js";import"./ToolbarRootContext-B1GabsZj.js";import"./getDisabledMountTransitionStyles-BmzagvAD.js";import"./getPseudoElementBounds-BXwNOQrX.js";import"./chevron-down-PnC8kvGF.js";import"./index-DvqKfLtn.js";import"./error-BHFCx4XG.js";import"./BaseCbacBanner-D6iKabAd.js";import"./makeExternalStore-DkUbRBpR.js";import"./Tooltip-xuEqE1zK.js";import"./PopoverPopup-GPnRbwGw.js";import"./toNumber-BhwwnZcs.js";import"./useOsdkClient-Bs3fLLPF.js";import"./tick-V55cviuE.js";import"./DropdownField-B1d75is9.js";import"./withOsdkMetrics-_iEXrOrE.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
