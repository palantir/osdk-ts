import{f as p,j as e}from"./iframe-DlJcn1ee.js";import{O as i}from"./object-table-Q-9wcvLB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BLYSAxZc.js";import"./Table-BVEuulSw.js";import"./index-CkQyG9JZ.js";import"./Dialog-DZ9ANgfT.js";import"./cross-BZzn8J7n.js";import"./svgIconContainer-5ONNfYAu.js";import"./useBaseUiId-CXPuJlvy.js";import"./InternalBackdrop-CMl_3iou.js";import"./composite-zLUhUg_C.js";import"./index-Ci_TDln9.js";import"./index-B8NVU8EY.js";import"./index-CRFa_Oji.js";import"./useEventCallback-BzYAIX-O.js";import"./SkeletonBar-D8i5j12o.js";import"./LoadingCell-B23hYJP7.js";import"./ColumnConfigDialog-B_NNuY9i.js";import"./DraggableList-CW2VwWDS.js";import"./search-Dfke7UKE.js";import"./Input-DpCgc88D.js";import"./useControlled-BS4JJ_gb.js";import"./isEqual-Dj5XWcTF.js";import"./isObject-lc_azX1V.js";import"./Button-BcjZpSmY.js";import"./ActionButton-CyRVfIaS.js";import"./Checkbox-_y4thMap.js";import"./useValueChanged-B-sxgZ-V.js";import"./CollapsiblePanel-DR2SXRzl.js";import"./MultiColumnSortDialog-CBn8vDWw.js";import"./MenuTrigger-BmtLNfQI.js";import"./CompositeItem-o1wZxKIg.js";import"./ToolbarRootContext-BPqNmhML.js";import"./getDisabledMountTransitionStyles-BShYQ_ND.js";import"./getPseudoElementBounds-B_9H0YsL.js";import"./chevron-down-DPOW8KDp.js";import"./index-BzFfhsxG.js";import"./error-CS0Z81pt.js";import"./BaseCbacBanner-B88gwSPJ.js";import"./makeExternalStore-DRpXALfh.js";import"./Tooltip-C1fCKEvH.js";import"./PopoverPopup-CUht9G04.js";import"./toNumber-dJIfe93O.js";import"./useOsdkClient-C5xFnNI3.js";import"./tick-JBy8ffy-.js";import"./DropdownField-BtUFSNhq.js";import"./withOsdkMetrics-a2bLSbfF.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
