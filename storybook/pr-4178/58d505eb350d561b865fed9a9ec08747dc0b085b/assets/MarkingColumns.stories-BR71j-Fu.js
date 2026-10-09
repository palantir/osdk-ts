import{f as p,j as e}from"./iframe-YBx9KFiE.js";import{O as i}from"./object-table-Dq03DkDp.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-L6jHOpxv.js";import"./Table-opPxxMf4.js";import"./index-CgtaO5QM.js";import"./Dialog-C1I1G7vK.js";import"./cross-C3v-dhLA.js";import"./svgIconContainer-D6iAjNhU.js";import"./useBaseUiId-DlhJsTYI.js";import"./InternalBackdrop-D3r8VljM.js";import"./composite-BJEKXzZu.js";import"./index-B01ATWUm.js";import"./index-CLwqcVa2.js";import"./index-B6YErJ_s.js";import"./useEventCallback-BF1IxF5d.js";import"./SkeletonBar-SWKUARU8.js";import"./LoadingCell-B4A0sPuf.js";import"./ColumnConfigDialog-CAtn3lYZ.js";import"./DraggableList-B4bNW7cQ.js";import"./search-CuFB4Okz.js";import"./Input-YDKKpO0z.js";import"./useControlled-CH_x4H3X.js";import"./Button-CIORHkhd.js";import"./small-cross-DiaL-97l.js";import"./ActionButton-Dr3JNs2L.js";import"./Checkbox-Ck1vqVZ2.js";import"./useValueChanged-BFvWMPKM.js";import"./CollapsiblePanel-BqouLg2L.js";import"./MultiColumnSortDialog-X-RxjhTv.js";import"./MenuTrigger-LUfi-S7s.js";import"./CompositeItem-C9bwnjwV.js";import"./ToolbarRootContext-C-_578ut.js";import"./getDisabledMountTransitionStyles-BSZVA_yI.js";import"./getPseudoElementBounds-CLbdnn0u.js";import"./chevron-down-DfhavGPs.js";import"./index-N3lE_PbF.js";import"./error-CI50fd9w.js";import"./BaseCbacBanner-CjAm35ae.js";import"./makeExternalStore-Bp5v93FT.js";import"./Tooltip-C_t3RzXT.js";import"./PopoverPopup-BLviECMH.js";import"./debounce-B6PzjAEI.js";import"./useOsdkClient-DDS_VkM8.js";import"./tick-o0shge2a.js";import"./DropdownField-BmpXUboA.js";import"./isEqual-BHpWUGWR.js";import"./withOsdkMetrics-BU_fIGZP.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
