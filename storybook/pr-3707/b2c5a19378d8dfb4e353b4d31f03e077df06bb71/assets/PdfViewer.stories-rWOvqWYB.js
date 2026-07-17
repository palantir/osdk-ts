import{j as r,M as s}from"./iframe-DsHB1h2g.js";import{P as p}from"./pdf-viewer-DtQd6_Mu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DlACl0ey.js";import"./preload-helper-B40hWS9w.js";import"./PdfRenderer-J3_KZj4z.js";import"./index-CKUZ_TUT.js";import"./PdfViewer-dq2n0tcE.js";import"./PdfViewer.module.css-MOAiY4RG.js";import"./PdfViewerAnnotationLayer-BD5tMcBI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Sj6m_Tcw.js";import"./PdfViewerOutlineSidebar-1-_O9d0p.js";import"./PdfViewerSidebarHeader-CEUElG-K.js";import"./useBaseUiId-BwrBLP0c.js";import"./useControlled-DMd_OTds.js";import"./CompositeRoot-BGimUuu7.js";import"./CompositeItem-BYcfULo7.js";import"./ToolbarRootContext-BXcgRWRH.js";import"./composite-CQvlWJoL.js";import"./svgIconContainer-CZqp4OYe.js";import"./PdfViewerSearchBar-D6S3zhCp.js";import"./chevron-up-BWX_LM3C.js";import"./chevron-down-CHXoWe6z.js";import"./cross-Ch8vFynE.js";import"./PdfViewerSidebar-BmyeBHiQ.js";import"./index-TWZ83bVO.js";import"./index-CkiXMDS-.js";import"./index-Bvazx4q2.js";import"./PdfViewerToolbar-By8L10cv.js";import"./Button-5b5Z7Y6u.js";import"./chevron-right-C1WwMDcl.js";import"./Input-B7CylvHT.js";import"./search-CRb6URYx.js";import"./spin-BDnDnotk.js";import"./error-_bcdfIZM.js";import"./withOsdkMetrics-B8yLsJJu.js";import"./makeExternalStore-Cxo-Klo3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
