import{f as p,j as e}from"./iframe-CE9D4JEg.js";import{O as i}from"./object-table-J6bL-P4e.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DZkFqKXe.js";import"./Table-5jH2bIn9.js";import"./index-CqAb3zQU.js";import"./Dialog-CDgqCLwb.js";import"./cross-CEfizOG4.js";import"./svgIconContainer-CzB6UxLW.js";import"./useBaseUiId-By_k7w7S.js";import"./InternalBackdrop-BOutezVR.js";import"./composite-D8GuK9Lq.js";import"./index-C8x2Wal6.js";import"./index-TKpJPc24.js";import"./index-D4tIaWwP.js";import"./useEventCallback-B_j4s6Cv.js";import"./SkeletonBar-DS0akx8X.js";import"./LoadingCell-DkEjHWfP.js";import"./ColumnConfigDialog-BvKTDTH8.js";import"./DraggableList-DoEE1uR1.js";import"./search-Bd6q-htL.js";import"./Input-CP1qtpJz.js";import"./useControlled-3ExL0cgK.js";import"./isEqual-DhHPnCYC.js";import"./isObject-CvU8D3uq.js";import"./Button-C41nBApG.js";import"./ActionButton-DTiUKEcJ.js";import"./Checkbox-Df3pitEk.js";import"./useValueChanged-BS0Dmr34.js";import"./CollapsiblePanel-D1FzsCIw.js";import"./MultiColumnSortDialog-BtVN3bJQ.js";import"./MenuTrigger-D9NVy_PN.js";import"./CompositeItem-CbXGTBfN.js";import"./ToolbarRootContext-BEi2Iys0.js";import"./getDisabledMountTransitionStyles-DvxCzkJC.js";import"./getPseudoElementBounds-Dsw-FRYL.js";import"./chevron-down-C7EWI--r.js";import"./index-BrXNTpWP.js";import"./error-CQamlZ8D.js";import"./BaseCbacBanner-BTdzruE_.js";import"./makeExternalStore-Dl3CPFxJ.js";import"./Tooltip-BRZH-K7d.js";import"./PopoverPopup-Bo5NYsVr.js";import"./toNumber-pBmfXEHq.js";import"./useOsdkClient-Aujm3-Il.js";import"./tick-CvGUey2M.js";import"./DropdownField-GrpqsGo0.js";import"./withOsdkMetrics-CFMrDZ49.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
