import{f as p,j as e}from"./iframe-D_WpdUHL.js";import{O as i}from"./object-table-kllJGXjw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BfbLhjw5.js";import"./Table-1fsqVHtg.js";import"./index-CZE7Riyb.js";import"./Dialog-DgfJI68m.js";import"./cross-CvDy6iFc.js";import"./svgIconContainer-CBQMj0qb.js";import"./useBaseUiId-CTUJE0Sx.js";import"./InternalBackdrop-YtJWzUwb.js";import"./composite-CC5HrOOE.js";import"./index-BmV5pGaZ.js";import"./index-CvQQbIo-.js";import"./index-D1vvkKN2.js";import"./useEventCallback-DWrs0j0M.js";import"./SkeletonBar-B89WeM2h.js";import"./LoadingCell-BE6ispjy.js";import"./ColumnConfigDialog-veCJ1eMU.js";import"./DraggableList-C2Br_rsW.js";import"./search-N03HR__x.js";import"./Input-DIOuBl2R.js";import"./useControlled-Mrcysr82.js";import"./Button-DJB9EV9F.js";import"./small-cross-wSfax76M.js";import"./ActionButton-DfWIAF9R.js";import"./Checkbox-BiQ39D9A.js";import"./useValueChanged-DUe6FFiE.js";import"./CollapsiblePanel-CWxv4vq_.js";import"./MultiColumnSortDialog-BtKXIU3H.js";import"./MenuTrigger-CO_wZNdS.js";import"./CompositeItem-515r1Apy.js";import"./ToolbarRootContext-DsstPgFG.js";import"./getDisabledMountTransitionStyles-DiSs_8Nu.js";import"./getPseudoElementBounds-CHMLBxAW.js";import"./chevron-down-CDMlXncd.js";import"./index-aaeJHi0G.js";import"./error-DK46kd3k.js";import"./BaseCbacBanner-D2ZdXYVv.js";import"./makeExternalStore-DRPBrMWd.js";import"./Tooltip-CBK5IfeG.js";import"./PopoverPopup-JNywrunc.js";import"./debounce-SIPxKEJx.js";import"./useOsdkClient-Cu_yIzUf.js";import"./tick-DZdrjQ9O.js";import"./DropdownField-Ce2ZxPcD.js";import"./isEqual-DiME9bkD.js";import"./withOsdkMetrics-ICzHztvp.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
