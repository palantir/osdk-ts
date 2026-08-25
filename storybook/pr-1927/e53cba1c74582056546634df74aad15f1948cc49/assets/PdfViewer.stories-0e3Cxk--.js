import{j as r,M as s}from"./iframe-YwePy6Na.js";import{P as p}from"./pdf-viewer-VC7lhg-d.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-MmDKqUoY.js";import"./preload-helper-C5O8HAF_.js";import"./PdfViewer-O3d84SF7.js";import"./index-kDdf5Tk2.js";import"./BasePdfViewer-CVHmZxBY.js";import"./BasePdfViewer.module.css-B06hUnIB.js";import"./PdfViewerAnnotationLayer-yqdrMPIG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dkjl_N8m.js";import"./PdfViewerOutlineSidebar-Dic4zlM1.js";import"./PdfViewerSidebarHeader-C9WbrAWq.js";import"./useBaseUiId-vveaqpRL.js";import"./useControlled-CXJ0FOIB.js";import"./CompositeRoot-Dr2o3X91.js";import"./CompositeItem-DwKpE3E9.js";import"./ToolbarRootContext-IvyHUIol.js";import"./composite-BvfYu_Ep.js";import"./svgIconContainer-nKGCa_Yw.js";import"./PdfViewerSearchBar-DuteYarI.js";import"./chevron-up-BDKaQzNB.js";import"./chevron-down-APdhRSd1.js";import"./cross-Y-lq_61F.js";import"./PdfViewerSidebar-LFFMjk0t.js";import"./index-B8BnOK3F.js";import"./index-B-58BhWJ.js";import"./index-Y7QOpJkL.js";import"./PdfViewerToolbar-GQ2TVmR4.js";import"./Button-CajACsUP.js";import"./chevron-right-rN8Fog2X.js";import"./Input-BbXslpL4.js";import"./search-CkQaqOfS.js";import"./spin-BClGME2i.js";import"./error-BpwHZdni.js";import"./withOsdkMetrics-CdgeYRWr.js";import"./makeExternalStore-BDW_RQe5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
