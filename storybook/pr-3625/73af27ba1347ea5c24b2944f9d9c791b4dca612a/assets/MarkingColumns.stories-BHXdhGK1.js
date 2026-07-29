import{f as n,j as t}from"./iframe-BP06dXdo.js";import{O as p}from"./object-table-CrO5x6Fp.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DlEWCR1V.js";import"./Table-B_QiHPMn.js";import"./index-Dk34pG-E.js";import"./Dialog-D2ZTAgHe.js";import"./cross-iCTpuXAP.js";import"./svgIconContainer-Bj0iQopz.js";import"./useBaseUiId-Bp1v_4Yt.js";import"./InternalBackdrop-DBhFUDFj.js";import"./composite-DNi76Wdx.js";import"./index-C57lYKpt.js";import"./index-CYXBz4-d.js";import"./index-CBTyXAWh.js";import"./useEventCallback-LqziPIT0.js";import"./SkeletonBar-Df-hyMAC.js";import"./LoadingCell-DQ3mNlFT.js";import"./ColumnConfigDialog-Chu7xqSw.js";import"./DraggableList-BvCKlgax.js";import"./search-CiYrMFGj.js";import"./Input-DiSzpbBK.js";import"./useControlled-CuXn7b8T.js";import"./Button-DHAp4sQQ.js";import"./small-cross-C6zUY2-s.js";import"./ActionButton-P8oOlYwA.js";import"./Checkbox-Cs65MOhs.js";import"./useValueChanged-B5UIJYsO.js";import"./CollapsiblePanel-D4pZRCJg.js";import"./MultiColumnSortDialog-BVZ5Gmpw.js";import"./MenuTrigger-CmrelIfQ.js";import"./CompositeItem-11-57Byd.js";import"./ToolbarRootContext-CkfiVBkK.js";import"./getDisabledMountTransitionStyles-fAUcSgax.js";import"./getPseudoElementBounds-CcUEz73Y.js";import"./chevron-down-Cwji13S3.js";import"./index-szmPUtPW.js";import"./error-C76gCqBT.js";import"./BaseCbacBanner-EkKNp9Lg.js";import"./makeExternalStore-ry9lHCgm.js";import"./Tooltip-RYydFl2v.js";import"./PopoverPopup-B-2gcJXU.js";import"./toNumber-CG88qEY1.js";import"./useOsdkClient-Clg0gIGI.js";import"./tick-BrfiGO94.js";import"./DropdownField-BTUMGsxj.js";import"./withOsdkMetrics-BtYhTnlX.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
