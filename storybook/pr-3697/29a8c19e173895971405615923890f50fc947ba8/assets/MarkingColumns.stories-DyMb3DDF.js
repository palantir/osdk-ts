import{f as n,j as t}from"./iframe-DvMdQBvd.js";import{O as p}from"./object-table-CkPv6kLx.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BjpjdvaZ.js";import"./Table-1ll3WyGn.js";import"./index-HPU5XEkS.js";import"./Dialog-B-gt5OQR.js";import"./cross-C9iQ620L.js";import"./svgIconContainer-Bsqq_-j9.js";import"./useBaseUiId-DUxEP0JG.js";import"./InternalBackdrop-iVNi1anK.js";import"./composite-WNMviQTM.js";import"./index-D4pRvPWl.js";import"./index--x_DOZdN.js";import"./index-DdeminYl.js";import"./useEventCallback-nCJ_FhbV.js";import"./SkeletonBar-BUj4djnK.js";import"./LoadingCell-B5m1Qbcm.js";import"./ColumnConfigDialog-BlfTfiKq.js";import"./DraggableList-CNAW2mRU.js";import"./search-BL-w9WEV.js";import"./Input-Ce190kRT.js";import"./useControlled-uyqWxroq.js";import"./Button-4P7Cih8_.js";import"./small-cross-C6Yae1r4.js";import"./ActionButton-D_h45E7x.js";import"./Checkbox-_hFnS6qQ.js";import"./useValueChanged-0oGrLz5h.js";import"./CollapsiblePanel-D5sMxpZl.js";import"./MultiColumnSortDialog-jEkGCSao.js";import"./MenuTrigger-9MebFH6s.js";import"./CompositeItem-hputHC9b.js";import"./ToolbarRootContext--8pzFarC.js";import"./getDisabledMountTransitionStyles-CcNac6LD.js";import"./getPseudoElementBounds-DD74Ap2v.js";import"./chevron-down-E3rxB9-r.js";import"./index-DFO59pxo.js";import"./error-NZ2vfALl.js";import"./BaseCbacBanner-BglMFTPN.js";import"./makeExternalStore-Bvm_N1o6.js";import"./Tooltip-XrMuYqxH.js";import"./PopoverPopup-CvnN1Q6W.js";import"./toNumber-CwW_ilZy.js";import"./useOsdkClient-CyaHFuc4.js";import"./tick-B_bPqavH.js";import"./DropdownField-k9CuJn0r.js";import"./withOsdkMetrics-Dpcl__Mh.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
