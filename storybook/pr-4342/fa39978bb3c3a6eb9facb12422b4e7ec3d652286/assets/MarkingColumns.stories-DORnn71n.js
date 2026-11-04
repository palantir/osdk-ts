import{f as p,j as e}from"./iframe-BAYjgPn_.js";import{O as i}from"./object-table-D44_X8da.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BJCl-bRv.js";import"./Table-O1TVlUbQ.js";import"./index-DN0zke96.js";import"./Dialog-MEJqogj4.js";import"./cross-BXQxs_UM.js";import"./svgIconContainer-Bdz9mcrS.js";import"./useBaseUiId-Btxh7Hdv.js";import"./InternalBackdrop-B546RbTG.js";import"./composite-CSv2xCWn.js";import"./index-BCKNZ_-u.js";import"./index-ewU9n-Bp.js";import"./index-B1NZC5HL.js";import"./useEventCallback-CIqiLNSA.js";import"./SkeletonBar-CIlY-zEK.js";import"./LoadingCell-Be4wMunU.js";import"./ColumnConfigDialog-BRNq5mWj.js";import"./DraggableList-Dkqic5TC.js";import"./search-iSsdT6KZ.js";import"./Input-1Y2R_X8G.js";import"./useControlled-SaIcnxAb.js";import"./Button-Zo--VZAt.js";import"./small-cross-Bf2eb-iw.js";import"./ActionButton-CZYvn9-t.js";import"./Checkbox-C5nK5KW-.js";import"./useValueChanged-ZImMoGMC.js";import"./CollapsiblePanel-GPhcuTeQ.js";import"./MultiColumnSortDialog-CaZRQ9xm.js";import"./MenuTrigger-Dtx__UvO.js";import"./CompositeItem-C-2rS0Vr.js";import"./ToolbarRootContext-Vpkb3Bpo.js";import"./getDisabledMountTransitionStyles-ChyNZQXU.js";import"./getPseudoElementBounds-bTOtxTD8.js";import"./chevron-down-B1sc9iOG.js";import"./index-B-spnNIp.js";import"./error-DapfmyD2.js";import"./BaseCbacBanner-BVGponFm.js";import"./makeExternalStore-CGIpAmlW.js";import"./Tooltip-Cg4WV2Y-.js";import"./PopoverPopup-pcdPHlvL.js";import"./debounce-Bwm-jsNA.js";import"./useOsdkClient-qospIppq.js";import"./tick-Bm2gRhmA.js";import"./DropdownField-BO1TnfSs.js";import"./isEqual-C3vn-jJx.js";import"./withOsdkMetrics-DE_nej2a.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
