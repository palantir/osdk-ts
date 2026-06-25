import{f as n,j as t}from"./iframe-kFHrHtRc.js";import{O as p}from"./object-table-7zPdgU9m.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-6dFd8xKu.js";import"./Table-gvewHocN.js";import"./index-tBl6rlIF.js";import"./Dialog-aUdfJ5J7.js";import"./cross-DhXvZx4j.js";import"./svgIconContainer-DiDlj_r8.js";import"./useBaseUiId-BbnENGlt.js";import"./InternalBackdrop-ConJ-hLC.js";import"./composite-BYaxL6-t.js";import"./index-CTTCZhQQ.js";import"./index-AIp5TQ1k.js";import"./index-Co0N3aof.js";import"./useEventCallback-BHSncEeA.js";import"./SkeletonBar-CWGNlgjo.js";import"./LoadingCell-Cr7dZdc-.js";import"./ColumnConfigDialog-B53DXou6.js";import"./DraggableList-D_J8jfyi.js";import"./Input-BTECeJwQ.js";import"./useControlled-7bkozBRa.js";import"./Button-BtRF90P5.js";import"./small-cross-DQfftCkl.js";import"./ActionButton-BTDkNzhC.js";import"./Checkbox-BjRB6Hrd.js";import"./minus-7XFF7Rs7.js";import"./useValueChanged-BkxvhsMa.js";import"./caret-down-DV4nI2gA.js";import"./CollapsiblePanel-CvDDDGL5.js";import"./MultiColumnSortDialog-CCvAUbWx.js";import"./MenuTrigger-CSayyDEZ.js";import"./CompositeItem-SdMSeS9K.js";import"./ToolbarRootContext-DnEgARL3.js";import"./getDisabledMountTransitionStyles-DuPHHR5s.js";import"./getPseudoElementBounds-CHYFlTtc.js";import"./chevron-down-C945aAFK.js";import"./index-B55enKSC.js";import"./error-myjgtVDC.js";import"./BaseCbacBanner-DT_4nwVL.js";import"./makeExternalStore-CR1kuob1.js";import"./Tooltip-BHcYgXLf.js";import"./PopoverPopup-DOcvGNvF.js";import"./toNumber-D9R32xus.js";import"./useOsdkClient-fY2CngQP.js";import"./DropdownField-hr_I5fcT.js";import"./withOsdkMetrics-DDv31IRr.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
