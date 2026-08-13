import{j as r,M as s}from"./iframe-B6SlknkT.js";import{P as p}from"./pdf-viewer-eA73x0N3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Ca2-3Fky.js";import"./preload-helper-CiWAtvVo.js";import"./PdfRenderer-DkWRy2JF.js";import"./index-Cisl_9Mo.js";import"./PdfViewer-zlyy4Rkx.js";import"./PdfViewer.module.css-Bxdb15rj.js";import"./PdfViewerAnnotationLayer-DYUiHTye.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DeW9ICZ2.js";import"./PdfViewerOutlineSidebar-CyQHV7AW.js";import"./PdfViewerSidebarHeader-BfAdEARd.js";import"./useBaseUiId-DtAmNbh5.js";import"./useControlled-PYuq7DgD.js";import"./CompositeRoot-BmfMEPKZ.js";import"./CompositeItem-TSZ5fJAo.js";import"./ToolbarRootContext-2IHK8Ctj.js";import"./composite-P-ykFSG-.js";import"./svgIconContainer-DvLmNigv.js";import"./PdfViewerSearchBar-BXiKHh7a.js";import"./chevron-up-nUBx5ISU.js";import"./chevron-down-DxJyaq1h.js";import"./cross-K0XOfymX.js";import"./PdfViewerSidebar-CzzTp4iV.js";import"./index-WO9aHBrQ.js";import"./index-BBz1sS-n.js";import"./index-BMjONJHt.js";import"./PdfViewerToolbar-VTw6-fmt.js";import"./Button-F8n7DYb6.js";import"./chevron-right-B1q1SYld.js";import"./Input-CXXJHcyj.js";import"./search-xv1rsfPw.js";import"./spin-DhIamCqO.js";import"./error-Bv29R1uB.js";import"./withOsdkMetrics-YbnoeFLv.js";import"./makeExternalStore-JliLFxhM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
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
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
