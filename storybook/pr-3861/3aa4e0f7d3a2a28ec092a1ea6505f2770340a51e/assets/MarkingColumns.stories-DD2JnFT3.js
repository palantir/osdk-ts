import{f as p,j as e}from"./iframe-JhP61fmQ.js";import{O as i}from"./object-table-BJFagCC_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dv4AHPyi.js";import"./Table-B7LI-gFh.js";import"./index-BSmeSe50.js";import"./Dialog-Cg45JvOL.js";import"./cross-Dsbhsz94.js";import"./svgIconContainer-DKp8J6V9.js";import"./useBaseUiId-CA99nDKM.js";import"./InternalBackdrop-C5yqQ4th.js";import"./composite-BB4dZRYR.js";import"./index-D3ENcNCA.js";import"./index-hdo2lGgd.js";import"./index-D7wU48Sj.js";import"./useEventCallback-DZNv6pry.js";import"./SkeletonBar-Dhm6G2dC.js";import"./LoadingCell-BGp_Bbyh.js";import"./ColumnConfigDialog-W0KM4Iuw.js";import"./DraggableList-BHKYfhCE.js";import"./search-CT7W-ise.js";import"./Input-CRfOnocM.js";import"./useControlled-CmxJ51VA.js";import"./Button-CndCZNKo.js";import"./small-cross-oBgym-zX.js";import"./ActionButton-qgx9p82l.js";import"./Checkbox-DPg92fgI.js";import"./useValueChanged-CkObsYLU.js";import"./CollapsiblePanel-AJl5CmxO.js";import"./MultiColumnSortDialog-CKF6fxNt.js";import"./MenuTrigger-8q4vQbZo.js";import"./CompositeItem-9QryHf4D.js";import"./ToolbarRootContext-D0sVvk8L.js";import"./getDisabledMountTransitionStyles-Ckk4q5Pv.js";import"./getPseudoElementBounds-B6I1n0Dl.js";import"./chevron-down-B0H-_dR_.js";import"./index-DkeojneP.js";import"./error-Cz6c6olR.js";import"./BaseCbacBanner-PkI4v1kZ.js";import"./makeExternalStore-CSQl7Sbm.js";import"./Tooltip-CmSYJPe_.js";import"./PopoverPopup-CA9gw9sj.js";import"./debounce-Bze7pKAd.js";import"./useOsdkClient-DvwuNmgk.js";import"./tick-CP7Ao593.js";import"./DropdownField-DhCekDmi.js";import"./isEqual-BookI4Nh.js";import"./withOsdkMetrics-BFR4d_uj.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
