import{j as r,M as s}from"./iframe-CVTiJeQi.js";import{P as p}from"./pdf-viewer-BQ6-rewB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DcF9m3mF.js";import"./preload-helper-t7rd3I4r.js";import"./PdfRenderer-DhxRzToX.js";import"./index-E2SQRiqv.js";import"./PdfViewer-CLw7Q2U8.js";import"./PdfViewer.module.css-D3yntRWT.js";import"./PdfViewerAnnotationLayer-UDwrvONS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DYN6dpqj.js";import"./PdfViewerOutlineSidebar-CWLXb0J3.js";import"./PdfViewerSidebarHeader-dxkti12f.js";import"./useBaseUiId-DCP2Zvxd.js";import"./useControlled-ede6ACjE.js";import"./CompositeRoot-rHxk9sQT.js";import"./CompositeItem-DXy3Ipuq.js";import"./ToolbarRootContext-Zp3TmphN.js";import"./composite-A_bH19bq.js";import"./svgIconContainer-BDwZKmGj.js";import"./PdfViewerSearchBar-8ebMjpja.js";import"./chevron-up-tt3GlSTY.js";import"./chevron-down-BGjb3XaZ.js";import"./cross-B5gOJ5k8.js";import"./PdfViewerSidebar-CQ2wKK4N.js";import"./index-H9AGIUUX.js";import"./index-CYUJLH8p.js";import"./index-C4JTvluE.js";import"./PdfViewerToolbar-DD0SynnK.js";import"./Button-D6FXTgGy.js";import"./chevron-right-60hkAWPl.js";import"./Input-DZ_dZ4XX.js";import"./search-3AANI0BG.js";import"./spin-CTF66-hP.js";import"./error-WiBmvjTj.js";import"./withOsdkMetrics-CsIC7rEQ.js";import"./makeExternalStore-BfMKfAmM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
