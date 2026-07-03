import{f as n,j as t}from"./iframe-CBVDd2K9.js";import{O as p}from"./object-table-BBGyS4hT.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CeHTi67z.js";import"./Table-Dt5Q_ONs.js";import"./index-CgSNX0NI.js";import"./Dialog-DpuLLdsv.js";import"./cross-MJj7YzFz.js";import"./svgIconContainer-C12LQMwY.js";import"./useBaseUiId-H6sNVlNE.js";import"./InternalBackdrop-wfJdmOAO.js";import"./composite-CUsRZRAT.js";import"./index-kMiFdZDZ.js";import"./index-DdaPLHRE.js";import"./index-DIq_SYvb.js";import"./useEventCallback-DiF0agyU.js";import"./SkeletonBar-BmnUh9Rh.js";import"./LoadingCell-C3xI07Se.js";import"./ColumnConfigDialog-BX5vOycW.js";import"./DraggableList-DmkA-L6L.js";import"./search-MUd7770Y.js";import"./Input-PTyNua65.js";import"./useControlled-CQcpQ9pv.js";import"./Button-UqzeAcIG.js";import"./small-cross-DwrLXjG1.js";import"./ActionButton-CHr87y9u.js";import"./Checkbox-BWaIM0Xi.js";import"./useValueChanged-Ks3tZ9XQ.js";import"./CollapsiblePanel-CkGfPkGH.js";import"./MultiColumnSortDialog-B0f09Q4J.js";import"./MenuTrigger-KCDEPq8-.js";import"./CompositeItem-BaJfhb8h.js";import"./ToolbarRootContext-BsGBS5zG.js";import"./getDisabledMountTransitionStyles-Cd-N1Ma0.js";import"./getPseudoElementBounds-BidkPmNq.js";import"./chevron-down-DmgPtBG8.js";import"./index-DHSgCQOV.js";import"./error-SgDVKvo4.js";import"./BaseCbacBanner-B7P5cL2B.js";import"./makeExternalStore-CP8n70BA.js";import"./Tooltip-H3SGfXo8.js";import"./PopoverPopup-B9RZF1ED.js";import"./toNumber-ElWaauEq.js";import"./useOsdkClient-ByiJPUx_.js";import"./tick-dZlneL5H.js";import"./DropdownField-CWw58EnI.js";import"./withOsdkMetrics-BVtY-Trc.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
