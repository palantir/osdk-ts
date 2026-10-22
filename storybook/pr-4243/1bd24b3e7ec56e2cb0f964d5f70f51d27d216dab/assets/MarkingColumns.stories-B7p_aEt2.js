import{f as p,j as e}from"./iframe-tNZJ_yts.js";import{O as i}from"./object-table-CvQDVRcw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cs-zZmWk.js";import"./Table-DeKYMKeJ.js";import"./index-GtjnSSRw.js";import"./Dialog-staNvNsK.js";import"./cross-ocv2rHpU.js";import"./svgIconContainer-Cg9fo9q3.js";import"./useBaseUiId-CfzXRAwD.js";import"./InternalBackdrop-jubCrN1B.js";import"./composite-BiyNCJEr.js";import"./index-B8odcJPp.js";import"./index-BI50CR4r.js";import"./index-9T6sqMOx.js";import"./useEventCallback-D6FBSsJz.js";import"./SkeletonBar-sb4uPQ8b.js";import"./LoadingCell-I-_CFKV7.js";import"./ColumnConfigDialog-Cc56nC7O.js";import"./DraggableList-DH-viUUC.js";import"./search-380Wfs82.js";import"./Input-Bd3UykWw.js";import"./useControlled-BcyW94WW.js";import"./Button-q3PQJ8YO.js";import"./small-cross-C9dMCIc4.js";import"./ActionButton-BB8RqWff.js";import"./Checkbox-Dp8n9WYf.js";import"./useValueChanged-D4hqIs_l.js";import"./CollapsiblePanel-BvhEme4S.js";import"./MultiColumnSortDialog-DeJrbkZy.js";import"./MenuTrigger-8vrT9vsX.js";import"./CompositeItem-DK62Ja5z.js";import"./ToolbarRootContext-Bgv8jhAk.js";import"./getDisabledMountTransitionStyles-Wli5EKop.js";import"./getPseudoElementBounds-B-GSVRKS.js";import"./chevron-down-B8TK3y2h.js";import"./index-ZWb-P89H.js";import"./error-DA-ZYNwq.js";import"./BaseCbacBanner-VH61pZkc.js";import"./makeExternalStore-BGIMf0MS.js";import"./Tooltip-DwSNZTrr.js";import"./PopoverPopup-BsY6KTlb.js";import"./debounce-DkKRnBI2.js";import"./useOsdkClient-BvPv-iE2.js";import"./tick-B76tZgIx.js";import"./DropdownField-Bn2CvIkr.js";import"./isEqual-Be3s4PRI.js";import"./withOsdkMetrics-CxocJMpO.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
