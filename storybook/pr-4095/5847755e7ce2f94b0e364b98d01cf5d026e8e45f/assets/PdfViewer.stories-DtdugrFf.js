import{j as r,M as s}from"./iframe-CYRFLlEO.js";import{P as p}from"./pdf-viewer-BvW-6Y5u.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BB-xCVYZ.js";import"./preload-helper-ChluBdBb.js";import"./PdfViewer-CK3I0D9i.js";import"./index-DgFaecLv.js";import"./BasePdfViewer-D-6tZgOu.js";import"./BasePdfViewer.module.css-T_KvBq1y.js";import"./PdfViewerAnnotationLayer-im5bThOJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-eZ3PryMZ.js";import"./PdfViewerOutlineSidebar-BldZvSyh.js";import"./PdfViewerSidebarHeader-BxMTkas1.js";import"./useBaseUiId-CT8xqfBr.js";import"./useControlled-D5UJw3Fq.js";import"./CompositeRoot-D_az8Pw9.js";import"./CompositeItem-EG5A4Ctt.js";import"./ToolbarRootContext-DIul4zOr.js";import"./composite-DBnR4BVO.js";import"./svgIconContainer-DXkF8wrQ.js";import"./PdfViewerSearchBar-iMNQiEzA.js";import"./chevron-up-y_OSlWJk.js";import"./chevron-down-QtZPW63O.js";import"./cross-DBpyyU9C.js";import"./PdfViewerSidebar-Do79OJIq.js";import"./index-BjdI_b09.js";import"./index-C8sdjwtp.js";import"./index-BCjTJI3_.js";import"./PdfViewerToolbar-DsoOXCfk.js";import"./Button-CGEba4bS.js";import"./chevron-right-DZ_Enpwr.js";import"./Input-CemPVcnY.js";import"./search-gMbThLhN.js";import"./spin-ByUU5jdD.js";import"./error-CvsmrG6o.js";import"./withOsdkMetrics-Ihi9z85c.js";import"./makeExternalStore-B-fBg6wj.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
