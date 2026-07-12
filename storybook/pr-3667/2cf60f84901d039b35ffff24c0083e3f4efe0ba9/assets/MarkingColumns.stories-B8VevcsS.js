import{f as n,j as t}from"./iframe-fPd3ZPuu.js";import{O as p}from"./object-table-ByrUn8V0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-5yag0Mtu.js";import"./Table-BTmPibXg.js";import"./index-CSsrsxtE.js";import"./Dialog-BSKGoiBY.js";import"./cross-BySQGXOf.js";import"./svgIconContainer-DNWpTeVC.js";import"./useBaseUiId-DLwhWcM7.js";import"./InternalBackdrop-Cy7MthF0.js";import"./composite-DajFV86i.js";import"./index-Dg0pnNJ_.js";import"./index-DBW89Y8Z.js";import"./index-CsCd7sOo.js";import"./useEventCallback-BDjGOR6K.js";import"./SkeletonBar-C610b2ss.js";import"./LoadingCell-CwjFQGgO.js";import"./ColumnConfigDialog-_JFGyW4v.js";import"./DraggableList-CTQ4_FsO.js";import"./search-B6gvipFg.js";import"./Input-bozW2I1f.js";import"./useControlled-BKaFuND4.js";import"./Button-DDSU9lrV.js";import"./small-cross-EQe1gJrY.js";import"./ActionButton-BmF_C6fu.js";import"./Checkbox-BNLPY2CZ.js";import"./useValueChanged-DH4xKUOc.js";import"./CollapsiblePanel-yt68W6lG.js";import"./MultiColumnSortDialog-YKeGMpu2.js";import"./MenuTrigger-DOiNbG2l.js";import"./CompositeItem-VGwfDYt4.js";import"./ToolbarRootContext-h03d-5AE.js";import"./getDisabledMountTransitionStyles-BJUneu6c.js";import"./getPseudoElementBounds-cr565Bjz.js";import"./chevron-down-8zAyFdFU.js";import"./index-DqcMwp2a.js";import"./error-BlTYrgdb.js";import"./BaseCbacBanner-B-9G54Sz.js";import"./makeExternalStore-eN0OdWna.js";import"./Tooltip-CWQ46O-I.js";import"./PopoverPopup-DAGwIV0e.js";import"./toNumber-Dyn7Drqq.js";import"./useOsdkClient-Deels94Z.js";import"./tick-ctMAdIJV.js";import"./DropdownField-DyR2KDZR.js";import"./withOsdkMetrics-DPWNWq30.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
