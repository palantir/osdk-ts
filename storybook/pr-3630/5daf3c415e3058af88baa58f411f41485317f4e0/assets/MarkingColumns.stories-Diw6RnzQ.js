import{f as n,j as t}from"./iframe-CQvYC2Mc.js";import{O as p}from"./object-table-N0doisAO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BEZ8lP16.js";import"./Table-BPV638E8.js";import"./index-B6R1qUpL.js";import"./Dialog-DI1bU_9I.js";import"./cross-CYqgq5AP.js";import"./svgIconContainer-8qZ8IlT_.js";import"./useBaseUiId-BWLHdD4g.js";import"./InternalBackdrop-DEeKo5uW.js";import"./composite-CXtq681A.js";import"./index-CGCWeSoa.js";import"./index-BE2KYGHn.js";import"./index-CgKgS2Li.js";import"./useEventCallback-CiQAd75S.js";import"./SkeletonBar-D5c2aln9.js";import"./LoadingCell-DrsZ29Kn.js";import"./ColumnConfigDialog-CvFkqCET.js";import"./DraggableList-cYkf8_G8.js";import"./search-CRHFewGf.js";import"./Input-CP66cyE8.js";import"./useControlled-DJFsLM5o.js";import"./Button-BrSSFbRf.js";import"./small-cross-BDLy6Csf.js";import"./ActionButton-CeGp-HNQ.js";import"./Checkbox-F3BbqqFs.js";import"./useValueChanged-DnZLNMPE.js";import"./CollapsiblePanel-Dm6n2yq3.js";import"./MultiColumnSortDialog-DZF_7F3z.js";import"./MenuTrigger-B3Rvnhlv.js";import"./CompositeItem-CLvBkps8.js";import"./ToolbarRootContext-CRXCF4gP.js";import"./getDisabledMountTransitionStyles-NsS34Kt7.js";import"./getPseudoElementBounds-DCA6s-zR.js";import"./chevron-down-DQmwVB0G.js";import"./index-Caz1Duo5.js";import"./error-CREILQKt.js";import"./BaseCbacBanner-MKpEgqQO.js";import"./makeExternalStore-BdIvN8Ho.js";import"./Tooltip-CstBRKWC.js";import"./PopoverPopup-MTnDQ-Bl.js";import"./toNumber-C6bCpIbI.js";import"./useOsdkClient-C37956GS.js";import"./tick-B7sulsAV.js";import"./DropdownField-Yzjjhihn.js";import"./withOsdkMetrics-Dpr0l7kl.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
