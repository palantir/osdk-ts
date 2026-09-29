import{j as r,M as s}from"./iframe-CrY1A4wu.js";import{P as p}from"./pdf-viewer-Mrm4ibD3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BEjPoSMa.js";import"./preload-helper-BFzS6-eq.js";import"./PdfViewer-CM6Po-dW.js";import"./index-BbE0G0zt.js";import"./BasePdfViewer-DuIfvs-u.js";import"./BasePdfViewer.module.css-BDMKe1-V.js";import"./PdfViewerAnnotationLayer-C1KYVwCx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DOlf-uUA.js";import"./PdfViewerOutlineSidebar-BJ8lf9vr.js";import"./PdfViewerSidebarHeader-_7vlhdDc.js";import"./useBaseUiId-Cs8gIZmf.js";import"./useControlled-BE-RLK2-.js";import"./CompositeRoot-B3d_W05X.js";import"./CompositeItem-51mDofen.js";import"./ToolbarRootContext-Coy-eXOe.js";import"./composite-AFOTQ2-F.js";import"./svgIconContainer-B3_v06mI.js";import"./PdfViewerSearchBar-BvYZQiI7.js";import"./chevron-up-DlFp49_F.js";import"./chevron-down-Bu2NJksL.js";import"./cross-CzBl0tbg.js";import"./PdfViewerSidebar-CIvOCKcy.js";import"./index-CAMlkz_c.js";import"./index-C3rJi8nM.js";import"./index-DV4D4tWk.js";import"./PdfViewerToolbar-CEF04A50.js";import"./Button-C9zZFhV6.js";import"./chevron-right-CZUwqizw.js";import"./Input-DUtiftPz.js";import"./search-DZE4oD9r.js";import"./spin-Dn3nTwY1.js";import"./error-CvnsbzcB.js";import"./withOsdkMetrics-CHUgiBtf.js";import"./makeExternalStore-tkECEc_3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
