import{f as p,j as e}from"./iframe-CAOw1_Np.js";import{O as i}from"./object-table-Bnm6FDPO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BtDOje63.js";import"./Table-B5_PXRuD.js";import"./index-rKNeW6R2.js";import"./Dialog-CBafvJcd.js";import"./cross-6UH6f3dc.js";import"./svgIconContainer-DJZ5kPqi.js";import"./useBaseUiId-BRTQVt9V.js";import"./InternalBackdrop-DdGTfKiB.js";import"./composite-ceXOKcGl.js";import"./index-B9i7IC3F.js";import"./index-Bj9jZdxR.js";import"./index-CSvoLCmH.js";import"./useEventCallback-DP-govtU.js";import"./SkeletonBar-4wb1Kl_E.js";import"./LoadingCell-Cj-L5vTI.js";import"./ColumnConfigDialog-Dh-jOaO7.js";import"./DraggableList-D1kkjKgg.js";import"./search-CAyVB4HI.js";import"./Input-BIFRYkQa.js";import"./useControlled-BcHOqTg-.js";import"./Button-BCAtXo9W.js";import"./small-cross-BhY_ToEZ.js";import"./ActionButton-D6SZJ9IH.js";import"./Checkbox-Bh7-Ldil.js";import"./useValueChanged-BFl7n5IX.js";import"./CollapsiblePanel-D09cr1ad.js";import"./MultiColumnSortDialog-BBIMSvJM.js";import"./MenuTrigger-447gUd-z.js";import"./CompositeItem-CJnfXQEg.js";import"./ToolbarRootContext-kfYngOQa.js";import"./getDisabledMountTransitionStyles-BKTsnLJ9.js";import"./getPseudoElementBounds-B-ChLQl_.js";import"./chevron-down-CrNYgO2n.js";import"./index-DAICdrKF.js";import"./error-BklEgYFX.js";import"./BaseCbacBanner-CmQ2fwuw.js";import"./makeExternalStore-BP-pbk-j.js";import"./Tooltip-Brm-nAjm.js";import"./PopoverPopup-r-UXKcU9.js";import"./debounce-CxqcX0B2.js";import"./useOsdkClient-BinCW-Bh.js";import"./tick-C5OyQv1Y.js";import"./DropdownField-DPBhg9Lf.js";import"./isEqual-BqeFWCPf.js";import"./withOsdkMetrics-C9zKllhN.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
