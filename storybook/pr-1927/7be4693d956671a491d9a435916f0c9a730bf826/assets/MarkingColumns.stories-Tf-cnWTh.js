import{f as p,j as e}from"./iframe-DaWek49r.js";import{O as i}from"./object-table-B-XjcBbq.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CpWLgODR.js";import"./Table-C3kjScnV.js";import"./index-7xB0j-h3.js";import"./Dialog-oZD8Leel.js";import"./cross-BTg86JZI.js";import"./svgIconContainer-BLvyKKH5.js";import"./useBaseUiId-BS0koSYJ.js";import"./InternalBackdrop-BtnFxY7R.js";import"./composite-3FCOWJk0.js";import"./index-CmmmgmWL.js";import"./index-B6v8umRH.js";import"./index-Ci53BpX5.js";import"./useEventCallback-ROl2U3Zc.js";import"./SkeletonBar-DiJ1Hvir.js";import"./LoadingCell-Cd0U2uhn.js";import"./ColumnConfigDialog-DgNXnEmf.js";import"./DraggableList-CiqeYUhd.js";import"./search-DAzvWU8V.js";import"./Input-RkKX3V5Z.js";import"./useControlled-CPSRk279.js";import"./Button-QRlJPal1.js";import"./small-cross-BIIMg4DU.js";import"./ActionButton-DaPNcgvE.js";import"./Checkbox-C1O-p1-8.js";import"./useValueChanged-BmCio-Qe.js";import"./CollapsiblePanel-DKLWDwCu.js";import"./MultiColumnSortDialog-C5iXwZRR.js";import"./MenuTrigger-ImRWkubh.js";import"./CompositeItem-C0lAIjsd.js";import"./ToolbarRootContext-B9vHR48n.js";import"./getDisabledMountTransitionStyles-Cr6AUOCj.js";import"./getPseudoElementBounds-DArBdZgv.js";import"./chevron-down-Cos6kkQA.js";import"./index-DdMC5lnj.js";import"./error-AanNsvpp.js";import"./BaseCbacBanner-f5h26H1M.js";import"./makeExternalStore-Dui8kxii.js";import"./Tooltip-D6D1ArJb.js";import"./isObject-W7GYGzhg.js";import"./debounce-DcMgEISB.js";import"./useOsdkClient-B9Apk1sW.js";import"./tick-DTzur8x4.js";import"./DropdownField-BHLcVE6g.js";import"./isEqual-DGz_SmIW.js";import"./_baseIsEqual-BQRjoz-i.js";import"./withOsdkMetrics-DPmknckC.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
