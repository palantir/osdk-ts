import{f as p,j as e}from"./iframe-D6wK3EAy.js";import{O as i}from"./object-table-CJQhu3fY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-9qW4f37k.js";import"./Table-CXBGIS3x.js";import"./index-C4Egst8D.js";import"./Dialog-Dc1TWSlc.js";import"./cross-DJsnF8CR.js";import"./svgIconContainer-BQ29Jrrk.js";import"./useBaseUiId-Cqe_H5Gd.js";import"./InternalBackdrop-BUrCYPsm.js";import"./composite-ITGjJkDr.js";import"./index-CaTU6vjS.js";import"./index-VMlmoRq8.js";import"./index-BT2pitud.js";import"./useEventCallback-BfW23crB.js";import"./SkeletonBar-MxpLFb1K.js";import"./LoadingCell-B2LwBLoU.js";import"./ColumnConfigDialog-DZyftQjy.js";import"./DraggableList-DLWlM7VL.js";import"./search-BHdUrAF7.js";import"./Input-D0ZybK8t.js";import"./useControlled-DDOEDrW8.js";import"./isEqual-CmvsVuZf.js";import"./isObject-BQBtOJHN.js";import"./Button-BOEdhvyt.js";import"./ActionButton-BI03wXnE.js";import"./Checkbox-CjPdw_-h.js";import"./useValueChanged-BeZW4Vsb.js";import"./CollapsiblePanel-KoDTkwo8.js";import"./MultiColumnSortDialog-COF8eH7m.js";import"./MenuTrigger-DxBIpn73.js";import"./CompositeItem-CBOlU4eU.js";import"./ToolbarRootContext-IVqSjG4F.js";import"./getDisabledMountTransitionStyles-BasdcLrs.js";import"./getPseudoElementBounds-CQdtBRvd.js";import"./chevron-down-CUkUYMVt.js";import"./index-B6SJHL1l.js";import"./error-CiM4_SXt.js";import"./BaseCbacBanner-BH0YKs-R.js";import"./makeExternalStore-CAK-_0fa.js";import"./Tooltip-xfJ6sV_6.js";import"./PopoverPopup-Bl3xjwYm.js";import"./toNumber-DK_dsH5n.js";import"./useOsdkClient-D-pULJwo.js";import"./tick-BaroVa_1.js";import"./DropdownField-DS2UrcHX.js";import"./withOsdkMetrics-n3V8zZwC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
