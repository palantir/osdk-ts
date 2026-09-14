import{f as p,j as e}from"./iframe-DwHN39Jj.js";import{O as i}from"./object-table-DffhlyGO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-TQIKMTBe.js";import"./Table-wolDvqJe.js";import"./index-Bnvv13O1.js";import"./Dialog-BBNsESMo.js";import"./cross-DiSoPuVQ.js";import"./svgIconContainer-D3xSNEvE.js";import"./useBaseUiId-BuiLz8Kz.js";import"./InternalBackdrop-Ct27ouGs.js";import"./composite-BHUO4-On.js";import"./index-yATLLLgy.js";import"./index-DdofC8Tl.js";import"./index-BCjzN-kH.js";import"./useEventCallback-Dgfv8zRH.js";import"./SkeletonBar-B2OK7PfD.js";import"./LoadingCell-DREadf8T.js";import"./ColumnConfigDialog-CHJeGomQ.js";import"./DraggableList-BkZnJPMZ.js";import"./search-60c5efTm.js";import"./Input-C40ac1xS.js";import"./useControlled-B5wlEGdC.js";import"./Button-BYP0P9Ib.js";import"./small-cross-DyCNle2m.js";import"./ActionButton-DjDKHZFu.js";import"./Checkbox-BSX5bz10.js";import"./useValueChanged-2oQS-uEU.js";import"./CollapsiblePanel-D9qMD8XV.js";import"./MultiColumnSortDialog-PDW2qhn_.js";import"./MenuTrigger-DTllJkLA.js";import"./CompositeItem-BQu1HqMn.js";import"./ToolbarRootContext-C0072MJ6.js";import"./getDisabledMountTransitionStyles-BgNKG7FQ.js";import"./getPseudoElementBounds-D0-vuA8S.js";import"./chevron-down-DzHcaasw.js";import"./index-st8A3vYR.js";import"./error-B0Y2Fvc9.js";import"./BaseCbacBanner-B6x908m9.js";import"./makeExternalStore-DbPOioRC.js";import"./Tooltip-BQlEvxbG.js";import"./PopoverPopup-Bogu5QY8.js";import"./debounce-B2i6LMnR.js";import"./useOsdkClient-C2Vmxc_K.js";import"./tick-TwV86bBe.js";import"./DropdownField-DQTgwTYN.js";import"./isEqual-DuJXPvSG.js";import"./withOsdkMetrics-CvR6KWeT.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
