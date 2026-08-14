import{j as r,M as s}from"./iframe-ZQnTw6Mu.js";import{P as p}from"./pdf-viewer-FW8Lgj4z.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C1f7qBSD.js";import"./preload-helper-COwmt9io.js";import"./PdfViewer--MSBInfT.js";import"./index-Bak_kxpO.js";import"./BasePdfViewer-Clq1LWd2.js";import"./BasePdfViewer.module.css-nZy5Q8G-.js";import"./PdfViewerAnnotationLayer-77geOjqe.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B_yNOoxu.js";import"./PdfViewerOutlineSidebar-CPqGIU61.js";import"./PdfViewerSidebarHeader-BVnWupgJ.js";import"./useBaseUiId-Av3ESRn4.js";import"./useControlled-BApUdZQ6.js";import"./CompositeRoot-DTXUWK5D.js";import"./CompositeItem-agXPXgTu.js";import"./ToolbarRootContext-DbSl-Ybu.js";import"./composite-CNYNMU2K.js";import"./svgIconContainer-zMynHcXT.js";import"./PdfViewerSearchBar-BsJ79FvE.js";import"./chevron-up-Sdns-Xnx.js";import"./chevron-down-BYkOWi_f.js";import"./cross-dvjzW6Ys.js";import"./PdfViewerSidebar-5T3p1FbK.js";import"./index-BKq3a1zJ.js";import"./index-Ik5TkMWF.js";import"./index-Bf52DBTe.js";import"./PdfViewerToolbar-Crm7MZOj.js";import"./Button-kYFmJJeP.js";import"./chevron-right-Cf08VcA0.js";import"./Input-BQqVIR5S.js";import"./search-BcJ2_wX2.js";import"./spin-AVzvQmf-.js";import"./error-BXfejV6f.js";import"./withOsdkMetrics-CrtXH3Cf.js";import"./makeExternalStore-BK88dgnr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
