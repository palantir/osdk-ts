import{f as p,j as e}from"./iframe-Cnqo8JoO.js";import{O as i}from"./object-table-BjTN_yj-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DB7HrsLr.js";import"./Table-BsL0om5s.js";import"./index-DPLneUTO.js";import"./Dialog-DGZCWUEd.js";import"./cross-L-SNvRGg.js";import"./svgIconContainer-CSxRudGe.js";import"./useBaseUiId-CMntNwg3.js";import"./InternalBackdrop-CJ-eceSN.js";import"./composite-DaaqoGoy.js";import"./index-CwsDo0MO.js";import"./index-CKI4qvj-.js";import"./index-BJ_GXgk1.js";import"./useEventCallback-B62oHhCV.js";import"./SkeletonBar-Bxqkbprw.js";import"./LoadingCell-NEkiFIgV.js";import"./ColumnConfigDialog-OplMWAkK.js";import"./DraggableList-B-dJ0pBW.js";import"./search-Bfy7kx1g.js";import"./Input-DB0BU6v_.js";import"./useControlled-D7Uij8uU.js";import"./Button-ChrgAtHr.js";import"./small-cross-CHaVBd3F.js";import"./ActionButton-CwRBsdhk.js";import"./Checkbox-aisDczTH.js";import"./useValueChanged-Bs1dvRlB.js";import"./CollapsiblePanel-fS7hUv8f.js";import"./MultiColumnSortDialog-DRMLHk2T.js";import"./MenuTrigger-BgvD7W9R.js";import"./CompositeItem-Cx-1EMH-.js";import"./ToolbarRootContext-BP77INzo.js";import"./getDisabledMountTransitionStyles-FfoApt6d.js";import"./getPseudoElementBounds-C015kcjA.js";import"./chevron-down-T8AVx82S.js";import"./index-BDFdu6IJ.js";import"./error-DWCGh03E.js";import"./BaseCbacBanner-BhbOlb4V.js";import"./makeExternalStore-BgRsNlcL.js";import"./Tooltip-CHepNGwK.js";import"./PopoverPopup-CAsTwxkG.js";import"./debounce-DdinpU2x.js";import"./useOsdkClient-6VKDxm1Q.js";import"./tick-BdumFRCq.js";import"./DropdownField-DRUiHbSz.js";import"./isEqual-DKp7-gCn.js";import"./withOsdkMetrics-C2CbSeLM.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
