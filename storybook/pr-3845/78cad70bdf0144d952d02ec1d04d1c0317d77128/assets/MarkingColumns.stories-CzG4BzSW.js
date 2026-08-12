import{f as p,j as e}from"./iframe-B5w1MiMB.js";import{O as i}from"./object-table-Bm49LUOf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CU1AtdIz.js";import"./Table-EvNA8qkA.js";import"./index-CtjXdvRc.js";import"./Dialog-DCphJ0pX.js";import"./cross-CV9fpUOl.js";import"./svgIconContainer-B7EdkAw1.js";import"./useBaseUiId-1DFIpK_I.js";import"./InternalBackdrop-BW8Gd5Of.js";import"./composite-DdCZUanX.js";import"./index-CLavCOv2.js";import"./index-Cxsp0K40.js";import"./index-fTS2FcWe.js";import"./useEventCallback-D_ZU_Z1u.js";import"./SkeletonBar-BxYwBM3V.js";import"./LoadingCell-yTv8ze3n.js";import"./ColumnConfigDialog-ztGs-pKV.js";import"./DraggableList-Xb0V2hTV.js";import"./search-CzP4ABR3.js";import"./Input-j9KFgO4e.js";import"./useControlled-N5ZmUmtW.js";import"./isEqual-Br14G6um.js";import"./isObject-DpLTSRhw.js";import"./Button-BwuNtGpm.js";import"./ActionButton-DVxnq_cx.js";import"./Checkbox-BBtx1TBv.js";import"./useValueChanged-DZFj9DWZ.js";import"./CollapsiblePanel-CzWau1En.js";import"./MultiColumnSortDialog-CoOnz_sI.js";import"./MenuTrigger-WoUnOu8V.js";import"./CompositeItem-B9-flLpX.js";import"./ToolbarRootContext-DXnkpKvw.js";import"./getDisabledMountTransitionStyles-Cmdfpae2.js";import"./getPseudoElementBounds-CNsqsAze.js";import"./chevron-down-BplLrpUt.js";import"./index-BqopfQQ5.js";import"./error-DbvnMx8s.js";import"./BaseCbacBanner-CmZfweLi.js";import"./makeExternalStore-DG987ZvC.js";import"./Tooltip-DkqaGoGi.js";import"./PopoverPopup-Cs-CmjK7.js";import"./toNumber-ncDJ6WAX.js";import"./useOsdkClient-3124dXLb.js";import"./tick-BZFtP7oe.js";import"./DropdownField-DmLTcL6M.js";import"./withOsdkMetrics-CMmNO-Cj.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
