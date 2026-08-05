import{f as p,j as e}from"./iframe-DjO1Y5KD.js";import{O as i}from"./object-table-BXEabZx_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DHosF_Vr.js";import"./Table-CXPmdf4i.js";import"./index-Da8z7oEc.js";import"./Dialog-BvkiDU_U.js";import"./cross-tGA7XqzW.js";import"./svgIconContainer-D6HUiu07.js";import"./useBaseUiId-Cn6_ygUf.js";import"./InternalBackdrop-DC3S6jXh.js";import"./composite-Bd626ASs.js";import"./index-BUxTRb1k.js";import"./index-D93f91Ms.js";import"./index-Dw_Bxqsc.js";import"./useEventCallback-C7x6nWmr.js";import"./SkeletonBar-C-t-5D7v.js";import"./LoadingCell-I1lAaO0m.js";import"./ColumnConfigDialog-D0FmGrhU.js";import"./DraggableList-FCV6IGLZ.js";import"./search-1bd_RPWo.js";import"./Input-DiRNvOoy.js";import"./useControlled-ai9ga_yt.js";import"./isEqual-4uG8zWUg.js";import"./isObject-kNaBNgmh.js";import"./Button-BNxBvJnR.js";import"./ActionButton-BIZrEYUh.js";import"./Checkbox-W-lD-xoQ.js";import"./useValueChanged-KhncHdx6.js";import"./CollapsiblePanel-Dh7E4-x5.js";import"./MultiColumnSortDialog-CpFd9R_l.js";import"./MenuTrigger-OMzSeneh.js";import"./CompositeItem-CRMRF0tg.js";import"./ToolbarRootContext-B8x2s3ZI.js";import"./getDisabledMountTransitionStyles-BRX2szHm.js";import"./getPseudoElementBounds-BDK5ESci.js";import"./chevron-down-pR2fh_mT.js";import"./index-BFpVUcDF.js";import"./error-a7j3r22v.js";import"./BaseCbacBanner--QhyR6T3.js";import"./makeExternalStore-Cp0-nqWS.js";import"./Tooltip-BhgqSq7E.js";import"./PopoverPopup-26HR0rR7.js";import"./toNumber-sv9WmTId.js";import"./useOsdkClient-2X6mK27g.js";import"./tick-CQ81Odyk.js";import"./DropdownField-BItJqzBd.js";import"./withOsdkMetrics-DNr9JQQP.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
