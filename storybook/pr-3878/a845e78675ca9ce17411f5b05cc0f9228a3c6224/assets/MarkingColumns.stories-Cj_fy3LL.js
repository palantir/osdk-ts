import{f as p,j as e}from"./iframe-nlmHRzbs.js";import{O as i}from"./object-table-DOQUbULy.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bb4XP1JR.js";import"./Table-Iflxq4LK.js";import"./index-BgU0BklA.js";import"./Dialog-B--HyOFO.js";import"./cross-BQ8TIcPZ.js";import"./svgIconContainer-DS8QHuIj.js";import"./useBaseUiId-BvXBgh7R.js";import"./InternalBackdrop-CEbVru8y.js";import"./composite-9JvUOFhV.js";import"./index-BBKiIpPq.js";import"./index-DrPWGN5f.js";import"./index-BvyZUx7D.js";import"./useEventCallback-DdbGqZSc.js";import"./SkeletonBar-CecNAbci.js";import"./LoadingCell-BR6nn8z5.js";import"./ColumnConfigDialog-CsSbs-RH.js";import"./DraggableList-CgQsJlL7.js";import"./search-KdHomzFH.js";import"./Input-C_WMBA0h.js";import"./useControlled-CL-2sXEB.js";import"./Button-u5u7l_L-.js";import"./small-cross-BOjbtokm.js";import"./ActionButton-DjrG6zzQ.js";import"./Checkbox-CNVwyFF7.js";import"./useValueChanged-Ct9fu7Wh.js";import"./CollapsiblePanel-CY5PmDvT.js";import"./MultiColumnSortDialog-C9_8osWy.js";import"./MenuTrigger-0I9U1fuS.js";import"./CompositeItem-DKy9HSNC.js";import"./ToolbarRootContext-C84AlWji.js";import"./getDisabledMountTransitionStyles-BPlx4jy3.js";import"./getPseudoElementBounds-CbqeOO0o.js";import"./chevron-down-DrD3cVw1.js";import"./index-B9KsoBHZ.js";import"./error-D0sD9myM.js";import"./BaseCbacBanner-rlX41YP5.js";import"./makeExternalStore-CDFtpytl.js";import"./Tooltip-h8u3LTdZ.js";import"./PopoverPopup-Cv6VjVH2.js";import"./debounce-tbCf9dd0.js";import"./useOsdkClient-upaDZFfa.js";import"./tick-jNCOjvIC.js";import"./DropdownField-CYPegbUm.js";import"./isEqual-CLpN-Ztb.js";import"./withOsdkMetrics-CYPNcnBx.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
