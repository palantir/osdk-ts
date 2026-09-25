import{j as r,M as s}from"./iframe-DD6NR-qI.js";import{P as p}from"./pdf-viewer-zDXAeh9G.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BEXeyuot.js";import"./preload-helper-BhGDsbwZ.js";import"./PdfViewer-B4bt9OAg.js";import"./index-BtwIbT4Z.js";import"./BasePdfViewer-BuKvDoZf.js";import"./BasePdfViewer.module.css-BHKtURpe.js";import"./PdfViewerAnnotationLayer-DVtLhZ9W.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BCxONV7u.js";import"./PdfViewerOutlineSidebar-BZ3RUbiI.js";import"./PdfViewerSidebarHeader-8jnbbNVY.js";import"./useBaseUiId-CEPmW6Nu.js";import"./useControlled-DC0uCH14.js";import"./CompositeRoot-DpZT-M0d.js";import"./CompositeItem-CNTLKPeP.js";import"./ToolbarRootContext-BShu1aKH.js";import"./composite-DjgEQHpT.js";import"./svgIconContainer-DsJ3_wfj.js";import"./PdfViewerSearchBar-wtzeQnFm.js";import"./chevron-up-Cx63se0N.js";import"./chevron-down-IfIl88XA.js";import"./cross-CLF7AClR.js";import"./PdfViewerSidebar-D9DJcpO6.js";import"./index-BXR8oj5v.js";import"./index--itJRcDL.js";import"./index-Bmje4swP.js";import"./PdfViewerToolbar-C5Nn1am8.js";import"./Button-C_-ilsri.js";import"./chevron-right-Chzuz2Xc.js";import"./Input-B4mWWySb.js";import"./search-DLBTsCln.js";import"./spin-BVWeMfK8.js";import"./error-DRCC_cDq.js";import"./withOsdkMetrics-C5Oq6SEB.js";import"./makeExternalStore-opb-uo7f.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
