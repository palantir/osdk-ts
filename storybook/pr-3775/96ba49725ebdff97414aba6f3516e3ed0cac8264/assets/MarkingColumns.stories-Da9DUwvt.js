import{f as p,j as e}from"./iframe-aCq_g3w6.js";import{O as i}from"./object-table-CaKMIAxT.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-UUSxO84G.js";import"./Table-BhZHm77h.js";import"./index-CSsMTEyY.js";import"./Dialog-Bk6m_fk0.js";import"./cross-BrgA3kIi.js";import"./svgIconContainer-BOv-jsG1.js";import"./useBaseUiId-BNG6DLH2.js";import"./InternalBackdrop-DFFqIJam.js";import"./composite-BGN3oFgJ.js";import"./index-CxZEKvWq.js";import"./index-2UiSVRF4.js";import"./index-BjzHZnVv.js";import"./useEventCallback-DqEZkPls.js";import"./SkeletonBar-B_KPnLrt.js";import"./LoadingCell-CrBCJB-_.js";import"./ColumnConfigDialog-fedxKc44.js";import"./DraggableList-DOf8Psv5.js";import"./search-DwsH7dY2.js";import"./Input-KoZ5HftR.js";import"./useControlled-C35FdDTC.js";import"./isEqual-DKuKDDtE.js";import"./isObject-DU3nP88y.js";import"./Button-CSGA2Wxl.js";import"./ActionButton-CIToBB-6.js";import"./Checkbox-C8m42RSl.js";import"./useValueChanged-1Yp4y3oX.js";import"./CollapsiblePanel-BL5S39QC.js";import"./MultiColumnSortDialog--DVVYfY1.js";import"./MenuTrigger-DmbJp5Gs.js";import"./CompositeItem-OApa3E9B.js";import"./ToolbarRootContext-BzxLQKxD.js";import"./getDisabledMountTransitionStyles-Bfq6rT7W.js";import"./getPseudoElementBounds-BSxnPPYZ.js";import"./chevron-down-DUptqSW1.js";import"./index-D6Tuy83n.js";import"./error-DqgP0A5_.js";import"./BaseCbacBanner-CUGm4Hep.js";import"./makeExternalStore-B6rRcBgB.js";import"./Tooltip-BguagF7e.js";import"./PopoverPopup-owAcXcNj.js";import"./toNumber-C6mEAZk4.js";import"./useOsdkClient-DqFKaHTk.js";import"./tick-DewssbAl.js";import"./DropdownField-CHjza2Qs.js";import"./withOsdkMetrics-CqGHF823.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
