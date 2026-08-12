import{f as p,j as e}from"./iframe-CkxgfQeO.js";import{O as i}from"./object-table-CoR5juoc.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D5D19XNo.js";import"./Table-brYCPGGz.js";import"./index-IOPRRqhI.js";import"./Dialog-AECQsIBv.js";import"./cross-CH36hvQf.js";import"./svgIconContainer-BnddIgAA.js";import"./useBaseUiId-CoaLnFnK.js";import"./InternalBackdrop-CRqcgfb3.js";import"./composite-C9gQ7F0R.js";import"./index-CzQUlWmE.js";import"./index-BBrPyGlT.js";import"./index-COolpCRV.js";import"./useEventCallback-tNddHvUY.js";import"./SkeletonBar-yDZKm4eE.js";import"./LoadingCell-_jXEP0tP.js";import"./ColumnConfigDialog-KJWocYIu.js";import"./DraggableList-d77ZMIsB.js";import"./search-6LzY9pcR.js";import"./Input-CBK5xZA_.js";import"./useControlled-DB78SK-c.js";import"./isEqual-NN4sf9C3.js";import"./isObject-DbVGHmvG.js";import"./Button-DT56OzjG.js";import"./ActionButton-C6o3T8ok.js";import"./Checkbox-_MS3OdLx.js";import"./useValueChanged-DdUP-vnE.js";import"./CollapsiblePanel-Dl-C548X.js";import"./MultiColumnSortDialog-BYeNkeug.js";import"./MenuTrigger-lo2vMG6r.js";import"./CompositeItem-BTHTAMQz.js";import"./ToolbarRootContext-Cr1zYvXJ.js";import"./getDisabledMountTransitionStyles-B1AQ2GNq.js";import"./getPseudoElementBounds-CtK0BnJ-.js";import"./chevron-down-aLsddmml.js";import"./index-B9L6gED-.js";import"./error-DNZfmN7i.js";import"./BaseCbacBanner-C8q4nU5Z.js";import"./makeExternalStore-B9DKryZa.js";import"./Tooltip-C3tsi8xF.js";import"./PopoverPopup-D_wx_Xml.js";import"./toNumber-Dhle7t7R.js";import"./useOsdkClient-D8Cawu22.js";import"./tick-BVRdIfgv.js";import"./DropdownField-b310lDZ5.js";import"./withOsdkMetrics-Zaf_KVW8.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
