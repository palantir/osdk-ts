import{f as p,j as e}from"./iframe-B7aJzwbo.js";import{O as i}from"./object-table-BA38ri4w.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-eRVNIb5p.js";import"./Table-DHAUBTfV.js";import"./index-RdZvG0OW.js";import"./Dialog-Dc6kQRcA.js";import"./cross-B1O6ebQi.js";import"./svgIconContainer-CdK9JNQh.js";import"./useBaseUiId-CkpX5NB7.js";import"./InternalBackdrop-CCGHrTok.js";import"./composite-HBnNRj0V.js";import"./index-8RrkNowe.js";import"./index-CkeudptZ.js";import"./index-7YIR26jv.js";import"./useEventCallback-BnLqpuJa.js";import"./SkeletonBar-C0OTRwFB.js";import"./LoadingCell-DnbsiJg3.js";import"./ColumnConfigDialog-CB497VjP.js";import"./DraggableList-B8mPrhwS.js";import"./search-CZmCb7y8.js";import"./Input-qBFcNfHq.js";import"./useControlled-BukasUFK.js";import"./Button-C-woLY16.js";import"./small-cross-CNtYeUul.js";import"./ActionButton-DUUDtffd.js";import"./Checkbox-CPEg9uHI.js";import"./useValueChanged-C6TaqKGn.js";import"./CollapsiblePanel-DOUntJrC.js";import"./MultiColumnSortDialog-a30AKw6B.js";import"./MenuTrigger-DCPrp2MJ.js";import"./CompositeItem-D0hFRJVg.js";import"./ToolbarRootContext-NP1s66to.js";import"./getDisabledMountTransitionStyles-zUIg4MN2.js";import"./getPseudoElementBounds-CvilJ6ol.js";import"./chevron-down-BK8JqzlO.js";import"./index-DALXba2W.js";import"./error-CWUTjlhY.js";import"./BaseCbacBanner-5DfHjm3U.js";import"./makeExternalStore--7xxm-Xg.js";import"./Tooltip-C9jwtRtJ.js";import"./PopoverPopup-DN9sGOVC.js";import"./debounce-B7x7S7rs.js";import"./useOsdkClient-CeMWOo2K.js";import"./tick-BbAB870P.js";import"./DropdownField-DAAdN4xL.js";import"./isEqual-D-93a5AU.js";import"./withOsdkMetrics-4AR2Wafq.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
