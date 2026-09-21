import{j as r,M as s}from"./iframe-8nXJMjDB.js";import{P as p}from"./pdf-viewer-ByFtzlu8.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CM_9pKIr.js";import"./preload-helper-CJKRkHxR.js";import"./PdfViewer-T0L55MpZ.js";import"./index-DJbKq1-5.js";import"./BasePdfViewer-D35u6OGZ.js";import"./BasePdfViewer.module.css-CtSmPbEc.js";import"./PdfViewerAnnotationLayer-Dtw--AP7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CxmIKr_S.js";import"./PdfViewerOutlineSidebar-CJNyj8oa.js";import"./PdfViewerSidebarHeader-BiAutn6M.js";import"./useBaseUiId-DpDF9vet.js";import"./useControlled-CUJ7pCf5.js";import"./CompositeRoot-DGrYXncj.js";import"./CompositeItem-CfRgOFRs.js";import"./ToolbarRootContext-BLLK3VJo.js";import"./composite-Bp-oM0Et.js";import"./svgIconContainer-olalqAcz.js";import"./PdfViewerSearchBar-DfDO81VV.js";import"./chevron-up-BpQYE4lq.js";import"./chevron-down-Cc9laCGb.js";import"./cross-CpVH0STr.js";import"./PdfViewerSidebar-BpCElZgR.js";import"./index-C0-gYeVA.js";import"./index-CEoWz6xw.js";import"./index-2q5Mchef.js";import"./PdfViewerToolbar-BO395ZrW.js";import"./Button-BIf78uDw.js";import"./chevron-right-DvItgqoN.js";import"./Input-QBUJ65eb.js";import"./search-Bnief77D.js";import"./spin-6ozaxb7X.js";import"./error-BhxtiV9P.js";import"./withOsdkMetrics-C8MRYO6c.js";import"./makeExternalStore-DMgVpl9f.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
