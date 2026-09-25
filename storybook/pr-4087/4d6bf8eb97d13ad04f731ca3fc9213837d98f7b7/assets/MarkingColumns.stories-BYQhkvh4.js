import{f as p,j as e}from"./iframe-H475fjT9.js";import{O as i}from"./object-table-C87-iO9_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-4X7ac1X_.js";import"./Table-ixsAcNNl.js";import"./index-xnZyhOap.js";import"./Dialog-CHAvArlz.js";import"./cross-Dm1NPVGS.js";import"./svgIconContainer-DRh8H81_.js";import"./useBaseUiId-D9Y7uIA_.js";import"./InternalBackdrop-BXEe3g5T.js";import"./composite-BYdl5w4l.js";import"./index-D2G91xGC.js";import"./index-2KdCkDaD.js";import"./index-BKiIIZGc.js";import"./useEventCallback-DKZ2K8mI.js";import"./SkeletonBar-DEUejCfV.js";import"./LoadingCell-C6u6YUMq.js";import"./ColumnConfigDialog-DOmML38G.js";import"./DraggableList-DHk6x8CK.js";import"./search-BeyzIhyn.js";import"./Input-CSGRdmE4.js";import"./useControlled-CTWYlqbQ.js";import"./Button-C-c_YzgP.js";import"./small-cross-CQ-8gmc_.js";import"./ActionButton-ByBqwnle.js";import"./Checkbox-BzN2X95H.js";import"./useValueChanged-D786mFUn.js";import"./CollapsiblePanel-DnbYruvy.js";import"./MultiColumnSortDialog-DQ91TkWR.js";import"./MenuTrigger-DE8c4-c-.js";import"./CompositeItem-Nblbqfxi.js";import"./ToolbarRootContext-DRktyYqF.js";import"./getDisabledMountTransitionStyles-Doqo3qWD.js";import"./getPseudoElementBounds-DKasT9kp.js";import"./chevron-down-BgkFJdjv.js";import"./index-DT4cMJml.js";import"./error-C3Cl8o9I.js";import"./BaseCbacBanner-nH6JuWGN.js";import"./makeExternalStore-DSrF5gYv.js";import"./Tooltip-DjkP-spo.js";import"./PopoverPopup-CzB6XrrJ.js";import"./debounce-CMJV0GRr.js";import"./useOsdkClient-g1QGvPXq.js";import"./tick-DvK5h6T_.js";import"./DropdownField-OZIspKIM.js";import"./isEqual-CHzg_1O3.js";import"./withOsdkMetrics-D1pGtXX8.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
