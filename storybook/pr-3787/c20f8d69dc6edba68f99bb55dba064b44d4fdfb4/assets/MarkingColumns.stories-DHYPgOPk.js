import{f as p,j as e}from"./iframe-DBDiaCFH.js";import{O as i}from"./object-table-DzPjZ5wA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CWzIkJz_.js";import"./Table-BKuVdOeS.js";import"./index-D_Q-x2L7.js";import"./Dialog-TVzYgLAf.js";import"./cross-CgXQH7_j.js";import"./svgIconContainer-6ctrVKh_.js";import"./useBaseUiId-DgDIOl-3.js";import"./InternalBackdrop-CBuZjigt.js";import"./composite-CjFrvZji.js";import"./index-BMfgUa25.js";import"./index-B5wN7D3f.js";import"./index-Dw3yDBgP.js";import"./useEventCallback-CCU0ou4a.js";import"./SkeletonBar-BIWH6fja.js";import"./LoadingCell-CI5ABUAv.js";import"./ColumnConfigDialog-CUMGYbNI.js";import"./DraggableList-CCHb2Foi.js";import"./search-CyOIbSz8.js";import"./Input-DKUt-MlO.js";import"./useControlled-BpXAkJvi.js";import"./isEqual-CMZMOgMY.js";import"./isObject-DqQC86dg.js";import"./Button-pSxneB8s.js";import"./ActionButton-CctFmRuO.js";import"./Checkbox-CKac-IxQ.js";import"./useValueChanged-CWt7t3qS.js";import"./CollapsiblePanel-BbNVGzEc.js";import"./MultiColumnSortDialog-DxxaaEbK.js";import"./MenuTrigger-BpWfF_OZ.js";import"./CompositeItem-B5nUuPn8.js";import"./ToolbarRootContext-A98l2Fo-.js";import"./getDisabledMountTransitionStyles-cV85HYgT.js";import"./getPseudoElementBounds-B5mUW0aI.js";import"./chevron-down-Ce9XSsNp.js";import"./index-Dfh84t6i.js";import"./error-CW5BzoP2.js";import"./BaseCbacBanner-CUK3Clcg.js";import"./makeExternalStore-BzqUGqFb.js";import"./Tooltip-CLt9Lwfx.js";import"./PopoverPopup-CmEuBpr5.js";import"./toNumber-CCQvBWWu.js";import"./useOsdkClient-CDjN6C8U.js";import"./tick-Cvhdnzky.js";import"./DropdownField-BCHUjyWz.js";import"./withOsdkMetrics-CD41Q7Nf.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
