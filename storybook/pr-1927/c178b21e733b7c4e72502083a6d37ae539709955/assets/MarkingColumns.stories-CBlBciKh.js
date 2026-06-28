import{f as n,j as t}from"./iframe-BSrJtMAy.js";import{O as p}from"./object-table-DHHswVCM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CJ0uGEBt.js";import"./Table-BajYqP7w.js";import"./index-D1GbiRQS.js";import"./Dialog-C0fPursl.js";import"./cross-DvQ_aeLX.js";import"./svgIconContainer-L-5RtQyd.js";import"./useBaseUiId-CUfq4dGh.js";import"./InternalBackdrop-DtGuxSow.js";import"./composite-D2xreuW7.js";import"./index-BfAdvFUY.js";import"./index-DbG9wyxz.js";import"./index-DstKjMFq.js";import"./useEventCallback-zVj5NeXk.js";import"./SkeletonBar-BlOti7zV.js";import"./LoadingCell-B6gxrU-g.js";import"./ColumnConfigDialog-0HMwBwpi.js";import"./DraggableList-DuP_SeWd.js";import"./search-CvD5xe0-.js";import"./Input-BFEhrf0Y.js";import"./useControlled-Csgps4qR.js";import"./Button-B9oa49Hr.js";import"./small-cross-BWS6eRZj.js";import"./ActionButton-2RxpvHsZ.js";import"./Checkbox-CGmCWYWV.js";import"./minus-CaWrYx75.js";import"./tick-B2DOF4fq.js";import"./useValueChanged-CvlNXU2B.js";import"./caret-down-C6iHkg4_.js";import"./CollapsiblePanel-DcxhJcfU.js";import"./MultiColumnSortDialog-DNTGzXD3.js";import"./MenuTrigger-DruE6YCM.js";import"./CompositeItem-DfM-WWMx.js";import"./ToolbarRootContext-Id_3yl_o.js";import"./getDisabledMountTransitionStyles-DhhDrx95.js";import"./getPseudoElementBounds-DUsuz1Hu.js";import"./chevron-down-BS5lzpW9.js";import"./index-CjIn5qeG.js";import"./error-BRgYatE1.js";import"./BaseCbacBanner-D6zmzc2G.js";import"./makeExternalStore-BWgMKoPI.js";import"./Tooltip-C0yFzXj0.js";import"./PopoverPopup-C7htB5Ya.js";import"./toNumber-v5IjwS6U.js";import"./useOsdkClient-BO4qkv8H.js";import"./DropdownField-yV618VEW.js";import"./withOsdkMetrics-CzBzDarn.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
