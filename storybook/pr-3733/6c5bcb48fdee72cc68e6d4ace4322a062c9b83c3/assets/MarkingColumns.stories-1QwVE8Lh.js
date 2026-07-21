import{f as n,j as t}from"./iframe-Dveh3_7n.js";import{O as p}from"./object-table-BgmGPxfl.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BWKUn3l9.js";import"./Table-Bw0NH9dE.js";import"./index-C8o6Ng59.js";import"./Dialog-DxdZZKDN.js";import"./cross-BKyCdW71.js";import"./svgIconContainer-2Cwik5a2.js";import"./useBaseUiId-BcWjZ5oo.js";import"./InternalBackdrop-C5OHxPcc.js";import"./composite-CksEg6HI.js";import"./index-HiXx80UP.js";import"./index-Bcy8BxQF.js";import"./index-BXuXZ7Ln.js";import"./useEventCallback-BLv-rZn-.js";import"./SkeletonBar-B-QakKbd.js";import"./LoadingCell-B1HU1v59.js";import"./ColumnConfigDialog-CiPfwC7u.js";import"./DraggableList-fiz6Z72l.js";import"./search-BePt087D.js";import"./Input-CF6xCn_p.js";import"./useControlled-BOQZVcOd.js";import"./Button-BuMr7WvO.js";import"./small-cross-CutT8YRk.js";import"./ActionButton-B8V2r37_.js";import"./Checkbox-DwR-TLsX.js";import"./useValueChanged-DDvSNJew.js";import"./CollapsiblePanel-BUQFRqeq.js";import"./MultiColumnSortDialog-BJyUaZuy.js";import"./MenuTrigger-B0pLMlUc.js";import"./CompositeItem-BtmdcoIR.js";import"./ToolbarRootContext-CLsNpSj0.js";import"./getDisabledMountTransitionStyles-D4PbU33c.js";import"./getPseudoElementBounds-SZI96r56.js";import"./chevron-down-BB85PjhU.js";import"./index-j3Zla7Xg.js";import"./error-DlKoKQgC.js";import"./BaseCbacBanner-GXETkbsn.js";import"./makeExternalStore-Bv2nHlRZ.js";import"./Tooltip-CWCZKsd8.js";import"./PopoverPopup-yN8GTRSX.js";import"./toNumber-D7Lpdau6.js";import"./useOsdkClient-CfZ6Zie3.js";import"./tick-CLdCyBtc.js";import"./DropdownField-BXiNJLJQ.js";import"./withOsdkMetrics-BeTCQocI.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
