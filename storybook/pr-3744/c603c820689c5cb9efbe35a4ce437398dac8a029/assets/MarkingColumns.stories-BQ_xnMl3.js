import{f as p,j as e}from"./iframe-ybi8g-MN.js";import{O as i}from"./object-table-Coc7uQTE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DoLTJlP_.js";import"./Table-RjJBlkAj.js";import"./index-DJSt2BGS.js";import"./Dialog-ecmTP9eK.js";import"./cross-zJrUwWQA.js";import"./svgIconContainer-BtM2uwIm.js";import"./useBaseUiId-gMA3Mt2i.js";import"./InternalBackdrop-DA3MF4OR.js";import"./composite-i3hN0MmL.js";import"./index-CqKY6TZp.js";import"./index-CTFarFys.js";import"./index-CSSPZI8i.js";import"./useEventCallback-CNnEkkjj.js";import"./SkeletonBar-DCnbTo2S.js";import"./LoadingCell-C7AG9CdZ.js";import"./ColumnConfigDialog-CO4LCoLQ.js";import"./DraggableList-BApaL5Cj.js";import"./search-BEDbo01I.js";import"./Input-WN1fL0hc.js";import"./useControlled-D4b75tUE.js";import"./isEqual-yw6Nrj7A.js";import"./isObject-BwblvIgM.js";import"./Button-CTtLrNoj.js";import"./ActionButton-BDp-zwWA.js";import"./Checkbox-B3QmkPwK.js";import"./useValueChanged-DN7PoCRc.js";import"./CollapsiblePanel-D-Ucybfz.js";import"./MultiColumnSortDialog-Ck4Z4ram.js";import"./MenuTrigger-BMf5J6LT.js";import"./CompositeItem-CZi4achz.js";import"./ToolbarRootContext-CbOW3W23.js";import"./getDisabledMountTransitionStyles-B3Fsx6x5.js";import"./getPseudoElementBounds-Cuw1SahM.js";import"./chevron-down-Cr7agNhX.js";import"./index-DSQ7ED-I.js";import"./error-CFSUGaoq.js";import"./BaseCbacBanner-DHivN-4C.js";import"./makeExternalStore-GjJO6b-K.js";import"./Tooltip-CiBRsYmr.js";import"./PopoverPopup-CQJRcF5L.js";import"./toNumber-BdSYPBS3.js";import"./useOsdkClient-OR5VNbeG.js";import"./tick-D_tITafX.js";import"./DropdownField-C3htdtz2.js";import"./withOsdkMetrics-gSO0i17z.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
