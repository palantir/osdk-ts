import{j as r,M as s}from"./iframe-Dua4ajQH.js";import{P as p}from"./pdf-viewer-Ddug9GxI.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-nSxGWJnH.js";import"./preload-helper-TWiFBZiW.js";import"./PdfViewer-CjUl_7F_.js";import"./index-B5QPpnt_.js";import"./BasePdfViewer-Dk9-oghc.js";import"./BasePdfViewer.module.css-5tfmE1xA.js";import"./PdfViewerAnnotationLayer-CutbUCPh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CdLE5cE-.js";import"./PdfViewerOutlineSidebar-B7pF9u52.js";import"./PdfViewerSidebarHeader-BVPqNuoI.js";import"./useBaseUiId-BiStwtEQ.js";import"./useControlled-jEZs-eRF.js";import"./CompositeRoot-BXtLIDni.js";import"./CompositeItem-BwhFHjMK.js";import"./ToolbarRootContext-jICZlJZR.js";import"./composite-C1niPINm.js";import"./svgIconContainer-BndmJKKI.js";import"./PdfViewerSearchBar-D-eO1BqE.js";import"./chevron-up-DdFHnGNP.js";import"./chevron-down-CBHx2nKD.js";import"./cross-Dk_ZgApr.js";import"./PdfViewerSidebar-BGmOBLQK.js";import"./index-kT6ASJhA.js";import"./index-DfHqmq9q.js";import"./index-X9-XOgeq.js";import"./PdfViewerToolbar-h81T4AWN.js";import"./Button--2vsDgC3.js";import"./chevron-right-CzSXrsTv.js";import"./Input-CWXiSgRy.js";import"./search-BpzzW9g6.js";import"./spin-DXSucndk.js";import"./error-B8MXwNx9.js";import"./withOsdkMetrics-BPBDIPLq.js";import"./makeExternalStore-C1Ti9SLi.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var t,m,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
