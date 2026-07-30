import{f as p,j as e}from"./iframe-BcrluB4l.js";import{O as i}from"./object-table-tTESQlTz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CMptGl2f.js";import"./Table-CQ8twf8w.js";import"./index-BPHTN-Ic.js";import"./Dialog-CcGvCVRC.js";import"./cross-CbMBUGlC.js";import"./svgIconContainer-BPAup90b.js";import"./useBaseUiId-COen3SNx.js";import"./InternalBackdrop-DZmHnGde.js";import"./composite-BL4i_Dd_.js";import"./index-DB61AMZ9.js";import"./index-DyKMSrbe.js";import"./index-BMgCDSVG.js";import"./useEventCallback-C6fFqXyE.js";import"./SkeletonBar-C-Z5HyPu.js";import"./LoadingCell-BBP0iUNs.js";import"./ColumnConfigDialog-C2xrEK7a.js";import"./DraggableList-BQmBFo1I.js";import"./search-UY8sNtzX.js";import"./Input-BWZEIjN7.js";import"./useControlled-s5y_Kd6s.js";import"./isEqual-Ci9lQ3Gg.js";import"./isObject-CbCEqu8w.js";import"./Button-BOymE2P8.js";import"./ActionButton-BhEHpIgB.js";import"./Checkbox-BKgiMTYz.js";import"./useValueChanged-8Sy0KQDz.js";import"./CollapsiblePanel-CkSIzJJh.js";import"./MultiColumnSortDialog-D-Vn9-xU.js";import"./MenuTrigger-DXXXsFlp.js";import"./CompositeItem-BXCgv3jv.js";import"./ToolbarRootContext-D34lClUE.js";import"./getDisabledMountTransitionStyles-QP1QK2bF.js";import"./getPseudoElementBounds-46Ka_uq5.js";import"./chevron-down-DL5tAbBo.js";import"./index-B-I3Uh8K.js";import"./error-CycMySYi.js";import"./BaseCbacBanner-DHYvpBBq.js";import"./makeExternalStore-CLPl01nQ.js";import"./Tooltip-C5dKWTck.js";import"./PopoverPopup-D4SHdc0w.js";import"./toNumber-D4SbUGjd.js";import"./useOsdkClient-DxC0-1je.js";import"./tick-BexnmMAh.js";import"./DropdownField-9vwLO1SK.js";import"./withOsdkMetrics-WV7mv1fL.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
