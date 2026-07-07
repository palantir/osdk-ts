import{f as n,j as t}from"./iframe-C01JP_yt.js";import{O as p}from"./object-table-C1Kl8iG0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CwGZKdoG.js";import"./Table-Djq_6ZRK.js";import"./index-DEw4js2-.js";import"./Dialog-Cs90mVIp.js";import"./cross-C_Hv8g3v.js";import"./svgIconContainer-CBpfF-IK.js";import"./useBaseUiId-eTwxnD3s.js";import"./InternalBackdrop-DLxQNnzN.js";import"./composite-BplbcpZv.js";import"./index-9lwlolfN.js";import"./index-DCJdbfgx.js";import"./index-CxPvC-H8.js";import"./useEventCallback-KvyqFLYj.js";import"./SkeletonBar-D_cGkVD9.js";import"./LoadingCell-Bxh7HBp8.js";import"./ColumnConfigDialog-BgeFSoc7.js";import"./DraggableList-C_m-HJLz.js";import"./search--YnO-TcT.js";import"./Input-DPWFKMGE.js";import"./useControlled-CbN_0GNe.js";import"./Button-CW9k7a6R.js";import"./small-cross-Cn_YLmiR.js";import"./ActionButton-7Wgxc9Td.js";import"./Checkbox-BWQUoL8D.js";import"./useValueChanged-8mMao3i8.js";import"./CollapsiblePanel-BvjGSETi.js";import"./MultiColumnSortDialog-BKroHquH.js";import"./MenuTrigger-CglAxChD.js";import"./CompositeItem-km0GaIC7.js";import"./ToolbarRootContext-BarR88R7.js";import"./getDisabledMountTransitionStyles-3DvdesAH.js";import"./getPseudoElementBounds-DM4t_PnL.js";import"./chevron-down-BmWa3ECC.js";import"./index-D17txN35.js";import"./error-BkRUIjkS.js";import"./BaseCbacBanner-gIByWXDj.js";import"./makeExternalStore-CrEELGEd.js";import"./Tooltip-DAT3hvSz.js";import"./PopoverPopup-DEJgIsDZ.js";import"./toNumber-BsrdPipx.js";import"./useOsdkClient-BaHPjDsT.js";import"./tick-CIe0q9u1.js";import"./DropdownField-RNwVzvAL.js";import"./withOsdkMetrics-4zliOXho.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
