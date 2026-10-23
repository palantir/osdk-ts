import{f as p,j as e}from"./iframe-Bfa633nI.js";import{O as i}from"./object-table-CSJb6QQI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-S8ArRewN.js";import"./Table-R1_6S3Bc.js";import"./index-CAFX3a2o.js";import"./Dialog-B11A-NQW.js";import"./cross-CO8lPM-Y.js";import"./svgIconContainer-CMg2uk3-.js";import"./useBaseUiId-DkL2EsGI.js";import"./InternalBackdrop-BkK8ufDF.js";import"./composite-MyhD4oE7.js";import"./index-CyqiMZNC.js";import"./index-g_La0Psk.js";import"./index-D18CgaCd.js";import"./useEventCallback-DqyAn3HD.js";import"./SkeletonBar-Q9lR3jGv.js";import"./LoadingCell-CukCo_Qp.js";import"./ColumnConfigDialog-D1KFMTQ9.js";import"./DraggableList--tFdoGM9.js";import"./search-DBXxF15B.js";import"./Input-vSvt0OGa.js";import"./useControlled-DE-SX_fd.js";import"./Button-bQTkGamX.js";import"./small-cross-dpPEHUzg.js";import"./ActionButton-DjVRKWVw.js";import"./Checkbox-D8QHegc2.js";import"./useValueChanged-BMAglr7j.js";import"./CollapsiblePanel-CgpMYvLN.js";import"./MultiColumnSortDialog-Cq87ZCTh.js";import"./MenuTrigger-bATh7p8G.js";import"./CompositeItem-BHvcBU4g.js";import"./ToolbarRootContext-rfZwmAj4.js";import"./getDisabledMountTransitionStyles-CdY-VY1I.js";import"./getPseudoElementBounds-DASAzYI8.js";import"./chevron-down-sNl64qaM.js";import"./index-BnocMrsR.js";import"./error-jmH2Pe7J.js";import"./BaseCbacBanner-WLoGuysJ.js";import"./makeExternalStore-D8-WR8za.js";import"./Tooltip-CGVIqFa_.js";import"./PopoverPopup-Bli7SJMu.js";import"./debounce-UGU4ubXF.js";import"./useOsdkClient-yvB3K87Q.js";import"./tick-BpRcty2P.js";import"./DropdownField-DBLuDlNB.js";import"./isEqual-DrwA24xd.js";import"./withOsdkMetrics-BKztbHSk.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
