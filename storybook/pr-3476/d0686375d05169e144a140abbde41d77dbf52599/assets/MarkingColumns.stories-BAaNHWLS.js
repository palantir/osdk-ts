import{f as n,j as t}from"./iframe-DJP8IIlu.js";import{O as p}from"./object-table-BWC_dqle.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CsY6csse.js";import"./Table-DF8SWQA-.js";import"./index-Bxehe18C.js";import"./Dialog-CorumKZq.js";import"./cross-DVKUijKv.js";import"./svgIconContainer-BPlQVo0t.js";import"./useBaseUiId-dTKr71dH.js";import"./InternalBackdrop-B6u_5uMS.js";import"./composite-Ct1eiiEm.js";import"./index-ujIPKC1l.js";import"./index-DEVzZp_e.js";import"./index-CiNJr_2_.js";import"./useEventCallback-BanpuKZa.js";import"./SkeletonBar-CyC09aqV.js";import"./LoadingCell-Cw4ORMp-.js";import"./ColumnConfigDialog-Bu0pwVp1.js";import"./DraggableList-CkorsPeK.js";import"./Input-BZMo5u1-.js";import"./useControlled-C98E7AtS.js";import"./Button-BKq3N5Fl.js";import"./small-cross-CZpTxdye.js";import"./ActionButton-CK1pBPkw.js";import"./Checkbox-C7rZzdFn.js";import"./minus-DfQ6OeUT.js";import"./useValueChanged-mlGbOFJB.js";import"./caret-down-4H18SxYr.js";import"./CollapsiblePanel-dVyPjBTG.js";import"./MultiColumnSortDialog--L8GTyCJ.js";import"./MenuTrigger-CjJ_Gy85.js";import"./CompositeItem-CXy6qCdc.js";import"./ToolbarRootContext-CdIXpwIW.js";import"./getDisabledMountTransitionStyles-DFXzfCxj.js";import"./getPseudoElementBounds-gARU2VoP.js";import"./chevron-down-DPHmebci.js";import"./index-_jFpDV0g.js";import"./error-C5AWKg0Y.js";import"./BaseCbacBanner-z_RBnkWt.js";import"./makeExternalStore-Bu6GAIZJ.js";import"./Tooltip-cAO3A6M9.js";import"./PopoverPopup-BLjfGq4X.js";import"./toNumber-ChBKVYT6.js";import"./useOsdkClient-BoIeA6s0.js";import"./DropdownField-BO2_9zXk.js";import"./withOsdkMetrics-CDjUhWGh.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
