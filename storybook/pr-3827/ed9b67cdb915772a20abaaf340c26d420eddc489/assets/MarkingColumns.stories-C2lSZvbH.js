import{f as p,j as e}from"./iframe-CFVb3Ps1.js";import{O as i}from"./object-table-JJpjSfXj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DUoBkcgp.js";import"./Table-C2qgkEda.js";import"./index-j_9_-Knb.js";import"./Dialog-u29b7JHZ.js";import"./cross-F64g4juI.js";import"./svgIconContainer-BIq4W7rh.js";import"./useBaseUiId-CYUQh1eE.js";import"./InternalBackdrop-C3_T0t_S.js";import"./composite-jNoK6z7Q.js";import"./index-PnPL-ngj.js";import"./index-BCwpvRKP.js";import"./index-MQFZGLtj.js";import"./useEventCallback-DfWEp3Qi.js";import"./SkeletonBar-DsIQ6u2E.js";import"./LoadingCell-Brtw5k8F.js";import"./ColumnConfigDialog-DCfB-Yy2.js";import"./DraggableList-BHy4YGXC.js";import"./search-dFaASQnw.js";import"./Input-DrcYzl24.js";import"./useControlled-DrQ2fT0v.js";import"./isEqual-DZJ5fEd6.js";import"./isObject-B_0v44vx.js";import"./Button-YOYPucvk.js";import"./ActionButton-DsjiNWUu.js";import"./Checkbox-CvxuqX69.js";import"./useValueChanged-u72R6kQz.js";import"./CollapsiblePanel-BVLs8nbx.js";import"./MultiColumnSortDialog-DkRJeCZc.js";import"./MenuTrigger-DYapyQQR.js";import"./CompositeItem-DCUGYySc.js";import"./ToolbarRootContext-AlgrHhlC.js";import"./getDisabledMountTransitionStyles-hPO0FBhu.js";import"./getPseudoElementBounds-DbAHztz7.js";import"./chevron-down-Bq_Zi3-5.js";import"./index-Chak816X.js";import"./error-BTpRUOI6.js";import"./BaseCbacBanner-Djq95ilw.js";import"./makeExternalStore-D5L1QyPs.js";import"./Tooltip-Cy4QqDmK.js";import"./PopoverPopup-Bkp1GJEw.js";import"./toNumber-BkArYVYP.js";import"./useOsdkClient-SiBep89O.js";import"./tick-BEPEfegi.js";import"./DropdownField-D_0so34u.js";import"./withOsdkMetrics-BZU3mB8s.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
