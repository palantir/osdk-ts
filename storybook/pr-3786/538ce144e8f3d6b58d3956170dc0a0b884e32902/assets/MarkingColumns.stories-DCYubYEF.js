import{f as p,j as e}from"./iframe-D73P9nKc.js";import{O as i}from"./object-table-DDqvLNxE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BjEBufMF.js";import"./Table-BHBf0L_f.js";import"./index-CirTIIDW.js";import"./Dialog-m199ipGj.js";import"./cross-Dfl2KnYN.js";import"./svgIconContainer-CeFk8pT0.js";import"./useBaseUiId-xBTezciU.js";import"./InternalBackdrop-BVJfWxPc.js";import"./composite-edjiBCvk.js";import"./index-Dwedegj9.js";import"./index-NbMM9cDd.js";import"./index-QCcRxAnf.js";import"./useEventCallback-DOriYqOq.js";import"./SkeletonBar-Cv3e0wLL.js";import"./LoadingCell-WHPSbxRg.js";import"./ColumnConfigDialog-D2gHivhl.js";import"./DraggableList-CRHesyr6.js";import"./search-Dt1g4XkD.js";import"./Input-DJcl3DDq.js";import"./useControlled-RQ2ruCMn.js";import"./isEqual-2gOc909M.js";import"./isObject-CtVfkhnM.js";import"./Button-C_5kgWUY.js";import"./ActionButton-BQDLzjtZ.js";import"./Checkbox-CiXlL5Oh.js";import"./useValueChanged-ClvfWRLt.js";import"./CollapsiblePanel-CvTWvEb4.js";import"./MultiColumnSortDialog-C2W3DrsM.js";import"./MenuTrigger-D3wbWLuX.js";import"./CompositeItem-Ppg2q6Wh.js";import"./ToolbarRootContext-DnVqj7ts.js";import"./getDisabledMountTransitionStyles-BbUkZFU7.js";import"./getPseudoElementBounds-2590HYt7.js";import"./chevron-down-WD0BiTuk.js";import"./index-gmmWqW7B.js";import"./error-CVdJWrUx.js";import"./BaseCbacBanner-sdzO2XYw.js";import"./makeExternalStore-fGwEBPTV.js";import"./Tooltip-BNbgTwM2.js";import"./PopoverPopup-7al-0CgW.js";import"./toNumber-DfL-jis5.js";import"./useOsdkClient-Ccg84nj2.js";import"./tick-CNHtCiCU.js";import"./DropdownField-DwRZbsmW.js";import"./withOsdkMetrics-BFaCjj6O.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
