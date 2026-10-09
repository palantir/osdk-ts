import{f as p,j as e}from"./iframe-1dJaCYlm.js";import{O as i}from"./object-table-DHPjy5yk.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DxSOn4L7.js";import"./Table-CBTIAnhX.js";import"./index-B5nbKv82.js";import"./Dialog-DR5BuBZq.js";import"./cross-YjWLpu8J.js";import"./svgIconContainer-BHSx6W0Z.js";import"./useBaseUiId-C4uZnOHm.js";import"./InternalBackdrop-Dgfuakv5.js";import"./composite-L8QPO2DT.js";import"./index-BTsOhHh-.js";import"./index-DWMe-xRS.js";import"./index-C7xGCqhv.js";import"./useEventCallback-DUPF2gzl.js";import"./SkeletonBar-D250oLk_.js";import"./LoadingCell-CRn8uGI3.js";import"./ColumnConfigDialog-CjGlgYSo.js";import"./DraggableList-DWAuUQtO.js";import"./search-BkPLkzDr.js";import"./Input-CIfB9akU.js";import"./useControlled-CHSiaIM9.js";import"./Button-C4vq1MKj.js";import"./small-cross-BJKO5x2i.js";import"./ActionButton-CAA2JXXL.js";import"./Checkbox-CpxF8gm9.js";import"./useValueChanged-mwlCE8cl.js";import"./CollapsiblePanel-Co1-lWcX.js";import"./MultiColumnSortDialog-Ci0pmQFw.js";import"./MenuTrigger-B9qIjPTc.js";import"./CompositeItem-C0Th2oHB.js";import"./ToolbarRootContext-Ztq9_6cI.js";import"./getDisabledMountTransitionStyles-DWnTx_mX.js";import"./getPseudoElementBounds-wNHBeRCJ.js";import"./chevron-down-CFBQ0zoB.js";import"./index-DIXb6m2-.js";import"./error-BHBv4jub.js";import"./BaseCbacBanner-hVlrMvZb.js";import"./makeExternalStore-P9a4XRGC.js";import"./Tooltip-B8lT1fcQ.js";import"./PopoverPopup-jAP8Jjj3.js";import"./debounce-D-qHnft_.js";import"./useOsdkClient-DRXMsfLX.js";import"./tick-CIW2Y4rB.js";import"./DropdownField-DPzSkJ64.js";import"./isEqual-B31_2uq-.js";import"./withOsdkMetrics-H4WNoQWX.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
