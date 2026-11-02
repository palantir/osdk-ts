import{f as p,j as e}from"./iframe-BMT91W1Z.js";import{O as i}from"./object-table-CHLHgtoY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-rvXeaCGs.js";import"./Table-DrLOC9YX.js";import"./index-Bx6Ivmjs.js";import"./Dialog-Ufu8hoIp.js";import"./cross-C9h9qNTe.js";import"./svgIconContainer-B3o1vMYf.js";import"./useBaseUiId-B4USe1gj.js";import"./InternalBackdrop-C3S75Ewn.js";import"./composite-D3rTrYkW.js";import"./index-xfqQSbot.js";import"./index-DEWgT4HO.js";import"./index-Biu6iMsk.js";import"./useEventCallback-BCuXMQng.js";import"./SkeletonBar-Cwkgfi-Z.js";import"./LoadingCell-JWak5BZo.js";import"./ColumnConfigDialog-4HXhX7RA.js";import"./DraggableList-Cg20omLf.js";import"./search-CYSVIzHU.js";import"./Input-B-23mNdu.js";import"./useControlled-L0eiJeCg.js";import"./Button-Djft0tAo.js";import"./small-cross-CyV6m0vF.js";import"./ActionButton-CUmEJmAC.js";import"./Checkbox-D_hza65E.js";import"./useValueChanged-Byf4MJrh.js";import"./CollapsiblePanel-C79Pa1Xk.js";import"./MultiColumnSortDialog-BVPqBnxe.js";import"./MenuTrigger-E2fABQOx.js";import"./CompositeItem-CssM4Gze.js";import"./ToolbarRootContext-D1Qf3sGL.js";import"./getDisabledMountTransitionStyles-w-M_QDiA.js";import"./getPseudoElementBounds-CvnYPr_B.js";import"./chevron-down-C4MVGpCZ.js";import"./index-BVpohJtF.js";import"./error-Dzj1sGPq.js";import"./BaseCbacBanner-Dv7E15sA.js";import"./makeExternalStore-DBhSiWtQ.js";import"./Tooltip-CACfcbwY.js";import"./PopoverPopup-aEwmg3S0.js";import"./debounce-D9qK1m7a.js";import"./useOsdkClient-CBtweC4d.js";import"./tick-DAiyHf9d.js";import"./DropdownField-BYApLNcp.js";import"./isEqual-CxBadIyU.js";import"./withOsdkMetrics-DgSik2_o.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
