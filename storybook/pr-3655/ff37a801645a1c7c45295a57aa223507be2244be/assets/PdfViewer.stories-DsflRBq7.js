import{j as r,M as s}from"./iframe-DWIQQc1o.js";import{P as p}from"./pdf-viewer-DlYoksBn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C3-H45mW.js";import"./preload-helper-E6GNJgXQ.js";import"./PdfRenderer-CCKPdKKt.js";import"./index-Dko6AC1_.js";import"./PdfViewer-B70DMRr4.js";import"./PdfViewer.module.css-DiGypPeK.js";import"./PdfViewerAnnotationLayer-CzFV9hbh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-VQzmiwgu.js";import"./PdfViewerOutlineSidebar-O2J1EJXY.js";import"./PdfViewerSidebarHeader-DplQ1Hs_.js";import"./useBaseUiId-CdoOGcfY.js";import"./useControlled-9pXM-sJL.js";import"./CompositeRoot-B_r6X21e.js";import"./CompositeItem-kMm1BSnS.js";import"./ToolbarRootContext-CqAlJbED.js";import"./composite-BEvibf3m.js";import"./svgIconContainer-DkuZeZGf.js";import"./PdfViewerSearchBar-CQqJi1Zz.js";import"./chevron-up-IRUtBIvE.js";import"./chevron-down-CHkq8C0c.js";import"./cross-Bx1_ZWdV.js";import"./PdfViewerSidebar-4Ey1ksU5.js";import"./index-CLKrzqd-.js";import"./index-S1zUj8ZB.js";import"./index-DYvmvnyQ.js";import"./PdfViewerToolbar-Cvbsb_iI.js";import"./Button-DvrZcAky.js";import"./chevron-right-DAKkWRun.js";import"./Input-C_cv6YYM.js";import"./search-tetJrjI4.js";import"./spin-BvWbXApg.js";import"./error-D3MaX7u3.js";import"./withOsdkMetrics-PMyDQr0x.js";import"./makeExternalStore-CYACmAN7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
