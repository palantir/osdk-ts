import{f as p,j as e}from"./iframe-COsBkwN-.js";import{O as i}from"./object-table-c7gyRcbU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C2KEka4g.js";import"./Table-DQ03bzYn.js";import"./index-Dzyv5lNn.js";import"./Dialog-CfEMSUqI.js";import"./cross-CWmtKzEJ.js";import"./svgIconContainer-DESpR6Na.js";import"./useBaseUiId-CrYfkKS-.js";import"./InternalBackdrop-Bluj3Mdb.js";import"./composite-N-ev52N7.js";import"./index-Ce8K8IPk.js";import"./index-pi4yE-No.js";import"./index-Rtj5Hj-2.js";import"./useEventCallback-B8p3CIl0.js";import"./SkeletonBar-Bh_PBj25.js";import"./LoadingCell-CKNPBx9p.js";import"./ColumnConfigDialog-BkGZV4g4.js";import"./DraggableList-DCFx2wmj.js";import"./search-B3yafYcI.js";import"./Input-BnxjD1st.js";import"./useControlled-OeG3im5l.js";import"./isEqual-D0rFCLts.js";import"./isObject-C_yA3jOF.js";import"./Button-9MwOUcQP.js";import"./ActionButton-D9YKaThO.js";import"./Checkbox-CQ-1wAcz.js";import"./useValueChanged-DyqDYB3r.js";import"./CollapsiblePanel-CYWA74CD.js";import"./MultiColumnSortDialog-DkGpsyqE.js";import"./MenuTrigger-DwpyTl2V.js";import"./CompositeItem-D8_4YPh_.js";import"./ToolbarRootContext-2lZchj18.js";import"./getDisabledMountTransitionStyles-Ce-q5I0h.js";import"./getPseudoElementBounds-UoxiI40Z.js";import"./chevron-down-CYND1yfl.js";import"./index-sBgXa9QS.js";import"./error-30orUfhG.js";import"./BaseCbacBanner-pRbKHM35.js";import"./makeExternalStore-BZSr_d3Q.js";import"./Tooltip-CS6x6FEa.js";import"./PopoverPopup-BdC-ViXE.js";import"./toNumber-Ct_pxQWb.js";import"./useOsdkClient-CiTMqk4D.js";import"./tick-DBOvSCxz.js";import"./DropdownField-zDQTJ1vy.js";import"./withOsdkMetrics-CkVV9LW6.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
