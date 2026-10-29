import{j as r,M as s}from"./iframe-CzBdkE8j.js";import{P as p}from"./pdf-viewer-LG0ZcE90.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CmWiMwMa.js";import"./preload-helper-DAcIQxKV.js";import"./PdfViewer-O-2Z2I-n.js";import"./index-nrSAC82l.js";import"./BasePdfViewer-CszNyS7H.js";import"./BasePdfViewer.module.css-2IylVQiv.js";import"./PdfViewerAnnotationLayer-DJVcX7Ap.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CQBrIWUh.js";import"./PdfViewerOutlineSidebar-DYzzjRrs.js";import"./PdfViewerSidebarHeader-B4JQy9mb.js";import"./useBaseUiId-DYoSQlXN.js";import"./useControlled-CvawZQ67.js";import"./CompositeRoot-BcgsZG99.js";import"./CompositeItem-6yW-EHF-.js";import"./ToolbarRootContext-B8cFWt1N.js";import"./composite-NGmoik8z.js";import"./svgIconContainer-vvQ2H1Kh.js";import"./PdfViewerSearchBar-CURGgN75.js";import"./chevron-up-DUuWiXbH.js";import"./chevron-down-BMeIm_My.js";import"./cross-DJGmKxbL.js";import"./PdfViewerSidebar-BVrY5gcF.js";import"./index-BHtlx1SN.js";import"./index-DxeeQ0ql.js";import"./index-DjEUrq-J.js";import"./PdfViewerToolbar-Bcpmhoj5.js";import"./Button-BbinMP78.js";import"./chevron-right-oKIUPxi8.js";import"./Input-C91PS3np.js";import"./search-G4OheDlQ.js";import"./spin-tr5SsvTL.js";import"./error-BChTcIQI.js";import"./withOsdkMetrics-BruKftXq.js";import"./makeExternalStore-oT7e1se-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
