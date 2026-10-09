import{f as p,j as e}from"./iframe-Cul2E1vG.js";import{O as i}from"./object-table-CIO2ioDr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper--6M4Khrx.js";import"./Table-Bum8c-iM.js";import"./index-Bn5VDq5b.js";import"./Dialog-DlflpEpN.js";import"./cross-C6zh1HjN.js";import"./svgIconContainer-mVJAcMp8.js";import"./useBaseUiId-BQIQ8jck.js";import"./InternalBackdrop-m5F5-2dG.js";import"./composite-SNvyYtRl.js";import"./index-cnCRVpDv.js";import"./index-B39_Zfhs.js";import"./index-BgP6GmOx.js";import"./useEventCallback-DWZk488X.js";import"./SkeletonBar-XecFs5pz.js";import"./LoadingCell-TNVaOATH.js";import"./ColumnConfigDialog-DOH9iw-n.js";import"./DraggableList-CHj5NpTN.js";import"./search-BwSeGY7Y.js";import"./Input-DRePQ-W6.js";import"./useControlled-CzFr7QRD.js";import"./Button-oDRXfShn.js";import"./small-cross-DLuZoUhq.js";import"./ActionButton-BcIcAh2z.js";import"./Checkbox-DVjhvMN4.js";import"./useValueChanged-B-W2cV9q.js";import"./CollapsiblePanel-BalN1idY.js";import"./MultiColumnSortDialog-CFEpc927.js";import"./MenuTrigger-KvGWfiFl.js";import"./CompositeItem-CvRXWH1T.js";import"./ToolbarRootContext-3DRfEU0Q.js";import"./getDisabledMountTransitionStyles-D8gt5JL7.js";import"./getPseudoElementBounds-Bzvith0Z.js";import"./chevron-down-zZ58BLda.js";import"./index-C8CW-UMA.js";import"./error-Bp_j0tyg.js";import"./BaseCbacBanner-DueaaImF.js";import"./makeExternalStore-Dw-8aD8B.js";import"./Tooltip-DXd-c-BV.js";import"./PopoverPopup-DOy0S3uG.js";import"./debounce-DapI4ZKL.js";import"./useOsdkClient-DJKFKBMb.js";import"./tick-CiTQftSD.js";import"./DropdownField-BbPTQMjY.js";import"./isEqual-Cm_OyyYX.js";import"./withOsdkMetrics-Cv3w3vr0.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
