import{f as p,j as e}from"./iframe-BbZZXiGk.js";import{O as i}from"./object-table-BkL1V447.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CeJCQ8zy.js";import"./Table-GhUoiVcZ.js";import"./index-CZbf2fy9.js";import"./Dialog-0Rvjl7dG.js";import"./cross-CrdY7Kh8.js";import"./svgIconContainer-DdiK9vAR.js";import"./useBaseUiId-DJIunILb.js";import"./InternalBackdrop-Cbjv4LYd.js";import"./composite-DhB3hKwn.js";import"./index-D53mexCV.js";import"./index-Bz754pyr.js";import"./index-IygjZw6i.js";import"./useEventCallback-CuURf1p5.js";import"./SkeletonBar-gxgKc7X3.js";import"./LoadingCell-3dgNbREz.js";import"./ColumnConfigDialog-DtuJX_GE.js";import"./DraggableList-BW5a4ZJ4.js";import"./search-C7y_2xxv.js";import"./Input-Dg2k6Vdc.js";import"./useControlled-DQq0royT.js";import"./Button-is2LXBbi.js";import"./small-cross-DtcbYqVr.js";import"./ActionButton-23xZ25Q2.js";import"./Checkbox-Dz-CobTI.js";import"./useValueChanged-BK-w6RqQ.js";import"./CollapsiblePanel-CopIOFuI.js";import"./MultiColumnSortDialog-BZjrzObQ.js";import"./MenuTrigger-BPO1dH_z.js";import"./CompositeItem-Ond9knTH.js";import"./ToolbarRootContext-CLYVvxH8.js";import"./getDisabledMountTransitionStyles-D4i8pPNj.js";import"./getPseudoElementBounds-Cbzb4WBf.js";import"./chevron-down-1BEbhpzA.js";import"./index-DBQej_XT.js";import"./error-BZHgnJR4.js";import"./BaseCbacBanner-CcToPE2i.js";import"./makeExternalStore-DcV0xPVd.js";import"./Tooltip-B4XteE65.js";import"./PopoverPopup-DNp54wST.js";import"./debounce-CjaLM3Rn.js";import"./useOsdkClient-BfVtNRTC.js";import"./tick-C_vFiyHk.js";import"./DropdownField-v3cEN56r.js";import"./isEqual-Baat9Vrc.js";import"./withOsdkMetrics-D_eGSjjb.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:a=>e.jsx("div",{style:{height:480},children:e.jsx(i,{...a})})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const nr=["MarkingColumns"];export{r as MarkingColumns,nr as __namedExportsOrder,or as default};
