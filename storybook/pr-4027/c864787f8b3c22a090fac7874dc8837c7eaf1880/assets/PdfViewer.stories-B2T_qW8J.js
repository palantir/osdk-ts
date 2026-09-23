import{j as r,M as s}from"./iframe-Cmp4Wz_P.js";import{P as p}from"./pdf-viewer-MJ3YVRdp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CvTogFHz.js";import"./preload-helper-Da0vPE9s.js";import"./PdfViewer-JFt_cQKI.js";import"./index-xjnGmoVb.js";import"./BasePdfViewer-B--ugiao.js";import"./BasePdfViewer.module.css-CoTO2d0k.js";import"./PdfViewerAnnotationLayer-BkvB7-AU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-GDs6R5L_.js";import"./PdfViewerOutlineSidebar-DJ3mcL9D.js";import"./PdfViewerSidebarHeader-BOSjbZqC.js";import"./useBaseUiId-BcNPDCTs.js";import"./useControlled-CRN5n83g.js";import"./CompositeRoot-ChMeRNET.js";import"./CompositeItem-CC2Ai5yy.js";import"./ToolbarRootContext-_b46dMtv.js";import"./composite-hwQ1nQqf.js";import"./svgIconContainer-Clw7VTOr.js";import"./PdfViewerSearchBar-CwqprWQG.js";import"./chevron-up-DpyzxJ6t.js";import"./chevron-down-DQjw3lMC.js";import"./cross-Cpc_V52N.js";import"./PdfViewerSidebar-q4mE2SLR.js";import"./index-DLqh48ip.js";import"./index-DCv1fgBH.js";import"./index-C0uAgYnw.js";import"./PdfViewerToolbar-0TjYBvFi.js";import"./Button-CjafA2QB.js";import"./chevron-right-DgYFai9c.js";import"./Input-Dxt6Zigl.js";import"./search-DwQ9m9I4.js";import"./spin-B7UFz0WI.js";import"./error-BUufFz3W.js";import"./withOsdkMetrics-t52t2MsY.js";import"./makeExternalStore-C1wNmiU_.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
