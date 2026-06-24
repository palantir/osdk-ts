import{f as n,j as t}from"./iframe-CkQZcnH2.js";import{O as p}from"./object-table-D-R6iScK.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CljnlcDv.js";import"./Table-wZX2CstT.js";import"./index-VVlN0jvd.js";import"./Dialog-CPovDKfQ.js";import"./cross-DZ7IUewz.js";import"./svgIconContainer-Br1nC1Of.js";import"./useBaseUiId-DVZXOiRt.js";import"./InternalBackdrop-CmWjXUl2.js";import"./composite-u2NZBRF_.js";import"./index-DsjiD0wB.js";import"./index-vfid0is-.js";import"./index-BrHai-1b.js";import"./useEventCallback-D_6Y4mFR.js";import"./SkeletonBar-CJcBRWrJ.js";import"./LoadingCell-CpEGVHuY.js";import"./ColumnConfigDialog-D-3ElpZk.js";import"./DraggableList-CsEndDUw.js";import"./Input-Crju91xE.js";import"./useControlled-D3yTP8QU.js";import"./Button-2issX0HJ.js";import"./small-cross-bGENFntV.js";import"./ActionButton-CdvRrwE7.js";import"./Checkbox-BaDVnoJX.js";import"./minus-ANa26wQM.js";import"./useValueChanged-sKFfM3Ng.js";import"./caret-down-D-Ci3kCT.js";import"./CollapsiblePanel-C76F_By1.js";import"./MultiColumnSortDialog-hJptd3-W.js";import"./MenuTrigger-B1cympyY.js";import"./CompositeItem-vowMVFYI.js";import"./ToolbarRootContext-D2z5WJh1.js";import"./getDisabledMountTransitionStyles-0hfkh-73.js";import"./getPseudoElementBounds-DSBOnB5Y.js";import"./chevron-down-CASSpbpI.js";import"./index-DqOl1-jR.js";import"./error-CQhWb91W.js";import"./Tooltip-CK9NyL9g.js";import"./PopoverPopup-Bjb8pY3V.js";import"./toNumber-C9-LPFy2.js";import"./useOsdkClient-DX65UjCd.js";import"./DropdownField-BNRHWkiG.js";import"./makeExternalStore-DEJLLiQC.js";import"./withOsdkMetrics-BtHjUR6o.js";const tr={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};
