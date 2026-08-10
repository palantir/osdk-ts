import{j as r,M as s}from"./iframe-DOeAYoRk.js";import{P as p}from"./pdf-viewer-Di1aRoBB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bdw6awXe.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-1q1UhHJ6.js";import"./index-C8enkHHH.js";import"./PdfViewer-C35w8MNk.js";import"./PdfViewer.module.css-Cpf4y6zc.js";import"./PdfViewerAnnotationLayer-C6voeC68.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cmz00WD5.js";import"./PdfViewerOutlineSidebar-CCHodAZ3.js";import"./PdfViewerSidebarHeader-CRHb3wGs.js";import"./useBaseUiId-CqKYfNUG.js";import"./useControlled-4ALZ6JWG.js";import"./CompositeRoot-B99G3AGp.js";import"./CompositeItem-DpuZl7_I.js";import"./ToolbarRootContext-DZ03LuRT.js";import"./composite-CxfEfgAE.js";import"./svgIconContainer-4JA-55AY.js";import"./PdfViewerSearchBar-wcMYAdD2.js";import"./chevron-up-caZa6IT7.js";import"./chevron-down-CKxHpqTt.js";import"./cross-CTQfiCoc.js";import"./PdfViewerSidebar-BbMA4nw7.js";import"./index-bOvw0pIt.js";import"./index-jM1sW0ik.js";import"./index-C3Zqf3YM.js";import"./PdfViewerToolbar-UNSAqDf2.js";import"./Button-Cdun-kQv.js";import"./chevron-right-MFrgGv5z.js";import"./Input-oDyylqSn.js";import"./search-SpwpHeSC.js";import"./spin-C1bIMUii.js";import"./error-DvFfN3ld.js";import"./withOsdkMetrics-CP1ydFVJ.js";import"./makeExternalStore-DjKzDLfr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
