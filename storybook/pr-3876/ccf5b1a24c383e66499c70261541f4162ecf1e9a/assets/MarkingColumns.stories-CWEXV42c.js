import{f as p,j as e}from"./iframe-6Uhngy72.js";import{O as i}from"./object-table-C6Uj0Pkf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BuO-Wqte.js";import"./Table-CWOOYgqj.js";import"./index-D6AVV8eE.js";import"./Dialog-Cp_zujfc.js";import"./cross-BcSy3qdU.js";import"./svgIconContainer-UGK0c4xl.js";import"./useBaseUiId-BRxptNv-.js";import"./InternalBackdrop-B6plQtwS.js";import"./composite-DJDJ56jv.js";import"./index-LZISWei8.js";import"./index-QHeoXjyH.js";import"./index-DUcYp8wh.js";import"./useEventCallback-55Jmx4oa.js";import"./SkeletonBar-DWJUdzHJ.js";import"./LoadingCell-C-pV1fqW.js";import"./ColumnConfigDialog-DTcG2XGs.js";import"./DraggableList-DCtihdtv.js";import"./search-BdfvUgnd.js";import"./Input-CofwDVZ0.js";import"./useControlled-DIt55qQJ.js";import"./Button-DCQ8ovOH.js";import"./small-cross-C_sErh76.js";import"./ActionButton-Bx3EdeP6.js";import"./Checkbox-B83JJ3kM.js";import"./useValueChanged-BiRQuPMj.js";import"./CollapsiblePanel-DYVVCbmI.js";import"./MultiColumnSortDialog-BsOrp9Qv.js";import"./MenuTrigger-BvyCd2a-.js";import"./CompositeItem-DLH8bcOo.js";import"./ToolbarRootContext-fpBVACf_.js";import"./getDisabledMountTransitionStyles-VHaa4rjf.js";import"./getPseudoElementBounds-vA5019Qs.js";import"./chevron-down-BwrGawkK.js";import"./index-CsXiYC9Y.js";import"./error-CxRJmZZd.js";import"./BaseCbacBanner-D6VOHJWP.js";import"./makeExternalStore-BQsPVGuf.js";import"./Tooltip-BUoyDTBb.js";import"./PopoverPopup-3cB-7Tot.js";import"./debounce-DVmaMtUt.js";import"./useOsdkClient-TrnbRu4h.js";import"./tick-BL3gPeuy.js";import"./DropdownField-DobyXSx1.js";import"./isEqual-BPJoJQWG.js";import"./withOsdkMetrics-Ca-0BTyV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
