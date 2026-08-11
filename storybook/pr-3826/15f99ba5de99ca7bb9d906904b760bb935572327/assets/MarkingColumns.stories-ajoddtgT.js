import{f as p,j as e}from"./iframe-BWI0v7bU.js";import{O as i}from"./object-table-BRvhrzEG.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BKzGVzbV.js";import"./Table-honY6tNZ.js";import"./index-CKp8zefp.js";import"./Dialog-DUaL9mZT.js";import"./cross-CQNQC0A7.js";import"./svgIconContainer-BKP6lsya.js";import"./useBaseUiId-CbtuVGLX.js";import"./InternalBackdrop-Dag6gQTJ.js";import"./composite-ZOXtixD3.js";import"./index-CR1j9JlH.js";import"./index-D5lI-f2a.js";import"./index-CJ6lkdfM.js";import"./useEventCallback-C6A6kczn.js";import"./SkeletonBar-Bb26MY-Y.js";import"./LoadingCell-Bjhz2UEa.js";import"./ColumnConfigDialog-DLH6MmS0.js";import"./DraggableList-BeyHP_PC.js";import"./search-YfthYXya.js";import"./Input-27_mh9Q3.js";import"./useControlled-C6y9E1N5.js";import"./isEqual-iHLCH-uF.js";import"./isObject-5AKoso39.js";import"./Button-BwmiKCl4.js";import"./ActionButton-_XxrJ1yy.js";import"./Checkbox-BhY0xLP8.js";import"./useValueChanged-CZxF32bS.js";import"./CollapsiblePanel-DrjipFXe.js";import"./MultiColumnSortDialog-45Jb9qWW.js";import"./MenuTrigger-Bvupqx4u.js";import"./CompositeItem-yLYz58Jp.js";import"./ToolbarRootContext-raUjAPMX.js";import"./getDisabledMountTransitionStyles-csXBmIEf.js";import"./getPseudoElementBounds-DvNeRd17.js";import"./chevron-down-D6XjoOpy.js";import"./index-CU_s30uq.js";import"./error-YPxJU-tx.js";import"./BaseCbacBanner-C0i6JqbQ.js";import"./makeExternalStore-CmPHT6zT.js";import"./Tooltip-DWzcSW26.js";import"./PopoverPopup-C2vcW2fT.js";import"./toNumber-Cio0DWgy.js";import"./useOsdkClient-CgaW35u6.js";import"./tick-Bo-Yppgv.js";import"./DropdownField-CI-_pGHR.js";import"./withOsdkMetrics-CnoY1REH.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
