import{f as n,j as t}from"./iframe-BPsbnD3-.js";import{O as p}from"./object-table-Dl-HMD2d.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-nbiNUvbx.js";import"./Table-BytefKcA.js";import"./index-CD8jiNvU.js";import"./Dialog-DzRhDGZz.js";import"./cross-D9Aoewgl.js";import"./svgIconContainer-BBd09OkQ.js";import"./useBaseUiId-fUCbvsGh.js";import"./InternalBackdrop-2RVkSuCi.js";import"./composite-Mqyb2C8L.js";import"./index-DWrzAG7S.js";import"./index-Ca2a8vQi.js";import"./index-ByF60R0c.js";import"./useEventCallback-Btk41M8G.js";import"./SkeletonBar-CKeLVyPN.js";import"./LoadingCell-NAgXHLSQ.js";import"./ColumnConfigDialog-4pNUKupk.js";import"./DraggableList-KccIDHZf.js";import"./search-U7graBFs.js";import"./Input-C6HzFSjr.js";import"./useControlled-DhNXpMdh.js";import"./Button-BiX0xWqG.js";import"./small-cross-BC__1WO9.js";import"./ActionButton-_gwwaIrC.js";import"./Checkbox-CxUQE7yQ.js";import"./minus-BSSZSYKZ.js";import"./tick-BzumYJRY.js";import"./useValueChanged-D1yUBypl.js";import"./caret-down-CkfuyWo4.js";import"./CollapsiblePanel-CMrc463q.js";import"./MultiColumnSortDialog-CIG7R66H.js";import"./MenuTrigger-B9xoYuQj.js";import"./CompositeItem-B7C3K7dX.js";import"./ToolbarRootContext-BCEMFmSA.js";import"./getDisabledMountTransitionStyles-CaSICKwK.js";import"./getPseudoElementBounds-DpFU2yjI.js";import"./chevron-down-Xtiggqfh.js";import"./index-D00QMlk8.js";import"./error-CnqjcJdt.js";import"./BaseCbacBanner-DUB2t0aA.js";import"./makeExternalStore-BmDTcobO.js";import"./Tooltip-Dq3i60j5.js";import"./PopoverPopup-BC1F6w2S.js";import"./toNumber-CQgoZNnp.js";import"./useOsdkClient-DETAhWK2.js";import"./DropdownField-B2dTc5Oj.js";import"./withOsdkMetrics-DRE8__de.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
