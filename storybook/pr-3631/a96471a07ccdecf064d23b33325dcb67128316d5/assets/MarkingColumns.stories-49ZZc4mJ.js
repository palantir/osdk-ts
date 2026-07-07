import{f as n,j as t}from"./iframe-CnChG_KN.js";import{O as p}from"./object-table-BCAlbPmV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DADpY2Qt.js";import"./Table-cv0vgdDf.js";import"./index-Bg4GYJhq.js";import"./Dialog-OVc-JRwY.js";import"./cross-6yQQk7jt.js";import"./svgIconContainer-k5XnGXOj.js";import"./useBaseUiId-fvP1qVsp.js";import"./InternalBackdrop-Z7_UJnuG.js";import"./composite-n_wz1PVx.js";import"./index-C6n9HlVg.js";import"./index-CXAXnNpD.js";import"./index-CFkQTRqB.js";import"./useEventCallback-DJmHFSXG.js";import"./SkeletonBar-DogJzowp.js";import"./LoadingCell-DiSRbmbG.js";import"./ColumnConfigDialog-j8KuaINB.js";import"./DraggableList-BvqUUVyl.js";import"./search-B9RbuUDO.js";import"./Input-BukmAR63.js";import"./useControlled-CLyMaIUU.js";import"./Button-BdsXel_V.js";import"./small-cross-DvOPaXmZ.js";import"./ActionButton-CwCZvxkQ.js";import"./Checkbox-CsMqfrQ7.js";import"./useValueChanged-CZxJlL18.js";import"./CollapsiblePanel-Jdjpr41w.js";import"./MultiColumnSortDialog-BqtK4DZc.js";import"./MenuTrigger-DzIbk7-D.js";import"./CompositeItem-CeGPnv3s.js";import"./ToolbarRootContext-Dphe3vLY.js";import"./getDisabledMountTransitionStyles-BoJjwQXR.js";import"./getPseudoElementBounds-LcI2pzMi.js";import"./chevron-down-SBdidObK.js";import"./index-DijgnBDc.js";import"./error-YhItXnEf.js";import"./BaseCbacBanner-BK3UwBqT.js";import"./makeExternalStore-BBdsACO7.js";import"./Tooltip-CM5erkeP.js";import"./PopoverPopup-BXniqrFB.js";import"./toNumber-D_nt920d.js";import"./useOsdkClient-Bq7v4Iic.js";import"./tick-BZbHzIkQ.js";import"./DropdownField-BABJkNkt.js";import"./withOsdkMetrics-ChwVoFCz.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
