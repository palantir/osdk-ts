import{f as p,j as e}from"./iframe-CEXqwKDo.js";import{O as i}from"./object-table-x_chLxXQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DpdtVnp3.js";import"./Table-DgK313bN.js";import"./index-DJnSicRq.js";import"./Dialog-jxxWpWJH.js";import"./cross-I1-y4ayJ.js";import"./svgIconContainer-BLXhb9q0.js";import"./useBaseUiId-CWMGkfoD.js";import"./InternalBackdrop-DP_mDCtv.js";import"./composite-DJSIkC4h.js";import"./index-D2peK4FA.js";import"./index-DEmj-frH.js";import"./index-hvp9_h9c.js";import"./useEventCallback-DLzUPS9b.js";import"./SkeletonBar-CXJWrpg-.js";import"./LoadingCell-DsnzFvaV.js";import"./ColumnConfigDialog-xAksObsf.js";import"./DraggableList-DR9qtSRV.js";import"./search-DS8naRzK.js";import"./Input-C1mfdO-x.js";import"./useControlled-21P8hLcZ.js";import"./isEqual-B4DsWaQb.js";import"./isObject-DVDQHZSO.js";import"./Button-MZyF5CTL.js";import"./ActionButton-BxjwSRoH.js";import"./Checkbox-Cju0vHy8.js";import"./useValueChanged-ChWeTpFp.js";import"./CollapsiblePanel-CfwG2N-H.js";import"./MultiColumnSortDialog-DulxSL_i.js";import"./MenuTrigger-qPfJmrQn.js";import"./CompositeItem-M1EwA00W.js";import"./ToolbarRootContext-BT8GwrHL.js";import"./getDisabledMountTransitionStyles-CmRzzEKC.js";import"./getPseudoElementBounds-CnRAPfrn.js";import"./chevron-down-DGS9RK0n.js";import"./index-BlHia6Sj.js";import"./error-3ZtiZkhO.js";import"./BaseCbacBanner-pBmoNwBo.js";import"./makeExternalStore-DrF82NRc.js";import"./Tooltip-P7-drKpN.js";import"./PopoverPopup-jaIOrC4o.js";import"./toNumber-Bw9trI7C.js";import"./useOsdkClient-2LcbhRGb.js";import"./tick-CUCnjPHY.js";import"./DropdownField-88QghriF.js";import"./withOsdkMetrics--K3s2hUl.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
