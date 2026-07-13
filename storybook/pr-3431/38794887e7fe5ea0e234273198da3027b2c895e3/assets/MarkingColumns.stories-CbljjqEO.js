import{f as n,j as t}from"./iframe-QZGqQqFJ.js";import{O as p}from"./object-table-B9eQMbcZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DZTf9Ont.js";import"./Table-Dn34SrXD.js";import"./index-Dx6gu5iB.js";import"./Dialog-zhWIFRQW.js";import"./cross-BWVUmifp.js";import"./svgIconContainer-Br9kWo4N.js";import"./useBaseUiId-CVTOqwoy.js";import"./InternalBackdrop-CrRcoSZQ.js";import"./composite-9KmCGXzC.js";import"./index-QC2cTZfA.js";import"./index-C4ionURF.js";import"./index-BqvZ2dcL.js";import"./useEventCallback-DlT5WW6s.js";import"./SkeletonBar-DnAPil0M.js";import"./LoadingCell-Bkyy33jJ.js";import"./ColumnConfigDialog-C04rKzIQ.js";import"./DraggableList-wjbJeNsW.js";import"./search-Dng-PszH.js";import"./Input-7teiks9U.js";import"./useControlled-67o-dGk_.js";import"./Button-BCIOuPdP.js";import"./small-cross-COAKMV-L.js";import"./ActionButton-DaZ9Y-aa.js";import"./Checkbox-_8e6zqTh.js";import"./useValueChanged-LGkD9Iss.js";import"./CollapsiblePanel-Dk-fWydH.js";import"./MultiColumnSortDialog-BWoN7CG7.js";import"./MenuTrigger-BxoEAf2T.js";import"./CompositeItem-BOrf-lKd.js";import"./ToolbarRootContext-BmU1NWlK.js";import"./getDisabledMountTransitionStyles-BKf0PBHu.js";import"./getPseudoElementBounds-Bt3QKxin.js";import"./chevron-down-bVzoGnRr.js";import"./index-CTBOCsaj.js";import"./error--gw7SX2V.js";import"./BaseCbacBanner-xmgxGSEf.js";import"./makeExternalStore-DLOCRsN_.js";import"./Tooltip-TqZ3nheA.js";import"./PopoverPopup-xAw6P7bF.js";import"./toNumber-B3QUmuzX.js";import"./useOsdkClient-BvDWRE6n.js";import"./tick-9LRhaaPy.js";import"./DropdownField-DslxhPjC.js";import"./withOsdkMetrics-DBV_3f5Y.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
