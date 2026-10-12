import{j as r,M as s}from"./iframe-BpjAczHY.js";import{P as p}from"./pdf-viewer-BpI9Zkao.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-jQ3Qbbtk.js";import"./preload-helper-n775iZGy.js";import"./PdfViewer-BeADI83B.js";import"./index-B865hR58.js";import"./BasePdfViewer-Bs-PYHqW.js";import"./BasePdfViewer.module.css-CdCa7SpC.js";import"./PdfViewerAnnotationLayer-Cvba9I0T.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-smPM5xw7.js";import"./PdfViewerOutlineSidebar-DT9fWmfF.js";import"./PdfViewerSidebarHeader-BfFPs0_q.js";import"./useBaseUiId-99hOwMJj.js";import"./useControlled-DGtH5z0Q.js";import"./CompositeRoot-BExAPuHl.js";import"./CompositeItem-DG1i5uV0.js";import"./ToolbarRootContext-BQn0Rtks.js";import"./composite-Dz8fJC5u.js";import"./svgIconContainer-C3jJhmpt.js";import"./PdfViewerSearchBar-CY_IZ2Q1.js";import"./chevron-up-B1R5UvP4.js";import"./chevron-down-_ycbe8m1.js";import"./cross-C6qTQWHW.js";import"./PdfViewerSidebar-xMH76uaQ.js";import"./index-DmLzhgLv.js";import"./index-CL2exV6n.js";import"./index-BGlvu2Wm.js";import"./PdfViewerToolbar-BvkyEx9M.js";import"./Button-Dj8yiv60.js";import"./chevron-right-DhbdHIx0.js";import"./Input-BK2Nmyqv.js";import"./search-NVe0lSCh.js";import"./spin-BgFAhocs.js";import"./error-Biwv1K3K.js";import"./withOsdkMetrics-C6lIiCV7.js";import"./makeExternalStore-RoIlT1g0.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
