import{f as n,j as t}from"./iframe-DO7xaOVa.js";import{O as p}from"./object-table-BMZSjn2w.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-tYEBtoa1.js";import"./Table-B1ywx-Y6.js";import"./index-B7ZoVnaP.js";import"./Dialog-Bytmi70C.js";import"./cross-C88ww4dZ.js";import"./svgIconContainer-BHZyR1wf.js";import"./useBaseUiId-B6qumW1k.js";import"./InternalBackdrop-BDXHjgns.js";import"./composite-G2BKpbjz.js";import"./index-CNeMCXvG.js";import"./index-CUTMnaj_.js";import"./index-CvU2RKnS.js";import"./useEventCallback-GrCIYgC6.js";import"./SkeletonBar-Lmgd1oM8.js";import"./LoadingCell-DMMLeEqX.js";import"./ColumnConfigDialog-Bjbu5Xs0.js";import"./DraggableList-CuFSG6dY.js";import"./search-C5KvEKD1.js";import"./Input-CJQStil5.js";import"./useControlled-B-xVn5Qq.js";import"./Button-CmWGTWu3.js";import"./small-cross-B9m9Mn_c.js";import"./ActionButton-V_3fgY3y.js";import"./Checkbox-TMw3uqDm.js";import"./minus-BNHd-nV1.js";import"./tick-D7zhS-G5.js";import"./useValueChanged-k_G7ufiT.js";import"./caret-down-BrJRKzS1.js";import"./CollapsiblePanel-Dl62pYVu.js";import"./MultiColumnSortDialog-LizoKM_m.js";import"./MenuTrigger-D779jGkt.js";import"./CompositeItem-BCacWVST.js";import"./ToolbarRootContext-CvCMQySo.js";import"./getDisabledMountTransitionStyles-C0JUYfii.js";import"./getPseudoElementBounds-Bg5NfpBZ.js";import"./chevron-down-CdGl7BQh.js";import"./index-93O_KIcJ.js";import"./error-BQ2Lysi9.js";import"./BaseCbacBanner-DjLVGGHQ.js";import"./makeExternalStore-DpllJH37.js";import"./Tooltip-y9WhDGj7.js";import"./PopoverPopup-tk8fV8nJ.js";import"./toNumber-B5x96DMZ.js";import"./useOsdkClient-BGZST9Rz.js";import"./DropdownField-Cg8-CFi-.js";import"./withOsdkMetrics-CzYVzdsc.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ir as default};
