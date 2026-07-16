import{f as n,j as t}from"./iframe-Bm_G5iDx.js";import{O as p}from"./object-table-jg_iDE0Y.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CUfc8vWr.js";import"./Table-yFHQG5ms.js";import"./index-BAmggNkh.js";import"./Dialog-BJu44SaS.js";import"./cross-DJhNhnN_.js";import"./svgIconContainer-BnHXU4W_.js";import"./useBaseUiId-CbgYpGct.js";import"./InternalBackdrop-RL49MDdt.js";import"./composite-CATuqAxD.js";import"./index-Dwdfinsm.js";import"./index-C4IbAVlO.js";import"./index-srF9RmtF.js";import"./useEventCallback-ZOIcPlYL.js";import"./SkeletonBar-V6DyzCsi.js";import"./LoadingCell-BEIqqk89.js";import"./ColumnConfigDialog-DVVWAyFo.js";import"./DraggableList-DXy3Rpsj.js";import"./search-DFrayO2N.js";import"./Input-AGFS7EAo.js";import"./useControlled-BCHomVef.js";import"./Button-BJTsBY7U.js";import"./small-cross-cqL6mpwr.js";import"./ActionButton-B25BkH2j.js";import"./Checkbox-F0ha-Wdy.js";import"./useValueChanged-T-eizeDy.js";import"./CollapsiblePanel-C35nFAKw.js";import"./MultiColumnSortDialog-BvMUn0iA.js";import"./MenuTrigger-BoWMTCWg.js";import"./CompositeItem-IegWcQIo.js";import"./ToolbarRootContext-Dxj7jCyQ.js";import"./getDisabledMountTransitionStyles-CQQ1EHzW.js";import"./getPseudoElementBounds-BO38lDyU.js";import"./chevron-down-IPiASCLZ.js";import"./index-BbPclRAn.js";import"./error-ATsLMRCi.js";import"./BaseCbacBanner-DKvuZuB-.js";import"./makeExternalStore-BNOz6mKS.js";import"./Tooltip-Brrtouz1.js";import"./PopoverPopup-D4SNCxB4.js";import"./toNumber-D0dpuFjr.js";import"./useOsdkClient-bmaD2Yfm.js";import"./tick-DRROt7jX.js";import"./DropdownField-BzshXpp-.js";import"./withOsdkMetrics-D-OjO4gU.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
