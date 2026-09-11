import{j as r,M as s}from"./iframe-CNvI9eAL.js";import{P as p}from"./pdf-viewer-CXtJd5ro.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DDVXgaaH.js";import"./preload-helper-CRF54Ery.js";import"./PdfViewer-BBsjXMcr.js";import"./index-BTFSWIKz.js";import"./BasePdfViewer-BpaEmYpC.js";import"./BasePdfViewer.module.css-DtOdmMSZ.js";import"./PdfViewerAnnotationLayer-VXAd5EYd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DHm_QIBi.js";import"./PdfViewerOutlineSidebar-JG8AQU9N.js";import"./PdfViewerSidebarHeader-BuYzVMzc.js";import"./useBaseUiId-CxeAu3mm.js";import"./useControlled-pDp_EzUa.js";import"./CompositeRoot-CPaC8xdK.js";import"./CompositeItem-aRd3tSux.js";import"./ToolbarRootContext-CTMDQSca.js";import"./composite-Db3opbub.js";import"./svgIconContainer-BBVMgJTA.js";import"./PdfViewerSearchBar-Dp0KQRFH.js";import"./chevron-up-B9CyFkwK.js";import"./chevron-down-DEvcNxOi.js";import"./cross--RfUm2YZ.js";import"./PdfViewerSidebar-C17ZebRC.js";import"./index-BHMz7Anj.js";import"./index-V8dSKZeO.js";import"./index-Cvipkoc1.js";import"./PdfViewerToolbar-CqrJ5mF1.js";import"./Button-CfqXNV8N.js";import"./chevron-right-C9Ooxh0y.js";import"./Input-CfSk64xN.js";import"./search-BesbbJYF.js";import"./spin-CGg3nwE4.js";import"./error-CG9g-M1f.js";import"./withOsdkMetrics-D4xumH8Q.js";import"./makeExternalStore-DrmCh3vo.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
