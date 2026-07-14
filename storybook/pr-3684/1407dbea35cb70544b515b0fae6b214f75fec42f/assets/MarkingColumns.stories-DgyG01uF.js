import{f as n,j as t}from"./iframe-B-WU-8wd.js";import{O as p}from"./object-table-nxBEf9ox.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C40QNhqw.js";import"./Table-C2zUsFP9.js";import"./index-Bnf1WvQV.js";import"./Dialog-B5yOi36g.js";import"./cross-KJ7LHtiK.js";import"./svgIconContainer-BnLwqgci.js";import"./useBaseUiId-Bi3-Fffy.js";import"./InternalBackdrop-AwonGTq_.js";import"./composite-DpJKh4-s.js";import"./index-Dh8ouLHi.js";import"./index-By31Q2MY.js";import"./index-CrPucBmk.js";import"./useEventCallback-B6uddWiB.js";import"./SkeletonBar-D0-0KXgH.js";import"./LoadingCell-BawZG904.js";import"./ColumnConfigDialog-fmotjSvF.js";import"./DraggableList-Q93rRrnT.js";import"./search-VDjb0-h7.js";import"./Input-2mfpVf2j.js";import"./useControlled-CbwX9DZR.js";import"./Button-B4vcsqpE.js";import"./small-cross-BqRRgp3I.js";import"./ActionButton-BV1WspOg.js";import"./Checkbox-DOgDa9i9.js";import"./useValueChanged-fWiNVMvJ.js";import"./CollapsiblePanel-_-HKx5a5.js";import"./MultiColumnSortDialog-Dz9lXu46.js";import"./MenuTrigger-BZtj_g4o.js";import"./CompositeItem-BEnpaF9E.js";import"./ToolbarRootContext-oT7fW65H.js";import"./getDisabledMountTransitionStyles-BtEpC-7P.js";import"./getPseudoElementBounds-B1ggPPEI.js";import"./chevron-down-3mFcboyY.js";import"./index-BqYFCOuP.js";import"./error-R1Pak1UN.js";import"./BaseCbacBanner-C86ZkxWb.js";import"./makeExternalStore-HqHpVmcS.js";import"./Tooltip-B70OLhz8.js";import"./PopoverPopup-DBf_ef2G.js";import"./toNumber-DdrewsgU.js";import"./useOsdkClient-HSBsYBlc.js";import"./tick-CHxIBXf0.js";import"./DropdownField-CK-XlDml.js";import"./withOsdkMetrics-Cuas_biu.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
