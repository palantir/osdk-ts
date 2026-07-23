import{f as p,j as e}from"./iframe-C9l55MfW.js";import{O as i}from"./object-table-D-D4FfWh.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BaR7j1qy.js";import"./Table-17RoFdRU.js";import"./index-B8sSDI6e.js";import"./Dialog-Br-r_Jz5.js";import"./cross-BiQ3YqUJ.js";import"./svgIconContainer-B36bqId8.js";import"./useBaseUiId-ChnMimVR.js";import"./InternalBackdrop-BlruP4ni.js";import"./composite-BIs1fDYc.js";import"./index-DO7KJbr1.js";import"./index-DgjXWxOU.js";import"./index-BW1Lfmqj.js";import"./useEventCallback-ZnSS4zGT.js";import"./SkeletonBar-QDieq497.js";import"./LoadingCell-Sgc_tfkm.js";import"./ColumnConfigDialog-CfUHoNW-.js";import"./DraggableList-Buw5fkzU.js";import"./search-CxxUnvng.js";import"./Input-Bv6ABtkM.js";import"./useControlled-D2BKU9rQ.js";import"./isEqual-Cxmw8cnE.js";import"./isObject-CIVrJQuX.js";import"./Button-CoqVnaSH.js";import"./ActionButton-CaEwDF2o.js";import"./Checkbox-DKEhj8Z0.js";import"./useValueChanged-BE3KwSjZ.js";import"./CollapsiblePanel-BsOt4_8Y.js";import"./MultiColumnSortDialog-Te6ZGCOe.js";import"./MenuTrigger-Doe0cvbN.js";import"./CompositeItem-DE8DbRAW.js";import"./ToolbarRootContext-CKqEQDfC.js";import"./getDisabledMountTransitionStyles-CPanS3YJ.js";import"./getPseudoElementBounds-D7kXGV-U.js";import"./chevron-down-eHbfMIJ5.js";import"./index-CjA4akcY.js";import"./error-DWli6fEA.js";import"./BaseCbacBanner-DNKIogTC.js";import"./makeExternalStore-grWifcgC.js";import"./Tooltip-CfVILNIE.js";import"./PopoverPopup-CUz-lUmi.js";import"./toNumber-Bf2vR-0U.js";import"./useOsdkClient-CTaCGmot.js";import"./tick-t-B9nwZ6.js";import"./DropdownField-BugMZ8yX.js";import"./withOsdkMetrics-DMdezYaS.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
