import{f as p,j as e}from"./iframe-BYRqOhSr.js";import{O as i}from"./object-table-C1zu1WDG.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DLGTrBKR.js";import"./Table-Dgu0q0Tw.js";import"./index-CSSebMeO.js";import"./Dialog-BholJzd6.js";import"./cross-Cdpkq547.js";import"./svgIconContainer-wW0CqYPP.js";import"./useBaseUiId-BFjTC6ra.js";import"./InternalBackdrop-DCg-_Sni.js";import"./composite-0rukfXMW.js";import"./index--Qkxp9Ch.js";import"./index-Crj6XLuG.js";import"./index-D9v2WBqW.js";import"./useEventCallback-D71ScrdE.js";import"./SkeletonBar-DvfqZoaT.js";import"./LoadingCell-Co7MMWAw.js";import"./ColumnConfigDialog-aTcyzx3L.js";import"./DraggableList-CtySVNWz.js";import"./search-DIpxBZ8i.js";import"./Input-DR73XI4T.js";import"./useControlled-BLCq1h60.js";import"./isEqual-3Z6cF9qG.js";import"./isObject-CcdWjjol.js";import"./Button-cKG_17Qb.js";import"./ActionButton-ExC3cibU.js";import"./Checkbox-CdERxcMz.js";import"./useValueChanged-C9z6EyUU.js";import"./CollapsiblePanel-AsX3Kr6W.js";import"./MultiColumnSortDialog-LB8bNOJz.js";import"./MenuTrigger-CYElN_HF.js";import"./CompositeItem-mcJO_U5b.js";import"./ToolbarRootContext-D6_V_hS-.js";import"./getDisabledMountTransitionStyles-v4JFZ5lq.js";import"./getPseudoElementBounds-DL5KJd8v.js";import"./chevron-down-DUmlt8XR.js";import"./index-CKEL1RmN.js";import"./error-DF1K1fTv.js";import"./BaseCbacBanner-BLUaN58l.js";import"./makeExternalStore-RjmvQ4XE.js";import"./Tooltip-CIIn7ppo.js";import"./PopoverPopup-LBvyw9jr.js";import"./toNumber-DsQD2KWL.js";import"./useOsdkClient-DTSr5eBl.js";import"./tick-DgN8qV2O.js";import"./DropdownField-DcXEiZFu.js";import"./withOsdkMetrics-BiRr5uSt.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
