import{f as p,j as e}from"./iframe-CTo_Vzji.js";import{O as i}from"./object-table-DVHVRi7P.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DdmOa013.js";import"./Table-Cz1dp7qS.js";import"./index-Db0bQB9_.js";import"./Dialog-B3mADZPJ.js";import"./cross-CFrNYW1-.js";import"./svgIconContainer-BrN7Rq3k.js";import"./useBaseUiId-DRC8ORV_.js";import"./InternalBackdrop-B6_Ng-lQ.js";import"./composite-hvvr6RcJ.js";import"./index-Dn1u0MHw.js";import"./index-BIdADT_u.js";import"./index-1hzAV9CV.js";import"./useEventCallback-B2VUA3Ib.js";import"./SkeletonBar-BWauSf1D.js";import"./LoadingCell-BeAA-vyA.js";import"./ColumnConfigDialog-iH6rL_aA.js";import"./DraggableList-DpYGw85c.js";import"./search-DYJawdx1.js";import"./Input-EzzRC5FT.js";import"./useControlled-BoNXrNA6.js";import"./Button-C3RHmX63.js";import"./small-cross-Bujce-By.js";import"./ActionButton-3lyzIepJ.js";import"./Checkbox-CDyO9YtU.js";import"./useValueChanged-ChX7As4m.js";import"./CollapsiblePanel-Bm45zRZW.js";import"./MultiColumnSortDialog-Bp4rNbQX.js";import"./MenuTrigger-DDwLPAM_.js";import"./CompositeItem-DzuUOttU.js";import"./ToolbarRootContext-Dbn3i0X6.js";import"./getDisabledMountTransitionStyles-DJOlxGxJ.js";import"./getPseudoElementBounds-B742Mdks.js";import"./chevron-down-DsgPE9Kl.js";import"./index-q7czgvlb.js";import"./error-CDiUdq4p.js";import"./BaseCbacBanner-DMNhQz7R.js";import"./makeExternalStore-MWbMkrip.js";import"./Tooltip-BYL374NH.js";import"./PopoverPopup-ChB2ddvw.js";import"./debounce-B89wugMt.js";import"./useOsdkClient-B9u8vjAo.js";import"./tick-YWI0wct4.js";import"./DropdownField-ac3lkk8_.js";import"./isEqual-D6XBVD8m.js";import"./withOsdkMetrics-CosmvfGt.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
