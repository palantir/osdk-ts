import{j as r,M as s}from"./iframe-B4a1M7YQ.js";import{P as p}from"./pdf-viewer-Y9WPk40H.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cawc0j_X.js";import"./preload-helper-DKPqJros.js";import"./PdfViewer-dDdBl7Sb.js";import"./index-CEnsUSRk.js";import"./BasePdfViewer-BkaV4VOo.js";import"./BasePdfViewer.module.css-bMkMkFT2.js";import"./PdfViewerAnnotationLayer-BCUrjQay.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CgXBvMsM.js";import"./PdfViewerOutlineSidebar-CpGePzes.js";import"./PdfViewerSidebarHeader-BDQgtbbO.js";import"./useBaseUiId-BdmpNM9R.js";import"./useControlled-BwTzIPm3.js";import"./CompositeRoot-C9GneDFH.js";import"./CompositeItem-DufHQAne.js";import"./ToolbarRootContext-BOcgfqza.js";import"./composite-DYFcQXK_.js";import"./svgIconContainer-dKO81zeU.js";import"./PdfViewerSearchBar-799O8IxK.js";import"./chevron-up-CcQ54ayo.js";import"./chevron-down-DCl-dnpE.js";import"./cross-DdxU_GSh.js";import"./PdfViewerSidebar-BE0Msg8Q.js";import"./index-C8n7J5dc.js";import"./index-BGoKHZOt.js";import"./index-Bzr9bqEh.js";import"./PdfViewerToolbar-CzvqQFDK.js";import"./Button-aRzyNEAE.js";import"./chevron-right-CvbAuBd2.js";import"./Input-CQ1CPhUS.js";import"./search-ByNZE4lU.js";import"./spin-DQQDOoFa.js";import"./error-B-p2MHss.js";import"./withOsdkMetrics-BXRIKmAl.js";import"./makeExternalStore-bi4xmOXE.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
