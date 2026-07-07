import{f as n,j as t}from"./iframe-D97YEMdq.js";import{O as p}from"./object-table-BJNNP-EB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BIkRDzMT.js";import"./Table-Bjndswmx.js";import"./index-Ia8LWgYv.js";import"./Dialog-eysaAwIG.js";import"./cross-sIu8XFGu.js";import"./svgIconContainer-Clxg_GXp.js";import"./useBaseUiId-BEShfJ3D.js";import"./InternalBackdrop-DnRw7c7B.js";import"./composite-WROgFX5s.js";import"./index-4fS1n3Az.js";import"./index-g5s6Wnce.js";import"./index-dhAb0uJU.js";import"./useEventCallback-C-P_wJ_B.js";import"./SkeletonBar-B28zgVD5.js";import"./LoadingCell-BfHCAtBz.js";import"./ColumnConfigDialog-B5hTQwsk.js";import"./DraggableList-C2P7TdJT.js";import"./search--6cjDtTk.js";import"./Input-CHWmRLet.js";import"./useControlled-D-V2B7Yn.js";import"./Button-A_tdQ-3-.js";import"./small-cross-CgTTUjfJ.js";import"./ActionButton-DgfDGj_U.js";import"./Checkbox-C1HuHCWf.js";import"./useValueChanged-BroKx5ME.js";import"./CollapsiblePanel-BNdx1z_G.js";import"./MultiColumnSortDialog-BNFSXeAa.js";import"./MenuTrigger-Cs5tNmhD.js";import"./CompositeItem-C5VDajl0.js";import"./ToolbarRootContext-C7JWEDz3.js";import"./getDisabledMountTransitionStyles-CsJctH5s.js";import"./getPseudoElementBounds-Dys_oJZc.js";import"./chevron-down-DVHDvGgY.js";import"./index-D0WFg6-l.js";import"./error-euhq7y8E.js";import"./BaseCbacBanner-CyXIMLP-.js";import"./makeExternalStore-Do6cu1tb.js";import"./Tooltip-DV96_WUi.js";import"./PopoverPopup-6pXSkWbu.js";import"./toNumber-DiBOR3C3.js";import"./useOsdkClient-DSH9ILoq.js";import"./tick-DsWCBOUw.js";import"./DropdownField-CW3rAVBS.js";import"./withOsdkMetrics-B44K7LZI.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
