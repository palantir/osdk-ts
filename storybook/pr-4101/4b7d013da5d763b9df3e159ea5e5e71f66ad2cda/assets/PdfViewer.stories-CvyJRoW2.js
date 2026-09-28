import{j as r,M as s}from"./iframe-CxXsZYaL.js";import{P as p}from"./pdf-viewer-DHLxMldr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Lk41-Zfz.js";import"./preload-helper-Dt2THrkM.js";import"./PdfViewer-ClXt_E6V.js";import"./index-DPiocoAy.js";import"./BasePdfViewer-CfnI9GnA.js";import"./BasePdfViewer.module.css-Dgm47h2P.js";import"./PdfViewerAnnotationLayer-BH8zIGdl.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument--Zl3u4P2.js";import"./PdfViewerOutlineSidebar-B3sE-pAy.js";import"./PdfViewerSidebarHeader-p1Dv2uHI.js";import"./useBaseUiId-Bv8MvEl3.js";import"./useControlled-CCbrWuYr.js";import"./CompositeRoot-ZVj8zSQs.js";import"./CompositeItem-ltfNlpKQ.js";import"./ToolbarRootContext-DwwnRCz6.js";import"./composite-DTKgIMa8.js";import"./svgIconContainer-B1eyjN3k.js";import"./PdfViewerSearchBar-BAp3wtcq.js";import"./chevron-up-fhAvyM3e.js";import"./chevron-down-LKr_hJQt.js";import"./cross-DyjS402Z.js";import"./PdfViewerSidebar-CWpPuR_b.js";import"./index-CvA8CM7Y.js";import"./index-Cegb6wp-.js";import"./index-BIZErmx-.js";import"./PdfViewerToolbar-Bu_bRuTJ.js";import"./Button-By61fxAS.js";import"./chevron-right-De3JpDtO.js";import"./Input-CWxuf688.js";import"./search-DvGGeQU1.js";import"./spin-CZmLGr5c.js";import"./error-D5twijSF.js";import"./withOsdkMetrics-BmsRu25F.js";import"./makeExternalStore-C8dW_5p-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
