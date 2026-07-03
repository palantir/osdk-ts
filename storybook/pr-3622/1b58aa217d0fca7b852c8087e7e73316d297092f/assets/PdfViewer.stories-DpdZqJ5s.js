import{j as r,M as s}from"./iframe-CBVDd2K9.js";import{P as p}from"./pdf-viewer-qTgHlnA2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CizsXQlg.js";import"./preload-helper-CeHTi67z.js";import"./PdfRenderer-B-KCnY3W.js";import"./index-CgSNX0NI.js";import"./PdfViewer-C687VTtx.js";import"./PdfViewer.module.css-D_m3Vssk.js";import"./PdfViewerAnnotationLayer-K1q-sTrl.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CDj8oMtE.js";import"./PdfViewerOutlineSidebar-Di2dMvoq.js";import"./PdfViewerSidebarHeader-DOfVcjRX.js";import"./useBaseUiId-H6sNVlNE.js";import"./useControlled-CQcpQ9pv.js";import"./CompositeRoot-vlGHXcd2.js";import"./CompositeItem-BaJfhb8h.js";import"./ToolbarRootContext-BsGBS5zG.js";import"./composite-CUsRZRAT.js";import"./svgIconContainer-C12LQMwY.js";import"./PdfViewerSearchBar-C2M_I39j.js";import"./chevron-up-DyOK4gM8.js";import"./chevron-down-DmgPtBG8.js";import"./cross-MJj7YzFz.js";import"./PdfViewerSidebar-COFjPVZw.js";import"./index-DHSgCQOV.js";import"./index-kMiFdZDZ.js";import"./index-DdaPLHRE.js";import"./PdfViewerToolbar-CIkX5Auk.js";import"./Button-UqzeAcIG.js";import"./chevron-right-DDlP1RXC.js";import"./Input-PTyNua65.js";import"./search-MUd7770Y.js";import"./spin-CsYtnDak.js";import"./error-SgDVKvo4.js";import"./withOsdkMetrics-BVtY-Trc.js";import"./makeExternalStore-CP8n70BA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
