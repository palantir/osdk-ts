import{f as p,j as e}from"./iframe-DIrXRTUE.js";import{O as i}from"./object-table-CRY5KDOY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BDGKLWkc.js";import"./Table-CFLtyIaQ.js";import"./index-DXhTZYa-.js";import"./Dialog-j2P3qZPM.js";import"./cross-BWlnnw7Z.js";import"./svgIconContainer-BhiIhdyU.js";import"./useBaseUiId-DggC7k7V.js";import"./InternalBackdrop-BfLi8nYY.js";import"./composite-CQGrDifO.js";import"./index-DNNp_YhZ.js";import"./index-C7mJLSNN.js";import"./index-B7BSa3qz.js";import"./useEventCallback-4SGo8iHB.js";import"./SkeletonBar-CI1EKX4F.js";import"./LoadingCell-C1PJA3Gv.js";import"./ColumnConfigDialog-D5a1NblV.js";import"./DraggableList-RVApbcSr.js";import"./search-BiMWNAZT.js";import"./Input-xU7CCW7r.js";import"./useControlled-CY4zZ4Nk.js";import"./Button-CFV4ykZ5.js";import"./small-cross-k4fEusKy.js";import"./ActionButton-C_bnaXzs.js";import"./Checkbox-DKrbFOh9.js";import"./useValueChanged-DSwICwQ7.js";import"./CollapsiblePanel-BnW8cw5D.js";import"./MultiColumnSortDialog-B5VFtizY.js";import"./MenuTrigger--qPAsE0H.js";import"./CompositeItem-DZtzCGg4.js";import"./ToolbarRootContext-BwPH-v7H.js";import"./getDisabledMountTransitionStyles-B0733LGG.js";import"./getPseudoElementBounds-C8jaYsn8.js";import"./chevron-down-ClhW5Bkg.js";import"./index-CoHjJ82-.js";import"./error-Fw0nPuQ9.js";import"./BaseCbacBanner-BD1aE8di.js";import"./makeExternalStore-CfejnPp0.js";import"./Tooltip-C08q-0U3.js";import"./PopoverPopup-CUDI852N.js";import"./debounce-BROf-_gy.js";import"./useOsdkClient-CpLorJJf.js";import"./tick-Bk7NHXTh.js";import"./DropdownField-C91zL4eW.js";import"./isEqual-YCnWhj50.js";import"./withOsdkMetrics-BVdX0j6l.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
