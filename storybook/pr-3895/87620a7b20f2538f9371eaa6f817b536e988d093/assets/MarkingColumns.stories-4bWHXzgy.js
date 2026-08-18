import{f as p,j as e}from"./iframe-CDIPB7O4.js";import{O as i}from"./object-table-CBk3FT5C.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DWohjKyq.js";import"./Table-BIigbOGi.js";import"./index-DpqBc055.js";import"./Dialog-SLdFailw.js";import"./cross-DWpFnAxd.js";import"./svgIconContainer-CpRq1kzn.js";import"./useBaseUiId-C53ArP71.js";import"./InternalBackdrop-B9qLr-oe.js";import"./composite-DJpplRBW.js";import"./index-CyMDaR8V.js";import"./index-CKl1c7mw.js";import"./index-DfdGKi8-.js";import"./useEventCallback-DtgIzVYv.js";import"./SkeletonBar-C617US_K.js";import"./LoadingCell-Btgdba_1.js";import"./ColumnConfigDialog-DiXfJIxg.js";import"./DraggableList-CT_M4ECH.js";import"./search-CSd5Haqi.js";import"./Input-B0582SQt.js";import"./useControlled-OIS9RNuC.js";import"./Button-1JczBYxA.js";import"./small-cross-B3Py6K7e.js";import"./ActionButton-B9qD19Gh.js";import"./Checkbox-Bj9DElAv.js";import"./useValueChanged-CvK1p4tX.js";import"./CollapsiblePanel-D70kK-yy.js";import"./MultiColumnSortDialog-E4pJ9M9E.js";import"./MenuTrigger-9NRzM_p-.js";import"./CompositeItem-DHFrcPLh.js";import"./ToolbarRootContext-XxXzxguL.js";import"./getDisabledMountTransitionStyles-CbbCvZI5.js";import"./getPseudoElementBounds-DIxCtFOg.js";import"./chevron-down-DWvOUDyV.js";import"./index-DDzNSFgX.js";import"./error-Q-7f-CPI.js";import"./BaseCbacBanner-ndkTyjjH.js";import"./makeExternalStore-_11RJNTd.js";import"./Tooltip-6qjUPNzc.js";import"./PopoverPopup-iLz8vspv.js";import"./debounce-Cr7GiNN5.js";import"./useOsdkClient-CbwMPEBp.js";import"./tick-C6XXwnGc.js";import"./DropdownField-DpCCQaoa.js";import"./isEqual-Bvcs_cF6.js";import"./withOsdkMetrics-DDUsb1yp.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
