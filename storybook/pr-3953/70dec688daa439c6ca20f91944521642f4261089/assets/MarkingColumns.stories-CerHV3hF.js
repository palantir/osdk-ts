import{f as p,j as e}from"./iframe-A9SMdxTk.js";import{O as i}from"./object-table-SMZwmdv_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DQLolCHZ.js";import"./Table-Dt18qZF-.js";import"./index-CCGgfNub.js";import"./Dialog-CxTZ5sEs.js";import"./cross-2Xnw9coj.js";import"./svgIconContainer-CNaxbSBM.js";import"./useBaseUiId-B4Zg0t3a.js";import"./InternalBackdrop-CjvwhqTr.js";import"./composite-7A3yZ68G.js";import"./index-DVtEeQpM.js";import"./index-u-M_bDzq.js";import"./index-DSNNOMbW.js";import"./useEventCallback-Cs7j8rjy.js";import"./SkeletonBar-Bsavensj.js";import"./LoadingCell-MuKAq9ox.js";import"./ColumnConfigDialog-BPaq44ED.js";import"./DraggableList-enJHXPWW.js";import"./search-Bmlhhw47.js";import"./Input-deyBktI2.js";import"./useControlled-BfWlfukP.js";import"./Button-BqU3-dcX.js";import"./small-cross-L7YPfTAg.js";import"./ActionButton-SqRrJytR.js";import"./Checkbox-DnbmlZ-x.js";import"./useValueChanged-DoC4-4sS.js";import"./CollapsiblePanel-pH-Ll-5X.js";import"./MultiColumnSortDialog-Bu7YdQ1a.js";import"./MenuTrigger-yNgCAx0M.js";import"./CompositeItem-B_0BvpK8.js";import"./ToolbarRootContext-bZyAVUWu.js";import"./getDisabledMountTransitionStyles-DPN9mdtk.js";import"./getPseudoElementBounds-DnEf810H.js";import"./chevron-down-B5VXYyUb.js";import"./index-Vl3wc69p.js";import"./error-Bs_ECeoC.js";import"./BaseCbacBanner-DG7waKo_.js";import"./makeExternalStore-DS1IY1Cv.js";import"./Tooltip-CvmQ17Y-.js";import"./PopoverPopup-PlkIfJuv.js";import"./debounce-CJPgIkeW.js";import"./useOsdkClient-DlYGuUgU.js";import"./tick-d3JyzzOo.js";import"./DropdownField-B59uqojr.js";import"./isEqual-89fgiQle.js";import"./withOsdkMetrics-Drgty0Zj.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
