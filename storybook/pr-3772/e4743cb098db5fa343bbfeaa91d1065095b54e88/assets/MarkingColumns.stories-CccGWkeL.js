import{f as p,j as e}from"./iframe-Dtwn1vaw.js";import{O as i}from"./object-table-CEI4N6Za.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-EpvM9Ejn.js";import"./Table-CvnfGKlu.js";import"./index-CunnqZpb.js";import"./Dialog-j3K-chFS.js";import"./cross-BHQxszC7.js";import"./svgIconContainer-izBi4AJd.js";import"./useBaseUiId-Baeg5MQx.js";import"./InternalBackdrop-Bxd08zby.js";import"./composite-C7Srcoag.js";import"./index-ChzJykBZ.js";import"./index-aqrfc_zQ.js";import"./index-B423TLwj.js";import"./useEventCallback-DrxsS8K6.js";import"./SkeletonBar-CaDAhZV5.js";import"./LoadingCell-BNtsK6PU.js";import"./ColumnConfigDialog-ADtA4lCe.js";import"./DraggableList-06D9Mrsz.js";import"./search-CRFQi4jP.js";import"./Input-Cew0RWyc.js";import"./useControlled-Dazae9yM.js";import"./isEqual-BPqr3PbN.js";import"./isObject-DBe7k9DU.js";import"./Button-D7-EaGpa.js";import"./ActionButton-CxI_vRnD.js";import"./Checkbox-D7aMj2qB.js";import"./useValueChanged-QK2zgrTX.js";import"./CollapsiblePanel-B-7lwV-a.js";import"./MultiColumnSortDialog-DUyF4Tr3.js";import"./MenuTrigger-TOQmE5Pc.js";import"./CompositeItem-HRSe5nIw.js";import"./ToolbarRootContext-CQKzf5TQ.js";import"./getDisabledMountTransitionStyles-DMV058GO.js";import"./getPseudoElementBounds-DP8jlLgR.js";import"./chevron-down-C6NPTEnO.js";import"./index-B0n_Y7CH.js";import"./error-BogrZtpi.js";import"./BaseCbacBanner-CxcIFkR6.js";import"./makeExternalStore-B_XP8khw.js";import"./Tooltip-el26iOsi.js";import"./PopoverPopup-CDZymUnO.js";import"./toNumber-BI5qEEAa.js";import"./useOsdkClient-B4zXXxsr.js";import"./tick-DMpW6dCv.js";import"./DropdownField-DNtKIDLm.js";import"./withOsdkMetrics-BJmUIy28.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
