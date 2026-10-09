import{f as p,j as e}from"./iframe-DgBlFB-Q.js";import{O as i}from"./object-table-BHqLK5RH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Ckmup5sP.js";import"./Table-CSISn0EY.js";import"./index-BMtmTjMy.js";import"./Dialog-DrPzN49d.js";import"./cross-BnOVBF-i.js";import"./svgIconContainer-D-J2n4Ka.js";import"./useBaseUiId-64Qj4RH9.js";import"./InternalBackdrop-Bf-lpEqp.js";import"./composite-CMuAYTfG.js";import"./index-Cyc1Gn9L.js";import"./index-M-GOHxvS.js";import"./index-CRAJZKa6.js";import"./useEventCallback-BCjZTutg.js";import"./SkeletonBar-B-BCIDwW.js";import"./LoadingCell-C_Jv-16E.js";import"./ColumnConfigDialog-DqhVyRtJ.js";import"./DraggableList-CqRIwPKn.js";import"./search-CH52w7PT.js";import"./Input-MozziWfa.js";import"./useControlled-CHdQNKZn.js";import"./Button-Bq1DJjhz.js";import"./small-cross-PRTzBBfj.js";import"./ActionButton-QVdej9JF.js";import"./Checkbox-kH1_7KaN.js";import"./useValueChanged-Du_p_uje.js";import"./CollapsiblePanel-DjJ08X8d.js";import"./MultiColumnSortDialog-CYjdpsMo.js";import"./MenuTrigger-TWWufiWd.js";import"./CompositeItem-i9lnYJRv.js";import"./ToolbarRootContext-qAA2IXiR.js";import"./getDisabledMountTransitionStyles--7J5h99A.js";import"./getPseudoElementBounds-CNGbgi8W.js";import"./chevron-down-DTLIZ0ai.js";import"./index-D32ZsVcf.js";import"./error-BOa7JtYq.js";import"./BaseCbacBanner-B7_-EF7X.js";import"./makeExternalStore-BAWQH3mc.js";import"./Tooltip-A0OoQpoo.js";import"./PopoverPopup-XB39lZ28.js";import"./debounce-BL9pRyBP.js";import"./useOsdkClient-Cxn_Aud3.js";import"./tick-1y5udTAM.js";import"./DropdownField-Dj93kePV.js";import"./isEqual-CFHejaaz.js";import"./withOsdkMetrics-CNTDHmXR.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
