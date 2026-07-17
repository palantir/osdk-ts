import{f as p,j as e}from"./iframe-C8v16k98.js";import{O as i}from"./object-table-DaUuA2DW.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CTIvj4s1.js";import"./Table-QeA9e52M.js";import"./index-f0YWfbBx.js";import"./Dialog-DRo2wNaL.js";import"./cross-2SBchWKW.js";import"./svgIconContainer-2XqMCtfu.js";import"./useBaseUiId-BeqTmLCE.js";import"./InternalBackdrop-De-tJelF.js";import"./composite-BdHgeVz1.js";import"./index-Bwu6itB9.js";import"./index-Aj7xkOVT.js";import"./index-Da9HzXl1.js";import"./useEventCallback-OSeRPLEN.js";import"./SkeletonBar-D5mIRI_d.js";import"./LoadingCell-CDkqh5LS.js";import"./ColumnConfigDialog-BqOoM7ss.js";import"./DraggableList-BXXEC27Y.js";import"./search-6el8p7xI.js";import"./Input-D1r8rOe3.js";import"./useControlled-Be5wZWlu.js";import"./isEqual-B2DnLU2d.js";import"./isObject-DXzaingI.js";import"./Button-BiFBHNqb.js";import"./ActionButton-eZV_PiWy.js";import"./Checkbox-Dwz6Ax7I.js";import"./useValueChanged-DWpvCFJJ.js";import"./CollapsiblePanel-CWjyPok2.js";import"./MultiColumnSortDialog-DJqVkESC.js";import"./MenuTrigger-Db8Js0sG.js";import"./CompositeItem-CR0-7tBN.js";import"./ToolbarRootContext-DA-OiDrZ.js";import"./getDisabledMountTransitionStyles-BUVLVpNS.js";import"./getPseudoElementBounds-BxtHnPc1.js";import"./chevron-down-BhMQKpnE.js";import"./index-BQPgWn6y.js";import"./error-D1sq84rm.js";import"./BaseCbacBanner-EealSr34.js";import"./makeExternalStore-DuKpND8W.js";import"./Tooltip-CV76_CFr.js";import"./PopoverPopup-CAFw1C1X.js";import"./toNumber-DJn0atSt.js";import"./useOsdkClient-CcTXJtuA.js";import"./tick-AHxqUUqv.js";import"./DropdownField-DNmoedol.js";import"./withOsdkMetrics-CF0NLiGy.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
