import{f as p,j as e}from"./iframe-88cR0Kb6.js";import{O as i}from"./object-table-sPJ6fNUO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-YlgatCnn.js";import"./Table-CsDV1Dux.js";import"./index-B3iu9Z4K.js";import"./Dialog-DqUj8fbX.js";import"./cross-vHFr3mSH.js";import"./svgIconContainer-BWrQPgSJ.js";import"./useBaseUiId-DM5phI6w.js";import"./InternalBackdrop-DdO1TR54.js";import"./composite-D2yt_gez.js";import"./index-m81VPS-N.js";import"./index-CGLm8TXz.js";import"./index-TuaMuo_5.js";import"./useEventCallback-BY6bNS44.js";import"./SkeletonBar-DL6i_PYS.js";import"./LoadingCell-Q6oUQvVQ.js";import"./ColumnConfigDialog-Cdup8hG_.js";import"./DraggableList-BSEACjIX.js";import"./search-D2eeLv3Q.js";import"./Input-CBeXc1FM.js";import"./useControlled-B1WACGZl.js";import"./Button-CfFrXY9_.js";import"./small-cross-TgiDvwiu.js";import"./ActionButton-DilKZ_dk.js";import"./Checkbox-DTID00qk.js";import"./useValueChanged-CKD-6pQy.js";import"./CollapsiblePanel-LjlawlAT.js";import"./MultiColumnSortDialog-C2L2JOK1.js";import"./MenuTrigger-B6iDWpHK.js";import"./CompositeItem-x-J85oX3.js";import"./ToolbarRootContext-B6xb1eEg.js";import"./getDisabledMountTransitionStyles-EWMBCi1t.js";import"./getPseudoElementBounds-CBBgF56s.js";import"./chevron-down-J3WtM_eJ.js";import"./index-CIeymtFj.js";import"./error-B6tbVTJ_.js";import"./BaseCbacBanner-MFdFNXXS.js";import"./makeExternalStore-DzZ4mLu7.js";import"./Tooltip-BDliEVDr.js";import"./PopoverPopup-CPw-5q_W.js";import"./debounce-R5snSJSd.js";import"./useOsdkClient-CQKftRkO.js";import"./tick-BXAWhEKb.js";import"./DropdownField-C6Sig76U.js";import"./isEqual-D3N0BFL-.js";import"./withOsdkMetrics-BByVeH1n.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
