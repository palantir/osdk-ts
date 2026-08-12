import{f as p,j as e}from"./iframe-V5rE8KDw.js";import{O as i}from"./object-table-B0vhVLrL.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DknuiWi_.js";import"./Table-LeSFZzIb.js";import"./index-_FCtaiM3.js";import"./Dialog-MwV9aD72.js";import"./cross-C2n7IRZQ.js";import"./svgIconContainer-AJeYbeFM.js";import"./useBaseUiId-CH-J5SI4.js";import"./InternalBackdrop-DfHmuXky.js";import"./composite-D5YL1ztv.js";import"./index-2F7yM2i8.js";import"./index-CXP_H6_U.js";import"./index-BMRzhVlf.js";import"./useEventCallback-B8UNsOgz.js";import"./SkeletonBar-C8ZaszP9.js";import"./LoadingCell-D6o4_Xd9.js";import"./ColumnConfigDialog-D1UEGgsU.js";import"./DraggableList-C0rszgRW.js";import"./search-4cA--3cr.js";import"./Input-BHWzg8mQ.js";import"./useControlled-DSRawVMq.js";import"./isEqual-BQ7BWabA.js";import"./isObject-Cr_5mWaW.js";import"./Button-us1Dbg1o.js";import"./ActionButton-BtERxzck.js";import"./Checkbox-RO12Xd4C.js";import"./useValueChanged-WBLhf4kP.js";import"./CollapsiblePanel-BcGhh1Xs.js";import"./MultiColumnSortDialog-C1tRvzoR.js";import"./MenuTrigger-DgeuS-D5.js";import"./CompositeItem-BqWlN0Kd.js";import"./ToolbarRootContext-BPNNJjel.js";import"./getDisabledMountTransitionStyles-BjWSAVGN.js";import"./getPseudoElementBounds-CTv9E0wh.js";import"./chevron-down-C5bbVy-V.js";import"./index-BPWQliv4.js";import"./error-BkdEf2d-.js";import"./BaseCbacBanner-DaXaqP1v.js";import"./makeExternalStore-l02CrJa9.js";import"./Tooltip-BcpdDlzg.js";import"./PopoverPopup-U7-gMqVE.js";import"./toNumber-GcmD5gG2.js";import"./useOsdkClient-QxsObIPr.js";import"./tick-CBRotIc5.js";import"./DropdownField-D2DZIVM8.js";import"./withOsdkMetrics-Fp5zwAOD.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
