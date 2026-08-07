import{f as p,j as e}from"./iframe-D50gvACc.js";import{O as i}from"./object-table-ZrlfaP7L.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-m4a9UOSi.js";import"./Table-B6t6wwW-.js";import"./index-D9W_tl0t.js";import"./Dialog-CkVl3aVU.js";import"./cross-Pq5KldeO.js";import"./svgIconContainer-CrMVLaIb.js";import"./useBaseUiId-B4CrM7Z9.js";import"./InternalBackdrop-C90kG2yo.js";import"./composite-ZZ8bIc9H.js";import"./index-DV6IgZCx.js";import"./index-r25c1lQA.js";import"./index-DkDBiS-l.js";import"./useEventCallback-DQIC9jeP.js";import"./SkeletonBar-COAj0VN9.js";import"./LoadingCell-CFVOg4i3.js";import"./ColumnConfigDialog-C2En9dmD.js";import"./DraggableList-cBrulBDd.js";import"./search-B-iaR71s.js";import"./Input-BVlUigg9.js";import"./useControlled-DhIeaHMy.js";import"./isEqual-DC3R2B__.js";import"./isObject-BKu_NypX.js";import"./Button-Cc_XGaKn.js";import"./ActionButton-BnBWU7b6.js";import"./Checkbox-D0iA7QiN.js";import"./useValueChanged-Bv1-7XTv.js";import"./CollapsiblePanel-BK7f2JiZ.js";import"./MultiColumnSortDialog-Cu2Su_pp.js";import"./MenuTrigger-CPoMb3K-.js";import"./CompositeItem-nz8C8OlV.js";import"./ToolbarRootContext-Bo9_3IT0.js";import"./getDisabledMountTransitionStyles-CjBbMdti.js";import"./getPseudoElementBounds-CRj6P487.js";import"./chevron-down-Bre7sq7M.js";import"./index-CvJL4ig_.js";import"./error-D_eBDVCi.js";import"./BaseCbacBanner-D4hPwZ4m.js";import"./makeExternalStore-DAih4Bbz.js";import"./Tooltip-DofsflHR.js";import"./PopoverPopup-C7sk1G4a.js";import"./toNumber-CmflZWAm.js";import"./useOsdkClient-suy4OVOq.js";import"./tick-BIdy8k4j.js";import"./DropdownField-CR50LWxf.js";import"./withOsdkMetrics-BboHIQkZ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
