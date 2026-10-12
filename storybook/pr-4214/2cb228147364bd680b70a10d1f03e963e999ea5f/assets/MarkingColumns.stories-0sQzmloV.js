import{f as p,j as e}from"./iframe-Ch9GCQZw.js";import{O as i}from"./object-table-udIH3ti7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DnJKIcik.js";import"./Table-BO8sOs9i.js";import"./index-BWo0Chvm.js";import"./Dialog-Cti3TihL.js";import"./cross-BBG8uB8A.js";import"./svgIconContainer-DaQYNeFs.js";import"./useBaseUiId-BHSh6ZdF.js";import"./InternalBackdrop-DiQHfJed.js";import"./composite-B_lrLvaS.js";import"./index-CoyQ9qTH.js";import"./index-DpdzW1OH.js";import"./index-CooRRF-s.js";import"./useEventCallback-BmWtV1Ho.js";import"./SkeletonBar-Df6Ulzih.js";import"./LoadingCell-CmRzlKg4.js";import"./ColumnConfigDialog-BpaIJfKX.js";import"./DraggableList-Db-hzNij.js";import"./search-Bgjfk80F.js";import"./Input-M42Jtpmt.js";import"./useControlled-DlKs0eKw.js";import"./Button-lGY5omo3.js";import"./small-cross-Avc7MGqG.js";import"./ActionButton-Cb3Wx3py.js";import"./Checkbox-Bk0OPOIj.js";import"./useValueChanged-DuDVOcc4.js";import"./CollapsiblePanel-BXjVu9cP.js";import"./MultiColumnSortDialog-eX_F_Wyx.js";import"./MenuTrigger-D-ZULnhu.js";import"./CompositeItem-lOcuUhYq.js";import"./ToolbarRootContext-CxoySA_i.js";import"./getDisabledMountTransitionStyles-BRB-pv4J.js";import"./getPseudoElementBounds-DIP85sgc.js";import"./chevron-down-D219skL8.js";import"./index-BPwpWSia.js";import"./error-CMZUpiIv.js";import"./BaseCbacBanner-Bn0YyQ_S.js";import"./makeExternalStore-CXGYFkuo.js";import"./Tooltip-DC42mvHN.js";import"./PopoverPopup-C3k9he2s.js";import"./debounce-CoINGggm.js";import"./useOsdkClient-CbQE4lpc.js";import"./tick-n5pxQxar.js";import"./DropdownField-BkydTfoJ.js";import"./isEqual-DE8dU3SQ.js";import"./withOsdkMetrics-DaboQw0b.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
