import{f as p,j as e}from"./iframe-BWfq1Ita.js";import{O as i}from"./object-table-lRJ1r0PT.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cez3EkKO.js";import"./Table-h_h1Pdj1.js";import"./index-CsmCBiFc.js";import"./Dialog-D0flTu-Q.js";import"./cross-B2opFBMX.js";import"./svgIconContainer-3Xe0sM70.js";import"./useBaseUiId-AQZerCPK.js";import"./InternalBackdrop-BU6CR9JH.js";import"./composite-BxLIdtja.js";import"./index-Ct2QTZpq.js";import"./index-ZI1bO9GZ.js";import"./index-DzTj4bDT.js";import"./useEventCallback-D1-lsQmd.js";import"./SkeletonBar-DKgRYbiF.js";import"./LoadingCell-Ca170tnn.js";import"./ColumnConfigDialog-D_PyS5d8.js";import"./DraggableList-D6jKmbrg.js";import"./search-BJDwKHsZ.js";import"./Input-DsXOqmoY.js";import"./useControlled-zsZ0Gi2e.js";import"./Button-CDzVT-19.js";import"./small-cross-BQAUdHVP.js";import"./ActionButton-DTQZUzqS.js";import"./Checkbox-pOBDprj4.js";import"./useValueChanged-DcWOn6Em.js";import"./CollapsiblePanel-CRz6BZMc.js";import"./MultiColumnSortDialog-CzoSa3-D.js";import"./MenuTrigger-C1ubLXg7.js";import"./CompositeItem-CT28f8sD.js";import"./ToolbarRootContext-BZs-vXaE.js";import"./getDisabledMountTransitionStyles-BZXhkuBl.js";import"./getPseudoElementBounds-vhJ9Xo_I.js";import"./chevron-down-D-1SOefz.js";import"./index-DKbeeSxy.js";import"./error-D4A2zaxG.js";import"./BaseCbacBanner-DJr1V5NM.js";import"./makeExternalStore-ByJ1Qj-8.js";import"./Tooltip-CDrLWobn.js";import"./PopoverPopup-uC42OBYn.js";import"./debounce-BMBkBKqd.js";import"./useOsdkClient-DUSv4hnn.js";import"./tick-DUbrHsOa.js";import"./DropdownField-Cxy9XoQ6.js";import"./isEqual-D4nsmfx_.js";import"./withOsdkMetrics-CVeraRoA.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
