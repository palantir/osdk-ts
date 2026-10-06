import{f as p,j as e}from"./iframe-DVVKVAtA.js";import{O as i}from"./object-table-xWTmSs7V.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CiYdp8rh.js";import"./Table-C78I-7LN.js";import"./index-B7XCjnpr.js";import"./Dialog-BDTkA2ep.js";import"./cross-CjD5OAho.js";import"./svgIconContainer-CP95Aflu.js";import"./useBaseUiId-INTXcr8e.js";import"./InternalBackdrop-j5nDH9EK.js";import"./composite-BRLZiHQF.js";import"./index-ClEpMZhJ.js";import"./index-CWl4XwMi.js";import"./index-CX83dS7O.js";import"./useEventCallback-DbYW2vCo.js";import"./SkeletonBar-FP5PV7dU.js";import"./LoadingCell-BhcjrHHe.js";import"./ColumnConfigDialog-DSL6FH2C.js";import"./DraggableList-EfHVIhPv.js";import"./search-DlCF-cVw.js";import"./Input-CmJfNxcc.js";import"./useControlled-D1zZrG1z.js";import"./Button-Ckc4gi75.js";import"./small-cross-DSgENzFy.js";import"./ActionButton-DacVQn36.js";import"./Checkbox-CKZucCnm.js";import"./useValueChanged-Den7cLID.js";import"./CollapsiblePanel-Bndv3s1q.js";import"./MultiColumnSortDialog-CfNZTqlg.js";import"./MenuTrigger-CdsAS-kY.js";import"./CompositeItem-D9SUAP6f.js";import"./ToolbarRootContext-C9Nw85K8.js";import"./getDisabledMountTransitionStyles-t3inJXqq.js";import"./getPseudoElementBounds-3KQzg8f9.js";import"./chevron-down-D2RihN-5.js";import"./index-U6QV7dK2.js";import"./error-DNT5rqeV.js";import"./BaseCbacBanner-DpJOKB-n.js";import"./makeExternalStore-BOpkq9BC.js";import"./Tooltip-Cbb54XuP.js";import"./PopoverPopup-Ca-inkaL.js";import"./debounce-D2AF5q98.js";import"./useOsdkClient-CYarTsyR.js";import"./tick-Br1MB05S.js";import"./DropdownField-BqTmBzOD.js";import"./isEqual-BkpzX1vQ.js";import"./withOsdkMetrics-DnEy29Gp.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
