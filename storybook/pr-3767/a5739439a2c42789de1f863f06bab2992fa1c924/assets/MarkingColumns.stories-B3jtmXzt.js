import{f as p,j as e}from"./iframe-Dj2cKGnO.js";import{O as i}from"./object-table-DDtFqPBI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C4DRB2fG.js";import"./Table-BXXgJkx5.js";import"./index-BO7YIbLm.js";import"./Dialog-BC0N5_7u.js";import"./cross-BR_uQDj2.js";import"./svgIconContainer-BpBQ0iGt.js";import"./useBaseUiId-e1nCQA8K.js";import"./InternalBackdrop-eWkjZ7Vn.js";import"./composite-5gl7qD0t.js";import"./index-Cz2dMcbH.js";import"./index-D7Xl9lR0.js";import"./index-pt5WX9KE.js";import"./useEventCallback-JFaXoDI3.js";import"./SkeletonBar-CQWkQwyM.js";import"./LoadingCell-B7lsHsqt.js";import"./ColumnConfigDialog-BIFV4IGe.js";import"./DraggableList-CswUdwxo.js";import"./search-C6Gs3wIW.js";import"./Input-DJhGkZgO.js";import"./useControlled-B1nPULYy.js";import"./isEqual-CkFRBfKF.js";import"./isObject-CWqdK9wF.js";import"./Button-CptP105M.js";import"./ActionButton-DHight5r.js";import"./Checkbox-DglfwZeF.js";import"./useValueChanged-DZZ5yUcK.js";import"./CollapsiblePanel-7hMlZynw.js";import"./MultiColumnSortDialog-BkXML1Gy.js";import"./MenuTrigger-Bu-Wot8X.js";import"./CompositeItem-BjekPXkF.js";import"./ToolbarRootContext-BHEFpPDT.js";import"./getDisabledMountTransitionStyles-Dev7gewU.js";import"./getPseudoElementBounds-D8dLGn3J.js";import"./chevron-down-LbKJSdTq.js";import"./index-CkLjKLx-.js";import"./error-DP1wqNc6.js";import"./BaseCbacBanner-Dgb48O8R.js";import"./makeExternalStore-BicNN6mB.js";import"./Tooltip-CucWZmFu.js";import"./PopoverPopup-lDh7JWpB.js";import"./toNumber-CGgINaIS.js";import"./useOsdkClient-CpNUt0AY.js";import"./tick-uO4W4Tlc.js";import"./DropdownField-BP-vtTDy.js";import"./withOsdkMetrics-BHLwwwlP.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
