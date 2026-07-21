import{f as p,j as e}from"./iframe-BVFrXrYq.js";import{O as i}from"./object-table-_DZ9lpOV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-HXZr6wiN.js";import"./Table-Dmj2Y7oP.js";import"./index-DYfZu-Ee.js";import"./Dialog-Bhz8eZfs.js";import"./cross-D5G1I7-7.js";import"./svgIconContainer-iyTG0sGg.js";import"./useBaseUiId-rUB46zhQ.js";import"./InternalBackdrop-DiYac6EC.js";import"./composite-giO6rXsy.js";import"./index-CwOjfOXs.js";import"./index-Bc-PTka1.js";import"./index-Ml01DX1I.js";import"./useEventCallback-CUdfYZ6y.js";import"./SkeletonBar-pRxix1-R.js";import"./LoadingCell-CK6JVuPY.js";import"./ColumnConfigDialog-CcejyjLj.js";import"./DraggableList-DmnVrfrG.js";import"./search-Ck_fv0WH.js";import"./Input-x53Ed6WS.js";import"./useControlled-DWUZNbgT.js";import"./isEqual-6Yce6y8_.js";import"./isObject-dsp37kJd.js";import"./Button-ByKYiqBb.js";import"./ActionButton-D8qgIS-F.js";import"./Checkbox-DqVZ3p_k.js";import"./useValueChanged-LAJ3lPNB.js";import"./CollapsiblePanel-DfTUE1Bz.js";import"./MultiColumnSortDialog-d3f07pOz.js";import"./MenuTrigger-DOdyAP5y.js";import"./CompositeItem-CGK1pG4p.js";import"./ToolbarRootContext-C9c31ZG8.js";import"./getDisabledMountTransitionStyles-CYOXvBKc.js";import"./getPseudoElementBounds-Cp8S3x4v.js";import"./chevron-down-CSaEu3Fq.js";import"./index-BrQWPLKv.js";import"./error-utCnBBOj.js";import"./BaseCbacBanner-C2gq-aH_.js";import"./makeExternalStore-KFg2pyql.js";import"./Tooltip-B5hdvKf4.js";import"./PopoverPopup-BdzgsnSh.js";import"./toNumber-BTpZeaDZ.js";import"./useOsdkClient-ClVlFYGM.js";import"./tick-CH1h6JpF.js";import"./DropdownField-BS33wLpJ.js";import"./withOsdkMetrics-J13aY73Y.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
