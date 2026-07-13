import{f as n,j as t}from"./iframe-Dcyw3n0s.js";import{O as p}from"./object-table-B6icTVF4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper--DYYOvly.js";import"./Table-BgpTBgzj.js";import"./index-BRAYEGnX.js";import"./Dialog-DPDoLNbg.js";import"./cross-BtW3RFRu.js";import"./svgIconContainer-CDrVOxgg.js";import"./useBaseUiId-Bxpmo9et.js";import"./InternalBackdrop-E_2gQNdi.js";import"./composite-CXKQao9c.js";import"./index-DQSxhZzf.js";import"./index-D8Yt5RHp.js";import"./index-Bys8iuS6.js";import"./useEventCallback-D8He6yhG.js";import"./SkeletonBar-DpnYisp8.js";import"./LoadingCell-BWYOZj5M.js";import"./ColumnConfigDialog-D_VAM7LN.js";import"./DraggableList-B4CNtBrU.js";import"./search-NxpExqZW.js";import"./Input-CxW-U7dR.js";import"./useControlled-CAIHNCIs.js";import"./Button-CEVHKDgx.js";import"./small-cross-Hbjo3Uav.js";import"./ActionButton-DKvm-hVd.js";import"./Checkbox-DJLV_OzW.js";import"./useValueChanged-Q58IdcSS.js";import"./CollapsiblePanel-CRYKS3nu.js";import"./MultiColumnSortDialog-b7vdqwsg.js";import"./MenuTrigger-BV2xvKhh.js";import"./CompositeItem-suCt67I_.js";import"./ToolbarRootContext-CvnjVtFT.js";import"./getDisabledMountTransitionStyles-CB599Kw4.js";import"./getPseudoElementBounds-dEZ5Imsc.js";import"./chevron-down-DybwZNpw.js";import"./index-BbXWi6RK.js";import"./error-vNzMi5l_.js";import"./BaseCbacBanner-Bt_wy-DV.js";import"./makeExternalStore-CB1cXXB6.js";import"./Tooltip-D5YXKazL.js";import"./PopoverPopup-CiALj5He.js";import"./toNumber-DVrluVqV.js";import"./useOsdkClient-4jomni6B.js";import"./tick-CF7baKn_.js";import"./DropdownField-mng5SRx7.js";import"./withOsdkMetrics-B1X4SrC-.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
