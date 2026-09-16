import{f as p,j as e}from"./iframe-DsISivmL.js";import{O as i}from"./object-table-D-R8-m_2.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BzOTEX4h.js";import"./Table-HjUSSdiq.js";import"./index-CA9KUbCW.js";import"./Dialog-CxNOiwWg.js";import"./cross-BGShLWmS.js";import"./svgIconContainer-Dp3EEAal.js";import"./useBaseUiId-CMSPxGM5.js";import"./InternalBackdrop-B7T_UWK7.js";import"./composite-0zr51VGP.js";import"./index-CLDUlJNg.js";import"./index-vtVyo2v8.js";import"./index-ji8x1IHY.js";import"./useEventCallback-COAm-0TE.js";import"./SkeletonBar-c-f45sOv.js";import"./LoadingCell-Ruo-nYP2.js";import"./ColumnConfigDialog-BzPFK1xr.js";import"./DraggableList-gCYQPmCE.js";import"./search-BjXP8SQo.js";import"./Input-C-IYkLA_.js";import"./useControlled-B8XvalbJ.js";import"./Button-CSztET3k.js";import"./small-cross-DPV9Jc_E.js";import"./ActionButton-DYgFtpFn.js";import"./Checkbox-CwZnYDKw.js";import"./useValueChanged-CEyGGyfc.js";import"./CollapsiblePanel-DeMaCQ59.js";import"./MultiColumnSortDialog-BLRN6IbJ.js";import"./MenuTrigger-P7xuahsz.js";import"./CompositeItem-DPkp3H9j.js";import"./ToolbarRootContext-BoW9B8ED.js";import"./getDisabledMountTransitionStyles-DyXUV0ZO.js";import"./getPseudoElementBounds-D8rG3FVx.js";import"./chevron-down-CGSFBjuL.js";import"./index-CKh5Salv.js";import"./error-33DrpFja.js";import"./BaseCbacBanner-BwGv_eo7.js";import"./makeExternalStore-Bj-L88f8.js";import"./Tooltip-DWpaGJhu.js";import"./PopoverPopup-Cxkx2QUZ.js";import"./debounce-X_5agJaU.js";import"./useOsdkClient-zAtHZEwL.js";import"./tick-Ccm3lDvW.js";import"./DropdownField-CvZQLsdV.js";import"./isEqual-DJpzJyhX.js";import"./withOsdkMetrics-D6_E0WHa.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
