import{f as p,j as e}from"./iframe-JVFEa_gL.js";import{O as i}from"./object-table-DjLnvFaC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-7NlBF8sB.js";import"./Table-ptEDewrl.js";import"./index-dYientEh.js";import"./Dialog-CPFG7ghe.js";import"./cross-DgijNux0.js";import"./svgIconContainer-TEcc7c63.js";import"./useBaseUiId-ReaL4_FG.js";import"./InternalBackdrop-DHgZVC6t.js";import"./composite-sl0dwwdF.js";import"./index-D86khk7q.js";import"./index-B6cRgO_Y.js";import"./index-BrfqrcDx.js";import"./useEventCallback-XJXzlXeW.js";import"./SkeletonBar-Bb8Er01q.js";import"./LoadingCell-QEbHo0-p.js";import"./ColumnConfigDialog-oV53X4cv.js";import"./DraggableList-BJcefKCs.js";import"./search-D0pHKG36.js";import"./Input-sYxZrQly.js";import"./useControlled-BaqKUlJs.js";import"./isEqual-DZ0oJfI5.js";import"./isObject-Dybw4jAX.js";import"./Button-C8Wh4CSL.js";import"./ActionButton-C8W2HlOU.js";import"./Checkbox-GP522iNw.js";import"./useValueChanged-BzEtZmyj.js";import"./CollapsiblePanel-pEUBO9rI.js";import"./MultiColumnSortDialog-dTdi6G5s.js";import"./MenuTrigger-BIbsEWxh.js";import"./CompositeItem-DQPtIbAf.js";import"./ToolbarRootContext-CMeOM6rz.js";import"./getDisabledMountTransitionStyles-C4dnBn6D.js";import"./getPseudoElementBounds-CYLN0DqF.js";import"./chevron-down-CShsdakr.js";import"./index-BEhdqmzr.js";import"./error-Yv4CRBQm.js";import"./BaseCbacBanner-PDFVvgNN.js";import"./makeExternalStore-CrqO0EwC.js";import"./Tooltip-LQIoBtri.js";import"./PopoverPopup-CqAsHpk5.js";import"./toNumber-GK1Goy51.js";import"./useOsdkClient-BJIKWEg0.js";import"./tick-Mu33K-KF.js";import"./DropdownField-yxgQO7e_.js";import"./withOsdkMetrics-Bh6l5zNU.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
