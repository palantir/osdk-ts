import{f as p,j as e}from"./iframe-DabUi6cR.js";import{O as i}from"./object-table-ymMlcQgH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-PB9vrEtI.js";import"./Table-DFKaFrlP.js";import"./index-KZryrGBD.js";import"./Dialog-Bd5BvEg0.js";import"./cross-DpDPaZbd.js";import"./svgIconContainer-Cp8yewAh.js";import"./useBaseUiId-BcNRpk_N.js";import"./InternalBackdrop-BiZjaMMl.js";import"./composite-UkAyjKG8.js";import"./index-CwspG28F.js";import"./index-BAuYPfKF.js";import"./index-Dya5ymfL.js";import"./useEventCallback-DiBk_LO1.js";import"./SkeletonBar-BGVqshhW.js";import"./LoadingCell-WvDyMqYo.js";import"./ColumnConfigDialog-D8-TlFTa.js";import"./DraggableList-B34GVoSc.js";import"./search-D7BhxQDO.js";import"./Input-DrQQ_TlW.js";import"./useControlled-B3zNFnxK.js";import"./Button-CKSInnXQ.js";import"./small-cross-CVw0DqOB.js";import"./ActionButton-CdLhG2br.js";import"./Checkbox-CuTNiBRG.js";import"./useValueChanged-DXzV-qE-.js";import"./CollapsiblePanel-B8htkGGF.js";import"./MultiColumnSortDialog-CLe_WPlF.js";import"./MenuTrigger-CD41BN-2.js";import"./CompositeItem-B-6r7oQp.js";import"./ToolbarRootContext-B5UjH-Re.js";import"./getDisabledMountTransitionStyles-D6QtuiIc.js";import"./getPseudoElementBounds-BiAo1PpW.js";import"./chevron-down-D7NMZO3V.js";import"./index-CWyEHriK.js";import"./error-DzTcu7K-.js";import"./BaseCbacBanner-CyTcZJb2.js";import"./makeExternalStore-BVTB5n8V.js";import"./Tooltip-Cq_bI-7a.js";import"./PopoverPopup-8lBrunDg.js";import"./debounce-Bk1lW-Sn.js";import"./useOsdkClient-BKe3IUPd.js";import"./tick-DycZFHqw.js";import"./DropdownField-FDF5bp47.js";import"./isEqual-BT_PX-GP.js";import"./withOsdkMetrics-DxxH3flz.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
